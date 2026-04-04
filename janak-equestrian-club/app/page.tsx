import { AboutSection } from '@/components/sections/about-section';
import { ContactStrip } from '@/components/sections/contact-strip';
import { EventsSection } from '@/components/sections/events-section';
import { FacilitiesSection } from '@/components/sections/facilities-section';
import { HeroSection } from '@/components/sections/hero-section';
import { HorsesSection } from '@/components/sections/horses-section';
import { JoinSection } from '@/components/sections/join-section';
import { ProgramsSection } from '@/components/sections/programs-section';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <HorsesSection />
      <FacilitiesSection />
      <EventsSection />
      <JoinSection />
      <ContactStrip />
      <Footer />
    </main>
  );
}
