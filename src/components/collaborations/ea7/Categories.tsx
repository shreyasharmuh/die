"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Running",
    subtitle: "Lightweight systems engineered for speed.",
    image: "/images/collaborations/ea7/running.jpg",
    href: "/shop/menswear",
    number: "01",
  },
  {
    title: "Training",
    subtitle: "Performance essentials built for everyday intensity.",
    image: "/images/collaborations/ea7/training.jpg",
    href: "/shop/menswear",
    number: "02",
  },
  {
    title: "Travel",
    subtitle: "Luxury movement beyond the gym.",
    image: "/images/collaborations/ea7/travel.jpg",
    href: "/shop/menswear",
    number: "03",
  },
  {
    title: "Recovery",
    subtitle: "Comfort engineered with refined precision.",
    image: "/images/collaborations/ea7/recovery.jpg",
    href: "/shop/menswear",
    number: "04",
  },
];
export default function Categories() {
  return (
    <section className="bg-white py-36">

      <div className="max-w-[1700px] mx-auto px-8 md:px-14">

        {/* Header */}

        <div className="flex items-end justify-between mb-20">

          <div>

            <p className="uppercase tracking-[0.45em] text-[11px] text-black/40 mb-5">
              Performance Categories
            </p>

            <h2 className="text-6xl md:text-8xl font-light tracking-[-0.07em] leading-[0.9]">
              ENGINEERED
              <br />
              FOR EVERY
              <br />
              MOVEMENT
            </h2>

          </div>

          <p className="hidden xl:block max-w-md text-black/60 leading-8">
            Every category has been designed around movement,
            technical performance and Italian craftsmanship.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {categories.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="group"
            >

              <div className="relative overflow-hidden">

                <div className="aspect-[4/5] relative">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                    object-cover
                    duration-700
                    group-hover:scale-105
                  "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                </div>

                {/* Content */}

                <div className="absolute inset-0 flex flex-col justify-between p-10">

                  <div className="flex justify-between">

                    <p className="text-white/70 tracking-[0.4em] text-xs uppercase">
                      {item.number}
                    </p>

                    <p className="text-white/70 tracking-[0.4em] text-xs uppercase">
                      EA7 × DIE
                    </p>

                  </div>

                  <div>

                    <h3 className="text-white text-5xl md:text-6xl font-light tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-white/75 leading-7">
                      {item.subtitle}
                    </p>

                    <div className="mt-8 flex items-center gap-3 uppercase tracking-[0.35em] text-xs text-white">

                      Discover

                      <span className="translate-x-0 group-hover:translate-x-2 transition">
                        →
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}