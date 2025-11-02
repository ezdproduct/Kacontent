import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPostCard } from "@/components/blog-post-card";

const posts = [
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+1",
      category: "Daily Life Notes",
      author: "Khanh Nguyễn",
      title: "ĐIỂM THI ĐẠI HỌC CHỈ LÀ KHỞI ĐẦU",
      excerpt: "Gửi các bạn 2k7, Hôm nay là ngày các bạn nhận được điểm thi, nhiều người sẽ vui mừng vì điểm như mong đợi, nhiều...",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+2",
      category: "Daily Life Notes",
      author: "Khanh Nguyễn",
      title: "CHÚNG TA KHÔNG THỂ GIỎI TẤT CẢ MỌI THỨ",
      excerpt: "Chúng ta không thể giỏi tất cả mọi thứ, đó là điều bình thường. Có một sự thật mà không mấy ai muốn thừa nhận.",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+3",
      category: "Ecommerce",
      author: "Khanh Nguyễn",
      title: "CHIẾN LƯỢC - TẦM NHÌN VÀ KHẢ NĂNG THỰC THI",
      excerpt: "Chiến lược – tầm nhìn chỉ là con số 0, Nếu đội ngũ không có khả năng thực thi. Nếu gọi chiến lược là tấm...",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+4",
      category: "Marketing",
      author: "Khanh Nguyễn",
      title: "XÂY DỰNG THƯƠNG HIỆU CÁ NHÂN TRÊN MẠNG XÃ HỘI",
      excerpt: "Thương hiệu cá nhân không phải là thứ bạn tạo ra sau một đêm. Đó là cả một quá trình xây dựng uy tín và sự tin tưởng.",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+5",
      category: "Tư duy",
      author: "Khanh Nguyễn",
      title: "VƯỢT QUA SỰ TRÌ HOÃN: 5 BƯỚC ĐƠN GIẢN",
      excerpt: "Sự trì hoãn là kẻ thù của thành công. Hãy cùng tìm hiểu cách để chiến thắng nó và bắt đầu hành động ngay hôm nay.",
    },
    {
      imgSrc: "https://placehold.co/600x400/e2e8f0/333?text=Bài+viết+6",
      category: "Sáng tạo",
      author: "Khanh Nguyễn",
      title: "LÀM THẾ NÀO ĐỂ LUÔN CÓ Ý TƯỞNG SÁNG TẠO?",
      excerpt: "Ý tưởng không tự nhiên đến. Chúng là kết quả của sự quan sát, tò mò và kết nối những điều tưởng chừng không liên quan.",
    },
];

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground">
                Blog của Khanh Nguyễn
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Nơi chia sẻ kiến thức, tư duy và trải nghiệm về xây dựng nội dung đa nền tảng.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogPostCard key={index} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}