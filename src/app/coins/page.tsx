import { WhyChoosePatchesHub } from "@/components/sections/why-choose-patcheshub";
import { PatchCardIcon } from "@/components/ui/patch-card-icon";
import { CoinOptionIcon } from "@/components/ui/coin-option-icon";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { quoteChoices } from "@/content/quote";
import { PatchFaq } from "@/components/sections/patch-faq";
import { PatchOrderProcess } from "@/components/sections/patch-order-process";
import { PatchPortfolioCarousel } from "@/components/sections/patch-portfolio-carousel";
import { ArrowIcon } from "@/components/ui/icons";
import { QuoteIcon } from "@/components/ui/quote-icon";

const title = "Custom Challenge Coins & Commemorative Coins";
const description = "Design custom coins with enamel, printed, or die-struck artwork. Compare coin shapes, one- and two-sided designs, plating, and seven edge styles.";
const origin = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title, description,
  ...(origin && { alternates: { canonical: new URL("/coins", origin) }, robots: { index: true, follow: true } }),
};

const quoteUrl = "/quote?product=coins";
const sunrise = { src: "/assets/products/coins/sunrise-coin-concept.png", alt: "Gold-tone commemorative coin with a raised sunrise motif", width: 700, height: 700 };
const detail = { src: "/assets/products/coins/detail.webp", alt: "Commemorative coin concepts showing raised metal, colored enamel, and a textured edge", width: 1200, height: 800 };
const guides: Record<string, { title: string; descriptions: readonly string[] }> = {
  material: { title: "Coin styles", descriptions: [
    "Recessed enamel leaves raised metal lines you can feel. Use clear color blocks and defined outlines.",
    "Enamel is finished level with the surrounding metal for a smooth face. Give each color area enough room at the finished size.",
    "Printing suits gradients, shading, and detailed illustrations. Send your sharpest original artwork and check small text at actual size.",
    "Raised and recessed metal create the design. This works well for crests, lettering, and designs that read clearly in one metal tone.",
  ] },
  shape: { title: "Shape and size", descriptions: [
    "A circular outline leaves room for a central emblem and lettering around the perimeter.",
    "Follow the silhouette of a shield, mascot, or landmark. Check narrow points and leave clearance around the edge.",
  ] },
  design: { title: "One or two designed faces", descriptions: [
    "Put the artwork on one face. Ask how the reverse will be finished.",
    "Use the reverse for a date, motto, or second emblem. Mark the top of each face so both designs have the intended orientation.",
  ] },
  plating: { title: "Plating and finishes", descriptions: [
    "A warm yellow metal tone for awards and anniversary coins. Pair it with navy or deep green enamel to make the exposed metal stand out.",
    "A cool, neutral tone that pairs with most enamel colors. Use it for crisp lettering or a clean border around a colorful emblem.",
    "A reddish metal tone that works with cream, brown, and muted blue. Check how the warm metal reads beside any orange or red in your design.",
    "A dark finish that frames bright enamel. Check small unfilled lettering in the proof so it stays legible against the surrounding metal.",
    "Use two metal tones to separate parts of the design. Mark which tone belongs on the rim, emblem, or lettering when you send the artwork.",
    "Warm gold with darker recesses to bring out raised lettering and crests. Consider it for a commemorative design with little or no enamel.",
    "Cool silver with darker recesses that help define fine relief. It suits monochrome artwork with raised lettering or layered detail.",
    "Reddish copper with darker recesses for a subdued, weathered look. Use raised highlights to keep the main emblem distinct.",
    "Muted brass with darker recesses. It works well for heritage emblems and relief designs that rely on texture and contrast.",
  ] },
  edge: { title: "Coin edges", descriptions: [
    "A plain, uninterrupted edge that keeps attention on the faces. Consider it when the rim artwork is already detailed.",
    "A twisted pattern that adds a decorative border. Pair it with a simple perimeter so it has room to read.",
    "Intersecting cuts create a repeating texture. Ask to review the pattern at the intended coin size.",
    "Angled facets catch the light as the coin turns. Consider this edge when you want a reflective accent around the face.",
    "Closely spaced grooves give the coin a familiar ridged feel. Consider reeding when the edge should be noticeable by touch.",
    "Diagonal cuts give the perimeter a directional pattern. Check how the angle complements any lines or lettering near the rim.",
    "Repeating notches create a pronounced edge pattern. Confirm how the notches will look around tight corners on a custom shape.",
  ] },
};

