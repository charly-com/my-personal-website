import Link from "next/link";
import { getAggregatedPosts } from "@/lib/feeds";

export const metadata = { title: "Blog" };

export default async function BlogPage() {
  const posts = await getAggregatedPosts();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="card">
            <h3 className="text-xl font-semibold">
              {p.source === "local" ? (
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              ) : (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              )}
            </h3>
            <p className="text-sm text-slate-500">
              {new Date(p.date).toDateString()} ·{" "}
              <span className="uppercase">{p.source}</span>
            </p>
            {p.summary && <p className="mt-2">{p.summary}</p>}
          </li>
        ))}
      </ul>
      {posts.length === 0 && <p>No posts yet.</p>}
    </section>
  );
}
