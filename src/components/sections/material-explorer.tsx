"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { materials } from "@/content/materials";
import { ArrowIcon, CheckIcon } from "@/components/ui/icons";

export function MaterialExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % materials.length;
    else if (event.key === "ArrowLeft") nextIndex = (index + materials.length - 1) % materials.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = materials.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="materials" className="material-section section-space" aria-labelledby="material-heading">
      <div className="page-container">
        <div className="section-heading material-heading"><div><p className="eyebrow"><span className="tiny-square" /> Get a feel for it</p><h2 id="material-heading">Same idea.<br /><span className="serif-word">Different feeling.</span></h2></div><p>Some stories need texture. Others need a little shine.<br />Find the finish that feels like you.</p></div>
        <div className="material-tabs" role="tablist" aria-label="Explore product finishes">
          {materials.map((material, index) => <button key={material.id} type="button" role="tab" id={`${id}-tab-${index}`} aria-controls={`${id}-panel-${index}`} aria-selected={activeIndex === index} tabIndex={activeIndex === index ? 0 : -1} ref={(element) => { tabRefs.current[index] = element; }} onClick={() => setActiveIndex(index)} onKeyDown={(event) => handleTabKey(event, index)}><span>0{index + 1}</span>{material.name}<ArrowIcon /></button>)}
        </div>
        {materials.map((material, index) => <div className={`material-panel material-${material.color}`} key={material.id} id={`${id}-panel-${index}`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} tabIndex={0} hidden={activeIndex !== index}>
          <div className="material-image"><span className="material-note">{material.note}</span><Image src={material.image} alt={material.alt} width={900} height={900} sizes="(max-width: 699px) 90vw, 45vw" /><span className="material-image-caption">A closer look / illustrative concept</span><span className="material-cross" aria-hidden="true">+</span></div>
          <div className="material-copy"><p className="eyebrow">The material makes the mark</p><h3>{material.title}</h3><p>{material.description}</p><ul>{material.traits.map((trait) => <li key={trait}><CheckIcon />{trait}</li>)}</ul><Link href={`/contact?product=${material.product}#project-form`} className="button button-navy">Make it {material.name.toLowerCase()} <ArrowIcon /></Link></div>
        </div>)}
      </div>
    </section>
  );
}
