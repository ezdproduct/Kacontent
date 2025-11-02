"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export const CompanyIntro = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "bg-card p-8 rounded-2xl shadow-lg text-center max-w-4xl mx-auto transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">KA Content Digital Marketing Ltd.</h3>
          <p className="text-lg text-muted-foreground">
            <span className="font-extrabold text-primary text-3xl">20+</span> năm kinh nghiệm sáng lập & điều hành, chuyên tư vấn chiến lược nội dung và triển khai các chiến dịch truyền thông tích hợp, sáng tạo đa kênh.
          </p>
        </div>
      </div>
    </section>
  );
};