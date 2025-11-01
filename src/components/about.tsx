import Image from "next/image";

export const About = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Cột hình ảnh */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/500x650/e2e8f0/333?text=Ảnh+toàn+thân"
            alt="Ảnh toàn thân Nhân Nguyễn"
            className="rounded-lg shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Cột văn bản */}
        <div className="md:order-first">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
            Nhân Nguyễn là ai?
          </h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              &quot;Không bao giờ được phép &apos;thôi kệ&apos; hay &apos;làm
              cho có&apos; với công việc mình đang làm&quot;
            </p>
            <p>
              Đó là kim chỉ nam trong suốt chặng đường 10 năm làm nghề của
              mình. Quan điểm &quot;sống có giá trị&quot; đã thôi thúc Nhân
              không ngừng học hỏi, làm việc và chia sẻ.
            </p>
            <p>
              Sharing Blog là nơi mình chia sẻ những kiến thức, trải nghiệm về
              Content, tư duy và các câu chuyện làm nghề. Mong rằng những nội
              dung này sẽ là nguồn tham khảo hữu ích và tiết kiệm thời gian cho
              bạn.
            </p>
          </div>
          <a
            href="#"
            className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Xem chi tiết câu chuyện
          </a>
        </div>
      </div>
    </section>
  );
};