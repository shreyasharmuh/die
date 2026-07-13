import Hero from "@/components/prostituee/Hero";
import Philosophy from "@/components/prostituee/Philosophy";
import Collection from "@/components/prostituee/Collection";
import CampaignEditorial from "@/components/prostituee/CampaignEditorial";
import Journal from "@/components/prostituee/Journal";
import FinalStatement from "@/components/prostituee/FinalStatement";
import Footer from "@/components/prostituee/Footer";

export default function ProstitueePage() {
  return (
    <main className="overflow-x-hidden bg-[#faf8f5] text-black">

      <Hero />

      <Philosophy />

      <Collection />

      <CampaignEditorial />

      <Journal />

      <FinalStatement />

      <Footer />

    </main>
  );
}