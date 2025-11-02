import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { FloatingChatButton } from "@/components/floating-chat-button";
import { PasswordProtect } from "@/components/password-protect";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ka Content - Giao diện",
  description: "Giúp Creator xây dựng content đa nền tảng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <PasswordProtect>
          <NextTopLoader
            color="#0033FF"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
          />
          {children}
          <FloatingChatButton />
        </PasswordProtect>
      </body>
    </html>
  );
}