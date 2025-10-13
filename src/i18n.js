import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traduzioni
const resources = {
  it: {
    translation: {
      navbar: {
        home: "Home",
        about: "Chi siamo",
        contact: "Contattaci"
      },
      welcome: "Benvenuto nel nostro shop",
      discover: "Scopri i nostri prodotti demo. Clicca su una card per i dettagli.",
      disclaimer: {
        title: "Nota importante",
        p1: "Questo sito funge da vetrina dei prodotti. Tutte le transazioni avvengono direttamente su Vinted.",
        p2: "Acquisti e condizioni di vendita sono gestiti esclusivamente tramite Vinted.",
        p3: "Il sito non raccoglie, memorizza né condivide dati personali dei visitatori.",
        button: "Ho capito"
      },
      contact: {
        title: "Contattaci",
        subtitle: "Hai domande? Compila il modulo qui sotto.",
        name: "Nome",
        email: "Email",
        message: "Messaggio",
        send: "Invia",
        fillAllFields: "Compila tutti i campi.",
        messageSent: "Il messaggio è stato inviato con successo!",
        metaDescription: "Hai domande o richieste sui nostri prodotti artigianali? Compila il modulo per contattarci direttamente.",
        enterCaptcha: "Inserisci il numero:",
        regenerate: "Rigenera",
        captchaPlaceholder: "Inserisci numero qui",
        captchaInfo: "Inserisci questo numero per confermare che non sei un robot.",
        invalidCaptcha: "Captcha non corretto"
      },
      product: {
        notFoundTitle: "Prodotto non trovato",
        notFoundText: "Il prodotto che stai cercando non esiste.",
        goBack: "Torna indietro",
        seoNote: "Acquista direttamente su Vinted tramite il nostro sito vetrina.",
        image: "immagine",
        buyVinted: "Acquista su Vinted",
        continueBrowsing: "Continua a guardare",
        viewDetails: "Vedi dettagli"
      },
      specs: {
        material: "Materiale",
        size: "Dimensioni",
        colors: "Colori"
      },
      footer: {
        text: "© {{year}} Punto&Basta. — Tutti i diritti riservati.",
        note: "Questo sito è una vetrina dei prodotti. Tutte le transazioni avvengono su Vinted."
      }
    }
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        contact: "Contact"
      },
      welcome: "Welcome to our shop",
      discover: "Discover our demo products. Click on a card for details.",
      disclaimer: {
        title: "Important Notice",
        p1: "This website serves as a showcase for products. All transactions take place directly on Vinted.",
        p2: "Purchases and sales conditions are managed exclusively through Vinted.",
        p3: "The site does not collect, store or share visitors' personal data.",
        button: "Got it"
      },
      contact: {
        title: "Contact Us",
        subtitle: "Have questions? Fill out the form below.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        fillAllFields: "Please fill in all fields.",
        messageSent: "Message sent successfully!",
        metaDescription: "Have questions or requests about our handmade products? Fill out the form to contact us directly.",
        enterCaptcha: "Enter the number:",
        regenerate: "Regenerate",
        captchaPlaceholder: "Enter number here",
        captchaInfo: "Enter this number to confirm you are not a bot.",
        invalidCaptcha: "Invalid captcha"
      },
      product: {
        notFoundTitle: "Product not found",
        notFoundText: "The product you are looking for does not exist.",
        goBack: "Go back",
        seoNote: "Buy directly on Vinted through our showcase site.",
        image: "image",
        buyVinted: "Buy on Vinted",
        continueBrowsing: "Continue browsing",
        viewDetails: "View details"
      },
      specs: {
        material: "Material",
        size: "Size",
        colors: "Colors"
      },
      footer: {
        text: "© {{year}} Punto&Basta. — All rights reserved.",
        note: "This site serves as a showcase for products. All transactions take place on Vinted."
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact"
      },
      welcome: "Bienvenue dans notre boutique",
      discover: "Découvrez nos produits de démonstration. Cliquez sur une carte pour les détails.",
      disclaimer: {
        title: "Avis important",
        p1: "Ce site sert de vitrine pour les produits. Toutes les transactions se font directement sur Vinted.",
        p2: "Les achats et les conditions de vente sont gérés exclusivement via Vinted.",
        p3: "Le site ne collecte, ne stocke ni ne partage les données personnelles des visiteurs.",
        button: "Compris"
      },
      contact: {
        title: "Contactez-nous",
        subtitle: "Des questions ? Remplissez le formulaire ci-dessous.",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        fillAllFields: "Veuillez remplir tous les champs.",
        messageSent: "Message envoyé avec succès !",
        metaDescription: "Vous avez des questions ou des demandes concernant nos produits artisanaux ? Remplissez le formulaire pour nous contacter directement.",
        enterCaptcha: "Entrez le numéro :",
        regenerate: "Régénérer",
        captchaPlaceholder: "Entrez le numéro ici",
        captchaInfo: "Entrez ce numéro pour confirmer que vous n'êtes pas un robot.",
        invalidCaptcha: "Captcha invalide"
      },
      product: {
        notFoundTitle: "Produit non trouvé",
        notFoundText: "Le produit que vous recherchez n'existe pas.",
        goBack: "Retour",
        seoNote: "Achetez directement sur Vinted via notre site vitrine.",
        image: "image",
        buyVinted: "Acheter sur Vinted",
        continueBrowsing: "Continuer à parcourir",
        viewDetails: "Voir les détails"
      },
      specs: {
        material: "Matériau",
        size: "Taille",
        colors: "Couleurs"
      },
      footer: {
        text: "© {{year}} Punto&Basta. — Tous droits réservés.",
        note: "Ce site sert de vitrine pour les produits. Toutes les transactions se font sur Vinted."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'it',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
