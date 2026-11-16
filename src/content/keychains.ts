export const keychainTypes = [
  {
    id: "pvc",
    product: "pvc-keychains",
    name: "PVC keychains",
    finish: "Molded rubber",
    description: "Turn a bold logo or mascot into a flexible molded rubber keychain with raised details and distinct color areas.",
    details: [
      ["Molded relief", "Use flat levels to define lettering and graphics. Ask about rounded relief when a mascot or emblem needs more dimension."],
      ["Custom outline", "Choose a circle, shield, or silhouette that follows the artwork. Keep narrow points and tiny gaps in mind when planning the shape."],
      ["Artwork and hardware", "Send the original artwork and intended size. Include where you’d like the ring to sit so we can review how the design will hang."],
    ],
    question: ["Can I use gradients on a PVC keychain?", "Molded PVC works best with separate color areas. Share your artwork so we can review how gradients or shading could be simplified for the mold."],
  },
  {
    id: "embroidered",
    product: "embroidered-keychains",
    name: "Embroidered keychains",
    finish: "Raised stitching",
    description: "Make a tactile keychain or key fob with stitched lettering, bold outlines, and a fabric base.",
    details: [
      ["Thread coverage", "Leave some base fabric visible or use stitching as part of the background. Choose thread and fabric colors together so the design reads clearly."],
      ["Tag or badge shape", "Use a long tag for a wordmark or a compact badge shape for an emblem. Allow space between the artwork, border, and ring attachment."],
      ["One or both sides", "Tell us what you want visible on each side. A short message, initials, or a second design may need a different layout from the front."],
    ],
    question: ["Will small text work on an embroidered keychain?", "Send the artwork and intended size so we can review the smallest letters. Wider strokes and open spacing generally make a stitched wordmark easier to read."],
  },
] as const;
