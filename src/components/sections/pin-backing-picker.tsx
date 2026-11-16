"use client";

import { useState } from "react";
import { pinBackings } from "@/content/pins";
import { PatchCardIcon } from "@/components/ui/patch-card-icon";

const groups = [
  ["Post clutches", "link", ["Military Clutch", "Rubber Clutch", "Jewelry Clutch", "Deluxe Clutch"]],
  ["Garment attachments", "stitch", ["Magnet Backing", "Hat Clip", "Safety Pin"]],
  ["Accessories", "badge", ["Key Chain", "Cufflink"]],
] as const;

const hardware = {
  "Military Clutch": "M80 70c-22-42-65-15-44 14 11 15 29 4 44-14Zm0 0c22-42 65-15 44 14-11 15-29 4-44-14ZM80 53v34",
  "Rubber Clutch": "M49 80V68c0-14 14-24 31-24s31 10 31 24v12M49 80c0 13 62 13 62 0S49 67 49 80ZM69 48v12m11-15v13m11-10v12",
  "Jewelry Clutch": "M49 76h62v16H49zM60 76V58h40v18M72 58V42h16v16m-8 34v12",
  "Deluxe Clutch": "M47 77h66v16H47zM54 77V55h52v22M62 55V43h36v12M64 63v6m10-6v6m12-6v6m10-6v6",
  "Magnet Backing": "M41 47h65l13 12H54zM54 59v17h65V59M41 47v17l13 12m-9 9h65l10 9H55zM55 94v10h65V94",
  "Hat Clip": "M43 55h62c22 0 23 35 0 35H57c-15 0-15-17 0-17h43M43 55v10h57",
  "Safety Pin": "M43 78h64l13-8-13-8H51c-14 0-19 20-6 28l67 8M107 62v16m5 20 7-3",
  "Key Chain": "M97 54a25 25 0 1 0-50 0 25 25 0 0 0 50 0Zm-10 0a15 15 0 1 0-30 0 15 15 0 0 0 30 0Zm3 20 20 15m-19-8 12 15m-3-7 12-6 13 16-12 8z",
  "Cufflink": "m48 49 29-12 18 23-29 14zM72 69l11 22 15-7m-7-7 18-9 7 12-18 9z",
} satisfies Record<(typeof pinBackings)[number][0], string>;

export function PinBackingPicker() {
  const [selected, setSelected] = useState<keyof typeof hardware>(pinBackings[0][0]);
  const backing = pinBackings.find(([label]) => label === selected) ?? pinBackings[0];

  return (
    <div className="pin-hardware-layout">
      <figure className="pin-hardware-visual">
        <svg viewBox="0 0 160 130" aria-hidden="true">
          <circle cx="80" cy="65" r="53" fill="#e8eff4" />
          <path d={hardware[selected]} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <figcaption>{selected}</figcaption>
      </figure>
      <div className="pin-hardware-picker">
      {groups.map(([title, icon, options]) => (
        <fieldset key={title}>
          <legend><PatchCardIcon kind={icon} />{title}</legend>
          <div className="pin-hardware-options">
            {options.map((option) => (
              <button key={option} type="button" aria-pressed={selected === option} onClick={() => setSelected(option)}>
                {option}
              </button>
            ))}
          </div>
        </fieldset>
      ))}
      <div className="pin-hardware-detail" aria-live="polite" aria-atomic="true">
        <h3>{backing[0]}</h3>
        <p>{backing[1]}</p>
      </div>
    </div>
    </div>
  );
}
