"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  brandLogo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CFO, Horizon Capital",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
    quote: "Finley transformed how we manage corporate finances. The AI insights caught budget leaks we had missed for years.",
    brandLogo: "https://cdn.jiro.build/Amox/All%20SVG/Horizon.svg"
  },
  {
    name: "Marcus Chen",
    role: "Founder, Naxus Labs",
    avatar: "https://i.pravatar.cc/120?img=12",
    rating: 5,
    quote: "I run three companies. Finley keeps every account synced in real time and predicts cash flow with frightening accuracy.",
    brandLogo: "https://cdn.jiro.build/Amox/All%20SVG/Naxus.svg"
  },
  {
    name: "Priya Sharma",
    role: "Head of Ops, Lumassa",
    avatar: "https://i.pravatar.cc/120?img=32",
    rating: 5,
    quote: "Onboarding took ten minutes. Our finance team saves twenty hours a week on reconciliation alone.",
    brandLogo: "https://cdn.jiro.build/Amox/All%20SVG/Lumassa.svg"
  },
  {
    name: "Diego Alvarez",
    role: "CEO, Catalyst Group",
    avatar: "https://i.pravatar.cc/120?img=68",
    rating: 5,
    quote: "Bank-grade security plus a UI that actually feels good. Rare combination | Finley nailed it.",
    brandLogo: "https://cdn.jiro.build/Amox/All%20SVG/Catalyst.svg"
  },
  {
    name: "Aiko Tanaka",
    role: "Treasurer, Cyborg Inc",
    avatar: "https://i.pravatar.cc/120?img=45",
    rating: 5,
    quote: "Predictive alerts saved us from two cash crunches in the last quarter. This is the tool I wish we had five years ago.",
    brandLogo: "https://cdn.jiro.build/Amox/All%20SVG/Cyborg.svg"
  },
  {
    name: "James O'Connor",
    role: "Founder, Bright Ventures",
    avatar: "https://i.pravatar.cc/120?img=53",
    rating: 5,
    quote: "The dashboard tells me in seconds what used to take my accountant a full afternoon. Worth every penny.",
    brandLogo: "https://cdn.jiro.build/Amox/All%20SVG/Horizon.svg"
  }
];

function TestimonialCard({ t, delay }: { t: Testimonial; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className="flex flex-col p-5 sm:p-6 md:p-8 bg-white rounded-[20px] sm:rounded-[24px] border border-[#042718]/[0.06] shadow-[0_1px_20px_0_rgba(4,39,24,0.04)] hover:shadow-[0_4px_30px_0_rgba(4,39,24,0.08)] transition-shadow duration-300 h-full"
    >
      <Quote className="w-8 h-8 text-[#198F38] mb-4 fill-[#198F38]/10" />

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#198F38] text-[#198F38]" />
        ))}
      </div>

      <p className="text-[#042718] font-inter text-sm sm:text-base md:text-[17px] font-normal leading-[1.55] flex-1 mb-5 sm:mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-[#042718]/[0.06]">
        <div className="flex items-center gap-3">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-11 h-11 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[#042718] font-onest text-base font-semibold">
              {t.name}
            </span>
            <span className="text-[#042718]/60 font-inter text-sm">
              {t.role}
            </span>
          </div>
        </div>
        <img
          src={t.brandLogo}
          alt=""
          className="h-5 w-auto opacity-50"
        />
      </div>
    </motion.div>
  );
}

export default function Testimonials01Finsyc({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-[#F6FDFF] py-14 sm:py-20 lg:py-32", className)}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F38]/10 bg-[#198F38]/5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#198F38]" />
            <span className="text-[#198F38] font-inter text-base font-normal leading-6 tracking-[-0.3px]">
              Customer Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#042718] font-onest text-[26px] xs:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] lg:leading-[58px] tracking-[-0.8px] sm:tracking-[-1.2px] lg:tracking-[-1.8px] max-w-[720px] px-2 sm:px-0"
          >
            Trusted by{" "}
            <span className="font-playfair italic font-semibold text-black/40">
              18,000+
            </span>{" "}
            finance teams worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-3 sm:mt-4 text-[#042718] font-inter text-sm sm:text-base md:text-lg font-normal leading-[1.5] sm:leading-relaxed opacity-80 max-w-[560px] px-2 sm:px-0"
          >
            From scrappy startups to enterprise CFOs, hear why Finley is the financial backbone of modern teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
