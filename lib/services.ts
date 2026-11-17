export type Service = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  activities: string[];
  goal: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI-Powered Marketing Strategy",
    icon: "Compass",
    summary: "A clear marketing plan focused on the right customers, channels, and AI tools.",
    problem: "Your marketing feels scattered, and you are unsure what to prioritize.",
    activities: ["Review your business, audience, and current marketing", "Set clear priorities and campaign goals", "Choose practical AI opportunities"],
    goal: "Give your business a focused direction and a plan you can act on.",
  },
  {
    slug: "seo-content",
    title: "SEO & Content Strategy",
    icon: "Search",
    summary: "Help the right people find your business through useful search-focused content.",
    problem: "Your website is difficult to find, or your content is not attracting the right visitors.",
    activities: ["Research customer searches and questions", "Improve important website pages", "Plan useful content and topics"],
    goal: "Increase visibility and build trust with potential customers.",
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    icon: "MessagesSquare",
    summary: "Create a consistent social presence with content that supports your business goals.",
    problem: "Posting takes time, feels inconsistent, or does not lead anywhere useful.",
    activities: ["Choose the right social channels", "Create content themes and a posting plan", "Review what your audience responds to"],
    goal: "Build awareness and guide interested people toward your business.",
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    icon: "Target",
    summary: "Reach relevant audiences with focused campaigns and better use of your ad budget.",
    problem: "Your ads lack clear targeting, useful measurement, or a strong path to inquiry.",
    activities: ["Plan audiences and campaign structure", "Improve messages and landing pages", "Review spending and campaign performance"],
    goal: "Use paid advertising to create demand, test ideas, and attract qualified interest.",
  },
  {
    slug: "email-automation",
    title: "Email & Marketing Automation",
    icon: "Mail",
    summary: "Follow up with leads and customers using helpful, timely email communication.",
    problem: "Leads go cold, follow-up is manual, or customer communication is inconsistent.",
    activities: ["Plan email sequences", "Create campaign and message direction", "Set up and check useful automations"],
    goal: "Build stronger follow-up without adding more repetitive work.",
  },
  {
    slug: "ai-workflows",
    title: "AI Tools & Workflow Implementation",
    icon: "Workflow",
    summary: "Use the right AI tools to make everyday marketing work faster and more consistent.",
    problem: "AI feels overwhelming, or your current tools do not fit into a clear process.",
    activities: ["Choose useful tools for specific tasks", "Build repeatable workflows and prompts", "Add simple review steps and guidance"],
    goal: "Save time while keeping your quality, judgment, and brand voice in control.",
  },
  {
    slug: "conversion-analysis",
    title: "Conversion & Performance Analysis",
    icon: "ChartNoAxesCombined",
    summary: "Understand what is working and where customers are dropping away.",
    problem: "You have marketing data, but it is not helping you make clear decisions.",
    activities: ["Review the customer journey", "Choose useful marketing measures", "Identify practical tests and improvements"],
    goal: "Turn marketing data into better priorities and steady improvement.",
  },
];
