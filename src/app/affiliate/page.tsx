import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { UserPlus, Link as LinkIcon, DollarSign, CheckCircle } from "lucide-react";

export default function AffiliatePage() {
  const benefits = [
    "Hoa hồng hấp dẫn trên mỗi lượt giới thiệu thành công.",
    "Truy cập vào bộ tài liệu marketing chuyên nghiệp.",
    "Hỗ trợ tận tình từ đội ngũ KA Content.",
    "Cơ hội phát triển cùng một thương hiệu uy tín.",
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground">
                Chương trình Affiliate
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Tham gia cùng chúng tôi, giới thiệu các khóa học chất lượng của KA Content và nhận hoa hồng hấp dẫn. Cùng nhau phát triển và lan tỏa giá trị!
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="text-3xl font-bold text-center mb-8">Hoạt động như thế nào?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <UserPlus className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Đăng ký</h3>
                  <p className="text-muted-foreground">Điền vào biểu mẫu đăng ký đơn giản của chúng tôi để trở thành đối tác.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <LinkIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Chia sẻ liên kết</h3>
                  <p className="text-muted-foreground">Nhận liên kết affiliate duy nhất của bạn và chia sẻ nó với cộng đồng của bạn.</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Nhận hoa hồng</h3>
                  <p className="text-muted-foreground">Kiếm tiền hoa hồng cho mỗi khách hàng đăng ký khóa học qua liên kết của bạn.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-8">Tại sao nên tham gia?</h2>
              <div className="max-w-2xl mx-auto text-left">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button size="lg">Đăng ký ngay</Button>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}