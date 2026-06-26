import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090909] text-white">

      {/* BACKGROUND IMAGE */}

      <div className="absolute inset-0">

        <Image
          src="/images/prostituee/image8.jpg"
          alt="PROSTITUTÉE"
          fill
          priority
          className="object-cover object-center"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/45" />

        {/* SOFT GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

      </div>

      {/* HUGE BACKGROUND TYPOGRAPHY */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h2
          className="
          text-[22vw]
          font-extralight
          tracking-[0.18em]
          text-white/[0.04]
          whitespace-nowrap
          select-none
        "
        >
          ENSUISSE
        </h2>

      </div>

      {/* CONTENT */}

      <div className="relative z-10 min-h-screen flex items-center">

        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 md:px-20">

          <div className="max-w-5xl space-y-10">

            {/* MICRO TAG */}

            <div className="space-y-4">

              <p className="text-[9px] tracking-[0.5em] uppercase opacity-40">

                a subsidiary of die

              </p>

            </div>

            {/* TITLE */}

            <h1
              className="
              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-[11rem]
              xl:text-[13rem]
              font-extralight
              tracking-[0.08em]
              leading-none
            "
            >

              PROSTITUÉE

            </h1>

            {/* DESCRIPTION */}

            <div className="space-y-4">

              <p
                className="
                max-w-xl
                text-[11px]
                uppercase
                tracking-[0.28em]
                leading-8
                opacity-75
              "
              >

                second skin for women and men.

                underwear, loungewear and private uniforms.

              </p>

            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-5 pt-4">

              <button
                className="
                border
                border-white/25
                px-8
                py-4
                text-[10px]
                uppercase
                tracking-[0.45em]
                hover:bg-white
                hover:text-black
                transition-all
                duration-500
              "
              >

                womenswear

              </button>

              <button
                className="
                border
                border-white/25
                px-8
                py-4
                text-[10px]
                uppercase
                tracking-[0.45em]
                hover:bg-white
                hover:text-black
                transition-all
                duration-500
              "
              >

                menswear

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM LABEL */}

      <div
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        text-[9px]
        tracking-[0.55em]
        uppercase
        opacity-35
      "
      >

        intimacy • luxury • essentials

      </div>

    </section>
  );
}