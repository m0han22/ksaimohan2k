import type {
  Education,
  Experience,
  Post,
  Profile,
  Project,
  Social,
} from "./types";

export const profile: Profile = {
  name: "Sai Mohan Kesapragada",
  role: "AI Engineer",
  company: "Deriv",
  companyUrl: "https://deriv.com",
  location: "Dubai, UAE",
  status: "Open to new projects",
  tagline: "At the intersection of intuition and intelligence.",
  currentFocus: "Currently building LLM systems and agentic tools at Deriv.",
  about: [
    "I'm an AI Engineer at Deriv in Dubai. The part of LLM work I care about most is the layer underneath: retrieval that doesn't lie, agents that don't loop forever, and the boring plumbing that turns a model into a product.",
    "Before Deriv I led the build of Arkaa, a production GenAI RAG platform serving enterprise customers. Before that, observability and data infrastructure on the Elastic Stack. The same instinct runs through all of it: I want to know how the system breaks, then build for that.",
    "On the side I run small experiments. Right now: a graph reasoning agent, an Arabic voice mental-health assistant, and an eval harness I keep meaning to open-source. Most of it lives in Python and TypeScript, with Postgres for state and more bash than I'd like to admit.",
  ],
  resumeUrl: "/resume.pdf",
};

export const experience: Experience[] = [
  {
    company: "Deriv",
    companyUrl: "https://deriv.com",
    title: "AI Engineer",
    start: "2025",
    end: "Present",
    location: "Dubai, UAE",
    summary:
      "Part of the MarTech team, building Deriv's marketing personalization engine.",
    highlights: [
      "Shipping the personalization engine that ranks and routes marketing messages across user touchpoints.",
      "Built an internal payment automation tool covering pantry restocks and facility-management spend.",
    ],
  },
  {
    company: "Spire Solutions",
    companyUrl: "https://www.spiresolutions.com",
    title: "Technical Consultant",
    start: "2023",
    end: "2025",
    location: "Dubai, UAE",
    summary:
      "Led the end-to-end build of Arkaa, a production GenAI RAG platform for enterprise customers.",
    highlights: [
      "Architected vector storage (Weaviate, PGVector) and LLM pipelines (OpenAI, HuggingFace) behind a FastAPI, Celery, Redis backend.",
      "Built multilingual document ingestion (Arabic included) with LangChain, PyPDFLoader, and Vision models for accurate chunking and semantic search.",
      "Wired natural-language querying into MySQL and Snowflake; ran R&D on agentic systems, LangGraph, and LLM safety layers.",
    ],
  },
  {
    company: "kipi.bi",
    companyUrl: "https://kipi.bi",
    title: "Software Engineer",
    start: "2022",
    end: "2023",
    location: "Hyderabad (Remote)",
    summary:
      "Built observability and data infrastructure on the Elastic Stack for enterprise clients.",
    highlights: [
      "Owned ELK Stack deployments and upgrades using Ansible and Python integrations with Elasticsearch.",
      "Built Snapshot & Restore workflows that improved data flow across client systems.",
      "Earned Elastic Observability certification and ran POCs across Snowflake and Azure.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "GITAM Deemed University",
    degree: "B.Tech",
    field: "Computer Science",
    start: "2018",
    end: "2022",
    location: "Visakhapatnam, India",
  },
];

export const projects: Project[] = [
  {
    title: "Arkaa",
    description:
      "End-to-end GenAI platform shipped to production at Spire Solutions. Built RAG over multilingual document corpora (Arabic included), text-to-SQL across MySQL and Snowflake, agentic workflows, and offline model support for on-prem deployments.",
    tags: ["RAG", "Text-to-SQL", "Agents", "On-prem LLMs"],
    year: "2023-25",
  },
];

export const posts: Post[] = [
  {
    slug: "building-multi-language-rag",
    title: "Building Multi-Language RAG",
    excerpt:
      "Multilingual LLMs lose context in regional languages. Comparing three translation approaches (OpenAI, Google Translate, Argos) for production-grade RAG.",
    date: "2024-11-19",
    readingTime: "5 min",
    url: "https://medium.com/@ksaimohan2k/building-multi-language-rag-1cce121ed4fa",
  },
  {
    slug: "migrating-to-elasticsearch",
    title: "Migrating to Elasticsearch with Logstash and Kafka",
    excerpt:
      "Streaming production data into Elasticsearch with Kafka as the buffer and Logstash as the pipeline.",
    date: "2024-01-08",
    readingTime: "4 min",
    url: "https://medium.com/@ksaimohan2k/migrating-to-elasticsearch-6ef7a4b7eed5",
  },
  {
    slug: "snowflake-to-elasticsearch",
    title: "Snowflake to Elasticsearch with Logstash",
    excerpt:
      "Moving data from a structured warehouse to a search-first store, with the configs and Windows gotchas to make it work in practice.",
    date: "2023-09-19",
    readingTime: "3 min",
    url: "https://medium.com/@ksaimohan2k/snowflake-to-elasticsearch-4c755b4e1110",
  },
];

export const socials: Social[] = [
  {
    kind: "github",
    label: "GitHub",
    href: "https://github.com/m0han22",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-mohan-kesapragada-71a73699/",
  },
  {
    kind: "x",
    label: "X",
    href: "https://x.com/ks_4ai",
  },
  {
    kind: "email",
    label: "Email",
    href: "#contact",
  },
];

export const navItems: { label: string; href: string }[] = [
  { label: "Work", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
