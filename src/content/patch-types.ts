export const patchTypes = [
  {
    id: "pvc", name: "PVC patches", finish: "Molded rubber",
    description: "Flexible molded rubber with raised details and bold blocks of color.",
    use: "Outdoor gear, bags, and bold emblems with distinct color areas.",
    tip: "Use clear shapes and strong outlines to bring out the molded relief.",
  },
  {
    id: "embroidered", name: "Embroidered patches", finish: "Raised stitching",
    description: "Raised thread gives logos and lettering a tactile, traditional finish.",
    use: "Uniforms, jackets, club badges, and designs with bold lettering.",
    tip: "Simplify very small details so the thread texture can do its work.",
  },
  {
    id: "woven", name: "Woven patches", finish: "Fine woven thread",
    description: "Fine threads form a flatter surface suited to small text and intricate linework.",
    use: "Apparel branding, small badges, and detailed logos.",
    tip: "Share the intended patch size so we can review whether the smallest lettering will read clearly.",
  },
  {
    id: "chenille", name: "Chenille patches", finish: "Plush yarn",
    description: "Soft, raised yarn creates the familiar texture of varsity letters and jacket patches.",
    use: "Letterman jackets, initials, mascots, and large graphic shapes.",
    tip: "Start with a bold silhouette and leave space between narrow strokes.",
  },
  {
    id: "leather", name: "Leather patches", finish: "Subtle tonal detail",
    description: "A leather surface gives simple marks and lettering a warm, understated finish.",
    use: "Caps, denim, bags, and designs that work in a single tone.",
    tip: "Try your artwork in one color to see how the mark reads without color separation.",
  },
  {
    id: "printed", name: "Printed patches", finish: "Full-color artwork",
    description: "A printed surface lets gradients, illustrations, and fine color transitions come through.",
    use: "Photo-based artwork, shaded illustrations, and designs with many colors.",
    tip: "Share the highest-resolution artwork you have, along with the intended patch size.",
  },
] as const;
