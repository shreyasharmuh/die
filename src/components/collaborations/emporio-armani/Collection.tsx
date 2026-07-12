import Image from "next/image";

const collection = [
  {
    title: "Double Breasted Jacket",
    category: "Tailoring",
    image: "/images/collaborations/emporio-armani/collection1.jpg",
  },
  {
    title: "Cashmere Knit",
    category: "Essentials",
    image: "/images/collaborations/emporio-armani/collection2.jpg",
  },
  {
    title: "Relaxed Trousers",
    category: "Wardrobe",
    image: "/images/collaborations/emporio-armani/collection3.jpg",
  },
  {
    title: "Minimal Outerwear",
    category: "Outerwear",
    image: "/images/collaborations/emporio-armani/collection4.jpg",
  },
];

export default function Collection() {
  return (
    <section className="bg-[#F6F5F2] py-56">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between items-end mb-32">

          <div>

            <p
              className="
              uppercase
              tracking-[0.7em]
              text-[10px]
              text-neutral-400
              mb-8
              "
            >
              Collection
            </p>

            <h2
              className="
              text-5xl
              md:text-7xl
              xl:text-[8rem]
              font-extralight
              tracking-[-0.05em]
              leading-none
              "
            >
              Designed
              <br />
              For Modern
              <br />
              Living.
            </h2>

          </div>

          <p
            className="
            mt-12
            lg:mt-0
            max-w-lg
            text-neutral-500
            leading-8
            "
          >
            Every silhouette reflects the philosophy of
            understated elegance, combining contemporary
            tailoring with timeless Italian craftsmanship.
          </p>

        </div>

        {/* Collection */}

        <div className="grid lg:grid-cols-2 gap-20">

          {collection.map((item) => (

            <div
              key={item.title}
              className="group"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={1600}
                  className="
                  w-full
                  aspect-[3/4]
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                  "
                />

              </div>

              {/* Content */}

              <div className="flex justify-between items-end mt-8">

                <div>

                  <p
                    className="
                    uppercase
                    tracking-[0.55em]
                    text-[10px]
                    text-neutral-400
                    "
                  >
                    {item.category}
                  </p>

                  <h3
                    className="
                    mt-4
                    text-3xl
                    font-extralight
                    tracking-[-0.03em]
                    "
                  >
                    {item.title}
                  </h3>

                </div>

                <span
                  className="
                  uppercase
                  tracking-[0.45em]
                  text-[10px]
                  text-neutral-400
                  "
                >
                  Emporio Armani
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}