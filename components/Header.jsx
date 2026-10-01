import Link from "next/link";

const links = [["Services", "/services"], ["Portfolio", "/portfolio"], ["About", "/about"], ["Contact", "/contact"]];

export default function Header() {
  return <header className="site-header"><div className="container nav-row">
    <Link className="brand-mark" href="/" aria-label="Brand Banao Digital home"><span className="brand-dot" /><span><strong>BrandBanaoDigital.in</strong><small>Web, Reels and SEO Studio</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary">{links.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</nav>
    <Link className="button button-primary button-whatsapp header-cta" href="/contact">Contact us <span aria-hidden="true">→</span></Link>
  </div><div className="container mobile-nav-wrap"><nav className="mobile-nav" aria-label="Mobile primary">{links.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</nav><Link className="button button-primary button-whatsapp mobile-cta" href="/contact">Contact us <span aria-hidden="true">→</span></Link></div></header>;
}
