"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/collaborations/aston-martin/hero.jpg"
        alt="DIE × Aston Martin"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation */}

      <header className="absolute top-0 left-0 w-full z-30 px-10 md:px-16 py-10 flex justify-between items-center text-white">

        <Link
          href="/"
          className="uppercase tracking-[0.35em] text-xs"
        >
          DIE × ASTON MARTIN
        </Link>

        <div className="hidden lg:flex items-center gap-12 text-[11px] uppercase tracking-[0.35em]">

          <Link href="#">
            Collection
          </Link>

          <Link href="#">
            Engineering
          </Link>

          <Link href="#">
            Journal
          </Link>

          <Link href="#">
            Objects
          </Link>

        </div>

      </header>

      {/* Hero Content */}

      <div className="absolute inset-0 flex items-center">

        <div className="px-10 md:px-20 max-w-4xl">

          <p className="uppercase tracking-[0.6em] text-[10px] text-white/80 mb-6">

            Performance Luxury · Spring Summer 2027

          </p>

          <h1 className="text-white leading-[0.85] font-extralight">

            <span className="block text-6xl md:text-[9rem] tracking-[-0.04em]">

              ASTON

            </span>

            <span className="block text-6xl md:text-[9rem] tracking-[-0.04em]">

              MARTIN

            </span>

            <span className="block text-4xl md:text-6xl font-thin my-4">

              ×

            </span>

            <span className="block text-6xl md:text-[9rem] tracking-[-0.04em]">

              DIE

            </span>

          </h1>

          <p className="mt-10 max-w-xl text-sm md:text-base leading-8 text-white/80">

            Performance engineered through British precision,
            refined by contemporary luxury and reimagined for
            everyday movement.

          </p>

          <div className="mt-14 flex flex-wrap gap-6">

            <Link
              href="#collection"
              className="bg-white text-black px-8 py-4 uppercase tracking-[0.3em] text-[11px] hover:bg-[#00594F] hover:text-white transition"
            >
              Explore Collection
            </Link>

            <Link
              href="#engineering"
              className="uppercase tracking-[0.35em] text-[11px] text-white flex items-center"
            >
              Engineering Journal →
            </Link>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="absolute bottom-0 left-0 w-full border-t border-white/20">

        <div className="px-10 md:px-16 py-7 flex justify-between text-[10px] uppercase tracking-[0.45em] text-white/70">

          <span>British Engineering</span>

          <span>Swiss Design</span>

          <span>Italian Craftsmanship</span>

        </div>

      </div>

    </section>
  );
}