"use client";

import Image from "next/image";
import Link from "next/link";

const runwayLooks = [
  {
    id: "01",
    title: "Power Tailoring",
    season: "SS27",
    image: "/images/balmain/runway1.jpg",
  },
  {
    id: "02",
    title: "Modern Uniform",
    season: "SS27",
    image: "/images/balmain/runway2.jpg",
  },
  {
    id: "03",
    title: "Gold Heritage",
    season: "SS27",
    image: "/images/balmain/runway3.jpg",
  },
  {
    id: "04",
    title: "Architectural Black",
    season: "SS27",
    image: "/images/balmain/runway4.jpg",
  },
];

export default function RunwayLooks() {
  return (
    <section className="bg-black text-white py-40 overflow-hidden">

      <div className="px-8 md:px-16">

        <div className="flex justify-between items-end mb-24">

          <div>

            <p className="uppercase tracking-[0.55em] text-[10px] text-white/40 mb-6">
              Archive
            </p>

            <h2 className="text-6xl md:text-[7rem] leading-none tracking-[-0.07em] font-extralight">
              RUNWAY
              <br />
              LOOKS
            </h2>

          </div>

          <p className="max-w-sm text-white/50 leading-8">
            Four silhouettes defining the collaboration between
            architectural tailoring and modern luxury.
          </p>

        </div>

      </div>

      <div className="overflow-x-auto">

        <div className="flex gap-10 px-8 md:px-16 w-max pb-6">

          {runwayLooks.map((look) => (

            <div
              key={look.id}
              className="group w-[520px] flex-shrink-0"
            >

              <div className="relative overflow-hidden">

                <Image
                  src={look.image}
                  alt={look.title}
                  width={700}
                  height={900}
                  className="w-full h-[720px] object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

              </div>

              <div className="flex justify-between items-center mt-8">

                <div>

                  <p className="uppercase tracking-[0.45em] text-[10px] text-white/40">
                    LOOK {look.id}
                  </p>

                  <h3 className="text-3xl mt-3 font-light tracking-[-0.03em]">
                    {look.title}
                  </h3>

                  <p className="mt-4 text-white/50">
                    {look.season}
                  </p>

                </div>

                <Link
                  href="/shop"
                  className="uppercase tracking-[0.45em] text-[10px] border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
                >
                  View
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}