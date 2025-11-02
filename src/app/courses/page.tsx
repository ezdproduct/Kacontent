"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const allCourses = [
    {
      imgSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
      title: "TikTok Masterclass: Xây Dựng Kênh Triệu View",
      description: "Học cách xây dựng chiến lược nội dung, tạo video viral và tận dụng thuật toán TikTok để phát triển thương hiệu cá nhân hoặc doanh nghiệp.",
      price: 2499000,
      category: "Mạng xã hội",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
      title: "Nghệ Thuật Copywriting: Viết Content Chạm Đến Cảm Xúc",
      description: "Nắm vững các kỹ thuật viết quảng cáo, storytelling và tâm lý học khách hàng để tạo ra những nội dung có sức thuyết phục cao.",
      price: 1999000,
      category: "Viết quảng cáo",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
      title: "Chiến Lược Content Đa Kênh Toàn Diện",
      description: "Xây dựng một hệ sinh thái nội dung bền vững từ blog, social media đến email marketing để thu hút và giữ chân khách hàng.",
      price: 3499000,
      category: "Chiến lược",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      title: "Xây Dựng Thương Hiệu Cá Nhân Cho Chuyên Gia",
      description: "Học cách định vị bản thân, xây dựng uy tín và lan tỏa giá trị của bạn để trở thành một chuyên gia có tầm ảnh hưởng trong ngành.",
      price: 2999000,
      category: "Xây dựng thương hiệu",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      title: "SEO Cho Người Viết: Tối Ưu Hóa Bài Viết Lên Top Google",
      description: "Nắm vững các kỹ thuật SEO on-page, nghiên cứu từ khóa và xây dựng liên kết để đưa nội dung của bạn đến với hàng triệu người dùng.",
      price: 1799000,
      category: "SEO",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop",
      title: "Quản Lý Mạng Xã Hội Chuyên Nghiệp",
      description: "Học cách lập kế hoạch, sản xuất nội dung, chạy quảng cáo và phân tích hiệu quả trên các nền tảng Facebook, Instagram, LinkedIn.",
      price: 2299000,
      category: "Mạng xã hội",
    },
];

const categories = ["all", ...new Set(allCourses.map((course) => course.category))];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    let courses = [...allCourses];

    if (searchTerm) {
      courses = courses.filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedCategory !== "all") {
      courses = courses.filter((course) => course.category === selectedCategory);
    }
    if (sortOrder === "price-asc") {
      courses.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      courses.sort((a, b) => b.price - a.price);
    }
    setFilteredCourses(courses);
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
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="md:col-span-1 md:sticky md:top-24 h-fit">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-2">Tìm kiếm</h3>
                    <Input placeholder="Tìm theo tên..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-bold mb-2">Sắp xếp theo</h3>
                    <Select value={sortOrder} onValueChange={setSortOrder}>
                      <SelectTrigger>
                        <SelectValue placeholder="Mặc định" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Mặc định</SelectItem>
                        <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                        <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-bold mb-2">Danh mục</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button key={category} size="sm" variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className="rounded-full">
                          {category === 'all' ? 'Tất cả' : category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className="md:col-span-3">
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredCourses.map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 border rounded-lg">
                    <h3 className="text-2xl font-bold">Không tìm thấy khóa học phù hợp</h3>
                    <p className="text-muted-foreground mt-2">Vui lòng thử lại với bộ lọc khác.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}