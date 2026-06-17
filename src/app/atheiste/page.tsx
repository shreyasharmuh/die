import Hero from "@/components/atheiste/Hero";
import Manifesto from "@/components/atheiste/Manifesto";
import Categories from "@/components/atheiste/Categories";
import Journal from "@/components/atheiste/Journal";
import Footer from "@/components/atheiste/Footer";

export default function AtheistePage() {
  return (
    <main className="bg-[#090909] text-white overflow-x-hidden">

      <Hero />

      <Manifesto />

      <Categories />

      <Journal />

      <Footer />

    </main>
  );
}