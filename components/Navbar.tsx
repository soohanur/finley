"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar({ variant = "transparent" }: { variant?: "transparent" | "solid" }) {
  const pathname = usePathname();
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" as const }}
        className={cn(
          "flex items-center justify-between w-full",
          variant === "solid" && "bg-white border-b border-[#042718]/[0.06]"
        )}
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-[#042718] flex items-center justify-center">
            <span className="font-onest text-white text-lg font-bold leading-none">F</span>
          </div>
          <span className="font-onest text-xl sm:text-2xl font-semibold text-[#042718] tracking-tight">
            Finley
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "font-inter text-[15px] xl:text-base leading-6 tracking-[-0.3px] text-[#042718] transition-all",
                  isActive(item.href)
                    ? "font-bold opacity-100"
                    : "font-normal opacity-80 hover:opacity-100 hover:font-bold"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
            layout
            className={cn(
              "hidden sm:flex items-center gap-3 py-1.5 rounded-full backdrop-blur-sm border group cursor-pointer relative h-10 lg:h-11 transition-all duration-300",
              variant === "solid"
                ? "bg-[#042718]/5 border-[#042718]/15"
                : "bg-white/10 border-white/40",
              isNavHovered ? "flex-row-reverse pl-1.5 pr-[16px]" : "flex-row pl-[16px] pr-1.5"
            )}
          >
            <motion.span
              layout
              className="font-inter text-sm lg:text-base font-medium leading-6 tracking-[-0.3px] text-[#042718]"
            >
              Get Started
            </motion.span>
            <motion.div
              layout
              className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0"
            >
              <motion.div
                animate={{
                  x: isNavHovered ? [-20, 0] : 0,
                  opacity: isNavHovered ? [0, 1] : 1
                }}
                transition={{ duration: 0.3, delay: isNavHovered ? 0.1 : 0 }}
              >
                <ArrowUpRight className="w-3 h-3 text-[#042718]" />
              </motion.div>
            </motion.div>
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 text-[#042718] rounded-full",
              variant === "solid" ? "bg-[#042718]/5" : "bg-white/20 backdrop-blur-md"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring" as const, damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] lg:hidden bg-white px-6 py-8 flex flex-col gap-8"
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#042718] flex items-center justify-center">
                  <span className="font-onest text-white text-lg font-bold leading-none">F</span>
                </div>
                <span className="font-onest text-2xl font-semibold text-[#042718]">Finley</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#042718] bg-[#042718]/5 rounded-full"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-5 mt-4">
              {navItems.map((item, idx) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, ease: "easeOut" as const }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-inter text-2xl text-[#042718]",
                      isActive(item.href) ? "font-bold" : "font-medium opacity-80"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 rounded-full bg-[#042718] text-white font-inter font-medium text-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
