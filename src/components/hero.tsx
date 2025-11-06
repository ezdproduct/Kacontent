import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="pt-8 pb-12 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Cột văn bản */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
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
            <Button asChild size="lg" className="group">
              <Link href="#">
                Tích luỹ kiến thức
                <MoveRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Cột hình ảnh */}
          <div className="flex justify-end">
            <img
              src="/images/nguyen-thuy-khanh-portrait.jpg"
              alt="Chân dung Nguyễn Thuỳ Khanh"
              className="rounded-2xl shadow-xl w-auto h-auto lg:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};