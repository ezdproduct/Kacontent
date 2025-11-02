import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPostCard, Post } from "@/components/blog-post-card";
import { FeaturedPost } from "@/components/featured-post";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";

const allPosts: Post[] = [
    {
      featured: true,
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
      category: "Content Strategy",
      title: "Chiến Lược Content 2025: Đón Đầu Xu Hướng và Bứt Phá",
      excerpt: "Năm 2025 sẽ là một năm đầy biến động trong lĩnh vực marketing. Hãy cùng khám phá những xu hướng content sẽ thống trị và cách để bạn có thể áp dụng chúng ngay hôm nay.",
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "30 Oct 2024",
    },
    // ... other posts
];

const featuredPost = allPosts.find(p => p.featured);
const recentPosts = allPosts.filter(p => !p.featured);

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title="Blog của Khanh Nguyễn"
              subtitle="Nơi chia sẻ kiến thức, tư duy và trải nghiệm về xây dựng nội dung đa nền tảng."
            />
            {featuredPost && <FeaturedPost post={featuredPost} />}

            <div className="mt-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">Recent blog posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {recentPosts.map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                    ))}
                </div>
            </div>

            <div className="text-center mt-16">
                <Button variant="outline" size="lg">Loading more...</Button>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}