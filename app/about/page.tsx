// app/about/page.tsx
import Link from "next/link";

export const metadata = { title: "About" };

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
      {children}
    </h2>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-200">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  href,
  badge,
}: {
  title: string;
  desc: string;
  href?: string;
  badge?: string;
}) {
  const Wrapper = href ? Link : ("div" as any);
  const extraProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrapper
      {...extraProps}
      className="group block rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight group-hover:underline">
          {title}
        </h3>
        {badge && (
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    </Wrapper>
  );
}

export default function AboutPage() {
  return (
    <section className="max-w-5xl">
      {/* Hero */}
      <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          About Me
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Building intelligent, accessible products for real-world impact.
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          My professional journey is a testament to continuous learning. As a
          software developer, I’m passionate about crafting intelligent,
          accessible, and authentic digital solutions that solve real problems.
          My background in education gives me a unique lens for using technology
          to empower people and communities.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>TypeScript</Pill>
          <Pill>Next.js</Pill>
          <Pill>AI & Automation</Pill>
          <Pill>Product Thinking</Pill>
        </div>
      </header>

      {/* BoldMind blurb */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-3">
          <SectionTitle>BoldMind Technology Solution Enterprise</SectionTitle>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            I’m actively applying my skills to{" "}
            <strong>BoldMind</strong> — a focused ecosystem building for the
            Nigerian market. The work spans media, education, and AI-powered
            enablement.
          </p>
        </div>

        <Card
          title="AmeboGist — amebogist.ng"
          desc="A media project exploring the intersection of culture and technology, designed to spark awareness and community."
          href="https://amebogist.ng"
          badge="Awareness"
        />
        <Card
          title="EduCenter — educenter.com.ng"
          desc="Applying EdTech principles to create practical learning tools that translate attention into skills and outcomes."
          href="https://educenter.com.ng"
          badge="Education"
        />
        <Card
          title="PlanAI"
          desc="My core AI focus — building and experimenting with automation to simplify business operations for creators & SMEs."
          badge="Enablement"
        />
      </div>

      {/* Belief */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
        <SectionTitle>What I Believe</SectionTitle>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          I’m committed to using technology for good. The future of tech belongs
          to tools that create measurable impact and lasting legacies —
          especially for African creators and SMEs.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
          <SectionTitle>Let’s Connect If You:</SectionTitle>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-200">
            <li>Work in AI, EdTech, or software development.</li>
            <li>Believe in building tech that empowers African creators & SMEs.</li>
            <li>Want to explore how AI and education can drive growth.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Open to collaboration, advisory, and product work.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-4 py-2 text-sm font-medium text-white hover:opacity-95"
            >
              Contact form
            </Link>
            <a
              href="mailto:charles@boldmind.ng"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              charles@boldmind.ng
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
