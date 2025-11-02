import Link from "next/link";
import { MoveRight } from "lucide-react";
import { BlogPostCard } from "./blog-post-card";

export const LatestPosts = () => {
  const posts = [
    {
      imgSrc: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop",
      category: "Daily Life Notes",
      author: "Khanh Nguyễn",
      title: "ĐIỂM THI ĐẠI HỌC CHỈ LÀ KHỞI ĐẦU",
      excerpt:
        "Gửi các bạn 2k7, Hôm nay là ngày các bạn nhận được điểm thi, nhiều người sẽ vui mừng vì điểm như mong đợi, nhiều...",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "22 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1536702152972-d209d3321934?q=80&w=2070&auto=format&fit=crop",
      category: "Daily Life Notes",
      author: "Khanh Nguyễn",
      title: "CHÚNG TA KHÔNG THỂ GIỎI TẤT CẢ MỌI THỨ",
      excerpt:
        "Chúng ta không thể giỏi tất cả mọi thứ, đó là điều bình thường. Có một sự thật mà không mấy ai muốn thừa nhận.",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "21 Jan 2024",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1599237933330-768471523693?q=80&w=1932&auto=format&fit=crop",
      category: "Ecommerce",
      author: "Khanh Nguyễn",
      title: "CHIẾN LƯỢC - TẦM NHÌN VÀ KHẢ NĂNG THỰC THI",
      excerpt:
        "Chiến lược – tầm nhìn chỉ là con số 0, Nếu đội ngũ không có khả năng thực thi. Nếu gọi chiến lược là tấm...",
      authorAvatar: "/images/nguyen-thuy-khanh-portrait.jpg",
      date: "20 Jan 2024",
    },
  ];

  return (
    <section className="bg-muted py-12 lg:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Nội Dung Mới Nhất
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Một chiếc blog để chia sẻ những điều đơn giản.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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