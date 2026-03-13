'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Button } from '@/components/ui-elements';

export function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Book a Table"
              subtitle="Reservation"
              centered={false}
            />
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Join us for an unforgettable culinary experience. Whether it's a 
              romantic dinner, a family celebration, or a business meeting, 
              we ensure every moment is special.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">Select Your Date</h4>
                  <p className="text-sm text-muted-foreground">Pick a time that suits you best.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">Expert Culinary Team</h4>
                  <p className="text-sm text-muted-foreground">Our team will prepare a perfect meal for you.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-12 border border-accent/20 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Date</label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Time</label>
                  <select className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-background">18:00</option>
                    <option className="bg-background">19:00</option>
                    <option className="bg-background">20:00</option>
                    <option className="bg-background">21:00</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Guests</label>
                  <select className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-background">2 People</option>
                    <option className="bg-background">4 People</option>
                    <option className="bg-background">6+ People</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Special Request</label>
                <textarea
                  placeholder="Any dietary requirements or special occasions?"
                  rows={3}
                  className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <Button className="w-full mt-4" size="lg">
                Reserve Table
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
