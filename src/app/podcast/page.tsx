import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturedPodcastCard } from "@/components/featured-podcast-card";
import { PodcastCard } from "@/components/podcast-card";
import { PodcastPlayer } from "@/components/podcast-player";
import { Podcast } from "@/lib/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Clock, Headset, Book, Smile, MoreHorizontal } from "lucide-react";

const trendingThisWeek: Podcast = {
  imgSrc: "https://images.unsplash.com/photo-1612073464778-42d3b74f7e3c?q=80&w=2070&auto=format&fit=crop",
  title: "Good Life Project",
  author: "Elizabeth Gilbert",
  duration: "50:00 min",
};

const trendingPodcasts: Podcast[] = [
  { imgSrc: "https://images.unsplash.com/photo-1598214886806-2c88b8185447?q=80&w=1925&auto=format&fit=crop", title: "Earn Your Happy", author: "Lori Harder", duration: "1 hr 50 min" },
  { imgSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", title: "The Mind Your Business", author: "James Wedmore", duration: "30:25 min" },
  { imgSrc: "https://images.unsplash.com/photo-1558522195-e1a91193d04e?q=80&w=1974&auto=format&fit=crop", title: "The Art of Charm", author: "AJ Johnny", duration: "58:00 min" },
];

export default function PodcastPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Discover Podcasts</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Trending this week */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Trending this week</h2>
              <FeaturedPodcastCard podcast={trendingThisWeek} />
            </section>

            {/* Trending podcasts in... */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Trending podcasts in Inspiration</h2>
              </div>
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent>
                  {trendingPodcasts.map((podcast, index) => (
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