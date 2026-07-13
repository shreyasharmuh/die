export default function Manifesto() {
  return (
    <section className="bg-[#F8F6F2] text-[#111111]">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Top Space */}

        <div className="h-56 md:h-72" />

        {/* Label */}

        <p
          className="
          uppercase
          tracking-[0.75em]
          text-[10px]
          text-black/35
          mb-20
          "
        >
          Philosophy
        </p>

        {/* Main Statement */}

        <h2
          className="
          max-w-7xl
          text-5xl
          md:text-7xl
          xl:text-[8.5rem]
          font-extralight
          tracking-[-0.07em]
          leading-[0.9]
          "
        >
          Luxury
          <br />
          lives in
          <br />
          the hours
          <br />
          no one sees.
        </h2>

        {/* Editorial Copy */}

        <div className="grid lg:grid-cols-2 gap-28 mt-40">

          <div />

          <div className="space-y-10">

            <p
              className="
              text-lg
              leading-[2.15]
              text-black/65
              "
            >
              PROSTITUTÉE explores the quiet rituals of everyday life through
              refined loungewear, elevated essentials and timeless silhouettes.
              Every collection is designed to accompany the moments that exist
              beyond public attention.
            </p>

            <p
              className="
              text-lg
              leading-[2.15]
              text-black/65
              "
            >
              Natural fabrics, restrained tailoring and architectural
              simplicity define a wardrobe that feels effortless rather than
              expressive. Comfort is considered with the same precision as
              craftsmanship.
            </p>

            <p
              className="
              text-lg
              leading-[2.15]
              text-black/65
              "
            >
              Designed by DIE as an independent maison, PROSTITUTÉE embraces a
              slower rhythm—where garments become part of the home, the journey
              and the private hours that shape everyday life.
            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-black/10 my-40" />

        {/* Editorial Quote */}

        <div className="max-w-5xl">

          <p
            className="
            uppercase
            tracking-[0.65em]
            text-[10px]
            text-black/35
            mb-10
            "
          >
            Editorial Note
          </p>

          <h3
            className="
            text-4xl
            md:text-6xl
            font-extralight
            tracking-[-0.05em]
            leading-[1.15]
            "
          >
            Every garment
            <br />
            begins with
            <br />
            silence.
          </h3>

        </div>

        {/* Bottom Space */}

        <div className="h-56 md:h-72" />

      </div>

    </section>
  );
}