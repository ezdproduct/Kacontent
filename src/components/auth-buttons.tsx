"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";

interface AuthButtonsProps {
  isScrolled: boolean;
}

export const AuthButtons = ({ isScrolled }: AuthButtonsProps) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tạm thời chỉ log ra console, sau này sẽ tích hợp logic gửi OTP
    console.log("Đăng nhập/Đăng ký với số điện thoại:", phone);
    alert(`Đã gửi mã OTP đến số: ${phone}`);
  };

  return (
    <Dialog>
      <div className="hidden md:flex items-center space-x-2">
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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đăng nhập hoặc Đăng ký</DialogTitle>
          <DialogDescription>
            Nhập số điện thoại của bạn để tiếp tục. Chúng tôi sẽ gửi cho bạn một mã OTP để xác thực.
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
            <Button type="submit">Gửi mã OTP</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};