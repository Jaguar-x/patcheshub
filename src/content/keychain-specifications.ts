export const keychainSpecifications = {
  pvc: {
    detail: { src: "/assets/products/keychains/pvc-relief-detail.webp", alt: "Close-up of raised details on a molded rubber mascot keychain", width: 480, height: 650 },
    caption: "Molded levels and sculpted detail",
    note: "Raised rubber relief",
    construction: [
      ["Map the raised and recessed areas", "Start with the elements that should catch the eye first. A raised border can frame an emblem, while a recessed background leaves room around the main lettering. If the artwork has smooth curves, flag the areas you want to discuss as sculpted relief."],
      ["Prepare the colors for molding", "Identify the foreground, background, and accent colors in your artwork. For gradients, shadows, or translucent overlaps, share the original and point out which shapes matter most. Those details help guide a version with distinct color areas."],
      ["Allow space for the ring", "Mark the top of the design as it should appear when hanging. A centered ring suits a balanced shape, while an off-center position can follow an asymmetrical outline. Leave a clear area around the attachment so it stays separate from the main graphic."],
    ],
    proof: [
      ["Review the relief", "Check the proof for raised levels and recessed areas. Compare their placement with the original artwork so the elements you want to emphasize are easy to identify."],
      ["Check the outline at size", "Print the outline at the proposed dimensions. Check any narrow points and make sure important lettering has enough space away from the edge and the ring."],
    ],
  },
  embroidered: {
    detail: { src: "/assets/products/keychains/embroidered-crest-detail.webp", alt: "Gold stitching and split-ring hardware on a burgundy embroidered crest", width: 540, height: 480 },
    caption: "Stitched border and ring placement",
    note: "Thread, fabric, and hardware",
    construction: [
      ["Design around the stitch texture", "Use open letter spacing and broad strokes so the thread has room to define each shape. If the logo includes small text, prepare a version with the main wordmark or initials so we can compare legibility at the proposed size."],
      ["Choose fabric, thread, and border together", "Decide where the base fabric should remain visible and which elements should be stitched. Compare the border with both the fabric and the artwork so the edge reads clearly when the fob is resting against a bag or jacket."],
      ["Plan both sides around the ring", "Provide a front and back layout and mark the end where the ring belongs. On a long tag, set the artwork far enough from the attachment to give the wordmark breathing room. Check which way the reverse should read when the tag is flipped."],
    ],
    proof: [
      ["Review thread and fabric contrast", "Check the smallest letters and the narrowest gaps at the proposed size. Confirm which areas are stitched, which show the base fabric, and how the border frames the design."],
      ["Check the reverse and hardware placement", "Review the front and back side by side. Confirm the orientation of each design, the position of the ring, and the clearance between the hardware and any text."],
    ],
  },
} as const;
