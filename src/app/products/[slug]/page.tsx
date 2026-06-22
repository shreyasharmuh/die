import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import { products } from "@/data/products";

import Hero from "@/components/product/Hero";

import Story from "@/components/product/Story";

import Gallery from "@/components/product/Gallery";

import Details from "@/components/product/Details";

import EditorialCampaign from "@/components/product/EditorialCampaign";

import RelatedProducts from "@/components/product/RelatedProducts";

const EditorialCampaignWithProduct = EditorialCampaign as ComponentType<{
  product: typeof products[number];
}>;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: Props) {

  const { slug } = await params;

  const product = products.find(
    item => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (

    <main className="bg-[#f7f4ef] text-black overflow-x-hidden">

      <Hero product={product} />

      <Story product={product} />

      <Gallery product={product} />

      <Details product={product} />

      <EditorialCampaign product={product} />

      <RelatedProducts product={product} />

    </main>

  );
}