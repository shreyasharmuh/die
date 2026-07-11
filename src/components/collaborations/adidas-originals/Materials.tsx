const materials = [
  {
    title: "Primeknit Evolution",
    subtitle: "Adaptive Knit Technology",
    description:
      "Engineered knit structures offering flexibility, breathability and lightweight comfort while maintaining a sculptural silhouette.",
  },
  {
    title: "Recycled Performance",
    subtitle: "Future Responsibility",
    description:
      "Advanced recycled fibers developed to reduce environmental impact without compromising technical performance or durability.",
  },
  {
    title: "Three-Stripe Identity",
    subtitle: "Archive Language",
    description:
      "The iconic adidas stripes become architectural lines that define movement, rhythm and proportion throughout the collection.",
  },
  {
    title: "Technical Nylon",
    subtitle: "Urban Protection",
    description:
      "High-density woven fabrics developed for weather resistance, lightweight structure and everyday versatility.",
  },
];

export default function Materials() {
  return (
    <section className="bg-[#F6F5F2] text-black py-44 md:py-60">

      <div className="max-w-[1700px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="mb-32">

          <p className="uppercase tracking-[0.6em] text-[10px] text-black/35 mb-6">

            Material Research

          </p>

          <h2 className="text-5xl md:text-7xl xl:text-[8rem] font-extralight tracking-[-0.05em] leading-[0.9]">

            Performance
            <br />
            Through
            <br />
            Material.

          </h2>

        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-2 gap-12">

          {materials.map((item) => (

            <article
              key={item.title}
              className="
                border
                border-black/10
                p-12
                transition
                duration-500
                hover:bg-black
                hover:text-white
              "
            >

              <p className="uppercase tracking-[0.45em] text-[10px] opacity-50 mb-6">

                {item.subtitle}

              </p>

              <h3 className="text-4xl font-extralight mb-8">

                {item.title}

              </h3>

              <p className="leading-9 opacity-70">

                {item.description}

              </p>

            </article>

          ))}

        </div>

        {/* Bottom Statement */}

        <div className="mt-40 border-t border-black/10 pt-20">

          <div className="grid lg:grid-cols-2 gap-20">

            <p className="text-4xl md:text-5xl font-extralight leading-tight">

              Every fabric is selected
              for movement before
              aesthetics.

            </p>

            <p className="text-black/60 leading-10">

              DIE × Adidas Originals approaches textiles as
              engineered systems rather than decorative surfaces.
              Every material is evaluated through performance,
              longevity and cultural relevance before entering the
              collection.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}