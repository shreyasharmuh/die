"use client";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[#f6f5f2] text-black py-36 md:py-48"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Small Label */}

        <div className="mb-20">

          <p className="uppercase tracking-[0.45em] text-[11px] text-black/40">
            Performance Philosophy
          </p>

        </div>

        {/* Editorial Layout */}

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-24 items-start">

          {/* Left */}

          <div>

            <h2
              className="
              text-[4rem]
              md:text-[7rem]
              xl:text-[9rem]
              leading-[0.84]
              tracking-[-0.08em]
              font-light
            "
            >
              MOVEMENT
              <br />
              IS THE
              <br />
              NEW
              <br />
              LUXURY.
            </h2>

          </div>

          {/* Right */}

          <div className="space-y-10 pt-4">

            <p className="text-lg leading-9 text-black/70">

              Designed between Italian performance culture and Swiss
              precision, EA7 × DIE redefines modern athletic luxury.
              Every garment is engineered to move effortlessly between
              training, travel, and everyday life.

            </p>

            <p className="text-black/55 leading-8">

              Technical innovation replaces excess. Lightweight fabrics,
              architectural silhouettes, premium construction, and a
              restrained visual language create a wardrobe built for
              movement rather than spectacle.

            </p>

            <div className="border-t border-black/10 pt-8">

              <div className="grid grid-cols-2 gap-y-6">

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">
                    Origin
                  </p>

                  <p className="mt-2">
                    Milano, Italy
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">
                    Design
                  </p>

                  <p className="mt-2">
                    Performance Luxury
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">
                    Focus
                  </p>

                  <p className="mt-2">
                    Movement First
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">
                    Collection
                  </p>

                  <p className="mt-2">
                    EA7 × DIE 2026
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}