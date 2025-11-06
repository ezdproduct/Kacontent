import { Podcast } from "@/lib/types";
import { Mic } from "lucide-react";

interface PodcastCardProps {
  podcast: Podcast;
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div
        className="relative rounded-2xl overflow-hidden aspect-square p-6 flex flex-col justify-between text-primary-foreground transition-all duration-300 group-hover:scale-105 bg-gradient-to-br from-primary to-muted"
      >
        <div className="flex justify-end z-10">
          <div className="w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center">
            <Mic className="w-4 h-4" />
          </div>
        </div>
        <div className="z-10">
          <p className="text-xs font-bold uppercase tracking-widest">Podcast</p>
          <p className="text-4xl font-extrabold">EP {podcast.episodeNumber}</p>
        </div>
      </div>
      <div className="mt-3">
        <h4 className="font-bold truncate">{podcast.title}</h4>
        <p className="text-sm text-muted-foreground">{podcast.author}</p>
      </div>
    </div>
  );
};