import Link from "next/link";
import Image from "next/image";
import { patchTypes } from "@/content/patch-types";
import { ArrowIcon } from "@/components/ui/icons";

export function FeaturedProducts() {
  return (
    <section className="featured-products section-space" id="featured-products" aria-labelledby="featured-heading">
      <div className="page-container">
        <div className="collection-heading">
          <div>
            <p className="eyebrow"><span className="tiny-square" /> All patch types</p>
            <h2 id="featured-heading">Small canvas.<br /><em>Big character.</em></h2>
          </div>
          <div className="patch-collection-intro"><span className="collection-count">06 / MATERIALS</span><p>Different textures. Endless possibilities. Find the finish that brings your idea to life.</p><a className="text-link" href="#featured-pvc">Explore the collection <ArrowIcon /></a></div>
        </div>
        <div className="featured-grid">
          {patchTypes.map((product, index) => (
            <article className="featured-card" id={`featured-${product.id}`} key={product.id}>
              <Link className={`featured-art featured-art-${product.id}`} href={`/patches/${product.id}`} aria-label={`Explore ${product.name}`}>
                <Image src={`/assets/patch-collection/${product.id}-sample.webp`} alt={`${product.name} sample showing ${product.finish.toLowerCase()}`} width={900} height={900} sizes="(max-width: 699px) 90vw, (max-width: 1000px) 45vw, 30vw" />
                <span className="collection-number" aria-hidden="true">0{index + 1}</span>
                <span className="collection-finish">{product.finish}</span>
                <span className="collection-open" aria-hidden="true"><ArrowIcon /></span>
              </Link>
              <div className="collection-card-copy">
              <h3><Link href={`/patches/${product.id}`}>{product.name}</Link></h3>
              <p>{product.description}</p>
              <Link className="text-link" href={`/patches/${product.id}`}>
                Explore details <span className="sr-only">for {product.name}</span><ArrowIcon />
              </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="collection-footer"><p>Your artwork. Your shape. <strong>Your kind of patch.</strong></p><Link className="text-link" href="/contact">Let’s create yours <ArrowIcon /></Link></div>
      </div>
    </section>
  );
}

