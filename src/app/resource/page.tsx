"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResourceCard } from "@/components/resource-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Resource } from "@/lib/types";

const allResources: Resource[] = [
    { type: 'Template', imgSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", title: "Mẫu Bài Viết Blog Chuẩn SEO", category: "Content" },
    { type: 'Ebook', imgSrc: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop", title: "Bộ Prompt ChatGPT Cho Content Creator", author: "KA Content", category: "AI" },
    { type: 'Template', imgSrc: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop", title: "Mẫu Quy Trình Email Marketing", category: "Automation" },
    { type: 'Ebook', imgSrc: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop", title: "Bộ 30 Tiêu Đề 'Gây Sốt'", author: "KA Content", category: "Content" },
    { type: 'Template', imgSrc: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop", title: "Checklist Tự Động Hóa Fanpage", category: "Automation" },
    { type: 'Ebook', imgSrc: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop", title: "Hướng Dẫn Sử Dụng Midjourney", author: "KA Content", category: "AI" },
];

const allCategories = ["Tất cả", ...new Set(allResources.map((res) => res.category))];
const resourceTypes = ["Tất cả", "Template", "Ebook"];

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const Filters = ({ searchTerm, setSearchTerm, selectedType, setSelectedType, selectedCategory, setSelectedCategory }: FiltersProps) => (
  <div className="space-y-6">
    <div>
      <h3 className="font-bold mb-2">Tìm kiếm</h3>
      <Input placeholder="Tìm theo tên..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    <Separator />
    <div>
      <h3 className="font-bold mb-2">Loại tài nguyên</h3>
      <div className="flex flex-col gap-2">
        {resourceTypes.map((type) => (
          <Button key={type} variant={selectedType === type ? "default" : "ghost"} onClick={() => setSelectedType(type)} className="justify-start">{type}</Button>
        ))}
      </div>
    </div>
    <Separator />
    <div>
      <h3 className="font-bold mb-2">Danh mục</h3>
      <div className="flex flex-wrap gap-2">
        {allCategories.map((category) => (
          <Button key={category} size="sm" variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className="rounded-full">{category}</Button>
        ))}
      </div>
    </div>
  </div>
);

export default function ResourcePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Tất cả");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [filteredResources, setFilteredResources] = useState(allResources);
  const isMobile = useIsMobile();

  useEffect(() => {
    let resources = [...allResources];
    if (selectedType !== "Tất cả") {
      resources = resources.filter((res) => res.type === selectedType);
    }
    if (searchTerm) {
      resources = resources.filter((res) => res.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedCategory !== "Tất cả") {
      resources = resources.filter((res) => res.category === selectedCategory);
    }
    setFilteredResources(resources);
  }, [searchTerm, selectedType, selectedCategory]);

  const filterProps = { searchTerm, setSearchTerm, selectedType, setSelectedType, selectedCategory, setSelectedCategory };

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title="Kho Tài Nguyên Miễn Phí"
              subtitle="Tải xuống các mẫu content, kịch bản automation, và prompt AI được thiết kế để giúp bạn tăng tốc quy trình làm việc và nâng cao chất lượng nội dung."
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
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map((resource, index) => (
                      <ResourceCard key={index} resource={resource} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 border rounded-lg">
                    <h3 className="text-2xl font-bold">Không tìm thấy tài nguyên phù hợp</h3>
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