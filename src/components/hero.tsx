'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui-elements';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.png"
          alt="Premium Food Photography"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ opacity }}
        >
          <span className="text-accent uppercase tracking-[0.5em] text-sm font-bold mb-4 block">
            Welcome to
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 tracking-tighter">
            Luma Restaurant
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-sans mb-12 italic max-w-2xl mx-auto leading-relaxed">
            “Experience Authentic Flavor with Modern Culinary Art”
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg">
              View Menu
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Reserve Table
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent/0 via-accent to-accent/0 animate-pulse" />
      </motion.div>
    </section>
  );
}
