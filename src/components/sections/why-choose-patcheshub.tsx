import { PatchCardIcon } from "@/components/ui/patch-card-icon";

export function WhyChoosePatchesHub({ product = "patch" }: { product?: "patch" | "keychain" | "pin" | "coin" }) {
  const reasons = [
    ["box", "No minimum order", `Request a single ${product} for a personal project or specify the quantity you need for a team or merch run. Include your expected quantity so we can quote the project accurately.`],
    ["pencil", "Help with the design", `Start with a logo, sketch, or description. Tell us how the ${product} will be used and we’ll help review the size, artwork, and attachment.`],
    ["proof", "Proof revisions", "Review the shape, lettering, and artwork before production. If a detail needs to change, request a revision before you approve the proof."],
  ] as const;

  return (
    <section className="section-space patch-why-us" aria-labelledby="patch-why-us-title">
      <div className="page-container">
        <h2 id="patch-why-us-title">Why choose PatchesHub?</h2>
        <div className="patch-showcase-grid">
          {reasons.map(([icon, title, description]) => (
            <article className="patch-glass-card" key={title}>
              <PatchCardIcon kind={icon} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
