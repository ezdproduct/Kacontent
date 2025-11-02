"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResourceCard } from "@/components/resource-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Bot, Workflow } from "lucide-react";

const allResources = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Mẫu Bài Viết Blog Chuẩn SEO",
      description: "Template bài viết blog được tối ưu hóa cho SEO, giúp bạn dễ dàng leo top Google với cấu trúc rõ ràng và các gợi ý từ khóa.",
      category: "Content",
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Bộ Prompt ChatGPT Cho Content Creator",
      description: "Hơn 50 prompt ChatGPT được thiết kế đặc biệt để sáng tạo tiêu đề, viết bài, lên ý tưởng kịch bản video và nhiều hơn nữa.",
      category: "AI",
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Mẫu Quy Trình Email Marketing Tự Động",
      description: "Chuỗi email tự động để chào mừng người dùng mới, nuôi dưỡng khách hàng tiềm năng và tăng tỷ lệ chuyển đổi.",
      category: "Automation",
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Bộ 30 Tiêu Đề 'Gây Sốt' Cho Mạng Xã Hội",
      description: "Các công thức tiêu đề đã được kiểm chứng, giúp bài viết của bạn thu hút hàng ngàn lượt tương tác trên Facebook, Instagram.",
      category: "Content",
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Checklist Tự Động Hóa Fanpage Facebook",
      description: "Từng bước thiết lập chatbot, tin nhắn trả lời tự động và các quy trình khác để tiết kiệm thời gian quản lý fanpage.",
      category: "Automation",
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Hướng Dẫn Sử Dụng Midjourney Tạo Ảnh Minh Họa",
      description: "Các câu lệnh và mẹo thực tế để bạn có thể tự tạo ra những hình ảnh minh họa độc đáo cho bài viết của mình bằng AI.",
      category: "AI",
    },
];

const categories = ["Tất cả", ...new Set(allResources.map((res) => res.category))];

export default function ResourcePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [filteredResources, setFilteredResources] = useState(allResources);

  useEffect(() => {
    let resources = allResources;

    if (searchTerm) {
      resources = resources.filter((res) =>
        res.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "Tất cả") {
      resources = resources.filter((res) => res.category === selectedCategory);
    }

    setFilteredResources(resources);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground">
                Kho Tài Nguyên Miễn Phí
              </h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Tải xuống các mẫu content, kịch bản automation, và prompt AI được thiết kế để giúp bạn tăng tốc quy trình làm việc và nâng cao chất lượng nội dung.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8">
              <Input
                placeholder="Tìm kiếm tài nguyên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-lg mx-auto"
              />
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold">Không tìm thấy tài nguyên phù hợp</h3>
                <p className="text-muted-foreground mt-2">Vui lòng thử lại với từ khóa hoặc danh mục khác.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}