import Image from "next/image";

const principles = [
  {
    number: "01",
    title: "Aerodynamics",
    text: "Every silhouette is shaped with the same philosophy that guides Formula One airflow and efficiency.",
  },
  {
    number: "02",
    title: "Lightweight Construction",
    text: "Technical fabrics reduce weight while maintaining structure, comfort and durability.",
  },
  {
    number: "03",
    title: "Precision Tailoring",
    text: "Every seam, proportion and cut reflects the discipline of modern British engineering.",
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="bg-[#F5F5F2] py-40 md:py-56"
    >
      <div className="max-w-[1700px] mx-auto px-8 md:px-16">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

          <div className="relative aspect-[4/5] overflow-hidden">

            <Image
              src="/images/collaborations/aston-martin/engineering.jpg"
              alt="Engineering"
              fill
              className="object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-[#00594F] mb-8">

              Engineering Philosophy

            </p>

            <h2 className="text-5xl md:text-7xl font-extralight leading-[0.95] tracking-[-0.04em] mb-12">

              Performance
              <br />
              without
              <br />
              excess.

            </h2>

            <p className="text-lg leading-10 text-black/70 mb-20">

              Formula One is a relentless pursuit of efficiency.
              DIE translates that mindset into contemporary luxury,
              creating garments that balance engineering precision,
              comfort and timeless aesthetics.

            </p>

            <div className="space-y-12">

              {principles.map((item) => (

                <div
                  key={item.number}
                  className="border-t border-black/10 pt-8"
                >

                  <div className="flex items-start gap-8">

                    <span className="text-[#00594F] text-sm tracking-[0.4em]">

                      {item.number}

                    </span>

                    <div>

                      <h3 className="uppercase tracking-[0.35em] text-xs mb-4">

                        {item.title}

                      </h3>

                      <p className="text-black/60 leading-8">

                        {item.text}

                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}