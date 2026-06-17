import Hero from "@/components/prostituee/Hero";
import Statement from "@/components/prostituee/Statement";
import Gallery from "@/components/prostituee/Gallery";
import House from "@/components/prostituee/House";
import Manifesto from "@/components/prostituee/Manifesto";
import Journal from "@/components/prostituee/Journal";
import Footer from "@/components/prostituee/Footer";

export default function ProstitueePage() {
  return (
    <main className="bg-[#090909] overflow-x-hidden">

      <Hero />

      <Statement />

      <Gallery />

      <House />

      <Manifesto />

      <Journal />

      <Footer />

    </main>
  );
}