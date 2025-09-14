import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string }}) {
  const p = projects.find(x => x.slug === params.slug)
  if (!p) return {}
  return { title: `${p.title} — Case Study`, description: p.summary }
}

export default function ProjectPage({ params }: { params: { slug: string }}) {
  const p = projects.find(x => x.slug === params.slug)
  if (!p) return notFound()

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{p.title}</h1>
      <p className="lead">{p.summary}</p>
      <h2>Overview</h2>
      <p>Describe the problem, constraints, and impact here.</p>
      <h2>Stack</h2>
      <ul>{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
      {p.link && <p><a href={p.link}>Visit project</a></p>}
    </article>
  )
}
