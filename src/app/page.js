import Hero from "@/components/Home/Hero/Hero";
import StatisticsBanner from "@/components/Home/StatisticsBanner/StatisticsBanner";
import Instructors from "@/components/Home/Instructors/Instructors";
import Courses from "@/components/Home/Courses/Courses";
import BrandsCarousel from "@/components/Home/BrandsCarousel/BrandsCarousel";
import AboutSection from "@/components/Home/AboutSection/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatisticsBanner />
      <Instructors />
      <Courses />
      <AboutSection />
      <BrandsCarousel />
    </>
  );
}
