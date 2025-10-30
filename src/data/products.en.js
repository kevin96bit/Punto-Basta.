const products = [
  // WHITE CROCHET BAG
  {
    id: 1,
    slug: "borsa-realizzata-all-uncinetto-bianca",
    title: "White Crochet Bag",
    price: "40.00€",
    img: "/borsetta_bianca/borsetta-bianca1.jpg",
    shortDesc: "Handmade white crochet bag",
    description:
      "Crochet bag with a spiral design. Sturdy and spacious, perfect for carrying everyday items in style.",
    images: [
      "/borsetta_bianca/borsetta-bianca1.jpg",
      "/borsetta_bianca/borsetta-bianca2.jpg",
      "/borsetta_bianca/borsetta-bianca3.jpg",
    ],
    specs: {
      material: "Cotton and Linen",
      size: "32 x 28 cm",
      colors: "White",
    },
  },

  // ORANGE-GRAY CROCHET BAG
  {
    id: 2,
    slug: "borsetta_arancio_grigio",
    title: "Orange and Gray Crochet Bag",
    price: "22.00€",
    img: "/borsetta_arancio_grigio/borsetta-arancio-grigio3.jpg",
    shortDesc:
      "Small handmade crochet bag with a crown charm and shoulder strap. Compact size, perfect for holding a phone.",
    description:
      "Elegant handmade crochet bag, decorated with a delicate crown charm and equipped with a practical shoulder strap. The model is unlined, maintaining a light and natural style. Despite its small size, it is spacious enough to hold a smartphone and essential items.",
    images: [
      "/borsetta_arancio_grigio/borsetta-arancio-grigio3.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio1.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio2.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio4.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio5.jpg",
      "/borsetta_arancio_grigio/borsetta-arancio-grigio6.jpg",
    ],
    specs: { material: "Cotton", size: "18 x 11 cm", colors: "Orange, Gray" },
  },

  // RED-GRAY CROCHET BAG
  {
    id: 3,
    slug: "borsa_rosso_grigio",
    title: "Red and Gray Crochet Bag",
    price: "35.00€",
    img: "/borsa_rosso_grigio/borsa-rosso-grigio1.jpg",
    shortDesc:
      "Medium handmade crochet bag, perfect in autumn colors. Lined, with the option to add a shoulder strap (not included).",
    description:
      "Entirely handmade with quality yarns in warm and harmonious tones, perfect for the autumn season. Medium size, with an inner lining that ensures durability and a refined finish. Exact measurements are shown in the product photos. A shoulder strap can be added by attaching it to the stitches (not included). A unique, artisanal, and versatile accessory, ideal for completing any seasonal outfit with style.",
    images: [
      "/borsa_rosso_grigio/borsa-rosso-grigio1.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio2.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio3.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio4.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio5.jpg",
      "/borsa_rosso_grigio/borsa-rosso-grigio6.jpg",
    ],
    specs: { material: "Cotton", size: "28.5 x 17.5 cm", colors: "Red, Gray" },
  },

  // BLUE-SILVER CROCHET BAG
  {
    id: 4,
    slug: "borsa_blu_argento",
    title: "Blue and Silver Crochet Bag",
    price: "27.00€",
    img: "/borsa_blu_argento/borsa-blu-argento1.jpg",
    shortDesc:
      "Handmade crochet bag in blue and silver tones, ideal also for elegant looks.",
    description:
      "Handmade crochet bag crafted with care and attention to detail, in refined shades of blue and silver. A versatile accessory combining craftsmanship and style, perfect for both everyday use and completing an elegant outfit.",
    images: [
      "/borsa_blu_argento/borsa-blu-argento1.jpg",
      "/borsa_blu_argento/borsa-blu-argento2.jpg",
    ],
    specs: { material: "Cotton", size: "23x14 cm", colors: "Blue, Silver" },
  },

  // ORANGE CROCHET BAG
  {
    id: 5,
    slug: "borsa_arancione",
    title: "Orange Crochet Clutch",
    price: "17.00€",
    img: "/borsa_arancione/borsa-arancione2.jpg",
    shortDesc:
      "Small handmade crochet clutch, size S, in vibrant orange with a shell chain. Lined and perfect for summer.",
    description:
      "Entirely handmade crochet clutch in a bright orange shade, symbolizing energy and summer style. Adorned with a decorative shell chain that gives it a marine and elegant touch. Lined inside for a neat finish and extra durability. Lightweight and versatile, ideal as a mini bag for evenings or a summer beach clutch.",
    images: [
      "/borsa_arancione/borsa-arancione2.jpg",
      "/borsa_arancione/borsa-arancione1.jpg",
      "/borsa_arancione/borsa-arancione3.jpg",
      "/borsa_arancione/borsa-arancione4.jpg",
    ],
    specs: { material: "Cotton", size: "17 x 10 cm", colors: "Orange" },
  },

  // PURPLE CROCHET BAG
  {
    id: 6,
    slug: "borsa_viola",
    title: "Purple Crochet Bag",
    price: "30.00€",
    img: "/borsa_viola/borsa-viola1.jpg",
    shortDesc:
      "Handmade purple crochet bag, spacious and easy to match with different looks.",
    description:
      "Entirely handmade crochet bag crafted with care and attention to detail. Its simple yet elegant design makes it easy to pair with various outfits. The deep purple color adds a touch of personality without sacrificing versatility. Spacious and ideal for carrying all your daily essentials in style.",
    images: ["/borsa_viola/borsa-viola1.jpg", "/borsa_viola/borsa-viola2.jpg"],
    specs: { material: "Cotton", size: "25 x 14 cm", colors: "Purple" },
  },

  // PINK AND LILAC CROCHET BAG
  {
    id: 7,
    slug: "borsa_rosa_lilla",
    title: "Pink and Lilac Crochet Bag",
    price: "30.00€",
    img: "/borsa_rosa_lilla/borsa-rosa-lilla1.jpg",
    shortDesc:
      "Large handmade crochet bag, spacious and versatile. Includes a removable chain strap to wear as a clutch.",
    description:
      "Handmade large crochet bag, characterized by a refined and artisanal style. The model is roomy and practical, ideal for carrying all the essentials with ease. Equipped with a removable chain strap, it can be worn on the shoulder or used as an elegant clutch.",
    images: [
      "/borsa_rosa_lilla/borsa-rosa-lilla1.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla2.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla3.jpg",
      "/borsa_rosa_lilla/borsa-rosa-lilla4.jpg",
    ],
    specs: { material: "Cotton", size: "17 x 22 cm", colors: "Pink, Lilac" },
  },

  // BLACK AND SILVER CROCHET BAG
  {
    id: 8,
    slug: "borsa_nero_argento",
    title: "Black and Silver Crochet Bag",
    price: "30.00€",
    img: "/borsa_nero_argento/borsa_nero_argento1.jpg",
    shortDesc:
      "Handmade crochet bag with bead decorations, lined. Option to add a shoulder strap (not included).",
    description:
      "Elegant handmade crochet bag, embellished with delicate bead details that highlight its artisanal craftsmanship. The model is lined for extra strength and a refined finish. A shoulder strap can be attached to the stitches (not included), making it even more versatile and comfortable to wear. Full measurements are shown in the product photos.",
    images: [
      "/borsa_nero_argento/borsa_nero_argento1.jpg",
      "/borsa_nero_argento/borsa_nero_argento2.jpg",
      "/borsa_nero_argento/borsa_nero_argento3.jpg",
    ],
    specs: { material: "Cotton", size: "12 x 18 cm", colors: "Black, Silver" },
  },

  // BLUE CROCHET BAG
  {
    id: 9,
    slug: "borsa_blu",
    title: "Blue Crochet Bag",
    price: "20.00€",
    img: "/borsa_blu/borsa-blu3.jpg",
    shortDesc:
      "Medium-sized blue crochet bag with included chain. Can be carried by hand or over the shoulder.",
    description:
      "Elegant handmade medium-sized crochet bag in a refined blue tone. A versatile and comfortable model that can be carried by hand or over the shoulder thanks to the included chain. The full measurements are shown in the product photos.",
    images: [
      "/borsa_blu/borsa-blu1.jpg",
      "/borsa_blu/borsa-blu2.jpg",
      "/borsa_blu/borsa-blu3.jpg",
      "/borsa_blu/borsa-blu4.jpg",
    ],
    specs: { material: "Cotton", size: "20.5 x 19 cm", colors: "Blue" },
  },

  // BUCKET HAT
  {
    id: 10,
    slug: "cappello_ bucket",
    title: "Crochet Bucket Hat",
    price: "18.00€",
    img: "/cappello_ bucket/cappello-bucket1.jpg",
    shortDesc:
      "Handmade 100% cotton crochet hat. Fresh and light, in neutral colors that easily match any summer outfit.",
    description:
      "Handmade crochet hat made of 100% cotton yarn, breathable and comfortable, perfect even for the hottest days. The neutral tones make it extremely versatile and easy to pair with any look. A light and fresh accessory, ideal for the beach or as a stylish complement for vacations or leisure time.",
    images: [
      "/cappello_ bucket/cappello-bucket1.jpg",
      "/cappello_ bucket/cappello-bucket2.jpg",
      "/cappello_ bucket/cappello-bucket3.jpg",
      "/cappello_ bucket/cappello-bucket4.jpg",
    ],
    specs: { material: "Cotton", size: "S", colors: "Beige, Brown" },
  },

  // ORANGE AND BROWN POUCH
  {
    id: 11,
    slug: "pochette_arancione_marrone",
    title: "Orange and Brown Crochet Pouch",
    price: "8.00€",
    img: "/pochette_arancione_marrone/pochette-arancione-marrone2.jpg",
    shortDesc:
      "Mini handmade crochet pouch, ideal as a document holder, coin purse, or small beauty bag. Can be fitted with a strap.",
    description:
      "Delicate handmade crochet mini pouch, perfect for everyday use. A versatile and functional accessory that can be used as a document holder, coin purse, or makeup bag. A strap can be added to turn it into a small, practical handbag. Full measurements are shown in the product photos.",
    images: [
      "/pochette_arancione_marrone/pochette-arancione-marrone2.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone1.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone3.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone4.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone5.jpg",
      "/pochette_arancione_marrone/pochette-arancione-marrone6.jpg",
    ],
    specs: { material: "Cotton", size: "10 x 15 cm", colors: "Orange, Brown" },
  },

  // CROCHET TULIPS
  {
    id: 12,
    slug: "tulipani_uncinetto",
    title: "Crochet Tulips",
    price: "4.50€ each",
    img: "/tulipani_uncinetto/tulipani-uncinetto2.jpg",
    shortDesc:
      "Handmade crochet tulips in 100% cotton. Sold individually for 4.50€ each (vase not included).",
    description:
      "Delicate handmade crochet tulips made with 100% high-quality cotton yarn. Perfect to add a handmade and colorful touch to your home, ideal as long-lasting floral decoration, a gift idea, or home accessory.",
    images: [
      "/tulipani_uncinetto/tulipani-uncinetto2.jpg",
      "/tulipani_uncinetto/tulipani-uncinetto1.jpg",
    ],
    specs: { material: "Cotton", size: "10 x 15 cm", colors: "Lilac, Purple" },
  },

  // CROCHET ROSES
  {
    id: 13,
    slug: "rose_uncinetto",
    title: "Crochet Roses",
    price: "8.00€ each",
    img: "/rose_uncinetto/rose-uncinetto2.jpg",
    shortDesc:
      "Handmade crochet rose, perfect as a gift idea. 8€ each (vase not included).",
    description:
      "Delicate handmade crochet rose, made with care and attention to detail. An original and romantic gift idea, perfect for decorating your home or as a lasting thoughtful present.",
    images: [
      "/rose_uncinetto/rose-uncinetto2.jpg",
      "/rose_uncinetto/rose-uncinetto1.jpg",
      "/rose_uncinetto/rose-uncinetto3.jpg",
      "/rose_uncinetto/rose-uncinetto4.jpg",
      "/rose_uncinetto/rose-uncinetto5.jpg",
    ],
    specs: { material: "Cotton", size: "10 x 15 cm", colors: "Red, Green" },
  },
];

export default products;
