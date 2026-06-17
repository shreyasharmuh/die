import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090909] text-white">

      {/* BACKGROUND IMAGE */}

      <div className="absolute inset-0">

        <Image
          src="/images/prostituee/hero.jpg"
          alt="prostituee hero"
          fill
          priority
          className="object-cover opacity-80"
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/40" />

      </div>

      {/* CONTENT */}

      <div className="relative z-10 min-h-screen flex items-center">

        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 md:px-20">

          <div className="space-y-10">

            <p className="text-[9px] tracking-[0.6em] uppercase opacity-60">

              an intimate house by die

            </p>

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

              PROSTITUTÉE

            </h1>

            <p
              className="
              max-w-xl
              text-[11px]
              uppercase
              tracking-[0.28em]
              leading-7
              opacity-70
            "
            >

              underwear, loungewear and private uniforms for women and men.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}