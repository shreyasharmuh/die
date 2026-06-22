"use client";

import Link from "next/link";

const campaigns = [
  {
    year: "2026",
    title: "die × off-white™",
    href: "/collaborations/die-x-off-white",
  },

  {
    year: "2026",
    title: "die × adidas originals",
    href: "/collaborations/die-x-adidas-originals",
  },

  {
    year: "2026",
    title: "die × calvin klein",
    href: "/collaborations/die-x-calvin-klein",
  },

  {
    year: "soon",
    title: "die × balenciaga",
    href: "/collaborations/die-x-balenciaga",
  },
];

export default function FeaturedCampaigns() {
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

          featured campaigns

        </p>

        {/* CAMPAIGNS */}

        <div className="space-y-20">

          {campaigns.map((campaign) => (

            <Link
              key={campaign.title}
              href={campaign.href}
              className="
              group
              flex
              flex-col
              md:flex-row
              md:justify-between
              gap-8
            "
            >

              {/* LEFT */}

              <div>

                <p
                  className="
                  text-[10px]
                  tracking-[0.5em]
                  uppercase
                  opacity-30
                  mb-6
                "
                >

                  {campaign.year}

                </p>

                <h2
                  className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl

                  font-extralight

                  leading-none

                  transition-all

                  duration-500

                  group-hover:translate-x-4
                "
                >

                  {campaign.title}

                </h2>

              </div>

              {/* RIGHT */}

              <div
                className="
                flex
                items-end
              "
              >

                <p
                  className="
                  text-[10px]

                  uppercase

                  tracking-[0.6em]

                  opacity-30

                  group-hover:opacity-100

                  transition
                "
                >

                  view archive

                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}