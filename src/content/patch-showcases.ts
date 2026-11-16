export const patchShowcases = {
  pvc: {
    benefits: [
      ["Flexible rubber", "The molded patch can flex with the surface of a bag or piece of gear. This is useful on curved panels and soft-sided packs."],
      ["Tactile relief", "Raised and recessed areas give outlines and lettering a distinct edge. Use the raised level to emphasize the main symbol or initials."],
      ["Bold color separation", "Distinct color areas help emblems stay readable at a glance. A clear foreground and background work well at badge scale."],
    ],
    types: [
      ["2D molded", "Flat layers at different heights work well for logos, lettering, and graphic badges. Use stepped levels to highlight text or a simple emblem."],
      ["3D sculpted", "Rounded surfaces add dimension to mascots and sculpted artwork. Ask about this finish when curves are an important part of the design."],
    ],
  },
  embroidered: {
    benefits: [
      ["Raised texture", "Stitches give bold lettering and shapes a tactile surface. Broad strokes give the thread room to show its texture."],
      ["Fabric contrast", "Exposed base fabric can frame the artwork and add contrast between stitched areas. Choose the exposed fabric color as part of the artwork palette."],
      ["Traditional badge finish", "The stitched look suits uniforms, club badges, and jacket emblems. Leave enough room around the emblem for a distinct stitched edge."],
    ],
    types: [
      ["Partial coverage", "Let the base fabric show through around lettering or between stitched elements. Use the underlying fabric as part of the background color."],
      ["Full coverage", "Fill the patch face with stitches for continuous texture across the background and artwork. This works when the background color is part of the stitched design."],
    ],
    concepts: [
      ["Stitched catalog sample", "Look at the raised thread and the definition along the edge."],
      ["Club badge concept", "A bold emblem and open letter spacing give each stitched element room."],
    ],
  },
  woven: {
    benefits: [
      ["Fine linework", "Fine threads can preserve closely spaced details in a compact logo. Share vector artwork when you have it so the smallest features can be reviewed."],
      ["Flatter profile", "The woven face gives apparel branding a low-profile finish. Use it where a raised stitch texture would distract from a small mark."],
      ["Compact lettering", "A flat weave supports small type when the letter spacing and contrast are right. Check the wordmark at the finished size before approving it."],
    ],
    concepts: [
      ["Woven catalog sample", "Inspect the flat face and fine edges around the artwork."],
      ["Apparel badge concept", "Pair a compact wordmark with a simple outline for a sleeve or chest badge."],
    ],
  },
  chenille: {
    benefits: [
      ["Plush pile", "Raised yarn creates a soft texture with visible depth. Large areas of yarn show the texture most clearly."],
      ["Bold silhouettes", "Broad letters and simple mascots are easy to recognize at jacket scale. Keep enough space between letters for the edges to stay distinct."],
      ["Contrasting outlines", "A defined border helps the plush shapes stand out against the garment. Compare the outline against the garment color before choosing it."],
    ],
    types: [
      ["Varsity letters", "Use a single initial, number, or short set of initials with broad strokes. Check the scale against pockets and seams on the jacket."],
      ["Mascot and emblem patches", "Use an oversized graphic with open shapes and a distinct outline. Use the silhouette to carry the design before adding smaller details."],
    ],
    concepts: [
      ["Chenille catalog sample", "Look closely at the yarn pile and how it meets the border."],
      ["Varsity jacket concept", "Give an oversized initial room on the chest or back panel."],
    ],
  },
  leather: {
    benefits: [
      ["Warm tonal finish", "A restrained palette complements denim, canvas, and caps. Try the mark against a fabric swatch to compare contrast."],
      ["Surface character", "The grain gives simple artwork a textured background. Give the logo enough clear space for the grain to remain visible."],
      ["Clear branding", "A single-color mark leaves the logo and surface texture easy to see. Open up narrow gaps if the mark will be used on a small cap panel."],
    ],
    concepts: [
      ["Leather catalog sample", "See how the tonal artwork reads against the surface."],
      ["Cap label concept", "Fit a compact wordmark within the space available above the brim."],
    ],
  },
  printed: {
    benefits: [
      ["Smooth gradients", "Color transitions preserve shading in illustrated artwork. Use this finish for artwork with shadows and subtle tonal changes."],
      ["Photographic detail", "A sharp source image can carry fine details into the finished design. Check the image at the intended print size before sending it."],
      ["Full-color artwork", "A broad palette works for illustrations with several shades and closely spaced colors. Identify any colors that are especially important to the design."],
    ],
    types: [
      ["Photo-based artwork", "Use a high-resolution image and crop it around the most important subject. Leave enough room around the subject for the patch border."],
      ["Illustrated artwork", "Use gradients and shading for drawings with layered color and tonal detail. Keep small text away from heavily shaded areas."],
    ],
    concepts: [
      ["Printed catalog sample", "Look at the color transitions and detail within the printed face."],
      ["Illustrated merch concept", "Use a defined crop and keep small lettering away from the edge."],
    ],
  },
} satisfies Record<string, {
  benefits: [string, string][];
  types?: [string, string][];
  concepts?: [string, string][];
}>;
