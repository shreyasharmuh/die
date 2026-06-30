import Image from "next/image";

const editorials = [
  {
    title: "Silverstone",
    year: "01",
    image: "/images/collaborations/aston-martin/editorial1.jpg",
  },
  {
    title: "Monaco",
    year: "02",
    image: "/images/collaborations/aston-martin/editorial2.jpg",
  },
  {
    title: "Abu Dhabi",
    year: "03",
    image: "/images/collaborations/aston-martin/editorial3.jpg",
  },
];

export default function Editorial() {
  return (
    <section className="bg-[#F8F8F6] py-44 md:py-60">

      <div className="max-w-[1750px] mx-auto px-8 md:px-16">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-28">

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-[#00594F] mb-6">

              Campaign Journal

            </p>

            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-extralight tracking-[-0.05em] leading-[0.9]">

              Editorial
              <br />
              Campaign

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-black/65 text-lg leading-10">

              Captured across Formula One paddocks, contemporary
              architecture and private engineering facilities, the
              campaign documents the relationship between luxury,
              speed and precision through cinematic storytelling.

            </p>

          </div>

        </div>

        {/* Editorial Grid */}

        <div className="grid lg:grid-cols-3 gap-10">

          {editorials.map((item) => (

            <article
              key={item.title}
              className="group"
            >

              <div className="relative aspect-[3/4] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <p className="text-white/70 uppercase tracking-[0.45em] text-[10px] mb-3">

                    Editorial {item.year}

                  </p>

                  <h3 className="text-white text-4xl font-light">

                    {item.title}

                  </h3>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom Statement */}

        <div className="mt-40 border-t border-black/10 pt-16">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <h3 className="text-4xl md:text-6xl font-extralight leading-tight">

                Every destination
                becomes part of
                the uniform.

              </h3>

            </div>

            <div>

              <p className="text-black/65 leading-9">

                The collection moves naturally from the paddock to
                metropolitan environments. Technical luxury allows
                each garment to transition effortlessly between
                performance engineering and contemporary tailoring.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}