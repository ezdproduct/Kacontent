import Link from "next/link";
import { MoveRight } from "lucide-react";
import { BlogPostCard } from "./blog-post-card";
import { getAllPosts } from "@/lib/posts";

export const LatestPosts = async () => {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter(p => !p.featured).slice(0, 3);

  return (
    <section className="bg-muted py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Nội Dung Mới Nhất
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Một chiếc blog để chia sẻ những điều đơn giản.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
          >
            Đọc blog của Khanh Nguyễn
            <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};