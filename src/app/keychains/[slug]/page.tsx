import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeychainsPage } from "@/components/sections/keychains-page";
import { keychainMetadata } from "@/lib/keychain-metadata";
import { keychainGuides } from "@/content/keychain-guides";
import { keychainTypes } from "@/content/keychains";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return keychainTypes.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const type = keychainTypes.find(({ id }) => id === slug);
  return type ? keychainMetadata(`/keychains/${type.id}`, { title: keychainGuides[type.id].title, description: keychainGuides[type.id].description }) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const type = keychainTypes.find(({ id }) => id === slug);
  if (!type) notFound();
  return <KeychainsPage type={type} />;
}
