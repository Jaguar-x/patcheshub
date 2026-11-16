import { PinBackingPicker } from "@/components/sections/pin-backing-picker";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PatchFaq } from "@/components/sections/patch-faq";
import { PatchOrderProcess } from "@/components/sections/patch-order-process";
import { PatchPortfolioCarousel } from "@/components/sections/patch-portfolio-carousel";
import { WhyChoosePatchesHub } from "@/components/sections/why-choose-patcheshub";
import { ArrowIcon } from "@/components/ui/icons";
import { PatchCardIcon } from "@/components/ui/patch-card-icon";
import { pinFaqs, pinSteps, pinTypes } from "@/content/pins";

const title = "Custom Lapel Pins & Enamel Pins";
const description = "Design custom lapel pins with enamel, printed, die-struck, 3D, and cut-out styles. Compare pin backings, prepare artwork, and request a quote with no minimum order.";
const origin = process.env.NEXT_PUBLIC_SITE_URL;
const url = origin ? new URL("/pins", origin) : undefined;

export const metadata: Metadata = {
  title,
  description,
  ...(url && {
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description, url, images: [new URL("/assets/products/pins/enamel-pin-details.webp", url)] },
  }),
};

const stylePhotos = ["hard-enamel", "soft-enamel", "printed", "die-struck", "sculpted", "cut-out"] as const;

const quoteUrl = "/quote?product=pins";
const sunrise = { src: "/assets/products/pins/sunrise-pin-concept.png", alt: "Gold-tone enamel pin concepts with red and navy geometric artwork", width: 700, height: 700 };
const details = { src: "/assets/products/pins/enamel-pin-details.webp", alt: "Enamel lapel pin concepts showing metal outlines, colored fills, and clutch hardware", width: 1200, height: 800 };

export default function PinsPage() {
  return (
    <>
      <section className="pvc-hero">
        <div className="page-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Pins</span>
          </nav>
          <div className="patch-page-grid pvc-hero-grid">
            <div>
              <p className="eyebrow"><span className="tiny-square" /> Custom metal accessories</p>
              <h1>Custom lapel pins.</h1>
              <p className="pvc-intro">Turn a logo, illustration, or emblem into a pin for jackets, hats, bags, and displays. Compare enamel and metal finishes, then choose a backing that suits where the pin will go.</p>
              <div className="pvc-actions"><Link className="button button-red" href={quoteUrl}>Get a pin quote <ArrowIcon /></Link></div>
            </div>
            <figure className="pvc-photo">
              <Image {...sunrise} preload sizes="(max-width: 699px) 90vw, 48vw" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section-space patch-showcase" aria-labelledby="pin-types">
        <div className="page-container">
          <h2 id="pin-types">Types of custom lapel pins</h2>
          <div className="pin-style-grid">
            {pinTypes.map(({ title, description, icon }, index) => (
              <article className="patch-glass-card" key={title}>
                <Image className="pin-style-photo" src={`/assets/products/pins/${stylePhotos[index]}.webp`} alt={`${title} concept`} width={480} height={320} sizes="(max-width: 699px) 90vw, (max-width: 999px) 45vw, 30vw" />
                <PatchCardIcon kind={icon} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pin-hardware" aria-labelledby="pin-backing">
        <div className="page-container">
          <h2 id="pin-backing">Pin backings and attachments</h2>
          <p className="pvc-section-intro">Select an option to see how it attaches and where it works best.</p>
          <PinBackingPicker />
        </div>
      </section>

      <section className="section-space patch-photo-print" aria-labelledby="pin-artwork">
        <div className="page-container patch-page-grid keychain-feature">
          <div className="keychain-editorial-copy">
            <h2 id="pin-artwork">Prepare your artwork and finish</h2>
            <h3>Check the design at actual size</h3>
            <p>Print your design at the intended width and height. Check small letters, narrow gaps, and fine outlines. Send vector artwork if you have it, or the sharpest image available. Include the intended size and note any details that must stay legible.</p>
            <h3>Plan color and exposed metal together</h3>
            <p>Enamel colors sit in separate areas defined by metal lines. Mark the colors you want to match and decide whether the visible metal should read as gold-tone, silver-tone, or dark. Ask about available plating and finishes for your artwork.</p>
            <h3>Review the post position</h3>
            <p>Show which way the pin should sit when worn. For an elongated design, ask whether a second post would help limit rotation. Check the spacing between posts and the amount of room needed behind the fabric.</p>
          </div>
          <div className="patch-print keychain-detail-print">
            <figure className="patch-print-frame">
              <Image {...sunrise} sizes="(max-width: 699px) 80vw, 36vw" />
              <figcaption>Metal lines and enamel color</figcaption>
            </figure>
            <span className="patch-print-note">Check the artwork at pin size.</span>
          </div>
        </div>
      </section>

      <section className="section-space patch-showcase patch-showcase-portfolio" aria-labelledby="pin-portfolio">
        <div className="page-container">
          <h2 id="pin-portfolio">Lapel pin design portfolio</h2>
          <PatchPortfolioCarousel labelId="pin-portfolio" slides={[
            { title: "Geometric sunrise", description: "A compact concept with metal outlines separating the red and navy areas.", image: sunrise },
            { title: "Enamel faces and hardware", description: "A concept study showing how the pin face and clutch backing work together.", image: details },
          ]} />
        </div>
      </section>

      <section className="section-space pin-use" aria-labelledby="pin-use">
        <div className="page-container pin-use-layout">
          <div>
            <h2 id="pin-use">Design for where it goes</h2>
            <figure className="pvc-photo keychain-feature-photo pin-use-photo">
              <Image {...sunrise} sizes="(max-width: 699px) 90vw, 36vw" />
              <figcaption>Sunrise enamel pin concepts</figcaption>
            </figure>
          </div>
          <ul className="pin-use-list">
            <li><PatchCardIcon kind="stitch" /><div><h3>Jackets, uniforms, and hats</h3><p>Measure the available area and check for seams or lining. A lightweight pin can suit a thinner lapel. On a hat, check how much room the backing needs inside the panel.</p></div></li>
            <li><PatchCardIcon kind="link" /><div><h3>Bags and everyday accessories</h3><p>Consider how often the pin will be bumped or removed. Ask about a deluxe clutch or a second post to help keep a wide emblem upright.</p></div></li>
            <li><PatchCardIcon kind="box" /><div><h3>Merchandise and collector sets</h3><p>Decide whether each pin stands alone or belongs to a set. Include any backing card or packaging requirements so the post positions can be planned around them.</p></div></li>
          </ul>
        </div>
      </section>

      <PatchOrderProcess name="lapel pins" quoteUrl={quoteUrl} steps={pinSteps} actionLabel="Start your pin order" />
      <WhyChoosePatchesHub product="pin" />
      <PatchFaq name="Custom pins" questions={pinFaqs} />
      <section className="pvc-quote">
        <div className="page-container patch-page-grid pvc-editorial">
          <div><h2>Ready to design your pin?</h2><p>Share your artwork, target size, quantity, backing preference, and any deadline.</p></div>
          <Link className="button button-red" href={quoteUrl}>Get a pin quote <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
