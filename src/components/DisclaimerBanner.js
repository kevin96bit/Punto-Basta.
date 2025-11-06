import React, { useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function DisclaimerBanner() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(true);
  const [language, setLanguage] = useState(
    i18n.language.slice(0, 2).toUpperCase()
  );

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setLanguage(lang);
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      backdrop="static"
      keyboard={false}
      aria-labelledby="disclaimer-title"
      role="alertdialog"
    >
      {/* Titolo centrato */}
      <Modal.Header
        style={{
          backgroundColor: "var(--light-primary)",
          color: "var(--text-dark)",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Modal.Title id="disclaimer-title" style={{ margin: 0 }}>
          {t("disclaimer.title")}
        </Modal.Title>
      </Modal.Header>

      {/* Corpo del modal */}
      <Modal.Body
        style={{
          backgroundColor: "var(--bg-light)",
          color: "var(--text-dark)",
          textAlign: "center",
          lineHeight: "1.6",
        }}
        aria-live="polite"
      >
        <p>{t("disclaimer.p1")}</p>
        <p>{t("disclaimer.p2")}</p>
        <p>{t("disclaimer.p3")}</p>
      </Modal.Body>

      {/* Footer: bottone "Ho capito" e dropdown lingua centrati */}
      <Modal.Footer
        style={{
          backgroundColor: "var(--bg-light)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          onClick={() => setShow(false)}
          style={{
            backgroundColor: "var(--primary)",
            borderColor: "var(--primary)",
          }}
        >
          {t("disclaimer.button")}
        </Button>

        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            style={{
              backgroundColor: "#fff",
              color: "var(--primary)", // rosa
              border: "1px solid var(--primary)",
            }}
          >
            {language}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleChangeLanguage("IT")}>
              Italiano
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleChangeLanguage("EN")}>
              English
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleChangeLanguage("FR")}>
              Français
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Footer>
    </Modal>
  );
}
