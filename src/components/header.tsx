"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Khóa Học" },
    { href: "#", label: "Mẫu Content" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Liên Hệ" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="KaContent Logo" className="h-8 w-auto filter brightness-0 invert" />
              <span className="text-xl font-bold text-primary-foreground">KA Content</span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-background ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:bg-muted block px-3 py-2 rounded-md font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};