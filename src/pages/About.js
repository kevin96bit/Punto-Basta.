import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <Container className="py-5">
      {/* SEO */}
      <Helmet>
        <title>Chi siamo — Punto&Basta</title>
        <meta
          name="description"
          content="Scopri la storia, la passione e i valori dietro il marchio Punto&Basta. Creazioni artigianali uniche e realizzate con amore."
        />
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
          Chi siamo
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
          <div className="mb-2">
            <img
              src="/logo-light.png" // 🔹 Sostituisci con un'immagine reale
              alt="Punto & Basta Logo"
              style={{
                width: "300px",
                maxWidth: "70%",
                height: "auto",
                display: "block",
                margin: "0 auto 1rem auto",
              }}
            />
          </div>
        </Col>

        <Col md={6} className="text-center">
          <h3
            style={{
              color: "#C13584",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            La nostra esperienza
          </h3>

          <hr
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#FF66B2",
              border: "none",
              margin: "10px auto 20px auto", // centra la linea
            }}
          />

          <p
            className="text-muted"
            style={{
              lineHeight: "1.8",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Dietro ogni creazione c’è la passione di una ragazza che, nel tempo
            libero, ama perdersi tra fili colorati e nuove ispirazioni. Con
            pazienza e curiosità, trasforma un semplice filo in qualcosa di
            unico, esplorando forme, texture e combinazioni di colori sempre
            diverse. Ciò che è nato come un passatempo si è evoluto in una vera
            forma d’arte, guidata dal desiderio di dare vita a creazioni fatte a
            mano che trasmettano calore, autenticità e personalità.
          </p>
        </Col>
      </Row>

      {/* Sezione secondaria */}
      <Row className="align-items-center">
        <Col md={6} className="order-2 order-md-1 text-center">
          <h3
            style={{
              color: "#C13584",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Il nostro approccio
          </h3>

          <hr
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#FF66B2",
              border: "none",
              margin: "10px auto 20px auto", // centra la linea sotto il titolo
            }}
          />

          <p
            className="text-muted"
            style={{
              lineHeight: "1.8",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Il mio approccio è semplice: trasformare la passione per l’uncinetto in un percorso di
            scoperta continua, dove ogni punto è un gesto di pazienza e
            creatività. Amo prendermi il tempo necessario per scegliere i
            materiali giusti, curare i dettagli e dare vita a oggetti che
            uniscono estetica e significato. Credo che la vera bellezza risieda
            nelle piccole imperfezioni, perché raccontano la storia di qualcosa
            fatto davvero a mano.
          </p>
        </Col>

        <Col md={6} className="text-center order-1 order-md-2 mb-4 mb-md-0">
          <div className="mb-2">
            <img
              src="/logo-light.png" // 🔹 Sostituisci con un'immagine del laboratorio o prodotto
              alt="Punto & Basta Logo"
              style={{
                width: "300px",
                maxWidth: "70%",
                height: "auto",
                display: "block",
                margin: "0 auto 1rem auto",
              }}
            />
          </div>
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
          Torna alla home
        </Button>
      </div>
    </Container>
  );
}
