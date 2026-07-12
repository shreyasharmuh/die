import Image from "next/image";

const gallery = [
  {
    image: "/images/collaborations/emporio-armani/gallery1.jpg",
    size: "large",
    title: "Editorial 001",
  },
  {
    image: "/images/collaborations/emporio-armani/gallery2.jpg",
    size: "small",
    title: "Editorial 002",
  },
  {
    image: "/images/collaborations/emporio-armani/gallery3.jpg",
    size: "small",
    title: "Editorial 003",
  },
  {
    image: "/images/collaborations/emporio-armani/gallery4.jpg",
    size: "large",
    title: "Editorial 004",
  },
  {
    image: "/images/collaborations/emporio-armani/gallery5.jpg",
    size: "wide",
    title: "Editorial 005",
  },
];

export default function CampaignGallery() {
  return (
    <section className="bg-white py-56">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="mb-32">

          <p
            className="
            uppercase
            tracking-[0.7em]
            text-[10px]
            text-neutral-400
            mb-8
            "
          >
            Campaign Archive
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
            Moments
            <br />
            Between
            <br />
            Movement.
          </h2>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-12 gap-10">

          {/* Left */}

          <div className="col-span-12 lg:col-span-7">

            <Image
              src={gallery[0].image}
              alt=""
              width={1600}
              height={2100}
              className="
              w-full
              aspect-[4/5]
              object-cover
              "
            />

          </div>

          {/* Right */}

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-10">

            <Image
              src={gallery[1].image}
              alt=""
              width={900}
              height={1200}
              className="
              w-full
              aspect-[3/4]
              object-cover
              "
            />

            <Image
              src={gallery[2].image}
              alt=""
              width={900}
              height={1200}
              className="
              w-full
              aspect-[3/4]
              object-cover
              "
            />

          </div>

          {/* Full Width */}

          <div className="col-span-12 mt-20">

            <Image
              src={gallery[4].image}
              alt=""
              width={2200}
              height={1200}
              className="
              w-full
              aspect-[16/9]
              object-cover
              "
            />

          </div>

          {/* Bottom */}

          <div className="col-span-12 lg:col-span-5 mt-20">

            <Image
              src={gallery[3].image}
              alt=""
              width={900}
              height={1200}
              className="
              w-full
              aspect-[3/4]
              object-cover
              "
            />

          </div>

          <div className="col-span-12 lg:col-span-7 mt-20 flex items-center">

            <div className="max-w-2xl ml-auto">

              <p
                className="
                uppercase
                tracking-[0.65em]
                text-[10px]
                text-neutral-400
                mb-8
                "
              >
                Archive Note
              </p>

              <h3
                className="
                text-4xl
                md:text-6xl
                font-extralight
                tracking-[-0.04em]
                leading-tight
                "
              >
                Clothing becomes
                architecture
                when simplicity
                becomes intentional.
              </h3>

              <p
                className="
                mt-12
                text-neutral-600
                leading-8
                text-lg
                "
              >
                The campaign explores quiet luxury through
                movement, proportion and natural light.
                Every photograph is composed to preserve
                balance, allowing the garments to become
                part of the surrounding architecture rather
                than separate from it.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}