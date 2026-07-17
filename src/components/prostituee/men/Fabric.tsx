import Image from "next/image";

export default function Fabric() {
  return (
    <section className="bg-[#FAF8F5] py-56">

      <div className="max-w-[1850px] mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-28 items-center">

          {/* Left */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.55em]
              text-[10px]
              text-neutral-400
              mb-8
              "
            >
              Construction
            </p>

            <h2
              className="
              text-6xl
              md:text-8xl
              font-extralight
              tracking-[-0.06em]
              leading-[0.9]
              "
            >
              Made to
              <br />
              disappear.
            </h2>

            <p
              className="
              mt-14
              max-w-xl
              text-lg
              leading-9
              text-neutral-500
              "
            >
              Every seam, every waistband and every proportion exists to
              remove distraction. Garments become part of the body rather
              than an object worn over it.
            </p>

            <div className="mt-20 space-y-10">

              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400">
                  Fabric
                </p>

                <p className="mt-3 text-neutral-700">
                  320 GSM Premium Organic Cotton
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400">
                  Elastic
                </p>

                <p className="mt-3 text-neutral-700">
                  Brushed Signature Waistband
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-[10px] text-neutral-400">
                  Finish
                </p>

                <p className="mt-3 text-neutral-700">
                  Matte Soft-Touch Construction
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative aspect-[4/5] overflow-hidden">

            <Image
              src="/images/prostituee/men/fabric.jpg"
              alt="Fabric"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}