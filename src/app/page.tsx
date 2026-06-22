import Hero from "@/components/home/Hero";

import Manifesto from "@/components/home/Manifesto";

import Houses from "@/components/home/Houses";

import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";

import TheUniform from "@/components/home/TheUniform";

import World from "@/components/home/World";

export default function HomePage() {
  return (
    <main className="bg-[#fafafa] text-black overflow-x-hidden">

      <Hero />

      <Manifesto />

      <Houses />

      <FeaturedCampaigns />

      <TheUniform />

      <World />

    </main>
  );
}