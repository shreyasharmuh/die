"use client";

export default function EditorialFilm() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* Background Film */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1783853635/videoplayback_ws6lut.mp4"
          type="video/mp4"
        />
      </video>

      {/* Soft Overlay */}

      <div className="absolute inset-0 bg-black/15" />

      {/* Center Statement */}

      <div className="relative z-20 flex h-full items-center justify-center">

        <div className="text-center max-w-5xl px-8">

          <p
            className="
            uppercase
            tracking-[0.75em]
            text-[10px]
            text-white/55
            mb-12
            "
          >
            Editorial Film
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
            "
          >
            Architecture.
            <br />
            Light.
            <br />
            Movement.
          </h2>

          <p
            className="
            mt-12
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-white/40
            "
          >
            Milan · Autumn Winter 2027
          </p>

        </div>

      </div>

    </section>
  );
}