"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PodcastCard } from "@/components/podcast-card";
import { PodcastPlayer } from "@/components/podcast-player";
import { Podcast } from "@/lib/types";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

const allPodcasts: Podcast[] = [
  { imgSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", title: "Nghệ Thuật Kể Chuyện Trong Marketing", author: "Khanh Nguyễn", duration: "55:00 min", category: "Storytelling" },
  { imgSrc: "https://images.unsplash.com/photo-1598214886806-2c88b8185447?q=80&w=1925&auto=format&fit=crop", title: "Xây Dựng Thương Hiệu Cá Nhân Bền Vững", author: "KA Content Team", duration: "35:15 min", category: "Branding" },
  { imgSrc: "https://images.unsplash.com/photo-1612073464778-42d3b74f7e3c?q=80&w=2070&auto=format&fit=crop", title: "Giải Mã Sáng Tạo: Ý Tưởng Từ Đâu Đến?", author: "Khanh Nguyễn", duration: "45:30 min", category: "Sáng tạo" },
  { imgSrc: "https://images.unsplash.com/photo-1558522195-e1a91193d04e?q=80&w=1974&auto=format&fit=crop", title: "Bí Mật Thuật Toán Social Media 2025", author: "KA Content Team", duration: "48:20 min", category: "Social Media" },
  { imgSrc: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1887&auto=format&fit=crop", title: "Tư Duy Chiến Lược Cho Người Làm Content", author: "Khanh Nguyễn", duration: "40:00 min", category: "Strategy" },
  { imgSrc: "https://images.unsplash.com/photo-1511377195490-52c1bcae3fe4?q=80&w=1887&auto=format&fit=crop", title: "Marketing Thực Chiến: Case Study Thành Công", author: "Guest Speaker", duration: "60:00 min", category: "Marketing" },
];

const categories = ["Tất cả", ...new Set(allPodcasts.map(p => p.category).filter((c): c is string => !!c))];

export default function PodcastPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [filteredPodcasts, setFilteredPodcasts] = useState(allPodcasts);

  useEffect(() => {
    if (selectedCategory === "Tất cả") {
      setFilteredPodcasts(allPodcasts);
    } else {
      setFilteredPodcasts(allPodcasts.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader 
          title="Khám phá Podcast"
          subtitle="Khám phá các kênh podcast về marketing, sáng tạo và phát triển bản thân."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPodcasts.map((podcast, index) => (
                <PodcastCard key={index} podcast={podcast} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24">
            <PodcastPlayer />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}