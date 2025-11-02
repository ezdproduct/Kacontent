"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";
import { CourseFilters } from "@/components/course-filters";
import { PageHeader } from "@/components/page-header";

// ... allCourses data
const allCourses = [
    {
      imgSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      title: "TikTok Masterclass: Xây Dựng Kênh Triệu View",
      description: "Học cách xây dựng chiến lược nội dung, tạo video viral và tận dụng thuật toán TikTok để phát triển thương hiệu cá nhân hoặc doanh nghiệp.",
      price: 2499000,
      category: "Social Media",
    },
    // ... other courses
];

const categories = ["all", ...new Set(allCourses.map((course) => course.category))];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    // ... filtering logic
  }, [searchTerm, selectedCategory, sortOrder]);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title="Các Khóa Học"
              subtitle="Nâng cấp kỹ năng content và marketing của bạn với các khóa học chuyên sâu, thực chiến từ KA Content."
            />
            <CourseFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
            {/* ... courses grid */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}