// lib/feeds.ts
import Parser from "rss-parser";
import { getAllPosts } from "./blog"; // your local markdown loader

export type AggregatedPost = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  source: "local" | "medium" | "amebogist";
  link?: string;
};

const parser = new Parser();

export async function getMediumPosts(): Promise<AggregatedPost[]> {
  const feed = await parser.parseURL("https://medium.com/feed/@uchecharles223");
  return feed.items.map((item) => ({
    slug: item.guid || item.link!,
    title: item.title || "",
    date: item.pubDate || new Date().toISOString(),
    summary: item.contentSnippet || "",
    source: "medium" as const,
    link: item.link,
  }));
}

export async function getAmeboPosts(): Promise<AggregatedPost[]> {
  const feed = await parser.parseURL("https://amebogist.ng/feed"); // confirm feed URL
  return feed.items.map((item) => ({
    slug: item.guid || item.link!,
    title: item.title || "",
    date: item.pubDate || new Date().toISOString(),
    summary: item.contentSnippet || "",
    source: "amebogist" as const,
    link: item.link,
  }));
}

export async function getAggregatedPosts(): Promise<AggregatedPost[]> {
  const local = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    summary: p.summary,
    source: "local" as const,
  }));

  const [medium, amebo] = await Promise.all([
    getMediumPosts(),
    getAmeboPosts(),
  ]);

  return [...local, ...medium, ...amebo].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
}
