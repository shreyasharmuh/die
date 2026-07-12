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
import EditorialCampaign from "@/components/product/EditorialCampaign";

export default function EmporioArmaniPage() {
  return (
    <main className="overflow-x-hidden bg-white text-black">

      <Hero />

      <Manifesto />

        <EditorialFilm />

      <EditorialStory />

      <Lookbook />

      <Tailoring />

      <CampaignGallery />

      <Collection />

      <FinalStatement />

      <Footer />

    </main>
  );
}