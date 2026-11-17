import { ArrowRight } from "lucide-react";
import { bookingHref, siteConfig } from "@/site.config";
export function ConsultationCta({ compact = false }: { compact?: boolean }) { return <section className={compact ? "cta cta-compact" : "cta section"}><div className="container cta-inner"><div><p className="eyebrow">Your next step</p><h2>Get a customized marketing plan you can use right away.</h2><p>{siteConfig.consultationOffer}</p></div><a className="button button-light" href={bookingHref}>Book a Free Consultation Call <ArrowRight size={18}/></a></div></section>; }
