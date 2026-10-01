import Link from "next/link";
import { ContactPanel } from "./ui";

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-copy"><span className="eyebrow">Local to Digital</span><strong>BrandBanaoDigital.in</strong><p>Helping Indian local businesses build a credible digital presence through websites, social content and local SEO.</p><Link className="button button-primary" href="/contact">Contact us <span aria-hidden="true">→</span></Link></div>
    <div className="footer-form"><ContactPanel compact /></div>
    <nav className="footer-links" aria-label="Footer"><strong>Explore</strong>{[["Services", "/services"], ["Portfolio", "/portfolio"], ["About", "/about"], ["Contact", "/contact"], ["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"]].map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</nav>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Brand Banao Digital. All rights reserved.</span><span>Made with care in India</span></div></footer>;
}
