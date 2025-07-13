'use client';
import { useState } from 'react';
import Button from './ui/Button';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(form))
    });
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 px-4 bg-neutral-50">
      <div className="mx-auto max-w-xl">
        <h2 className="text-4xl font-bold text-center">Let’s Talk Growth</h2>

        {sent ? (
          <p className="mt-8 text-center text-lg text-teal">
            Thanks! We’ll be in touch within 24 h.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input name="name"  placeholder="Name"  required className="w-full rounded-md border border-neutral-300 p-3" />
            <input name="email" type="email" placeholder="Email" required className="w-full rounded-md border border-neutral-300 p-3" />
            <textarea name="message" placeholder="Project details" rows={4} required className="w-full rounded-md border border-neutral-300 p-3" />
            <Button className="w-full">Send Message</Button>
          </form>
        )}
      </div>
    </section>
  );
}
