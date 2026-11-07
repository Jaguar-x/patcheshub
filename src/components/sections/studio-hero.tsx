import Link from "next/link";
import { ArrowIcon, CheckIcon, SparkIcon } from "@/components/ui/icons";
import { StudioCollage } from "@/components/sections/studio-collage";

export function StudioHero() {
  return (
    <section className="studio-hero" aria-labelledby="hero-heading">
      <div className="page-container studio-hero-grid">
        <div className="studio-hero-copy">
          <p className="eyebrow"><span className="tiny-square" /> Custom goods. Uncommon character.</p>
          <h1 id="hero-heading">Small things.<br /><span className="hero-big">BIG <span className="energy-word">ENERGY.<svg viewBox="0 0 420 30" fill="none" aria-hidden="true"><path d="M8 16C120 3 250 3 410 14M38 25C165 14 279 15 380 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg></span></span></h1>
          <p className="studio-hero-description">Your logo. Your story. Something they’ll keep.<br />{" "}Patches, pins, coins, and keychains with a whole lot of personality.</p>
          <div className="studio-hero-actions"><Link href="/contact#project-form" className="button button-red">Let’s make your thing <ArrowIcon /></Link><a href="#products" className="hero-explore"><span>Explore<br />the possibilities</span><span className="circle-arrow"><ArrowIcon /></span></a></div>
          <div className="studio-hero-benefits"><span><CheckIcon /> No minimums. Really.</span><span><CheckIcon /> Design assistance.</span></div>
        </div>
        <StudioCollage />
      </div>
      <div className="hero-bottom page-container"><span>FOR THE BRANDS. THE TEAMS. THE ONE-OF-A-KINDS.</span><a href="#products">Meet your next favorite thing <span>↓</span></a></div>
      <SparkIcon className="hero-corner-spark" />
    </section>
  );
}
