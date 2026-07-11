import Image from "next/image";

const gallery = [
  "/images/collaborations/adidas-originals/gallery1.jpg",
  "/images/collaborations/adidas-originals/gallery2.jpg",
  "/images/collaborations/adidas-originals/gallery3.jpg",
  "/images/collaborations/adidas-originals/gallery4.jpg",
  "/images/collaborations/adidas-originals/gallery5.jpg",
  "/images/collaborations/adidas-originals/gallery6.jpg",
  "/images/collaborations/adidas-originals/gallery7.jpg",
  "/images/collaborations/adidas-originals/gallery8.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#F7F7F4] text-black py-52">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="flex justify-between items-end mb-28 flex-wrap gap-12">

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-black/40 mb-6">

              Campaign Archive

            </p>

            <h2 className="text-6xl md:text-8xl xl:text-[9rem] font-extralight tracking-[-0.05em] leading-[0.9]">

              Visual
              <br />
              Archive

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="leading-10 text-black/65">

              Eight editorial studies documenting movement,
              proportion and contemporary sportswear through
              the visual language of DIE × Adidas Originals.

            </p>

          </div>

        </div>

        {/* Masonry */}

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden break-inside-avoid group"
            >

              <Image
                src={image}
                alt=""
                width={900}
                height={1200}
                className="w-full h-auto object-cover duration-700 group-hover:scale-[1.04]"
              />

            </div>

          ))}

        </div>

        {/* Statement */}

        <div className="mt-52 border-t border-black/10 pt-24">

          <div className="grid lg:grid-cols-2 gap-24">

            <h3 className="text-5xl md:text-6xl font-extralight leading-tight">

              Built for
              movement.
              <br />
              Designed
              for culture.

            </h3>

            <p className="leading-10 text-black/60">

              The collection exists beyond fashion week and beyond
              the stadium. It belongs equally to architecture,
              music, street culture and everyday movement,
              redefining what an Originals uniform can become.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}