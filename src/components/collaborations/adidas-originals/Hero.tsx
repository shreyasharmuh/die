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
          src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1783733714/42086d3c2a6ed1db60829520e6f36a7c_azqvzo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Luxury Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />

      {/* subtle vignette */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.35)_100%)]" />

      {/* Adidas Logo */}

<div className="absolute top-32 md:top-36 left-0 right-0 z-20 flex justify-center">

  <Image
    src="/images/collaborations/adidas-originals/logo1.svg"
    alt="Adidas Originals"
    width={180}
    height={64}
    className="opacity-95"
  />

</div>

      {/* Editorial Content */}

      <div className="relative z-20 h-full">

        <div className="mx-auto flex h-full max-w-[1800px] items-center px-8 md:px-20">

          <div className="max-w-[900px]">

            <p
              className="
              mb-8
              uppercase
              tracking-[0.75em]
              text-[10px]
              text-white/55
            "
            >
              Collaboration 001
            </p>

            <p
              className="
              mt-10
              max-w-xl
              text-[17px]
              leading-9
              text-white/65
            "
            >
              A contemporary exploration of performance,
              architecture and culture, redefining the
              language of Originals through precision,
              movement and timeless design.
            </p>

            <div className="mt-16 flex flex-wrap items-center gap-6">

              <span className="uppercase tracking-[0.45em] text-[10px] text-white/40">

                Performance

              </span>

              <span className="h-px w-10 bg-white/20" />

              <span className="uppercase tracking-[0.45em] text-[10px] text-white/40">

                Originals

              </span>

              <span className="h-px w-10 bg-white/20" />

              <span className="uppercase tracking-[0.45em] text-[10px] text-white/40">

                Archive

              </span>

              <span className="h-px w-10 bg-white/20" />

              <span className="uppercase tracking-[0.45em] text-[10px] text-white/40">

                2027

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center">

        <div className="mb-4 h-16 w-px bg-white/25" />

        <p
          className="
          uppercase
          tracking-[0.6em]
          text-[9px]
          text-white/35
        "
        >
          Scroll
        </p>

      </div>

    </section>
  );
}