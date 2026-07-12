import Image from "next/image";

const gallery = [
  "/images/collaborations/armani-exchange/gallery1.jpg",
  "/images/collaborations/armani-exchange/gallery2.jpg",
  "/images/collaborations/armani-exchange/gallery3.jpg",
  "/images/collaborations/armani-exchange/gallery4.jpg",
  "/images/collaborations/armani-exchange/gallery5.jpg",
  "/images/collaborations/armani-exchange/gallery6.jpg",
];

export default function CampaignGallery() {
  return (
    <section className="bg-white py-56">

      <div className="max-w-[1900px] mx-auto px-8 md:px-20">

        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-32">

          <div>

            <p className="uppercase tracking-[0.7em] text-[10px] text-black/35 mb-8">

              Campaign Archive

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

              Moments
              <br />
              Between
              <br />
              Movement.

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-black/60 text-lg leading-10">

              Every frame captures the spirit of Armani Exchange—
              effortless confidence, contemporary design and a
              lifestyle shaped by architecture, movement and light.

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
                alt={`Gallery ${index + 1}`}
                width={900}
                height={1200}
                className="
                w-full
                h-auto
                object-cover
                transition
                duration-700
                group-hover:scale-105
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}