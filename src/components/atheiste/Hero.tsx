import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen px-6 md:px-20 pt-40 pb-32">

      <div className="max-w-[1600px] mx-auto">

        <div className="space-y-12">

          <p
            className="
            text-[9px]
            uppercase
            tracking-[0.7em]
            opacity-40
          "
          >
            a subsidiary of die
          </p>

          <h1
            className="
            text-6xl
            md:text-8xl
            lg:text-[10rem]
            font-extralight
            tracking-[0.18em]
            leading-none
          "
          >
            ATHÉISTE
          </h1>

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.6em]
            opacity-60
          "
          >
            elegance through absence
          </p>

        </div>

        <div className="h-40 md:h-60" />

        <div className="relative h-[450px] md:h-[750px] overflow-hidden">

          <Image
            src="/images/atheiste/hero3.jpg"
            alt="ATHÉISTE"
            fill
            priority
            className="object-cover"
          />

        </div>

      </div>

    </section>
  );
}