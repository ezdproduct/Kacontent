import { PlayCircle } from "lucide-react";
import { Podcast } from "@/lib/types";

interface FeaturedPodcastCardProps {
  podcast: Podcast;
}

export const FeaturedPodcastCard = ({ podcast }: FeaturedPodcastCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group aspect-[16/9] lg:aspect-[2/1]">
      <img src={podcast.imgSrc} alt={podcast.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute top-4 right-4 bg-black/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
        {podcast.duration}
      </div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{podcast.title}</h3>
        <p className="text-sm opacity-80">{podcast.author}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
        <PlayCircle className="w-20 h-20 text-white" />
      </div>
    </div>
  );
};