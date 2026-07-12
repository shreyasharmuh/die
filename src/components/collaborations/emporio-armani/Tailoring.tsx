import Image from "next/image";

const details = [
  {
    number: "01",
    title: "Italian Wool",
    desc: "Selected superfine wool woven in Northern Italy for effortless drape and exceptional structure.",
  },
  {
    number: "02",
    title: "Cashmere",
    desc: "Ultra-soft cashmere introducing warmth while maintaining an elegant architectural silhouette.",
  },
  {
    number: "03",
    title: "Natural Linen",
    desc: "Lightweight European linen developed to create movement without sacrificing refinement.",
  },
  {
    number: "04",
    title: "Silk Blend",
    desc: "Subtle silk composition enhancing depth, softness and quiet luminosity throughout the collection.",
  },
];

export default function Tailoring() {
  return (
    <section className="bg-[#F8F8F6] text-black">

      <div className="max-w-[1900px] mx-auto">

        {/* Full Width Image */}

        <Image
          src="/images/collaborations/emporio-armani/tailoring.jpg"
          alt="Tailoring"
          width={2200}
          height={1400}
          className="
          w-full
          h-[92vh]
          object-cover
          "
        />

        <div className="max-w-[1700px] mx-auto px-8 md:px-20 py-44">

          {/* Heading */}

          <div className="grid lg:grid-cols-2 gap-28">

            <div>

              <p
                className="
                uppercase
                tracking-[0.7em]
                text-[10px]
                text-neutral-400
                mb-10
                "
              >
                Tailoring
              </p>

              <h2
                className="
                text-5xl
                md:text-7xl
                xl:text-[7.5rem]
                font-extralight
                tracking-[-0.06em]
                leading-[0.9]
                "
              >
                Designed
                <br />
                with
                <br />
                restraint.
              </h2>

            </div>

            <div className="flex items-end">

              <p
                className="
                text-lg
                leading-[2.1]
                text-neutral-600
                max-w-xl
                "
              >
                Precision begins long before a garment reaches the
                body. Every seam, proportion and material has been
                refined to create silhouettes that move naturally
                through contemporary life.
              </p>

            </div>

          </div>

          {/* Divider */}

          <div className="h-px bg-neutral-200 my-28" />

          {/* Materials */}

          <div className="grid lg:grid-cols-2 gap-x-40 gap-y-24">

            {details.map((item) => (

              <div key={item.number}>

                <p
                  className="
                  text-neutral-400
                  text-sm
                  tracking-[0.45em]
                  uppercase
                  "
                >
                  {item.number}
                </p>

                <h3
                  className="
                  text-3xl
                  font-extralight
                  mt-5
                  tracking-[-0.03em]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-6
                  text-neutral-600
                  leading-8
                  max-w-lg
                  "
                >
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}