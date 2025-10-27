import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Container className="py-5">
      {/* SEO */}
      <Helmet>
        <title>{t("about.title")} — Punto&Basta</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Helmet>

      {/* Titolo principale */}
      <div className="text-center mb-5">
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            color: "#4B0082",
          }}
        >
          {t("about.title")}
        </h1>
        <hr
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: "#FF66B2",
            border: "none",
            margin: "10px auto",
          }}
        />
      </div>

      {/* Sezione principale */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <img
            src="/fili2.jpg"
            alt="Punto & Basta Logo"
            style={{
              width: "200vh",
              maxWidth: "70%",
              height: "auto",
              display: "block",
              margin: "0 auto 1rem auto",
              borderRadius: "12px",
              
            }}
          />
        </Col>

        <Col md={6} className="text-center">
          <h3 style={{ color: "#C13584", fontWeight: "bold" }}>
            {t("about.experienceTitle")}
          </h3>

          <hr
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#FF66B2",
              border: "none",
              margin: "10px auto 20px auto",
            }}
          />

          <p
            className="text-muted"
            style={{ lineHeight: "1.8", textAlign: "center" }}
          >
            {t("about.experienceText")}
          </p>
        </Col>
      </Row>

      {/* Sezione secondaria */}
      <Row className="align-items-center">
        <Col md={6} className="order-2 order-md-1 text-center">
          <h3 style={{ color: "#C13584", fontWeight: "bold" }}>
            {t("about.approachTitle")}
          </h3>

          <hr
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#FF66B2",
              border: "none",
              margin: "10px auto 20px auto",
            }}
          />

          <p
            className="text-muted"
            style={{ lineHeight: "1.8", textAlign: "center" }}
          >
            {t("about.approachText")}
          </p>
        </Col>

        <Col md={6} className="text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src="/fili-uncinetto.jpg"
            alt="Punto & Basta Logo"
            style={{
              width: "400px",
              maxWidth: "70%",
              height: "auto",
              display: "block",
              margin: "0 auto 1rem auto",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(75, 0, 130, 0.2)", // ombra leggera
            }}
          />
        </Col>
      </Row>

      {/* Pulsante Torna alla Home */}
      <div className="text-center mt-5">
        <Button
          as={Link}
          to="/"
          style={{
            backgroundColor: "#FF66B2",
            borderColor: "#FF66B2",
            padding: "10px 24px",
            borderRadius: "8px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#C13584")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF66B2")
          }
        >
          {t("about.backHome")}
        </Button>
      </div>
    </Container>
  );
}
