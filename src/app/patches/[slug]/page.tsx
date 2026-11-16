import { patchSearch } from "@/content/patch-search";
import { MaterialPatchPage } from "@/components/sections/material-patch-page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { patchTypes } from "@/content/patch-types";
import { PvcPatchesPage } from "@/components/sections/pvc-patches-page";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return patchTypes.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const patch = patchTypes.find(({ id }) => id === slug);
  if (!patch) return {};

  const { title, description, photoAlt } = patchSearch[patch.id];
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  const url = origin ? new URL(`/patches/${patch.id}`, origin) : undefined;
  const image = `/assets/products/patches/${patch.id}-lifestyle.webp`;

  return {
    title,
    description,
    ...(url && {
      alternates: { canonical: url },
      robots: { index: true, follow: true },
      openGraph: {
        type: "website",
        title,
        description,
        url,
        images: [{ url: new URL(image, url), alt: photoAlt, width: 1200, height: 800 }],
      },
      twitter: { card: "summary_large_image", title, description, images: [new URL(image, url)] },
    }),
  };
}

export default async function PatchPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "pvc") return <PvcPatchesPage />;
  const patch = patchTypes.find(({ id }) => id === slug);
  if (!patch || patch.id === "pvc") notFound();
  return <MaterialPatchPage patch={patch} />;
}
