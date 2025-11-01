import { BookOpen, Share2, Star } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Blog của tôi",
      description:
        "Nơi tôi chia sẻ về content, tư duy và các câu chuyện làm nghề.",
      link: "#",
    },
    {
      icon: <Share2 className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Chia sẻ của tôi",
      description:
        "Nơi tôi chia sẻ về các kiến thức, công cụ, Ebook... giúp bạn.",
      link: "#",
    },
    {
      icon: <Star className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Review của tôi",
      description:
        "Nơi tôi chia sẻ về những trải nghiệm cá nhân về các sản phẩm.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className="font-semibold text-blue-600 hover:underline"
              >
                Xem ngay &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};