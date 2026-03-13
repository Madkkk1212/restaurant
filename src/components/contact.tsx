'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui-elements';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Culinary Avenue, Jakarta, Indonesia',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+62 21 555 0123',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@afifrestaurant.com',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    details: 'Mon - Sun: 11:00 AM - 11:00 PM',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Contact Us"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start space-y-4 p-6 border border-accent/10 hover:border-accent/40 transition-colors"
              >
                <div className="p-3 bg-accent/10 text-accent rounded-full">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Side (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] border border-accent/20 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
          >
            <div className="absolute inset-0 bg-accent/5 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-accent mx-auto animate-bounce" />
                <p className="text-accent uppercase tracking-widest text-xs font-bold">
                  Interactive Map Placeholder
                </p>
              </div>
            </div>
            {/* 
              In a real app, you'd embed Google Maps iframe here:
              <iframe ... />
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
