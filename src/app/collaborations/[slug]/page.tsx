import { notFound } from "next/navigation";
import { collaborations } from "@/data/collaborations";

/* -----------------------------------
CALVIN KLEIN
----------------------------------- */

import Hero from "@/components/collaborations/calvin-klein/Hero";
import Intro from "@/components/collaborations/calvin-klein/Intro";
import CampaignGallery from "@/components/collaborations/calvin-klein/CampaignGallery";
import Categories from "@/components/collaborations/calvin-klein/Categories";
import EditorialSpread from "@/components/collaborations/calvin-klein/EditorialSpread";

/* -----------------------------------
ADIDAS ORIGINALS
----------------------------------- */

import AdidasHero from "@/components/collaborations/adidas-originals/Hero";
import Manifesto from "@/components/collaborations/adidas-originals/Manifesto";
import Gallery from "@/components/collaborations/adidas-originals/Gallery";
import FutureArchive from "@/components/collaborations/adidas-originals/FutureArchive";
import AdidasTheNewUniform from "@/components/collaborations/adidas-originals/TheNewUniform";
import ArchiveAccess from "@/components/collaborations/adidas-originals/ArchiveAccess";

/* -----------------------------------
OFF-WHITE™
----------------------------------- */

import OffWhiteHero from "@/components/collaborations/off-white/Hero";
import ArchiveManifesto from "@/components/collaborations/off-white/ArchiveManifesto";
import ResearchSystem from "@/components/collaborations/off-white/ResearchSystem";
import ArchiveIndex from "@/components/collaborations/off-white/ArchiveIndex";
import ArchiveGrid from "@/components/collaborations/off-white/ArchiveGrid";
import References from "@/components/collaborations/off-white/References";
import OffWhiteFooter from "@/components/collaborations/off-white/Footer";

/* -----------------------------------
BALENCIAGA
----------------------------------- */

import BalenciagaHero from "@/components/collaborations/balenciaga/Hero";

import BalenciagaManifesto from "@/components/collaborations/balenciaga/Manifesto";

import BalenciagaTheNewUniform from "@/components/collaborations/balenciaga/TheNewUniform";

import RunwayArchive from "@/components/collaborations/balenciaga/RunwayArchive";

import EditorialCampaign from "@/components/collaborations/balenciaga/EditorialCampaign";

import Objects from "@/components/collaborations/balenciaga/Objects";

import BalenciagaFooter from "@/components/collaborations/balenciaga/Footer";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollaborationPage({
  params,
}: Props) {
  const { slug } = await params;

  const collaboration = collaborations.find(
    (item) => item.slug === slug
  );

  if (!collaboration) {
    notFound();
  }

  /* -----------------------------------
  COMING SOON
  ----------------------------------- */

  if (collaboration.status === "coming-soon") {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-6xl md:text-[10rem] font-light leading-none uppercase">
            {collaboration.name}
          </h1>

          <div className="my-10 text-5xl opacity-40">
            ×
          </div>

          <h2 className="text-6xl md:text-[10rem] font-light leading-none uppercase">
            die
          </h2>

          <p className="mt-12 text-xs tracking-[0.5em] uppercase opacity-50">
            coming soon
          </p>

          <p className="mt-4 text-sm opacity-40">
            stay tuned
          </p>

        </div>

      </main>
    );
  }

  /* -----------------------------------
  DIE × CALVIN KLEIN
  ----------------------------------- */

  if (slug === "die-x-calvin-klein") {
    return (
      <main className="bg-white text-black">

        <Hero />

        <Intro />

        <CampaignGallery />

        <Categories />

        <EditorialSpread />

      </main>
    );
  }

  /* -----------------------------------
  DIE × ADIDAS ORIGINALS
  ----------------------------------- */

  if (slug === "die-x-adidas-originals") {
    return (
      <main className="bg-black text-white">

        <AdidasHero />

        <Manifesto />

        <Gallery />

        <FutureArchive />

        <AdidasTheNewUniform />

        <ArchiveAccess />

      </main>
    );
  }

  /* -----------------------------------
  DIE × OFF-WHITE™
  ----------------------------------- */

  if (slug === "die-x-off-white") {
    return (
      <main className="bg-[#fafafa] text-black overflow-x-hidden">

        <OffWhiteHero />

        <ArchiveManifesto />

        <ResearchSystem />

        <ArchiveIndex />

        <ArchiveGrid />

        <References />

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

        <RunwayArchive />

        <EditorialCampaign />

        <Objects />

        <BalenciagaFooter />

      </main>
    );
  }
  return null;
}