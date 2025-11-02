export const Features = () => {
  const features = [
    {
      title: "Blog của tôi",
      description:
        "Nơi tôi chia sẻ về content, tư duy và các câu chuyện làm nghề. Những bài viết chuyên sâu, đúc kết từ hơn 20 năm kinh nghiệm thực chiến.",
      linkText: "Khám phá Blog",
      isMain: true,
    },
    {
      title: "Chia sẻ của tôi",
      description:
        "Các kiến thức, công cụ, Ebook... giúp bạn làm việc hiệu quả và sáng tạo hơn.",
      linkText: "Xem ngay",
    },
    {
      title: "Review của tôi",
      description:
        "Những trải nghiệm và đánh giá cá nhân về các sản phẩm, dịch vụ hữu ích.",
      linkText: "Xem ngay",
    },
  ];

  const mainFeature = features.find((f) => f.isMain);
  const otherFeatures = features.filter((f) => !f.isMain);

  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Bạn sẽ tìm thấy gì ở đây?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ba chuyên mục chính giúp bạn nâng cao kỹ năng và tư duy làm content.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Feature */}
          {mainFeature && (
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {mainFeature.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                {mainFeature.description}
              </p>
              <a
                href="#"
                className="font-semibold text-primary hover:underline mt-auto"
              >
                {mainFeature.linkText} &rarr;
              </a>
            </div>
          )}

          {/* Other Features */}
          <div className="grid grid-cols-1 gap-8">
            {otherFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="font-semibold text-primary hover:underline mt-auto"
                >
                  {feature.linkText} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};