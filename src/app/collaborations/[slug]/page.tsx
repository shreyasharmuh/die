import { notFound } from "next/navigation";
import { collaborations } from "@/data/collaborations";

/* ===========================
   CALVIN KLEIN
=========================== */

import CKHero from "@/components/collaborations/calvin-klein/Hero";
import CKIntro from "@/components/collaborations/calvin-klein/Intro";
import CKCampaignGallery from "@/components/collaborations/calvin-klein/CampaignGallery";
import CKCategories from "@/components/collaborations/calvin-klein/Categories";
import CKEditorialSpread from "@/components/collaborations/calvin-klein/EditorialSpread";

/* ===========================
   ADIDAS ORIGINALS
=========================== */

import AdidasHero from "@/components/collaborations/adidas-originals/Hero";
import AdidasManifesto from "@/components/collaborations/adidas-originals/Manifesto";
import AdidasGallery from "@/components/collaborations/adidas-originals/Gallery";
import AdidasFutureArchive from "@/components/collaborations/adidas-originals/FutureArchive";
import AdidasTheNewUniform from "@/components/collaborations/adidas-originals/TheNewUniform";
import AdidasArchiveAccess from "@/components/collaborations/adidas-originals/ArchiveAccess";

/* ===========================
   OFF-WHITE™
=========================== */

import OffWhiteHero from "@/components/collaborations/off-white/Hero";
import OffWhiteArchiveManifesto from "@/components/collaborations/off-white/ArchiveManifesto";
import OffWhiteResearchSystem from "@/components/collaborations/off-white/ResearchSystem";
import OffWhiteArchiveIndex from "@/components/collaborations/off-white/ArchiveIndex";
import OffWhiteArchiveGrid from "@/components/collaborations/off-white/ArchiveGrid";
import OffWhiteReferences from "@/components/collaborations/off-white/References";
import OffWhiteFooter from "@/components/collaborations/off-white/Footer";

/* ===========================
   BALENCIAGA
=========================== */

import BalenciagaHero from "@/components/collaborations/balenciaga/Hero";
import BalenciagaManifesto from "@/components/collaborations/balenciaga/Manifesto";
import BalenciagaTheNewUniform from "@/components/collaborations/balenciaga/TheNewUniform";
import BalenciagaRunwayArchive from "@/components/collaborations/balenciaga/RunwayArchive";
import BalenciagaEditorialCampaign from "@/components/collaborations/balenciaga/EditorialCampaign";
import BalenciagaObjects from "@/components/collaborations/balenciaga/Objects";
import BalenciagaFooter from "@/components/collaborations/balenciaga/Footer";

/* ===========================
   SAINT LAURENT
=========================== */

import SaintLaurentHero from "@/components/collaborations/saint-laurent/Hero";
import SaintLaurentManifesto from "@/components/collaborations/saint-laurent/Manifesto";
import SaintLaurentBeautyCodes from "@/components/collaborations/saint-laurent/BeautyCodes";
import SaintLaurentEditorialCampaign from "@/components/collaborations/saint-laurent/EditorialCampaign";
import SaintLaurentAtelierNotes from "@/components/collaborations/saint-laurent/AtelierNotes";
import SaintLaurentObjectsOfDesire from "@/components/collaborations/saint-laurent/ObjectsOfDesire";
import SaintLaurentFooter from "@/components/collaborations/saint-laurent/Footer";

/* ===========================
   BALMAIN
=========================== */

import BalmainHero from "@/components/collaborations/balmain/Hero";
import BalmainManifesto from "@/components/collaborations/balmain/Manifesto";
import RunwayLooks from "@/components/collaborations/balmain/RunwayLooks";
import HouseCodes from "@/components/collaborations/balmain/HouseCodes";
import Craftsmanship from "@/components/collaborations/balmain/Craftsmanship";
import Atelier from "@/components/collaborations/balmain/Atelier";
import SignatureDetails from "@/components/collaborations/balmain/SignatureDetails";
import EditorialStory from "@/components/collaborations/balmain/EditorialStory";
import StyleGuide from "@/components/collaborations/balmain/StyleGuide";
import Finale from "@/components/collaborations/balmain/Finale";

/* -----------------------------------
DIE × EA7 EMPORIO ARMANI
----------------------------------- */

import EA7Hero from "@/components/collaborations/ea7/Hero";
import Philosophy from "@/components/collaborations/ea7/Philosophy";
import Categories from "@/components/collaborations/ea7/Categories";
import Innovation from "@/components/collaborations/ea7/Innovation";
import Editorial from "@/components/collaborations/ea7/Editorial";
import TheUniform from "@/components/collaborations/ea7/TheUniform";
import PerformanceObjects from "@/components/collaborations/ea7/PerformanceObjects";
import AthleteSystem from "@/components/collaborations/ea7/AthleteSystem";
import ManifestoQuote from "@/components/collaborations/ea7/ManifestoQuote";
import EA7Footer from "@/components/collaborations/ea7/Footer";
import Collection from "@/components/collaborations/balmain/Collections";

