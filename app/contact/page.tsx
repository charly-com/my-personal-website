// app/contact/page.tsx
export const metadata = { title: "Contact" };

import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <ContactForm />
      <p className="mt-6 text-sm text-slate-500">
        Prefer email?{" "}
        <a href="mailto:info@example.com" className="underline">
          info@.boldmind.ng
        </a>
      </p>
    </section>
  );
}
