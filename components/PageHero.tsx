"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  className?: string;
}

export default function PageHero({ badge, title, subtitle, className }: PageHeroProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section
        className={"relative w-full overflow-hidden min-h-screen flex flex-col " + (className || "")}
      >
        <div className="absolute inset-0 z-0">
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-7 flex-shrink-0">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" as const }}
            className="flex items-center gap-2 px-3 sm:px-[14px] py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/40 mb-5 lg:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#042718] text-[#042718]" />
            <span className="font-inter text-xs sm:text-sm lg:text-base font-medium leading-[28px] text-[#042718] tracking-[-0.3px]">
              {badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" as const }}
            className="max-w-[820px] w-full text-center font-onest font-semibold leading-[1.05] tracking-tight text-[#042718] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px] xl:text-[60px] 2xl:text-[68px] lg:tracking-[-2px] xl:tracking-[-2.5px] 2xl:tracking-[-3px]"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" as const }}
            className="max-w-[640px] w-full text-center mt-4 lg:mt-5 font-inter font-normal tracking-[-0.3px] text-[#042718] text-sm sm:text-base lg:text-[17px] xl:text-[20px] leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>
    </>
  );
}
