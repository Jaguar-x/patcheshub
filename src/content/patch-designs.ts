export const patchDesigns = {
  embroidered: {
    heading: "Give your artwork a stitched finish.",
    options: [
      ["Thread and coverage", "Use contrasting thread for lettering and decide where the base fabric should show through."],
      ["Shape and edge", "A round or shield shape frames a badge. For an outline that follows your logo, flag any narrow points in your artwork."],
      ["Attachment", "Tell us whether the patch will stay on a garment or be swapped on a compatible loop panel."],
    ],
    question: "Will small lettering work in embroidery?",
    answer: "Share the finished size so we can review the letter strokes and spacing. Woven patches are another option for compact lettering.",
  },
  woven: {
    heading: "Keep small details legible.",
    options: [
      ["Lettering", "Leave room between letters and use enough contrast between the text and the background."],
      ["Linework", "Share the original artwork so fine outlines and negative spaces can be checked at the finished size."],
      ["Shape and placement", "Measure the space on the garment or bag, allowing clearance around seams."],
    ],
    question: "How does woven texture differ from embroidery?",
    answer: "A woven design is formed with fine threads across a flatter surface. Embroidery uses raised stitches that give larger shapes more texture.",
  },
  chenille: {
    heading: "Make bold shapes with plush yarn.",
    options: [
      ["Letter and mascot shapes", "Use broad strokes and leave room inside letters so the yarn texture does not close up small openings."],
      ["Outline", "A contrasting outline can help separate a letter or mascot from the garment beneath it."],
      ["Placement", "Check the dimensions against the jacket front, sleeve, or back before choosing a size."],
    ],
    question: "Can I include a small year or team name?",
    answer: "Share the full design and patch size. We can review whether smaller text needs a different treatment to stay readable beside the plush yarn.",
  },
  leather: {
    heading: "Let the surface frame your mark.",
    options: [
      ["Logo contrast", "Check your logo in a single color and leave enough space between fine strokes."],
      ["Shape and proportions", "Use the proportions of the mark to choose a rectangle, circle, or custom outline."],
      ["Placement", "Tell us whether the patch will go on a cap, denim, or a bag so we can review attachment and size."],
    ],
    question: "How should I prepare a logo for leather?",
    answer: "Send the original artwork and your intended size. If your logo relies on color differences, include a single-color version for review.",
  },
  printed: {
    heading: "Carry gradients and illustration into the patch.",
    options: [
      ["Artwork quality", "Send original vector artwork or the largest available image, particularly for photography and fine illustrations."],
      ["Crop and edge", "Keep important lettering and faces away from the edge and indicate where the design should be cropped."],
      ["Color and size", "Share the desired dimensions and note any colors that are especially important to the design."],
    ],
    question: "Can I use a photo or a gradient?",
    answer: "Printed patches suit photographs, gradients, and shaded illustrations. The finished size and source image quality determine how much fine detail stays visible.",
  },
} as const;
