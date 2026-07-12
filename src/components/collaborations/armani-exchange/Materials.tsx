export default function Materials() {
  const materials = [
    {
      title: "Italian Cotton",
      description:
        "Premium long-staple cotton selected for exceptional softness, structure and everyday durability.",
    },
    {
      title: "Technical Jersey",
      description:
        "Lightweight stretch construction engineered for movement without compromising a refined silhouette.",
    },
    {
      title: "Tailored Wool",
      description:
        "Contemporary suiting fabrics balancing breathable comfort with precise architectural drape.",
    },
    {
      title: "Recycled Nylon",
      description:
        "Performance-inspired textiles developed for modern urban environments and conscious production.",
    },
  ];

  return (
    <section className="bg-[#f5f4f1] text-black py-56">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="grid lg:grid-cols-2 gap-24 mb-36">

          <div>

            <p className="uppercase tracking-[0.7em] text-[10px] text-black/40 mb-8">

              Materials

            </p>

            <h2
              className="
              text-6xl
              md:text-8xl
              xl:text-[9rem]
              font-extralight
              leading-[0.88]
              tracking-[-0.06em]
              "
            >

              Crafted
              <br />
              For
              <br />
              Everyday.

            </h2>

          </div>

          <div>

            <p className="text-xl leading-[2.2] text-black/65">

              Every material has been selected to balance
              contemporary luxury with metropolitan utility.
              Soft textures, technical innovation and timeless
              tailoring create garments that move effortlessly
              through modern city life.

            </p>

          </div>

        </div>

        {/* Materials */}

        <div className="border-t border-black/10">

          {materials.map((item) => (

            <div
              key={item.title}
              className="
              grid
              lg:grid-cols-[350px_1fr]
              gap-20
              py-14
              border-b
              border-black/10
              "
            >

              <h3
                className="
                text-3xl
                font-extralight
                tracking-[-0.03em]
                "
              >

                {item.title}

              </h3>

              <p
                className="
                max-w-3xl
                leading-10
                text-black/60
                "
              >

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="grid md:grid-cols-3 gap-12 mt-40">

          <div>

            <h3 className="text-6xl font-extralight">

              18

            </h3>

            <p className="uppercase tracking-[0.45em] text-[10px] text-black/40 mt-5">

              Premium Fabrics

            </p>

          </div>

          <div>

            <h3 className="text-6xl font-extralight">

              42

            </h3>

            <p className="uppercase tracking-[0.45em] text-[10px] text-black/40 mt-5">

              Tailoring Details

            </p>

          </div>

          <div>

            <h3 className="text-6xl font-extralight">

              100%

            </h3>

            <p className="uppercase tracking-[0.45em] text-[10px] text-black/40 mt-5">

              Contemporary Design

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}