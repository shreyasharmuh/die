"use client";

import Image from "next/image";
import Link from "next/link";

const looks = [
  {
    title: "Look 01",
    name: "Architectural Tailoring",
    image: "/images/balmain/style1.jpg",
    garments: [
      "Military Blazer",
      "Wool Trousers",
      "Gold Hardware Belt",
      "Leather Boots",
    ],
    slug: "military-blazer",
  },
  {
    title: "Look 02",
    name: "Modern Uniform",
    image: "/images/balmain/style2.jpg",
    garments: [
      "Relaxed Knit",
      "Tailored Denim",
      "Leather Gloves",
      "Chelsea Boots",
    ],
    slug: "modern-uniform",
  },
  {
    title: "Look 03",
    name: "Evening Precision",
    image: "/images/balmain/style3.jpg",
    garments: [
      "Double Breasted Jacket",
      "Silk Shirt",
      "Tailored Trouser",
      "Gold Jewellery",
    ],
    slug: "evening-precision",
  },
];

export default function StyleGuide() {
  return (
    <section className="bg-white text-black">

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-40">

        <div className="mb-32">

          <p className="uppercase tracking-[0.55em] text-[10px] text-black/40 mb-6">
            Styling Guide
          </p>

          <h2
            className="
            text-6xl
            md:text-[8rem]
            leading-[0.85]
            tracking-[-0.08em]
            font-extralight
          "
          >
            COMPLETE
            <br />
            WARDROBE
          </h2>

        </div>

        <div className="space-y-56">

          {looks.map((look, index) => (

            <div
              key={look.name}
              className={`grid lg:grid-cols-2 gap-28 items-center ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              <div>

                <Image
                  src={look.image}
                  alt={look.name}
                  width={900}
                  height={1200}
                  className="w-full h-[900px] object-cover transition duration-700 hover:scale-[1.02]"
                />

              </div>

              <div>

                <p className="uppercase tracking-[0.5em] text-[10px] text-black/40 mb-8">
                  {look.title}
                </p>

                <h3
                  className="
                  text-5xl
                  md:text-7xl
                  font-extralight
                  tracking-[-0.06em]
                  leading-none
                "
                >
                  {look.name}
                </h3>

                <div className="mt-16 space-y-6">

                  {look.garments.map((item) => (

                    <div
                      key={item}
                      className="flex justify-between border-b border-black/10 pb-4"
                    >

                      <p className="text-xl">{item}</p>

                      <p className="uppercase text-[10px] tracking-[0.45em] text-black/40">
                        Included
                      </p>

                    </div>

                  ))}

                </div>

                <Link
                  href={`/products/${look.slug}`}
                  className="
                  inline-flex
                  mt-16
                  border
                  border-black
                  px-10
                  py-4
                  uppercase
                  tracking-[0.45em]
                  text-[11px]
                  hover:bg-black
                  hover:text-white
                  transition
                "
                >
                  Shop Look
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}