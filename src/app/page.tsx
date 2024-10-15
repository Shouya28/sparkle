// app/page.tsx
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FrequentlyAsked";
import Footer from "@/components/Footer";
import AutoplayAudio from "@/components/AutoplayAudio";

export default function Home() {
    return (
        <>
            <AutoplayAudio />
            <Navbar />
            <HeroSection />
            <About />
            <ServicesSection />
            <Benefits />
            <Pricing />
            <FAQSection />
            <Footer />
        </>
    );
}
