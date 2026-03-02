import Hero from "@/components/About/Hero/Hero";
import BizKimizSection from "@/components/About/BizKimizSection/BizKimizSection";
import StatisticsBanner from "@/components/Home/StatisticsBanner/StatisticsBanner";
import NelerYapiyoruz from "@/components/About/NelerYapiyoruz/NelerYapiyoruz";
import UzmanEgitmenlerimiz from "@/components/About/UzmanEgitmenlerimiz/UzmanEgitmenlerimiz";
import CtaBanner from "@/components/About/CtaBanner/CtaBanner";
import BrandsCarousel from "@/components/Home/BrandsCarousel/BrandsCarousel";

export const metadata = {
    title: "Hakkımızda - E-Adam Akademi",
    description: "Dijital pazarlama dünyasında kadınların liderliğini güçlendiriyoruz.",
};

export default function Hakkimizda() {
    return (
        <>
            <Hero />
            <BizKimizSection />
            <StatisticsBanner />
            <NelerYapiyoruz />
            <UzmanEgitmenlerimiz />
            <BrandsCarousel />
            <CtaBanner />
        </>
    );
}
