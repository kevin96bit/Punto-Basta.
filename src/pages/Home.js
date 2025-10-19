import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [langChanged, setLangChanged] = useState(0);

  // Aggiorna lo stato ogni volta che cambia lingua per refresh visivo
  useEffect(() => {
    const handleLanguageChange = () => setLangChanged((prev) => prev + 1);
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <Container className="py-4">
      {/* ✅ SEO con Helmet */}
      <Helmet>
        <title>{t("welcome")} — Punto&Basta</title>
        <meta name="description" content={t("discover")} />
      </Helmet>

      {/* ✅ Logo centrato orizzontalmente */}
      <div className="mb-1">
        <img
          src="/logo-light.png"
          alt="Punto & Basta Logo"
          style={{
            width: "250px",
            maxWidth: "80%",
            height: "auto",
            display: "block",
            margin: "0 auto 1rem auto", // ← centrato orizzontalmente
          }}
        />
      </div>

      <div className="text-center mb-4">
        <h1>{t("welcome")}</h1>
        <p className="text-muted">{t("discover")}</p>
      </div>

      <Row className="g-4">
        {products.map((p) => (
          <Col key={p.id} xs={12} sm={6} md={4}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
