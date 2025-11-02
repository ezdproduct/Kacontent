import Image from "next/image";
import { MoveRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-8 pb-12 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Cột văn bản */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase">
              KHANH LÀ NGUYỄN THUỲ KHANH
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-6">
              Giúp Creator xây dựng content đa nền tảng
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Mình đồng hành cùng creator, marketer và doanh nghiệp trong hành trình kiến tạo chiến lược nội dung có chiều sâu – lan tỏa – và tạo kết quả thực.
              </p>
              <p>
                Blog này là nơi mình chia sẻ về nghề làm nội dung, tư duy sáng tạo và những trải nghiệm thật sau hơn hai thập kỷ gắn bó với truyền thông.
              </p>
              <p>
                Hy vọng những điều mình viết ra sẽ giúp bạn hiểu hơn về content, đi nhanh hơn với nghề, và giữ được cảm hứng trên con đường làm sáng tạo.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-primary/90 transition duration-300 group"
            >
              Tích luỹ kiến thức
              <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Cột hình ảnh */}
          <div className="flex justify-center">
            <img
              src="/images/nguyen-thuy-khanh-portrait.jpg"
              alt="Chân dung Nguyễn Thuỳ Khanh"
              className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover lg:max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};