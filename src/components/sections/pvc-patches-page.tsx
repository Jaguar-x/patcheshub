import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons";
import { OrderStepArt } from "@/components/ui/order-step-art";

const quoteUrl = "/contact?product=pvc#project-form";
const assetPath = "/assets/products/patches";
const faqs = [
  ["What are PVC patches made of?", "PVC patches are made from flexible polyvinyl chloride molded into a shape. Raised areas and recessed channels give logos and lettering a distinct outline."],
  ["What is the difference between 2D and 3D PVC patches?", "A 2D design uses flat surfaces at different heights, like steps. A 3D design uses rounded or sculpted surfaces for a more dimensional effect. Bold lettering often works well in 2D, while a mascot may benefit from sculpted detail."],
  ["Can PVC patches have hook-and-loop backing?", "Hook-and-loop is useful when you want to swap patches on compatible gear. Tell us what the patch will attach to so we can review the backing with you."],
  ["What affects the price of custom PVC patches?", "Size, quantity, artwork complexity, and backing all help define the project. Include those details in your quote request, along with any deadline you are working toward."],
  ["Do I need finished artwork or a minimum order?", "There is no minimum order quantity. You can start with a logo, a sketch, or a description. We offer design assistance and proof revisions so you can review the artwork before production."],
  ["How do I choose the right patch size?", "Measure the area where the patch will sit, including room around seams and zippers. If your design includes small lettering, share both the artwork and your target dimensions so we can review readability."],
  ["Can I use gradients or very fine lettering?", "Molded PVC works best with distinct color areas and clear outlines. If smooth gradients or photographic details are central to your artwork, a printed patch may suit it better."],
  ["Can I review a proof before production?", "Yes. Review the proof for layout, shape, lettering, and color placement. If something needs adjusting, request a revision before approving the design."],
  ["What should I include if I have a deadline?", "Include the date you need the patches in hand and your delivery destination in your inquiry. We can review timing alongside the design and order details."],
] as const;

const orderSteps = [
  ["Share your idea", "Tell us what you’re making and where the patch will go. Include a logo, sketch, or description, plus your estimated size and quantity."],
  ["Review your options", "We’ll work through the shape, molded relief, colors, and backing with you. Share any deadline so it can be considered in your quote."],
  ["Approve your proof", "Check the layout, lettering, and color placement. Ask for revisions where needed and approve the design once it’s ready."],
  ["Move into production", "Once the proof and order details are agreed, the approved design guides production of your custom PVC patches."],
] as const;

const portfolio = [
  { file: "pvc-patch-collection.png", title: "Outdoor badge series", alt: "Round, triangular, and shield-shaped outdoor patch concepts" },
  { file: "pvc-patch-relief.png", title: "Layered mountain shield", alt: "Navy shield patch concept with raised coral and cream artwork" },
  { file: "pvc-patch-backpack.png", title: "Backpack emblem", alt: "Red and navy mountain patch concept on an olive backpack" },
] as const;

