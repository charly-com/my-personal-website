// app/page.tsx
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
        <p className="text-xs uppercase tracking-widest text-slate-500">Hello, I’m</p>
        <h1 className="mt-1 text-4xl font-bold leading-tight md:text-6xl">Charles Uche Chijuka</h1>
        <p className="mt-3 max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300">
          Founder of <strong>BoldMind Technology Solution Enterprise</strong>. I design, code, and ship
          AI-first products across a triple flywheel: <em>Awareness → Education → Enablement.</em>
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={"/projects"} className="btn-primary">
            View Projects <ArrowRight className="size-4" />
          </Link>
          <Link href={"/contact"} className="btn-secondary">
            Contact me
          </Link>
        </div>

        {/* quick skill pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200">
            TypeScript
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200">
            Next.js
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200">
            AI & Automation
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200">
            Product Thinking
          </span>
        </div>
      </header>

      {/* Feature cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href={"/projects/planai"}
          className="card group transition-transform hover:-translate-y-0.5"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold tracking-tight group-hover:underline">PlanAI</h3>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Enablement
            </span>
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Automation and AI tooling that simplify operations for creators & SMEs.
          </p>
        </Link>

        <Link
          href={"/projects/educenter"}
          className="card group transition-transform hover:-translate-y-0.5"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold tracking-tight group-hover:underline">EduCenter</h3>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Education
            </span>
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Practical learning engine turning attention into skills and outcomes.
          </p>
        </Link>
      </div>

      {/* Secondary CTA band */}
      <div className="rounded-3xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Let’s build something useful.</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              Open to collaborations in AI, EdTech, and product engineering.
            </p>
          </div>
          <Link
            href={"/contact"}
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-4 py-2 text-sm font-medium text-white hover:opacity-95"
          >
            Start a conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
