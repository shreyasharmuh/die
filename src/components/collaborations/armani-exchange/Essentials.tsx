import Image from "next/image";

const essentials = [
  {
    image: "/images/collaborations/armani-exchange/essential1.jpg",
    category: "Outerwear",
    title: "Oversized Bomber",
  },
  {
    image: "/images/collaborations/armani-exchange/essential2.jpg",
    category: "Tops",
    title: "Relaxed Tee",
  },
  {
    image: "/images/collaborations/armani-exchange/essential3.jpg",
    category: "Bottoms",
    title: "Tailored Shorts",
  },
  {
    image: "/images/collaborations/armani-exchange/essential4.jpg",
    category: "Footwear",
    title: "Minimal Sneakers",
  },
];

export default function Essentials() {
  return (
    <section className="bg-black text-white py-56">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        <div className="flex justify-between items-end mb-28">

          <div>

            <p className="uppercase tracking-[0.7em] text-[10px] text-white/35 mb-6">

              Signature Wardrobe

            </p>

            <h2 className="text-6xl md:text-8xl xl:text-[9rem] font-extralight tracking-[-0.06em] leading-[0.88]">

              AX
              <br />
              Essentials

            </h2>

          </div>

          <p className="max-w-md text-white/60 leading-9">

            Timeless pieces designed for everyday metropolitan life.

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {essentials.map((item) => (

            <div key={item.title} className="group">

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  className="w-full h-[700px] object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <p className="uppercase tracking-[0.5em] text-[10px] text-white/35 mt-8">

                {item.category}

              </p>

              <h3 className="text-3xl font-extralight mt-4">

                {item.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}