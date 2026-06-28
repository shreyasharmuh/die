"use client";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative bg-[#f7f3ec] text-[#111] overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto px-8 md:px-16 py-40">

        {/* Top Label */}

        <div className="flex justify-between items-center mb-28">

          <p className="uppercase tracking-[0.65em] text-[10px] text-black/40">
            Manifesto
          </p>

          <p className="uppercase tracking-[0.55em] text-[10px] text-black/30">
            Chapter I
          </p>

        </div>

        {/* Giant Typography */}

        <div className="grid lg:grid-cols-2 gap-24 items-start">

          <div>

            <h2
              className="
                text-[4rem]
                md:text-[7rem]
                xl:text-[9rem]
                leading-[0.82]
                tracking-[-0.08em]
                font-extralight
              "
            >
              POWER
              <br />
              IS AN
              <br />
              ARCHITECTURE.
            </h2>

          </div>

          <div className="space-y-14">

            <p
              className="
                uppercase
                tracking-[0.45em]
                text-[11px]
                text-black/40
                leading-8
                max-w-md
              "
            >
              DIE × BALMAIN is not simply a collection.
              It is a study of structure, proportion,
              confidence and contemporary luxury.
            </p>

            <p
              className="
                text-lg
                leading-9
                text-black/75
                max-w-xl
              "
            >
              Every silhouette begins with architecture.
              Tailoring becomes structure.
              Structure becomes identity.
              Military precision meets contemporary minimalism,
              creating garments that feel monumental rather than decorative.
            </p>

            <div className="border-l border-black/20 pl-8">

              <p
                className="
                  text-3xl
                  md:text-4xl
                  font-light
                  italic
                  leading-relaxed
                "
              >
                "Luxury isn't excess.
                Luxury is precision."
              </p>

            </div>

          </div>

        </div>

        {/* Editorial Grid */}

        <div className="grid md:grid-cols-3 gap-16 mt-40">

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-black/40 mb-6">
              01
            </p>

            <h3 className="text-3xl font-light mb-6">
              Architecture
            </h3>

            <p className="leading-8 text-black/65">
              Garments are designed as permanent forms,
              balancing proportion, volume and restraint.
            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-black/40 mb-6">
              02
            </p>

            <h3 className="text-3xl font-light mb-6">
              Tailoring
            </h3>

            <p className="leading-8 text-black/65">
              Military-inspired construction defines the silhouette.
              Precision replaces ornament.
            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-black/40 mb-6">
              03
            </p>

            <h3 className="text-3xl font-light mb-6">
              Identity
            </h3>

            <p className="leading-8 text-black/65">
              Luxury is expressed through confidence,
              permanence and clarity rather than trend.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}