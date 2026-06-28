"use client";

import Image from "next/image";
import Link from "next/link";

const looks = [
  {
    number: "01",
    title: "Performance Uniform",
    description:
      "Engineered for movement, tailored for everyday luxury.",
    image: "/images/collaborations/ea7/look1.jpg",
    products: [
      "Compression Tee",
      "Performance Shorts",
      "Compression Leggings",
      "Performance Sneakers",
      "Travel Duffel",
    ],
  },

  {
    number: "02",
    title: "Training System",
    description:
      "Minimal silhouettes designed between Milan and modern sport.",
    image: "/images/collaborations/ea7/look2.jpg",
    products: [
      "Training Jacket",
      "Technical Tee",
      "Track Pant",
      "EA7 Sneakers",
      "Cap",
    ],
  },

  {
    number: "03",
    title: "City Movement",
    description:
      "Luxury athleisure designed for airports, architecture and everyday life.",
    image: "/images/collaborations/ea7/look3.jpg",
    products: [
      "Oversized Tee",
      "Performance Trouser",
      "Crossbody",
      "Running Shoe",
      "Bottle",
    ],
  },
];

export default function TheUniform() {
  return (
    <section className="bg-white py-40">

      <div className="max-w-[1800px] mx-auto px-8 md:px-16">

        {/* Heading */}

        <div className="mb-32">

          <p className="uppercase tracking-[0.45em] text-[11px] text-black/40 mb-6">
            Athlete Wardrobe
          </p>

          <h2
            className="
            text-[4rem]
            md:text-[7rem]
            xl:text-[9rem]
            font-light
            tracking-[-0.08em]
            leading-[0.85]
          "
          >
            THE
            <br />
            UNIFORM
          </h2>

        </div>

        {/* LOOKS */}

        <div className="space-y-44">

          {looks.map((look) => (

            <div
              key={look.number}
              className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center"
            >

              {/* IMAGE */}

              <div className="relative aspect-[4/5] overflow-hidden group">

                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className="
                  object-cover
                  duration-700
                  group-hover:scale-105
                "
                />

              </div>

              {/* INFO */}

              <div>

                <p className="uppercase tracking-[0.45em] text-[11px] text-black/40">
                  Look {look.number}
                </p>

                <h3
                  className="
                  mt-5
                  text-5xl
                  md:text-7xl
                  font-light
                  tracking-[-0.06em]
                "
                >
                  {look.title}
                </h3>

                <p className="mt-8 max-w-lg text-black/60 leading-8">
                  {look.description}
                </p>

                {/* PRODUCTS */}

                <div className="mt-16 border-t border-black/10">

                  {look.products.map((product) => (

                    <Link
                      key={product}
                      href="/shop/menswear"
                      className="
                      flex
                      justify-between
                      items-center
                      border-b
                      border-black/10
                      py-5
                      group
                    "
                    >

                      <span className="text-lg">
                        {product}
                      </span>

                      <span
                        className="
                        text-black/30
                        group-hover:translate-x-2
                        transition
                      "
                      >
                        →
                      </span>

                    </Link>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}