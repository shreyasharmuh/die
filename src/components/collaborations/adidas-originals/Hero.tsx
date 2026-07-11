"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/collaborations/adidas-originals/hero-poster.jpg"
      >
        <source
          src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1783733714/42086d3c2a6ed1db60829520e6f36a7c_azqvzo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Top */}

      <div className="absolute top-10 left-0 right-0 z-20 flex justify-center">

        <Image
          src="/images/collaborations/adidas-originals/logo1.svg"
          alt="Adidas Originals"
          width={120}
          height={42}
          className="opacity-90"
        />

      </div>

      {/* Center */}

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-8">

        <p
          className="
          uppercase
          tracking-[0.7em]
          text-[10px]
          text-white/60
          mb-8
          "
        >
          DIE® Collaboration Archive
        </p>

        <h1
          className="
          text-5xl
          md:text-8xl
          xl:text-[9rem]
          font-extralight
          tracking-[-0.05em]
          leading-[0.9]
          "
        >
          DIE ×
          <br />
          ADIDAS ORIGINALS
        </h1>

        <p
          className="
          mt-10
          max-w-2xl
          text-white/70
          leading-9
          text-lg
          "
        >
          Performance is reimagined through contemporary tailoring,
          technical innovation and the timeless language of the Three Stripes.
        </p>

        <div className="mt-16 flex items-center gap-8">

          <span
            className="
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-white/50
            "
          >
            Performance
          </span>

          <span className="w-12 h-px bg-white/20" />

          <span
            className="
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-white/50
            "
          >
            Archive
          </span>

          <span className="w-12 h-px bg-white/20" />

          <span
            className="
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-white/50
            "
          >
            2027
          </span>

        </div>

      </div>

      {/* Bottom */}

      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center">

        <p
          className="
          uppercase
          tracking-[0.7em]
          text-[10px]
          text-white/45
          animate-pulse
          "
        >
          Scroll
        </p>

      </div>

    </section>
  );
}