"use client";

import Image from "next/image";

const process = [
  {
    number: "01",
    title: "Italian Wool",
    text: "Every silhouette begins with carefully selected Italian fabrics chosen for their structure, weight and permanence.",
  },
  {
    number: "02",
    title: "Military Construction",
    text: "Architectural shoulders, reinforced canvasing and structured proportions define the language of the collection.",
  },
  {
    number: "03",
    title: "Gold Hardware",
    text: "Signature metallic elements are individually finished before assembly, becoming symbols rather than decoration.",
  },
  {
    number: "04",
    title: "Final Atelier",
    text: "Every garment undergoes extensive finishing, pressing and inspection before leaving the atelier.",
  },
];

export default function Craftsmanship() {
  return (
    <section className="bg-[#f6f2eb] text-[#111]">

      {/* HERO */}

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-40">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div>

            <p className="uppercase tracking-[0.55em] text-[10px] text-black/40 mb-8">
              Craftsmanship
            </p>

            <h2
              className="
              text-6xl
              md:text-[9rem]
              leading-[0.85]
              tracking-[-0.08em]
              font-extralight
            "
            >
              MADE
              <br />
              TO
              <br />
              COMMAND.
            </h2>

            <p
              className="
              mt-12
              text-lg
              leading-9
              text-black/65
              max-w-xl
            "
            >
              The DIE × BALMAIN collaboration celebrates precision rather than
              decoration. Every silhouette is engineered through tailoring,
              architectural balance and uncompromising craftsmanship.
            </p>

          </div>

          <div className="relative">

            <Image
              src="/images/balmain/atelier.jpg"
              alt="Atelier"
              width={900}
              height={1200}
              className="w-full h-[900px] object-cover"
            />

          </div>

        </div>

      </div>

      {/* STATISTICS */}

      <div className="border-y border-black/10">

        <div className="max-w-[1800px] mx-auto grid md:grid-cols-4">

          {[
            ["112", "Hours"],
            ["48", "Pattern Pieces"],
            ["17", "Artisans"],
            ["100%", "Precision"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="py-24 border-r last:border-r-0 border-black/10 text-center"
            >

              <h3
                className="
                text-7xl
                md:text-8xl
                font-extralight
                tracking-[-0.06em]
              "
              >
                {number}
              </h3>

              <p
                className="
                mt-6
                uppercase
                tracking-[0.5em]
                text-[10px]
                text-black/40
              "
              >
                {label}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* PROCESS */}

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-40">

        <div className="mb-24">

          <p className="uppercase tracking-[0.5em] text-[10px] text-black/40 mb-6">
            Construction Process
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            tracking-[-0.06em]
            font-extralight
          "
          >
            FROM FABRIC
            <br />
            TO FORM
          </h2>

        </div>

        <div className="space-y-24">

          {process.map((item) => (

            <div
              key={item.number}
              className="grid lg:grid-cols-[160px_320px_1fr] gap-16 border-t border-black/10 pt-16"
            >

              <div>

                <h3
                  className="
                  text-5xl
                  font-extralight
                  tracking-[-0.05em]
                "
                >
                  {item.number}
                </h3>

              </div>

              <div>

                <h4
                  className="
                  text-3xl
                  font-light
                "
                >
                  {item.title}
                </h4>

              </div>

              <div>

                <p
                  className="
                  leading-9
                  text-black/65
                  max-w-2xl
                "
                >
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* LARGE QUOTE */}

      <div className="bg-black text-white py-56">

        <div className="max-w-7xl mx-auto px-8">

          <h2
            className="
            text-6xl
            md:text-[9rem]
            leading-[0.85]
            tracking-[-0.08em]
            font-extralight
          "
          >
            LUXURY
            <br />
            IS
            <br />
            PRECISION.
          </h2>

          <p
            className="
            mt-16
            max-w-xl
            uppercase
            tracking-[0.45em]
            text-[11px]
            text-white/40
            leading-8
          "
          >
            Every seam exists for a reason.
            Every proportion is intentional.
            Every garment is architecture.
          </p>

        </div>

      </div>

    </section>
  );
}