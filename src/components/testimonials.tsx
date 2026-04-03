'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui-elements';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Wilson',
    role: 'Food Critic',
    content: "One of the best dining experiences I've ever had. The attention to detail in every dish is remarkable.",
    stars: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Lifestyle Blogger',
    content: "The fusion of Indonesian flavors with modern techniques is genius. Highly recommend the Wagyu Steak!",
    stars: 5,
  },
  {
    name: 'David Chen',
    role: 'Regular Guest',
    content: "Exceptional service and atmosphere. Luma Restaurant is my go-to place for special occasions.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Testimonials"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-accent/10 relative group"
            >
              <div className="flex mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-serif font-bold text-lg">{t.name}</h4>
                <p className="text-xs uppercase tracking-widest text-accent font-bold">
                  {t.role}
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl font-serif">"</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
