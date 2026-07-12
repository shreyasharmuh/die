import Image from "next/image";

export default function EditorialStory() {
  return (
    <section className="bg-white text-black py-48">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Small Label */}

        <p
          className="
          uppercase
          tracking-[0.75em]
          text-[10px]
          text-black/35
          mb-20
          "
        >
          Editorial 001
        </p>

        {/* Hero Editorial */}

        <div className="relative overflow-hidden">

          <Image
            src="/images/collaborations/emporio-armani/editorial1.jpg"
            alt="Emporio Armani Editorial"
            width={2200}
            height={1400}
            className="
            w-full
            h-[92vh]
            object-cover
            "
            priority
          />

          {/* Soft Gradient */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Bottom Text */}

          <div className="absolute bottom-20 left-20 max-w-3xl">

            <p
              className="
              uppercase
              tracking-[0.55em]
              text-[10px]
              text-white/60
              mb-8
              "
            >
              Milan Editorial
            </p>

            <h2
              className="
              text-5xl
              md:text-7xl
              xl:text-[8rem]
              font-extralight
              tracking-[-0.05em]
              leading-[0.92]
              text-white
              "
            >
              Quiet
              <br />
              Architecture.
            </h2>

          </div>

        </div>

        {/* Story */}

        <div className="grid lg:grid-cols-2 gap-28 mt-36">

          <div>

            <p
              className="
              uppercase
              tracking-[0.55em]
              text-[10px]
              text-black/35
              mb-10
              "
            >
              Story
            </p>

            <h3
              className="
              text-4xl
              md:text-6xl
              font-extralight
              tracking-[-0.05em]
              leading-tight
              "
            >
              Tailoring
              begins
              with silence.
            </h3>

          </div>

          <div>

            <p
              className="
              text-lg
              leading-[2.1]
              text-black/65
              "
            >
              Modern elegance isn't defined by decoration.
              It is revealed through proportion, precision
              and natural movement.
            </p>

            <p
              className="
              mt-10
              text-lg
              leading-[2.1]
              text-black/65
              "
            >
              Every garment exists to complement the body
              rather than overpower it. Architecture,
              material and light become equal elements
              within the composition.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}