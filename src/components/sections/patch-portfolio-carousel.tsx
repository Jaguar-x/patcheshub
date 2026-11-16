"use client";

import { PatchCardIcon } from "@/components/ui/patch-card-icon";

import Image from "next/image";
import { useState } from "react";

type PortfolioSlide = {
  title: string;
  description?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export function PatchPortfolioCarousel({ slides, labelId }: {
  slides: readonly PortfolioSlide[];
  labelId: string;
}) {
  const [active, setActive] = useState(0);
  const count = slides.length;

  function move(direction: number) {
    setActive((index) => (index + direction + count) % count);
  }

  return (
    <div
      className="patch-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="patch-carousel-stage">
        {slides.map(({ title, description, image }, index) => {
          const position = index === active ? "center"
            : count === 2 ? (index > active ? "right" : "left")
            : index === (active + 1) % count ? "right" : "left";

          return (
            <article className="patch-glass-card patch-carousel-slide" data-position={position} key={title} aria-hidden={index !== active}>
              {image && <Image {...image} sizes="(max-width: 599px) 75vw, 440px" />}
              <div>
                <PatchCardIcon kind={image ? "photo" : "pencil"} />
                <h3>{title}</h3>
                {description && <p>{description}</p>}
              </div>
            </article>
          );
        })}
      </div>
      <div className="patch-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous portfolio slide">←</button>
        <span aria-live="polite" aria-atomic="true">
          <span className="patch-carousel-count">{active + 1} / {count}</span>
          <span className="patch-carousel-announcement">{slides[active].title}{slides[active].description && `. ${slides[active].description}`}</span>
        </span>
        <button type="button" onClick={() => move(1)} aria-label="Next portfolio slide">→</button>
      </div>
    </div>
  );
}
