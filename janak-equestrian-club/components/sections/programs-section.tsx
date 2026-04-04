import { programs } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="gold-chip">Training Programs</div>
            <h2 className="section-title mt-6">Training journeys built for progression and prestige.</h2>
          </div>
          <p className="section-copy">
            Each program blends riding technique, horse connection, and curated club experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <article key={program.title} className="panel group relative overflow-hidden p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-70" />
              <div
                className="absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl transition duration-500 group-hover:opacity-100"
                style={{
                  background:
                    index === 0
                      ? 'rgba(255,179,138,0.18)'
                      : index === 1
                        ? 'rgba(108,69,197,0.2)'
                        : 'rgba(230,191,107,0.2)'
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/50">
                    {program.level}
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/45 transition group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{program.description}</p>
                <ul className="mt-8 space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="text-sm text-white/70">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
