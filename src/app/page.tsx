import Image from "next/image";
import Link from "next/link";
import { ProductOverview } from "@/components/sections/product-overview";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { StudioHero } from "@/components/sections/studio-hero";
import { CharacterRibbon } from "@/components/sections/character-ribbon";
import { MaterialExplorer } from "@/components/sections/material-explorer";
import { ArrowIcon, SparkIcon } from "@/components/ui/icons";
import { FaqList } from "@/components/sections/faq-list";

const steps = [
  { number: "01", title: "The spark.", text: "A logo, a sketch, or a thought you can’t shake. Tell us what you’re imagining. We’ll help you find the right place to start.", label: "YOU BRING THE IDEA" },
  { number: "02", title: "The little details.", text: "Material, color, shape, finish. We help with the design, prepare your proof, and work through revisions with you.", label: "WE SHAPE IT TOGETHER" },
  { number: "03", title: "The real thing.", text: "Once the design and project details are agreed, your idea takes physical form. Ready to wear, carry, share, and keep.", label: "YOUR MARK, OUT IN THE WORLD" },
];

export default function HomePage() {
  return (
    <>
      <StudioHero />
      <CharacterRibbon />
      <ProductOverview />
      <FeaturedProducts />
      <MaterialExplorer />

      <section className="identity-section section-space" aria-labelledby="identity-heading">
        <div className="page-container identity-grid">
          <div className="identity-visual">
            <span className="photo-tape" aria-hidden="true" />
            <Image src="/assets/editorial/make-your-mark-collection.png" alt="An original sunrise identity explored across four illustrative merchandise concepts" width={1536} height={1024} sizes="(max-width: 899px) 90vw, 45vw" />
            <span className="image-label">ONE IDEA. FOUR LITTLE EXPRESSIONS.</span>
            <span className="story-note" aria-hidden="true">same story.<br />different chapters.</span>
          </div>
          <div className="identity-copy">
            <p className="eyebrow"><span className="tiny-square" /> More than a logo on a thing</p>
            <h2 id="identity-heading">A little object.<br />A lot of<br /><span className="serif-word">belonging.</span></h2>
            <p>The patch that says you’re part of the crew. The pin that starts a conversation. The coin that holds a memory.</p>
            <p>We’re here for the meaning behind the merchandise—and the details that make it unmistakably yours.</p>
            <Link className="text-link" href="/contact">Tell us your story <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section id="process" className="process-section section-space" aria-labelledby="process-heading">
        <div className="page-container">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="tiny-square" /> Less overthinking. More making.</p><h2 id="process-heading">From a little <span className="serif-word">“what if”</span><br />to a very real <span className="highlight-word">“look at this.”</span></h2></div>
            <SparkIcon className="process-spark" />
          </div>
          <div className="process-grid">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <div className="step-top"><span>{step.number}</span><ArrowIcon /></div>
                <h3>{step.title}</h3><p>{step.text}</p><span className="step-label">{step.label}</span>
              </article>
            ))}
          </div>
          <div className="process-footnote"><span>One piece or a whole collection. There’s room for your idea.</span><Link href="/contact#project-form" className="text-link">Let’s get it started <ArrowIcon /></Link></div>
        </div>
      </section>

      <section id="questions" className="faq-section section-space" aria-labelledby="faq-heading">
        <div className="page-container faq-grid">
          <div><p className="eyebrow"><span className="tiny-square" /> The things you’re wondering</p><h2 id="faq-heading">Curious?<br /><span className="serif-word">Good.</span><span className="question-doodle" aria-hidden="true">?</span></h2><p className="faq-intro">A few answers before we make something together.</p><Link href="/contact" className="text-link">Ask us anything <ArrowIcon /></Link></div>
          <FaqList />
        </div>
      </section>

      <section className="project-banner" aria-labelledby="project-banner-heading">
        <div className="page-container project-banner-inner">
          <div><p className="eyebrow">Your next great little thing starts here</p><h2 id="project-banner-heading">Big ideas.<br /><span>Start <em>small.</em></span><SparkIcon /></h2></div>
          <div className="banner-action"><Link href="/contact#project-form" className="banner-circle-link" aria-label="Start your custom merchandise project"><ArrowIcon /></Link><p>Make your mark.<br />We’ll help you get there.</p></div>
        </div>
        <div className="banner-bottom page-container"><span>NO MINIMUMS. DESIGN ASSISTANCE. ALL YOURS.</span><span>↗ A little idea can go a long way.</span></div>
      </section>
    </>
  );
}
