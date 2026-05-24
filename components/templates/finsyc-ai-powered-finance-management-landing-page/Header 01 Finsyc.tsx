"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function FinleyHeader({ className }: { className?: string }) {
  const [isCTAHovered, setIsCTAHovered] = useState(false);
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

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        className={"relative w-full overflow-hidden min-h-[100svh] flex flex-col " + (className || "")}
      >
        {/* Background Video */}
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

        {/* Hero content fills remaining viewport */}
        <div className="relative z-10 flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-1 flex flex-col items-center justify-center py-6 sm:py-8">
            {/* Rating Box */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" as const }}
              className="flex items-center gap-2 px-3 sm:px-[14px] py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/40 mb-4 sm:mb-5 lg:mb-6 whitespace-nowrap max-w-[calc(100vw-2rem)]"
            >
              <div className="flex items-center gap-1 shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#042718] text-[#042718]" />
                <span className="font-inter text-[13px] sm:text-sm lg:text-base xl:text-[18px] font-medium leading-[22px] sm:leading-[28px] text-[#042718]">
                  4.9 rating
                </span>
              </div>
              <span className="font-inter text-[13px] sm:text-sm lg:text-base xl:text-[18px] font-normal leading-[22px] sm:leading-[28px] text-black opacity-60 shrink-0">
                from 18.3k+ users
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" as const }}
              className="max-w-[750px] w-full text-center font-onest font-semibold leading-[1.1] sm:leading-[1.05] text-[#042718] text-[34px] xs:text-[38px] sm:text-[44px] md:text-[50px] lg:text-[48px] xl:text-[60px] 2xl:text-[68px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] xl:tracking-[-2.5px] 2xl:tracking-[-3px] px-2 sm:px-0"
            >
              Control Your Money with{" "}
              <span className="font-playfair italic font-semibold text-black opacity-50 tracking-normal">
                AI-Powered
              </span>{" "}
              Insights
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" as const }}
              className="max-w-[630px] w-full text-center mt-4 sm:mt-5 lg:mt-5 font-inter font-normal tracking-[-0.3px] text-[#042718] text-[15px] xs:text-base sm:text-[17px] lg:text-[17px] xl:text-[20px] leading-[1.5] lg:leading-[1.55] px-3 sm:px-0"
            >
              Automatically track your spending, predict upcoming expenses, and make smarter financial decisions without lifting a finger.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.7, ease: "easeOut" as const }}
              onMouseEnter={() => setIsCTAHovered(true)}
              onMouseLeave={() => setIsCTAHovered(false)}
              layout
              className={
                "flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 rounded-full bg-[#042718] mt-5 sm:mt-7 lg:mt-8 xl:mt-10 group cursor-pointer relative h-11 sm:h-12 lg:h-14 border border-white/20 transition-all duration-300 " +
                (isCTAHovered ? "flex-row-reverse pl-2 pr-5" : "flex-row pl-5 pr-2")
              }
            >
              <motion.span
                layout
                className="font-inter text-[15px] sm:text-base lg:text-[17px] xl:text-[18px] font-medium leading-[24px] sm:leading-[28px] text-white"
              >
                Get 14-days free trial
              </motion.span>
              <motion.div
                layout
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0"
              >
                <motion.div
                  animate={{
                    x: isCTAHovered ? [-24, 0] : 0,
                    opacity: isCTAHovered ? [0, 1] : 1
                  }}
                  transition={{ duration: 0.3, delay: isCTAHovered ? 0.1 : 0 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-[#042718]" />
                </motion.div>
              </motion.div>
            </motion.button>
          </div>

          {/* Bottom Branding Section - compact, lives in flex layout */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" as const }}
            className="flex flex-col items-center gap-2.5 sm:gap-4 lg:gap-5 w-full pb-4 sm:pb-6 lg:pb-8 flex-shrink-0"
          >
            <div className="px-3 sm:px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 max-w-[calc(100vw-2rem)]">
              <p className="font-inter text-[10px] sm:text-xs lg:text-sm xl:text-base font-medium leading-5 sm:leading-6 tracking-[-0.3px] text-white text-center">
                <span className="sm:hidden">Trusted by fintech leaders</span>
                <span className="hidden sm:inline">Collaborating with leading fintech innovators worldwide</span>
              </p>
            </div>
            <div
              className="w-full overflow-hidden"
              style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" } as React.CSSProperties}
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  ease: "linear" as const,
                  repeat: Infinity as number
                }}
                className="flex items-center gap-10 sm:gap-14 lg:gap-20 w-fit"
              >
                {[...Array(2)].map((_: unknown, i: number) => (
                  <React.Fragment key={i}>
                    <img src="https://cdn.jiro.build/Amox/All%20SVG/Horizon.svg" alt="Horizon" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto opacity-95 brightness-0 invert" />
                    <img src="https://cdn.jiro.build/Amox/All%20SVG/Naxus.svg" alt="Naxus" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto opacity-95 brightness-0 invert" />
                    <img src="https://cdn.jiro.build/Amox/All%20SVG/Lumassa.svg" alt="Lumassa" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto opacity-95 brightness-0 invert" />
                    <img src="https://cdn.jiro.build/Amox/All%20SVG/Cyborg.svg" alt="Cyborg" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto opacity-95 brightness-0 invert" />
                    <img src="https://cdn.jiro.build/Amox/All%20SVG/Catalyst.svg" alt="Catalyst" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto opacity-95 brightness-0 invert" />
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
