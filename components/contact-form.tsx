"use client";

import { ValidationError, useForm } from "@formspree/react";
import { LoaderCircle, Send } from "lucide-react";
import { services } from "@/lib/services";

type ContactFields = {
  name: string;
  email: string;
  business: string;
  website: string;
  service: string;
  message: string;
  _gotcha: string;
  _subject: string;
};

const formspreeEndpoint = "https://formspree.io/f/moeddrgk";

export function ContactForm() {
  const [state, handleSubmit] = useForm<ContactFields>("moeddrgk");

  if (state.succeeded) {
    return (
      <div role="status" className="form-status success">
        Thank you—your inquiry was sent successfully. I’ll respond by email.
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      action={formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="_subject"
        value="New inquiry from the Digital Nisal website"
      />

      <div className="form-row">
        <label>
          Full name <span aria-hidden="true">*</span>
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="field-error"
          />
        </label>

        <label>
          Email address <span aria-hidden="true">*</span>
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="field-error"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Business name
          <input name="business" autoComplete="organization" />
          <ValidationError
            prefix="Business name"
            field="business"
            errors={state.errors}
            className="field-error"
          />
        </label>

        <label>
          Website URL <span className="optional">Optional</span>
          <input
            name="website"
            type="url"
            inputMode="url"
            placeholder="https://"
          />
          <ValidationError
            prefix="Website"
            field="website"
            errors={state.errors}
            className="field-error"
          />
        </label>
      </div>

      <label>
        Service of interest
        <select name="service" defaultValue="">
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
        </select>
        <ValidationError
          prefix="Service"
          field="service"
          errors={state.errors}
          className="field-error"
        />
      </label>

      <label>
        Main business challenge or goals <span aria-hidden="true">*</span>
        <textarea
          name="message"
          rows={6}
          required
          minLength={20}
          placeholder="Tell me what you’re working toward and what is getting in the way."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="field-error"
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        Leave this field empty
        <input name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>

      <button className="button" type="submit" disabled={state.submitting}>
        {state.submitting ? (
          <>
            <LoaderCircle className="spin" /> Sending…
          </>
        ) : (
          <>
            Send inquiry <Send size={17} />
          </>
        )}
      </button>

      <ValidationError
        errors={state.errors}
        className="form-status error"
      />
    </form>
  );
}
