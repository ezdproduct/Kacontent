import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface Resource {
  type: 'Template' | 'Ebook';
  title: string;
  description?: string; // Make description optional for Ebooks
  category: string;
  imgSrc: string;
  author?: string;
}

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <img src={resource.imgSrc} alt={resource.title} className="rounded-md object-cover w-full h-full" />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription className="mt-1">
          {resource.type === 'Ebook' ? resource.author : resource.category}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Download className="w-4 h-4 mr-2" />
          Tải về
        </Button>
      </CardFooter>
    </Card>
  );
};