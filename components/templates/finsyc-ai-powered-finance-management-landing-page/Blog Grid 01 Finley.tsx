"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  readTime: string;
  date: string;
  cover: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    category: "Product",
    title: "Introducing predictive cash flow: see next month before it arrives",
    excerpt: "Our new forecasting engine uses 60 days of history to project your balance, bills, and surprise expenses for the month ahead.",
    author: "Lena Rodriguez",
    authorAvatar: "https://i.pravatar.cc/80?img=44",
    readTime: "6 min",
    date: "May 12, 2026",
    cover: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=900&q=80",
    featured: true
  },
  {
    category: "Engineering",
    title: "How we sync 12,000 banks in under 100ms",
    excerpt: "A look under the hood at our event-driven ingestion pipeline, lock-free queues, and the boring tricks that made it fast.",
    author: "Kojo Mensah",
    authorAvatar: "https://i.pravatar.cc/80?img=60",
    readTime: "9 min",
    date: "May 8, 2026",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    category: "Security",
    title: "Bank-grade encryption is a floor, not a ceiling",
    excerpt: "Why we went beyond compliance and built layered defenses most fintech companies skip entirely.",
    author: "Mateo Rossi",
    authorAvatar: "https://i.pravatar.cc/80?img=33",
    readTime: "7 min",
    date: "Apr 28, 2026",
    cover: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
  },
  {
    category: "Money Tips",
    title: "Five subscription leaks costing the average household $400/yr",
    excerpt: "We analyzed 50,000 anonymized accounts. The boring leaks add up faster than the dramatic ones.",
    author: "Aria Nasser",
    authorAvatar: "https://i.pravatar.cc/80?img=49",
    readTime: "5 min",
    date: "Apr 22, 2026",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  {
    category: "Design",
    title: "Designing for financial clarity, not financial drama",
    excerpt: "Why we removed red numbers, alarming icons, and most of the dashboards you&rsquo;d expect.",
    author: "Hana Suzuki",
    authorAvatar: "https://i.pravatar.cc/80?img=20",
    readTime: "4 min",
    date: "Apr 15, 2026",
    cover: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
  },
  {
    category: "Company",
    title: "Series B: $42M to make money tools that actually help",
    excerpt: "Why we raised, who joined the cap table, and what we&rsquo;re building next.",
    author: "Arjun Mehta",
    authorAvatar: "https://i.pravatar.cc/80?img=15",
    readTime: "3 min",
    date: "Apr 2, 2026",
    cover: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80"
  },
  {
    category: "Money Tips",
    title: "The 60/20/20 rule beats the 50/30/20 for most people",
    excerpt: "A small change in budget split that compounds over a career. Math inside.",
    author: "Aria Nasser",
    authorAvatar: "https://i.pravatar.cc/80?img=49",
    readTime: "6 min",
    date: "Mar 25, 2026",
    cover: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80"
  }
];

const categories = ["All", "Product", "Engineering", "Security", "Money Tips", "Design", "Company"];

function PostCard({ post, isFeatured = false, delay = 0 }: { post: BlogPost; isFeatured?: boolean; delay?: number }) {
  if (isFeatured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: "easeOut" as const }}
        className="lg:col-span-2 group cursor-pointer flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 lg:p-8 rounded-[24px] bg-white border border-[#042718]/[0.06] shadow-[0_1px_20px_0_rgba(4,39,24,0.04)] hover:shadow-[0_4px_30px_0_rgba(4,39,24,0.08)] transition-shadow"
      >
        <div className="relative w-full lg:w-[400px] aspect-[4/3] lg:aspect-auto lg:h-auto rounded-[16px] overflow-hidden shrink-0">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#198F38]/10 text-[#198F38] font-inter text-xs font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-[#042718]/60 font-inter text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
            <h3 className="text-[#042718] font-onest text-2xl lg:text-[32px] font-semibold leading-tight tracking-[-1px] mb-3 group-hover:text-[#198F38] transition-colors">
              {post.title}
            </h3>
            <p className="text-[#042718] font-inter text-base font-normal leading-relaxed opacity-80 mb-6">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="text-[#042718] font-onest text-sm font-semibold">{post.author}</span>
                <span className="text-[#042718]/60 font-inter text-xs">{post.date}</span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#042718]/40 group-hover:text-[#198F38] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className="group cursor-pointer flex flex-col rounded-[20px] bg-white border border-[#042718]/[0.06] overflow-hidden hover:shadow-[0_4px_30px_0_rgba(4,39,24,0.08)] transition-shadow"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="flex flex-col p-5 lg:p-6 flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-[#198F38]/10 text-[#198F38] font-inter text-[11px] font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-[#042718]/60 font-inter text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
        </div>
        <h3 className="text-[#042718] font-onest text-lg lg:text-xl font-semibold leading-tight tracking-[-0.4px] mb-2 group-hover:text-[#198F38] transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-[#042718] font-inter text-sm font-normal leading-relaxed opacity-70 mb-5 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-[#042718]/[0.06] mt-auto">
          <div className="flex items-center gap-2">
            <img src={post.authorAvatar} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
            <span className="text-[#042718] font-onest text-xs font-semibold">{post.author}</span>
          </div>
          <span className="text-[#042718]/60 font-inter text-xs">{post.date}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogGrid01Finley({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <section className={cn("w-full bg-white py-20 lg:py-32", className)}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center text-center mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F38]/10 bg-[#198F38]/5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#198F38]" />
            <span className="text-[#198F38] font-inter text-base font-normal leading-6 tracking-[-0.3px]">
              Latest writing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#042718] font-onest font-semibold leading-tight tracking-[-1.2px] lg:tracking-[-1.8px] text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[52px] max-w-[720px]"
          >
            Stories from the{" "}
            <span className="font-playfair italic font-semibold text-black/40">
              Finley
            </span>{" "}
            team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-[#042718] font-inter text-base sm:text-lg font-normal leading-relaxed opacity-80 max-w-[560px]"
          >
            Money insights, product updates, engineering deep-dives, and honest behind-the-scenes from the people building Finley.
          </motion.p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 lg:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full font-inter text-sm font-medium transition-all border",
                activeCategory === cat
                  ? "bg-[#042718] text-white border-[#042718]"
                  : "bg-white text-[#042718]/70 border-[#042718]/10 hover:border-[#042718]/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featured && <PostCard post={featured} isFeatured delay={0} />}
          {rest.map((post, i) => (
            <PostCard key={post.title} post={post} delay={(i + 1) * 0.05} />
          ))}
        </div>

      </div>
    </section>
  );
}
