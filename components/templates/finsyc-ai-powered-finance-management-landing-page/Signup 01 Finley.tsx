"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Check, Eye, EyeOff, Mail, User as UserIcon, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

interface PlanOption {
  id: "starter" | "pro" | "business";
  name: string;
  price: string;
  blurb: string;
  features: string[];
  recommended?: boolean;
}

const plans: PlanOption[] = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    blurb: "For testing the waters",
    features: ["2 connected accounts", "Basic tracking", "Monthly reports"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$15/mo",
    blurb: "Most popular — 14-day trial",
    features: ["Unlimited accounts", "AI predictive analytics", "Smart alerts", "Priority support"],
    recommended: true,
  },
  {
    id: "business",
    name: "Business",
    price: "$39/mo",
    blurb: "For teams and CFOs",
    features: ["Everything in Pro", "Multi-user roles", "SLA + audit logs", "Dedicated manager"],
  },
];

export default function Signup01Finley({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanOption["id"]>("pro");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) return;
    setSubmitted(true);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <section className={cn("relative w-full overflow-hidden min-h-[100svh] flex flex-col", className)}>
        {/* Video bg */}
        <div className="absolute inset-0 z-0">
          {isMounted && (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="https://cdn.jiro.build/Amox/All%20Images/P01-Header-01-BG.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-7 flex-shrink-0">
          <Navbar />
        </div>

        <div className="relative z-10 flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">

            {/* Left: copy + plan picker */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 self-start"
              >
                <Sparkles className="w-3.5 h-3.5 fill-[#042718] text-[#042718]" />
                <span className="font-inter text-[13px] font-medium text-[#042718] tracking-[-0.3px]">
                  Start free in 2 minutes
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-5 text-[#042718] font-onest font-semibold leading-[1.1] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] text-[32px] xs:text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px]"
              >
                Take control of{" "}
                <span className="font-playfair italic font-semibold text-black/40">your</span>{" "}
                money today
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 sm:mt-5 text-[#042718]/80 font-inter text-sm sm:text-base lg:text-[17px] leading-[1.55] max-w-[520px]"
              >
                Join 18,000+ users who let Finley handle the boring parts of money management so they can focus on growth.
              </motion.p>

              {/* Plan picker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 lg:mt-10 flex flex-col gap-3"
              >
                <span className="font-onest text-[#042718] text-sm font-semibold uppercase tracking-wider opacity-70">
                  Choose your plan
                </span>
                {plans.map((p) => {
                  const active = selectedPlan === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlan(p.id)}
                      className={cn(
                        "text-left flex items-start gap-4 p-4 sm:p-5 rounded-2xl border transition-all",
                        active
                          ? "border-[#198F38] bg-[#198F38]/5 shadow-[0_4px_24px_-8px_rgba(25,143,56,0.3)]"
                          : "border-[#042718]/10 bg-white/60 backdrop-blur-sm hover:border-[#042718]/30"
                      )}
                    >
                      <div
                        className={cn(
                          "mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                          active ? "border-[#198F38] bg-[#198F38]" : "border-[#042718]/30 bg-white"
                        )}
                      >
                        {active && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="font-onest text-[#042718] text-base sm:text-lg font-semibold">
                            {p.name}
                          </span>
                          <span className="font-onest text-[#042718] text-base font-semibold">{p.price}</span>
                          {p.recommended && (
                            <span className="px-2 py-0.5 rounded-full bg-[#198F38] text-white font-inter text-[10px] font-semibold uppercase tracking-wider">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-[#042718]/70 font-inter text-xs sm:text-sm mt-1">{p.blurb}</p>
                        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-center gap-1 text-[#042718]/80 font-inter text-xs">
                              <Check className="w-3 h-3 text-[#198F38] stroke-[3px]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </div>

            {/* Right: signup form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="w-full bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_8px_40px_-12px_rgba(4,39,24,0.18)] border border-[#042718]/[0.06] p-6 sm:p-8 lg:p-10 lg:sticky lg:top-[120px]"
            >
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#198F38]/15 flex items-center justify-center mb-5">
                    <Check className="w-8 h-8 text-[#198F38] stroke-[3px]" />
                  </div>
                  <h2 className="font-onest text-[#042718] text-2xl sm:text-3xl font-semibold tracking-[-0.6px]">
                    Welcome to Finley
                  </h2>
                  <p className="mt-3 text-[#042718]/70 font-inter text-base max-w-[360px]">
                    Verification email sent to{" "}
                    <span className="font-semibold text-[#042718]">{email || "your inbox"}</span>. Click the
                    link to finish setup.
                  </p>
                  <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 px-6 h-12 rounded-full bg-[#042718] text-white font-inter text-base font-medium hover:bg-[#063b25] transition-colors"
                  >
                    Back to home
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h2 className="font-onest text-[#042718] text-2xl sm:text-[28px] font-semibold tracking-[-0.6px]">
                    Create your account
                  </h2>
                  <p className="text-[#042718]/70 font-inter text-sm sm:text-base -mt-1">
                    No credit card required. Cancel anytime.
                  </p>

                  {/* Name */}
                  <label className="flex flex-col gap-1.5 mt-2">
                    <span className="font-inter text-[#042718] text-sm font-medium">Full name</span>
                    <div className="relative">
                      <UserIcon className="w-4 h-4 text-[#042718]/40 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jamie Lee"
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#042718]/10 bg-[#F6FDFF] font-inter text-[#042718] text-sm placeholder:text-[#042718]/40 focus:outline-none focus:border-[#198F38] focus:bg-white transition-colors"
                      />
                    </div>
                  </label>

                  {/* Email */}
                  <label className="flex flex-col gap-1.5">
                    <span className="font-inter text-[#042718] text-sm font-medium">Work email</span>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#042718]/40 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jamie@company.com"
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#042718]/10 bg-[#F6FDFF] font-inter text-[#042718] text-sm placeholder:text-[#042718]/40 focus:outline-none focus:border-[#198F38] focus:bg-white transition-colors"
                      />
                    </div>
                  </label>

                  {/* Password */}
                  <label className="flex flex-col gap-1.5">
                    <span className="font-inter text-[#042718] text-sm font-medium">Password</span>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-[#042718]/40 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={8}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 8 characters"
                        className="w-full h-12 pl-11 pr-11 rounded-xl border border-[#042718]/10 bg-[#F6FDFF] font-inter text-[#042718] text-sm placeholder:text-[#042718]/40 focus:outline-none focus:border-[#198F38] focus:bg-white transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#042718]/50 hover:text-[#042718]"
                        aria-label="Toggle password"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </label>

                  {/* Terms */}
                  <label className="flex items-start gap-3 mt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-[#042718]/30 text-[#198F38] focus:ring-[#198F38] cursor-pointer"
                    />
                    <span className="text-[#042718]/80 font-inter text-xs sm:text-sm leading-[1.5]">
                      I agree to the{" "}
                      <a href="#" className="text-[#198F38] underline hover:text-[#147a30]">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[#198F38] underline hover:text-[#147a30]">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!acceptTerms}
                    className={cn(
                      "mt-3 w-full h-12 sm:h-13 rounded-full font-inter text-base font-medium flex items-center justify-center gap-2 transition-all",
                      acceptTerms
                        ? "bg-[#042718] text-white hover:bg-[#063b25] cursor-pointer"
                        : "bg-[#042718]/30 text-white cursor-not-allowed"
                    )}
                  >
                    Create my Finley account
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[#042718]/60 font-inter text-xs sm:text-sm mt-1">
                    Already have an account?{" "}
                    <a href="#" className="text-[#198F38] font-medium hover:underline">
                      Sign in
                    </a>
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
