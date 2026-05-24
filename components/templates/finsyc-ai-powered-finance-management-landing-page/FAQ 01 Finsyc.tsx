"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How does Finsyc keep my financial data secure?",
    a: "All data is encrypted in transit with TLS 1.3 and at rest with AES-256. We use bank-level OAuth tokenization, never store your credentials, and undergo quarterly third-party security audits."
  },
  {
    q: "Which banks and institutions do you support?",
    a: "Finsyc connects to over 12,000 banks, credit unions, brokerages, and digital wallets across 35 countries. New institutions are added every week."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. Cancel from your account settings in two clicks. No phone calls, no retention agents. Your data export remains available for 90 days after cancellation."
  },
  {
    q: "How accurate are the AI predictions?",
    a: "Our predictive models are trained on anonymized aggregate data and achieve 92% accuracy on monthly cash flow forecasts after 60 days of account history."
  },
  {
    q: "Do you offer a free trial?",
    a: "Every paid plan starts with a 14-day free trial. No credit card required. Full feature access from day one."
  },
  {
    q: "Can my team collaborate inside Finsyc?",
    a: "Business plans support unlimited team members with role-based permissions: viewer, analyst, admin, and owner. Activity logs track every action."
  },
  {
    q: "What happens to my data if I leave?",
    a: "You can export everything as CSV, JSON, or PDF at any time. After cancellation, your data is permanently deleted within 90 days unless you request earlier removal."
  }
];

function FAQRow({ item, isOpen, onToggle, delay }: { item: FAQItem; isOpen: boolean; onToggle: () => void; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className={cn(
        "rounded-2xl border transition-all duration-300 overflow-hidden",
        isOpen
          ? "bg-white border-[#198F38]/30 shadow-[0_4px_30px_0_rgba(4,39,24,0.08)]"
          : "bg-white border-[#042718]/[0.08]"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-5 md:p-6 text-left"
      >
        <span className="text-[#042718] font-onest text-sm sm:text-base md:text-[18px] font-semibold leading-[1.3] tracking-[-0.3px] flex-1">
          {item.q}
        </span>
        <div className={cn(
          "w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-colors",
          isOpen ? "bg-[#198F38] text-white" : "bg-[#F6FDFF] text-[#042718]"
        )}>
          {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <p className="text-[#042718] font-inter text-sm sm:text-base font-normal leading-[1.55] sm:leading-relaxed opacity-80">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ01Finsyc({ className }: { className?: string }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className={cn("w-full bg-[#F6FDFF] py-14 sm:py-20 lg:py-32", className)}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20">

          <div className="flex flex-col items-start lg:sticky lg:top-[120px] self-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F38]/10 bg-[#198F38]/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#198F38]" />
              <span className="text-[#198F38] font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                FAQ
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[#042718] font-onest text-[26px] xs:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] lg:leading-[58px] tracking-[-0.8px] sm:tracking-[-1.2px] lg:tracking-[-1.8px]"
            >
              Questions{" "}
              <span className="font-playfair italic font-semibold text-black/40">
                answered
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-3 sm:mt-4 text-[#042718] font-inter text-sm sm:text-base md:text-lg font-normal leading-[1.5] sm:leading-relaxed opacity-80 max-w-[380px]"
            >
              Still curious? Can&rsquo;t find the answer? Reach our team — average reply time under 2 hours.
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((item, i) => (
              <FAQRow
                key={item.q}
                item={item}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                delay={i * 0.05}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
