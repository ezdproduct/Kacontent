import { PlayCircle, Heart, Clock } from "lucide-react";
import { Podcast } from "@/lib/types";

interface PodcastCardProps {
  podcast: Podcast;
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden aspect-square">
        <img src={podcast.imgSrc} alt={podcast.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-white" />
        </div>
        <button className="absolute top-3 right-3 bg-black/30 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-3">
        <h4 className="font-bold truncate">{podcast.title}</h4>
        <p className="text-sm text-muted-foreground">{podcast.author}</p>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <Clock className="w-3 h-3 mr-1.5" />
          <span>{podcast.duration}</span>
        </div>
      </div>
    </div>
  );
};