import AstonMartinHero from "@/components/collaborations/aston-martin/Hero";
import AstonMartinManifesto from "@/components/collaborations/aston-martin/Manifesto";
import AstonMartinEngineering from "@/components/collaborations/aston-martin/Engineering";
import AstonMartinCategories from "@/components/collaborations/aston-martin/Categories";
import AstonMartinRaceWeekend from "@/components/collaborations/aston-martin/RaceWeekend";
import AstonMartinAerodynamics from "@/components/collaborations/aston-martin/Aerodynamics";
import AstonMartinEditorial from "@/components/collaborations/aston-martin/Editorial";
import AstonMartinDriverEquipment from "@/components/collaborations/aston-martin/DriverEquipment";
import AstonMartinMaterials from "@/components/collaborations/aston-martin/Materials";
import AstonMartinEngineeringProcess from "@/components/collaborations/aston-martin/EngineeringProcess";
import AstonMartinJournal from "@/components/collaborations/aston-martin/Journal";
import AstonMartinGallery from "@/components/collaborations/aston-martin/Gallery";
import AstonMartinFinalStatement from "@/components/collaborations/aston-martin/FinalStatement";
import AstonMartinFooter from "@/components/collaborations/aston-martin/Footer";



type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({
  params,
}: Props) {
  const { slug } = await params;

  if (slug === "die-x-calvin-klein") {
    return (
      <main className="bg-white text-black overflow-x-hidden">

        <CKHero />

        <CKIntro />

        <CKCampaignGallery />

        <CKCategories />

        <CKEditorialSpread />

      </main>
    );
  }

  if (slug === "die-x-adidas-originals") {
    return (
      <main className="bg-black text-white overflow-x-hidden">

        <AdidasHero />

        <AdidasManifesto />

        <AdidasGallery />

        <AdidasFutureArchive />

        <AdidasTheNewUniform />

        <AdidasArchiveAccess />

      </main>
    );
  }

  if (slug === "die-x-off-white") {
  return (
    <main className="bg-[#fafafa] text-black overflow-x-hidden">

      <OffWhiteHero />

      <OffWhiteArchiveManifesto />

      <OffWhiteResearchSystem />

      <OffWhiteArchiveIndex />

      <OffWhiteArchiveGrid />

      <OffWhiteReferences />

      <OffWhiteFooter />

    </main>
  );
}

if (slug === "die-x-balenciaga") {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <BalenciagaHero />

      <BalenciagaManifesto />

      <BalenciagaTheNewUniform />

      <BalenciagaRunwayArchive />

      <BalenciagaEditorialCampaign />

      <BalenciagaObjects />

      <BalenciagaFooter />

    </main>
  );
}

if (slug === "die-x-ysl") {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <SaintLaurentHero />

      <SaintLaurentManifesto />

      <SaintLaurentBeautyCodes />

      <SaintLaurentEditorialCampaign />

      <SaintLaurentAtelierNotes />

      <SaintLaurentObjectsOfDesire />

      <SaintLaurentFooter />

    </main>
  );
}

if (slug === "die-x-balmain") {
  return (
    <main className="bg-[#f7f3ec] text-black overflow-x-hidden">

      <BalmainHero />

      <BalmainManifesto />

      <Collection />

      <RunwayLooks />

      <HouseCodes />

      <Craftsmanship />

      <Atelier />

      <SignatureDetails />

      <EditorialStory />

      <StyleGuide />

      <Finale />

    </main>
  );
}

/* -----------------------------------
DIE × EA7 EMPORIO ARMANI
----------------------------------- */
if (slug === "die-x-emporio-armani") {
  return (
    <main className="bg-white text-black overflow-x-hidden">

      <EA7Hero />

      <Philosophy />

      <Categories />

      <Innovation />

      <Editorial />

      <TheUniform />

      <PerformanceObjects />

      <AthleteSystem />

      <ManifestoQuote />

      <EA7Footer />

    </main>
  );
}

if (slug === "die-x-aston-martin") {
  return (
    <main className="bg-white text-black overflow-x-hidden">

      <AstonMartinHero />

      <AstonMartinManifesto />

      <AstonMartinEngineering />

      <AstonMartinCategories />

      <AstonMartinRaceWeekend />

      <AstonMartinAerodynamics />

      <AstonMartinEditorial />

      <AstonMartinDriverEquipment />

      <AstonMartinMaterials />

      <AstonMartinEngineeringProcess />

      <AstonMartinJournal />

      <AstonMartinGallery />

      <AstonMartinFinalStatement />

      <AstonMartinFooter />

    </main>
  );
}

  return notFound();
}