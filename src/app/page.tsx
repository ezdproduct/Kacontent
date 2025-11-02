import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { LatestPosts } from "@/components/latest-posts";
import { Footer } from "@/components/footer";
import { Achievements } from "@/components/achievements";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Achievements />
        <LatestPosts />
      </main>
      <Footer />
    </div>
  );
}