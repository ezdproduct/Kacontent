"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Bot, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const chatOptions = [
    { icon: <Bot className="w-6 h-6" />, label: "Chat với Bot", href: "#" },
    { icon: <MessageSquare className="w-6 h-6" />, label: "Chat với Zalo", href: "#" },
    { icon: <Phone className="w-6 h-6" />, label: "Gọi điện thoại", href: "tel:+84901234567" },
  ];

  return (
    <TooltipProvider>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
        {/* Action Buttons */}
        <div
          className={cn(
            "flex flex-col items-center gap-3 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          {chatOptions.map((option) => (
            <Tooltip key={option.label}>
              <TooltipTrigger asChild>
                <Button asChild size="icon" className="rounded-full w-12 h-12 bg-card text-foreground shadow-lg hover:bg-muted">
                  <a href={option.href} target="_blank" rel="noopener noreferrer">
                    {option.icon}
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{option.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Main Toggle Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="rounded-full w-16 h-16 shadow-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>{isOpen ? "Đóng" : "Liên hệ"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};