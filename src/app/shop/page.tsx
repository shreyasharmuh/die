import Hero from "@/components/shop/Hero";

import Categories from "@/components/shop/Categories";

import EditorialStatement from "@/components/shop/EditorialStatements";

import UniformGrid from "@/components/shop/UniformGrid";

import Archive from "@/components/shop/Archive";

export default function ShopPage() {
  return (
    <main className="bg-[#fafafa] text-black overflow-x-hidden">

      <Hero />

      <Categories />

      <EditorialStatement/>

      <UniformGrid />

      <Archive />

    </main>
  );
}