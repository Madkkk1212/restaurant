'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading, Button } from '@/components/ui-elements';

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] group"
          >
            <div className="absolute -inset-4 border border-accent/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <Image
              src="/images/chef.png"
              alt="Our Story"
              fill
              className="object-cover relative z-10"
            />
          </motion.div>

          {/* Text Side */}
          <div className="lg:pl-12">
            <SectionHeading
              title="Our Story"
              subtitle="The Journey"
              centered={false}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Luma Restaurant is a modern dining destination that blends traditional 
                Indonesian flavors with contemporary culinary techniques. Our journey 
                began with a simple vision: to elevate authentic recipes into a world-class 
                dining experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our chefs craft each dish using premium, locally-sourced ingredients 
                combined with the finest imported spices. Every plate is a testimony 
                to our passion for modern culinary art and cultural heritage.
              </p>
              <div className="pt-8">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
