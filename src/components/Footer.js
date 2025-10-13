import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer 
      className="bg-light-primary text-dark text-center py-3 border-top mt-auto" 
      role="contentinfo" 
      aria-label="Footer principale del sito"
    >
      <div className="container">
        {/* Copyright e anno */}
        <p className="mb-1 footer-text" itemProp="copyrightYear">
          {t('footer.text', { year })}
        </p>

        {/* Nota legale / disclaimer */}
        <p 
          className="mb-0 text-muted" 
          style={{ fontSize: '0.875rem' }}
          itemProp="description"
        >
          {t('footer.note')}
        </p>

        {/* Microdata nascosto per SEO */}
        <div style={{ display: 'none' }} itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Punto&Basta</span>
          <a href="https://www.vinted.it" itemProp="url">https://www.vinted.it</a>
        </div>
      </div>
    </footer>
  );
}
