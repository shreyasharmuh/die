"use client";

import Image from "next/image";
import Link from "next/link";

export default function Finale() {
  return (
    <section className="relative h-[180vh] overflow-hidden bg-black">

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/balmain/finale.jpg"
          alt="BALMAIN × DIE"
          fill
          priority
          className="object-cover scale-105"
        />

      </div>

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

      {/* Typography */}

      <div
        className="
        sticky
        top-0
        h-screen
        flex
        items-center
        justify-center
        z-20
      "
      >

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.6em]
            text-[11px]
            text-white/50
            mb-12
          "
          >
            collaboration finale
          </p>

          <h1
            className="
            text-[20vw]
            md:text-[15rem]
            leading-[0.82]
            tracking-[-0.1em]
            font-extralight
            text-white
          "
          >
            BALMAIN
          </h1>

          <h2
            className="
            text-[6vw]
            font-thin
            tracking-[0.4em]
            text-white/30
            my-6
          "
          >
            ×
          </h2>

          <h1
            className="
            text-[20vw]
            md:text-[15rem]
            leading-[0.82]
            tracking-[-0.1em]
            font-extralight
            text-white
          "
          >
            die
          </h1>

          <p
            className="
            mt-16
            max-w-xl
            mx-auto
            text-white/60
            leading-9
            text-lg
          "
          >
            A dialogue between Parisian couture and contemporary
            European minimalism.
            Precision becomes identity.
            Luxury becomes culture.
          </p>

          <Link
            href="/shop"
            className="
            inline-flex
            mt-20
            border
            border-white
            px-12
            py-5
            uppercase
            tracking-[0.45em]
            text-[11px]
            hover:bg-white
            hover:text-black
            transition-all
            duration-500
          "
          >
            Discover the Collection
          </Link>

        </div>

      </div>

    </section>
  );
}