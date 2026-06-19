import Image from "next/image";

export default function RunwayArchive() {

  const images = [
    "archive1.jpg",
    "archive2.jpg",
    "archive3.jpg",
    "archive4.jpg",
  ];

  return (

    <section className="py-56 px-8 md:px-20 bg-black text-white">

      <div className="grid md:grid-cols-2 gap-12">

        {images.map((img, index) => (

          <div key={img}>

            <div className="relative h-[700px]">

              <Image
                src={`/images/collaborations/balenciaga/${img}`}
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