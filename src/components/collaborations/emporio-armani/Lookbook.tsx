import Image from "next/image";

const looks = [
  "/images/collaborations/emporio-armani/look1.jpg",
  "/images/collaborations/emporio-armani/look2.jpg",
  "/images/collaborations/emporio-armani/look3.jpg",
  "/images/collaborations/emporio-armani/look4.jpg",
];

export default function Lookbook() {
  return (
    <section className="bg-white py-52">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="mb-28">

          <p
            className="
            uppercase
            tracking-[0.75em]
            text-[10px]
            text-neutral-400
            mb-8
            "
          >
            Lookbook
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            xl:text-[7rem]
            font-extralight
            tracking-[-0.05em]
            leading-none
            "
          >
            Autumn Winter
            <br />
            2027
          </h2>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-20">

          {looks.map((image, index) => (

            <div
              key={index}
              className="group"
            >

              <div className="overflow-hidden">

                <Image
                  src={image}
                  alt=""
                  width={1200}
                  height={1600}
                  className="
                  w-full
                  aspect-[3/4]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-[1.03]
                  "
                />

              </div>

              <div className="flex justify-between mt-8">

                <p
                  className="
                  uppercase
                  tracking-[0.55em]
                  text-[10px]
                  text-neutral-400
                  "
                >
                  Look {String(index + 1).padStart(2, "0")}
                </p>

                <p
                  className="
                  uppercase
                  tracking-[0.45em]
                  text-[10px]
                  text-neutral-400
                  "
                >
                  Emporio Armani
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}