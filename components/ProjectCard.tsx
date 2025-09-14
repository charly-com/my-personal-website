import Link from "next/link"
import type { Project } from "@/lib/projects"

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="card block group">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold group-hover:underline">{p.title}</h3>
        <span className="text-xs rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">Case Study</span>
      </div>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{p.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map(t => (
          <span key={t} className="text-xs rounded-full border px-2 py-0.5 dark:border-slate-700">{t}</span>
        ))}
      </div>
    </Link>
  )
}
