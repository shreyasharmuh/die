"use client";

import Image from "next/image";

type HeroProps = {
  gender: "men" | "women";
  setGender: React.Dispatch<
    React.SetStateAction<"men" | "women">
  >;
};

export default function Hero({
  gender,
  setGender,
}: HeroProps) {
  return (
  <section className="relative h-screen overflow-hidden bg-[#F8F6F2] text-black">

    {/* Background Video */}

    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src={
          gender === "men"
            ? "/videos/prostituee/hero-men.mp4"
            : "/videos/prostituee/hero-women.mp4"
        }
        type="video/mp4"
      />
    </video>

    {/* Overlay */}

    <div className="absolute inset-0 bg-black/30" />

    {/* Brand Header */}

    <div
      className="
      absolute
      top-10
      left-1/2
      -translate-x-1/2
      z-30
      flex
      flex-col
      items-center
      gap-8
      "
    >

      <Image
        src="/images/prostituee/logo.svg"
        alt="PROSTITUTÉE"
        width={340}
        height={36}
        priority
        className="opacity-95"
      />

      <div className="flex items-center gap-12">

        <button
          onClick={() => setGender("men")}
          className={`
          uppercase
          tracking-[0.45em]
          text-[10px]
          pb-2
          transition-all
          duration-300
          ${
            gender === "men"
              ? "text-white border-b border-white"
              : "text-white/55 border-b border-transparent hover:text-white"
          }
          `}
        >
          Men
        </button>

        <button
          onClick={() => setGender("women")}
          className={`
          uppercase
          tracking-[0.45em]
          text-[10px]
          pb-2
          transition-all
          duration-300
          ${
            gender === "women"
              ? "text-white border-b border-white"
              : "text-white/55 border-b border-transparent hover:text-white"
          }
          `}
        >
          Women
        </button>

      </div>

    </div>

    {/* Center Content */}

    <div
      className="
      relative
      z-20
      flex
      h-full
      flex-col
      items-center
      justify-center
      text-center
      px-8
      "
    >

      <h1
        className="
        text-white
        text-6xl
        md:text-8xl
        xl:text-[9rem]
        font-extralight
        tracking-[-0.08em]
        leading-[0.88]
        "
      >
        PROSTITUTÉE
      </h1>

      <p
        className="
        mt-10
        uppercase
        tracking-[0.65em]
        text-[10px]
        text-white/80
        "
      >
        {gender === "men"
          ? "Menswear · Lounge · Essentials"
          : "Womenswear · Lounge · Essentials"}
      </p>

      <p
        className="
        mt-6
        max-w-2xl
        text-white/85
        text-lg
        md:text-xl
        leading-9
        font-light
        "
      >
        Quiet luxury for the moments
        before the world begins.
      </p>

    </div>

    {/* Bottom */}

    <div
      className="
      absolute
      bottom-12
      left-0
      right-0
      z-20
      px-10
      md:px-20
      flex
      justify-between
      items-end
      "
    >

      <div>

        <p
          className="
          uppercase
          tracking-[0.55em]
          text-[10px]
          text-white/70
          "
        >
          Volume 001
        </p>

        <p
          className="
          mt-3
          text-white/60
          text-sm
          "
        >
          Spring / Summer 2027
        </p>

      </div>

      <div className="text-right">

        <p
          className="
          uppercase
          tracking-[0.55em]
          text-[10px]
          text-white/70
          "
        >
          Paris · Genève · Milano
        </p>

      </div>

    </div>

    {/* Scroll */}

    <div
      className="
      absolute
      bottom-12
      left-1/2
      -translate-x-1/2
      z-20
      flex
      flex-col
      items-center
      "
    >

      <div className="w-px h-12 bg-white/40 mb-4" />

      <span
        className="
        uppercase
        tracking-[0.7em]
        text-[10px]
        text-white/70
        "
      >
        Scroll
      </span>

    </div>

  </section>
);
}