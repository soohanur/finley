"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Lightbulb, Zap, User, TrendingUp, MousePointer2, ShieldCheck, Globe, PieChart, Bell, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

function BenefitItem({ title, description, icon: Icon, delay = 0 }: BenefitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className="flex gap-6"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-[#f9fafb] border border-[#F8F8FC] rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#138E5F]" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#042718] font-onest text-[18px] sm:text-[20px] md:text-[24px] font-semibold leading-[24px] sm:leading-[26px] md:leading-[30px] tracking-[-0.5px] md:tracking-[-0.8px]">
          {title}
        </h3>
        <p className="text-[#042718] font-sans text-sm sm:text-base md:text-[18px] font-normal leading-[22px] sm:leading-[24px] md:leading-[28px] opacity-80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs01Finsyc({ className }: { className?: string }) {
  const tags = [
    "Automated Finance",
    "Smart Security",
    "AI Insights",
    "Real-time Tracking",
    "Unified Dashboard",
  ];

  const benefits: Array<{ title: string; description: string; icon: LucideIcon }> = [
    {
      title: "Smart financial insights",
      description: "Get real-time visibility into your spending, income, and financial trends to make better faster.",
      icon: Lightbulb
    },
    {
      title: "Fast and seamless tracking",
      description: "Automatically track all transactions across accounts without manual input or delays.",
      icon: Zap
    },
    {
      title: "Personalized for you",
      description: "Customize budgets, goals, and insights based on your unique financial behavior",
      icon: User
    },
    {
      title: "Maximum financial efficiency",
      description: "Reduce unnecessary expenses and optimize your cash flow with intelligent recommendations.",
      icon: TrendingUp
    },
    {
      title: "Simple and user friendly",
      description: "Enjoy a clean, intuitive interface designed to make managing money easy for everyone.",
      icon: MousePointer2
    },
    {
      title: "Advanced data security",
      description: "Your financial data is protected with military-grade encryption and secure protocols.",
      icon: ShieldCheck
    },
    {
      title: "Global connectivity",
      description: "Sync your accounts from thousands of financial institutions around the world instantly.",
      icon: Globe
    },
    {
      title: "Customized analytics",
      description: "Create deep-dive reports and visualizations that matter most to your financial goals.",
      icon: PieChart
    },
    {
      title: "Instant smart alerts",
      description: "Stay ahead with real-time notifications about unusual spending or budget limits.",
      icon: Bell
    },
    {
      title: "Collaborative finance",
      description: "Share budgets and track goals with family members or business partners seamlessly.",
      icon: Users
    },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={cn("w-full bg-white py-14 sm:py-20 md:py-24 lg:py-[120px] flex justify-center", className)}>
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-[48px] justify-between">

              {/* Left Column - Sticky */}
              <div className="w-full lg:max-w-[622px] flex flex-col items-start lg:sticky lg:top-[120px] self-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#F2FBF6] border border-[#138E5F]/15 rounded-full flex items-center gap-2 mb-8"
                >
                  <Sparkles className="w-4 h-4 text-[#138E5F] fill-[#138E5F]" />
                  <span className="text-[#138E5F] font-sans text-sm md:text-base font-medium leading-6 tracking-[-0.3px]">
                    Why Choose Us
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-[#042718] font-onest text-[26px] xs:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] md:leading-[58px] tracking-[-0.8px] sm:tracking-[-1.2px] md:tracking-[-1.8px] mb-4 sm:mb-6"
                >
                  Built for{" "}
                  <span className="font-playfair italic font-semibold text-black/40">
                    smart
                  </span>{" "}
                  money managers
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="text-[#042718] font-sans text-sm sm:text-base md:text-[18px] font-normal leading-[1.55] md:leading-[28px] opacity-80 mb-8 sm:mb-10 max-w-[520px]"
                >
                  Finley is engineered for clarity, speed, and trust. Every feature is designed to save your time, protect your data, and grow your wealth.
                </motion.p>

                <div className="flex flex-wrap gap-3">
                  {tags.map((tag: string, i: number) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="px-4 py-2 rounded-full bg-[#F6FDFF] border border-[#042718]/10 text-[#042718] font-sans text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right Column - Scrolling List */}
              <div className="w-full lg:max-w-[578px] flex flex-col gap-8 md:gap-12">
                {benefits.map((b, i) => (
                  <BenefitItem
                    key={b.title}
                    title={b.title}
                    description={b.description}
                    icon={b.icon}
                    delay={i * 0.05}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
