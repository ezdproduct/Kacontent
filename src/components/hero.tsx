import Image from "next/image";
import { PartnerMarquee } from "./partner-marquee";

export const Hero = () => {
  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Cột văn bản */}
        <div>
          <span className="text-sm font-semibold text-blue-600 uppercase">
            KHANH LÀ NGUYỄN THUỲ KHANH
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Giúp Creator xây dựng content đa nền tảng
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Blog này là nơi mình chia sẻ về Content, tư duy và các câu chuyện
            làm nghề. Mong rằng những kiến thức, trải nghiệm được đúc kết này
            sẽ là nguồn tham khảo hữu ích và tiết kiệm thời gian cho bạn.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Tích luỹ kiến thức
          </a>
        </div>

        {/* Cột hình ảnh */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/500x600/e2e8f0/333?text=Chân+dung"
            alt="Chân dung Nguyễn Thuỳ Khanh"
            className="rounded-lg shadow-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
      
      {/* Phần Marquee được đặt ngoài grid để chiếm toàn bộ chiều rộng */}
      <PartnerMarquee />
    </header>
  );
};