"use client";

import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "menswear",
    href: "/shop/menswear",
  },

  {
    number: "02",
    title: "womenswear",
    href: "/shop/womenswear",
  },

  {
    number: "03",
    title: "leather goods",
    href: "/shop/leather-goods",
  },

  {
    number: "04",
    title: "objects",
    href: "/shop/objects",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#fafafa] py-40 md:py-56 px-8 md:px-16">

      <div className="max-w-[1700px] mx-auto">

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

          categories

        </p>

        {/* ITEMS */}

        <div>

          {categories.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="
              group

              flex

              flex-col

              md:flex-row

              md:justify-between

              md:items-center

              border-b

              border-black/10

              py-12

              md:py-16
            "
            >

              <div className="flex items-center gap-8">

                <p
                  className="
                  text-[10px]

                  tracking-[0.45em]

                  opacity-30
                "
                >

                  {item.number}

                </p>

                <h2
                  className="
                  text-5xl

                  sm:text-6xl

                  md:text-7xl

                  lg:text-8xl

                  font-extralight

                  leading-none

                  transition-all

                  duration-500

                  group-hover:translate-x-4
                "
                >

                  {item.title}

                </h2>

              </div>

              <p
                className="
                text-[10px]

                uppercase

                tracking-[0.5em]

                opacity-30

                group-hover:opacity-100

                transition
              "
              >

                enter

              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}