const paths = {
  layers: "m3 8 9-5 9 5-9 5-9-5Zm0 4 9 5 9-5M3 16l9 5 9-5",
  palette: "M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 1-3.7A2 2 0 0 1 16 14h2a3 3 0 0 0 3-3c0-4.4-4-8-9-8Z M7 11h.01M10 7h.01M15 7h.01M18 10h.01",
  text: "M4 6h16M12 6v13M8 19h8M4 6v3m16-3v3",
  stitch: "m5 19 9-9m-5 4 8-10a2 2 0 0 1 3 3l-10 8M4 20c-2-3 0-6 3-5m9-8 1-1",
  ruler: "m3 16 13-13 5 5L8 21l-5-5Zm5-5 2 2m1-5 2 2m1-5 2 2",
  link: "m10 13 4-4m-7 6-1 1a3 3 0 0 0 4 4l4-4a3 3 0 0 0 0-4m3-3 1-1a3 3 0 0 0-4-4l-4 4a3 3 0 0 0 0 4",
  photo: "M4 4h16v16H4zM4 16l5-5 4 4 3-3 4 4m-5-8h.01",
  badge: "M12 3 4 6v6c0 4 3 7 8 9 5-2 8-5 8-9V6l-8-3Zm0 5v7m-3-3h6",
  proof: "M7 3h7l4 4v14H7zM14 3v5h4m-8 6 2 2 4-4",
  pencil: "m4 16 11-11 4 4L8 20l-4 1v-5Zm9-9 4 4",
  box: "m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4m-9 4v10",
} as const;

const showcaseIcons: Record<string, keyof typeof paths> = {
  "Flexible rubber": "layers",
  "Tactile relief": "layers",
  "Bold color separation": "palette",
  "2D molded": "layers",
  "3D sculpted": "badge",
  "Raised texture": "stitch",
  "Fabric contrast": "palette",
  "Traditional badge finish": "badge",
  "Partial coverage": "stitch",
  "Full coverage": "layers",
  "Fine linework": "pencil",
  "Flatter profile": "layers",
  "Compact lettering": "text",
  "Plush pile": "stitch",
  "Bold silhouettes": "badge",
  "Contrasting outlines": "palette",
  "Varsity letters": "text",
  "Mascot and emblem patches": "badge",
  "Warm tonal finish": "palette",
  "Surface character": "layers",
  "Clear branding": "badge",
  "Smooth gradients": "palette",
  "Photographic detail": "photo",
  "Full-color artwork": "palette",
  "Photo-based artwork": "photo",
  "Illustrated artwork": "pencil",
};

export function PatchCardIcon({ kind, heading }: {
  kind?: keyof typeof paths;
  heading?: string;
}) {
  const icon = kind ?? showcaseIcons[heading ?? ""] ?? "badge";

  return (
    <span className="patch-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[icon]} />
      </svg>
    </span>
  );
}
