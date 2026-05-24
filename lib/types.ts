export type Profile = {
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  status: string;
  tagline: string;
  currentFocus: string;
  about: string[];
  resumeUrl?: string;
};

export type Experience = {
  company: string;
  companyUrl?: string;
  title: string;
  start: string;
  end: string | "Present";
  location?: string;
  summary: string;
  highlights?: string[];
};

export type Education = {
  school: string;
  degree: string;
  field?: string;
  start: string;
  end: string;
  location?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  year: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  url?: string;
};

export type Research = {
  title: string;
  venue?: string;
  year: string;
  url?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export type SocialKind = "github" | "linkedin" | "x" | "email" | "website";

export type Social = {
  kind: SocialKind;
  label: string;
  href: string;
};
