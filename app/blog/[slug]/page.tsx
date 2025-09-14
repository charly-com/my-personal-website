import { notFound } from "next/navigation"
import { getAllPosts, getPost } from "@/lib/blog"

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string }}) {
  const p = getPost(params.slug)
  if (!p) return {}
  return { title: p.title, description: p.summary }
}

export default function BlogPostPage({ params }: { params: { slug: string }}) {
  const p = getPost(params.slug)
  if (!p) return notFound()

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{p.title}</h1>
      <p className="text-sm text-slate-500">{new Date(p.date).toDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: p.content.replace(/\n/g, "<br/>") }} />
    </article>
  )
}
