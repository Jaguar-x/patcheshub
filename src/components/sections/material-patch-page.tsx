import { PatchPhotoPrint } from "@/components/sections/patch-photo-print";
import { CustomerReviews } from "@/components/sections/customer-reviews";
import { RelatedPatchTypes } from "@/components/sections/related-patch-types";
import { WhyChoosePatchesHub } from "@/components/sections/why-choose-patcheshub";
import { PatchBuyingGuide } from "@/components/sections/patch-buying-guide";
import { PatchPlanning } from "@/components/sections/patch-planning";
import { PatchFaq } from "@/components/sections/patch-faq";
import { PatchOrderProcess } from "@/components/sections/patch-order-process";
import { PatchBenefits, PatchPortfolio } from "@/components/sections/patch-showcase";
import Image from "next/image";
import Link from "next/link";
import { patchTypes } from "@/content/patch-types";
import { patchDesigns } from "@/content/patch-designs";
import { ArrowIcon } from "@/components/ui/icons";

type Patch = Exclude<(typeof patchTypes)[number], { id: "pvc" }>;

export function MaterialPatchPage({ patch }: { patch: Patch }) {
  const design = patchDesigns[patch.id];
  const quoteUrl = `/quote?product=patches&style=${patch.id}`;

  return (
    <>
      <section className="pvc-hero">
        <div className="page-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/#patches">Patches</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{patch.name}</span>
          </nav>
          <div className="patch-page-grid pvc-hero-grid">
            <div>
              <p className="eyebrow"><span className="tiny-square" /> {patch.finish}</p>
              <h1>Custom {patch.name.toLowerCase()}.</h1>
              <p className="pvc-intro">{patch.description}</p>
              <div className="pvc-actions">
                <Link className="button button-red" href={quoteUrl}>Get a quote <ArrowIcon /></Link>
              </div>
            </div>
            <figure className="pvc-photo">
              <Image src={`/assets/patch-collection/${patch.id}-sample.webp`} alt={`${patch.name} sample showing ${patch.finish.toLowerCase()}`} width={900} height={900} preload sizes="(max-width: 699px) 90vw, 52vw" />
            </figure>
          </div>
        </div>
      </section>
      <div className="pvc-benefits"><div className="page-container"><span>No minimum order quantity</span><span>Design assistance</span><span>Proof revisions</span></div></div>

      <PatchBenefits id={patch.id} name={patch.name} />

      <PatchPhotoPrint id={patch.id} />

      <section id="design-options" className="section-space patch-design-section">
        <div className="page-container patch-page-grid pvc-editorial">
          <div>
            <p className="eyebrow">Design options</p>
            <h2>{design.heading}</h2>
            <p>{patch.tip}</p>
          </div>
          <dl className="pvc-specs">
            {design.options.map(([label, description]) => (
              <div key={label}><dt>{label}</dt><dd>{description}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <RelatedPatchTypes current={patch.id} />

      <PatchPlanning id={patch.id} />
      <PatchBuyingGuide id={patch.id} />

      <PatchPortfolio id={patch.id} name={patch.name} />

      <PatchOrderProcess name={patch.name} quoteUrl={quoteUrl} />

      <WhyChoosePatchesHub />

      <CustomerReviews product={patch.id} />
      <PatchFaq name={patch.name} questions={[
        [design.question, design.answer],
        ["Do I need finished artwork?", "You can start with a sketch or description. We offer design assistance and proof revisions before production."],
        ["What affects the price?", "Your quote depends on the patch size, quantity, artwork, and attachment. Share those details and any deadline when you request a quote."],
        ["Can I review a proof before production?", "Yes. Check the layout, lettering, and shape at the intended size and request any revisions before you approve it."],
      ]} />

      <section className="pvc-quote">
        <div className="page-container patch-page-grid pvc-editorial">
          <div><h2>Have a patch in mind?</h2><p>Tell us what you’re making and where the patch will go.</p></div>
          <Link className="button button-red" href={quoteUrl}>Get a quote <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
