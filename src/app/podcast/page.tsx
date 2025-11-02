"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedPodcastCard } from "@/components/featured-podcast-card";
import { PodcastCard } from "@/components/podcast-card";
import { PodcastPlayer } from "@/components/podcast-player";
import { Podcast } from "@/lib/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

const trendingThisWeek: Podcast = {
  imgSrc: "https://images.unsplash.com/photo-1612073464778-42d3b74f7e3c?q=80&w=2070&auto=format&fit=crop",
  title: "Content Sáng Tạo: Từ Ý Tưởng Đến Thực Thi",
  author: "Khanh Nguyễn",
  duration: "45:30 min",
  category: "Sáng tạo",
};

const allPodcasts: Podcast[] = [
  { imgSrc: "https://images.unsplash.com/photo-1598214886806-2c88b8185447?q=80&w=1925&auto=format&fit=crop", title: "Xây Dựng Thương Hiệu Cá Nhân", author: "KA Content Team", duration: "35:15 min", category: "Branding" },
  { imgSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", title: "Nghệ Thuật Kể Chuyện Trong Marketing", author: "Khanh Nguyễn", duration: "55:00 min", category: "Storytelling" },
  { imgSrc: "https://images.unsplash.com/photo-1558522195-e1a91193d04e?q=80&w=1974&auto=format&fit=crop", title: "Tối Ưu Hóa Social Media 2025", author: "KA Content Team", duration: "48:20 min", category: "Social Media" },
  { imgSrc: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1887&auto=format&fit=crop", title: "Tư Duy Sáng Tạo", author: "Khanh Nguyễn", duration: "40:00 min", category: "Sáng tạo" },
  { imgSrc: "https://images.unsplash.com/photo-1511377195490-52c1bcae3fe4?q=80&w=1887&auto=format&fit=crop", title: "Podcast Về Cuộc Sống", author: "Guest Speaker", duration: "30:00 min", category: "Lifestyle" },
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
          <div className="lg:col-span-2 space-y-12">
            {/* Trending this week */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Nổi bật tuần này</h2>
              <FeaturedPodcastCard podcast={trendingThisWeek} />
            </section>

            {/* Trending podcasts in... */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Podcast thịnh hành</h2>
              </div>
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {filteredPodcasts.map((podcast, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <PodcastCard podcast={podcast} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </section>
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