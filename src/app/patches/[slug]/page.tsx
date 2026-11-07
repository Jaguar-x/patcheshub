import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { patchTypes } from "@/content/patch-types";
import { ProductIllustration } from "@/components/ui/product-illustration";
import { ArrowIcon } from "@/components/ui/icons";
import { PvcPatchesPage } from "@/components/sections/pvc-patches-page";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return patchTypes.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "pvc") {
    const title = "Custom PVC Patches & Molded Rubber Patches";
    const description = "Design custom PVC rubber patches for bags, uniforms, and outdoor gear. Explore 2D and 3D relief, shapes, and backing. No minimum order quantity.";
    return {
      title,
      description,
    };
  }
  const patch = patchTypes.find(({ id }) => id === slug);
  return patch ? { title: `Custom ${patch.name}`, description: patch.description } : {};
}

export default async function PatchPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "pvc") return <PvcPatchesPage />;
  const patch = patchTypes.find(({ id }) => id === slug);
  if (!patch) notFound();

  return (
    <>
      <section className="patch-page-hero">
        <div className="page-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/#patches">Patches</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{patch.name}</span>
          </nav>
          <div className="patch-page-grid">
            <div>
              <p className="eyebrow"><span className="tiny-square" /> {patch.finish}</p>
              <h1>Custom {patch.name}</h1>
              <p className="patch-page-description">{patch.description}</p>
              <Link className="button button-red" href={`/contact?product=${patch.id}#project-form`}>
                Get a quote <ArrowIcon />
              </Link>
              <p className="patch-page-note">No minimum order quantity · Design assistance · Proof revisions</p>
            </div>
            <figure className="patch-page-art">
              <ProductIllustration kind={patch.id} />
              <figcaption>Illustrative product concept</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="page-container patch-page-grid patch-details">
          <div><p className="eyebrow">Where it works</p><h2>Good for</h2><p>{patch.use}</p></div>
          <div><p className="eyebrow">Preparing your artwork</p><h2>Design tip</h2><p>{patch.tip}</p></div>
        </div>
      </section>
      <section className="featured-products section-space" aria-labelledby="other-patches">
        <div className="page-container">
          <h2 id="other-patches">Explore other patch types</h2>
          <div className="patch-related">
            {patchTypes.filter(({ id }) => id !== patch.id).map((item) => (
              <Link className="text-link" key={item.id} href={`/patches/${item.id}`}>{item.name} <ArrowIcon /></Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
