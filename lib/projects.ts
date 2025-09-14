export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: "planai",
    title: "PlanAI",
    summary: "AI-first enablement suite for creators & SMEs.",
    tags: ["Next.js", "AI", "SaaS"],
    link: "https://planai.example.com"
  },
  {
    slug: "educenter",
    title: "EduCenter",
    summary: "Africa’s practical learning engine for exams & skills.",
    tags: ["Next.js", "Education", "CBT"]
  },
]
