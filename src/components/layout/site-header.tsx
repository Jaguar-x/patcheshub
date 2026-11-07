"use client";

import { ProductIllustration } from "@/components/ui/product-illustration";
import { patchTypes } from "@/content/patch-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { productCategories } from "@/content/products";
import { ArrowIcon } from "@/components/ui/icons";

function DropdownChevron() {
  return (
    <svg className="nav-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [group, setGroup] = useState<"patches" | "products" | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const productsOpen = group !== null;
  const items = group === "patches"
    ? patchTypes.map((product) => ({
        kind: product.id, name: product.name, description: product.description, href: `/patches/${product.id}`,
      }))
    : productCategories.map((product) => ({
        kind: product.slug, name: product.name, description: product.description, href: `/#${product.slug}`,
      }));
  const preview = items[previewIndex] ?? items[0];
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const productButtonRef = useRef<HTMLButtonElement>(null);
  const patchButtonRef = useRef<HTMLButtonElement>(null);

  function openGroup(nextGroup: "patches" | "products") {
    setPreviewIndex(0);
    setGroup(nextGroup);
  }

  function handleGroupClick(nextGroup: "patches" | "products", event: MouseEvent<HTMLButtonElement>) {
    const mouseHover = event.detail > 0 && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setPreviewIndex(0);
    setGroup((currentGroup) => currentGroup === nextGroup && !mouseHover ? null : nextGroup);
  }

  function closeMenus() { setGroup(null); setMobileOpen(false); }

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setGroup(null);
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (mobileOpen) menuButtonRef.current?.focus();
      else if (group) (group === "patches" ? patchButtonRef : productButtonRef).current?.focus();
      closeMenus();
    }
    function onResize() {
      if (window.innerWidth >= 900) setMobileOpen(false);
      else setGroup(null);
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", onEscape);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen, group]);

  useEffect(() => {
    if (!mobileOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab") return;
      const items = Array.from(mobileRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    document.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", trapFocus);
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="site-header"
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setGroup(null);
      }}
    >
      <div className="page-container header-inner">
        <BrandLogo />
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenus}>Home</Link>
          <button
            ref={patchButtonRef}
            type="button"
            aria-expanded={group === "patches"}
            aria-controls={group === "patches" ? "product-navigation" : undefined}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") openGroup("patches");
            }}
            onClick={(event) => handleGroupClick("patches", event)}
          >Custom patches <DropdownChevron /></button>
          <button
            ref={productButtonRef}
            type="button"
            aria-expanded={group === "products"}
            aria-controls={group === "products" ? "product-navigation" : undefined}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") openGroup("products");
            }}
            onClick={(event) => handleGroupClick("products", event)}
          >Products <DropdownChevron /></button>
          <Link href="/#materials" onClick={closeMenus}>Materials</Link>
          <Link href="/#process" onClick={closeMenus}>How it works</Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenus}>Contact us</Link>
        </nav>
        <Link className="button button-navy header-cta" href="/contact#project-form" onClick={closeMenus}>Let’s make it <ArrowIcon /></Link>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen(true); setGroup(null); }}><span /><span /></button>
      </div>
      {productsOpen && <div id="product-navigation" className="mega-menu" onBlur={(event) => { if (!headerRef.current?.contains(event.relatedTarget as Node)) setGroup(null); }}>
        <div className="page-container illustrated-menu">
          <div className="illustrated-menu-links">
            <p className="eyebrow">{group === "patches" ? "Custom patches" : "Browse products"}</p>
            {items.map((item, index) => (
              <Link key={item.kind} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenus}
                onPointerEnter={() => setPreviewIndex(index)} onFocus={() => setPreviewIndex(index)}
                data-preview-active={item.kind === preview.kind}>
                {item.name}<ArrowIcon />
              </Link>
            ))}
          </div>
          <div className="illustrated-menu-preview" aria-hidden="true">
            <ProductIllustration kind={preview.kind} />
            <strong>{preview.name}</strong>
            <p>{preview.description}</p>
          </div>
        </div>
      </div>}
      {mobileOpen && <div ref={mobileRef} id="mobile-navigation" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
        <div className="mobile-menu-top"><span className="eyebrow">Explore PatchesHub</span><button type="button" aria-label="Close navigation menu" onClick={() => { closeMenus(); menuButtonRef.current?.focus(); }}>✕</button></div>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenus}>Home <ArrowIcon /></Link>
          <Link href="/#products" onClick={closeMenus}>Products <ArrowIcon /></Link>
          <p className="eyebrow mobile-patch-label">Custom patches</p>
          <div className="mobile-products">{patchTypes.map((product) => <Link key={product.id} href={`/patches/${product.id}`} aria-current={pathname === `/patches/${product.id}` ? "page" : undefined} onClick={closeMenus}>{product.name}</Link>)}</div>
          <div className="mobile-products">{productCategories.map((product) => <Link key={product.slug} href={`/#${product.slug}`} onClick={closeMenus}>{product.name}</Link>)}</div>
          <Link href="/#materials" onClick={closeMenus}>The details <ArrowIcon /></Link>
          <Link href="/#process" onClick={closeMenus}>How it works <ArrowIcon /></Link>
          <Link href="/contact" onClick={closeMenus}>Contact <ArrowIcon /></Link>
        </nav>
        <Link href="/contact#project-form" className="button button-red" onClick={closeMenus}>Start your project <ArrowIcon /></Link>
        <p className="mobile-menu-note">Your idea belongs out in the world.</p>
      </div>}
    </header>
  );
}
