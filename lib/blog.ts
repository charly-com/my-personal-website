import fs from "node:fs"
import path from "node:path"

export type PostFrontmatter = {
  title: string
  date: string
  summary?: string
}

export type Post = PostFrontmatter & { slug: string; content: string }

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"))
  return files.map(file => {
    const slug = file.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
    const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(raw)
    let fm: Record<string,string> = {}
    let content = raw
    if (match) {
      const [, front, body] = match
      content = body.trim()
      front.split("\n").forEach(line => {
        const [k, ...rest] = line.split(":")
        fm[k.trim()] = rest.join(":").trim()
      })
    }
    return {
      slug,
      title: fm.title || slug,
      date: fm.date || new Date().toISOString(),
      summary: fm.summary || "",
      content,
    }
  }).sort((a,b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): Post | null {
  const all = getAllPosts()
  return all.find(p => p.slug === slug) ?? null
}
