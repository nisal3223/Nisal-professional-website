import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/site.config";

export function SiteFooter() {
  const socials = [...(siteConfig.socials.linkedin ? [{ label: "LinkedIn", url: siteConfig.socials.linkedin }] : []), ...siteConfig.socials.other];
  return <footer className="footer"><div className="container footer-grid">
    <div><a href="/" className="brand brand-light"><img className="brand-logo footer-logo" src="/digital-nisal-logo.png" alt="Digital Nisal" width="2048" height="768"/></a><p>Practical AI-powered marketing for small and medium-sized businesses.</p></div>
    <div><h2>Explore</h2>{siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
    <div><h2>Contact</h2><a href={`mailto:${siteConfig.email}`}><Mail size={17}/> {siteConfig.email}</a><p className="footer-detail"><MapPin size={17}/> {siteConfig.location}</p>{socials.map((item) => <a key={item.url} href={item.url} target="_blank" rel="noreferrer">{item.label}</a>)}</div>
  </div><div className="container footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p><p>Clear strategy. Useful technology. Thoughtful growth.</p></div></footer>;
}
