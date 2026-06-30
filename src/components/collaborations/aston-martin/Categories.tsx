import Image from "next/image";

const categories = [
  {
    title: "Performance Outerwear",
    description:
      "Technical tailoring inspired by Formula One engineering.",
    image: "/images/collaborations/aston-martin/editorial1.jpg",
  },
  {
    title: "Technical Jersey",
    description:
      "Breathable performance essentials refined through luxury craftsmanship.",
    image: "/images/collaborations/aston-martin/editorial2.jpg",
  },
  {
    title: "Race Weekend",
    description:
      "Contemporary uniforms for travel, paddock life and modern movement.",
    image: "/images/collaborations/aston-martin/editorial3.jpg",
  },
  {
    title: "Performance Objects",
    description:
      "Carbon fibre accessories and engineered everyday essentials.",
    image: "/images/collaborations/aston-martin/gallery1.jpg",
  },
];

export default function Categories() {
  return (
    <section
      id="collection"
      className="bg-black text-white py-40 md:py-56"
    >
      <div className="max-w-[1700px] mx-auto px-8 md:px-16">

        <div className="mb-24">

          <p className="uppercase tracking-[0.6em] text-[10px] text-[#73C7A6] mb-6">

            Performance Collection

          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[-0.04em] leading-[0.9]">

            Engineered
            <br />
            Wardrobe

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {categories.map((item) => (

            <article
              key={item.title}
              className="group"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              </div>

              <div className="pt-8">

                <h3 className="text-3xl md:text-4xl font-light tracking-[-0.03em]">

                  {item.title}

                </h3>

                <p className="mt-6 text-white/60 leading-8 max-w-md">

                  {item.description}

                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}