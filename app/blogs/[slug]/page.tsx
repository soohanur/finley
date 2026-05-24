import { notFound } from "next/navigation";
import BlogPostView from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Blog Post 01 Finley";
import CTA from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/CTA 01 Finsyc";
import Footer from "@/components/templates/finsyc-ai-powered-finance-management-landing-page/Footer 01 Finsyc";
import { posts, getPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found — Finley" };
  return {
    title: post.title + " — Finley",
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="w-full flex flex-col">
      <BlogPostView post={post} />
      <CTA />
      <Footer />
    </main>
  );
}
