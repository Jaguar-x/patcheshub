import Link from "next/link";
import { site } from "@/config/site";
import { productCategories } from "@/content/products";
import { ArrowIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return <footer className="site-footer"><div className="page-container">
    <div className="footer-top">
      <div><Link href="/" className="footer-wordmark" aria-label="PatchesHub home">Patches<span>Hub</span><span className="wordmark-period">.</span></Link><p>For the ideas that deserve<br />to become something real.</p></div>
      <div className="footer-link-group"><p className="eyebrow">What we make</p>{productCategories.map((product) => <Link key={product.slug} href={product.slug === "coins" ? "/coins" : `/#${product.slug}`}>{product.name}</Link>)}</div>
      <div className="footer-link-group"><p className="eyebrow">Explore</p><Link href="/">Home</Link><Link href="/#process">How it works</Link><Link href="/#questions">FAQs</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-invitation"><p>Got something<br />in mind?</p><Link href="/quote">Let’s talk about it <ArrowIcon /></Link></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p><nav className="footer-legal" aria-label="Legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms and Conditions</Link></nav><a href="#main-content">Back to top ↑</a></div>
    <div className="footer-signoff" aria-hidden="true">MAKE YOUR MARK<span>↗</span></div>
  </div></footer>;
}
