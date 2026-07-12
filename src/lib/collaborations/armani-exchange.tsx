import Hero from "@/components/collaborations/armani-exchange/Hero";
import Manifesto from "@/components/collaborations/armani-exchange/Manifesto";
import Collection from "@/components/collaborations/armani-exchange/Collection";
import Materials from "@/components/collaborations/armani-exchange/Materials";
import EditorialCampaign from "@/components/collaborations/armani-exchange/EditorialCampaign";
import UrbanLiving from "@/components/collaborations/armani-exchange/UrbanLiving";
import Essentials from "@/components/collaborations/armani-exchange/Essentials";
import CampaignGallery from "@/components/collaborations/armani-exchange/CampaignGallery";
import FinalStatement from "@/components/collaborations/armani-exchange/FinalStatement";
import Footer from "@/components/collaborations/armani-exchange/Footer";

export default function ArmaniExchangePage() {
  return (
    <main className="overflow-x-hidden bg-black">

      <Hero />

      <Manifesto />

      <Collection />

      <Materials />

      <EditorialCampaign />

      <UrbanLiving />

      <Essentials />

      <CampaignGallery />

      <FinalStatement />

      <Footer />

    </main>
  );
}