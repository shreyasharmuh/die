"use client";

import { useState } from "react";

import Hero from "@/components/prostituee/Hero";
import Philosophy from "@/components/prostituee/Philosophy";

// MEN
import MenCollection from "@/components/prostituee/men/Collection";
import MenCampaignEditorial from "@/components/prostituee/men/CampaignEditorial";
import Fabric from "@/components/prostituee/men/Fabric";
import CampaignFilm from "@/components/prostituee/men/CampaignFilm";
import Everyday from "@/components/prostituee/men/Everyday";

// WOMEN
// import WomenCollection from "@/components/prostituee/women/Collection";
// import WomenCampaignEditorial from "@/components/prostituee/women/CampaignEditorial";

import Journal from "@/components/prostituee/Journal";
import FinalStatement from "@/components/prostituee/FinalStatement";
import Footer from "@/components/prostituee/Footer";

export default function ProstitueePage() {
  const [gender, setGender] = useState<"men" | "women">("men");

  return (
    <main className="overflow-x-hidden bg-[#faf8f5] text-black">

      <Hero
        gender={gender}
        setGender={setGender}
      />

      <Philosophy />

      {gender === "men" ? (
        <>
          <MenCollection />

          <MenCampaignEditorial />

          <Fabric />

          <CampaignFilm />
          <Everyday />
        </>
      ) : (
        <>
          <div className="py-40 text-center text-neutral-500 uppercase tracking-[0.4em] text-sm">
            Women's Collection — Coming Soon
          </div>

          {/*
          Later replace with:

          <WomenCollection />

          <WomenCampaignEditorial />

          <WomenFabric />

          <WomenCampaignFilm />
          */}
        </>
      )}

      <Journal />

      <FinalStatement />

      <Footer />

    </main>
  );
}