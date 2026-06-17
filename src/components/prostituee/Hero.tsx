import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#090909] text-white">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-20 pt-32 md:pt-40 pb-20">

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 lg:gap-28 items-center">

          <div className="space-y-14">

            <p className="text-[9px] tracking-[0.6em] uppercase opacity-40">

              an intimate house by die

            </p>

            <div className="space-y-8">

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-extralight tracking-[0.12em] leading-none">

                PROSTITUTÉE

              </h1>

              <p className="max-w-lg text-[11px] uppercase tracking-[0.28em] leading-7 opacity-55">

                underwear, loungewear and private uniforms for women and men.

              </p>

            </div>

          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[650px] lg:h-[780px] overflow-hidden">

            <Image
              src="/images/prostituee/hero.jpg"
              alt=""
              fill
              priority
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}