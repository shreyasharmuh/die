import Image from "next/image";

const images = [
  "/images/prostituee/image5.jpg",
  "/images/prostituee/image6.jpg",
  "/images/prostituee/image7.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#f7f4ef] py-20">

      <div className="grid md:grid-cols-3 gap-[2px]">

        {images.map((image) => (

          <div key={image} className="relative h-[380px] sm:h-[500px] md:h-[650px] lg:h-[720px] overflow-hidden group">

            <Image
              src={image}
              alt=""
              fill
              className="object-cover duration-700 group-hover:scale-105"
            />

          </div>

        ))}

      </div>

    </section>
  );
}