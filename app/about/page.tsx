import type { Metadata } from "next";
import { Check, Eye, Gauge, RefreshCcw, Scale } from "lucide-react";
import { ConsultationCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "About Me",
  description: "Meet Nisal Shrestha and learn about his clear, practical approach to AI-powered digital marketing.",
};

export default function About() {
  const values = [
    [Eye, "Transparency", "Clear advice and realistic expectations."],
    [Scale, "Practical action", "Recommendations you can understand and use."],
    [RefreshCcw, "Continuous improvement", "Test, learn, and improve over time."],
    [Gauge, "Meaningful measurement", "Track the signals that matter to your business."],
  ] as const;
  const steps = [
    "We discuss your goals, customers, challenges, and current marketing.",
    "I find the strongest opportunities and explain what to focus on first.",
    "We turn those priorities into a clear marketing plan and practical actions.",
    "We review progress and improve the plan over time.",
  ];
  return <>
    <section className="page-hero"><div className="container narrow">
      <p className="eyebrow">About me</p>
      <h1>Clear digital marketing for <em>busy business owners.</em></h1>
      <p>I’m Nisal Shrestha, an AI marketing expert helping small and medium-sized businesses attract customers, improve their online presence, and use AI in practical ways.</p>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><p className="eyebrow">Who I help</p><h2>For business owners who need clarity, not more complexity.</h2></div>
      <div className="prose-intro"><p>You may be spending time on marketing without knowing what is working, which channels matter, or which AI tools are worth using.</p><p>I help you choose the right priorities and build a plan that fits your goals, audience, budget, and current stage.</p></div>
    </div></section>
    <section className="section section-soft"><div className="container">
      <div className="section-heading"><p className="eyebrow">My approach</p><h2>Good strategy first. AI where it helps.</h2><p>I combine proven marketing principles with useful AI tools. This keeps your marketing focused, efficient, and connected to real business goals.</p></div>
      <div className="value-grid">{values.map(([Icon, heading, text]) => <article key={heading}><Icon/><h3>{heading}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className="section"><div className="container two-col">
      <div><p className="eyebrow">Working together</p><h2>Simple, focused, and built around your needs.</h2></div>
      <div className="feature-list">{steps.map((step) => <div key={step}><Check/><span><p>{step}</p></span></div>)}</div>
    </div></section>
    <ConsultationCta/>
  </>;
}
