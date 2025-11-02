"use client";

import * as React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Calendar } from "@/components/ui/calendar";
import { CalendarEvent } from "@/lib/types";
import { format, isSameDay } from "date-fns";
import { Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample Data
const sampleEvents: CalendarEvent[] = [
  { id: 1, title: "Tư vấn 1:1 - Chiến lược Content TikTok", host: "Khanh Nguyễn", date: "2024-11-20", startTime: "10:00", endTime: "11:00", location: "Online - Google Meet", color: "bg-blue-100", textColor: "text-blue-800", borderColor: "border-blue-500" },
  { id: 2, title: "Workshop: Xây dựng Thương hiệu Cá nhân", host: "Khanh Nguyễn", date: "2024-11-20", startTime: "14:00", endTime: "16:00", location: "Văn phòng KA Content", color: "bg-green-100", textColor: "text-green-800", borderColor: "border-green-500" },
  { id: 3, title: "Tư vấn Doanh nghiệp - Gói Premium", host: "KA Content Team", date: "2024-11-22", startTime: "09:00", endTime: "12:00", location: "Online - Zoom", color: "bg-purple-100", textColor: "text-purple-800", borderColor: "border-purple-500" },
  { id: 4, title: "Tư vấn 1:1 - Tối ưu SEO cho Blog", host: "Khanh Nguyễn", date: "2024-11-22", startTime: "15:00", endTime: "16:00", location: "Online - Google Meet", color: "bg-blue-100", textColor: "text-blue-800", borderColor: "border-blue-500" },
];

const HOUR_HEIGHT = 80; // 80px per hour
const TIMELINE_START_HOUR = 8; // Timeline starts at 8 AM
const TIMELINE_END_HOUR = 19; // Timeline ends at 7 PM

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
      setEventsForSelectedDay(filtered);
    }
  }, [date]);

  const timeLabels = Array.from({ length: TIMELINE_END_HOUR - TIMELINE_START_HOUR + 1 }, (_, i) => TIMELINE_START_HOUR + i);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title="Đặt Lịch Tư Vấn"
              subtitle="Chọn một ngày trong lịch để xem các khung giờ còn trống và đặt lịch tư vấn 1:1 trực tiếp với Khanh."
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Timeline */}
              <div className="lg:col-span-2 bg-card p-6 rounded-2xl shadow-lg border border-border">
                <div className="relative">
                  {/* Time Labels */}
                  <div className="absolute left-0 top-0 bottom-0">
                    {timeLabels.map(hour => (
                      <div key={hour} className="relative text-right pr-4" style={{ height: `${HOUR_HEIGHT}px` }}>
                        <span className="text-xs text-muted-foreground -top-2 relative">{hour}:00</span>
                      </div>
                    ))}
                  </div>
                  {/* Events */}
                  <div className="relative ml-16">
                    {eventsForSelectedDay.map(event => {
                      const top = (timeToMinutes(event.startTime) - TIMELINE_START_HOUR * 60) * (HOUR_HEIGHT / 60);
                      const height = (timeToMinutes(event.endTime) - timeToMinutes(event.startTime)) * (HOUR_HEIGHT / 60);
                      return (
                        <div
                          key={event.id}
                          className={cn("absolute w-full p-4 rounded-lg border-l-4", event.color, event.borderColor, event.textColor)}
                          style={{ top: `${top}px`, height: `${height}px` }}
                        >
                          <p className="font-bold">{event.title}</p>
                          <p className="text-sm font-medium">{event.host}</p>
                          <div className="text-xs mt-2 space-y-1">
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
              <aside className="lg:sticky lg:top-24 h-fit space-y-6">
                <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="p-0"
                  />
                </div>
                <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
                  <h3 className="font-bold mb-4">Lịch hẹn ngày {date ? format(date, "dd/MM/yyyy") : ''}</h3>
                  <div className="space-y-3">
                    {eventsForSelectedDay.length > 0 ? eventsForSelectedDay.map(event => (
                      <div key={event.id} className="flex items-start gap-3 text-sm">
                        <div className={cn("w-2 h-2 rounded-full mt-1.5", event.color.replace('bg-', 'border-').replace('-100', '-500'), 'border-2')} />
                        <div>
                          <p className="font-semibold">{event.startTime} - {event.endTime}</p>
                          <p className="text-muted-foreground">{event.title}</p>
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