import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen px-8 md:px-20 pt-40 pb-32">

      <div className="max-w-[1600px] mx-auto">

        <div className="space-y-8">

          <p className="text-[9px] tracking-[0.7em] uppercase opacity-40">

            future archive

          </p>

          <h1
            className="
            text-5xl
            md:text-8xl
            lg:text-[9rem]
            font-light
            tracking-[0.08em]
            leading-none
          "
          >

            DIE × OFF-WHITE™

          </h1>

          <p className="text-[10px] tracking-[0.6em] uppercase opacity-50">

            ongoing • 2026

          </p>

        </div>

        <div className="h-32 md:h-56" />

        <div className="relative h-[450px] md:h-[800px]">

          <Image
            src="/images/collaborations/off-white/off-white.svg"
            alt=""
            fill
            priority
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}