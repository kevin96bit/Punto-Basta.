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
  const [consent, setConsent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // 🔹 CAPTCHA: immagini e codici
  const [captchaIndex, setCaptchaIndex] = useState(Math.floor(Math.random() * 10) + 1);
  const [captchaInput, setCaptchaInput] = useState("");

  const captchaCodes = {
    1: "3QEC4",
    2: "FB7S5",
    3: "ZP8EW",
    4: "8P5NV",
    5: "Q1NZV",
    6: "T3HV3",
    7: "RXDS6",
    8: "PILSI",
    9: "4IRLV",
    10: "W1PE4",
  };

  const regenerateCaptcha = () => {
    const newIndex = Math.floor(Math.random() * 10) + 1;
    setCaptchaIndex(newIndex);
    setCaptchaInput("");
  };

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

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
    if (cleanCaptchaInput.toUpperCase() !== captchaCodes[captchaIndex]) {
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

        {/* CAPTCHA con immagini */}
        <Form.Group className="mb-3" style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={`/captcha${captchaIndex}.png`}
              alt="Captcha"
              style={{
                width: "220px",
                height: "80px",
                objectFit: "contain",
                border: "2px solid #FF66B2",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(255, 102, 178, 0.3)",
              }}
            />

            <Form.Control
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder={t("contact.captchaPlaceholder")}
              style={{
                width: "200px",
                textAlign: "center",
                borderColor: "#FF66B2",
                marginTop: "8px",
                borderRadius: "6px",
              }}
            />

            <Button
              variant="outline"
              onClick={regenerateCaptcha}
              style={{
                backgroundColor: "transparent",
                borderColor: "#FF66B2",
                color: "#FF66B2",
                fontWeight: "500",
                marginTop: "8px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C13584")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FF66B2")}
            >
              {t("contact.regenerate")}
            </Button>

            <small style={{ color: "#888" }}>{t("contact.captchaInfo")}</small>
          </div>
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

        {/* Pulsanti invio e torna alla home */}
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
