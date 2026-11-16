import type { Metadata } from "next";
import Link from "next/link";
import { WhyChoosePatchesHub } from "@/components/sections/why-choose-patcheshub";
import { ArrowIcon, SparkIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About PatchesHub",
  description: "Learn how PatchesHub helps individuals, teams, and brands create custom patches, pins, coins, and keychains.",
};

export default function AboutPage() {
  return (
    <>
      <section className="contact-hero" aria-labelledby="about-heading">
        <div className="page-container contact-hero-grid">
          <div>
            <h1 id="about-heading">About PatchesHub</h1>
            <p>We help individuals, teams, and brands turn their ideas into custom patches, pins, coins, and keychains. Share a logo, a sketch, or a description, and we’ll help you work through the design details.</p>
          </div>
          <SparkIcon className="contact-hero-spark" aria-hidden="true" />
        </div>
      </section>
      <WhyChoosePatchesHub />
      <section className="contact-bottom">
        <div className="page-container">
          <h2>Have a project in mind?</h2>
          <Link href="/quote" className="button button-navy">Tell us about it <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
