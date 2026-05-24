"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Heart, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Clarity first",
    description: "Money decisions stay messy when data stays scattered. We make the picture sharp."
  },
  {
    icon: Heart,
    title: "Trust by default",
    description: "Your financial data deserves more than a checkbox. Security and privacy are built into every layer."
  },
  {
    icon: Compass,
    title: "Build for the long run",
    description: "We optimize for decades, not quarters. The features we ship now will still matter in ten years."
  }
];

export default function AboutStory({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white py-20 lg:py-32", className)}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

          <div className="lg:sticky lg:top-[120px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F38]/10 bg-[#198F38]/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#198F38]" />
              <span className="text-[#198F38] font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[#042718] font-onest font-semibold leading-tight tracking-[-1.2px] lg:tracking-[-1.8px] text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[52px]"
            >
              Money tools{" "}
              <span className="font-playfair italic font-semibold text-black/40">
                built
              </span>{" "}
              for real life
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-5 text-[#042718] font-inter text-base lg:text-[18px] font-normal leading-relaxed opacity-80 max-w-[480px]"
            >
              Finley started in 2022 around a kitchen table. Three engineers were tired of spreadsheets that lied and banking apps that hid the truth. We built the tool we wished existed — then thousands of people asked for the same thing.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8 lg:gap-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" as const }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#198F38]/10 border border-[#198F38]/20 flex items-center justify-center shrink-0">
                  <v.icon className="w-6 h-6 text-[#198F38]" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#042718] font-onest text-xl lg:text-2xl font-semibold tracking-[-0.6px]">
                    {v.title}
                  </h3>
                  <p className="text-[#042718] font-inter text-base lg:text-[17px] font-normal leading-relaxed opacity-80">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
