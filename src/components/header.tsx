"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuthButtons } from "./auth-buttons";
import { Button } from "./ui/button";
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
import { Separator } from "./ui/separator";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { href: string; label: string }[] = [
    { href: "/courses", label: "Khóa Học" },
    { href: "/resource", label: "Resource" },
    { href: "/blog", label: "Blog" },
    { href: "/podcast", label: "Podcast" },
    { href: "/affiliate", label: "Affiliate" },
    { href: "/contact", label: "Liên Hệ" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Đăng nhập/Đăng ký với số điện thoại:", phone);
    alert(`Đã gửi mã OTP đến số: ${phone}`);
  };

  return (
    <Dialog>
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 shadow-lg",
          isScrolled ? "bg-primary" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div 
                  className={cn(
                    "h-8 w-8 logo-mask transition-all duration-300",
                    isScrolled ? "bg-primary-foreground" : "bg-primary"
                  )}
                />
                <span className={cn(
                  "text-xl font-bold transition-colors duration-300",
                  isScrolled ? "text-primary-foreground" : "text-primary"
                )}>
                  KA Content
                </span>
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "font-bold transition-colors duration-300",
                    isScrolled ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons - Desktop */}
            <AuthButtons isScrolled={isScrolled} />

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                id="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "transition-colors duration-300",
                  isScrolled ? "text-primary-foreground" : "text-foreground"
                )}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden bg-background ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:bg-muted block px-3 py-2 rounded-md font-bold"
              >
                {link.label}
              </Link>
            ))}
            <Separator className="my-2" />
            <div className="px-3 pt-2 pb-3 space-y-2">
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full font-bold">Đăng nhập</Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button className="w-full font-bold">Đăng ký</Button>
              </DialogTrigger>
            </div>
          </div>
        </div>
      </nav>

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