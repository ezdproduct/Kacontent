import { Podcast } from "@/lib/types";
import { Mic } from "lucide-react";

interface PodcastCardProps {
  podcast: Podcast;
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div
        className={`relative rounded-2xl overflow-hidden aspect-square p-6 flex flex-col justify-between text-foreground transition-all duration-300 group-hover:scale-105 ${podcast.bgColor}`}
      >
        {/* Abstract shapes */}
        <div className={`absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full ${podcast.bgColor === 'bg-yellow-400' ? 'bg-yellow-500/50' : podcast.bgColor === 'bg-blue-500' ? 'bg-blue-600/50' : 'bg-orange-500/50'} opacity-50 blur-2xl`} />
        <div className={`absolute -top-1/4 -left-1/4 w-2/3 h-2/3 rounded-full ${podcast.bgColor === 'bg-yellow-400' ? 'bg-yellow-300/50' : podcast.bgColor === 'bg-blue-500' ? 'bg-blue-400/50' : 'bg-orange-300/50'} opacity-50 blur-2xl`} />

        <div className="flex justify-end z-10">
          <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center">
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