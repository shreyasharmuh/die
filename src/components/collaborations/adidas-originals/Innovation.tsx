const innovations = [
  {
    id: "01",
    title: "Adaptive Performance",
    description:
      "Garments respond to movement through lightweight construction, engineered ventilation and unrestricted mobility.",
  },
  {
    id: "02",
    title: "Future Materials",
    description:
      "Advanced recycled fibers, technical knits and performance nylons create a balance between sustainability and innovation.",
  },
  {
    id: "03",
    title: "Urban Mobility",
    description:
      "Designed equally for metropolitan environments and athletic performance, blurring the distinction between sport and everyday life.",
  },
  {
    id: "04",
    title: "Timeless Systems",
    description:
      "Rather than following seasonal trends, each piece becomes part of an evolving modular wardrobe built for longevity.",
  },
];

export default function Innovation() {
  return (
    <section className="bg-black text-white py-52">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="mb-32">

          <p className="uppercase tracking-[0.6em] text-[10px] text-white/35 mb-6">

            Innovation Laboratory

          </p>

          <h2 className="text-6xl md:text-8xl xl:text-[9rem] font-extralight tracking-[-0.05em] leading-[0.9]">

            Future
            <br />
            Systems

          </h2>

        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-24">

          {innovations.map((item) => (

            <article
              key={item.id}
              className="border-t border-white/10 pt-10"
            >

              <span className="text-white/30 text-sm tracking-[0.4em]">

                {item.id}

              </span>

              <h3 className="text-4xl md:text-5xl font-extralight mt-8 mb-8">

                {item.title}

              </h3>

              <p className="text-white/60 leading-10 text-lg">

                {item.description}

              </p>

            </article>

          ))}

        </div>

        {/* Bottom Numbers */}

        <div className="grid md:grid-cols-4 gap-10 mt-44 border-t border-white/10 pt-20">

          <div>

            <p className="text-6xl font-extralight">

              100%

            </p>

            <p className="uppercase tracking-[0.35em] text-[10px] text-white/35 mt-5">

              Performance

            </p>

          </div>

          <div>

            <p className="text-6xl font-extralight">

              3

            </p>

            <p className="uppercase tracking-[0.35em] text-[10px] text-white/35 mt-5">

              Signature Stripes

            </p>

          </div>

          <div>

            <p className="text-6xl font-extralight">

              2027

            </p>

            <p className="uppercase tracking-[0.35em] text-[10px] text-white/35 mt-5">

              Collection Year

            </p>

          </div>

          <div>

            <p className="text-6xl font-extralight">

              ∞

            </p>

            <p className="uppercase tracking-[0.35em] text-[10px] text-white/35 mt-5">

              Future Archive

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}