'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui-elements';

const menuItems = [
  {
    name: 'Wagyu Steak',
    description: 'A5 Wagyu beef, truffle butter, asparagus.',
    price: '$38',
    image: '/images/wagyu.png',
  },
  {
    name: 'Grilled Lobster',
    description: 'Garlic butter, lemon zest, herbs.',
    price: '$42',
    image: '/images/lobster.png',
  },
  {
    name: 'Salmon Sushi',
    description: 'Fresh salmon, wasabi, ginger, premium rice.',
    price: '$18',
    image: '/images/sushi.png',
  },
  {
    name: 'Rendang Signature',
    description: 'Traditional slow-cooked beef in coconut milk.',
    price: '$15',
    image: '/images/rendang.png',
  },
  {
    name: 'Truffle Pasta',
    description: 'Handmade pasta, fresh truffle, creamy sauce.',
    price: '$24',
    image: '/images/pasta.png',
  },
  {
    name: 'Premium Steak Bowl',
    description: 'Sliced ribeye, organic greens, special sauce.',
    price: '$22',
    image: '/images/steakbowl.png',
  },
];

export function FeaturedMenu() {
  return (
    <section id="menu" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Menu"
          subtitle="Culinary Excellence"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background border border-accent/10 overflow-hidden hover:border-accent/40 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-accent font-sans font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center text-[10px] uppercase tracking-widest text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Order Now ———
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
