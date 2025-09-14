import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    default: "Charles Uche | Portfolio",
    template: "%s | Charles Uche Chijuka",
  },
  description: "Developer & founder building BoldMind—crafting AI-first products across Awareness → Education → Enablement.",
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Charles Uche Chijuka | Portfolio",
    description: "Developer & founder building BoldMind—AI-first products for Africa and beyond.",
    url: "https://example.com",
    siteName: "Charles Uche Chijuka",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@charlesuche",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1 container py-10">{children}</main>
        <Footer />
        <script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Charles Uche Chijuka",
            "url": "https://boldmind.ng",
            "jobTitle": "Founder & Developer",
            "worksFor": { "@type": "Organization", "name": "BoldMind" }
          }) }}
        />
      </body>
    </html>
  )
}
