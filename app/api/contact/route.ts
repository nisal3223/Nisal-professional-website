import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormspreeErrorResponse = {
  error?: string;
  errors?: Array<{ message?: string }>;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;
    const {
      name,
      email,
      business,
      website,
      service,
      message,
      company_url,
    } = body;

    if (company_url) {
      return NextResponse.json(
        { message: "Unable to process this request." },
        { status: 400 },
      );
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { message: "Please enter your full name." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email || "")) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!message || message.trim().length < 20) {
      return NextResponse.json(
        {
          message:
            "Please tell me a little more about your challenge or goals.",
        },
        { status: 400 },
      );
    }

    if (website) {
      try {
        new URL(website);
      } catch {
        return NextResponse.json(
          {
            message:
              "Please enter a valid website URL, including https://.",
          },
          { status: 400 },
        );
      }
    }

    const formId = process.env.FORMSPREE_FORM_ID;
    if (!formId) {
      return NextResponse.json(
        {
          message:
            "Online inquiry submission is not configured yet. Please email nisalshrestha3223@gmail.com directly.",
        },
        { status: 503 },
      );
    }

    const response = await fetch(
      `https://formspree.io/f/${encodeURIComponent(formId)}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          business: business?.trim() || "Not provided",
          website: website?.trim() || "Not provided",
          service: service?.trim() || "Not selected",
          message: message.trim(),
          _replyto: email.trim(),
          _subject: `Website inquiry from ${name.trim()}`,
        }),
      },
    );

    if (!response.ok) {
      const result = (await response
        .json()
        .catch(() => null)) as FormspreeErrorResponse | null;

      if (response.status === 429) {
        return NextResponse.json(
          {
            message:
              "Too many inquiries were sent recently. Please wait a moment and try again.",
          },
          { status: 429 },
        );
      }

      const formspreeMessage = result?.errors?.[0]?.message || result?.error;
      return NextResponse.json(
        {
          message:
            formspreeMessage ||
            "The form service could not confirm delivery. Please try again or email me directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        "Thank you—your inquiry was sent successfully. I’ll respond by email.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Something went wrong while preparing your inquiry. Please try again.",
      },
      { status: 400 },
    );
  }
}
