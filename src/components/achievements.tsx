"use client";

import { AnimatedCounter } from "./animated-counter";

export const Achievements = () => {
  const achievementsData = [
    { end: 20, suffix: "+", title: "Năm kinh nghiệm", description: "Truyền thông quảng cáo, Chuyên viên/Giám đốc Sáng tạo tại các agency hàng đầu." },
    { end: 25, suffix: "+", title: "Chiến dịch lớn", description: "Triển khai cho 50+ thương hiệu lớn như Unilever, PepsiCo, Lazada..." },
    { end: 5, suffix: "+", title: "Cuộc thi", description: "Giám khảo chuyên môn các cuộc thi Truyền thông & Sáng tạo." },
    { end: 97, suffix: "K+", title: "Thành viên", description: "Sáng lập & Admin cộng đồng 'Content khó lờ idea'." },
  ];

  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Hành Trình & Thành Tựu
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Kinh nghiệm thực chiến và những dấu ấn trong ngành truyền thông quảng cáo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <AnimatedCounter end={item.end} suffix={item.suffix} />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};