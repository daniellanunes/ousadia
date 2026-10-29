import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Portfolio from "@/components/Portfolio";
import Selos from "@/components/Selos";
import Studio from "@/components/Studio";
import Process from "@/components/Process";
import Safety from "@/components/Safety";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <RevealOnScroll />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Advantages />
        <Portfolio />
        <Selos />
        <Studio />
        <Process />
        <Safety />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
