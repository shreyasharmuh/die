"use client";

import Link from "next/link";

const houses = [
  {
    number: "01",
    title: "prostituée",
    subtitle: "intimate luxury",
    href: "/prostituee",
  },

  {
    number: "02",
    title: "athéiste",
    subtitle: "architectural nihilism",
    href: "/atheiste",
  },

  {
    number: "03",
    title: "shop",
    subtitle: "the uniform",
    href: "/shop",
  },

  {
    number: "04",
    title: "collaborations",
    subtitle: "future partnerships",
    href: "/collaborations",
  },
];

export default function Houses() {
  return (
    <section className="bg-[#fafafa] py-40 md:py-64 px-8 md:px-20">

      <div className="max-w-[1600px] mx-auto">

        {/* LABEL */}

        <p
          className="
          text-[9px]
          uppercase
          tracking-[0.7em]
          opacity-40
          mb-20
        "
        >

          the houses

        </p>

        {/* ITEMS */}

        <div>

          {houses.map((house) => (

            <Link
              key={house.title}
              href={house.href}
              className="
              group
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between

              border-b
              border-black/10

              py-12
              md:py-16

              transition-all
              duration-500
            "
            >

              {/* LEFT */}

              <div className="flex items-center gap-8">

                <p
                  className="
                  text-[10px]
                  tracking-[0.4em]
                  opacity-30
                "
                >

                  {house.number}

                </p>

                <h2
                  className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl

                  font-extralight

                  transition-all
                  duration-500

                  group-hover:translate-x-4
                "
                >

                  {house.title}

                </h2>

              </div>

              {/* RIGHT */}

              <div className="mt-6 md:mt-0">

                <p
                  className="
                  text-[10px]

                  uppercase

                  tracking-[0.5em]

                  opacity-40

                  group-hover:opacity-100

                  transition
                "
                >

                  {house.subtitle}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}