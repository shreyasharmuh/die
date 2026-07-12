import Image from "next/image";

export default function Campaign() {
  return (
    <section className="bg-black text-white py-44 md:py-60">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-28">

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-white/40 mb-6">

              Editorial Campaign

            </p>

            <h2
              className="
              text-5xl
              md:text-7xl
              xl:text-[8rem]
              font-extralight
              tracking-[-0.05em]
              leading-[0.9]
              "
            >
              Future
              <br />
              Motion.

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-white/60 leading-10 text-lg">

              A visual narrative exploring movement,
              architecture and identity through the
              contemporary language of Adidas Originals.

            </p>

          </div>

        </div>

       <div className="relative mb-24 overflow-hidden rounded-none">

  <Image
    src="/images/collaborations/adidas-originals/editorial.jpg"
    alt="Editorial Campaign"
    width={2400}
    height={1350}
    className="w-full h-[90vh] object-cover object-center"
    priority
  />

</div>

        {/* Editorial Grid */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <Image
            src="/images/collaborations/adidas-originals/editorial2.jpg"
            alt=""
            width={900}
            height={1200}
            className="w-full h-[900px] object-cover"
          />

          <div>

            <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 mb-8">

              Editorial Notes

            </p>

            <h3
              className="
              text-5xl
              md:text-6xl
              font-extralight
              leading-tight
              mb-12
              "
            >
              Performance
              becomes
              culture.

            </h3>

            <p className="text-white/65 leading-10 mb-10">

              Rather than documenting athletes,
              the campaign observes movement itself.
              Architecture becomes a track.
              Concrete becomes terrain.
              Clothing becomes equipment for everyday life.

            </p>

            <p className="text-white/65 leading-10">

              Every composition emphasizes rhythm,
              proportion and restraint, allowing the
              garments to communicate performance
              through simplicity rather than spectacle.

            </p>

          </div>

        </div>

        {/* Bottom Image */}

        <div className="mt-28">

          <Image
            src="/images/collaborations/adidas-originals/editorial3.jpg"
            alt=""
            width={2200}
            height={1400}
            className="w-full h-[85vh] object-cover"
          />

        </div>

      </div>
    </section>
  );
}