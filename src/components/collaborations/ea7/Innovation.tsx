"use client";

const technologies = [
  {
    number: "01",
    title: "THERMO REGULATION",
    description:
      "Engineered fabrics maintain optimal body temperature across changing environments.",
  },
  {
    number: "02",
    title: "4-WAY STRETCH",
    description:
      "Complete freedom of movement with premium Italian technical textiles.",
  },
  {
    number: "03",
    title: "AIRFLOW SYSTEM",
    description:
      "Laser-perforated ventilation zones maximise breathability during activity.",
  },
  {
    number: "04",
    title: "QUICK DRY",
    description:
      "Moisture is rapidly transported away from the body for lasting comfort.",
  },
];

export default function Innovation() {
  return (
    <section className="bg-[#0b0b0b] text-white py-40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Header */}

        <div className="mb-28">

          <p className="uppercase tracking-[0.45em] text-[11px] text-white/40 mb-8">
            Performance Engineering
          </p>

          <h2
            className="
            text-[4rem]
            md:text-[7rem]
            xl:text-[9rem]
            font-light
            tracking-[-0.08em]
            leading-[0.86]
          "
          >
            BUILT
            <br />
            TO
            <br />
            PERFORM
          </h2>

        </div>

        {/* Intro */}

        <div className="grid lg:grid-cols-[1fr_1fr] gap-24 mb-32">

          <div />

          <p className="text-white/65 leading-9 text-lg">

            Every fibre, seam and silhouette has been engineered to
            maximise movement. Inspired by Italian athletic heritage and
            refined through a minimalist Swiss design philosophy, the
            collection delivers uncompromising performance without visual
            excess.

          </p>

        </div>

        {/* Technology Cards */}

        <div className="space-y-0">

          {technologies.map((item) => (

            <div
              key={item.number}
              className="
              group
              border-t
              border-white/10
              py-12
              transition
              duration-500
              hover:pl-6
            "
            >

              <div className="grid lg:grid-cols-[120px_1fr_420px] gap-10 items-center">

                <div>

                  <span className="text-white/30 text-sm tracking-[0.35em]">
                    {item.number}
                  </span>

                </div>

                <h3
                  className="
                  text-3xl
                  md:text-5xl
                  font-light
                  tracking-[-0.05em]
                "
                >
                  {item.title}
                </h3>

                <p className="leading-8 text-white/55">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

          <div className="border-t border-white/10" />

        </div>

        {/* Bottom Numbers */}

        <div className="grid md:grid-cols-4 gap-10 mt-36">

          <div>

            <h4 className="text-6xl font-light">24°</h4>

            <p className="uppercase tracking-[0.35em] text-[11px] mt-3 text-white/40">
              Thermal Comfort
            </p>

          </div>

          <div>

            <h4 className="text-6xl font-light">360°</h4>

            <p className="uppercase tracking-[0.35em] text-[11px] mt-3 text-white/40">
              Freedom of Movement
            </p>

          </div>

          <div>

            <h4 className="text-6xl font-light">4X</h4>

            <p className="uppercase tracking-[0.35em] text-[11px] mt-3 text-white/40">
              Faster Moisture Release
            </p>

          </div>

          <div>

            <h4 className="text-6xl font-light">100%</h4>

            <p className="uppercase tracking-[0.35em] text-[11px] mt-3 text-white/40">
              Italian Design
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}