
import Image from "next/image";

const collection = [
  {
    number: "001",
    title: "Morning Uniform",
    fabric: "Heavy Organic Cotton",
    description:
      "Relaxed silhouettes developed for quiet mornings, movement and understated elegance.",
    image: "/images/prostituee/men/collection1.jpg",
  },
  {
    number: "002",
    title: "Stone Residence",
    fabric: "Brushed Cotton Jersey",
    description:
      "Architectural proportions inspired by contemporary Italian interiors and effortless living.",
    image: "/images/prostituee/men/collection2.jpg",
  },
  {
    number: "003",
    title: "Evening Silence",
    fabric: "Premium Cotton Terry",
    description:
      "Soft luxury designed for moments away from the outside world.",
    image: "/images/prostituee/men/collection3.jpg",
  },
];

export default function MenCollection() {
  return (
    <section className="bg-[#FAF8F5] text-black py-44">

      <div className="max-w-[1800px] mx-auto px-8">

        {/* Intro */}

        <div className="grid lg:grid-cols-2 gap-32 mb-40">

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
              Men's Collection
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
              Quiet
              <br />
              uniforms.
            </h2>

          </div>

          <div className="flex items-end">

            <p
              className="
              text-lg
              leading-9
              text-neutral-500
              max-w-xl
              "
            >
              Everyday essentials interpreted through generous proportions,
              natural fabrics and understated luxury.
            </p>

          </div>

        </div>

        {/* Looks */}

        <div className="space-y-52">

          {collection.map((look, index) => (

            <div
              key={look.number}
              className={`
                grid
                lg:grid-cols-2
                gap-24
                items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* Image */}

              <div className="relative aspect-[3/4] overflow-hidden group">

                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                  "
                />

              </div>

              {/* Copy */}

              <div className="max-w-xl">

                <p
                  className="
                  uppercase
                  tracking-[0.45em]
                  text-[10px]
                  text-neutral-400
                  mb-8
                  "
                >
                  Look {look.number}
                </p>

                <h3
                  className="
                  text-5xl
                  md:text-6xl
                  font-extralight
                  tracking-[-0.05em]
                  leading-[0.95]
                  "
                >
                  {look.title}
                </h3>

                <p
                  className="
                  uppercase
                  tracking-[0.35em]
                  text-[11px]
                  mt-8
                  text-neutral-500
                  "
                >
                  {look.fabric}
                </p>

                <p
                  className="
                  mt-10
                  text-lg
                  leading-9
                  text-neutral-500
                  "
                >
                  {look.description}
                </p>

                <div className="mt-20 flex items-center gap-5">

                  <div className="w-16 h-px bg-black" />

                  <span
                    className="
                    uppercase
                    tracking-[0.45em]
                    text-[10px]
                    "
                  >
                    PROSTITUTÉE
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
