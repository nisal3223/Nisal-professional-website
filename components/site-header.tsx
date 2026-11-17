"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { bookingHref, siteConfig } from "@/site.config";

export function SiteHeader() {
  const [open, setOpen] = useState(false); const pathname = usePathname();
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="site-header">
    <div className="container nav-wrap">
      <a href="/" className="brand" aria-label="Digital Nisal home"><img className="brand-logo" src="/digital-nisal-logo.png" alt="Digital Nisal" width="2048" height="768"/></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {siteConfig.navigation.map((item) => <a key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</a>)}
      </nav>
      <a className="button button-small desktop-cta" href={bookingHref}>Book a Free Consultation Call <ArrowUpRight size={17}/></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div id="mobile-navigation" className="mobile-panel"><nav aria-label="Mobile navigation">{siteConfig.navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</a>)}<a className="button" href={bookingHref} onClick={() => setOpen(false)}>Book a Free Consultation Call</a></nav></div>}
  </header>;
}
