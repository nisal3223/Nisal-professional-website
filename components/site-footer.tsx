import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/site.config";

export function SiteFooter() {
  const socials = [...(siteConfig.socials.linkedin ? [{ label: "LinkedIn", url: siteConfig.socials.linkedin }] : []), ...siteConfig.socials.other];
  return <footer className="footer"><div className="container footer-grid">
    <div><Link href="/" className="brand brand-light"><span>DN</span><strong>Digital Nisal</strong></Link><p>Practical AI-powered marketing for small and medium-sized businesses.</p></div>
    <div><h2>Explore</h2>{siteConfig.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div><h2>Contact</h2><a href={`mailto:${siteConfig.email}`}><Mail size={17}/> {siteConfig.email}</a><p className="footer-detail"><MapPin size={17}/> {siteConfig.location}</p>{socials.map((item) => <a key={item.url} href={item.url} target="_blank" rel="noreferrer">{item.label}</a>)}</div>
  </div><div className="container footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p><p>Clear strategy. Useful technology. Thoughtful growth.</p></div></footer>;
}
