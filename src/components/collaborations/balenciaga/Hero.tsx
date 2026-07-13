"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1783870698/videoplayback_2_embibo.webm"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Logo */}

      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20">

        <Image
          src="/images/collaborations/balenciaga/logo.png"
          alt="Balenciaga"
          width={260}
          height={52}
          priority
          className="opacity-95"
        />

      </div>

      {/* Hero Content */}

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-8">

        <p
          className="
          uppercase
          tracking-[0.8em]
          text-[10px]
          text-white/60
          mb-10
          "
        >
          DIE® Collaboration Archive
        </p>

        <p
          className="
          mt-14
          uppercase
          tracking-[0.6em]
          text-[10px]
          text-white/55
          "
        >
          Winter 2027
        </p>

        <p
          className="
          mt-4
          uppercase
          tracking-[0.55em]
          text-[10px]
          text-white/40
          "
        >
          Paris · Antwerp · Berlin
        </p>

      </div>

      {/* Bottom */}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">

        <div className="flex flex-col items-center">

          <div className="w-px h-14 bg-white/25 mb-4" />

          <p
            className="
            uppercase
            tracking-[0.7em]
            text-[10px]
            text-white/40
            "
          >
            Scroll
          </p>

        </div>

      </div>

    </section>
  );
}