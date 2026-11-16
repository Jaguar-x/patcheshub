import Image from "next/image";
import { patchTypes } from "@/content/patch-types";

const notes = {
  pvc: "Raised details you can feel.",
  embroidered: "Bold artwork, built in stitches.",
  woven: "Fine threads for fine details.",
  chenille: "Plush yarn at varsity scale.",
  leather: "A tonal mark with visible grain.",
  printed: "Smooth shading in full color.",
} as const;

export function PatchPhotoPrint({ id }: { id: keyof typeof notes }) {
  const patch = patchTypes.find((item) => item.id === id)!;

  return (
    <section className="section-space patch-photo-print" aria-labelledby="patch-photo-print-title">
      <div className="page-container patch-page-grid patch-print-layout">
        <div>
          <h2 id="patch-photo-print-title">A closer look at {patch.name.toLowerCase()}</h2>
          <p>{patch.description}</p>
        </div>
        <div className="patch-print">
          <figure className="patch-print-frame">
            <Image src={`/assets/patch-collection/${id}-sample.webp`} alt={`${patch.name} sample with ${patch.finish.toLowerCase()}`} width={900} height={900} sizes="(max-width: 699px) 82vw, 45vw" />
            <figcaption>{patch.finish}</figcaption>
          </figure>
          <span className="patch-print-note">{notes[id]}</span>
        </div>
      </div>
    </section>
  );
}
