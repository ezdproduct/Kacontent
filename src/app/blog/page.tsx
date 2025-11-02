import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPostCard, Post } from "@/components/blog-post-card";
import { FeaturedPost } from "@/components/featured-post";
import { Button } from "@/components/ui/button";

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
    {
      imgSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      category: "Social Media",
      title: "Bí Quyết Xây Dựng Kênh TikTok Triệu View Từ Con Số 0",
      excerpt: "Khám phá lộ trình chi tiết, từ việc xác định đối tượng, sáng tạo nội dung viral, đến cách tận dụng thuật toán của TikTok.",
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "25 Oct 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      category: "Copywriting",
      title: "Nghệ Thuật Viết Content 'Chạm' Đến Cảm Xúc Khách Hàng",
      excerpt: "Học cách sử dụng ngôn từ để kể chuyện, tạo sự kết nối và thúc đẩy hành động mua hàng một cách tự nhiên và hiệu quả.",
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "22 Oct 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      category: "Personal Branding",
      title: "Xây Dựng Thương Hiệu Cá Nhân: Từ Zero đến Hero",
      excerpt: "Thương hiệu cá nhân không chỉ là về sự nổi tiếng. Đó là cách bạn xây dựng uy tín và tạo ra giá trị bền vững cho sự nghiệp.",
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "20 Oct 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      category: "Marketing",
      title: "5 Sai Lầm Chết Người Khi Làm Content Marketing (Và Cách Né Tránh)",
      excerpt: "Đừng để những sai lầm phổ biến này phá hỏng chiến dịch của bạn. Hãy cùng tìm hiểu và khắc phục chúng ngay từ đầu.",
      author: "KA Content Team",
      authorAvatar: "https://i.pravatar.cc/150?img=10",
      date: "18 Oct 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop",
      category: "Storytelling",
      title: "Tư Duy Kể Chuyện (Storytelling) Trong Marketing Hiện Đại",
      excerpt: "Những câu chuyện hay có sức mạnh thay đổi nhận thức và hành vi của khách hàng. Hãy học cách trở thành một người kể chuyện tài ba.",
      author: "KA Content Team",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      date: "15 Oct 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      category: "SEO",
      title: "SEO Cho Người Mới Bắt Đầu: Viết Bài Chuẩn SEO Không Hề Khó",
      excerpt: "Nắm vững những kiến thức SEO cơ bản nhất để giúp nội dung của bạn dễ dàng được tìm thấy trên Google và các công cụ tìm kiếm khác.",
      author: "Khanh Nguyễn",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "12 Oct 2024",
    },
];

const featuredPost = allPosts.find(p => p.featured);
const recentPosts = allPosts.filter(p => !p.featured);

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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