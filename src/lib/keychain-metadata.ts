import type { Metadata } from "next";

export function keychainMetadata(path: string, metadata: { title: string; description: string }): Metadata {
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  if (!origin) return metadata;

  return {
    ...metadata,
    alternates: { canonical: new URL(path, origin) },
    robots: { index: true, follow: true },
  };
}
