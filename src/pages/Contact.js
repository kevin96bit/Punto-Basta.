import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  // CAPTCHA
  const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 9000) + 1000);
  const [captchaInput, setCaptchaInput] = useState("");

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

    const cleanName = DOMPurify.sanitize(form.name, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
    const cleanEmail = DOMPurify.sanitize(form.email, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
    const cleanMessage = DOMPurify.sanitize(form.message, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
    const cleanCaptchaInput = DOMPurify.sanitize(captchaInput, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();

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

    console.log("Sanitized form data:", { name: cleanName, email: cleanEmail, message: cleanMessage });

    setStatus({ type: "success", text: t("contact.messageSent") });
    setForm({ name: "", email: "", message: "" });
    regenerateCaptcha();
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
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
            <p
              style={{
                color: "#4B0082",
                fontWeight: "bold",
                margin: 0,
                fontSize: "1.5rem",
                transition: "transform 0.2s, color 0.2s",
                cursor: "pointer"
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
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#FF66B2";
                e.currentTarget.style.backgroundColor = "transparent";
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

          {/* Info CAPTCHA */}
          <small style={{ display: "block", color: "#888", textAlign: "center" }}>
            {t("contact.captchaInfo")}
          </small>
        </Form.Group>

        <Row className="mt-3">
          <Col>
            <Button type="submit" variant="primary" aria-label={t("contact.send")}>
              {t("contact.send")}
            </Button>
          </Col>
          <Col className="text-end">
            <Button variant="primary" as={Link} to="/">
              {t("product.continueBrowsing", "Continua a guardare")}
            </Button>
          </Col>
        </Row>
      </Form>

      {status && <Alert variant={status.type} className="mt-3">{status.text}</Alert>}
    </Container>
  );
}
