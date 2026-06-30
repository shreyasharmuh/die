import Image from "next/image";

const materials = [
  {
    number: "01",
    title: "Carbon Fibre",
    description:
      "Ultra-lightweight structural material inspired by Formula One chassis engineering.",
  },
  {
    number: "02",
    title: "Italian Technical Nylon",
    description:
      "High-density woven fabric offering durability, flexibility and weather protection.",
  },
  {
    number: "03",
    title: "Merino Performance Wool",
    description:
      "Natural thermoregulation combined with refined tailoring and everyday comfort.",
  },
  {
    number: "04",
    title: "Titanium Hardware",
    description:
      "Precision-machined trims developed for strength, longevity and understated luxury.",
  },
];

export default function Materials() {
  return (
    <section className="bg-[#f7f7f4] py-44 md:py-60">

      <div className="max-w-[1750px] mx-auto px-8 md:px-16">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-24 items-center">

          {/* LEFT IMAGE */}

          <div className="relative aspect-[4/5] overflow-hidden">

            <Image
              src="/images/collaborations/aston-martin/materials.jpg"
              alt="Materials"
              fill
              className="object-cover"
            />

          </div>

          {/* RIGHT */}

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-[#00594F] mb-8">

              Material Laboratory

            </p>

            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-extralight leading-[0.9] tracking-[-0.05em]">

              Built
              <br />
              From
              <br />
              Innovation

            </h2>

            <p className="mt-10 text-lg leading-10 text-black/65 max-w-xl">

              Motorsport innovation begins with materials.
              Every textile, fibre and component has been
              selected for performance, comfort and longevity,
              creating garments that feel engineered rather
              than manufactured.

            </p>

          </div>

        </div>

        <div className="mt-36 border-t border-black/10">

          {materials.map((item) => (

            <div
              key={item.number}
              className="grid md:grid-cols-[120px_320px_1fr] gap-10 py-12 border-b border-black/10"
            >

              <span className="text-[#00594F] uppercase tracking-[0.45em] text-sm">

                {item.number}

              </span>

              <h3 className="text-3xl font-light">

                {item.title}

              </h3>

              <p className="text-black/60 leading-9 max-w-2xl">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}