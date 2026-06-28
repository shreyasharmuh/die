"use client";

const codes = [
  {
    number: "01",
    title: "POWER",
    description:
      "Power is expressed through precision, not excess. Every silhouette communicates confidence through proportion.",
  },
  {
    number: "02",
    title: "ARCHITECTURE",
    description:
      "Garments are treated as structures. Every seam, shoulder and volume is engineered with intention.",
  },
  {
    number: "03",
    title: "TAILORING",
    description:
      "French tailoring meets DIE's contemporary minimalism, creating silhouettes that transcend seasons.",
  },
  {
    number: "04",
    title: "HERITAGE",
    description:
      "Balmain's military legacy becomes the foundation for a new generation of luxury uniforms.",
  },
  {
    number: "05",
    title: "CONFIDENCE",
    description:
      "Luxury is not decoration. It is the confidence that comes from uncompromising construction.",
  },
];

export default function HouseCodes() {
  return (
    <section className="bg-[#0f0f0f] text-white">

      {codes.map((code, index) => (

        <section
          key={code.title}
          className={`min-h-screen flex items-center ${
            index % 2 === 0 ? "bg-[#0f0f0f]" : "bg-[#171717]"
          }`}
        >

          <div className="max-w-[1700px] mx-auto w-full px-8 md:px-16">

            <div className="grid lg:grid-cols-[220px_1fr] gap-20 items-center">

              {/* LEFT */}

              <div>

                <p
                  className="
                  text-[11px]
                  uppercase
                  tracking-[0.55em]
                  text-white/30
                "
                >
                  House Code
                </p>

                <h2
                  className="
                  mt-6
                  text-8xl
                  md:text-[10rem]
                  leading-none
                  font-extralight
                  tracking-[-0.08em]
                "
                >
                  {code.number}
                </h2>

              </div>

              {/* RIGHT */}

              <div>

                <h1
                  className="
                  text-[18vw]
                  md:text-[11rem]
                  xl:text-[14rem]
                  font-extralight
                  leading-[0.82]
                  tracking-[-0.09em]
                  uppercase
                "
                >
                  {code.title}
                </h1>

                <div className="max-w-xl mt-12">

                  <p
                    className="
                    text-lg
                    leading-9
                    text-white/60
                  "
                  >
                    {code.description}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      ))}

    </section>
  );
}