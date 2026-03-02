import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopBanner from "@/components/Home/TopBanner/TopBanner";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import PreFooter from "@/components/PreFooter/PreFooter";
import BlogSection from "@/components/BlogSection/BlogSection";
import ReviewsSlider from "@/components/ReviewsSlider/ReviewsSlider";
import FeaturesGrid from "@/components/FeaturesGrid/FeaturesGrid";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Adam Akademi",
  description: "Türkiye'nin en kapsamlı dijital pazarlama akademisi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} antialiased`} style={{ fontFamily: 'var(--font-lexend), sans-serif' }}>
        <TopBanner />
        <Header />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <FeaturesGrid />
        <ReviewsSlider />
        <BlogSection />
        <PreFooter />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
