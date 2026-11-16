export const pinTypes = [
  { option: "Hard Enamel", title: "Hard enamel pins", icon: "palette", description: "The enamel is finished level with the metal outlines for a smooth face. This works well for clean logos and simple color blocks. Give the visible metal borders enough room to define the artwork." },
  { option: "Soft Enamel", title: "Soft enamel pins", icon: "layers", description: "The enamel sits below the raised metal lines, giving the design a textured finish. Consider soft enamel if you want a noticeable ridge around lettering or other parts of the artwork." },
  { option: "Printed", title: "Printed pins", icon: "photo", description: "A printed face can preserve shading, gradients, and fine artwork. Send a sharp source file and check the crop and smallest details at the finished size." },
  { option: "Die Struck", title: "Die-struck metal pins", icon: "badge", description: "Raised and recessed metal shapes carry the design without colored enamel. This approach suits a crest, monogram, or emblem that reads clearly in a single metal tone." },
  { option: "3D", title: "3D sculpted pins", icon: "layers", description: "Sculpted relief uses rounded surfaces to give an emblem, mascot, or landmark dimension. Include reference views and point out the details that should stand highest." },
  { option: "Cut Out", title: "Cut-out pins", icon: "badge", description: "Open areas through the metal can frame a monogram or give a silhouette more definition. Check that the remaining metal connects the parts of the design at the intended size." },
  ] as const;

export const pinBackings = [
  ["Military Clutch", "Also called a butterfly clutch. Pinch the metal wings to release it from the post. It suits a traditional lapel or display pin."],
  ["Rubber Clutch", "A flexible cap presses onto the pin post. Consider it when you want a softer surface against the garment."],
  ["Jewelry Clutch", "A post clasp for a jewelry-style finish. Confirm how the clasp opens and how much clearance it needs behind the garment."],
  ["Key Chain", "Use the emblem as a keychain charm. Plan the ring position so the design hangs upright."],
  ["Magnet Backing", "Holds the design against fabric without a pin hole. Fabric thickness and emblem weight affect the hold."],
  ["Deluxe Clutch", "Discuss this option if you want a more secure hold for a pin worn frequently. Confirm the release mechanism when reviewing the hardware."],
  ["Cufflink", "Use the design on a shirt cuff. Check the face size and orientation against the cuff and buttonhole."],
  ["Hat Clip", "Slides onto the edge of a brim. Check the brim thickness and the direction the design should face."],
  ["Safety Pin", "A hinged pin closes into a catch. Consider it for a wide badge and review how the hardware fits behind the design."],
] as const;


export const pinSteps = [
  ["Share your design", "Send a logo, sketch, or description with the intended size, quantity, and any deadline."],
  ["Choose the finish and backing", "Discuss the enamel or metal finish, plating, shape, and attachment for the intended use."],
  ["Approve the proof", "Review the outline, color placement, metal lines, and position of the posts. Request changes before approval."],
  ["Move into production", "Production begins once the proof and order details are agreed."],
] as const;

export const pinFaqs = [
  ["What’s the difference between hard and soft enamel pins?", "Hard enamel has a smooth face with color level with the metal outlines. Soft enamel sits below the outlines, creating a raised metal edge around each color area."],
  ["Can I use gradients or a photo in an enamel pin?", "Enamel works with distinct color areas separated by metal lines. Share the original artwork so we can review which details can be simplified and discuss whether another production method suits the design."],
  ["Which backing should I use for a backpack?", "A deluxe clutch is worth discussing for a pin that may be bumped or pulled. Tell us the fabric thickness and how often you want to remove the pin."],
  ["What affects the price of custom pins?", "The size, quantity, artwork, finish, and backing help determine your quote. Include any packaging or delivery requirements when you submit your request."],
  ["Is there a minimum order?", "There is no minimum order quantity. Include the number you need and let us know if you are considering multiple quantities."],
] as const;
