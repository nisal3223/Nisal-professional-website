import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { ConsultationCta } from "@/components/cta";
import { ServiceIcon } from "@/components/icons";
import { services } from "@/lib/services";
import { bookingHref } from "@/site.config";

export const metadata: Metadata = { title: "Services", description: "AI-powered digital marketing services tailored to your business goals, audience, and budget." };

export default function Services() {
  const faqs = [
    ["Is this suitable for my business?", "My services are for small and medium-sized businesses that want clearer priorities, better marketing systems, or practical help with AI."],
    ["Do I need a large marketing budget?", "No. Recommendations are built around your goals, resources, and current stage. I explain the options so you can choose what makes sense."],
    ["How do we get started?", "Book a Free Consultation Call. I’ll learn about your business, identify opportunities, and create a customized digital marketing plan you can start implementing immediately."],
    ["How will we measure progress?", "We choose useful measures for your goals, such as qualified inquiries, conversion rates, campaign efficiency, or customer progress."],
  ];
  return <>
    <section className="page-hero"><div className="container narrow">
      <p className="eyebrow">Services</p>
      <h1>AI-powered marketing built around <em>your business.</em></h1>
      <p>Get the strategy, tools, and support you need to attract customers and market your business with more confidence.</p>
      <a className="button" href={bookingHref}>Book a Free Consultation Call <ArrowRight size={18}/></a>
    </div></section>
    <section className="section"><div className="container service-detail-list">{services.map((service, index) => <article id={service.slug} key={service.slug} className="service-detail">
      <div className="service-number">0{index + 1}</div>
      <div><div className="icon-box"><ServiceIcon name={service.icon}/></div><h2>{service.title}</h2><p className="lead">{service.summary}</p></div>
      <div><h3>The problem it solves</h3><p>{service.problem}</p><h3>What may be included</h3><ul>{service.activities.map((activity) => <li key={activity}><Check/>{activity}</li>)}</ul><h3>How it helps</h3><p>{service.goal}</p></div>
    </article>)}</div></section>
    <section className="section section-navy"><div className="container process-grid">
      <div><p className="eyebrow eyebrow-light">How it works</p><h2>Support that fits your goals and resources.</h2><p>We can focus on strategy, implementation, improvement, or the right mix for your business.</p></div>
      <ol className="process-list">{["Understand your business", "Choose the right priorities", "Put the plan into action", "Review and improve"].map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
    </div></section>
    <section className="section"><div className="container faq-layout">
      <div><p className="eyebrow">Frequently asked questions</p><h2>What to know before we begin.</h2></div>
      <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
    </div></section>
    <ConsultationCta/>
  </>;
}
