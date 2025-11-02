import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface Resource {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg p-6 flex flex-col group border border-border hover:border-primary transition-colors">
      <div className="flex items-center justify-between mb-4">
        {resource.icon}
        <span className="text-xs font-semibold bg-muted px-2 py-1 rounded-full">{resource.category}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{resource.title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-3 flex-grow mb-4">
        {resource.description}
      </p>
      <Button variant="outline" className="mt-auto">
        <Download className="w-4 h-4 mr-2" />
        Tải về
      </Button>
    </div>
  );
};