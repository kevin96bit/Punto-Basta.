const products = [
  // SAC BLANC AU CROCHET
  {
    id: 1,
    slug: "borsa-realizzata-all-uncinetto-bianca",
    title: "Sac blanc au crochet",
    price: "40.00€",
    img: "/borsetta_bianca/borsetta-bianca1.jpg",
    shortDesc: "Sac blanc au crochet fait main",
    description:
      "Sac au crochet avec un motif en spirale. Solide et spacieux, parfait pour transporter vos objets du quotidien avec style.",
    images: [
      "/borsetta_bianca/borsetta-bianca1.jpg",
      "/borsetta_bianca/borsetta-bianca2.jpg",
      "/borsetta_bianca/borsetta-bianca3.jpg",
    ],
    specs: { material: "Coton et Lin", size: "32 x 28 cm", colors: "Blanc" },
  },

  // SAC ORANGE ET GRIS
  {
    id: 2,
    slug: "borsetta_arancio_grigio",
    title: "Sac au crochet orange et gris",
    price: "22.00€",
    img: "/borsetta_arancio_grigio/borsetta-arancio-grigio3.jpg",
    shortDesc:
      "Petit sac artisanal au crochet avec breloque en forme de couronne et bandoulière. Taille compacte, parfaite pour le téléphone.",
    description:
      "Élégant sac entièrement fait main au crochet, orné d’une délicate breloque en forme de couronne et muni d’une bandoulière pratique. Le modèle n’est pas doublé, conservant ainsi un style léger et naturel. Malgré ses petites dimensions, il est assez spacieux pour contenir un smartphone et les objets essentiels.",
    images: [
      "/borsetta_arancio_grigio/borsetta-arancio-grigio3.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio1.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio2.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio4.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio5.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio6.jpg",
    ],
    specs: { material: "Coton", size: "18 x 11 cm", colors: "Orange, Gris" },
  },

  // SAC ROUGE ET GRIS
  {
    id: 3,
    slug: "borsa_rosso_grigio",
    title: "Sac au crochet rouge et gris",
    price: "35.00€",
    img: "/borsa_rosso_grigio/borsa-rosso-grigio1.jpg",
    shortDesc:
      "Sac artisanal au crochet taille M, parfait dans les tons automnaux. Doublé, avec possibilité d’ajouter une bandoulière (non incluse).",
    description:
      "Sac entièrement fait main avec des fils de qualité, dans des tons chauds et harmonieux parfaits pour la saison automnale. Taille M, avec doublure intérieure pour plus de résistance et une finition soignée. Les mesures exactes sont indiquées sur les photos du produit. Il est possible d’ajouter une bandoulière en l’attachant aux mailles (non incluse). Un accessoire unique, artisanal et polyvalent, idéal pour compléter avec style vos tenues de saison.",
    images: [
      "/borsa_rosso_grigio/borsa-rosso-grigio1.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio2.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio3.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio4.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio5.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio6.jpg",
    ],
    specs: { material: "Coton", size: "28.5 x 17.5 cm", colors: "Rouge, Gris" },
  },

  // SAC BLEU ET ARGENT
  {
    id: 4,
    slug: "borsa_blu_argento",
    title: "Sac au crochet bleu et argent",
    price: "27.00€",
    img: "/borsa_blu_argento/borsa-blu-argento1.jpg",
    shortDesc:
      "Sac artisanal au crochet dans les tons bleus et argentés, idéal aussi pour un look élégant.",
    description:
      "Sac entièrement fait main avec soin et attention aux détails, dans des tons raffinés de bleu et d’argent. Un accessoire polyvalent qui allie artisanat et style, parfait pour un usage quotidien élégant ou pour compléter une tenue habillée.",
    images: [
      "/borsa_blu_argento/borsa-blu-argento1.jpg",
      "/borsa_blu_argento/borsa-blu-argento2.jpg",
    ],
    specs: { material: "Coton", size: "23x14 cm", colors: "Bleu, Argent" },
  },

  // SAC ORANGE
  {
    id: 5,
    slug: "borsa_arancione",
    title: "Pochette orange au crochet",
    price: "17.00€",
    img: "/borsa_arancione/borsa-arancione2.jpg",
    shortDesc:
      "Petite pochette artisanale au crochet, taille S, en orange vif avec chaîne coquillage. Doublée, parfaite pour l’été.",
    description:
      "Pochette entièrement faite main au crochet, dans une teinte orange éclatante, symbole d’énergie et de style estival. Elle est ornée d’une chaîne décorative en forme de coquillage, pour une touche marine et élégante. Doublée à l’intérieur, elle offre une finition soignée et une plus grande résistance. Légère et polyvalente, elle peut être portée comme mini-sac pour les soirées ou comme pochette d’été pour la plage.",
    images: [
      "/borsa_arancione/borsa-arancione2.jpg",
      "/borsa_arancione/borsa-arancione1.jpg",
      "/borsa_arancione/borsa-arancione3.jpg",
      "/borsa_arancione/borsa-arancione4.jpg",
    ],
    specs: { material: "Coton", size: "17 x 10 cm", colors: "Orange" },
  },

  // SAC VIOLET
  {
    id: 6,
    slug: "borsa_viola",
    title: "Sac violet au crochet",
    price: "30.00€",
    img: "/borsa_viola/borsa-viola1.jpg",
    shortDesc:
      "Sac artisanal fait main en violet, spacieux et facile à assortir à différents styles.",
    description:
      "Sac entièrement fait main avec soin et attention aux détails. Son design simple mais élégant le rend facile à assortir à différents styles et occasions. Sa couleur violette, intense et raffinée, ajoute une touche de personnalité sans compromettre sa polyvalence. Spacieux, il est idéal pour contenir tous vos essentiels quotidiens avec élégance.",
    images: ["/borsa_viola/borsa-viola1.jpg", "/borsa_viola/borsa-viola2.jpg"],
    specs: { material: "Coton", size: "25 x 14 cm", colors: "Violet" },
  },

  // SAC ROSE ET LILAS
  {
    id: 7,
    slug: "borsa_rosa_lilla",
    title: "Sac au crochet rose et lilas",
    price: "30.00€",
    img: "/borsa_rosa_lilla/borsa-rosa-lilla1.jpg",
    shortDesc:
      "Grand sac artisanal au crochet, spacieux et polyvalent. Avec chaîne amovible pour l’utiliser aussi comme pochette.",
    description:
      "Sac fait main au crochet, taille L, au style artisanal et raffiné. Le modèle est ample et pratique, idéal pour contenir tous vos essentiels avec style. Équipé d’une chaîne amovible, il peut être porté à l’épaule ou utilisé comme pochette élégante à main.",
    images: [
      "/borsa_rosa_lilla/borsa-rosa-lilla1.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla2.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla3.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla4.jpg",
    ],
    specs: { material: "Coton", size: "17 x 22 cm", colors: "Rose, Lilas" },
  },

  // SAC NOIR ET ARGENT
  {
    id: 8,
    slug: "borsa_nero_argento",
    title: "Sac au crochet noir et argent",
    price: "30.00€",
    img: "/borsa_nero_argento/borsa_nero_argento1.jpg",
    shortDesc:
      "Sac artisanal au crochet avec décorations de perles, doublé et fait main. Possibilité d’ajouter une bandoulière (non incluse).",
    description:
      "Élégant sac au crochet entièrement fait main avec soin et précision, orné de délicates perles mettant en valeur le travail artisanal. Le modèle est doublé pour plus de solidité et une finition raffinée. Il est possible d’ajouter une bandoulière aux mailles (non incluse), le rendant encore plus pratique et polyvalent. Les mesures complètes sont indiquées sur les photos du produit.",
    images: [
      "/borsa_nero_argento/borsa_nero_argento1.jpg",
      "/borsa_nero_argento/borsa_nero_argento2.jpg",
      "/borsa_nero_argento/borsa_nero_argento3.jpg",
    ],
    specs: { material: "Coton", size: "12 x 18 cm", colors: "Noir, Argent" },
  },

  // SAC BLEU
  {
    id: 9,
    slug: "borsa_blu",
    title: "Sac bleu au crochet",
    price: "20.00€",
    img: "/borsa_blu/borsa-blu3.jpg",
    shortDesc:
      "Sac au crochet taille M, couleur bleue. Avec chaîne incluse, peut être porté à la main ou à l’épaule.",
    description:
      "Élégant sac artisanal au crochet, taille M, confectionné avec soin dans une teinte bleue raffinée. Modèle polyvalent et confortable, pouvant être porté à la main ou à l’épaule grâce à la chaîne incluse. Les mesures complètes sont indiquées sur les photos du produit.",
    images: [
      "/borsa_blu/borsa-blu1.jpg",
      "/borsa_blu/borsa-blu2.jpg",
      "/borsa_blu/borsa-blu3.jpg",
      "/borsa_blu/borsa-blu4.jpg",
    ],
    specs: { material: "Coton", size: "20.5 x 19 cm", colors: "Bleu" },
  },

  // CHAPEAU BUCKET
  {
    id: 10,
    slug: "cappello_ bucket",
    title: "Chapeau bucket au crochet",
    price: "18.00€",
    img: "/cappello_ bucket/cappello-bucket1.jpg",
    shortDesc:
      "Chapeau au crochet fait main en 100 % coton. Léger et frais, dans des tons neutres faciles à assortir à toute tenue estivale.",
    description:
      "Chapeau fait main au crochet en fil 100 % coton, respirant et confortable, parfait même pour les journées les plus chaudes. Ses tons neutres le rendent extrêmement polyvalent et facile à assortir. Un accessoire léger et frais, idéal pour la plage ou comme complément de style en vacances ou pendant le temps libre.",
    images: [
      "/cappello_ bucket/cappello-bucket1.jpg",
      "/cappello_ bucket/cappello-bucket2.jpg",
      "/cappello_ bucket/cappello-bucket3.jpg",
      "/cappello_ bucket/cappello-bucket4.jpg",
    ],
    specs: { material: "Coton", size: "S", colors: "Beige, Marron" },
  },

  // POCHETTE ORANGE ET MARRON
  {
    id: 11,
    slug: "pochette_arancione_marrone",
    title: "Pochette orange et marron au crochet",
    price: "8.00€",
    img: "/pochette_arancione_marrone/pochette-arancione-marrone2.jpg",
    shortDesc:
      "Mini pochette au crochet faite main, idéale comme porte-documents, porte-monnaie ou trousse. Peut être équipée d’une bandoulière.",
    description:
      "Délicate mini pochette faite main au crochet, parfaite pour un usage quotidien. Accessoire polyvalent et fonctionnel pouvant être utilisé comme porte-documents, porte-monnaie ou trousse de beauté. Une bandoulière peut être ajoutée pour la transformer en petit sac pratique et élégant. Les mesures complètes sont indiquées sur les photos du produit.",
    images: [
      "/pochette_arancione_marrone/pochette-arancione-marrone2.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone1.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone3.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone4.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone5.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone6.jpg",
    ],
    specs: { material: "Coton", size: "10 x 15 cm", colors: "Orange, Marron" },
  },

  // TULIPANS AU CROCHET
  {
    id: 12,
    slug: "tulipani_uncinetto",
    title: "Tulipes au crochet",
    price: "4.50€ l’unité",
    img: "/tulipani_uncinetto/tulipani-uncinetto2.jpg",
    shortDesc:
      "Tulipes faites main au crochet en 100 % coton. Vendues à l’unité à 4,50€ (vase non inclus).",
    description:
      "Délicates tulipes entièrement faites main au crochet, en fil 100 % coton de haute qualité. Parfaites pour apporter une touche artisanale et colorée à la maison, idéales comme décoration florale durable, idée cadeau ou élément de décoration.",
    images: [
      "/tulipani_uncinetto/tulipani-uncinetto2.jpg",
      "/tulipani_uncinetto/tulipani-uncinetto1.jpg",
    ],
    specs: { material: "Coton", size: "10 x 15 cm", colors: "Lilas, Violet" },
  },

  // ROSES AU CROCHET
  {
    id: 13,
    slug: "rose_uncinetto",
    title: "Roses au crochet",
    price: "8.00€ l’unité",
    img: "/rose_uncinetto/rose-uncinetto2.jpg",
    shortDesc:
      "Rose faite main au crochet, parfaite comme idée cadeau. 8 € l’unité (vase non inclus).",
    description:
      "Délicate rose faite main au crochet, réalisée avec soin et attention aux détails. Une idée cadeau originale et romantique, idéale pour décorer la maison ou offrir un présent durable et spécial.",
    images: [
      "/rose_uncinetto/rose-uncinetto2.jpg",
      "/rose_uncinetto/rose-uncinetto1.jpg",
      "/rose_uncinetto/rose-uncinetto3.jpg",
      "/rose_uncinetto/rose-uncinetto4.jpg",
      "/rose_uncinetto/rose-uncinetto5.jpg",
    ],
    specs: { material: "Coton", size: "10 x 15 cm", colors: "Rouge, Vert" },
  },
];

export default products;
