import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProductDetail from './pages/ProductDetail';
import DisclaimerBanner from './components/DisclaimerBanner';
import './i18n';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* SEO globale */}
      <Helmet>
        <title>Punto&Basta — Creazioni artigianali uniche</title>
        <meta
          name="description"
          content="Scopri borse fatte a mano all’uncinetto e altre creazioni artigianali. Acquista direttamente tramite Vinted."
        />
      </Helmet>

      <NavbarComp />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/contattaci" element={<Contact />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          {/* Aggiornato per usare lo slug SEO-friendly */}
          <Route path="/product/:slug" element={<ProductDetail />} />
          {/* Fallback per rotte non trovate */}
          <Route path="*" element={<p>Pagina non trovata</p>} />
        </Routes>
      </main>

      <Footer />

      {/* Banner disclaimer */}
      <DisclaimerBanner />
    </div>
  );
}

export default App;
