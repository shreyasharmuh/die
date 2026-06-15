import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5f5f2] text-black overflow-hidden">

      {/* TOP METADATA */}

      <div className="absolute top-10 left-8 md:left-16 z-20">

        <p className="text-[10px] tracking-[0.35em] uppercase">
          collaboration research program
        </p>

      </div>

      <div className="absolute top-10 right-8 md:right-16 z-20 text-right">

        <p className="text-[10px] tracking-[0.35em] uppercase">
          issue 01
        </p>

      </div>

      {/* OFF WHITE LOGO */}

      <div className="relative z-20 pt-40 px-8 md:px-16">

        <Image
          src="/images/collaborations/off-white/logo.png"
          alt="Off White"
          width={220}
          height={60}
          className="object-contain"
        />

      </div>

      {/* MASSIVE DIE */}

      <div className="relative z-20 px-8 md:px-16 mt-12">

        <h1 className="text-[6rem] md:text-[14rem] leading-[0.85] font-light tracking-tight">
          DIE™
        </h1>

      </div>

      {/* META GRID */}

      <div className="relative z-20 px-8 md:px-16 mt-10">

        <div className="grid md:grid-cols-4 gap-10 text-[10px] uppercase tracking-[0.3em]">

          <div>
            <p className="opacity-40 mb-2">
              collaboration id
            </p>
            <p>ow-die-001</p>
          </div>

          <div>
            <p className="opacity-40 mb-2">
              category
            </p>
            <p>cultural object</p>
          </div>

          <div>
            <p className="opacity-40 mb-2">
              season
            </p>
            <p>spring 2027</p>
          </div>

          <div>
            <p className="opacity-40 mb-2">
              status
            </p>
            <p>active research</p>
          </div>

        </div>

      </div>

      {/* HERO IMAGE */}

      <div className="relative z-10 mt-24 px-8 md:px-16 pb-20">

        <div className="relative h-[700px] w-full overflow-hidden">

          <Image
            src="/images/collaborations/off-white/hero.jpg"
            alt="DIE x Off White"
            fill
            priority
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}