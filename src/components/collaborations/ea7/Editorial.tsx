"use client";

import Image from "next/image";

const editorials = [
  {
    title: "Performance Without Noise",
    subtitle:
      "Luxury is no longer defined by excess, but by precision, discipline and movement.",
    image: "/images/collaborations/ea7/editorial1.jpg",
    align: "left",
  },
  {
    title: "Italian Precision",
    subtitle:
      "Minimal silhouettes engineered with technical fabrics inspired by contemporary athletic culture.",
    image: "/images/collaborations/ea7/editorial2.jpg",
    align: "right",
  },
  {
    title: "Built For Everyday Motion",
    subtitle:
      "Designed for the commute, the studio, the airport and the city — one wardrobe for every environment.",
    image: "/images/collaborations/ea7/editorial3.jpg",
    align: "left",
  },
];

export default function Editorial() {
  return (
    <section className="bg-[#f7f7f5] py-40">

      <div className="max-w-[1800px] mx-auto px-8 md:px-16">

        <div className="mb-24">

          <p className="uppercase tracking-[0.45em] text-[11px] text-black/40 mb-6">
            Editorial Campaign
          </p>

          <h2
            className="
            text-[4rem]
            md:text-[7rem]
            xl:text-[8rem]
            leading-[0.88]
            tracking-[-0.08em]
            font-light
          "
          >
            MOVEMENT
            <br />
            CAPTURED
          </h2>

        </div>

        <div className="space-y-44">

          {editorials.map((item, index) => (

            <div
              key={index}
              className={`
              grid
              lg:grid-cols-2
              gap-20
              items-center

              ${item.align === "right" ? "lg:[&>*:first-child]:order-2" : ""}
            `}
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                  object-cover
                  hover:scale-105
                  duration-700
                "
                />

              </div>

              <div className="max-w-xl">

                <p className="uppercase tracking-[0.35em] text-[11px] text-black/40 mb-6">
                  0{index + 1}
                </p>

                <h3
                  className="
                  text-5xl
                  md:text-7xl
                  leading-[0.9]
                  tracking-[-0.06em]
                  font-light
                "
                >
                  {item.title}
                </h3>

                <p className="mt-10 text-lg leading-9 text-black/60">
                  {item.subtitle}
                </p>

                <div className="mt-16 flex gap-16">

                  <div>

                    <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">
                      Photography
                    </p>

                    <p className="mt-2">
                      ZEISS
                    </p>

                  </div>

                  <div>

                    <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">
                      Location
                    </p>

                    <p className="mt-2">
                      Milano
                    </p>

                  </div>

                  <div>

                    <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">
                      Collection
                    </p>

                    <p className="mt-2">
                      EA7 × DIE
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}