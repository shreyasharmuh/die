"use client";

import Link from "next/link";

const uniforms = [
  {
    number: "001",

    title: "essential hoodie",

    category: "essentials",

    price: "₹5,990",
  },

  {
    number: "002",

    title: "oversized jersey",

    category: "jersey",

    price: "₹6,490",
  },

  {
    number: "003",

    title: "wool overcoat",

    category: "outerwear",

    price: "₹14,990",
  },

  {
    number: "004",

    title: "tailored trouser",

    category: "tailoring",

    price: "₹7,990",
  },
];

export default function FeaturedUniforms() {
  return (
    <section className="px-8 md:px-16 py-56">

      <div className="max-w-[1700px] mx-auto">

        {/* LABEL */}

        <p className="editorial-label mb-20">

          featured uniforms

        </p>

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-20">

          {uniforms.map((item) => (

            <Link
              key={item.number}
              href={`/products/${item.title.replace(/\s+/g, "-")}`}
              className="
              group

              border-t

              border-black/10

              pt-10

              pb-16
            "
            >

              {/* NUMBER */}

              <p
                className="
                text-[10px]

                tracking-[0.45em]

                opacity-30

                mb-12
              "
              >

                {item.number}

              </p>

              {/* NAME */}

              <h2
                className="
                text-5xl

                md:text-7xl

                font-extralight

                leading-none

                tracking-[-0.05em]

                transition-all

                duration-500

                group-hover:translate-x-4
              "
              >

                {item.title}

              </h2>

              {/* META */}

              <div
                className="
                flex

                justify-between

                mt-16
              "
              >

                <p
                  className="
                  text-[10px]

                  uppercase

                  tracking-[0.5em]

                  opacity-40
                "
                >

                  {item.category}

                </p>

                <p className="opacity-60">

                  {item.price}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}