import { PatchCardIcon } from "@/components/ui/patch-card-icon";
import { PatchPortfolioCarousel } from "@/components/sections/patch-portfolio-carousel";
import { patchShowcases } from "@/content/patch-showcases";

type Showcase = {
  benefits: [string, string][];
  types?: [string, string][];
  concepts?: [string, string][];
};

export function PatchBenefits({ id, name }: { id: keyof typeof patchShowcases; name: string }) {
  const { benefits, types }: Showcase = patchShowcases[id];

  return (
    <section className="section-space patch-showcase" aria-labelledby="patch-benefits">
      <div className="page-container">
        <h2 id="patch-benefits">Why choose {name.toLowerCase()}?</h2>
        <CardGrid items={benefits} />
        {types && (
          <div className="patch-showcase-types">
            <h2>{id === "printed" ? "Artwork types" : "Patch types"}</h2>
            <CardGrid items={types} />
          </div>
        )}
      </div>
    </section>
  );
}

function CardGrid({ items }: { items: [string, string][] }) {
  return (
    <div className="patch-showcase-grid">
      {items.map(([title, description]) => (
        <article className="patch-glass-card" key={title}>
          <PatchCardIcon heading={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}

export function PatchPortfolio({ id, name }: { id: Exclude<keyof typeof patchShowcases, "pvc">; name: string }) {
  const [[sampleTitle, sampleDescription], [conceptTitle, conceptDescription]] = patchShowcases[id].concepts;

  return (
    <section className="section-space patch-showcase patch-showcase-portfolio" aria-labelledby="patch-portfolio">
      <div className="page-container">
        <h2 id="patch-portfolio">{name} portfolio</h2>
        <PatchPortfolioCarousel labelId="patch-portfolio" slides={[
          {
            title: sampleTitle,
            description: sampleDescription,
            image: {
              src: `/assets/patch-collection/${id}-sample.webp`,
              alt: `${name} catalog sample`,
              width: 900,
              height: 900,
            },
          },
          { title: conceptTitle, description: conceptDescription },
        ]} />
      </div>
    </section>
  );
}
