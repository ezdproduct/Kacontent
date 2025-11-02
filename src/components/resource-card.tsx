"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface Resource {
  type: 'Template' | 'Ebook';
  title: string;
  description?: string;
  category: string;
  imgSrc: string;
  author?: string;
}

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Gửi tài liệu "${resource.title}" đến Zalo số: ${phone}`);
    alert("Yêu cầu đã được gửi! Vui lòng kiểm tra Zalo của bạn trong vài phút tới.");
    // Here you would typically close the dialog, which happens automatically
    // if the DialogTrigger is not inside the form.
  };

  return (
    <Dialog>
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
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Tải về
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nhận tài liệu qua Zalo</DialogTitle>
          <DialogDescription>
            Vui lòng nhập số điện thoại của bạn. Hệ thống của chúng tôi sẽ tự động gửi tài liệu <span className="font-bold">"{resource.title}"</span> qua Zalo cho bạn.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Số điện thoại
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09xxxxxxxx"
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Gửi tài liệu</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};