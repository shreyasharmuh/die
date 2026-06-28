"use client";

import Image from "next/image";
import Link from "next/link";

const looks = [
  {
    number: "01",
    title: "Military Blazer",
    category: "Tailoring",
    image: "/images/balmain/look1.jpg",
  },
  {
    number: "02",
    title: "Ivory Architecture",
    category: "Ready-to-Wear",
    image: "/images/balmain/look2.jpg",
  },
  {
    number: "03",
    title: "Gold Hardware",
    category: "Luxury Objects",
    image: "/images/balmain/look3.jpg",
  },
  {
    number: "04",
    title: "Evening Uniform",
    category: "Editorial",
    image: "/images/balmain/look4.jpg",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-[#f7f3ec] text-black py-40"
    >
      <div className="max-w-[1700px] mx-auto px-8 md:px-16">

        <div className="flex justify-between items-end mb-24">

          <div>

            <p className="uppercase tracking-[0.55em] text-[10px] text-black/40 mb-5">
              Collection
            </p>

            <h2 className="text-6xl md:text-[7rem] font-extralight tracking-[-0.06em] leading-none">
              THE COLLECTION
            </h2>

          </div>

          <p className="max-w-sm text-black/50 leading-8">
            Sculptural tailoring inspired by Balmain's military heritage and
            interpreted through DIE's contemporary visual language.
          </p>

        </div>

        <div className="space-y-40">

          {looks.map((look, index) => (

            <div
              key={look.number}
              className={`grid lg:grid-cols-2 gap-24 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="group overflow-hidden">

                <Image
                  src={look.image}
                  alt={look.title}
                  width={900}
                  height={1200}
                  className="w-full h-[850px] object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div>

                <p className="text-[11px] uppercase tracking-[0.45em] text-black/40 mb-8">
                  Look {look.number}
                </p>

                <h3 className="text-5xl md:text-7xl leading-[0.9] tracking-[-0.05em] font-extralight">
                  {look.title}
                </h3>

                <p className="uppercase tracking-[0.45em] text-[10px] text-black/40 mt-8">
                  {look.category}
                </p>

                <p className="mt-12 text-lg leading-9 text-black/65 max-w-xl">
                  Architectural tailoring, luxurious proportions and military
                  precision define a wardrobe that balances power with elegance.
                </p>

                <Link
                  href="/shop"
                  className="inline-flex mt-16 border border-black px-10 py-4 uppercase tracking-[0.45em] text-[11px] hover:bg-black hover:text-white transition-all duration-500"
                >
                  Explore Look
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}