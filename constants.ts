import { Experience, Project, SocialLink } from "./types";
export const PORTFOLIO_OWNER = "Bapun Hansdah";
export const PORTFOLIO_ROLE = "Full Stack Developer & Technical Leader";
export const BIO = `
I build systems.

Full-stack engineer with 3+ years of experience shipping SaaS platforms, automation tools, and AI-enabled applications. I work across frontend, backend, and cloud infrastructure, owning architecture through deployment.

Drawn to early-stage products where I can take ideas from 0→1 and scale them thoughtfully.
`;

export const SKILLS = [
  "JavaScript (ES6+)",
  "TypeScript",
  "Python",
  "Go",
  "React.js",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "AWS (EC2, S3)",
  "Docker",
  "CI/CD",
  "PostgreSQL",
  "MongoDB",
  "Generative AI",
  "Socket.IO",
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "CTO & Software Engineer",
    company: "Unifill AI",
    period: "Aug 2023 – Present",
    description: [
      "Building Web & Mobile products, architecting digital systems, and automating workflows for fast-moving brands and startups.",
      "Integrated LLMs (GPT-4, Claude) into front-end UI flows to deliver dynamic user experiences in B2B tools.",
      "Led cross-functional development sprints, ensuring 100% feature delivery within roadmap timelines.",
      "Tech Stack: Next.js, React.js, Node.js, Express.js, Passport.js, AWS, Azure, GPT APIs",
    ],
  },
  {
    id: "2",
    role: "Software Engineer",
    company: "Interview Insider",
    period: "Jan 2024 – Mar 2024",
    description: [
      "Designed and launched an interview preparation portal targeting company-specific technical questions and role-based feedback mechanisms.",
      "Integrated admin dashboards, feedback analytics, and dynamic interview modules via AWS-hosted infrastructure.",
      "Tech Stack: Next.js, Node.js, AWS, MongoDB",
    ],
  },
  {
    id: "3",
    role: "Software Development Engineer",
    company: "DogSwag",
    period: "Feb 2023 – Aug 2023",
    description: [
      "Delivered 4 production-grade features including a real-time chat system (Socket.IO) and gamified components that increased session duration by 30%.",
      "Built a secure loan application platform to process pet financing requests with encryption-based data handling.",
      "Developed an in-app scheduling system enabling 24/7 appointment access and reducing no-shows by 40%.",
      "Tech Stack: React.js, Next.js, Go, Node.js, Socket.IO, Tailwind CSS",
    ],
  },
  {
    id: "4",
    role: "Software Engineer",
    company: "Stravion Capital (Freelance)",
    period: "Aug 2025 – Oct 2025",
    description: [
      "Developed a full-featured real estate website with an integrated admin dashboard for managing properties, leads, and blog content.",
      "Built a WhatsApp chatbot to automate inquiries, schedule viewings, and capture potential leads in real time.",
      "Integrated a lead capture CRM for tracking user interactions and managing sales pipelines efficiently.",
      "Tech Stack: Next.js, Node.js, Vercel, Socket.io, MongoDB, Twillio",
    ],
  },
];

export const PROJECTS: Project[] = [
  // {
  //   id: "p1",
  //   title: "Tasvera",
  //   description:
  //     "A minimal tool to reframe horizontal videos into vertical or square formats with manual subject tracking.",
  //   tags: ["Video Processing", "Tool"],
  //   link: "https://tasvera.com",
  //   icon: "📹",
  // },
  {
    id: "p2",
    title: "Excalimotion",
    description:
      "A motion graphics platform for creating and rendering animated content and presentations with a user-friendly interface.",
    tags: ["Graphics", "Animation"],
    link: "https://excalimotion.com",
    icon: "🎬",
  },
  {
    id: "p3",
    title: "Singleclaw",
    description: "A self-improving AI agent in ~1000 lines of TypeScript",
    tags: ["AI", "Automation"],
    link: "https://github.com/BapunHansdah/singleclaw",
    icon: "🤖",
  },
  {
    id: "p4",
    title: "Sketchmark",
    description: "A plain-text DSL for hand-drawn diagrams. Write boxes, edges, and groups as code — renders sketchy SVG/Canvas via rough.js with a built-in step-by-step animation system.",
    tags: ["Graphics", "Markdown"],
    link: "https://sketchmark.dev",
    icon: "🎨",
  },
  {
    id: "p5",
    title: "PptxGenJS Contributor",
    description:
      "Contributed an open-source enhancement to the PptxGenJS Node.js library by adding support for slide animations.",
    tags: ["Open Source", "Node.js"],
    link: "https://github.com/gitbrent/PptxGenJS",
    icon: "📦",
  },
  {
    id: "p6",
    title: "Hashtag Scraper",
    description:
      "Built with React + Instagram APIs to automate influencer discovery by extracting user details from hashtag searches.",
    tags: ["React", "Automation"],
    link: "https://chromewebstore.google.com/detail/hashtag-scraper/lkjglfpchhgefmooomhbdipbppabdpii",
    icon: "🦀",
  },
  {
    id: "p6",
    title: "Google Business Scraper",
    description:
      "Built with React + Browser automation to scrape business details from Google business profiles.",
    tags: ["React", "Automation"],
    link: "https://github.com/BapunHansdah/google-business-scraper",
    icon: "🦀",
  },
];

export const SOCIALS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/BapunHansdah",
    icon: "/github.svg",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/bapun-hansdah/",
    icon: "/linkedin.svg",
  },
  {
    platform: "Email",
    url: "mailto:bapunhansdah777@gmail.com",
    icon: "/email.svg",
  },
  { platform: "Phone", url: "tel:+918328821185", icon: "/phone.svg" },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Bapun Hansdah's portfolio website. 
Your goal is to answer questions about Bapun based on the following information:

Bio: ${BIO}
Skills: ${SKILLS.join(", ")}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}
Contact: bapunhansdah777@gmail.com, +91 8328821185

Tone: Professional, concise, technical yet accessible. 
Do not hallucinate info. If you don't know, say you don't know but suggest emailing Bapun.
Keep answers relatively short to fit a chat widget.
`;
