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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Course } from "@/lib/types";

const allCourses: Course[] = [
    { imgSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop", title: "TikTok Masterclass: Xây Dựng Kênh Triệu View", description: "Học cách xây dựng chiến lược nội dung, tạo video viral và tận dụng thuật toán TikTok...", price: 2499000, category: "Mạng xã hội" },
    { imgSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop", title: "Nghệ Thuật Copywriting", description: "Nắm vững các kỹ thuật viết quảng cáo, storytelling và tâm lý học khách hàng...", price: 1999000, category: "Viết quảng cáo" },
    { imgSrc: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop", title: "Chiến Lược Content Đa Kênh", description: "Xây dựng một hệ sinh thái nội dung bền vững từ blog, social media đến email marketing...", price: 3499000, category: "Chiến lược" },
    { imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", title: "Xây Dựng Thương Hiệu Cá Nhân", description: "Học cách định vị bản thân, xây dựng uy tín và lan tỏa giá trị của bạn...", price: 2999000, category: "Xây dựng thương hiệu" },
    { imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", title: "SEO Cho Người Viết", description: "Nắm vững các kỹ thuật SEO on-page, nghiên cứu từ khóa và xây dựng liên kết...", price: 1799000, category: "SEO" },
    { imgSrc: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop", title: "Quản Lý Mạng Xã Hội Chuyên Nghiệp", description: "Học cách lập kế hoạch, sản xuất nội dung, chạy quảng cáo và phân tích hiệu quả...", price: 2299000, category: "Mạng xã hội" },
];

const categories = ["all", ...new Set(allCourses.map((course) => course.category))];

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const Filters = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder, selectedCategory, setSelectedCategory }: FiltersProps) => (
  <div className="space-y-6">
    <div>
      <h3 className="font-bold mb-2">Tìm kiếm</h3>
      <Input placeholder="Tìm theo tên..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    <Separator />
    <div>
      <h3 className="font-bold mb-2">Sắp xếp theo</h3>
      <Select value={sortOrder} onValueChange={setSortOrder}>
        <SelectTrigger><SelectValue placeholder="Mặc định" /></SelectTrigger>
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
);

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const isMobile = useIsMobile();

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

  const filterProps = { searchTerm, setSearchTerm, sortOrder, setSortOrder, selectedCategory, setSelectedCategory };

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
            
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full mb-8"><Filter className="w-4 h-4 mr-2" />Lọc & Sắp xếp</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader><SheetTitle>Lọc & Sắp xếp</SheetTitle></SheetHeader>
                  <div className="py-8"><Filters {...filterProps} /></div>
                </SheetContent>
              </Sheet>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {!isMobile && (
                <aside className="md:col-span-1 md:sticky md:top-24 h-fit">
                  <Filters {...filterProps} />
                </aside>
              )}
              <div className={isMobile ? "col-span-1" : "md:col-span-3"}>
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