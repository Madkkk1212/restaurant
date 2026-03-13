'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui-elements';

const galleryImages = [
  '/images/hero.png',
  '/images/wagyu.png',
  '/images/lobster.png',
  '/images/sushi.png',
  '/images/rendang.png',
  '/images/pasta.png',
  '/images/steakbowl.png',
  '/images/chef.png',
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Gallery"
          subtitle="Visual Journey"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-px bg-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
