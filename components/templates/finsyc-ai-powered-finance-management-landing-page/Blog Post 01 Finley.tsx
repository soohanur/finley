"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-posts";
import { posts as allPosts } from "@/lib/blog-posts";

interface BlogPostViewProps {
  post: BlogPost;
  className?: string;
}

export default function BlogPostView({ post, className }: BlogPostViewProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <article className={cn("w-full flex flex-col", className)}>
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-[#F6FDFF]">
          {/* Video bg subtle */}
          <div className="absolute inset-0 z-0 opacity-30">
            {isMounted && (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://cdn.jiro.build/Amox/All%20Images/P01-Header-01-BG.mp4" type="video/mp4" />
              </video>
            )}
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-7">
            <Navbar />
          </div>

          <div className="relative z-10 w-full max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-[#042718]/70 hover:text-[#042718] font-inter text-sm font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All articles
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="px-3 py-1 rounded-full bg-[#198F38]/10 text-[#198F38] font-inter text-xs font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-[#042718]/60 font-inter text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="text-[#042718]/60 font-inter text-sm">{post.date}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[#042718] font-onest font-semibold leading-[1.1] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px]"
            >
              {post.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-5 text-[#042718]/80 font-inter text-base sm:text-lg lg:text-[20px] font-normal leading-[1.55]"
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="text-[#042718] font-onest text-base font-semibold">{post.author}</span>
                <span className="text-[#042718]/60 font-inter text-sm">{post.authorRole}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full aspect-[16/9] rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_8px_40px_0_rgba(4,39,24,0.12)]"
          >
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Body */}
        <section className="w-full bg-white py-14 sm:py-20 lg:py-28">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 sm:gap-6">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="text-[#042718] font-onest text-[22px] sm:text-[28px] lg:text-[32px] font-semibold leading-[1.2] tracking-[-0.6px] mt-4 sm:mt-6"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="text-[#042718] font-onest text-[18px] sm:text-[22px] lg:text-[24px] font-semibold leading-[1.25] tracking-[-0.4px] mt-3"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="flex flex-col gap-2 pl-5 list-disc marker:text-[#198F38]">
                      {(block.items || []).map((item, j) => (
                        <li
                          key={j}
                          className="text-[#042718] font-inter text-base sm:text-[17px] font-normal leading-[1.65] opacity-90"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-[#198F38] pl-5 sm:pl-6 py-2 my-2 text-[#042718] font-playfair italic text-[18px] sm:text-[22px] lg:text-[24px] font-semibold leading-[1.4]"
                    >
                      &ldquo;{block.text}&rdquo;
                    </blockquote>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[#042718] font-inter text-base sm:text-[17px] lg:text-[18px] font-normal leading-[1.75] opacity-90"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Share + author footer */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#042718]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="text-[#042718] font-onest text-base font-semibold">{post.author}</span>
                  <span className="text-[#042718]/60 font-inter text-sm">{post.authorRole}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-[#042718] text-white font-inter text-sm font-medium hover:bg-[#063b25] transition-colors">
                <Share2 className="w-4 h-4" />
                Share article
              </button>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="w-full bg-[#F6FDFF] py-14 sm:py-20 lg:py-28">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#042718] font-onest text-[24px] sm:text-[32px] lg:text-[40px] font-semibold leading-[1.15] tracking-[-0.8px] mb-8 sm:mb-10">
              Keep reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={"/blogs/" + p.slug}
                  className="group flex flex-col rounded-[20px] bg-white border border-[#042718]/[0.06] overflow-hidden hover:shadow-[0_4px_30px_0_rgba(4,39,24,0.08)] transition-shadow"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 lg:p-6 flex flex-col gap-3 flex-1">
                    <span className="px-2.5 py-0.5 self-start rounded-full bg-[#198F38]/10 text-[#198F38] font-inter text-[11px] font-semibold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="text-[#042718] font-onest text-lg lg:text-xl font-semibold leading-tight tracking-[-0.4px] group-hover:text-[#198F38] transition-colors flex-1">
                      {p.title}
                    </h3>
                    <span className="text-[#042718]/60 font-inter text-xs">{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
