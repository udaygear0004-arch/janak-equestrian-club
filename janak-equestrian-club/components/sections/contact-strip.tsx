import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactStrip() {
  return (
    <section className="pb-24">
      <div className="container-shell">
        <div className="panel grid gap-4 p-6 md:grid-cols-3 md:p-8">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 text-gold" />
            <div>
              <p className="text-sm font-medium text-white">Visit us</p>
              <p className="mt-2 text-sm leading-7 text-white/60">Janak Equestrian Estate, Riverside Track, Jaipur</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-5 w-5 text-gold" />
            <div>
              <p className="text-sm font-medium text-white">Call</p>
              <p className="mt-2 text-sm leading-7 text-white/60">+91 90000 00000</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 text-gold" />
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <p className="mt-2 text-sm leading-7 text-white/60">hello@janakequestrian.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
