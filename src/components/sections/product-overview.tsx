import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/content/products";
import { ArrowIcon, SparkIcon } from "@/components/ui/icons";

export function ProductOverview() {
  return (
    <section id="products" aria-labelledby="products-heading" className="product-section section-space">
      <div className="page-container">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="tiny-square" /> Find your thing</p><h2 id="products-heading">Four ways to<br /><span className="serif-word">leave a mark.</span></h2></div>
          <div className="collection-intro"><SparkIcon /><p>A little tactile. A little collectible.<br />Completely your own.</p></div>
        </div>
        <div className="collection-grid">
          {productCategories.map((product, index) => (
            <article id={product.slug} key={product.slug} className={`collection-card collection-${product.slug}`}>
              <Link href={`/contact?product=${product.slug}#project-form`} className="collection-link" aria-label={`Explore custom ${product.name.toLowerCase()} and request a quote`}>
                <div className="collection-photo">
                  <span className="collection-number">0{index + 1} /</span>
                  <div className="collection-image-frame"><Image src={product.image} alt={product.imageAlt} width={700} height={700} sizes="(max-width: 599px) 44vw, (max-width: 899px) 45vw, 24vw" /></div>
                  <span className="collection-mini-label">{["Wear your story.", "Pin a little personality.", "Hold on to the moment.", "Take your mark along."][index]}</span>
                </div>
                <div className="collection-title"><h3>{product.name}<span>.</span></h3><span className="collection-arrow"><ArrowIcon /></span></div>
              </Link>
              <p>{product.shortDescription}</p>
              <p className="product-materials">{product.materials.join(" · ")}</p>
            </article>
          ))}
        </div>
        <div className="product-section-note"><p>Still in the “I have an idea” stage? You’re in the right place.</p><Link href="/contact">Let’s figure it out <ArrowIcon /></Link></div>
      </div>
    </section>
  );
}
