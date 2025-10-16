import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <Container className="py-5">
      <Helmet>
        <title>{t("privacy.title")} — Punto&Basta</title>
        <meta name="description" content={t("contact.metaDescription")} />
      </Helmet>

      <Card
        style={{
          border: "1px solid #FF66B2",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(75, 0, 130, 0.15)",
          backgroundColor: "#fff",
        }}
      >
        <Card.Body style={{ color: "#333", lineHeight: "1.7" }}>
          <h1 style={{ color: "#4B0082", fontWeight: "bold" }}>
            {t("privacy.title")}
          </h1>
          <p style={{ color: "#888" }}>{t("privacy.updated")}</p>

          {Object.values(t("privacy.sections", { returnObjects: true })).map(
            (section, index) => {
              if (section.list) {
                return (
                  <div key={index}>
                    <h4 style={{ color: "#C13584", marginTop: "1.5rem" }}>
                      {section.title}
                    </h4>
                    <p>{section.text}</p>
                    <ul>
                      {section.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    {section.contact && (
                      <p>
                        {section.contact.split("info@puntobasta.com")[0]}
                        <a
                          href="mailto:info@puntobasta.com"
                          style={{ color: "#FF66B2" }}
                        >
                          info@puntobasta.com
                        </a>
                      </p>
                    )}
                  </div>
                );
              }
              return (
                <div key={index}>
                  <h4 style={{ color: "#C13584", marginTop: "1.5rem" }}>
                    {section.title}
                  </h4>
                  <p>{section.text}</p>
                </div>
              );
            }
          )}

          {/* Bottone Torna alla Home centrato */}
          <div className="d-flex justify-content-center mt-4 mb-4">
  <Button variant="primary" as={Link} to="/">
    {t("product.continueBrowsing", "Continua a guardare")}
  </Button>
</div>


          {/* Copyright centrato */}
          <p
            className="text-center"
            style={{ color: "#4B0082", fontWeight: "bold", marginTop: "2rem" }}
          >
            {t('footer.text', { year: new Date().getFullYear() })}
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
