"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#f7f3ec] text-white">

      {/* Background Image */}

      <Image
        src="/images/balmain/hero.jpg"
        alt="BALMAIN x DIE"
        fill
        priority
        className="object-cover scale-[1.04]"
      />

      {/* Luxury overlays */}

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />

      {/* Navigation */}

      <div className="absolute top-0 left-0 right-0 z-30">

        <div className="px-8 md:px-16 py-10 flex items-center justify-between">

          <div>

            <p className="text-[10px] tracking-[0.7em] uppercase text-white/70">

              BALMAIN PARIS

            </p>

          </div>

          <div className="hidden lg:flex gap-12 text-[11px] uppercase tracking-[0.45em]">

            <Link href="#" className="hover:text-white/70 transition">

              Collection

            </Link>

            <Link href="#" className="hover:text-white/70 transition">

              Atelier

            </Link>

            <Link href="#" className="hover:text-white/70 transition">

              Journal

            </Link>

            <Link href="#" className="hover:text-white/70 transition">

              Craftsmanship

            </Link>

          </div>

        </div>

      </div>

      {/* Hero */}

      <div className="relative z-20 h-full">

        <div className="max-w-[1700px] h-full mx-auto px-8 md:px-16">

          <div className="h-full flex flex-col justify-center">

            <div className="max-w-5xl">

              <p className="uppercase tracking-[0.65em] text-[10px] text-white/70 mb-10">

                Exclusive Collaboration · Paris · Spring Summer 2027

              </p>

              <h1
                className="
                font-extralight
                leading-[0.82]
                tracking-[-0.08em]
                text-[4.5rem]
                sm:text-[6rem]
                md:text-[8rem]
                lg:text-[10rem]
                xl:text-[11rem]
              "
              >

                DIE ×

                <br />

                BALMAIN

              </h1>

              <p
                className="
                mt-12
                max-w-xl
                leading-8
                text-white/80
                text-sm
                uppercase
                tracking-[0.35em]
              "
              >

                Architecture.

                Military tailoring.

                Sculptural silhouettes.

                French luxury reinterpreted through DIE.

              </p>

              <div className="flex flex-wrap gap-5 mt-16">

                <Link
                  href="#collection"
                  className="
                  border
                  border-white
                  px-10
                  py-4
                  uppercase
                  tracking-[0.45em]
                  text-[11px]
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-500
                "
                >

                  Discover Collection

                </Link>

                <Link
                  href="#manifesto"
                  className="
                  border
                  border-white/30
                  px-10
                  py-4
                  uppercase
                  tracking-[0.45em]
                  text-[11px]
                  hover:border-white
                  transition-all
                  duration-500
                "
                >

                  Read Manifesto

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Right Information */}

      <div
        className="
        absolute
        right-12
        bottom-20
        z-30
        hidden
        xl:block
      "
      >

        <div className="space-y-8 text-right">

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-white/50">

              Collection

            </p>

            <p className="mt-2 text-white">

              L'Architecture du Pouvoir

            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-white/50">

              Location

            </p>

            <p className="mt-2 text-white">

              Paris

            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-white/50">

              Season

            </p>

            <p className="mt-2 text-white">

              SS27

            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        z-30
        border-t
        border-white/20
      "
      >

        <div
          className="
          px-8
          md:px-16
          py-8
          flex
          items-center
          justify-between
        "
        >

          <div>

            <p
              className="
              text-[10px]
              uppercase
              tracking-[0.55em]
              text-white/50
            "
            >

              Power · Precision · Heritage

            </p>

          </div>

          <div>

            <p
              className="
              text-[10px]
              uppercase
              tracking-[0.55em]
              text-white/50
            "
            >

              Scroll ↓

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}