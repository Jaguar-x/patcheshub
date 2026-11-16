import { KeychainFinishGuide } from "@/components/sections/keychain-finish-guide";
import Image from "next/image";
import Link from "next/link";
import { keychainSpecifications } from "@/content/keychain-specifications";
import { keychainGuides } from "@/content/keychain-guides";
import { PatchPortfolioCarousel } from "@/components/sections/patch-portfolio-carousel";
import { PatchFaq } from "@/components/sections/patch-faq";
import { PatchOrderProcess } from "@/components/sections/patch-order-process";
import { WhyChoosePatchesHub } from "@/components/sections/why-choose-patcheshub";
import { ArrowIcon } from "@/components/ui/icons";
import { PatchCardIcon } from "@/components/ui/patch-card-icon";
import { keychainTypes } from "@/content/keychains";

const steps = [
  ["Share your idea", "Send a logo, sketch, or description with the quantity, size, and any deadline."],
  ["Review the options", "We’ll discuss the material, outline, colors, and attachment and prepare your quote."],
  ["Approve your proof", "Check the artwork, lettering, and ring placement. Request any changes before approving it."],
  ["Move into production", "Production begins once you approve the proof and agree to the order details."],
] as const;

export function KeychainsPage({ type }: { type?: (typeof keychainTypes)[number] }) {
  const specifications = type && keychainSpecifications[type.id];
  const guide = type && keychainGuides[type.id];
  const name = type?.name ?? "Keychains";
  const quoteUrl = type ? `/quote?product=keychains&style=${type.id}` : "/quote?product=keychains";

  return (
    <>
      <section className="pvc-hero">
        <div className="page-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{name}</span>
          </nav>
          <div className="patch-page-grid pvc-hero-grid">
            <div>
              <p className="eyebrow"><span className="tiny-square" /> {type?.finish ?? "Custom accessories"}</p>
              <h1>Custom {name.toLowerCase()}.</h1>
              <p className="pvc-intro">{type?.description ?? "Make a keychain around your logo, illustration, or team name. Choose molded PVC for bold relief or embroidery for a tactile stitched finish."}</p>
              <div className="pvc-actions"><Link className="button button-red" href={quoteUrl}>Get a keychain quote <ArrowIcon /></Link></div>
            </div>
            {type?.id === "embroidered" ? (
              <figure className="pvc-photo">
                <Image src="/assets/products/keychains/embroidered-portfolio.webp" alt="Embroidered fabric key fob concepts with stitched lettering and split rings" width={1200} height={800} preload sizes="(max-width: 699px) 90vw, 48vw" />
              </figure>
            ) : (
              <figure className="pvc-photo">
                <Image src="/assets/products/keychains/sunrise-keychain-concept.png" alt="Navy and red sunrise keychain concept with a metal ring" width={700} height={700} preload sizes="(max-width: 699px) 90vw, 48vw" />
              </figure>
            )}
          </div>
        </div>
      </section>

      {type && (
        <section className="section-space patch-planning">
          <div className="page-container">
            <h2>Design your {name.toLowerCase()}</h2>
            <div className="patch-showcase-grid">
              {type.details.map(([title, description], index) => (
                <article className="patch-glass-card" key={title}>
                  <PatchCardIcon kind={index === 0 ? "layers" : index === 1 ? "badge" : "link"} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {type ? <KeychainFinishGuide type={type} /> : (
        <section className="section-space patch-showcase" aria-labelledby="keychain-materials">
          <div className="page-container">
            <h2 id="keychain-materials">Choose a keychain material</h2>
            <div className="patch-showcase-grid">
              {keychainTypes.map((item) => (
                <article className="patch-glass-card" key={item.id}>
                  <PatchCardIcon kind={item.id === "pvc" ? "layers" : "stitch"} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link className="text-link patch-guide-link" href={`/keychains/${item.id}`}>Explore {item.name.toLowerCase()} <ArrowIcon /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {guide && (
        <>
          <section className="section-space patch-buying-guide">
            <div className="page-container">
              <h2>Benefits of {name.toLowerCase()}</h2>
              <div className="patch-showcase-grid">
                {guide.benefits.map(([title, description], index) => (
                  <article className="patch-glass-card" key={title}>
                    <PatchCardIcon kind={index === 0 ? "layers" : index === 1 ? "palette" : "badge"} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-space patch-planning">
            <div className="page-container patch-page-grid keychain-feature">
              <figure className="pvc-photo keychain-feature-photo">
                <Image {...(type?.id === "pvc" ? keychainGuides.pvc.concepts[1].image : keychainGuides.embroidered.concepts[0].image)} sizes="(max-width: 699px) 90vw, 48vw" />
                <figcaption>Keychain design concepts</figcaption>
              </figure>
              <div className="keychain-editorial-copy">
                <h2>Plan your keychain design</h2>
                <h3>Where this finish works</h3>
                <p>{guide.uses}</p>
                <h3>What to send with your artwork</h3>
                <p>{guide.checklist}</p>
              </div>
            </div>
          </section>

          <section className="section-space patch-showcase patch-showcase-portfolio" aria-labelledby="keychain-portfolio">
            <div className="page-container">
              <h2 id="keychain-portfolio">{name} design portfolio</h2>
              <p className="pvc-section-intro">Concept studies showing how artwork, edge treatment, and ring placement can work together.</p>
              <PatchPortfolioCarousel slides={guide.concepts} labelId="keychain-portfolio" />
            </div>
          </section>
        </>
      )}

      {specifications && (
        <>
          <section className="section-space patch-photo-print">
            <div className="page-container patch-page-grid keychain-feature">
              <div className="keychain-editorial-copy">
                <h2>Construction and hardware</h2>
                <ol className="keychain-editorial-list">
                  {specifications.construction.map(([title, description]) => (
                    <li key={title}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="patch-print keychain-detail-print">
                <figure className="patch-print-frame">
                  <Image {...specifications.detail} sizes="(max-width: 699px) 80vw, 36vw" />
                  <figcaption>{specifications.caption}</figcaption>
                </figure>
                <span className="patch-print-note">{specifications.note}</span>
              </div>
            </div>
          </section>
          <section className="section-space patch-buying-guide">
            <div className="page-container patch-page-grid keychain-feature">
              <h2>What to check before you approve</h2>
              <div className="keychain-editorial-copy">
                <ol className="keychain-editorial-list">
                  {specifications.proof.map(([title, description]) => (
                    <li key={title}><h3>{title}</h3><p>{description}</p></li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </>
      )}

      <PatchOrderProcess name={name} quoteUrl={quoteUrl} steps={steps} actionLabel="Start your keychain order" />
      <WhyChoosePatchesHub product="keychain" />
      <PatchFaq name={name} questions={[
        type?.question ?? ["Which keychain material should I choose?", "PVC suits artwork with bold outlines and separated colors. Embroidery suits designs where raised thread and a fabric finish are part of the look."],
        ...(guide ? [guide.faq] : []),
        ["What should I include in my quote request?", "Share your artwork or idea, estimated quantity, finished dimensions, intended use, and any delivery deadline."],
        ["Can I see a proof before production?", "Yes. Review the artwork, outline, and ring placement, and request any revisions before approving the proof."],
      ]} />
      {guide && (
        <section className="pvc-quote">
          <div className="page-container patch-page-grid pvc-editorial">
            <div><h2>Ready to design your keychain?</h2><p>Send your artwork or describe the idea, including the size, quantity, and any deadline.</p></div>
            <Link className="button button-red" href={quoteUrl}>Get a keychain quote <ArrowIcon /></Link>
          </div>
        </section>
      )}
    </>
  );
}
