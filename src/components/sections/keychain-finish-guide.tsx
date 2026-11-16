import Image from "next/image";
import Link from "next/link";
import { keychainGuides } from "@/content/keychain-guides";
import { keychainTypes } from "@/content/keychains";

const comparisons = [
  ["Surface", "Flexible molded rubber with flat or sculpted relief.", "Fabric with raised stitching and a defined edge."],
  ["Artwork", "Bold outlines, separated colors, and mascot shapes.", "Open lettering, crests, and artwork that uses thread texture."],
  ["Shape", "A molded silhouette can follow the outer shape of the artwork.", "Long tags give wordmarks room. Compact fobs frame initials or a crest."],
] as const;

export function KeychainFinishGuide({ type }: { type: (typeof keychainTypes)[number] }) {
  const isPvc = type.id === "pvc";
  const image = isPvc ? keychainGuides.pvc.concepts[1].image : keychainGuides.embroidered.concepts[0].image;

  return (
    <>
      <section className="section-space patch-planning" aria-labelledby="keychain-shape-title">
        <div className="page-container patch-page-grid keychain-feature">
          <div className="keychain-editorial-copy">
            <h2 id="keychain-shape-title">{isPvc ? "Choose a shape for your PVC keychain" : "Choose a shape for your embroidered key fob"}</h2>
            <h3>{isPvc ? "Shield, round badge, or custom silhouette" : "Long tag or compact crest"}</h3>
            <p>{isPvc
              ? "A round badge frames a centered mark, while a shield gives stacked artwork more vertical room. A custom silhouette can follow a mascot or symbol. Check narrow points at the finished size before deciding how closely to follow the artwork."
              : "A long tag gives a name or wordmark room to read in one line. A compact crest works well for initials or a simple emblem. Try both outlines at the intended size and check the space between the stitching and border."}</p>
            <h3>Check how it hangs</h3>
            <p>{isPvc
              ? "Mark the ring position on a paper cutout and hold it from that point. Check whether the logo hangs upright and whether any part of the silhouette would catch on nearby keys or a zipper."
              : "Mark the ring end on both sides of a paper mockup. Flip it to check the reading direction and make sure the ring has clearance from the lettering."}</p>
          </div>
          <figure className="pvc-photo keychain-feature-photo">
            <Image {...image} sizes="(max-width: 699px) 90vw, 48vw" />
            <figcaption>{isPvc ? "Molded shield and mascot concepts" : "Stitched wordmark tag and crest concepts"}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-space patch-buying-guide" aria-labelledby="keychain-comparison-title">
        <div className="page-container">
          <h2 id="keychain-comparison-title">PVC vs. embroidered keychains</h2>
          <div className="keychain-comparison">
            <table>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {keychainTypes.map(({ id, name }) => (
                    <th scope="col" key={id}>{id === type.id ? name : <Link href={`/keychains/${id}`}>{name}</Link>}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisons.map(([feature, pvc, embroidered]) => (
                  <tr key={feature}><th scope="row">{feature}</th><td>{pvc}</td><td>{embroidered}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
