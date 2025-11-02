import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface Ebook {
  imgSrc: string;
  title: string;
  author: string;
  trending?: boolean;
}

interface EbookCardProps {
  ebook: Ebook;
}

export const EbookCard = ({ ebook }: EbookCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <img src={ebook.imgSrc} alt={ebook.title} className="rounded-md object-cover w-full h-full" />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle>{ebook.title}</CardTitle>
        <CardDescription className="mt-1">{ebook.author}</CardDescription>
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