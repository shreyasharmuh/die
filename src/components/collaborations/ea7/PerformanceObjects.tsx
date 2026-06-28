"use client";

import Image from "next/image";

const objects = [
  {
    title: "Performance Duffel",
    image: "/images/collaborations/ea7/object1.jpg",
  },
  {
    title: "EA7 Sneakers",
    image: "/images/collaborations/ea7/object2.jpg",
  },
  {
    title: "Travel Bottle",
    image: "/images/collaborations/ea7/object3.jpg",
  },
  {
    title: "Performance Cap",
    image: "/images/collaborations/ea7/object4.jpg",
  },
];

export default function PerformanceObjects() {
  return (
    <section className="bg-[#f7f7f5] py-40">

      <div className="max-w-[1800px] mx-auto px-8 md:px-16">

        <p className="uppercase tracking-[0.45em] text-xs text-black/40 mb-6">
          Performance Objects
        </p>

        <h2 className="text-7xl md:text-[8rem] font-light tracking-[-0.08em] mb-24">
          OBJECTS
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {objects.map((item) => (

            <div
              key={item.title}
              className="group"
            >

              <div className="relative aspect-square overflow-hidden bg-white">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover duration-700 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-6 text-2xl font-light">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}