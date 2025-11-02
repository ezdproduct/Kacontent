import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader } from "@/components/page-header";
import { Percent, Settings, Wallet, CheckCircle, BarChart, Award, Users } from "lucide-react";

// ... faqItems data

export default function AffiliatePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="animate-fade-in">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader 
              title="Tham gia chương trình Affiliate cùng KA Content"
              subtitle=""
            />
            {/* ... rest of hero */}
          </div>
        </section>
        {/* ... other sections */}
      </main>
      <Footer />
    </div>
  );
}