"use client";

import Link from "next/link";

const products = [
  {
    id: "001",
    name: "essential hoodie",
    category: "essentials",
    price: "₹5,990",
    href: "/products/essential-hoodie",
  },

  {
    id: "002",
    name: "uniform jersey",
    category: "jerseys",
    price: "₹6,490",
    href: "/products/uniform-jersey",
  },

  {
    id: "003",
    name: "wool overcoat",
    category: "outerwear",
    price: "₹14,990",
    href: "/products/wool-overcoat",
  },

  {
    id: "004",
    name: "tailored trousers",
    category: "tailoring",
    price: "₹7,990",
    href: "/products/tailored-trousers",
  },
];

export default function UniformGrid() {
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

          uniform system

        </p>

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-16">

          {products.map((product) => (

            <Link
              key={product.id}
              href={product.href}
              className="
              group

              border-t

              border-black/10

              py-12
            "
            >

              {/* ID */}

              <p
                className="
                text-[10px]

                tracking-[0.45em]

                opacity-30

                mb-10
              "
              >

                {product.id}

              </p>

              {/* NAME */}

              <h2
                className="
                text-4xl

                md:text-6xl

                font-extralight

                leading-none

                transition-all

                duration-500

                group-hover:translate-x-4
              "
              >

                {product.name}

              </h2>

              {/* META */}

              <div
                className="
                flex

                justify-between

                mt-12
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

                  {product.category}

                </p>

                <p
                  className="
                  text-sm

                  opacity-70
                "
                >

                  {product.price}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}