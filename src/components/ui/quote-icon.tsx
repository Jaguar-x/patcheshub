const optionPaths: Record<string, string> = {
  PVC: "M4 8l8-4 8 4-8 4z M4 12l8 4 8-4m-16 4 8 4 8-4",
  Embroidered: "M5 20c-4-2-2-6 2-5l2 1m0 0L19 4a1.4 1.4 0 0 1 2 2L9 16Zm8-8 2-2",
  Woven: "M5 3v18m5-18v18m4-18v18m5-18v18M3 6h18M3 12h18M3 18h18",
  Chenille: "M7 17a4 4 0 0 1-2-7 4 4 0 0 1 7-4 4 4 0 0 1 7 4 4 4 0 0 1-2 7z",
  Sublimated: "M4 4h16v16H4z M4 16l5-5 4 4 3-3 4 4m-5-8h.01",
  Leather: "M4 5h16v14H4z M7 8h2m3 0h2m3 0h.01M7 16h2m3 0h2m3 0h.01",
  "Sew-on": "M5 20c-4-2-2-6 2-5l2 1m0 0L19 4a1.4 1.4 0 0 1 2 2L9 16Zm8-8 2-2",
  "Iron-on": "M3 17h18l-2-7H9l-6 7Zm9-7V7h6",
  "Hook-and-loop": "M3 7h18M3 17h18M6 7v3a2 2 0 0 0 4 0m4 7v-3a2 2 0 0 1 4 0",
  "Hard Enamel": "m12 3 8 5v8l-8 5-8-5V8z M4 8l8 5 8-5m-8 5v8",
  "Soft Enamel": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M5 12c5-5 9 5 14 0",
  Printed: "M6 8V3h12v5M6 17H3V8h18v9h-3M6 14h12v7H6z",
  "Die Struck": "M5 17h14v4H5z M9 17v-5h6v5M5 4h14v8H5z",
  "3D": "m3 7 9-4 9 4v10l-9 4-9-4z M3 7l9 4 9-4m-9 4v10",
  "Cut Out": "M4 4h16v16H4z M8 16l4-8 4 8z",
  "PVC / Rubber": "M4 8l8-4 8 4-8 4z M4 12l8 4 8-4m-16 4 8 4 8-4",
  "Split Ring": "M12 4a8 8 0 1 0 8 8m-8-5a5 5 0 1 0 5 5m0-5h3v3",
  "Magnet Backing": "M4 5h5v8a3 3 0 0 0 6 0V5h5v8a8 8 0 0 1-16 0zm0 4h5m6 0h5",
  "No Border": "M5 5h14v14H5z",
  Merrowed: "M4 4h16v16H4z M7 4v3m5-3v3m5-3v3M7 17v3m5-3v3m5-3v3",
  "Reeded": "M3 7h18v10H3z M6 7v10m4-10v10m4-10v10m4-10v10",
};

const optionAliases: Record<string, string> = { "Sublimation Printed": "Sublimated", "Offset Printed": "Printed" };

export function QuoteIcon({ kind, option = "" }: { kind: string; option?: string }) {
  const shape = /circle|rounded/i.test(option) ? "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
    : /rectangle/i.test(option) ? "M3 7h18v10H3z"
    : /oval/i.test(option) ? "M12 6c11 0 11 12 0 12S1 6 12 6Z"
    : /shield/i.test(option) ? "M12 3l8 4v5c0 4-4 7-8 9-4-2-8-5-8-9V7z"
    : /square/i.test(option) ? "M5 5h14v14H5z" : "m12 3 3 5 6 2-4 4v6l-5-2-5 2v-6l-4-4 6-2z";
  const paths: Record<string, string> = {
    badge: "M12 3l8 4v5c0 4-4 7-8 9-4-2-8-5-8-9V7z M8 11l3 3 5-5",
    pins: "M8 4h8l-1 5 3 3v2H6v-2l3-3z M12 14v7",
    coins: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 7v10m-3-7 3-3 3 3",
    keychains: "M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3Z M11 11l9 9m-6-6 2-2m1 5 2-2",
    promotional: "M4 9h16v12H4z M3 5h18v4H3z M12 5v16",
    attachment: "M8 13l6-6a3 3 0 0 1 4 4l-8 8a5 5 0 0 1-7-7l8-8m-4 12 6-6",
    design: /double/i.test(option) ? "M3 5h13v13H3z M8 21h13V8" : "M4 4h16v16H4z M7 16l4-5 3 3 3-4",
    border: "M3 3h18v18H3z M7 7h10v10H7z",
    color: "M4 6h16v12H4z M9 6v12m6-12v12",
    shape,
  };
  const colors: Record<string, string> = { White: "#fff", Black: "#252525", Gray: "#888", Red: "#ce2635", Green: "#348353", Blue: "#3868a6", Yellow: "#efcc4a", Orange: "#e9903e", Gold: "#dfb755", Silver: "#bcc4cc", Copper: "#c77f5a" };
  return <svg className="quote-option-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {kind === "color" && colors[option] ? <circle cx="12" cy="12" r="8" fill={colors[option]} /> : <path d={optionPaths[optionAliases[option] ?? option] ?? paths[kind] ?? shape} />}
  </svg>;
}
