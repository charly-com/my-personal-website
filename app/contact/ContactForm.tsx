// app/contact/ContactForm.tsx
"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form).entries());
        // TODO: POST `data` to your API/Formspree
        console.log("Contact form data", data);
        setStatus("sent");
        form.reset();
      }}
      className="space-y-3"
    >
      <input
        required
        name="name"
        placeholder="Your name"
        className="w-full rounded-xl border px-3 py-2 dark:border-slate-700"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="w-full rounded-xl border px-3 py-2 dark:border-slate-700"
      />
      <textarea
        required
        name="message"
        placeholder="Message"
        className="w-full rounded-xl border px-3 py-2 h-32 dark:border-slate-700"
      />
      <button className="btn-primary" type="submit">
        Send
      </button>
      {status === "sent" && (
        <p className="text-green-600 dark:text-green-400">
          Thanks! I’ll get back to you.
        </p>
      )}
    </form>
  );
}
