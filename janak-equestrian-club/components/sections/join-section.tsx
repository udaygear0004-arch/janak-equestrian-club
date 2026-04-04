'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';

export function JoinSection() {
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    setStatus('');

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      experience: String(formData.get('experience') || ''),
      program: String(formData.get('program') || ''),
      message: String(formData.get('message') || '')
    };

    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setStatus(data.message || 'Request sent.');
    } catch {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="join" className="py-24">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="panel p-8 md:p-10">
            <div className="gold-chip">Membership</div>
            <h2 className="section-title mt-6">Book a private visit or enquire about membership.</h2>
            <p className="section-copy mt-6">
              Designed for conversion with a clean, premium form flow and immediate acknowledgement.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/65">
              <p>• Guided property walkthrough</p>
              <p>• Program consultation with coaches</p>
              <p>• Horse compatibility discussion</p>
              <p>• Event and membership overview</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="panel space-y-5 p-8 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-white/60">Full name</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/40"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-white/60">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/40"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-white/60">Experience level</span>
                <select
                  name="experience"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/40"
                  defaultValue="Beginner"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm text-white/60">Interested program</span>
                <select
                  name="program"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/40"
                  defaultValue="Foundation Riding"
                >
                  <option>Foundation Riding</option>
                  <option>Performance Track</option>
                  <option>Elite Show Prep</option>
                </select>
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-sm text-white/60">Message</span>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-[1.6rem] border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-gold/40"
                placeholder="Tell us what kind of experience you are looking for."
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Submit enquiry'}
              </Button>
              {status ? <p className="text-sm text-white/65">{status}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
