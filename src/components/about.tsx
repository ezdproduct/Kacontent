import Image from "next/image";
import { MoveRight } from "lucide-react";

export const About = () => {
  return (
    <section className="py-12 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Cột hình ảnh */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Một người đang làm việc trên laptop"
              className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover lg:max-h-[500px]"
            />
          </div>

          {/* Cột văn bản */}
          <div className="md:order-first">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Về Nguyễn Thùy Khanh
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Mình là Nguyễn Thùy Khanh — người sáng lập KA Content.
              </p>
              <p>
                Sau hơn 20 năm làm việc trong ngành quảng cáo và truyền thông, mình nhận ra một điều: nội dung chỉ thật sự mạnh mẽ khi nó được dẫn dắt bởi tư duy chiến lược.
              </p>
              <p>
                Mình giúp doanh nghiệp và đội ngũ của bạn nhìn thấy rõ mục tiêu, kể câu chuyện thương hiệu một cách mạch lạc — để mỗi nội dung không chỉ “hay”, mà còn “hiệu quả”.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-primary/90 transition duration-300 group"
            >
              Xem chi tiết câu chuyện
              <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};