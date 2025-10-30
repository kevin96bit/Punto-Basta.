import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Button, ListGroup } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import useProducts from "../data/products"; // ✅ import corretto

export default function ProductDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const products = useProducts(); // ✅ va QUI, dentro il componente

  const product = products.find((p) => p.slug === slug);
  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.img
  );

  if (!product) {
    return (
      <Container className="py-4">
        <h2>{t("product.notFoundTitle", "Prodotto non trovato")}</h2>
        <p>
          {t(
            "product.notFoundText",
            "Il prodotto che stai cercando non esiste."
          )}
        </p>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          {t("product.goBack", "Torna indietro")}
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Helmet>
        <title>{product.title} — Punto&Basta</title>
        <meta
          name="description"
          content={`${product.title}: ${product.shortDesc} ${t(
            "product.seoNote",
            "Acquista direttamente su Vinted tramite il nostro sito vetrina."
          )}`}
        />
      </Helmet>

      <Row>
        <Col md={6}>
          <Zoom>
            <Image src={mainImage} fluid rounded alt={product.title} />
          </Zoom>

          {product.images && product.images.length > 1 && (
            <div className="mt-3 d-flex gap-2">
              {product.images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  thumbnail
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => setMainImage(src)}
                  alt={`${product.title} - ${t("product.image", "immagine")} ${
                    idx + 1
                  }`}
                />
              ))}
            </div>
          )}
        </Col>

        <Col md={6}>
          <h1>{product.title}</h1>
          <h3 className="product-price">{product.price}</h3>
          <p className="lead">{product.description}</p>

          <ListGroup className="mb-3">
            {Object.entries(product.specs || {}).map(([key, value]) => (
              <ListGroup.Item
                key={key}
                className="d-flex justify-content-between align-items-center"
              >
                <strong>{t(`specs.${key}`, key)}</strong>
                <span>{value}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="d-flex gap-2">
            <Button
              variant="primary"
              onClick={() =>
                window.open(
                  "https://www.vinted.it/member/69734373-mariaandriulo",
                  "_blank"
                )
              }
            >
              {t("product.buyVinted", "Acquista su Vinted")}
            </Button>
            <Button variant="primary" as={Link} to="/">
              {t("product.continueBrowsing", "Continua a guardare")}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
