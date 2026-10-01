import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceWorker from "../components/ServiceWorker";

const siteUrl = "https://brandbanaodigital.in";
const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "ProfessionalService", "@id": `${siteUrl}/#organization`, name: "Brand Banao Digital", url: siteUrl, logo: `${siteUrl}/logo1.svg`, image: `${siteUrl}/logo1.png`, description: "Digital studio providing website development, social media content, reels and local SEO for Indian businesses and public leaders.", priceRange: "₹5,999 - ₹42,999", address: { "@type": "PostalAddress", addressLocality: "Delhi", addressRegion: "Delhi", addressCountry: "IN" }, areaServed: ["Delhi NCR", "Rajasthan", "India"], sameAs: ["https://www.instagram.com/brandbanaodigital.in"], hasOfferCatalog: { "@type": "OfferCatalog", name: "Digital Growth Services", itemListElement: ["Website Development", "Reels and Media Production", "Local SEO and Growth"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Brand Banao Digital", publisher: { "@id": `${siteUrl}/#organization` } }
  ]
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Brand Banao Digital | Websites, Reels & Local SEO", template: "%s | Brand Banao Digital" },
  description: "Brand Banao Digital builds fast websites, short-form video content and local SEO systems for businesses and public leaders in Delhi, Rajasthan and across India.",
  keywords: ["website development India", "digital marketing agency Delhi", "local SEO India", "reels production", "business website design", "political campaign website"],
  authors: [{ name: "Brand Banao Digital" }], creator: "Brand Banao Digital",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName: "Brand Banao Digital", title: "Brand Banao Digital | Websites, Reels & Local SEO", description: "Websites, social media content and local SEO for Indian businesses and public leaders.", url: siteUrl, images: [{ url: "/logo1.png", width: 300, height: 300, alt: "Brand Banao Digital" }] },
  twitter: { card: "summary_large_image", title: "Brand Banao Digital | Websites, Reels & Local SEO", description: "Websites, social media content and local SEO for Indian businesses and public leaders.", images: ["/logo1.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: [{ url: "/logo1.svg", type: "image/svg+xml" }, { url: "/logo1.png", sizes: "192x192", type: "image/png" }], apple: "/logo1.png" },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return <html lang="en-IN"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}/></head><body><div className="app-shell"><div className="page-glow page-glow-left"/><div className="page-glow page-glow-right"/><Header/><main>{children}</main><Footer/><ServiceWorker/></div></body></html>;
}
