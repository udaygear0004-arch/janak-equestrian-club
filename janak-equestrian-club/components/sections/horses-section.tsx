'use client';

import { horses } from '@/lib/data';
import { useState } from 'react';

export function HorsesSection() {
  const [active, setActive] = useState(0);
  const horse = horses[active];

  return (
    <section id="horses" className="py-24">
      <div className="container-shell">
        <div className="mb-12">
          <div className="gold-chip">Horse Gallery</div>
          <h2 className="section-title mt-6">Featured horses presented like collectible icons.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="scene-frame relative flex min-h-[520px] items-center justify-center overflow-hidden p-8">
            <div className={`absolute inset-0 bg-gradient-to-br ${horse.accent} opacity-20`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-soft">
              <div className={`absolute h-60 w-60 rounded-full bg-gradient-to-br ${horse.accent} blur-3xl opacity-30`} />
              <div className="relative">
                <div className="h-32 w-44 rounded-[3rem] bg-[#4c31a2]" />
                <div className="absolute left-28 top-[-16px] h-20 w-16 rotate-[20deg] rounded-[2rem] bg-[#ffb38a]" />
                <div className="absolute -bottom-16 left-6 h-24 w-3 rounded-full bg-white/80" />
                <div className="absolute -bottom-16 left-16 h-24 w-3 rounded-full bg-white/80" />
                <div className="absolute -bottom-16 right-16 h-24 w-3 rounded-full bg-white/80" />
                <div className="absolute -bottom-16 right-6 h-24 w-3 rounded-full bg-white/80" />
                <div className="absolute left-[-14px] top-10 h-20 w-3 -rotate-[40deg] rounded-full bg-[#ffb38a]" />
              </div>
            </div>
          </div>

          <div className="panel p-8">
            <div className="flex flex-wrap gap-3">
              {horses.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActive(index)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    index === active
                      ? 'border-gold/35 bg-gold/10 text-white'
                      : 'border-white/10 bg-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-3xl font-semibold text-white">{horse.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gold">{horse.breed}</p>

              <dl className="mt-8 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <dt className="text-sm text-white/50">Age</dt>
                  <dd className="text-sm text-white">{horse.age}</dd>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <dt className="text-sm text-white/50">Temperament</dt>
                  <dd className="mt-2 text-sm leading-7 text-white/75">{horse.temperament}</dd>
                </div>
              </dl>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-white/70">
                Designed as an interactive “card reveal” moment inspired by premium collectible UI.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
