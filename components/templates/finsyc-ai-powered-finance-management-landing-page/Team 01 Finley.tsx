"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

const team: TeamMember[] = [
  {
    name: "Arjun Mehta",
    role: "Co-founder & CEO",
    bio: "Ex-Stripe. Believes finance UX deserves the same care as the best consumer products.",
    avatar: "https://i.pravatar.cc/240?img=15"
  },
  {
    name: "Lena Rodriguez",
    role: "Co-founder & CTO",
    bio: "Built risk engines at a Tier-1 bank. Now obsessed with sub-100ms transaction sync.",
    avatar: "https://i.pravatar.cc/240?img=44"
  },
  {
    name: "Kojo Mensah",
    role: "Co-founder & Head of AI",
    bio: "PhD in time-series forecasting. Turning twelve months of receipts into next month&apos;s answer.",
    avatar: "https://i.pravatar.cc/240?img=60"
  },
  {
    name: "Hana Suzuki",
    role: "VP of Design",
    bio: "Translates dense numbers into pictures your gut understands. Former Notion designer.",
    avatar: "https://i.pravatar.cc/240?img=20"
  },
  {
    name: "Mateo Rossi",
    role: "VP of Security",
    bio: "20-year career hardening fintech. Sleeps better knowing your data is encrypted twice.",
    avatar: "https://i.pravatar.cc/240?img=33"
  },
  {
    name: "Aria Nasser",
    role: "VP of Customer",
    bio: "Believes every support ticket is a product spec in disguise. Replies usually within an hour.",
    avatar: "https://i.pravatar.cc/240?img=49"
  }
];

export default function Team01Finley({ className }: { className?: string }) {
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
              The Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#042718] font-onest font-semibold leading-[1.1] tracking-[-0.8px] sm:tracking-[-1.2px] lg:tracking-[-1.8px] text-[26px] xs:text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[52px] max-w-[720px]"
          >
            People behind{" "}
            <span className="font-playfair italic font-semibold text-black/40">
              Finley
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-3 sm:mt-4 text-[#042718] font-inter text-sm sm:text-base md:text-lg font-normal leading-[1.5] sm:leading-relaxed opacity-80 max-w-[560px] px-2 sm:px-0"
          >
            Engineers, designers, and finance veterans from Stripe, Notion, Plaid, and Goldman — united by one boring mission: make money less stressful.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: "easeOut" as const }}
              className="flex flex-col p-6 bg-white rounded-[20px] border border-[#042718]/[0.06] shadow-[0_1px_20px_0_rgba(4,39,24,0.04)]"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-[#042718] font-onest text-lg font-semibold">
                {m.name}
              </h3>
              <p className="text-[#198F38] font-inter text-sm font-medium mt-0.5">
                {m.role}
              </p>
              <p className="text-[#042718] font-inter text-sm font-normal leading-relaxed opacity-80 mt-3">
                {m.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
