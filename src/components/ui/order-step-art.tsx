const scenes = [
  <>
    <path d="M36 14h64v66H36z" fill="#fffdf8" transform="rotate(-8 68 47)" />
    <path d="m51 55 13-17 9 10 9-12 13 16z" fill="#c9def0" />
    <path d="m87 67 28-36 7 6-28 36-11 5z" fill="#f3d27e" />
  </>,
  <>
    <path d="M29 23h83v53H29z" fill="#fffdf8" transform="rotate(7 70 50)" />
    <circle cx="52" cy="48" r="12" fill="#e91925" />
    <circle cx="74" cy="50" r="12" fill="#f3d27e" />
    <circle cx="96" cy="53" r="12" fill="#47698a" />
  </>,
  <>
    <rect x="35" y="14" width="74" height="66" rx="6" fill="#fffdf8" />
    <path d="M50 31h43M50 42h29M50 54h18" />
    <circle cx="99" cy="65" r="19" fill="#d2e5ce" />
    <path d="m91 65 6 6 10-12" />
  </>,
  <>
    <path d="m36 38 36-17 36 17v34L72 89 36 72z" fill="#f3d27e" />
    <path d="m36 38 36 17 36-17M72 55v34" />
    <path d="M57 23q15-8 30 0v13q-2 8-15 12-13-4-15-12z" fill="#e91925" />
    <path d="m63 35 7-8 9 8z" fill="#fffdf8" strokeWidth="1.5" />
  </>,
];

export function OrderStepArt({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 144 96" aria-hidden="true" className="pvc-step-art">
      <ellipse cx="72" cy="84" rx="43" ry="6" fill="#00204a" opacity=".08" />
      <g stroke="#00204a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M20 31v12m-6-6h12m98 22v10m-5-5h10" opacity=".45" />
        {scenes[step]}
      </g>
    </svg>
  );
}
