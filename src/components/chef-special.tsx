'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading, Button } from '@/components/ui-elements';

export function ChefSpecial() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <SectionHeading
              title="Signature Wagyu Steak"
              subtitle="Chef's Special"
              centered={false}
            />
            <p className="text-xl text-accent font-serif mb-6">
              A symphony of flavors, aged to perfection.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Experience our most celebrated dish. We use A5 Grade Miyazaki Wagyu, 
              known for its incredible marbling and melt-in-your-mouth texture. 
              The steak is lightly seared with aromatic herbs and served with 
              a delicate truffle-infused reduction.
            </p>
            <div className="flex items-center space-x-12 mb-10">
              <div>
                <span className="block text-2xl font-serif text-accent">$38</span>
                <span className="text-[10px] uppercase tracking-widest opacity-60">Price</span>
              </div>
              <div className="w-px h-10 bg-accent/20" />
              <div>
                <span className="block text-2xl font-serif">45 Min</span>
                <span className="text-[10px] uppercase tracking-widest opacity-60">Prep Time</span>
              </div>
            </div>
            <Button size="lg">
              Reserve This Dish
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[500px] lg:h-[700px]"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-[100px] -z-10" />
            <Image
              src="/images/wagyu.png"
              alt="Chef's Special Wagyu"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
