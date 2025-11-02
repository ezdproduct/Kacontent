"use client";

import * as React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar } from "@/components/ui/calendar";
import { CalendarEvent } from "@/lib/types";
import { format, isSameDay } from "date-fns";
import { Clock, MapPin, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

// Sample Data
const sampleEvents: CalendarEvent[] = [
  { id: 1, title: "Tư vấn 1:1 - Chiến lược Content TikTok", host: "Khanh Nguyễn", hostAvatar: "/images/nguyen-thuy-khanh-portrait.jpg", date: "2024-11-20", startTime: "10:00", endTime: "11:00", location: "Online - Google Meet", color: "bg-blue-100", textColor: "text-blue-800", borderColor: "border-blue-500" },
  { id: 2, title: "Workshop: Xây dựng Thương hiệu Cá nhân", host: "Khanh Nguyễn", hostAvatar: "/images/nguyen-thuy-khanh-portrait.jpg", date: "2024-11-20", startTime: "14:00", endTime: "16:00", location: "Văn phòng KA Content", color: "bg-cyan-100", textColor: "text-cyan-800", borderColor: "border-cyan-500" },
  { id: 3, title: "Tư vấn Doanh nghiệp - Gói Premium", host: "KA Content Team", hostAvatar: "https://i.pravatar.cc/150?img=10", date: "2024-11-22", startTime: "09:00", endTime: "12:00", location: "Online - Zoom", color: "bg-violet-100", textColor: "text-violet-800", borderColor: "border-violet-500" },
  { id: 4, title: "Tư vấn 1:1 - Tối ưu SEO cho Blog", host: "Khanh Nguyễn", hostAvatar: "/images/nguyen-thuy-khanh-portrait.jpg", date: "2024-11-22", startTime: "15:00", endTime: "16:00", location: "Online - Google Meet", color: "bg-blue-100", textColor: "text-blue-800", borderColor: "border-blue-500" },
  { id: 5, title: "Move from Graphic Designer to UX DESIGNER", host: "Ethan Graham", hostAvatar: "https://i.pravatar.cc/150?img=11", date: "2024-11-20", startTime: "16:00", endTime: "18:00", location: "Floor 6, 195 Dien Bien Phu, W15, Binh Thanh", color: "bg-amber-100", textColor: "text-amber-800", borderColor: "border-amber-500" },
];

const HOUR_HEIGHT = 80; // 80px per hour
const TIMELINE_START_HOUR = 8; // Timeline starts at 8 AM

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export default function BookingPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date("2024-11-20"));
  const [eventsForSelectedDay, setEventsForSelectedDay] = React.useState<CalendarEvent[]>([]);

  React.useEffect(() => {
    if (date) {
      const filtered = sampleEvents.filter(event => isSameDay(new Date(event.date), date));
      setEventsForSelectedDay(filtered.sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime)));
    }
  }, [date]);

  const timeLabels = Array.from({ length: 12 }, (_, i) => TIMELINE_START_HOUR + i);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Timeline */}
              <div className="lg:col-span-8 bg-card p-6 rounded-2xl shadow-lg border border-border">
                <div className="relative">
                  {/* Time Labels & Grid Lines */}
                  <div className="absolute left-0 top-0 bottom-0 w-full">
                    {timeLabels.map(hour => (
                      <div key={hour} className="relative text-right pr-4 border-t border-border" style={{ height: `${HOUR_HEIGHT}px` }}>
                        <span className="text-xs text-muted-foreground -top-2 relative mr-2">{hour}:00</span>
                      </div>
                    ))}
                  </div>
                  {/* Events */}
                  <div className="relative ml-12">
                    {eventsForSelectedDay.map(event => {
                      const top = (timeToMinutes(event.startTime) - TIMELINE_START_HOUR * 60) * (HOUR_HEIGHT / 60);
                      const height = (timeToMinutes(event.endTime) - timeToMinutes(event.startTime)) * (HOUR_HEIGHT / 60);
                      return (
                        <div
                          key={event.id}
                          className={cn("absolute w-full p-3 rounded-lg border-l-4 flex flex-col", event.color, event.borderColor, event.textColor)}
                          style={{ top: `${top}px`, height: `${height}px` }}
                        >
                          <p className="font-bold text-sm">{event.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            {event.hostAvatar ? <img src={event.hostAvatar} className="w-5 h-5 rounded-full object-cover" /> : <User className="w-4 h-4" />}
                            <span className="text-xs font-medium">{event.host}</span>
                          </div>
                          <div className="text-xs mt-auto space-y-1 opacity-70">
                            <div className="flex items-center"><Clock className="w-3 h-3 mr-1.5" /> {event.startTime} - {event.endTime}</div>
                            <div className="flex items-center"><MapPin className="w-3 h-3 mr-1.5" /> {event.location}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Calendar & Summary */}
              <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
                <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="p-0" />
                </div>
                <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
                  <h3 className="font-bold mb-4">Lịch hẹn ngày {date ? format(date, "dd/MM/yyyy") : ''}</h3>
                  <Separator className="mb-4" />
                  <div className="space-y-3">
                    {eventsForSelectedDay.length > 0 ? eventsForSelectedDay.map(event => (
                      <div key={event.id} className="flex items-start gap-3 text-sm">
                        <div className={cn("w-2 h-2 rounded-full mt-1.5 flex-shrink-0", event.color.replace('bg-', 'border-').replace('-100', '-500'), 'border-2')} />
                        <div>
                          <p className="font-semibold">{event.startTime}</p>
                          <p className="text-muted-foreground truncate">{event.title}</p>
                        </div>
                      </div>
                    )) : <p className="text-sm text-muted-foreground">Không có lịch hẹn nào.</p>}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}