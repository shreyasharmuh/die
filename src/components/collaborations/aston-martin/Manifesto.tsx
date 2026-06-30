export default function Manifesto() {
  return (
    <section className="bg-white text-black py-40 md:py-56">

      <div className="max-w-[1600px] mx-auto px-8 md:px-16">

        {/* Label */}

        <p className="text-[10px] uppercase tracking-[0.6em] text-[#00594F] mb-10">

          Engineering Manifesto

        </p>

        {/* Main Statement */}

        <h2
          className="
            text-5xl
            md:text-8xl
            lg:text-[8rem]
            font-extralight
            leading-[0.9]
            tracking-[-0.05em]
            max-w-6xl
          "
        >
          Designed for motion.

          <br />

          Engineered for permanence.

        </h2>

        {/* Divider */}

        <div className="my-24 border-t border-black/10" />

        {/* Two Column Layout */}

        <div className="grid lg:grid-cols-2 gap-20">

          <div>

            <p className="uppercase tracking-[0.45em] text-[11px] text-[#00594F] mb-6">

              Philosophy

            </p>

            <h3
              className="
                text-3xl
                md:text-5xl
                font-light
                leading-tight
                max-w-xl
              "
            >
              Luxury begins where
              engineering becomes
              invisible.
            </h3>

          </div>

          <div>

            <p
              className="
                text-lg
                leading-10
                text-black/70
                max-w-2xl
              "
            >
              DIE × Aston Martin Aramco Formula One Team explores the
              intersection of performance engineering and modern luxury.
              Every silhouette is developed with the precision of motorsport,
              balancing aerodynamics, comfort and timeless design.
            </p>

            <p
              className="
                mt-10
                text-lg
                leading-10
                text-black/70
                max-w-2xl
              "
            >
              Inspired by the discipline of Formula One and the elegance of
              contemporary tailoring, this collaboration redefines everyday
              performance through technical craftsmanship, premium materials
              and understated sophistication.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}