"use client"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const stored = localStorage.getItem("theme") === "dark"
    const initial = stored || prefersDark
    document.documentElement.classList.toggle("dark", initial)
    setDark(initial)
  }, [])

  if (!mounted) return null

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <button onClick={toggle} className="rounded-xl border px-3 py-1 text-sm dark:border-slate-700">
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
