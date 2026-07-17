"use client";

export default function CampaignFilm() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/prostituee/men/editorial.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}

      <div
        className="
        relative
        z-20
        h-full
        flex
        flex-col
        justify-end
        px-10
        md:px-24
        pb-24
        "
      >

        <p
          className="
          uppercase
          tracking-[0.55em]
          text-[10px]
          text-white/70
          mb-6
          "
        >
          Campaign Film
        </p>

        <h2
          className="
          text-white
          text-6xl
          md:text-8xl
          font-extralight
          tracking-[-0.06em]
          leading-[0.9]
          "
        >
          Comfort
          <br />
          becomes identity.
        </h2>

        <p
          className="
          mt-10
          max-w-xl
          text-white/75
          text-lg
          leading-9
          "
        >
          Motion reveals what photography cannot.
          Quiet confidence, uninterrupted movement,
          and garments that disappear into everyday life.
        </p>

      </div>

    </section>
  );
}