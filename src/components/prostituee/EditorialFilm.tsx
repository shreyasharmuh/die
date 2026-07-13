"use client";

export default function EditorialFilm() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#F8F6F2]">

      {/* Background Film */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/prostituee/editorial.mp4"
          type="video/mp4"
        />
      </video>

      {/* Warm Overlay */}

      <div className="absolute inset-0 bg-black/15" />

      {/* Editorial Label */}

      <div
        className="
        absolute
        top-20
        left-20
        z-20
        "
      >

        <p
          className="
          uppercase
          tracking-[0.75em]
          text-[10px]
          text-white/80
          "
        >
          Editorial Film
        </p>

      </div>

      {/* Statement */}

      <div
        className="
        absolute
        bottom-24
        left-20
        max-w-4xl
        z-20
        "
      >

        <h2
          className="
          text-white
          text-5xl
          md:text-7xl
          xl:text-[7rem]
          font-extralight
          tracking-[-0.07em]
          leading-[0.92]
          "
        >
          Home
          <br />
          becomes
          <br />
          the first
          <br />
          luxury.
        </h2>

      </div>

      {/* Bottom Right */}

      <div
        className="
        absolute
        bottom-24
        right-20
        text-right
        z-20
        "
      >

        <p
          className="
          uppercase
          tracking-[0.55em]
          text-[10px]
          text-white/70
          "
        >
          Paris
        </p>

        <p
          className="
          mt-3
          text-white/70
          text-sm
          "
        >
          Volume 001
        </p>

      </div>

    </section>
  );
}