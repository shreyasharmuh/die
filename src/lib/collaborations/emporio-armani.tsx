import Hero from "@/components/collaborations/emporio-armani/Hero";
import Manifesto from "@/components/collaborations/emporio-armani/Manifesto";
import EditorialFilm from "@/components/collaborations/emporio-armani/EditorialFilm";
import EditorialStory from "@/components/collaborations/emporio-armani/EditorialStory";
import Lookbook from "@/components/collaborations/emporio-armani/Lookbook";
import Tailoring from "@/components/collaborations/emporio-armani/Tailoring";
import CampaignGallery from "@/components/collaborations/emporio-armani/CampaignGallery";
import Collection from "@/components/collaborations/emporio-armani/Collection";
import FinalStatement from "@/components/collaborations/emporio-armani/FinalStatement";
import Footer from "@/components/collaborations/emporio-armani/Footer";

export default function EmporioArmaniPage() {
  return (
    <main className="overflow-x-hidden bg-white text-black">

      {/* Hero Video */}
      <Hero />

      {/* Brand Manifesto */}
      <Manifesto />

      {/* Cinematic Editorial Film */}
      <EditorialFilm />

      {/* Editorial Story */}
      <EditorialStory />

      {/* Lookbook */}
      <Lookbook />

      {/* Tailoring Philosophy */}
      <Tailoring />

      {/* Campaign Archive */}
      <CampaignGallery />

      {/* Collection */}
      <Collection />

      {/* Closing Film */}
      <FinalStatement />

      {/* Footer */}
      <Footer />

    </main>
  );
}