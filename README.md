# Digital Nisal portfolio

Professional portfolio and lead-generation site for Nisal Shrestha, built with the Next.js App Router, TypeScript, Tailwind CSS, and the Sites-compatible Vinext runtime.

## Setup

1. Run `npm install`.
2. Copy `.env.example` to `.env.local` and add available values.
3. Run `npm run dev` and open the local URL.

Checks: `npm run lint`, `npx tsc --noEmit`, and `npm run build`.

## Update content

- Edit `site.config.ts` for personal details, booking behavior, site URL, photo, navigation, and social links.
- Edit `lib/services.ts` for the centrally managed service offering.
- Page copy lives in the matching route under `app/`.
- Empty social links and the empty photo field are intentionally not rendered.

## Publish an article

Add a Markdown file to `content/blog/` with `title`, `summary`, `category`, and `date` frontmatter. Run `npm run content:build`; development and production builds also do this automatically. The filename becomes the article slug.

## Connect booking

Set `NEXT_PUBLIC_BOOKING_URL` to the full scheduling URL. Every consultation CTA then uses it. Without it, CTAs lead to `/contact#consultation`.

## Connect contact email

The validated server endpoint sends through Resend. Configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` (an accepted sender). Without them, the form honestly reports that online submission is unavailable and suggests direct email. Personal form content is not logged.

## SEO and launch

Set `NEXT_PUBLIC_SITE_URL` to the production origin without a trailing slash to enable canonical URLs, sitemap URLs, and absolute structured metadata. Add the booking URL, verified email credentials, preferred social URLs, and optionally a personal photo before launch. No tracking scripts or cookies are installed by default.
