"use client";

export default function FinalStatement() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1783853522/videoplayback_1_ux7ck9.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}

      <div className="relative z-20 flex h-full flex-col justify-center items-center text-center px-8">

        <p
          className="
          uppercase
          tracking-[0.75em]
          text-[10px]
          text-white/60
          mb-10
          "
        >
          DIE × EMPORIO ARMANI
        </p>

        <h2
          className="
          text-5xl
          md:text-7xl
          xl:text-[8rem]
          font-extralight
          tracking-[-0.06em]
          leading-[0.9]
          text-white
          max-w-6xl
          "
        >
          Luxury
          <br />
          begins
          <br />
          with restraint.
        </h2>

        <p
          className="
          mt-16
          max-w-2xl
          text-lg
          leading-9
          text-white/70
          "
        >
          Designed through silence.
          Crafted through precision.
          Remembered through timelessness.
        </p>

        <div className="mt-20">

          <p
            className="
            uppercase
            tracking-[0.65em]
            text-[10px]
            text-white/45
            "
          >
            Milan · Autumn Winter 2027
          </p>

        </div>

      </div>

    </section>
  );
}