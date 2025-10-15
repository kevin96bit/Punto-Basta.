import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "../styles.css";

export default function NavbarComp() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language.toUpperCase());
  const [expanded, setExpanded] = useState(false); // controlla apertura/chiusura del menu

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang.toUpperCase());
    console.log(`Lingua selezionata: ${lang}`);
    setExpanded(false); // ✅ chiude il menu dopo aver cambiato lingua
  };

  const handleNavClick = () => {
    setExpanded(false); // ✅ chiude il menu dopo aver cliccato su un link
  };

  return (
    <Navbar
      className="navbar-custom"
      variant="dark"
      expand="lg"
      sticky="top"
      aria-label="Navigazione principale"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        {/* Brand con link alla home e social */}
        <Navbar.Brand className="d-flex align-items-center">
          <Link
            to="/"
            className="navbar-brand-custom"
            style={{ fontSize: "1.25rem", lineHeight: 1, textDecoration: "none", color: "var(--text-dark)" }}
            onClick={handleNavClick}
          >
            Punto&Basta.
            <FaInstagram
              size={23}
              className="ms-2 social-icon"
              style={{ cursor: "pointer", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C13584")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.instagram.com/puntoebasta93?igsh=MTc5bG5tYXJ3ZXBiMg==", "_blank");
              }}
            />
            <SiTiktok
              size={21}
              className="ms-2 social-icon"
              style={{ cursor: "pointer", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C13584")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.tiktok.com/@mariaandriulo928?_t=ZN-90URmOp3XzX&_r=1", "_blank");
              }}
            />
          </Link>
        </Navbar.Brand>

        {/* Menu */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" end onClick={handleNavClick}>
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/chi-siamo" onClick={handleNavClick}>
              {t("navbar.about")}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contattaci" onClick={handleNavClick}>
              {t("navbar.contact")}
            </Nav.Link>

            {/* Dropdown lingua */}
            <Dropdown className="ms-3">
              <Dropdown.Toggle
                variant="outline-light"
                size="sm"
                aria-label="Seleziona lingua"
              >
                {language}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleChangeLanguage("it")}>
                  Italiano
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleChangeLanguage("en")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleChangeLanguage("fr")}>
                  Français
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
