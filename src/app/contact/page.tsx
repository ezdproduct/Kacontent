"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function ContactPage() {
  // ... form logic

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title="Liên Hệ"
              subtitle="Chúng tôi luôn sẵn sàng lắng nghe! Hãy gửi cho chúng tôi một tin nhắn và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể."
            />
            {/* ... contact form and info */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}