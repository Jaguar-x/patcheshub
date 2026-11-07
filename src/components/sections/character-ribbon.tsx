"use client";

import { useState } from "react";
import { SparkIcon } from "@/components/ui/icons";

export function CharacterRibbon() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="character-ribbon" aria-label="Your idea. Your identity. Your kind of custom.">
      <div className={`ribbon-track ${paused ? "is-paused" : ""}`} aria-hidden="true">
        {[0, 1, 2, 3].map((copy) => <span className="ribbon-set" key={copy}><span>YOUR IDEA.</span><SparkIcon /><span className="ribbon-outline">YOUR IDENTITY.</span><SparkIcon /><span>YOUR KIND OF CUSTOM.</span><SparkIcon /></span>)}
      </div>
      <button className="ribbon-toggle" type="button" aria-label={paused ? "Play moving text" : "Pause moving text"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "▶" : "Ⅱ"}</button>
    </div>
  );
}
