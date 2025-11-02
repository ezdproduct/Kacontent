import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Rewind, Play, FastForward } from "lucide-react";

export const PodcastPlayer = () => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
      <h3 className="font-bold mb-4">Đang phát</h3>
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" alt="Bìa podcast" className="w-full rounded-lg aspect-video object-cover" />
      <div className="text-center mt-4">
        <h4 className="font-bold">Tư Duy Sáng Tạo</h4>
        <p className="text-sm text-muted-foreground">Khanh Nguyễn</p>
      </div>
      <div className="mt-4">
        <Progress value={33} className="h-1.5" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
          <span>15:10</span>
          <span>45:30</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button variant="ghost" size="icon">
          <Rewind className="w-5 h-5" />
        </Button>
        <Button size="lg" className="rounded-full w-14 h-14">
          <Play className="w-6 h-6 fill-current" />
        </Button>
        <Button variant="ghost" size="icon">
          <FastForward className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};