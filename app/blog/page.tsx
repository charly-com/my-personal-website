import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export const metadata = { title: "Blog" }

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="card">
            <h3 className="text-xl font-semibold"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p className="text-sm text-slate-500">{new Date(p.date).toDateString()}</p>
            {p.summary && <p className="mt-2">{p.summary}</p>}
          </li>
        ))}
      </ul>
      {posts.length === 0 && <p>No posts yet.</p>}
    </section>
  )
}
