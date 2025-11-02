"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
    setFormData({ name: "", email: "", message: "" });
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Họ và tên</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tên của bạn"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Nội dung tin nhắn</Label>
                    <Textarea
                      id="message"
                      placeholder="Nội dung bạn muốn trao đổi..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">Gửi tin nhắn</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 mt-8 lg:mt-0">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">Gửi email cho chúng tôi để được hỗ trợ nhanh chóng.</p>
                    <a href="mailto:hello@kacontent.com" className="text-primary font-medium hover:underline">
                      hello@kacontent.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Điện thoại</h3>
                    <p className="text-muted-foreground">Liên hệ trực tiếp với chúng tôi qua số điện thoại.</p>
                    <a href="tel:+84901234567" className="text-primary font-medium hover:underline">
                      (+84) 90 123 4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Địa chỉ</h3>
                    <p className="text-muted-foreground">Ghé thăm văn phòng của chúng tôi tại:</p>
                    <p className="font-medium">
                      123 Đường ABC, Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12 lg:py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <CalendarDays className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-foreground">Đặt Lịch Tư Vấn 1:1</h2>
                    <p className="text-muted-foreground mt-4">
                        Nếu bạn cần tư vấn sâu hơn về chiến lược content hoặc các giải pháp marketing cho doanh nghiệp, hãy đặt lịch một buổi trao đổi trực tiếp với Khanh.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="#">Xem lịch và đặt hẹn</Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}