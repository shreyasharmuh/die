import React from "react";
const process = [
  {
    step: "01",
    title: "Research",
    description:
      "Motorsport innovation, performance fabrics and British engineering become the foundation of every collection.",
  },
  {
    step: "02",
    title: "Simulation",
    description:
      "Silhouettes are refined digitally, balancing movement, proportion and aerodynamic efficiency.",
  },
  {
    step: "03",
    title: "Prototype",
    description:
      "Multiple garment iterations are produced to evaluate fit, comfort and technical construction.",
  },
  {
    step: "04",
    title: "Material Testing",
    description:
      "Luxury textiles undergo rigorous durability, flexibility and weather-resistance evaluation.",
  },
  {
    step: "05",
    title: "Production",
    description:
      "Every garment is manufactured with precision detailing and uncompromising craftsmanship.",
  },
  {
    step: "06",
    title: "Performance",
    description:
      "The final collection is designed to transition effortlessly from the circuit to contemporary city life.",
  },
];

export default function EngineeringProcess() {
  return (
    <section className="bg-black text-white py-44 md:py-60">

      <div className="max-w-[1700px] mx-auto px-8 md:px-16">

        <div className="mb-24">

          <p className="uppercase tracking-[0.6em] text-[10px] text-[#73C7A6] mb-8">

            Engineering Process

          </p>

          <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-extralight tracking-[-0.05em] leading-[0.88]">

            From
            <br />
            Concept
            <br />
            To Circuit

          </h2>

        </div>

        <div className="space-y-0">

          {process.map((item) => (

            <div
              key={item.step}
              className="grid lg:grid-cols-[120px_350px_1fr] gap-10 border-t border-white/10 py-14"
            >

              <span className="text-[#73C7A6] tracking-[0.45em] uppercase text-sm">

                {item.step}

              </span>

              <h3 className="text-4xl font-extralight">

                {item.title}

              </h3>

              <p className="text-white/60 leading-9 max-w-2xl">

                {item.description}

              </p>

            </div>

          ))}

          <div className="border-t border-white/10" />

        </div>

        <div className="mt-28 grid lg:grid-cols-3 gap-10">

          <div className="border border-white/10 p-10">

            <p className="text-6xl font-extralight text-[#73C7A6]">

              240+

            </p>

            <p className="uppercase tracking-[0.35em] text-xs mt-6 text-white/60">

              Hours of Development

            </p>

          </div>

          <div className="border border-white/10 p-10">

            <p className="text-6xl font-extralight text-[#73C7A6]">

              28

            </p>

            <p className="uppercase tracking-[0.35em] text-xs mt-6 text-white/60">

              Prototype Iterations

            </p>

          </div>

          <div className="border border-white/10 p-10">

            <p className="text-6xl font-extralight text-[#73C7A6]">

              100%

            </p>

            <p className="uppercase tracking-[0.35em] text-xs mt-6 text-white/60">

              Performance Focused

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}