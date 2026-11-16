const finishes: Record<string, [string, string]> = {
  Gold: ["#edc454", "#986815"],
  Silver: ["#e4edf4", "#798b9e"],
  Copper: ["#eea17d", "#9b452e"],
  Black: ["#596779", "#192332"],
  "Dual-Plating": ["#edc454", "#8799ac"],
  "Antique Gold": ["#bd974b", "#604318"],
  "Antique Silver": ["#aeb9c4", "#485664"],
  "Antique Copper": ["#bd7656", "#673321"],
  "Antique Brass": ["#a9985a", "#514823"],
};

const edges: Record<string, string> = {
  "Standard Flat": "M6 12h20",
  Rope: "M5 17q4-10 8 0t8 0t8 0M5 11q4 10 8 0t8 0t8 0",
  "Cross-cut": "m6 9 9 14m0-14 9 14m0-14-9 14m0-14L6 23",
  "Diamond Cut": "m4 16 6-7 6 7-6 7zm12 0 6-7 6 7-6 7z",
  Reeded: "M7 9v14m6-14v14m6-14v14m6-14v14",
  Oblique: "m5 22 7-12m0 12 7-12m0 12 7-12",
  Spur: "M4 21v-5h5v-5h5v5h5v-5h5v5h4v5",
};

export function CoinOptionIcon({ option }: { option: string }) {
  const finish = finishes[option];

  return (
    <svg className="coin-option-icon" viewBox="0 0 32 32" aria-hidden="true">
      {finish ? (
        <>
          <circle cx="16" cy="16" r="13" fill={finish[1]} />
          <circle cx="16" cy="16" r="10" fill={finish[0]} />
          <path d="M10 15a6 6 0 0 1 6-5" fill="none" stroke="white" strokeOpacity=".7" strokeWidth="1.6" strokeLinecap="round" />
        </>
      ) : (
        <path d={edges[option]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
