import Image from "next/image";

const looks = [
  {
    number: "01",
    title: "Performance Uniform",
    image: "/images/collaborations/adidas-originals/look1.jpg",
  },
  {
    number: "02",
    title: "Technical Tailoring",
    image: "/images/collaborations/adidas-originals/look2.jpg",
  },
  {
    number: "03",
    title: "Archive Essentials",
    image: "/images/collaborations/adidas-originals/look3.jpg",
  },
  {
    number: "04",
    title: "Future Movement",
    image: "/images/collaborations/adidas-originals/look4.jpg",
  },
];

export default function Collection() {
  return (
    <section className="bg-black text-white py-44 md:py-60">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-28">

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-white/40 mb-6">

              Collection

            </p>

            <h2 className="text-5xl md:text-7xl xl:text-[8rem] font-extralight tracking-[-0.05em] leading-[0.9]">

              The
              <br />
              New
              <br />
              Uniform

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-white/60 leading-10 text-lg">

              A modular wardrobe designed around movement,
              precision and everyday performance. Every look
              reflects Adidas Originals' heritage through DIE's
              editorial design philosophy.

            </p>

          </div>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-16">

          {looks.map((look) => (

            <article
              key={look.number}
              className="group"
            >

              <div className="overflow-hidden">

                <Image
                  src={look.image}
                  alt={look.title}
                  width={900}
                  height={1200}
                  className="w-full h-[850px] object-cover transition duration-700 group-hover:scale-[1.03]"
                />

              </div>

              <div className="flex justify-between items-end mt-8 border-b border-white/10 pb-6">

                <div>

                  <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 mb-3">

                    Look {look.number}

                  </p>

                  <h3 className="text-3xl font-extralight">

                    {look.title}

                  </h3>

                </div>

                <span className="text-white/25 text-4xl font-extralight">

                  {look.number}

                </span>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}