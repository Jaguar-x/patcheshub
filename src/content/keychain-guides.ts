export const keychainGuides = {
  pvc: {
    title: "Custom PVC Keychains & Molded Rubber Keyrings",
    description: "Create custom PVC rubber keychains with molded logos, raised details, and custom shapes. Compare relief and ring placement, then request a quote with no minimum.",
    benefits: [
      ["Flexible molded rubber", "PVC has a soft, flexible feel that suits everyday keyrings and bag tags. Consider how the shape will sit alongside keys or against a zipper."],
      ["Distinct color areas", "Recessed channels can separate colors and make a simple emblem easier to read. Use clear outlines and tell us which colors are essential to your logo."],
      ["Relief you can feel", "Use raised details to emphasize a symbol or lettering. Flat levels suit graphic designs, while rounded relief can give a mascot more dimension."],
    ],
    uses: "Consider PVC for outdoor brands, event merchandise, team mascots, and bag tags. A compact outline works well on a keyring, while a larger shape gives an emblem more room on a backpack.",
    checklist: "Send your original logo, target width and height, color references, and preferred ring position. Mark the areas you want raised and note which side should face out when the keychain hangs.",
    concepts: [
      { title: "Sunrise emblem", description: "A round logo with bold bands of color and a ring at the top.", image: { src: "/assets/products/keychains/sunrise-keychain-concept.png", alt: "Molded sunrise keychain concept with a metal ring", width: 700, height: 700 } },
      { title: "Molded shield and mascot", description: "A shield and a sculpted mascot show how relief and color separation can define different shapes.", image: { src: "/assets/products/keychains/pvc-portfolio.webp", alt: "Two molded PVC keychain concepts with raised details and silver rings", width: 1200, height: 800 } },
    ],
    faq: ["What is the difference between 2D and 3D PVC keychains?", "A 2D molded design uses flat surfaces at different heights. A 3D design can use rounded or sculpted surfaces. Share your artwork so we can review which approach fits."],
  },
  embroidered: {
    title: "Custom Embroidered Keychains & Fabric Key Fobs",
    description: "Design custom embroidered keychains and stitched fabric key fobs. Explore thread coverage, tag shapes, and artwork on both sides. No minimum order.",
    benefits: [
      ["Raised thread texture", "Stitches give bold lettering and symbols a tactile finish. Leave enough space around narrow strokes so the thread texture stays visible."],
      ["Fabric and thread contrast", "Choose base fabric and thread colors together. A clear difference in tone helps small words and borders stay legible."],
      ["Artwork on both sides", "Plan what should appear on the front and back. A logo on one side and a short name or message on the other can keep each layout simple."],
    ],
    uses: "Consider embroidered key fobs for club merchandise, staff gifts, event giveaways, and brand accessories. A long tag gives a wordmark space, while a compact badge shape suits a crest or simple icon.",
    checklist: "Send the front and back artwork, the finished dimensions, and any thread or fabric colors you want to match. Indicate where the ring should attach and leave room between that point, the border, and the lettering.",
    concepts: [
      { title: "Stitched tag and crest", description: "An elongated wordmark tag and a compact crest show how the shape, stitched border, and ring placement can frame different artwork.", image: { src: "/assets/products/keychains/embroidered-portfolio.webp", alt: "Two embroidered fabric key fob concepts with stitched borders and metal rings", width: 1200, height: 800 } },
      { title: "Embroidered crest detail", description: "The close-up shows how a contrasting stitched edge frames the crest, with the ring positioned above the artwork.", image: { src: "/assets/products/keychains/embroidered-crest-detail.webp", alt: "Close-up of a burgundy crest key fob with gold embroidery and a split ring", width: 540, height: 480 } },
    ],
    faq: ["Can the front and back have different designs?", "Send the artwork for both sides and identify which is the front. We can review each layout at the intended size, including the border and ring position."],
  },
} as const;
