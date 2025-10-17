import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 9000) + 1000);
  const [captchaInput, setCaptchaInput] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const regenerateCaptcha = () => {
    setCaptcha(Math.floor(Math.random() * 9000) + 1000);
    setCaptchaInput("");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!consent) {
      setStatus({ type: "danger", text: t("contact.errorAcceptConsent") });
      return;
    }

    const cleanName = DOMPurify.sanitize(form.name).trim();
    const cleanEmail = DOMPurify.sanitize(form.email).trim();
    const cleanMessage = DOMPurify.sanitize(form.message).trim();
    const cleanCaptchaInput = DOMPurify.sanitize(captchaInput).trim();

    if (!cleanName || !cleanEmail || !cleanMessage || !cleanCaptchaInput) {
      setStatus({ type: "danger", text: t("contact.fillAllFields") });
      return;
    }
    if (!isValidEmail(cleanEmail)) {
      setStatus({ type: "danger", text: t("contact.invalidEmail") });
      return;
    }
    if (parseInt(cleanCaptchaInput) !== captcha) {
      setStatus({ type: "danger", text: t("contact.invalidCaptcha") });
      regenerateCaptcha();
      return;
    }

    try {
      setIsSending(true);
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: cleanName, email: cleanEmail, message: cleanMessage },
        PUBLIC_KEY
      );

      console.log("Email inviata:", result.text);
      setStatus({ type: "success", text: t("contact.messageSent") });

      setForm({ name: "", email: "", message: "" });
      regenerateCaptcha();
      setConsent(false);
    } catch (error) {
      console.error("Errore nell'invio:", error);
      setStatus({ type: "danger", text: t("contact.errorSend") });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Container className="py-4">
      <Helmet>
        <title>{t("contact.title")} — Punto&Basta</title>
        <meta name="description" content={t("contact.metaDescription")} />
      </Helmet>

      <h1>{t("contact.title")}</h1>
      <p className="text-muted">{t("contact.subtitle")}</p>

      <Form onSubmit={handleSubmit} className="mt-3" noValidate>
        {/* Nome */}
        <Form.Group className="mb-3">
          <Form.Label>{t("contact.name")}</Form.Label>
          <Form.Control
            name="name"
            value={form.name}
            onChange={handleChange}
            aria-label={t("contact.name")}
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>{t("contact.email")}</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-label={t("contact.email")}
            required
          />
        </Form.Group>

        {/* Messaggio */}
        <Form.Group className="mb-3">
          <Form.Label>{t("contact.message")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            aria-label={t("contact.message")}
            required
          />
        </Form.Group>

        {/* CAPTCHA */}
        <Form.Group className="mb-3" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <p
              style={{
                color: "#4B0082",
                fontWeight: "bold",
                margin: 0,
                fontSize: "1.5rem",
                transition: "transform 0.2s, color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF66B2")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4B0082")}
            >
              {t("contact.enterCaptcha")}{" "}
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  display: "inline-block",
                  animation: "bounce 1s infinite",
                }}
              >
                {captcha}
              </span>
            </p>

            <Button
              onClick={regenerateCaptcha}
              style={{
                borderColor: "#FF66B2",
                color: "#FF66B2",
                backgroundColor: "transparent",
                height: "48px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#C13584";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#FF66B2";
              }}
            >
              {t("contact.regenerate")}
            </Button>
          </div>

          <Form.Control
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            style={{
              borderColor: "#FF66B2",
              borderRadius: "4px",
              padding: "4px",
              margin: "12px auto 4px auto",
              width: "200px",
              textAlign: "center",
            }}
            placeholder={t("contact.captchaPlaceholder")}
          />

          <small style={{ display: "block", color: "#888", textAlign: "center" }}>
            {t("contact.captchaInfo")}
          </small>
        </Form.Group>

        {/* Privacy */}
        <Form.Group controlId="privacyConsent" className="mb-3" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Form.Check
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              label={t("contact.acceptConsent")}
              style={{ margin: 0 }}
            />
            <Link
              to="/PrivacyPolicy"
              style={{ color: "#FF66B2", textDecoration: "underline" }}
            >
              {t("contact.acceptPrivacyLink", "Privacy Policy")}
            </Link>
          </div>
        </Form.Group>

        {/* Pulsanti invio e torna alla home vicini */}
        <div
          className="mt-4"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Pulsante invio */}
          <Button
            type="submit"
            disabled={isSending}
            style={{
              backgroundColor: "#FF66B2",
              borderColor: "#FF66B2",
              width: "200px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              transform: isSending ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            {isSending ? (
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  border: "3px solid #ffffff",
                  borderTop: "3px solid #4B0082",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            ) : (
              t("contact.send")
            )}
          </Button>

          {/* Pulsante torna alla home */}
          <Button
  as={Link}
  to="/"
  variant="primary"
  style={{
    backgroundColor: "#FF66B2",
    borderColor: "#FF66B2",
    width: "150px",
    height: "48px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C13584")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF66B2")}
>
  {t("contact.backHome")}
</Button>
        </div>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </Form>

      {status && (
        <Alert variant={status.type} className="mt-3">
          {status.text}
        </Alert>
      )}
    </Container>
  );
}
