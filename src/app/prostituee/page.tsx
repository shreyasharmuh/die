
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
import MenFinalStatement from "@/components/prostituee/men/FinalStatement";
import MenFooter from "@/components/prostituee/men/Footer";

// WOMEN
// import WomenCollection from "@/components/prostituee/women/Collection";
// import WomenCampaignEditorial from "@/components/prostituee/women/CampaignEditorial";
// import WomenFabric from "@/components/prostituee/women/Fabric";
// import WomenCampaignFilm from "@/components/prostituee/women/CampaignFilm";
// import WomenEveryday from "@/components/prostituee/women/Everyday";
// import WomenFinalStatement from "@/components/prostituee/women/FinalStatement";
// import WomenFooter from "@/components/prostituee/women/Footer";

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

          <MenFinalStatement />

          <MenFooter />
        </>
      ) : (
        <>
          <div className="py-40 text-center uppercase tracking-[0.45em] text-sm text-neutral-500">
            Women's Collection — Coming Soon
          </div>

          {/*
          <WomenCollection />
          <WomenCampaignEditorial />
          <WomenFabric />
          <WomenCampaignFilm />
          <WomenEveryday />
          <WomenFinalStatement />
          <WomenFooter />
          */}
        </>
      )}

    </main>
  );
}
