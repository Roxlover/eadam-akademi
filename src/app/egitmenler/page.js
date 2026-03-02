import Hero from "@/components/Egitmenler/Hero/Hero";
import Statistics from "@/components/Egitmenler/Statistics/Statistics";
import EgitmenlerList from "@/components/Egitmenler/EgitmenlerList/EgitmenlerList";
import CtaBanner from "@/components/Egitmenler/CtaBanner/CtaBanner";

export const metadata = {
    title: "Uzman Eğitmenlerimiz - E-Adam Akademi",
    description: "Sektörün öncü isimlerinden, deneyim odaklı ve interaktif eğitimlerle kariyerinizi zirveye taşıyın.",
};

export default function Egitmenler() {
    return (
        <main>
            <Hero />
            <Statistics />
            <EgitmenlerList />
            <CtaBanner />
        </main>
    );
}
