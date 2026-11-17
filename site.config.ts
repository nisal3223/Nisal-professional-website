export const siteConfig = {
  name: "Nisal Shrestha",
  brand: "Digital Nisal",
  role: "AI Marketing Expert",
  location: "Indryani, Sanagaun",
  email: "nisalshrestha3223@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://digital-nisal-ai-marketing.shadygourd32.chatgpt.site",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  photo: "",
  personalStory: "",
  socials: {
    linkedin: "",
    other: [] as { label: string; url: string }[],
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  consultationOffer:
    "During your free consultation, I’ll analyze your business, identify opportunities for growth, and create a customized digital marketing plan you can start implementing immediately.",
} as const;

export const bookingHref = siteConfig.bookingUrl || "/contact#consultation";
