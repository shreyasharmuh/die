import Image from "next/image";

const looks = [
  {
    no: "01",
    title: "Athletic Ease",
    subtitle: "Athletic Uniform",
    image: "/images/collaborations/armani-exchange/collection1.jpg",
  },
  {
    no: "02",
    title: "Transitional Layers",
    subtitle: "Urban Essentials",
    image: "/images/collaborations/armani-exchange/collection2.jpg",
  },
  {
    no: "03",
    title: "Athletic Minimalism",
    subtitle: "Athletic Uniform",
    image: "/images/collaborations/armani-exchange/collection3.jpg",
  },
  {
    no: "04",
    title: "Metropolitan Ease",
    subtitle: "Travel Uniform",
    image: "/images/collaborations/armani-exchange/collection4.jpg",
  },
  {
    no: "05",
    title: "After Dark",
    subtitle: "AX Nightwear",
    image: "/images/collaborations/armani-exchange/collection5.jpg",
  },
  {
    no: "06",
    title: "Future Classic",
    subtitle: "Italian Minimalism",
    image: "/images/collaborations/armani-exchange/collection6.jpg",
  },
];

export default function Collection() {
  return (
    <section className="bg-black text-white py-56">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-36">

          <div>

            <p className="uppercase tracking-[0.7em] text-[10px] text-white/35 mb-8">

              Collection

            </p>

            <h2
              className="
              text-6xl
              md:text-8xl
              xl:text-[9rem]
              font-extralight
              tracking-[-0.06em]
              leading-[0.88]
              "
            >

              Urban
              <br />
              Icons

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-white/60 text-lg leading-10">

              Six silhouettes exploring contemporary
              Italian tailoring, monochrome dressing
              and architectural simplicity.

            </p>

          </div>

        </div>

        {/* Editorial Grid */}

        <div className="space-y-40">

          {looks.map((look, index) => (

            <div
              key={look.no}
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Image */}

              <div className="relative aspect-[3/4] overflow-hidden group">

  <Image
    src={look.image}
    alt={look.title}
    fill
    className="
      object-cover
      object-top
      transition-transform
      duration-700
      ease-out
      group-hover:scale-[1.03]
    "
  />

</div>

              {/* Text */}

              <div>

                <p className="uppercase tracking-[0.5em] text-[11px] text-white/35 mb-8">

                  Look {look.no}

                </p>

                <h3
                  className="
                  text-5xl
                  xl:text-7xl
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
                  tracking-[0.45em]
                  text-[10px]
                  mt-8
                  text-white/45
                  "
                >

                  {look.subtitle}

                </p>

           <p
  className="
  mt-14
  max-w-lg
  leading-10
  text-white/60
  "
>
  Designed for mornings on the court and
  afternoons in the city. Breathable fabrics,
  sculpted silhouettes and understated details
  create a refined wardrobe that moves
  seamlessly between sport and lifestyle.
</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}