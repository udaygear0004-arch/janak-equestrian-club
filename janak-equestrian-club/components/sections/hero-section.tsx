'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroScene } from '@/components/3d/hero-scene';
import { stats } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="container-shell relative z-10 grid items-center gap-10 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <div className="max-w-2xl">
          <div className="gold-chip">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Cinematic 3D Riding Experience
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl"
          >
            Ride the dusk. <span className="text-gold">Own the arena.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-8 text-white/70 md:text-lg"
          >
            Janak Equestrian Club is a premium destination for riders, competitors, and lifestyle members
            seeking world-class training, curated facilities, and unforgettable equestrian moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#join"><Button>Book a Private Tour</Button></a>
            <a href="#about"><Button variant="ghost">Explore the Club</Button></a>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="panel px-5 py-4">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-white/55">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="scene-frame noise relative h-[480px] md:h-[620px]">
          <HeroScene />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0814] to-transparent" />
        </div>
      </div>

      <div className="container-shell relative z-10 pb-8">
        <a href="#about" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white">
          Scroll to discover
          <ArrowDownRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
