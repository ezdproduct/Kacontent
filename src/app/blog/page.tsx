import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogPostCard } from "@/components/blog-post-card";
import { FeaturedPost } from "@/components/featured-post";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { getAllPosts } from "@/lib/posts";
import { Post } from "@/types";

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const featuredPost = allPosts.find((p: Post) => p.featured);
  const recentPosts = allPosts.filter((p: Post) => !p.featured);

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
                    {recentPosts.map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            <div className="text-center mt-16">
                <Button variant="outline" size="lg">Tải thêm...</Button>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}