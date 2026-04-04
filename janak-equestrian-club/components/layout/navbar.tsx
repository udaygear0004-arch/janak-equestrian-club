import { navigation } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-5">
        <div className="panel flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white">Janak</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Equestrian Club</p>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#join">
            <Button className="hidden md:inline-flex">Book a Visit</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
