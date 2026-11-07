import { patchTypes } from "@/content/patch-types";

export function ProductIllustration({ kind }: { kind: string }) {
  const patch = patchTypes.some(({ id }) => id === kind);
  const patchColors: Record<string, string> = {
    pvc: "#e91925", embroidered: "#f3d27e", woven: "#497d84",
    chenille: "#894470", leather: "#ad7146", printed: "#4668a8",
  };
  const coin = kind === "coins";
  return (
    <svg viewBox="0 0 240 155" aria-hidden="true" className="product-illustration">
      <ellipse cx="120" cy="133" rx="76" ry="10" fill="#00204a" opacity=".09" />
      <g stroke="#00204a" strokeWidth="3" strokeLinejoin="round">
        {patch ? (
          <>
            <path d="M49 32Q120 8 191 32v51q-7 29-71 46-64-17-71-46Z" fill="#00204a" />
            <path d="M59 39q61-19 122 0v42q-8 23-61 38-53-15-61-38Z" fill={patchColors[kind]} stroke="#fff4df" strokeDasharray={kind === "embroidered" || kind === "woven" ? "4 4" : undefined} />
          </>
        ) : (
          <>
            {kind === "keychains" && <circle cx="120" cy="25" r="17" fill="none" strokeWidth="6" />}
            <circle cx="120" cy="80" r={coin ? 53 : 46} fill={coin ? "#e7b84e" : "#f3d27e"} />
            <circle cx="120" cy="80" r={coin ? 44 : 37} fill={coin ? "#f3d27e" : "#e91925"} />
          </>
        )}
        <path d="m86 97 26-34 13 16 10-13 22 31Z" fill="#fff4df" />
        <circle cx="141" cy="53" r="8" fill="#fff4df" />
      </g>
    </svg>
  );
}
