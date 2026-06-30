import Image from "next/image";

const equipment = [
  {
    title: "Carbon Weekender",
    subtitle: "Travel",
    image: "/images/collaborations/aston-martin/gallery1.jpg",
  },
  {
    title: "Race Backpack",
    subtitle: "Utility",
    image: "/images/collaborations/aston-martin/gallery2.jpg",
  },
  {
    title: "Performance Cap",
    subtitle: "Track",
    image: "/images/collaborations/aston-martin/gallery3.jpg",
  },
  {
    title: "Titanium Sunglasses",
    subtitle: "Vision",
    image: "/images/collaborations/aston-martin/gallery4.jpg",
  },
];

export default function DriverEquipment() {
  return (
    <section className="bg-black text-white py-44 md:py-56">

      <div className="max-w-[1700px] mx-auto px-8 md:px-16">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-24">

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-[#73C7A6] mb-6">

              Driver Equipment

            </p>

            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-extralight leading-[0.9] tracking-[-0.05em]">

              Objects
              <br />
              Of
              <br />
              Performance

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-white/60 text-lg leading-10">

              Every accessory follows the same engineering
              philosophy as the collection—precision,
              durability and understated luxury for life
              beyond the circuit.

            </p>

          </div>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {equipment.map((item) => (

            <article
              key={item.title}
              className="group"
            >

              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              </div>

              <div className="pt-6">

                <p className="uppercase tracking-[0.45em] text-[10px] text-[#73C7A6] mb-3">

                  {item.subtitle}

                </p>

                <h3 className="text-2xl font-light">

                  {item.title}

                </h3>

              </div>

            </article>

          ))}

        </div>

        {/* Feature */}

        <div className="mt-32 border-t border-white/10 pt-20">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <h3 className="text-4xl md:text-6xl font-extralight leading-tight">

                Performance
                <br />
                extends beyond
                <br />
                the garment.

              </h3>

            </div>

            <div>

              <p className="text-white/60 leading-9">

                Accessories complete the system. Carbon fibre,
                premium leather, titanium hardware and technical
                construction create a collection engineered for
                movement while maintaining the elegance expected
                from modern luxury.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}