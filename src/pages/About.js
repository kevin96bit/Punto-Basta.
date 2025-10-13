import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <Container className="py-5">
      {/* SEO */}
      <Helmet>
        <title>Chi siamo — Punto&Basta</title>
        <meta
          name="description"
          content="Scopri chi siamo e quali sono i valori e la missione del nostro piccolo laboratorio di creazioni artigianali."
        />
      </Helmet>

      <h1 className="mb-3">Chi siamo</h1>
      <p className="text-muted mb-5">
        Siamo un piccolo laboratorio artigianale che crea borse fatte a mano all’uncinetto e altri prodotti unici. 
        Ci piace imparare, sperimentare e condividere le nostre creazioni con chi ama l’artigianato.
      </p>

      <Row className="g-4">
        <Col md={6}>
          <Card className="p-4 h-100 shadow-sm" style={{ borderColor: 'var(--light-primary)' }}>
            <h2 className="mb-3" style={{ color: 'var(--primary)' }}>La nostra missione</h2>
            <p className="text-muted">
              Creare prodotti unici, di qualità e fatti a mano, condividendo passione e cura per ogni dettaglio.
            </p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 h-100 shadow-sm" style={{ borderColor: 'var(--light-primary)' }}>
            <h2 className="mb-3" style={{ color: 'var(--primary)' }}>I nostri valori</h2>
            <p className="text-muted">
              Passione per l’artigianato, trasparenza nelle vendite e rispetto per i nostri clienti e l’ambiente.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Bottone per tornare alla home */}
      <div className="mt-4 text-center">
        <Button 
          as={Link} 
          to="/" 
          className="btn-primary" 
          aria-label="Torna alla home"
        >
          Torna alla home
        </Button>
      </div>
    </Container>
  );
}
