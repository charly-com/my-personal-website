import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/ProjectCard"

export const metadata = { title: "Projects" }

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </section>
  )
}
