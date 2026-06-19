import Image from "next/image";

export default function ArchiveGrid() {

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
  ];

  return (

    <section className="py-56 px-8 md:px-20">

      <div className="grid md:grid-cols-2 gap-12">

        {images.map((img, index) => (

          <div key={img}>

            <div className="relative h-[550px]">

              <Image
                src={`/images/collaborations/off-white/${img}`}
                alt=""
                fill
                className="object-cover"
              />

            </div>

            <p
              className="
              mt-6
              text-[9px]
              uppercase
              tracking-[0.6em]
              opacity-40
            "
            >

              archive 00{index + 1}

            </p>

          </div>

        ))}

      </div>

    </section>

  );
}