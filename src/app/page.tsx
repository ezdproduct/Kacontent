import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { LatestPosts } from "@/components/latest-posts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <LatestPosts />
      </main>
      <Footer />
    </div>
  );
}