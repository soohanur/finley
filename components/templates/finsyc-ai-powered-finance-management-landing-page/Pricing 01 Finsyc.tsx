"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For individuals testing the waters",
    monthly: 0,
    yearly: 0,
    features: [
      "Up to 2 connected accounts",
      "Basic expense tracking",
      "Monthly reports",
      "Email support",
    ],
    cta: "Get Started Free"
  },
  {
    name: "Pro",
    tagline: "For power users and small teams",
    monthly: 19,
    yearly: 15,
    features: [
      "Unlimited connected accounts",
      "AI predictive analytics",
      "Custom budgets and goals",
      "Real-time smart alerts",
      "Priority support",
      "Data export and API access",
    ],
    highlighted: true,
    cta: "Start 14-day Trial"
  },
  {
    name: "Business",
    tagline: "For growing companies and CFOs",
    monthly: 49,
    yearly: 39,
    features: [
      "Everything in Pro",
      "Multi-user collaboration",
      "Advanced security controls",
      "Custom analytics dashboards",
      "Dedicated account manager",
      "SLA and audit logs",
    ],
    cta: "Talk to Sales"
  }
];

function PlanCard({ plan, isYearly, delay }: { plan: Plan; isYearly: boolean; delay: number }) {
  const price = isYearly ? plan.yearly : plan.monthly;
  const highlighted = plan.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className={cn(
        "flex flex-col p-6 md:p-8 rounded-[24px] h-full transition-all",
        highlighted
          ? "bg-[#042718] text-white border border-[#198F38]/40 shadow-[0_8px_40px_0_rgba(4,39,24,0.18)]"
          : "bg-white border border-[#042718]/[0.06] shadow-[0_1px_20px_0_rgba(4,39,24,0.04)]"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className={cn(
          "font-onest text-[20px] sm:text-[22px] md:text-[26px] font-semibold tracking-[-0.5px] md:tracking-[-0.6px]",
          highlighted ? "text-white" : "text-[#042718]"
        )}>
          {plan.name}
        </h3>
        {highlighted && (
          <span className="px-3 py-1 rounded-full bg-[#198F38] text-white font-inter text-xs font-semibold uppercase tracking-wider">
            Popular
          </span>
        )}
      </div>

      <p className={cn(
        "font-inter text-sm md:text-base font-normal mb-8",
        highlighted ? "text-white/70" : "text-[#042718]/70"
      )}>
        {plan.tagline}
      </p>

      <div className="flex items-baseline gap-2 mb-8">
        <span className={cn(
          "font-onest text-[38px] sm:text-[44px] md:text-[56px] font-semibold leading-none tracking-[-1.4px] md:tracking-[-1.8px]",
          highlighted ? "text-white" : "text-[#042718]"
        )}>
          ${price}
        </span>
        <span className={cn(
          "font-inter text-base font-normal",
          highlighted ? "text-white/60" : "text-[#042718]/60"
        )}>
          /{isYearly ? "mo, billed yearly" : "month"}
        </span>
      </div>

      <button
        className={cn(
          "w-full h-12 rounded-full font-inter text-base font-medium flex items-center justify-center gap-2 transition-all mb-8",
          highlighted
            ? "bg-white text-[#042718] hover:bg-white/90"
            : "bg-[#042718] text-white hover:bg-[#063b25]"
        )}
      >
        {plan.cta}
        <ArrowUpRight className="w-4 h-4" />
      </button>

      <div className={cn(
        "h-px mb-6",
        highlighted ? "bg-white/10" : "bg-[#042718]/[0.06]"
      )} />

      <ul className="flex flex-col gap-3">
        {plan.features.map((f: string) => (
          <li key={f} className="flex items-start gap-3">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
              highlighted ? "bg-[#198F38]/30" : "bg-[#198F38]/10"
            )}>
              <Check className={cn(
                "w-3 h-3 stroke-[3px]",
                highlighted ? "text-white" : "text-[#198F38]"
              )} />
            </div>
            <span className={cn(
              "font-inter text-sm md:text-base font-normal leading-6",
              highlighted ? "text-white/90" : "text-[#042718]/90"
            )}>
              {f}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Pricing01Finsyc({ className }: { className?: string }) {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className={cn("w-full bg-white py-14 sm:py-20 lg:py-32", className)}>
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
              Simple Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#042718] font-onest text-[26px] xs:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] lg:leading-[58px] tracking-[-0.8px] sm:tracking-[-1.2px] lg:tracking-[-1.8px] max-w-[720px] px-2 sm:px-0"
          >
            Plans that{" "}
            <span className="font-playfair italic font-semibold text-black/40">
              grow
            </span>{" "}
            with your money
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-3 sm:mt-4 text-[#042718] font-inter text-sm sm:text-base lg:text-lg font-normal leading-[1.5] sm:leading-relaxed opacity-80 max-w-[520px] px-2 sm:px-0"
          >
            No hidden fees. Cancel anytime. Switch plans as your needs change.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex items-center gap-1 p-1 rounded-full bg-[#F6FDFF] border border-[#042718]/[0.06]"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-5 py-2 rounded-full font-inter text-sm font-medium transition-all",
                !isYearly ? "bg-white text-[#042718] shadow-sm" : "text-[#042718]/60"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-5 py-2 rounded-full font-inter text-sm font-medium transition-all flex items-center gap-2",
                isYearly ? "bg-white text-[#042718] shadow-sm" : "text-[#042718]/60"
              )}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-[#198F38]/10 text-[#198F38] text-xs font-semibold">
                -20%
              </span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <PlanCard key={p.name} plan={p} isYearly={isYearly} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
