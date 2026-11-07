export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  materials: readonly string[];
};

export const productCategories: readonly ProductCategory[] = [
  {
    slug: "patches",
    name: "Patches",
    shortDescription: "A little texture. A lot of character.",
    image: "/assets/products/patches/sunrise-patch-concept.png",
    imageAlt: "Original sunrise concept in navy, red, and cream embroidery",
    description: "Identity you can feel. Explore stitched textures and sculpted finishes.",
    materials: ["Embroidered", "Woven", "PVC", "Chenille", "Leather", "Printed"],
  },
  {
    slug: "pins",
    name: "Pins",
    shortDescription: "Small things. Big statements.",
    image: "/assets/products/pins/sunrise-pin-concept.png",
    imageAlt: "Gold enamel pins with original red and navy geometric designs",
    description: "A small canvas for a bold idea. Give your mark a polished finish.",
    materials: ["Soft enamel", "Hard enamel"],
  },
  {
    slug: "coins",
    name: "Coins",
    shortDescription: "Made to mark the moment.",
    image: "/assets/products/coins/sunrise-coin-concept.png",
    imageAlt: "Sculptural gold coin concept with a rising sun motif",
    description: "Give a shared moment something to hold on to.",
    materials: ["Custom coins"],
  },
  {
    slug: "keychains",
    name: "Keychains",
    shortDescription: "Your brand, along for the ride.",
    image: "/assets/products/keychains/sunrise-keychain-concept.png",
    imageAlt: "Navy PVC and metal keychain concepts with a red sunrise motif",
    description: "Take your identity along. Made for everyday encounters.",
    materials: ["Metal", "PVC"],
  },
];
