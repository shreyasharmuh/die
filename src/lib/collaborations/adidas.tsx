import Hero from "@/components/collaborations/adidas-originals/Hero";
import Manifesto from "@/components/collaborations/adidas-originals/Manifesto";
import Collection from "@/components/collaborations/adidas-originals/Collections";
import Materials from "@/components/collaborations/adidas-originals/Materials";
import Campaign from "@/components/collaborations/adidas-originals/campaign";
import Gallery from "@/components/collaborations/adidas-originals/gallery";
import Innovation from "@/components/collaborations/adidas-originals/Innovation";
import Archive from "@/components/collaborations/adidas-originals/Archive";
import Footer from "@/components/collaborations/adidas-originals/Footer";



export default function AdidasPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Hero />

      <Manifesto />

      <Collection />

      <Materials />

      <Campaign />

      <Gallery />

      <Innovation />

      <Archive />

      <Footer />

    </main>
  );
}