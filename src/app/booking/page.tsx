"use client";

import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Calendar } from "@/components/ui/calendar";
import { CalendarEvent } from "@/types";
import { format, isSameDay } from "date-fns";
import { Clock, MapPin, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/page-header";

// ... rest of the file