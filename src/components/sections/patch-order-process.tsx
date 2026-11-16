"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowIcon } from "@/components/ui/icons";
import { OrderStepArt } from "@/components/ui/order-step-art";

const defaultSteps = [
  ["Share your idea", "Send a logo, sketch, or description with the size, quantity, placement, and any deadline."],
  ["Review your options", "We’ll discuss the artwork, shape, and attachment with you and prepare your quote."],
  ["Approve your proof", "Review the layout and request any revisions before approving the design."],
  ["Move into production", "Production begins once you approve the proof and agree to the order details."],
] as const;

export function PatchOrderProcess({ name, quoteUrl, steps = defaultSteps, sectionId = "order-process", actionLabel = "Start your patch order" }: {
  name: string;
  quoteUrl: string;
  steps?: readonly (readonly [string, string])[];
  sectionId?: string;
  actionLabel?: string;
}) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setPlaying(!motion.matches);
    syncMotion();
    motion.addEventListener("change", syncMotion);
    return () => motion.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (!playing || active === steps.length - 1) return;
    const timer = window.setTimeout(() => setActive(active + 1), 1450);
    return () => window.clearTimeout(timer);
  }, [active, playing, steps.length]);

  return (
    <section className="section-space pvc-order" id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="page-container">
        <h2 id={`${sectionId}-title`}>How to order custom {name.toLowerCase()}</h2>
        <p className="pvc-section-intro">Select a step to follow the process from your first idea through production.</p>
        <ol className="patch-order-cards">
          {steps.map(([title, description], index) => (
            <li key={title} className="patch-order-step">
              <button
                type="button"
                className="patch-glass-card patch-order-card"
                onClick={() => { setActive(index); setPlaying(false); }}
                aria-current={index === active ? "step" : undefined}
              >
                <span className="patch-carousel-announcement">Step {index + 1}. </span>
                <span className="patch-order-visual" data-animate={index === active}>
                  <OrderStepArt step={index} />
                </span>
                <span className="patch-order-title">{title}</span>
                <span className="patch-order-description">{description}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="patch-order-timeline" style={{ "--active-step": active } as CSSProperties} aria-hidden="true">
          {steps.map(([title], index) => (
            <span key={title} className="patch-order-marker" data-reached={index <= active}>{index + 1}</span>
          ))}
        </div>
        <div className="patch-order-actions">
          <Link className="button button-red" href={quoteUrl}>{actionLabel} <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  );
}
