"use client";

import Image from "next/image";

const atelier = [
  {
    number: "01",
    title: "Pattern Cutting",
    image: "/images/balmain/atelier1.jpg",
    text: "Every silhouette begins with proportion. Architecture before aesthetics.",
  },
  {
    number: "02",
    title: "Hand Construction",
    image: "/images/balmain/atelier2.jpg",
    text: "Traditional French tailoring techniques meet contemporary luxury.",
  },
  {
    number: "03",
    title: "Final Form",
    image: "/images/balmain/atelier3.jpg",
    text: "The garment becomes an object of permanence rather than seasonal fashion.",
  },
];

export default function Atelier() {
  return (
    <section className="bg-[#f7f3ec] text-[#111]">

      {/* Hero */}

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-40">

        <p className="uppercase tracking-[0.55em] text-[10px] text-black/40 mb-8">
          The Atelier
        </p>

        <h2
          className="
            text-[18vw]
            md:text-[10rem]
            xl:text-[13rem]
            leading-[0.82]
            tracking-[-0.09em]
            font-extralight
          "
        >
          THE
          <br />
          ATELIER
        </h2>

        <div className="grid lg:grid-cols-2 gap-24 mt-24">

          <div>

            <p className="text-lg leading-9 text-black/70 max-w-xl">
              Luxury is never accidental.
              Every line, every shoulder,
              every proportion begins inside
              the atelier where craftsmanship
              becomes architecture.
            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.45em] text-[11px] leading-8 text-black/40">
              DIE × BALMAIN explores French
              craftsmanship through contemporary
              Swiss-inspired minimalism, producing
              garments designed to outlive trends.
            </p>

          </div>

        </div>

      </div>

      {/* Editorial Blocks */}

      {atelier.map((item, index) => (

        <section
          key={item.number}
          className="max-w-[1800px] mx-auto px-8 md:px-16 py-40"
        >

          <div
            className={`grid lg:grid-cols-2 gap-24 items-center ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >

            <div className="overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={1200}
                className="w-full h-[850px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div>

              <p className="uppercase tracking-[0.55em] text-[10px] text-black/40 mb-6">
                Stage {item.number}
              </p>

              <h3
                className="
                  text-6xl
                  md:text-7xl
                  font-extralight
                  tracking-[-0.06em]
                  leading-none
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-12
                  text-lg
                  leading-9
                  text-black/65
                  max-w-xl
                "
              >
                {item.text}
              </p>

            </div>

          </div>

        </section>

      ))}

      {/* Closing Quote */}

      <div className="bg-black text-white py-56">

        <div className="max-w-6xl mx-auto px-8 md:px-16">

          <h2
            className="
              text-6xl
              md:text-[8rem]
              leading-[0.85]
              tracking-[-0.08em]
              font-extralight
            "
          >
            CRAFT
            <br />
            BECOMES
            <br />
            CULTURE.
          </h2>

          <p
            className="
              mt-16
              uppercase
              tracking-[0.45em]
              text-[11px]
              text-white/40
              leading-8
              max-w-lg
            "
          >
            Luxury is remembered through
            craftsmanship, not logos.
            Precision creates permanence.
          </p>

        </div>

      </div>

    </section>
  );
}