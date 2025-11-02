import Link from "next/link";
import { MoveRight } from "lucide-react";
import { BlogPostCard } from "./blog-post-card";

export const LatestPosts = () => {
  const posts = [
    {
      imgSrc: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      category: "Content Strategy",
      author: "Khanh Nguyễn",
      title: "Bí Quyết Xây Dựng Kênh TikTok Triệu View Từ Con Số 0",
      excerpt:
        "Khám phá lộ trình chi tiết, từ việc xác định đối tượng, sáng tạo nội dung viral, đến cách tận dụng thuật toán của TikTok.",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "25 Oct 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      category: "Copywriting",
      author: "Khanh Nguyễn",
      title: "Nghệ Thuật Viết Content 'Chạm' Đến Cảm Xúc Khách Hàng",
      excerpt:
        "Học cách sử dụng ngôn từ để kể chuyện, tạo sự kết nối và thúc đẩy hành động mua hàng một cách tự nhiên và hiệu quả.",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "22 Oct 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      category: "Personal Branding",
      author: "Khanh Nguyễn",
      title: "Xây Dựng Thương Hiệu Cá Nhân: Từ Zero đến Hero",
      excerpt:
        "Thương hiệu cá nhân không chỉ là về sự nổi tiếng. Đó là cách bạn xây dựng uy tín và tạo ra giá trị bền vững cho sự nghiệp.",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "20 Oct 2024",
    },
  ];

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
          {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
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