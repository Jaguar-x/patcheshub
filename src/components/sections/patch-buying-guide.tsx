import { PatchCardIcon } from "@/components/ui/patch-card-icon";
import Image from "next/image";
import Link from "next/link";
import { patchSearch } from "@/content/patch-search";
import { patchTypes } from "@/content/patch-types";
import { ArrowIcon } from "@/components/ui/icons";

export function PatchBuyingGuide({ id }: { id: keyof typeof patchSearch }) {
  const { choice, proof, alternative, photoAlt } = patchSearch[id];
  const related = patchTypes.find((patch) => patch.id === alternative);

  return (
    <section className="section-space patch-buying-guide" aria-labelledby="patch-buying-guide-title">
      <div className="page-container">
        <h2 id="patch-buying-guide-title">Choose a finish and review your proof</h2>
        <div className="patch-page-grid patch-guide-grid">
          <figure className="patch-guide-photo">
            <Image className="pvc-photo" src={`/assets/products/patches/${id}-lifestyle.webp`} alt={photoAlt} width={1200} height={800} sizes="(max-width: 699px) 90vw, 48vw" />
            <figcaption>Lifestyle concept</figcaption>
          </figure>
          <div className="patch-guide-cards">
            <article className="patch-glass-card">
              <PatchCardIcon kind="palette" />
              <h3>Match the finish to your artwork</h3>
              <p>{choice}</p>
              {related && <Link className="text-link patch-guide-link" href={`/patches/${related.id}`}>Explore {related.name.toLowerCase()} <ArrowIcon /></Link>}
            </article>
            <article className="patch-glass-card">
              <PatchCardIcon kind="proof" />
              <h3>What to look for in your proof</h3>
              <p>{proof}</p>
              <p>Check the overall dimensions and outline before you approve the design for production.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
