import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPostCard, Post } from "@/components/blog-post-card";
import { FeaturedPost } from "@/components/featured-post";
import { Button } from "@/components/ui/button";

const allPosts: Post[] = [
    {
      featured: true,
      imgSrc: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=2070&auto=format&fit=crop",
      category: "Featured",
      title: "Breaking Into Product Design: Advice from Untitled Founder, Frankie",
      excerpt: "Let's get one thing out of the way: you don’t need a fancy Bachelor’s Degree to get into product design. We sat down with Frankie Sullivan to talk about gatekeeping in product design and how anyone can get into this growing industry.",
      author: "Frankie Sullivan",
      authorAvatar: "https://i.pravatar.cc/150?img=1",
      date: "19 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop",
      category: "Software Development",
      title: "Migrating to Linear 101",
      excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Jonathan Willis",
      authorAvatar: "https://i.pravatar.cc/150?img=2",
      date: "19 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "Tools",
      title: "Building your API Stack",
      excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      authorAvatar: "https://i.pravatar.cc/150?img=3",
      date: "18 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      category: "Leadership",
      title: "Bill Walsh leadership lessons",
      excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      author: "Eve Wilkins",
      authorAvatar: "https://i.pravatar.cc/150?img=4",
      date: "18 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
      category: "Mindset",
      title: "PM mental models",
      excerpt: "Mental models are simple expressions of complex processes or relationships.",
      author: "Eve Wilkins",
      authorAvatar: "https://i.pravatar.cc/150?img=5",
      date: "18 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop",
      category: "Design",
      title: "What is Wireframing?",
      excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      author: "Lana Steiner",
      authorAvatar: "https://i.pravatar.cc/150?img=6",
      date: "18 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop",
      category: "Collaboration",
      title: "How collaboration makes us better designers",
      excerpt: "Collaboration can make our teams stronger, and our individual designs better.",
      author: "Jonathan Willis",
      authorAvatar: "https://i.pravatar.cc/150?img=7",
      date: "19 Jan 2024",
    },
];

const featuredPost = allPosts.find(p => p.featured);
const recentPosts = allPosts.filter(p => !p.featured);

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-primary font-semibold">Our blog</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mt-2">
                Resources and insights
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                The latest industry news, interviews, technologies, and resources.
              </p>
            </div>
            
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