"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* Background */}

      <Image
        src="/images/collaborations/ea7/hero.jpg"
        alt="EA7 × DIE"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/50" />

      {/* Top Navigation */}

      <div className="absolute top-0 left-0 right-0 z-20">

        <div className="flex items-center justify-between px-12 pt-10">

          <div>

            <p className="text-xs tracking-[0.45em] uppercase text-white/70">
              Collaboration
            </p>

            <h2 className="mt-2 text-2xl font-light tracking-[-0.05em] text-white">
              EA7 × DIE
            </h2>

          </div>

          <div className="hidden lg:flex gap-12 text-[11px] uppercase tracking-[0.35em] text-white/70">

            <span>Performance</span>

            <span>Technology</span>

            <span>Collection</span>

            <span>Archive</span>

          </div>

        </div>

      </div>

      {/* Hero Copy */}

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-10">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.45em] text-xs text-white/60 mb-8">
              Emporio Armani Performance
            </p>

            <h1
              className="
              text-white
              leading-[0.86]
              tracking-[-0.08em]
              font-light
              text-[5rem]
              md:text-[8rem]
              xl:text-[10rem]
            "
            >
              PERFORMANCE
              <br />
              WITHOUT
              <br />
              COMPROMISE
            </h1>

            <p className="mt-10 max-w-xl text-white/75 leading-8 text-lg">

              Italian performance engineering meets Swiss-inspired
              minimalism. Technical garments designed for movement,
              precision and contemporary luxury.

            </p>

            <div className="mt-14 flex gap-6">

              <Link
                href="/shop/menswear"
                className="
                px-9
                py-4
                bg-white
                text-black
                uppercase
                tracking-[0.35em]
                text-xs
                hover:bg-black
                hover:text-white
                transition
              "
              >
                Discover Collection
              </Link>

              <Link
                href="#philosophy"
                className="
                flex
                items-center
                gap-3
                uppercase
                tracking-[0.35em]
                text-xs
                text-white
              "
              >
                Scroll

                <ArrowDownRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Info */}

      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        border-t
        border-white/20
        backdrop-blur-md
      "
      >

        <div className="grid md:grid-cols-4">

          {[
            ["Italian Design", "Milano"],
            ["Technology", "Performance Engineered"],
            ["Collection", "Spring / Summer"],
            ["Athlete System", "Movement First"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="border-r border-white/10 px-8 py-6"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                {title}
              </p>

              <p className="mt-3 text-white text-sm">
                {value}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}