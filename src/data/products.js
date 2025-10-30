import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import productsIT from "./products.it";
import productsEN from "./products.en";
import productsFR from "./products.fr";

export default function useProducts() {
  const { i18n } = useTranslation();
  const [products, setProducts] = useState(productsIT);

  // Funzione per selezionare i prodotti in base alla lingua
  const getProductsByLang = (lang) => {
    switch (lang) {
      case "en":
      case "en-US":
        return productsEN;
      case "fr":
      case "fr-FR":
        return productsFR;
      default:
        return productsIT;
    }
  };

  // Aggiorna automaticamente i prodotti quando cambia lingua
  useEffect(() => {
    setProducts(getProductsByLang(i18n.language));
  }, [i18n.language]);

  return products;
}