export function PvcPatchesPage() {
  return (
    <>
      <section className="pvc-hero">
        <div className="page-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/#patches">Patches</Link><span aria-hidden="true">/</span>
            <span aria-current="page">PVC patches</span>
          </nav>
          <div className="patch-page-grid pvc-hero-grid">
            <div>
              <p className="eyebrow"><span className="tiny-square" /> Molded rubber patches</p>
              <h1>Custom PVC<br />patches.</h1>
              <p className="pvc-intro">Turn your logo into a flexible rubber patch with crisp outlines, bold colors, and raised details you can feel. Made for bags, uniforms, outdoor gear, and brand merchandise.</p>
              <div className="pvc-actions">
                <Link className="button button-red" href={quoteUrl}>Get a PVC patch quote <ArrowIcon /></Link>
                <a className="text-link" href="#pvc-design">Explore design options</a>
              </div>
            </div>
            <figure className="pvc-photo">
              <Image src={`${assetPath}/pvc-patch-collection.png`} alt="Three molded PVC patch concepts in round, triangular, and shield shapes" width={1536} height={1024} preload sizes="(max-width: 699px) 90vw, 52vw" />
            </figure>
          </div>
        </div>
      </section>
      <div className="pvc-benefits"><div className="page-container"><span>No minimum order quantity</span><span>Design assistance</span><span>Proof revisions</span></div></div>

      <section id="pvc-design" className="section-space">
        <div className="page-container patch-page-grid pvc-editorial">
          <figure className="pvc-photo">
            <Image src={`${assetPath}/pvc-patch-relief.png`} alt="Close-up of raised coral and cream details molded into a navy PVC shield patch concept" width={1536} height={1024} sizes="(max-width: 699px) 90vw, 48vw" />
          </figure>
          <div>
            <p className="eyebrow">Design options</p>
            <h2>Build depth into your design.</h2>
            <p>A mold gives PVC rubber patches their shape and relief. Separate color areas help simple logos, bold lettering, and emblems stay easy to read.</p>
            <dl className="pvc-specs">
              <div><dt>2D or 3D relief</dt><dd>Use flat levels for graphic artwork or ask about rounded detail for a sculpted look.</dd></div>
              <div><dt>Shape and size</dt><dd>Choose a circle, shield, or an outline that follows your artwork. Measure the surface where the patch will go.</dd></div>
              <div><dt>Backing</dt><dd>Tell us whether you need a removable patch for a loop panel or a permanent attachment. We can discuss what fits your project.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="pvc-use section-space">
        <div className="page-container patch-page-grid pvc-editorial">
          <div>
            <p className="eyebrow">On the gear</p>
            <h2>Give everyday gear a signature.</h2>
            <p>Use PVC patches to identify a team, personalize a pack, or give a merch collection a recognizable emblem. If your design calls for a stitched texture, explore embroidered patches. For photo detail or gradients, consider printed patches.</p>
            <div className="patch-related">
              <Link className="text-link" href="/patches/embroidered">Embroidered patches <ArrowIcon /></Link>
              <Link className="text-link" href="/patches/printed">Printed patches <ArrowIcon /></Link>
            </div>
          </div>
          <figure className="pvc-photo">
            <Image src={`${assetPath}/pvc-patch-backpack.png`} alt="Red and navy PVC mountain patch concept mounted on an olive outdoor backpack" width={1536} height={1024} sizes="(max-width: 699px) 90vw, 48vw" />
          </figure>
        </div>
      </section>

      <section className="section-space pvc-portfolio" id="pvc-portfolio" aria-labelledby="pvc-portfolio-title">
        <div className="page-container">
          <p className="eyebrow">Design portfolio</p>
          <h2 id="pvc-portfolio-title">PVC patch concepts</h2>
          <p className="pvc-section-intro">Explore three concept studies for custom rubber patches, from a coordinated badge collection to a single emblem designed for outdoor gear.</p>
          <div className="pvc-card-grid">
            {portfolio.map(({ file, title, alt }) => (
              <article key={file}>
                <h3>{title}</h3>
                <div className="pvc-photo">
                  <Image src={`${assetPath}/${file}`} alt={alt} width={1536} height={1024} sizes="(max-width: 699px) 90vw, 30vw" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pvc-order" id="pvc-order" aria-labelledby="pvc-order-title">
        <div className="page-container">
          <p className="eyebrow">Order process</p>
          <h2 id="pvc-order-title">How to order custom PVC patches</h2>
          <p className="pvc-section-intro">Start with the details you have. We’ll help you work through the choices before you approve the design.</p>
          <ol className="pvc-card-grid pvc-order-grid">
            {orderSteps.map(([title, description], index) => (
              <li key={title}>
                <div className="pvc-step-visual">
                  <span className="pvc-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <OrderStepArt step={index} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
          <Link className="button button-red" href={quoteUrl}>Start your PVC patch order <ArrowIcon /></Link>
        </div>
      </section>

      <section className="section-space" aria-labelledby="pvc-faq">
        <div className="page-container patch-page-grid pvc-editorial pvc-faq">
          <div><p className="eyebrow">Before you order</p><h2 id="pvc-faq">PVC patch questions</h2></div>
          <div>{faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}</div>
        </div>
      </section>

      <section className="pvc-quote">
        <div className="page-container patch-page-grid pvc-editorial">
          <div>
            <p className="eyebrow">Start your project</p>
            <h2>Have a patch in mind?</h2>
            <p>Share your artwork or describe the idea. Include the size, quantity, where it will go, and your deadline if you have one.</p>
          </div>
          <Link className="button button-red" href={quoteUrl}>Get a PVC patch quote <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
