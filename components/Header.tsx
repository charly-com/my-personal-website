"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import clsx from "clsx";
import type { Route } from "next"; // ⬅️ key import
import { ThemeToggle } from "./ThemeToggle";

type NavItem = { href: Route; label: string };

const NAV = [
  { href: "/" as const, label: "Home" },
  { href: "/projects" as const, label: "Projects" },
  { href: "/about" as const, label: "About" },
  { href: "/blog" as const, label: "Blog" },
  { href: "/contact" as const, label: "Contact" },
] as const satisfies ReadonlyArray<NavItem>;

function NavLink({
  href,
  label,
  onClick,
}: NavItem & { onClick?: () => void }) {
  const pathname = usePathname();
  const h = href as string; // Route -> string for comparison
  const active = h === "/" ? pathname === "/" : pathname === h || pathname.startsWith(h + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "px-3 py-2 text-sm font-medium rounded-xl transition",
        active
          ? "text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900"
          : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/60"
      )}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={clsx(
          "sticky top-0 z-40 border-b transition-shadow",
          "backdrop-blur bg-white/70 dark:bg-slate-950/60",
          "border-slate-200 dark:border-slate-800",
          scrolled && "shadow-sm"
        )}
      >
        <div className="container flex items-center justify-between py-3">
          <Link href={"/" as const} className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Charles Uche" width={28} height={28} priority className="h-7 w-7" />
            <span className="text-sm font-semibold tracking-wide">Charles Uche Chijuka</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
            <div className="mx-2 h-5 w-px bg-slate-200 dark:bg-slate-800" />
            <Link
              href={"/contact" as const}
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-navy px-4 py-2 text-sm font-medium text-white hover:opacity-95"
            >
              Hire me
            </Link>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open navigation"
              aria-controls={menuId}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={clsx("md:hidden border-t border-slate-200 dark:border-slate-800", open ? "block" : "hidden")}
        >
          <div className="container py-3">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <NavLink key={item.href} {...item} onClick={() => setOpen(false)} />
              ))}
              <Link
                href={"/contact" as const}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-navy px-4 py-2 text-sm font-medium text-white hover:opacity-95"
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
