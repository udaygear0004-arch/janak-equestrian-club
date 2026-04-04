import { RingScene } from '@/components/3d/ring-scene';

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-8 md:p-10">
          <div className="gold-chip">About the Club</div>
          <h2 className="section-title mt-6">A luxury riding club shaped like a cinematic world.</h2>
          <p className="section-copy mt-6">
            The experience takes inspiration from dusk-lit landscapes, layered depth, floating panels,
            and immersive transitions. Every section should feel premium, elegant, and alive — not like
            a static brochure.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-white">Brand mood</p>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Regal, artistic, calm, performance-driven, and emotionally memorable.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-white">Visual direction</p>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Purple dusk palettes, warm gold highlights, glass surfaces, spatial depth, soft glows.
              </p>
            </div>
          </div>
        </div>

        <div className="scene-frame h-[420px] md:h-[520px]">
          <RingScene />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,195,115,0.08),transparent_35%)]" />
        </div>
      </div>
    </section>
  );
}
