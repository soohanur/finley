"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CTA01Finsyc({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const guarantees = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime"
  ];

  return (
    <section className={cn("w-full bg-white py-20 lg:py-32", className)}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="relative w-full overflow-hidden rounded-[32px] lg:rounded-[40px] bg-[#042718] min-h-[480px] lg:min-h-[560px] flex items-center justify-center px-6 py-16 lg:px-16 lg:py-24"
        >
          {/* Video BG */}
          <div className="absolute inset-0 z-0 opacity-30">
            {isMounted && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://cdn.jiro.build/Amox/All%20Images/P01-Header-01-BG.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>

          {/* Radial glow */}
          <div className="absolute inset-0 z-[1] bg-gradient-radial from-[#198F38]/20 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-[760px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#198F38] fill-[#198F38]" />
              <span className="text-white font-inter text-sm md:text-base font-medium tracking-[-0.3px]">
                Start in under 2 minutes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white font-onest text-[36px] sm:text-[48px] lg:text-[60px] font-semibold leading-tight lg:leading-[68px] tracking-[-1.5px] lg:tracking-[-2.4px]"
            >
              Take control of your{" "}
              <span className="font-playfair italic font-semibold text-white/50">
                money
              </span>{" "}
              today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-white/80 font-inter text-base sm:text-lg lg:text-[20px] font-normal leading-relaxed max-w-[560px]"
            >
              Join 18,000+ users who let Finsyc handle the boring parts of money management — so they can focus on growth.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              layout
              className={cn(
                "flex items-center gap-3 py-2 rounded-full bg-white mt-10 group cursor-pointer relative h-14 transition-all duration-300",
                isHovered ? "flex-row-reverse pl-2 pr-5" : "flex-row pl-5 pr-2"
              )}
            >
              <motion.span
                layout
                className="font-inter text-base lg:text-[18px] font-medium leading-[28px] text-[#042718]"
              >
                Get 14-days free trial
              </motion.span>

              <motion.div
                layout
                className="w-10 h-10 rounded-full bg-[#042718] flex items-center justify-center relative overflow-hidden shrink-0"
              >
                <motion.div
                  animate={{
                    x: isHovered ? [-24, 0] : 0,
                    opacity: isHovered ? [0, 1] : 1
                  }}
                  transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
            >
              {guarantees.map((g: string) => (
                <div key={g} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#198F38]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#198F38] stroke-[3px]" />
                  </div>
                  <span className="text-white/80 font-inter text-sm font-medium">
                    {g}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
