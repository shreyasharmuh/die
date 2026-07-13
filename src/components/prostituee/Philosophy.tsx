import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="bg-white">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20 py-40">

        {/* Top Label */}

        <p
          className="
          uppercase
          tracking-[0.7em]
          text-[10px]
          text-black/35
          mb-20
          "
        >
          Living Philosophy
        </p>

        {/* Editorial Grid */}

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

          {/* Left */}

          <div>

            <h2
              className="
              text-5xl
              md:text-7xl
              xl:text-[8rem]
              font-extralight
              tracking-[-0.06em]
              leading-[0.92]
              "
            >
              Designed
              <br />
              for
              <br />
              slow
              <br />
              mornings.
            </h2>

            <p
              className="
              mt-20
              max-w-xl
              text-lg
              leading-[2.1]
              text-black/60
              "
            >
              Every collection begins with the belief that luxury
              should feel lived in rather than displayed.
              Natural materials, quiet tailoring and thoughtful
              proportions shape garments that belong to everyday
              rituals rather than occasions.
            </p>

          </div>

          {/* Right */}

          <div>

            <Image
              src="/images/prostituee/philosophy.jpg"
              alt="Living Philosophy"
              width={900}
              height={1200}
              className="
              w-full
              h-[820px]
              object-cover
              "
            />

          </div>

        </div>

        {/* Bottom Quote */}

        <div className="mt-48 max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-black/35
            mb-8
            "
          >
            Maison Note
          </p>

          <h3
            className="
            text-4xl
            md:text-6xl
            font-extralight
            tracking-[-0.05em]
            leading-[1.12]
            "
          >
            Comfort is not
            <br />
            a compromise.
            <br />
            It is the highest
            <br />
            expression of luxury.
          </h3>

        </div>

      </div>

    </section>
  );
}