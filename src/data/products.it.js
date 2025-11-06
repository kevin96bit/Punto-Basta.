const products = [
  // SE SI ROMPE QUALCOSA RINOMINA QUESTO FILE --> products.js
  // BORSA BIANCA ALL'UNCINETTO
  {
    id: 1,
    slug: "borsa-realizzata-all-uncinetto-bianca",
    title: "Borsa all’uncinetto bianca",
    price: "40.00€",
    img: "/borsetta_bianca/borsetta-bianca1.jpg",
    shortDesc: "Borsa all’uncinetto bianca fatta a mano",
    description:
      "Borsa all'uncinetto con design a spirale. Resistente e capiente, perfetta per trasportare oggetti quotidiani con stile.",
    images: [
      "/borsetta_bianca/borsetta-bianca1.jpg",
      "/borsetta_bianca/borsetta-bianca2.jpg",
      "/borsetta_bianca/borsetta-bianca3.jpg",
    ],
    specs: { material: "Cotone e Lino", size: "32 x 28 cm", colors: "Bianco" },
  },
  // BORSETTA ARANCIO-GRIGIO
  {
    id: 2,
    slug: "borsetta_arancio_grigio",
    title: "Borsetta all'uncinetto arancione e grigio",
    price: "22.00€",
    img: "/borsetta_arancio_grigio/borsetta-arancio-grigio3.jpg",
    shortDesc:
      "Piccola borsa artigianale all’uncinetto con charm a forma di corona e tracollina. Dimensioni compatte, perfetta per contenere il telefono.",
    description:
      "Elegante borsa realizzata interamente a mano all’uncinetto, arricchita da un delicato charm a forma di corona e dotata di una pratica tracollina. Il modello non è foderato, mantenendo così uno stile leggero e naturale.Nonostante le dimensioni ridotte, è sufficientemente capiente da contenere uno smartphone e gli oggetti essenziali.",
    images: [
      "/borsetta_arancio_grigio/borsetta-arancio-grigio3.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio1.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio2.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio4.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio5.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio6.jpg",
    ],
    specs: {
      material: "Cotone",
      size: "18 x 11 cm",
      colors: "Arancione, Grigio",
    },
  },
  // BORSETTA ROSSO-GRIGIO
  {
    id: 3,
    slug: "borsa_rosso_grigio",
    title: "Borsetta all'uncinetto rosso e grigio",
    price: "35.00€",
    img: "/borsa_rosso_grigio/borsa-rosso-grigio1.jpg",
    shortDesc:
      "Borsa artigianale all’uncinetto taglia M, perfetta nei colori autunnali. Foderata, con possibilità di aggiungere una tracolla (non inclusa).",
    description:
      "Borsa realizzata interamente a mano con filati di qualità, nei toni caldi e armoniosi perfetti per la stagione autunnale. Taglia M, con fodera interna che garantisce una maggiore resistenza e una finitura curata.Le misure precise sono indicate nelle foto del prodotto. È possibile applicare una tracolla agganciandola alle maglie (tracolla non inclusa). Un accessorio unico, artigianale e versatile, ideale per completare con stile ogni outfit di stagione.",
    images: [
      "/borsa_rosso_grigio/borsa-rosso-grigio1.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio2.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio3.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio4.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio5.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio6.jpg",
    ],
    specs: {
      material: "Cotone",
      size: "28.5 x 17.5 cm",
      colors: "Rosso, Grigio",
    },
  },
  // BORSETTA BLU-ARGENTO
  {
    id: 4,
    slug: "borsa_blu_argento",
    title: "Borsetta all'uncinetto blu e argento",
    price: "27.00€",
    img: "/borsa_blu_argento/borsa-blu-argento1.jpg",
    shortDesc:
      "Borsa artigianale all’uncinetto nei toni blu e argento, ideale anche per look eleganti.",
    description:
      "Borsa realizzata interamente a mano con cura e attenzione ai dettagli, nei raffinati toni del blu e argento. Un accessorio versatile che unisce artigianalità e stile, perfetto sia per un uso quotidiano raffinato sia per completare un outfit elegante.",
    images: [
      "/borsa_blu_argento/borsa-blu-argento1.jpg",
      "/borsa_blu_argento/borsa-blu-argento2.jpg",
    ],
    specs: { material: "Cotone", size: "23x14 cm", colors: "Blu, Argento" },
  },
  // BORSETTA ARANCIONE
  {
    id: 5,
    slug: "borsa_arancione",
    title: "Borsa all'uncinetto arancione",
    price: "17.00€",
    img: "/borsa_arancione/borsa-arancione2.jpg",
    shortDesc:
      "Clutch artigianale all’uncinetto taglia S, in vivace arancione con catenella a conchiglia. Foderata, perfetta per l’estate e ideale come mini borsa o pochette da spiaggia.",
    description:
      "Clutch realizzata interamente a mano all’uncinetto, in una brillante tonalità arancione, simbolo di energia e stile estivo. È impreziosita da una catenella decorativa conchiglia, che le dona un tocco marino e raffinato. La borsa è foderata internamente, offrendo una finitura curata e maggiore resistenza. Versatile e leggera, può essere indossata come mini borsa per le uscite serali o come pochette estiva da portare anche al mare.",
    images: [
      "/borsa_arancione/borsa-arancione2.jpg",
      "/borsa_arancione/borsa-arancione1.jpg",
      "/borsa_arancione/borsa-arancione3.jpg",
      "/borsa_arancione/borsa-arancione4.jpg",
    ],
    specs: { material: "Cotone", size: "17 x 10 cm", colors: "Arancione" },
  },
  // BORSETTA VIOLA
  {
    id: 6,
    slug: "borsa_viola",
    title: "Borsa all'uncinetto viola",
    price: "30.00€",
    img: "/borsa_viola/borsa-viola1.jpg",
    shortDesc:
      "Borsa artigianale fatta a mano in tonalità viola, capiente e facile da abbinare a diversi look.",
    description:
      "Borsa realizzata interamente a mano con cura e attenzione ai dettagli. Il suo design semplice ma elegante la rende facile da abbinare a diversi stili e occasioni. Il colore viola, intenso e raffinato, aggiunge un tocco di personalità senza rinunciare alla versatilità. La borsa è capiente, ideale per contenere tutto l’essenziale quotidiano con stile.",
    images: ["/borsa_viola/borsa-viola1.jpg", "/borsa_viola/borsa-viola2.jpg"],
    specs: { material: "Cotone", size: "25 x 14 cm", colors: "Viola" },
  },
  // BORSETTA ROSA-LILLA
  {
    id: 7,
    slug: "borsa_rosa_lilla",
    title: "Borsa all'uncinetto rosa e lilla",
    price: "30.00€",
    img: "/borsa_rosa_lilla/borsa-rosa-lilla1.jpg",
    shortDesc:
      "Borsa artigianale all’uncinetto taglia L, capiente e versatile. Dotata di catenella removibile per poterla portare anche come pochette.",
    description:
      "Borsa realizzata a mano all’uncinetto, taglia L, caratterizzata da uno stile artigianale e raffinato. Il modello è ampio e capiente, ideale per contenere tutto l’essenziale con praticità e stile. È dotata di una catenella removibile, che permette di indossarla come borsa a spalla oppure di utilizzarla come elegante pochette a mano.",
    images: [
      "/borsa_rosa_lilla/borsa-rosa-lilla1.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla2.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla3.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla4.jpg",
    ],
    specs: { material: "Cotone", size: "17 x 22 cm", colors: "Rosa, Lilla" },
  },
  // BORSETTA NERO E ARGENTO
  {
    id: 8,
    slug: "borsa_nero_argento",
    title: "Borsa nero e argento",
    price: "30.00€",
    img: "/borsa_nero_argento/borsa_nero_argento1.jpg",
    shortDesc:
      "Borsa artigianale all’uncinetto con decorazioni di perline, foderata e realizzata a mano. Possibilità di aggiungere una tracolla (non inclusa).",
    description:
      "Elegante borsa all’uncinetto, interamente fatta a mano con cura e attenzione ai dettagli, impreziosita da delicati decori di perline che ne esaltano la lavorazione artigianale. Il modello è foderato internamente, per garantire una maggiore resistenza e una finitura curata. È possibile agganciare una tracolla alle maglie della borsa (tracolla non inclusa), rendendola così ancora più versatile e comoda da indossare. Le misure complete sono indicate nelle foto del prodotto.",
    images: [
      "/borsa_nero_argento/borsa_nero_argento1.jpg",
      "/borsa_nero_argento/borsa_nero_argento2.jpg",
      "/borsa_nero_argento/borsa_nero_argento3.jpg",
    ],
    specs: { material: "Cotone", size: "12 x 18 cm", colors: "Nero, Argento" },
  },
  // BORSETTA BLU
  {
    id: 9,
    slug: "borsa_blu",
    title: "Borsa blu",
    price: "20.00€",
    img: "/borsa_blu/borsa-blu3.jpg",
    shortDesc:
      "Borsa all’uncinetto taglia M, colore blu. Dotata di catenella inclusa, può essere portata sia a mano che a tracolla.",
    description:
      "Elegante borsa artigianale all’uncinetto, taglia M, realizzata con cura nei dettagli e proposta in una raffinata tonalità di blu. Un modello versatile e comodo, che può essere indossato a mano oppure a tracolla, grazie alla catenella inclusa. È possibile agganciare una tracolla alle maglie della borsa (tracolla non inclusa), rendendola così ancora più versatile e comoda da indossare. Le misure complete sono indicate nelle foto del prodotto.",
    images: [
      "/borsa_blu/borsa-blu1.jpg",
      "/borsa_blu/borsa-blu2.jpg",
      "/borsa_blu/borsa-blu3.jpg",
      "/borsa_blu/borsa-blu4.jpg",
    ],
    specs: { material: "Cotone", size: "20.5 x 19 cm", colors: "Blu" },
  },
  // CAPPELLO BUCKET
  {
    id: 10,
    slug: "cappello_ bucket",
    title: "Cappello Bucket",
    price: "18.00€",
    img: "/cappello_ bucket/cappello-bucket1.jpg",
    shortDesc:
      "Cappello all’uncinetto realizzato a mano in 100% cotone. Fresco e leggero, nei colori neutri che si abbinano facilmente a ogni outfit estivo.",
    description:
      "Cappello fatto a mano all’uncinetto con filato in 100% cotone, traspirante e confortevole, perfetto anche per le giornate più calde. I colori neutri lo rendono estremamente versatile e facile da abbinare a qualsiasi look. Un accessorio fresco e leggero, ideale sia per il mare che come complemento di stile da indossare in vacanza o nel tempo libero.",
    images: [
      "/cappello_ bucket/cappello-bucket1.jpg",
      "/cappello_ bucket/cappello-bucket2.jpg",
      "/cappello_ bucket/cappello-bucket3.jpg",
      "/cappello_ bucket/cappello-bucket4.jpg",
    ],
    specs: { material: "Cotone", size: "S", colors: "Beige, Marrone" },
  },
  // POCHETTE ARANCIONE E MARRONE
  {
    id: 11,
    slug: "pochette_arancione_marrone",
    title: "Pochette arancione e marrone",
    price: "8.00€",
    img: "/pochette_arancione_marrone/pochette-arancione-marrone2.jpg",
    shortDesc:
      "Mini pochette all’uncinetto fatta a mano, ideale come porta documenti, portamonete o beauty da borsa. Possibilità di applicare una tracolla.",
    description:
      "Delicata mini pochette realizzata all’uncinetto, curata nei dettagli e perfetta per un uso quotidiano. Un accessorio versatile e funzionale, che può essere utilizzato come porta documenti, portamonete o beauty da borsa. È possibile agganciare una tracolla per trasformarla in una piccola borsetta pratica e comoda da portare con sé. Le misure complete sono indicate nelle foto del prodotto.",
    images: [
      "/pochette_arancione_marrone/pochette-arancione-marrone2.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone1.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone3.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone4.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone5.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone6.jpg",
    ],
    specs: {
      material: "Cotone",
      size: "10 x 15 cm",
      colors: "Arancione, Marrone",
    },
  },
  // TULIPANI UNCINETTO
  {
    id: 12,
    slug: "tulipani_uncinetto",
    title: "Tulipani all'uncinetto",
    price: "4.50€ cad. / each",
    img: "/tulipani_uncinetto/tulipani-uncinetto2.jpg",
    shortDesc:
      "Tulipani all’uncinetto realizzati a mano in 100% cotone. Venduti singolarmente a 4,50 € cad. (vaso non incluso).",
    description:
      "Delicati tulipani realizzati interamente a mano all’uncinetto, utilizzando filato 100% cotone di alta qualità. Perfetti per aggiungere un tocco artigianale e colorato alla casa, sono ideali come decorazione floreale duratura, idea regalo o complemento d’arredo.",
    images: [
      "/tulipani_uncinetto/tulipani-uncinetto2.jpg",
      "/tulipani_uncinetto/tulipani-uncinetto1.jpg",
    ],
    specs: { material: "Cotone", size: "10 x 15 cm", colors: "Lilla, Viola" }, // da vedere le misure
  },
  // ROSE UNCINETTO
  {
    id: 13,
    slug: "rose_uncinetto",
    title: "Rose all'uncinetto",
    price: "8.00€ cad. / each",
    img: "/rose_uncinetto/rose-uncinetto2.jpg",
    shortDesc:
      "Rosa realizzata a mano all’uncinetto, perfetta come idea regalo. 8 € cad. (vaso non incluso).",
    description:
      "Delicata rosa all’uncinetto, realizzata interamente a mano con cura e attenzione ai dettagli. Un’idea regalo originale e romantica, ideale per decorare la casa o per un pensiero speciale che duri nel tempo.",
    images: [
      "/rose_uncinetto/rose-uncinetto2.jpg",
      "/rose_uncinetto/rose-uncinetto1.jpg",
      "/rose_uncinetto/rose-uncinetto3.jpg",
      "/rose_uncinetto/rose-uncinetto4.jpg",
      "/rose_uncinetto/rose-uncinetto5.jpg",
    ],
    specs: { material: "Cotone", size: "10 x 15 cm", colors: "Rosso, Verde" }, // da vedere le misure
  },
];

export default products;
