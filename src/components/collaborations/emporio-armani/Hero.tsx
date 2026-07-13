"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-white">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1783853543/Emporio_Armani_-_2025_Fall_Winter_Men_s_Advertising_Campaign_1080p_v80ufh.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/20" />

     {/* EA7 Logo */}

<div className="absolute top-24 left-12 z-20">

  <Image
    src="/images/collaborations/ea7/ea7.png"
    alt="EA7 Emporio Armani"
    width={110}
    height={40}
    priority
    className="opacity-95"
  />

</div>

      {/* Hero */}

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-8">

        <p
          className="
          uppercase
          tracking-[0.8em]
          text-[11px]
          text-white/70
          mb-8
          "
        >
          DIE® Collaboration Archive
        </p>

        <p
          className="
          mt-10
          uppercase
          tracking-[0.55em]
          text-[10px]
          text-white/60
          "
        >
          Autumn Winter 2027
        </p>

        <p
          className="
          mt-5
          uppercase
          tracking-[0.55em]
          text-[10px]
          text-white/45
          "
        >
          Milan · Geneva · Zurich
        </p>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">

        <div className="flex flex-col items-center">

          <div className="w-[1px] h-12 bg-white/30 mb-4" />

          <p
            className="
            uppercase
            tracking-[0.65em]
            text-[10px]
            text-white/45
            "
          >
            Scroll
          </p>

        </div>

      </div>

    </section>
  );
}