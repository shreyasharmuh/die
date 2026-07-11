import Image from "next/image";
import Link from "next/link";
import { collaborations } from "@/data/collaborations";

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20 pt-40 pb-56">

        {/* MICRO LABEL */}

        <p
          className="
          text-[10px]
          uppercase
          tracking-[0.75em]
          text-white/35
          mb-10
        "
        >
          DIE® Collaboration Archive
        </p>

        {/* HERO */}

        <h1
          className="
          text-6xl
          md:text-8xl
          xl:text-[10rem]
          font-extralight
          tracking-[-0.05em]
          leading-[0.9]
          max-w-5xl
        "
        >
          Collaborations
        </h1>

        <p
          className="
          mt-12
          max-w-2xl
          text-white/45
          leading-9
          text-base
          md:text-lg
        "
        >
          The Collaboration Archive documents creative partnerships between
          DIE and leading fashion houses, performance brands, luxury maisons,
          beauty institutions and motorsport innovators.
        </p>

        {/* DIVIDER */}

        <div className="h-px bg-white/10 mt-24 mb-12" />

        {/* LIST */}

        <div>

          {collaborations.map((item) => (

            <Link
              key={item.slug}
              href={`/collaborations/${item.slug}`}
              className="
              group
              flex
              items-center
              justify-between
              py-12
              border-b
              border-white/10
              transition-all
              duration-500
              hover:border-white/30
              "
            >

              {/* LEFT */}

              <div className="flex items-center gap-8">

                {/* BRAND LOGO */}

                {item.logo ? (

                  <div className="relative w-[120px] h-[36px] opacity-80 group-hover:opacity-100 transition">

                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain object-left"
                    />

                  </div>

                ) : (

                  <div className="w-[120px]" />

                )}

                {/* TITLE */}

                <div>

                  <h2
                    className="
                    text-3xl
                    md:text-5xl
                    font-extralight
                    tracking-[0.08em]
                    transition-all
                    duration-500
                    group-hover:translate-x-3
                    "
                  >
                    {item.name}
                  </h2>

                  <p
                    className="
                    mt-5
                    uppercase
                    tracking-[0.45em]
                    text-[10px]
                    text-white/35
                    "
                  >
                    {item.category}
                  </p>

                </div>

              </div>

              {/* RIGHT */}

              <div className="flex items-center gap-12">

                <p
                  className="
                  uppercase
                  tracking-[0.55em]
                  text-[10px]
                  text-white/35
                  "
                >
                  {item.status}
                </p>

                <span
                  className="
                  text-3xl
                  text-white/25
                  transition
                  duration-500
                  group-hover:translate-x-2
                  group-hover:text-white
                  "
                >
                  →
                </span>

              </div>

            </Link>

          ))}

        </div>

        {/* FOOTER */}

        <div className="mt-56 border-t border-white/10 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.6em]
            text-white/30
            "
          >
            DIE® Collaboration Archive · EST. 2026
          </p>

          <div
            className="
            flex
            gap-10
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-white/20
            "
          >
            <span>Luxury</span>
            <span>Performance</span>
            <span>Research</span>
            <span>Archive</span>
          </div>

        </div>

      </div>

    </main>
  );
}