import type { Metadata } from "next";
import { CalendarCheck, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { bookingHref, siteConfig } from "@/site.config";

export const metadata: Metadata = { title: "Contact", description: "Book a free consultation and get a customized digital marketing plan for your business." };

export default function Contact() {
  return <>
    <section className="page-hero page-hero-small"><div className="container narrow">
      <p className="eyebrow">Let’s talk</p>
      <h1>Get a clear plan for your <em>next marketing move.</em></h1>
      <p>Tell me about your business, your goals, and the marketing challenge you want to solve.</p>
    </div></section>
    <section id="consultation" className="section"><div className="container contact-layout">
      <aside>
        <div className="consultation-card"><CalendarCheck/><p className="eyebrow">Free consultation</p><h2>Book a Free Consultation Call</h2><p>{siteConfig.consultationOffer}</p>{siteConfig.bookingUrl ? <a className="button button-light" href={bookingHref}>Open booking calendar</a> : <p className="availability-note">Online scheduling is not configured yet. Use the inquiry form and I’ll respond by email.</p>}</div>
        <div className="contact-details"><h2>Contact details</h2><a href={`mailto:${siteConfig.email}`}><Mail/><span><small>Email</small>{siteConfig.email}</span></a><p><MapPin/><span><small>Service area</small>{siteConfig.location}</span></p></div>
      </aside>
      <div><p className="eyebrow">Send an inquiry</p><h2>What would you like help with?</h2><p className="form-intro">Share your main challenge or goal. Required fields are marked with an asterisk.</p><ContactForm/></div>
    </div></section>
  </>;
}
