"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResourceCard } from "@/components/resource-card";
import { EbookCard, Ebook } from "@/components/ebook-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { FileText, Bot, Workflow } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const allTemplates = [
    { icon: <FileText className="w-8 h-8 text-primary" />, title: "Mẫu Bài Viết Blog Chuẩn SEO", description: "Template bài viết blog được tối ưu hóa cho SEO, giúp bạn dễ dàng leo top Google.", category: "Content", type: "Template" },
    { icon: <Workflow className="w-8 h-8 text-primary" />, title: "Mẫu Quy Trình Email Marketing", description: "Chuỗi email tự động để chào mừng người dùng mới, nuôi dưỡng khách hàng tiềm năng.", category: "Automation", type: "Template" },
    { icon: <Workflow className="w-8 h-8 text-primary" />, title: "Checklist Tự Động Hóa Fanpage", description: "Từng bước thiết lập chatbot và tin nhắn trả lời tự động để tiết kiệm thời gian.", category: "Automation", type: "Template" },
];

const allEbooks: Ebook[] = [
    { imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop", title: "Bộ Prompt ChatGPT Cho Content Creator", author: "KA Content", trending: true },
    { imgSrc: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop", title: "Bộ 30 Tiêu Đề 'Gây Sốt' Cho Mạng Xã Hội", author: "KA Content", trending: true },
    { imgSrc: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop", title: "Hướng Dẫn Sử Dụng Midjourney Tạo Ảnh", author: "KA Content", trending: true },
    { imgSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop", title: "Nghệ Thuật Kể Chuyện Bằng Hình Ảnh", author: "Khanh Nguyễn" },
    { imgSrc: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop", title: "Tối Ưu Hóa SEO On-page Toàn Diện", author: "KA Content Team" },
    { imgSrc: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop", title: "Xây Dựng Chiến Lược Email Marketing Hiệu Quả", author: "Khanh Nguyễn" },
];

const templateCategories = ["Tất cả", ...new Set(allTemplates.map((res) => res.category))];
const trendingEbooks = allEbooks.filter(ebook => ebook.trending);

export default function ResourcePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [filteredTemplates, setFilteredTemplates] = useState(allTemplates);

  useEffect(() => {
    let resources = [...allTemplates];
    if (searchTerm) {
      resources = resources.filter((res) => res.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedCategory !== "Tất cả") {
      resources = resources.filter((res) => res.category === selectedCategory);
    }
    setFilteredTemplates(resources);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <section className="pt-8 pb-12 lg:pt-12 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title="Kho Tài Nguyên Miễn Phí"
              subtitle="Tải xuống các mẫu content, kịch bản automation, và prompt AI được thiết kế để giúp bạn tăng tốc quy trình làm việc và nâng cao chất lượng nội dung."
            />
            
            <div className="space-y-16">
              {/* Template Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Kho Template</h2>
                <div className="mb-8">
                  <Input placeholder="Tìm kiếm template..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  <div className="flex flex-wrap gap-2 mt-4">
                    {templateCategories.map((category) => (
                      <Button key={category} variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)}>{category}</Button>
                    ))}
                  </div>
                </div>
                {filteredTemplates.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((resource, index) => (<ResourceCard key={index} resource={resource} />))}
                  </div>
                ) : (
                  <div className="text-center py-16"><h3 className="text-2xl font-bold">Không tìm thấy template phù hợp</h3><p className="text-muted-foreground mt-2">Vui lòng thử lại.</p></div>
                )}
              </div>

              <Separator />

              {/* Ebook Section */}
              <div className="space-y-12">
                <h2 className="text-3xl font-bold">Kho Ebook</h2>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ebook Nổi Bật</h3>
                  <Carousel opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent>
                      {trendingEbooks.map((ebook, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"><EbookCard ebook={ebook} /></CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Tất cả Ebook</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allEbooks.map((ebook, index) => (<EbookCard key={index} ebook={ebook} />))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}