import { events } from '@/lib/data';

export function EventsSection() {
  return (
    <section id="events" className="py-24">
      <div className="container-shell">
        <div className="mb-12">
          <div className="gold-chip">Events</div>
          <h2 className="section-title mt-6">Signature competitions and member-only moments.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/10 md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="panel relative p-7">
                <div className="absolute left-6 top-8 hidden h-4 w-4 rounded-full border border-gold/40 bg-gold/20 md:block" />
                <div className="md:pt-10">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">{event.type}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-3 text-sm text-white/50">{event.date}</p>
                  <p className="mt-5 text-sm leading-7 text-white/65">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
