import { patchTypes } from "@/content/patch-types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { ArrowIcon, CheckIcon, SparkIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Let’s make something yours",
  description: "Tell PatchesHub about your custom patches, pins, coins, or keychains. No minimum order quantity, design assistance, and proof revisions.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string | string[] }> }) {
  const params = await searchParams;
  const allowedProducts = ["patches", "pins", "coins", "keychains", "multiple", "unsure", ...patchTypes.map(({ id }) => id)];
  const initialProduct = typeof params.product === "string" && allowedProducts.includes(params.product) ? params.product : "";

  return <>
    <section className="contact-hero"><div className="page-container"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Contact</span></div><div className="contact-hero-grid"><div><p className="eyebrow"><span className="tiny-square" /> Every great project starts somewhere</p><h1>A sketch. A logo.<br />A little <span className="serif-word">“what if?”</span></h1><p>Whatever stage your idea is at, we’d love to hear it.<br className="desktop-break" /> Let’s turn it into something that feels like you.</p></div><SparkIcon className="contact-hero-spark" /></div></div></section>
    <section className="contact-section section-space" aria-labelledby="contact-form-heading"><div className="page-container contact-grid">
      <aside className="contact-aside"><p className="eyebrow">Let’s make it happen</p><h2 id="contact-form-heading">Your next<br /><span className="serif-word">good idea.</span></h2><p>A few details are all we need to start the conversation. Choose a product, or let us help you find the right fit.</p><ul className="contact-benefits"><li><CheckIcon /><span>No minimum order quantity</span></li><li><CheckIcon /><span>Design assistance along the way</span></li><li><CheckIcon /><span>Proof revisions to refine your idea</span></li></ul><div className="contact-visual"><Image src="/assets/products/patches/sunrise-patch-concept.png" alt="An illustrative embroidered sunrise patch, showing navy fabric and cream stitched detail" width={700} height={700} sizes="(max-width: 899px) 85vw, 28vw" /><span>From a little spark to something real.</span></div></aside>
      <div id="project-form" className="contact-form-panel"><span className="contact-form-sticker" aria-hidden="true">Good things<br />start here ↙</span><h2>Tell us what’s on your mind.</h2><p className="contact-form-intro">You don’t need all the answers. Just a place to start.</p><ContactForm initialProduct={initialProduct} /></div>
    </div></section>
    <section className="contact-bottom"><div className="page-container"><div><p className="eyebrow">Still exploring?</p><h2>Find the right canvas<br /><span className="serif-word">for your idea.</span></h2></div><Link href="/#products" className="button button-outline">Explore our products <ArrowIcon /></Link></div></section>
  </>;
}
