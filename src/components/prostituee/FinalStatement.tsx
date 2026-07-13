"use client";

export default function FinalStatement() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* Background Film */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/prostituee/final.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Center */}

      <div
        className="
        relative
        z-20
        h-full
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-8
        "
      >

        <p
          className="
          uppercase
          tracking-[0.7em]
          text-[10px]
          text-white/60
          mb-10
          "
        >
          Maison PROSTITUTÉE
        </p>

        <h2
          className="
          text-white
          text-6xl
          md:text-8xl
          xl:text-[9rem]
          font-extralight
          tracking-[-0.07em]
          leading-[0.9]
          "
        >
          Luxury
          <br />
          begins
          <br />
          with
          <br />
          silence.
        </h2>

        <p
          className="
          mt-12
          max-w-2xl
          text-white/75
          leading-9
          text-lg
          "
        >
          Every object is designed to disappear into everyday life,
          allowing the person—not the garment—to remain at the centre.
        </p>

      </div>

      {/* Bottom */}

      <div
        className="
        absolute
        bottom-14
        left-0
        right-0
        flex
        justify-between
        px-12
        text-white/45
        uppercase
        tracking-[0.45em]
        text-[10px]
        z-20
        "
      >

        <span>Volume 001</span>

        <span>Paris · Genève · Milano</span>

      </div>

    </section>
  );
}