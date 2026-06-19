import Hero from "@/components/atheiste/Hero";
import Manifesto from "@/components/atheiste/Manifesto";
import Categories from "@/components/atheiste/Categories";
import Observations from "@/components/atheiste/Observations";
import Footer from "@/components/atheiste/Footer";

export default function AtheistePage() {
  return (
    <main className="bg-[#090909] text-white overflow-x-hidden">

      <Hero />

      <Manifesto />

      <Categories />

      <Observations />

      <Footer />

    </main>
  );
}