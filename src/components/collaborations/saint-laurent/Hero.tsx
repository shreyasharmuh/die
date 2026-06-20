import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white pt-40 pb-32 px-8 md:px-20">

      <div className="max-w-[1600px] mx-auto">

        <p
          className="
          text-[9px]
          uppercase
          tracking-[0.7em]
          opacity-40
          mb-10
        "
        >
          paris beauty house
        </p>

        <h1
          className="
          text-5xl
          md:text-8xl
          lg:text-[10rem]
          font-extralight
          tracking-[0.05em]
          leading-none
        "
        >

          DIE × SAINT LAURENT

        </h1>

        <p
          className="
          mt-8
          text-[10px]
          uppercase
          tracking-[0.5em]
          opacity-50
        "
        >

          objects of desire • paris • 2026

        </p>

        <div className="h-24 md:h-40" />

        <div className="relative h-[500px] md:h-[850px]">

          <Image
            src="/images/collaborations/saint-laurent/hero.jpg"
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