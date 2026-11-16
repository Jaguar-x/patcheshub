"use client";

import { keychainTypes } from "@/content/keychains";
import { patchTypes } from "@/content/patch-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { productCategories } from "@/content/products";
import { ArrowIcon, SparkIcon } from "@/components/ui/icons";

function DropdownChevron() {
  return (
    <svg className="nav-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const categories = productCategories.map((product) => ({
    kind: product.slug, name: product.slug === "pins" ? "Custom Pins" : product.name,
    href: product.slug === "coins" ? "/coins" : product.slug === "pins" ? "/pins" : `/#${product.slug}`,
  }));
  const promotionalProducts = [
    ...categories.filter(({ kind }) => kind !== "patches" && kind !== "keychains"),
    ...keychainTypes.map(({ product, id, name }) => ({ kind: product, name, href: `/keychains/${id}` })),
  ];
  const patches = patchTypes.map((product) => ({
    kind: product.id, name: product.name, href: `/patches/${product.id}`,
  }));
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const productButtonRef = useRef<HTMLButtonElement>(null);

  function openProducts() {
    setProductsOpen(true);
  }

  function handleProductsClick(event: MouseEvent<HTMLButtonElement>) {
    const mouseHover = event.detail > 0 && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setProductsOpen((open) => mouseHover || !open);
  }

  function closeMenus() { setProductsOpen(false); setMobileOpen(false); }

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setProductsOpen(false);
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (mobileOpen) menuButtonRef.current?.focus();
      else if (productsOpen) productButtonRef.current?.focus();
      closeMenus();
    }
    function onResize() {
      if (window.innerWidth >= 900) setMobileOpen(false);
      else setProductsOpen(false);
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", onEscape);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen, productsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab") return;
      const items = Array.from(mobileRef.current?.querySelectorAll<HTMLElement>("a[href], button, summary") ?? []).filter((item) => item.getClientRects().length > 0);
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
        if (event.pointerType === "mouse") setProductsOpen(false);
      }}
    >
      <div className="page-container header-inner">
        <BrandLogo />
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenus}>Home</Link>
          <button
            ref={productButtonRef}
            type="button"
            aria-expanded={productsOpen}
            aria-controls={productsOpen ? "product-navigation" : undefined}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") openProducts();
            }}
            onClick={handleProductsClick}
          >Products <DropdownChevron /></button>
          <Link href="/quote" aria-current={pathname === "/quote" ? "page" : undefined} onClick={closeMenus}>Get a Quote</Link>
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} onClick={closeMenus}>About Company</Link>
          <Link href="/blog" aria-current={pathname === "/blog" ? "page" : undefined} onClick={closeMenus}>Blog</Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenus}>Contact us</Link>
        </nav>
        <Link className="button button-navy header-cta" href="/quote" onClick={closeMenus}>Let’s make it <ArrowIcon /></Link>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => { setMobileOpen(true); setProductsOpen(false); }}><span /><span /></button>
      </div>
      {productsOpen && <div id="product-navigation" className="mega-menu" onBlur={(event) => { if (!headerRef.current?.contains(event.relatedTarget as Node)) setProductsOpen(false); }}>
        <div className="page-container product-menu-grid">
          <section>
            <h2><SparkIcon /> Featured Products</h2>
            {patches.filter(({ kind }) => kind === "embroidered" || kind === "pvc").map((patch) => (
              <Link key={patch.kind} href={patch.href} onClick={closeMenus}>{patch.name}</Link>
            ))}
            <Link className="product-menu-all" href="/#products" onClick={closeMenus}>View all products</Link>
          </section>
          <section>
            <h2><SparkIcon /> Custom Patches</h2>
            {patches.map((patch) => (
              <Link key={patch.kind} href={patch.href} aria-current={pathname === patch.href ? "page" : undefined}
                onClick={closeMenus}>{patch.name}</Link>
            ))}
          </section>
          <section>
            <h2><SparkIcon /> Promotional Products</h2>
            {promotionalProducts.map((product) => (
              <Link key={product.kind} href={product.href} aria-current={pathname === product.href ? "page" : undefined} onClick={closeMenus}>{product.name}</Link>
            ))}
          </section>
          <section className="product-menu-guides">
            <h2><SparkIcon /> Patch Styles</h2>
            <Link href="/blog/choosing-a-patch-material" onClick={closeMenus}>Patch materials</Link>
            <Link href="/blog/choosing-a-patch-backing" onClick={closeMenus}>Patch backings</Link>
          </section>
        </div>
      </div>}
      {mobileOpen && <div ref={mobileRef} id="mobile-navigation" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
        <div className="mobile-menu-top"><span className="eyebrow">Explore PatchesHub</span><button type="button" aria-label="Close navigation menu" onClick={() => { closeMenus(); menuButtonRef.current?.focus(); }}>✕</button></div>
        <nav aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenus}>Home <ArrowIcon /></Link>
          <details className="mobile-product-menu">
            <summary>Products <DropdownChevron /></summary>
            <details className="patch-submenu mobile-patch-label">
              <summary>Custom Patches <DropdownChevron /></summary>
              <div className="mobile-products">
                {patches.map((patch) => <Link key={patch.kind} href={patch.href} aria-current={pathname === patch.href ? "page" : undefined} onClick={closeMenus}>{patch.name}</Link>)}
              </div>
            </details>
            <div className="mobile-products">
              {promotionalProducts.map((product) => <Link key={product.kind} href={product.href} aria-current={pathname === product.href ? "page" : undefined} onClick={closeMenus}>{product.name}</Link>)}
              <Link href="/#products" onClick={closeMenus}>All products</Link>
            </div>
          </details>
          <Link href="/quote" aria-current={pathname === "/quote" ? "page" : undefined} onClick={closeMenus}>Get a Quote <ArrowIcon /></Link>
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} onClick={closeMenus}>About Company <ArrowIcon /></Link>
          <Link href="/blog" aria-current={pathname === "/blog" ? "page" : undefined} onClick={closeMenus}>Blog <ArrowIcon /></Link>
          <Link href="/contact" onClick={closeMenus}>Contact <ArrowIcon /></Link>
        </nav>
        <Link href="/quote" className="button button-red" onClick={closeMenus}>Start your project <ArrowIcon /></Link>
        <p className="mobile-menu-note">Your idea belongs out in the world.</p>
      </div>}
    </header>
  );
}
