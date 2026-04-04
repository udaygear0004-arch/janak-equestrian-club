import { facilities } from '@/lib/data';

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24">
      <div className="container-shell">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="gold-chip">Facilities</div>
            <h2 className="section-title mt-6">An architectural experience that feels staged for film.</h2>
          </div>
          <p className="section-copy">
            Wide arenas, cinematic lighting, elegant lounges, and meticulously designed stable environments.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {facilities.map((item, index) => (
            <article key={item.title} className="scene-frame min-h-[320px] p-7">
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
                <div
                  className="h-40 rounded-[1.5rem]"
                  style={{
                    background:
                      index === 0
                        ? 'linear-gradient(135deg, rgba(255,179,138,0.45), rgba(108,69,197,0.25))'
                        : index === 1
                          ? 'linear-gradient(135deg, rgba(108,69,197,0.45), rgba(255,179,138,0.15))'
                          : 'linear-gradient(135deg, rgba(230,191,107,0.35), rgba(108,69,197,0.25))'
                  }}
                />
                <div className="mt-6 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                    {item.metric}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
