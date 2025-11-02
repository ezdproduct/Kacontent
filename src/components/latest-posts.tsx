import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const LatestPosts = () => {
  const posts = [
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+1",
      category: "Daily Life Notes",
      author: "Khanh Nguyễn",
      title: "ĐIỂM THI ĐẠI HỌC CHỈ LÀ KHỞI ĐẦU",
      excerpt:
        "Gửi các bạn 2k7, Hôm nay là ngày các bạn nhận được điểm thi, nhiều người sẽ vui mừng vì điểm như mong đợi, nhiều...",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+2",
      category: "Daily Life Notes",
      author: "Khanh Nguyễn",
      title: "CHÚNG TA KHÔNG THỂ GIỎI TẤT CẢ MỌI THỨ",
      excerpt:
        "Chúng ta không thể giỏi tất cả mọi thứ, đó là điều bình thường. Có một sự thật mà không mấy ai muốn thừa nhận.",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+3",
      category: "Ecommerce",
      author: "Khanh Nguyễn",
      title: "CHIẾN LƯỢC - TẦM NHÌN VÀ KHẢ NĂNG THỰC THI",
      excerpt:
        "Chiến lược – tầm nhìn chỉ là con số 0, Nếu đội ngũ không có khả năng thực thi. Nếu gọi chiến lược là tấm...",
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
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg overflow-hidden flex flex-col group"
            >
              <div className="relative">
                <Link href="#" className="block overflow-hidden">
                  <img
                    src={post.imgSrc}
                    alt="Ảnh bìa bài viết"
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  {post.author}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  <Link href="#" className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
          >
            Đọc blog của Khanh Nguyễn
            <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};