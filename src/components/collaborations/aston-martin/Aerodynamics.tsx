import Image from "next/image";

const metrics = [
  {
    value: "0.21",
    label: "Drag Coefficient",
  },
  {
    value: "100%",
    label: "Technical Construction",
  },
  {
    value: "24",
    label: "Engineering Details",
  },
];

export default function Aerodynamics() {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 opacity-20">

        <Image
          src="/images/collaborations/aston-martin/aerodynamics.jpg"
          alt="Aerodynamics"
          fill
          className="object-cover"
        />

      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      <div className="relative max-w-[1700px] mx-auto px-8 md:px-16 py-48">

        <p className="uppercase tracking-[0.65em] text-[10px] text-[#73C7A6] mb-8">

          Wind Tunnel Laboratory

        </p>

        <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-extralight leading-[0.82] tracking-[-0.05em]">

          DESIGNED
          <br />
          FOR
          <br />
          AIRFLOW

        </h2>

        <div className="mt-20 grid lg:grid-cols-2 gap-20">

          <div>

            <p className="text-white/70 text-lg leading-10 max-w-xl">

              Formula One engineering begins with air.
              Every contour, seam and silhouette in this
              collaboration follows the same philosophy,
              reducing distraction while enhancing movement.

            </p>

          </div>

          <div className="space-y-12">

            {metrics.map((item) => (

              <div
                key={item.label}
                className="border-t border-white/10 pt-8"
              >

                <div className="flex justify-between items-end">

                  <span className="text-6xl md:text-7xl font-extralight">

                    {item.value}

                  </span>

                  <span className="uppercase tracking-[0.45em] text-[11px] text-white/50">

                    {item.label}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}