import Image from "next/image";

export const About = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Cột hình ảnh */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/500x650/e2e8f0/333?text=Ảnh+toàn+thân"
            alt="Ảnh toàn thân Nguyễn Thùy Khanh"
            className="rounded-lg shadow-xl w-full max-w-md object-cover"
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
            className="mt-8 inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-primary/90 transition duration-300"
          >
            Xem chi tiết câu chuyện
          </a>
        </div>
      </div>
    </section>
  );
};