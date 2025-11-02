import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";

const courses = [
    {
      imgSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      title: "TikTok Masterclass: Xây Dựng Kênh Triệu View",
      description: "Học cách xây dựng chiến lược nội dung, tạo video viral và tận dụng thuật toán TikTok để phát triển thương hiệu cá nhân hoặc doanh nghiệp.",
      price: "2.499.000đ",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      title: "Nghệ Thuật Copywriting: Viết Content Chạm Đến Cảm Xúc",
      description: "Nắm vững các kỹ thuật viết quảng cáo, storytelling và tâm lý học khách hàng để tạo ra những nội dung có sức thuyết phục cao.",
      price: "1.999.000đ",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
      title: "Chiến Lược Content Đa Kênh Toàn Diện",
      description: "Xây dựng một hệ sinh thái nội dung bền vững từ blog, social media đến email marketing để thu hút và giữ chân khách hàng.",
      price: "3.499.000đ",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      title: "Xây Dựng Thương Hiệu Cá Nhân Cho Chuyên Gia",
      description: "Học cách định vị bản thân, xây dựng uy tín và lan tỏa giá trị của bạn để trở thành một chuyên gia có tầm ảnh hưởng trong ngành.",
      price: "2.999.000đ",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      title: "SEO Cho Người Viết: Tối Ưu Hóa Bài Viết Lên Top Google",
      description: "Nắm vững các kỹ thuật SEO on-page, nghiên cứu từ khóa và xây dựng liên kết để đưa nội dung của bạn đến với hàng triệu người dùng.",
      price: "1.799.000đ",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop",
      title: "Quản Lý Mạng Xã Hội Chuyên Nghiệp",
      description: "Học cách lập kế hoạch, sản xuất nội dung, chạy quảng cáo và phân tích hiệu quả trên các nền tảng Facebook, Instagram, LinkedIn.",
      price: "2.299.000đ",
    },
];

export default function CoursesPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground">
                Các Khóa Học
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Nâng cấp kỹ năng content và marketing của bạn với các khóa học chuyên sâu, thực chiến từ KA Content.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}