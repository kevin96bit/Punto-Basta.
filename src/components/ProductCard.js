import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductCard({ product }) {
  const { t } = useTranslation();

  return (
    <Card className="h-100 product-card position-relative">
      
      {/* ------------------------------
     Banner condizionale per prodotti speciali "NEW"
     Decommenta le righe sottostanti per attivarlo
     Per coinvolgere più prodotti basta aggiungere || product.id === <ID>
------------------------------- */}
      
{/* {(product.id === 1 || product.id === 2) && (
  <span className="badge new position-absolute top-0 start-0 m-2">
    NEW
  </span>
)} */}


      {/* ------------------------------
     Banner condizionale per prodotti speciali "BESTSELLER"
     Decommenta le righe sottostanti per attivarlo
     Per coinvolgere più prodotti basta aggiungere || product.id === <ID>
------------------------------- */}
      
{/* {(product.id === 3 || product.id === 4) && (
  <span className="badge bestseller position-absolute top-0 start-0 m-2">
    BESTSELLER
  </span>
)} */}

{/* ------------------------------
     Banner condizionale per prodotti speciali "SOLD OUT"
     Decommenta le righe sottostanti per attivarlo
     Per coinvolgere più prodotti basta aggiungere || product.id === <ID>
------------------------------- */}
      
{/* {(product.id === 5 || product.id === 6) && (
  <span className="badge soldout position-absolute top-0 start-0 m-2">
    SOLD OUT
  </span>
)} */}


      {/* Link con slug per SEO */}
      <Link
        to={`/product/${product.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card.Img
          variant="top"
          src={product.img}
          alt={product.title}
          style={{ height: 200, objectFit: "cover" }}
        />
      </Link>

      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "1.05rem" }}>
          <Link
            to={`/product/${product.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {product.title}
          </Link>
        </Card.Title>

        {/* Prezzo con classe personalizzata */}
        <div className="product-price">{product.price}</div>

        <Card.Text className="text-muted flex-grow-1">
          {product.shortDesc}
        </Card.Text>

        {/* Bottone rosa personalizzato */}
        <div className="d-grid">
          <Button
            as={Link}
            to={`/product/${product.slug}`}
            className="btn-primary"
          >
            {t("product.viewDetails", "Vedi dettagli")}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
