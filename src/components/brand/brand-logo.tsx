import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/assets";

export function BrandLogo() {
  return (
    <Link href="/" aria-label="PatchesHub home" className="brand-logo">
      <Image
        src={brandAssets.logoHorizontal}
        alt="PatchesHub — Make your mark."
        width={2007}
        height={784}
        priority
      />
    </Link>
  );
}
