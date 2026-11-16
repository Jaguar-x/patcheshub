"use client";

import { useEffect, useState } from "react";
import { patchTypes } from "@/content/patch-types";
import { reviews, type ReviewProduct } from "@/content/reviews";
import styles from "./customer-reviews.module.css";

const cardsPerView = 3;

export function CustomerReviews({ product }: { product?: ReviewProduct }) {
  const productReviews = product
    ? reviews.filter((review) => review.product === product)
    : reviews;
  const count = productReviews.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const visibleReviews = Array.from(
    { length: Math.min(cardsPerView, count) },
    (_, offset) => productReviews[(index + offset) % count],
  );

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPlaying(!preference.matches);
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || count <= cardsPerView) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % count), 6000);
    return () => window.clearInterval(timer);
  }, [count, focused, hovered, playing]);

  return (
    <section id="reviews" className={`section-space ${styles.section}`} aria-labelledby="reviews-heading">
      <div className="page-container">
        <h2 id="reviews-heading">Customer <span className="serif-word">reviews.</span></h2>
        {count ? (
          <ul
            className={styles.carousel}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            tabIndex={count > cardsPerView ? 0 : undefined}
            aria-label="Customer reviews"
          >
            {visibleReviews.map((review) => (
              <li key={`${index}-${review.id}`} className={styles.card}>
                <p className={styles.stars} role="img" aria-label={`${review.rating} out of 5 stars`}>
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </p>
                <figure>
                  <blockquote>{review.quote}</blockquote>
                  <figcaption>
                    <strong>{review.author}</strong>
                    {review.sample && <span>Sample review · Fictional</span>}
                    {!product && <span>{patchTypes.find((patch) => patch.id === review.product)?.name}</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>{product ? "No reviews for this patch type yet." : "No customer reviews yet."}</p>
        )}
      </div>
    </section>
  );
}
