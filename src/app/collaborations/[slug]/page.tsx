import { notFound } from "next/navigation";
import { collaborations } from "@/data/collaborations";

import Hero from "@/components/collaborations/calvin-klein/Hero";

import Intro from "@/components/collaborations/calvin-klein/Intro";

import CampaignGallery from "@/components/collaborations/calvin-klein/CampaignGallery";

import Categories from "@/components/collaborations/calvin-klein/Categories";

import EditorialSpread from "@/components/collaborations/calvin-klein/EditorialSpread";

import AdidasHero from "@/components/collaborations/adidas-originals/Hero";

import Manifesto from "@/components/collaborations/adidas-originals/Manifesto";
import Gallery from "@/components/collaborations/adidas-originals/Gallery";
import FutureArchive from "@/components/collaborations/adidas-originals/FutureArchive";
import TheNewUniform from "@/components/collaborations/adidas-originals/TheNewUniform";
import ArchiveAccess from "@/components/collaborations/adidas-originals/ArchiveAccess";

import OffWhiteHero from "@/components/collaborations/off-white/Hero";
import CulturalArchive from "@/components/collaborations/off-white/CulturalArchive";
import ResearchBoard from "@/components/collaborations/off-white/ResearchBoard";
import DesignLanguage from "@/components/collaborations/off-white/DesignLanguage";
import CampaignGrid from "@/components/collaborations/off-white/CampaignGrid";



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

  /*
   ─────────────────────────────
   COMING SOON COLLABORATIONS
   ─────────────────────────────
  */

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

  /*
   ─────────────────────────────
   CALVIN KLEIN
   ─────────────────────────────
  */

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

if (slug === "die-x-adidas-originals") {
  return (
    <main className="bg-black text-white">

      <AdidasHero />

      <Manifesto />

      <Gallery />

      <FutureArchive />

      <TheNewUniform />

      <ArchiveAccess />

    </main>
  );
}

if (slug === "die-x-off-white") {
  return (
    <main className="bg-white text-black">

      <OffWhiteHero />

      <CulturalArchive />

      <ResearchBoard />

      <DesignLanguage />

      <CampaignGrid />

    </main>
  );
}

  return null;
}

