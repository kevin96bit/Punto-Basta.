import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traduzioni
const resources = {
  // ITALIANO
  it: {
    translation: {
      navbar: {
        home: "Home",
        about: "Chi siamo",
        contact: "Contattaci",
        privacy: "Privacy Policy",
      },
      welcome: "Benvenuto nel nostro shop",
      discover:
        "Scopri i nostri prodotti demo. Clicca su una card per i dettagli.",
      disclaimer: {
        title: "Nota importante",
        p1: "Questo sito funge da vetrina dei prodotti. Tutte le transazioni avvengono direttamente su Vinted.",
        p2: "Acquisti e condizioni di vendita sono gestiti esclusivamente tramite Vinted.",
        p3: "Il sito non raccoglie, memorizza né condivide dati personali dei visitatori.",
        button: "Ho capito",
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
        metaDescription:
          "Hai domande o richieste sui nostri prodotti artigianali? Compila il modulo per contattarci direttamente.",
        enterCaptcha: "Inserisci il numero:",
        regenerate: "Rigenera",
        captchaPlaceholder: "Inserisci numero qui",
        captchaInfo:
          "Inserisci questo numero per confermare che non sei un robot.",
        invalidCaptcha: "Captcha non corretto",
        //
        backHome: "Torna alla Home",
        acceptConsent: "Ho letto e accetto", // testo vicino alla checkbox
        acceptPrivacyLink: "Privacy Policy", // link a parte
        errorAcceptConsent: "Per inviare il messaggio, è necessario confermare di aver letto e accettato la Privacy Policy",
      },
      privacy: {
        title: "Privacy Policy",
        updated: "Ultimo aggiornamento: Ottobre 2025",
        sections: {
          owner: {
            title: "1. Titolare del trattamento",
            text: "Il titolare del trattamento dei dati è Punto&Basta. Per qualsiasi richiesta o chiarimento puoi contattare l’indirizzo email: info@puntobasta.com",
          },
          data: {
            title: "2. Tipologia di dati raccolti",
            text: "Il sito raccoglie esclusivamente i dati inseriti volontariamente dagli utenti tramite il modulo di contatto:",
            list: ["Nome", "Indirizzo email", "Messaggio"],
          },
          purpose: {
            title: "3. Finalità del trattamento",
            text: "I dati vengono utilizzati esclusivamente per rispondere alle richieste inviate tramite il modulo di contatto. Non vengono utilizzati per finalità commerciali, pubblicitarie o di marketing.",
          },
          emailjs: {
            title: "4. Servizio esterno (EmailJS)",
            text: "L’invio dei dati è gestito dal servizio EmailJS, che agisce come responsabile esterno del trattamento ai sensi dell’art. 28 del GDPR. I dati vengono trasmessi tramite i server di EmailJS esclusivamente per inviare il messaggio e non vengono conservati o condivisi con terze parti.",
          },
          storage: {
            title: "5. Conservazione dei dati",
            text: "I dati trasmessi tramite il modulo di contatto non vengono salvati sul sito e sono conservati dai sistemi di EmailJS solo per il tempo necessario alla trasmissione del messaggio.",
          },
          rights: {
            title: "6. Diritti dell’utente",
            text: "Ai sensi degli articoli 15–22 del GDPR, l’utente ha il diritto di:",
            list: [
              "Accedere ai propri dati personali",
              "Chiederne la rettifica o la cancellazione",
              "Limitare o opporsi al loro trattamento",
              "Richiederne la portabilità",
              "Revocare il consenso in qualsiasi momento",
            ],
            contact:
              "Per esercitare tali diritti, puoi scrivere a: info@puntobasta.com",
          },
          legalBasis: {
            title: "7. Base giuridica del trattamento",
            text: "Il trattamento dei dati si basa sul consenso esplicito dell’utente, espresso tramite la checkbox presente nel modulo di contatto.",
          },
          cookies: {
            title: "8. Cookie",
            text: "Questo sito non utilizza cookie di profilazione o strumenti di tracciamento. Eventuali cookie tecnici sono impiegati esclusivamente per garantire il corretto funzionamento del sito.",
          },
          updates: {
            title: "9. Modifiche alla presente informativa",
            text: "La presente informativa può essere aggiornata periodicamente. Ti invitiamo a consultarla regolarmente per rimanere informato su eventuali modifiche.",
          },
          copyright: "Punto&Basta — Tutti i diritti riservati © {{year}}",
        },
      },
      product: {
        notFoundTitle: "Prodotto non trovato",
        notFoundText: "Il prodotto che stai cercando non esiste.",
        goBack: "Torna indietro",
        seoNote:
          "Acquista direttamente su Vinted tramite il nostro sito vetrina.",
        image: "immagine",
        buyVinted: "Acquista su Vinted",
        continueBrowsing: "Continua a guardare",
        viewDetails: "Vedi dettagli",
      },
      specs: {
        material: "Materiale",
        size: "Dimensioni",
        colors: "Colori",
      },
      footer: {
        text: "© {{year}} Punto&Basta. — Tutti i diritti riservati.",
        note: "Questo sito è una vetrina dei prodotti. Tutte le transazioni avvengono su Vinted.",
      },
    },
  },
  // INGLESE
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        contact: "Contact",
        privacy: "Privacy Policy",
      },
      welcome: "Welcome to our shop",
      discover: "Discover our demo products. Click on a card for details.",
      disclaimer: {
        title: "Important Notice",
        p1: "This website serves as a showcase for products. All transactions take place directly on Vinted.",
        p2: "Purchases and sales conditions are managed exclusively through Vinted.",
        p3: "The site does not collect, store or share visitors' personal data.",
        button: "Got it",
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
        metaDescription:
          "Have questions or requests about our handmade products? Fill out the form to contact us directly.",
        enterCaptcha: "Enter the number:",
        regenerate: "Regenerate",
        captchaPlaceholder: "Enter number here",
        captchaInfo: "Enter this number to confirm you are not a bot.",
        invalidCaptcha: "Invalid captcha",
        //
        backHome: "Back to Home",
        acceptConsent: "I have read and accept",
        acceptPrivacyLink: "Privacy Policy",
        errorAcceptConsent: "To send the message, you must confirm that you have read and accepted the Privacy Policy",
      },
      privacy: {
        title: "Privacy Policy",
        updated: "Last updated: October 2025",
        sections: {
          owner: {
            title: "1. Data Controller",
            text: "The data controller is Punto&Basta. For any requests or clarifications, you can contact: info@puntobasta.com",
          },
          data: {
            title: "2. Data Collected",
            text: "The site collects only data voluntarily provided by users via the contact form:",
            list: ["Name", "Email Address", "Message"],
          },
          purpose: {
            title: "3. Purpose of Processing",
            text: "Data is used exclusively to respond to requests sent via the contact form. It is not used for commercial, advertising, or marketing purposes.",
          },
          emailjs: {
            title: "4. External Service (EmailJS)",
            text: "Data submission is managed by EmailJS, which acts as an external data processor under Article 28 of the GDPR. Data is transmitted via EmailJS servers solely to send the message and is not stored or shared with third parties.",
          },
          storage: {
            title: "5. Data Retention",
            text: "Data submitted via the contact form is not stored on the site and is retained by EmailJS systems only for the time necessary to transmit the message.",
          },
          rights: {
            title: "6. User Rights",
            text: "Under Articles 15–22 of the GDPR, users have the right to:",
            list: [
              "Access their personal data",
              "Request correction or deletion",
              "Restrict or object to processing",
              "Request portability",
              "Withdraw consent at any time",
            ],
            contact:
              "To exercise these rights, you can contact: info@puntobasta.com",
          },
          legalBasis: {
            title: "7. Legal Basis",
            text: "Data processing is based on the user's explicit consent, given via the checkbox in the contact form.",
          },
          cookies: {
            title: "8. Cookies",
            text: "This site does not use profiling cookies or tracking tools. Any technical cookies are used solely to ensure proper site functionality.",
          },
          updates: {
            title: "9. Updates",
            text: "This privacy policy may be updated periodically. Please review it regularly to stay informed of any changes.",
          },
          copyright: "Punto&Basta — All rights reserved © {{year}}",
        },
      },
      product: {
        notFoundTitle: "Product not found",
        notFoundText: "The product you are looking for does not exist.",
        goBack: "Go back",
        seoNote: "Buy directly on Vinted through our showcase site.",
        image: "image",
        buyVinted: "Buy on Vinted",
        continueBrowsing: "Continue browsing",
        viewDetails: "View details",
      },
      specs: {
        material: "Material",
        size: "Size",
        colors: "Colors",
      },
      footer: {
        text: "© {{year}} Punto&Basta. — All rights reserved.",
        note: "This site serves as a showcase for products. All transactions take place on Vinted.",
      },
    },
  },
  // FRANCESE
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        privacy: "Politique de confidentialité",
      },
      welcome: "Bienvenue dans notre boutique",
      discover:
        "Découvrez nos produits de démonstration. Cliquez sur une carte pour les détails.",
      disclaimer: {
        title: "Avis important",
        p1: "Ce site sert de vitrine pour les produits. Toutes les transactions se font directement sur Vinted.",
        p2: "Les achats et les conditions de vente sont gérés exclusivement via Vinted.",
        p3: "Le site ne collecte, ne stocke ni ne partage les données personnelles des visiteurs.",
        button: "Compris",
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
        metaDescription:
          "Vous avez des questions ou des demandes concernant nos produits artisanaux ? Remplissez le formulaire pour nous contacter directement.",
        enterCaptcha: "Entrez le numéro :",
        regenerate: "Régénérer",
        captchaPlaceholder: "Entrez le numéro ici",
        captchaInfo:
          "Entrez ce numéro pour confirmer que vous n'êtes pas un robot.",
        invalidCaptcha: "Captcha invalide",
        //
        backHome: "Retour à l'accueil",
        acceptConsent: "J'ai lu et j'accepte",
        acceptPrivacyLink: "Politique de confidentialité",
        errorAcceptConsent: "Pour envoyer le message, vous devez confirmer que vous avez lu et accepté la Politique de confidentialité"
      },
      privacy: {
        title: "Politique de confidentialité",
        updated: "Dernière mise à jour : Octobre 2025",
        sections: {
          owner: {
            title: "1. Responsable du traitement",
            text: "Le responsable du traitement des données est Punto&Basta. Pour toute demande ou clarification, vous pouvez contacter : info@puntobasta.com",
          },
          data: {
            title: "2. Données collectées",
            text: "Le site ne collecte que les données volontairement fournies par les utilisateurs via le formulaire de contact :",
            list: ["Nom", "Adresse e-mail", "Message"],
          },
          purpose: {
            title: "3. Finalité du traitement",
            text: "Les données sont utilisées exclusivement pour répondre aux demandes envoyées via le formulaire de contact. Elles ne sont pas utilisées à des fins commerciales, publicitaires ou marketing.",
          },
          emailjs: {
            title: "4. Service externe (EmailJS)",
            text: "L’envoi des données est géré par le service EmailJS, qui agit en tant que responsable externe du traitement conformément à l’article 28 du RGPD. Les données sont transmises via les serveurs d’EmailJS uniquement pour envoyer le message et ne sont ni stockées ni partagées avec des tiers.",
          },
          storage: {
            title: "5. Conservation des données",
            text: "Les données soumises via le formulaire de contact ne sont pas stockées sur le site et sont conservées par les systèmes d’EmailJS uniquement pour le temps nécessaire à la transmission du message.",
          },
          rights: {
            title: "6. Droits de l'utilisateur",
            text: "Conformément aux articles 15 à 22 du RGPD, les utilisateurs ont le droit de :",
            list: [
              "Accéder à leurs données personnelles",
              "Demander la rectification ou la suppression",
              "Limiter ou s'opposer au traitement",
              "Demander la portabilité",
              "Retirer leur consentement à tout moment",
            ],
            contact:
              "Pour exercer ces droits, vous pouvez écrire à : info@puntobasta.com",
          },
          legalBasis: {
            title: "7. Base légale",
            text: "Le traitement des données repose sur le consentement explicite de l'utilisateur, donné via la case à cocher dans le formulaire de contact.",
          },
          cookies: {
            title: "8. Cookies",
            text: "Ce site n'utilise pas de cookies de profilage ni d'outils de suivi. Les cookies techniques éventuels sont utilisés uniquement pour garantir le bon fonctionnement du site.",
          },
          updates: {
            title: "9. Modifications de la présente politique",
            text: "Cette politique de confidentialité peut être mise à jour périodiquement. Veuillez la consulter régulièrement pour rester informé de toute modification.",
          },
          copyright: "Punto&Basta — Tous droits réservés © {{year}}",
        },
      },
      product: {
        notFoundTitle: "Produit non trouvé",
        notFoundText: "Le produit que vous recherchez n'existe pas.",
        goBack: "Retour",
        seoNote: "Achetez directement sur Vinted via notre site vitrine.",
        image: "image",
        buyVinted: "Acheter sur Vinted",
        continueBrowsing: "Continuer à parcourir",
        viewDetails: "Voir les détails",
      },
      specs: {
        material: "Matériau",
        size: "Taille",
        colors: "Couleurs",
      },
      footer: {
        text: "© {{year}} Punto&Basta. — Tous droits réservés.",
        note: "Ce site sert de vitrine pour les produits. Toutes les transactions se font sur Vinted.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "it",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