const stylePhotos: Record<string, { file: string; alt: string }> = {
  "Soft Enamel": { file: "soft-enamel", alt: "Coral sunrise coin with recessed enamel and raised gold outlines" },
  "Hard Enamel": { file: "hard-enamel", alt: "Navy mountain coin with a smooth enamel face and silver outlines" },
  "Offset Printed": { file: "offset-printed", alt: "Printed coin with a sunset landscape and smoothly blended colors" },
  "Die Struck": { file: "die-struck", alt: "Antique brass coin with an uncolored raised compass rose" },
};

const steps = [
  ["Share the occasion", "Send the artwork, quantity, target dimensions, and the date you need the coins."],
  ["Choose the specifications", "Discuss the style, shape, faces, plating, and edge in your quote."],
  ["Review both faces", "Check dates, lettering, metal and enamel areas, and the orientation of the reverse before approving."],
  ["Move into production", "Production begins after the proof and order details are approved."],
] as const;

export default function CoinsPage() {
  return (
    <>
      <section className="pvc-hero">
        <div className="page-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Coins</span></nav>
          <div className="patch-page-grid pvc-hero-grid">
            <div>
              <h1>Custom challenge coins.</h1>
              <p className="pvc-intro">Create a commemorative coin for a team, milestone, or collection. Build the design around your emblem, then choose how the faces, metal finish, and edge work together.</p>
              <div className="pvc-actions"><Link className="button button-red" href={quoteUrl}>Get a coin quote <ArrowIcon /></Link></div>
            </div>
            <figure className="pvc-photo"><Image {...sunrise} preload sizes="(max-width: 699px) 90vw, 48vw" /></figure>
          </div>
        </div>
      </section>

      <section className="section-space pin-use coin-benefits" aria-labelledby="coin-benefits-title">
        <div className="page-container pin-use-layout">
          <div>
            <h2 id="coin-benefits-title">Benefits of custom coins</h2>
            <figure className="pvc-photo keychain-feature-photo coin-benefits-photo">
              <Image src="/assets/products/coins/benefits.webp" alt="Antique brass commemorative coin in an open navy presentation box" width={1200} height={800} sizes="(max-width: 699px) 90vw, 42vw" />
              <figcaption>Commemorative coin presentation concept</figcaption>
            </figure>
          </div>
          <div className="patch-faq-list coin-benefits-accordion">
            <details className="patch-glass-card patch-faq-card" name="coin-benefits" open><summary><span className="coin-benefit-label"><PatchCardIcon kind="badge" /><span>Recognize a milestone</span></span><span className="patch-faq-toggle" aria-hidden="true" /></summary><p>Give team members, volunteers, or event participants a keepsake tied to a specific achievement. Use a date, emblem, or short inscription to record what the coin commemorates.</p></details>
            <details className="patch-glass-card patch-faq-card" name="coin-benefits"><summary><span className="coin-benefit-label"><PatchCardIcon kind="layers" /><span>Make the design tactile</span></span><span className="patch-faq-toggle" aria-hidden="true" /></summary><p>Raised metal, recessed backgrounds, and patterned edges give the artwork a physical texture. Use relief to highlight the central emblem and choose a finish that helps it stand out.</p></details>
            <details className="patch-glass-card patch-faq-card" name="coin-benefits"><summary><span className="coin-benefit-label"><PatchCardIcon kind="box" /><span>Create a coordinated set</span></span><span className="patch-faq-toggle" aria-hidden="true" /></summary><p>Keep a shared shape and finish across a series, then change the reverse for each year, chapter, or achievement. The front ties the collection together while each coin marks its own occasion.</p></details>
          </div>
        </div>
      </section>

      {quoteChoices("coins", "").map(({ key, options }, index) => (
        key === "material" ? (
          <section className="section-space coin-style-gallery" key={key} aria-labelledby="coin-material">
            <div className="page-container">
              <h2 id="coin-material">Coin styles</h2>
              <p className="pvc-section-intro">Compare how each finish handles color, texture, and fine detail.</p>
              <dl className="coin-style-gallery-grid">
                {options.map((option, i) => {
                  const photo = stylePhotos[option];
                  return (
                    <div className="coin-style-gallery-entry" key={option}>
                      <dt>
                        <Image src={`/assets/products/coins/${photo.file}.webp`} alt={photo.alt} width={640} height={640} sizes="(max-width: 599px) 90vw, (max-width: 1099px) 45vw, 24vw" />
                        <span>{option}</span>
                      </dt>
                      <dd>{guides.material.descriptions[i]}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </section>
        ) : key === "shape" || key === "design" ? (
          <section className={`section-space coin-study coin-study-${key}`} key={key} aria-labelledby={`coin-${key}`}>
            <div className="page-container coin-study-layout">
              <figure className="coin-study-photo">
                <Image
                  src={key === "shape" ? "/assets/products/coins/shape-study.webp" : "/assets/products/coins/faces-study.webp"}
                  alt={key === "shape" ? "Round gold and shield-shaped silver coin concepts" : "Matching brass coin faces showing a mountain crest and a compass rose"}
                  width={1200}
                  height={800}
                  sizes="(max-width: 799px) 90vw, 55vw"
                />
                <figcaption>{key === "shape" ? "Round and custom silhouette concepts" : "Front and reverse of a double-sided concept"}</figcaption>
              </figure>
              <div className="coin-study-copy">
                <h2 id={`coin-${key}`}>{guides[key].title}</h2>
                <dl>
                  {options.map((option, i) => (
                    <div key={option}>
                      <dt>{option}</dt>
                      <dd>{guides[key].descriptions[i]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        ) :
        <section className={`section-space ${key === "plating" || key === "edge" ? "coin-spec-compact" : ""} ${index % 2 ? "patch-planning" : "patch-buying-guide"}`} key={key} aria-labelledby={`coin-${key}`}>
          <div className="page-container coin-spec-layout">
            <h2 id={`coin-${key}`}>{guides[key].title}</h2>
            <dl className="coin-spec-options">
              {options.map((option, i) => (
                <div key={option}><dt>{key === "plating" || key === "edge" ? <CoinOptionIcon option={option} /> : <QuoteIcon kind={option} />}{option}</dt><dd>{guides[key].descriptions[i]}</dd></div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <section className="section-space patch-photo-print">
        <div className="page-container patch-page-grid keychain-feature">
          <div className="keychain-editorial-copy">
            <h2>Prepare your coin artwork</h2>
            <h3>Check the lettering at actual size</h3>
            <p>Print the design at the proposed dimensions. Give dates, names, and lettering around the rim room to read. Keep essential details clear of the edge treatment.</p>
            <h3>Mark the metal and color areas</h3>
            <p>Provide a vector file or a clear image for each face. Indicate which elements should be raised, recessed, colored, or left as exposed metal. Include any reference colors and mark the top of the reverse.</p>
          </div>
          <figure className="pvc-photo keychain-feature-photo"><Image {...detail} sizes="(max-width: 699px) 90vw, 48vw" /><figcaption>Coin concepts showing relief, enamel, and edge detail</figcaption></figure>
        </div>
      </section>

      <section className="section-space patch-showcase patch-showcase-portfolio" aria-labelledby="coin-portfolio">
        <div className="page-container">
          <h2 id="coin-portfolio">Custom coin design portfolio</h2>
          <PatchPortfolioCarousel labelId="coin-portfolio" slides={[
            { title: "Sunrise relief", description: "A single-tone coin concept with a raised motif and radiating lines.", image: sunrise },
            { title: "Metal, enamel, and edge details", description: "Concept examples showing different ways to use finish and texture.", image: detail },
          ]} />
        </div>
      </section>

      <PatchOrderProcess name="coins" quoteUrl={quoteUrl} steps={steps} actionLabel="Start your coin order" />
      <WhyChoosePatchesHub product="coin" />
      <PatchFaq name="Custom coins" questions={[
        ["Can the front and back have different artwork?", "Choose Double Sided in the quote form and provide both designs. Mark the top of each face to show the intended orientation."],
        ["Which coin style works for a gradient?", "Consider offset printing when a design relies on smooth shading. Send the original artwork so the detail can be reviewed at the finished size."],
        ["What affects the price of a custom coin?", "Quantity, dimensions, shape, design area, plating, and edge treatment help determine the quote. Include any deadline and packaging requirements."],
        ["Can I review the design before production?", "Yes. Check the artwork, dimensions, finish, and edge in the proof. Request any changes before approval."],
      ]} />
    </>
  );
}
