"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { SparkIcon } from "@/components/ui/icons";

export function StudioCollage() {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const stage = stageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty("--tilt-x", `${-y * 7}deg`);
    stage.style.setProperty("--tilt-y", `${x * 7}deg`);
  }

  function resetTilt() {
    stageRef.current?.style.setProperty("--tilt-x", "0deg");
    stageRef.current?.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div className="collage-stage" ref={stageRef} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
      <div className="collage-backdrop" aria-hidden="true">
        <span className="orbit orbit-one" /><span className="orbit orbit-two" />
        <span className="collage-cross cross-one">+</span><span className="collage-cross cross-two">+</span>
        <span className="stage-coordinate">PH / ONE IDEA. FOUR EXPRESSIONS.</span>
      </div>
      <div className="collage-image">
        <Image
          src="/assets/editorial/custom-goods-collage-v2.png"
          alt="A playful collection of original sunrise patch, enamel pin, sculpted coin, and PVC keychain concepts"
          width={1024}
          height={1024}
          priority
          sizes="(max-width: 899px) 94vw, 51vw"
        />
      </div>
      <span className="collage-note">a little more<br /><em>you.</em><svg viewBox="0 0 90 60" fill="none" aria-hidden="true"><path d="M7 6c33 42 79 3 58 36-8 11-29 9-29 9m0 0 11-10m-11 10 13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
      <span className="collage-tag"><span className="caption-dot" /> Original concept collection</span>
      <div className="rotating-stamp" aria-hidden="true">
        <svg className="stamp-ring" viewBox="0 0 120 120"><defs><path id="studio-stamp-path" d="M60,60m-43,0a43,43 0 1,1 86,0a43,43 0 1,1 -86,0" /></defs><text><textPath href="#studio-stamp-path" textLength="270" lengthAdjust="spacing">SMALL DETAILS. BIG PERSONALITY. • </textPath></text></svg>
        <SparkIcon />
      </div>
      <span className="floating-label label-patch">Texture you can feel.</span>
      <span className="floating-label label-custom">Made to be yours ↗</span>
    </div>
  );
}
