export default function FinalStatement() {
  return (
    <section className="bg-black text-white py-72 overflow-hidden">

      <div className="max-w-[1700px] mx-auto px-8 md:px-20">

        {/* Micro Label */}

        <p
          className="
          uppercase
          tracking-[0.75em]
          text-[10px]
          text-white/35
          mb-20
          "
        >
          Final Statement
        </p>

        {/* Headline */}

        <h2
          className="
          text-6xl
          md:text-8xl
          xl:text-[10rem]
          font-extralight
          tracking-[-0.07em]
          leading-[0.88]
          max-w-7xl
          "
        >
          Style
          <br />
          Exists
          <br />
          Beyond
          <br />
          Fashion.
        </h2>

        {/* Quote */}

        <div className="grid lg:grid-cols-2 gap-32 mt-36">

          <div>

            <p
              className="
              uppercase
              tracking-[0.5em]
              text-[10px]
              text-white/35
              mb-8
              "
            >
              DIE × Armani Exchange
            </p>

            <p
              className="
              text-xl
              leading-[2.2]
              text-white/65
              "
            >
              Contemporary design is not defined by excess,
              but by restraint. Every silhouette, every
              material and every movement reflects a quieter
              expression of luxury—confident, timeless and
              unmistakably modern.
            </p>

          </div>

          <div className="flex flex-col justify-end">

            <blockquote
              className="
              text-4xl
              md:text-5xl
              font-extralight
              tracking-[-0.04em]
              leading-[1.15]
              "
            >
              "Minimalism isn't the absence
              of design.
              <br />
              It's the presence
              of intention."
            </blockquote>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-40 border-t border-white/10 pt-12 flex flex-col lg:flex-row justify-between gap-8">

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-white/30
            "
          >
            DIE® × A|X ARMANI EXCHANGE
          </p>

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-white/30
            "
          >
            ARCHIVE COLLECTION • 2027
          </p>

        </div>

      </div>

    </section>
  );
}