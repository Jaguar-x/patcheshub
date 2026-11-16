import type { Metadata } from "next";
import { productCategories } from "@/content/products";
import { quoteChoices } from "@/content/quote";
import { QuoteForm } from "@/components/forms/quote-form";

export const metadata: Metadata = { title: "Get a Quote" };

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ product?: string; style?: string }> }) {
  const { product, style } = await searchParams;
  const initialProduct = productCategories.find(({ slug }) => slug === product)?.slug;
  const patchStyles: Record<string, string> = {
    pvc: "PVC", embroidered: "Embroidered", woven: "Woven", chenille: "Chenille",
    printed: "Sublimated", leather: "Leather",
  };
  const requestedStyle = initialProduct === "keychains" && style === "pvc"
    ? "PVC / Rubber"
    : style && Object.hasOwn(patchStyles, style) ? patchStyles[style] : undefined;
  const initialMaterial = initialProduct && requestedStyle &&
    quoteChoices(initialProduct, "").find(({ key }) => key === "material")?.options.includes(requestedStyle)
    ? requestedStyle : undefined;
  return (
    <section className="section-space quote-page" aria-labelledby="quote-heading">
      <div className="page-container">
        <header className="quote-intro">
          <h1 id="quote-heading">Get a quote</h1>
          <p>Tell us what you’re making and we’ll put together a custom quote.</p>
        </header>
        <QuoteForm key={`${initialProduct ?? ""}:${initialMaterial ?? ""}`} initialProduct={initialProduct} initialMaterial={initialMaterial} />
      </div>
    </section>
  );
}

