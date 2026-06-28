"use client";

import Image from "next/image";

export default function EditorialStory() {
  return (
    <section className="bg-[#f7f3ec] text-[#111] overflow-hidden">

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-40">

        <p className="uppercase tracking-[0.6em] text-[10px] text-black/40 mb-10">
          Editorial Story
        </p>

        <h1
          className="
          text-[16vw]
          md:text-[10rem]
          xl:text-[13rem]
          leading-[0.82]
          tracking-[-0.09em]
          font-extralight
        "
        >
          THE
          <br />
          NEW
          <br />
          POWER.
        </h1>

      </div>

      {/* ========================= */}
      {/* IMAGE */}
      {/* ========================= */}

      <div className="relative w-full h-[1100px]">

        <Image
          src="/images/balmain/editorial1.jpg"
          alt="Editorial"
          fill
          className="object-cover"
        />

      </div>

      {/* ========================= */}
      {/* STORY */}
      {/* ========================= */}

      <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-40">

        <div className="grid lg:grid-cols-12 gap-20">

          <div className="lg:col-span-3">

            <p
              className="
              uppercase
              tracking-[0.5em]
              text-[10px]
              text-black/40
            "
            >
              Paris · SS27
            </p>

          </div>

          <div className="lg:col-span-9">

            <p
              className="
              text-3xl
              md:text-5xl
              leading-[1.3]
              font-light
              tracking-[-0.03em]
            "
            >
              DIE × BALMAIN explores the tension between
              military heritage and contemporary minimalism.
              Every silhouette becomes architecture.
              Every proportion becomes identity.
            </p>

            <div className="grid md:grid-cols-2 gap-16 mt-24">

              <p className="leading-9 text-black/65">

                This collaboration is rooted in permanence.
                Luxury is not created through decoration,
                but through confidence, construction and
                precision. Tailoring becomes the language
                through which identity is expressed.

              </p>

              <p className="leading-9 text-black/65">

                Sculptural shoulders, restrained palettes
                and architectural proportions define a new
                generation of garments that reject trends
                in favour of timeless cultural relevance.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* QUOTE */}
      {/* ========================= */}

      <section className="bg-black text-white py-56">

        <div className="max-w-6xl mx-auto px-8">

          <h2
            className="
            text-6xl
            md:text-[8rem]
            leading-[0.85]
            tracking-[-0.08em]
            font-extralight
          "
          >
            POWER
            <br />
            IS QUIET.
          </h2>

          <p
            className="
            mt-20
            uppercase
            tracking-[0.45em]
            text-[11px]
            text-white/40
            leading-8
            max-w-xl
          "
          >
            Luxury whispers.
            Precision speaks louder
            than excess.
          </p>

        </div>

      </section>

      {/* ========================= */}
      {/* FINAL IMAGE */}
      {/* ========================= */}

      <div className="relative h-[1000px]">

        <Image
          src="/images/balmain/editorial2.jpg"
          alt="Editorial"
          fill
          className="object-cover"
        />

      </div>

    </section>
  );
}