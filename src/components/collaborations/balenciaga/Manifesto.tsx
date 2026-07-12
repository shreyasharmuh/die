export default function Manifesto() {
  return (
    <section className="bg-[#050505] text-white">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Top Space */}

        <div className="h-56 md:h-72" />

        {/* Label */}

        <p
          className="
          uppercase
          tracking-[0.8em]
          text-[10px]
          text-white/35
          mb-16
          "
        >
          Manifesto
        </p>

        {/* Statement */}

        <h2
          className="
          max-w-7xl
          text-5xl
          md:text-7xl
          xl:text-[8.5rem]
          font-extralight
          tracking-[-0.07em]
          leading-[0.88]
          "
        >
          Fashion
          <br />
          refuses
          <br />
          comfort.
        </h2>

        {/* Description */}

        <div className="grid lg:grid-cols-2 gap-28 mt-36">

          <div />

          <div>

            <p
              className="
              text-lg
              leading-[2.1]
              text-white/60
              "
            >
              DIE × Balenciaga explores a world where
              proportion is exaggerated, architecture
              becomes clothing, and silhouettes challenge
              conventional ideas of luxury.
            </p>

            <p
              className="
              mt-10
              text-lg
              leading-[2.1]
              text-white/60
              "
            >
              The collection rejects decoration in favour of
              structure, scale and attitude. Every garment
              exists as an object of design rather than a
              trend, redefining contemporary dressing
              through uncompromising simplicity.
            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-white/10 my-36" />

        {/* Quote */}

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.65em]
            text-[10px]
            text-white/35
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
            The future belongs
            <br />
            to those willing
            <br />
            to question form.
          </h3>

        </div>

        {/* Bottom Space */}

        <div className="h-56 md:h-72" />

      </div>

    </section>
  );
}