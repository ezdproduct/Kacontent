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
  { episodeNumber: "06", title: "Nghệ Thuật Kể Chuyện Trong Marketing", author: "Khanh Nguyễn", duration: "55:00 min", category: "Storytelling" },
  { episodeNumber: "05", title: "Xây Dựng Thương Hiệu Cá Nhân Bền Vững", author: "KA Content Team", duration: "35:15 min", category: "Branding" },
  { episodeNumber: "04", title: "Giải Mã Sáng Tạo: Ý Tưởng Từ Đâu Đến?", author: "Khanh Nguyễn", duration: "45:30 min", category: "Sáng tạo" },
  { episodeNumber: "03", title: "Bí Mật Thuật Toán Social Media 2025", author: "KA Content Team", duration: "48:20 min", category: "Social Media" },
  { episodeNumber: "02", title: "Tư Duy Chiến Lược Cho Người Làm Content", author: "Khanh Nguyễn", duration: "40:00 min", category: "Strategy" },
  { episodeNumber: "01", title: "Marketing Thực Chiến: Case Study Thành Công", author: "Guest Speaker", duration: "60:00 min", category: "Marketing" },
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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