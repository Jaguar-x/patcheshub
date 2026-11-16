import Image from "next/image";
import Link from "next/link";
import { patchTypes } from "@/content/patch-types";
import { ArrowIcon } from "@/components/ui/icons";

export function RelatedPatchTypes({ current }: { current: (typeof patchTypes)[number]["id"] }) {
  return (
    <section className="pvc-use section-space" aria-labelledby="related-patch-types">
      <div className="page-container">
        <h2 id="related-patch-types">Explore other patch types</h2>
        <div className="related-patch-grid">
          {patchTypes.filter(({ id }) => id !== current).map(({ id, name, finish }) => (
            <Link className="patch-glass-card related-patch-card" key={id} href={`/patches/${id}`}>
              <Image src={`/assets/patch-collection/${id}-sample.webp`} alt="" width={900} height={900} sizes="(max-width: 599px) 45vw, (max-width: 999px) 30vw, 18vw" />
              <div className="related-patch-copy">
                <h3>{name}</h3>
                <p>{finish}</p>
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
