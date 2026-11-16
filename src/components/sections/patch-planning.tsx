import { PatchCardIcon } from "@/components/ui/patch-card-icon";
const applications = {
  pvc: ["Backpacks and outdoor gear", "Measure the usable panel between seams or zippers. If the patch needs to swap between bags, tell us which ones have a compatible loop panel."],
  embroidered: ["Uniforms and club jackets", "Measure the chest or sleeve area on the garment. Leave room around seams and check that the lettering reads at the distance people will usually see it."],
  woven: ["Small apparel badges", "Print the logo at its intended size and check the thinnest lines and smallest letters. Include the original art so we can review any details that need more room."],
  chenille: ["Varsity jackets and large emblems", "Place a paper outline on the jacket to check how the letter or mascot fits around pockets, snaps, and seams. Give narrow strokes room for the yarn pile."],
  leather: ["Caps, denim, and bags", "Measure the flattest usable area, especially on curved cap panels. Include a single-color version of the logo to show which shapes and letters need to remain distinct."],
  printed: ["Illustrated badges and merch", "Place the image inside the proposed patch outline before cropping. Leave space around faces and lettering, and share the original file at its largest available size."],
} as const;

export function PatchPlanning({ id }: { id: keyof typeof applications }) {
  const [application, guidance] = applications[id];

  return (
    <section className="section-space patch-planning" aria-labelledby="patch-planning-title">
      <div className="page-container">
        <h2 id="patch-planning-title">Plan the fit and attachment</h2>
        <div className="patch-showcase-grid">
          <article className="patch-glass-card">
            <PatchCardIcon kind="badge" />
            <h3>{application}</h3>
            <p>{guidance}</p>
          </article>
          <article className="patch-glass-card">
            <PatchCardIcon kind="ruler" />
            <h3>Check the finished dimensions</h3>
            <p>Trace the proposed width and height on paper, cut out the shape, and hold it against the item. Share those measurements and flag any lettering that needs to stay readable.</p>
          </article>
          <article className="patch-glass-card">
            <PatchCardIcon kind="link" />
            <h3>Decide how it should attach</h3>
            <p>Tell us what the patch will go on and how often it needs to come off. Mention an existing loop panel, delicate fabric, or frequent washing so we can discuss a suitable backing.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
