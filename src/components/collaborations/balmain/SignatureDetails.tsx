"use client";

import Image from "next/image";

const details = [
  {
    title: "Gold Hardware",
    subtitle: "01",
    image: "/images/balmain/detail1.jpg",
    description:
      "Signature metallic hardware individually polished and engineered to become part of the garment's architecture rather than decoration.",
  },
  {
    title: "Military Buttons",
    subtitle: "02",
    image: "/images/balmain/detail2.jpg",
    description:
      "Inspired by historic French military tailoring and reinterpreted through contemporary proportions.",
  },
  {
    title: "Italian Wool",
    subtitle: "03",
    image: "/images/balmain/detail3.jpg",
    description:
      "Premium fabrics selected for permanence, sculptural drape and exceptional construction.",
  },
  {
    title: "Architectural Stitching",
    subtitle: "04",
    image: "/images/balmain/detail4.jpg",
    description:
      "Every seam reinforces structure while remaining visually restrained.",
  },
];

export default function SignatureDetails() {
  return (
    <section className="bg-[#111] text-white py-40">

      <div className="max-w-[1800px] mx-auto px-8 md:px-16">

        <div className="mb-28">

          <p className="uppercase tracking-[0.55em] text-[10px] text-white/40 mb-6">
            Signature Details
          </p>

          <h2 className="text-6xl md:text-[8rem] font-extralight tracking-[-0.08em] leading-none">
            EVERY
            <br />
            DETAIL
            <br />
            MATTERS.
          </h2>

        </div>

        <div className="space-y-56">

          {details.map((item, index) => (

            <div
              key={item.title}
              className={`grid lg:grid-cols-2 gap-28 items-center ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="w-full h-[900px] object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <p className="uppercase tracking-[0.5em] text-[10px] text-white/30 mb-8">
                  Detail {item.subtitle}
                </p>

                <h3 className="text-5xl md:text-7xl font-extralight tracking-[-0.06em] leading-none">
                  {item.title}
                </h3>

                <p className="mt-10 leading-9 text-white/60 max-w-xl text-lg">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}