"use client";

import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface AuthButtonsProps {
  isScrolled: boolean;
}

export const AuthButtons = ({ isScrolled }: AuthButtonsProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-2">
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "font-bold transition-colors duration-300",
            isScrolled
              ? "text-primary-foreground/80 hover:text-primary-foreground"
              : "text-foreground hover:text-primary"
          )}
        >
          Đăng nhập
        </Button>
      </DialogTrigger>
      <DialogTrigger asChild>
        <Button className="font-bold">Đăng ký</Button>
      </DialogTrigger>
    </div>
  );
};