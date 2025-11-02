import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Percent, Settings, Wallet, CheckCircle, UserPlus, Link as LinkIcon, DollarSign, BarChart, Award, Users } from "lucide-react";

const faqItems = [
  {
    question: "Chương trình Affiliate của KA Content hoạt động như thế nào?",
    answer: "Khi bạn đăng ký thành công, bạn sẽ nhận được một liên kết giới thiệu duy nhất. Mỗi khi có người dùng nhấp vào liên kết của bạn và hoàn tất mua một khóa học, bạn sẽ nhận được hoa hồng."
  },
  {
    question: "Tôi có cần phải mua khóa học để tham gia không?",
    answer: "Không. Chương trình Affiliate của chúng tôi hoàn toàn miễn phí để tham gia. Bạn không cần phải mua bất kỳ khóa học nào."
  },
  {
    question: "Ai đủ điều kiện tham gia chương trình?",
    answer: "Bất kỳ ai có blog, website, kênh mạng xã hội hoặc cộng đồng liên quan đến marketing, content, sáng tạo, hoặc phát triển bản thân đều có thể tham gia."
  },
  {
    question: "Hoa hồng được thanh toán như thế nào và khi nào?",
    answer: "Chúng tôi thanh toán hoa hồng qua chuyển khoản ngân hàng vào ngày 15 hàng tháng, với điều kiện số dư của bạn đạt tối thiểu 500.000đ."
  }
];

export default function AffiliatePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 lg:py-20 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground">
              Tham gia chương trình Affiliate
            </h1>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mt-2">
              cùng KA Content
            </h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
                <Percent className="w-10 h-10 text-primary mb-3" />
                <span className="font-bold">Hoa hồng cao</span>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
                <Settings className="w-10 h-10 text-primary mb-3" />
                <span className="font-bold">Thao tác đơn giản</span>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
                <Wallet className="w-10 h-10 text-primary mb-3" />
                <span className="font-bold">Nhận tiền dễ dàng</span>
              </div>
            </div>
            <Button size="lg" className="mt-8">Tham gia ngay</Button>
          </div>
        </section>

        {/* What is Affiliate Marketing? */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Tiếp thị liên kết là gì?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">Tiếp thị liên kết (Affiliate Marketing) là mô hình bạn giới thiệu các khóa học chất lượng của KA Content đến cộng đồng của mình và nhận hoa hồng khi có người mua hàng qua liên kết của bạn.</p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">Bạn sẽ nhận được một khoản hoa hồng hấp dẫn cho mỗi lượt mua hàng thành công được ghi nhận qua liên kết giới thiệu duy nhất của mình.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join? */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">3 lý do bạn nên làm tiếp thị liên kết với KA Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Khóa học chất lượng, uy tín</h3>
                <p className="text-muted-foreground">KA Content là thương hiệu uy tín trong lĩnh vực đào tạo content marketing, cung cấp các khóa học chất lượng, thực chiến, đáp ứng đúng nhu cầu của marketer.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Cộng đồng lớn mạnh</h3>
                <p className="text-muted-foreground">Với cộng đồng hàng chục ngàn người, các khóa học của KA Content có độ nhận diện cao, giúp bạn dễ dàng chia sẻ và tạo ra chuyển đổi.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <BarChart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Báo cáo minh bạch, chính xác</h3>
                <p className="text-muted-foreground">Khi tham gia, bạn được cấp quyền truy cập vào hệ thống dashboard để theo dõi hiệu suất, lượt click, và hoa hồng một cách trung thực, theo thời gian thực.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Register */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Hướng dẫn đăng ký đơn giản</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Bước 1: Đăng ký</h3>
                <p className="text-muted-foreground">Nhấn vào nút "Tham gia ngay" và điền đầy đủ thông tin vào biểu mẫu.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Bước 2: Chờ duyệt</h3>
                <p className="text-muted-foreground">Đội ngũ của chúng tôi sẽ xem xét và duyệt tài khoản của bạn trong vòng 24 giờ.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Bước 3: Nhận liên kết</h3>
                <p className="text-muted-foreground">Sau khi được duyệt, bạn sẽ nhận được liên kết affiliate duy nhất của mình.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Bước 4: Chia sẻ</h3>
                <p className="text-muted-foreground">Chia sẻ liên kết và các nội dung quảng bá đến cộng đồng của bạn.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Bước 5: Theo dõi</h3>
                <p className="text-muted-foreground">Truy cập dashboard để theo dõi hiệu suất và hoa hồng được ghi nhận.</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">Bước 6: Nhận thanh toán</h3>
                <p className="text-muted-foreground">Nhận thanh toán hoa hồng tự động vào tài khoản ngân hàng của bạn.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Giải đáp thắc mắc</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-20 text-center bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
              Sẵn sàng tạo thu nhập cùng KA Content?
            </h2>
            <Button size="lg" className="mt-8">Tham gia ngay</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}