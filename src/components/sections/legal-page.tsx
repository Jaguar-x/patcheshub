import type { ReactNode } from "react";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <article className="section-space page-container legal-page">
      <header><h1>{title}</h1><p>{intro}</p></header>
      {children}
    </article>
  );
}
