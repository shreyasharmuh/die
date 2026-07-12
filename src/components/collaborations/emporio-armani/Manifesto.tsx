export default function Manifesto() {
  return (
    <section className="bg-white text-black">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Top Whitespace */}

        <div className="h-56 md:h-72" />

        {/* Micro Label */}

        <p
          className="
          uppercase
          tracking-[0.75em]
          text-[10px]
          text-black/35
          mb-14
          "
        >
          Manifesto
        </p>

        {/* Statement */}

        <h2
          className="
          max-w-6xl
          text-5xl
          md:text-7xl
          xl:text-[8rem]
          font-extralight
          tracking-[-0.06em]
          leading-[0.92]
          "
        >
          The elegance
          <br />
          of restraint.
        </h2>

        {/* Description */}

        <div className="grid lg:grid-cols-2 gap-24 mt-28">

          <div />

          <div>

            <p
              className="
              text-lg
              leading-[2.1]
              text-black/65
              "
            >
              Emporio Armani explores a quieter expression of
              luxury. Precision replaces excess, architecture
              replaces decoration and movement becomes the
              defining language of contemporary tailoring.
            </p>

            <p
              className="
              mt-10
              text-lg
              leading-[2.1]
              text-black/65
              "
            >
              Designed through the lens of DIE®, this collaboration
              reflects timeless silhouettes, refined materials and
              an editorial perspective inspired by modern cities,
              natural light and understated sophistication.
            </p>

          </div>

        </div>

        {/* Bottom Quote */}

        <div className="mt-44">

          <div className="w-24 h-px bg-black/15 mb-10" />

          <p
            className="
            text-3xl
            md:text-4xl
            font-extralight
            tracking-[-0.04em]
            leading-[1.3]
            max-w-3xl
            "
          >
            Luxury isn't louder.
            <br />
            It is simply more intentional.
          </p>

        </div>

        {/* Bottom Whitespace */}

        <div className="h-56 md:h-72" />

      </div>

    </section>
  );
}