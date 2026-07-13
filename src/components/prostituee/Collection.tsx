import Image from "next/image";

const collection = [
  {
    id: "01",
    category: "Brassière",
    title: "Second Skin",
    fabric: "Micro Modal Blend",
    description:
      "Designed to disappear beneath the body. Lightweight support with an effortless silhouette intended for everyday intimacy.",
    image: "/images/prostituee/collection2.jpg",
  },
  {
    id: "02",
    category: "Triangle Bra",
    title: "Quiet Form",
    fabric: "Organic Cotton Stretch",
    description:
      "Soft structure without excess. Refined proportions that move naturally between private rituals and contemporary living.",
    image: "/images/prostituee/collection1.jpg",
  },
  {
    id: "03",
    category: "Essential Lounge",
    title: "After Hours",
    fabric: "Silk Cotton Jersey",
    description:
      "Minimal essentials designed around comfort, intimacy and timeless everyday luxury.",
    image: "/images/prostituee/collection3.jpg",
  },
];

export default function Collection() {
  return (
    <section className="bg-[#faf8f5] text-black py-44">

      <div className="max-w-[1850px] mx-auto px-10">

        {/* Heading */}

        <div className="max-w-5xl mb-40">

          <p
            className="
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-neutral-400
            mb-8
            "
          >
            Collection 001
          </p>

          <h2
            className="
            text-6xl
            md:text-8xl
            font-extralight
            tracking-[-0.06em]
            leading-[0.9]
            "
          >
            Quiet objects
            <br />
            for everyday intimacy.
          </h2>

          <p
            className="
            mt-12
            max-w-2xl
            text-lg
            leading-9
            text-neutral-500
            "
          >
            Designed around comfort rather than performance.
            Every garment becomes part of a daily ritual through
            refined proportions, understated branding and timeless
            construction.
          </p>

        </div>

        <div className="space-y-56">

          {collection.map((item) => (

            <div
              key={item.id}
              className="
              grid
              lg:grid-cols-[1.25fr_0.75fr]
              gap-28
              items-center
              "
            >

              {/* Editorial Image */}

              <div
                className="
                relative
                aspect-[3/4]
                overflow-hidden
                bg-neutral-100
                "
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                  "
                />

              </div>

              {/* Information */}

              <div className="max-w-lg">

                <span
                  className="
                  uppercase
                  tracking-[0.45em]
                  text-[10px]
                  text-neutral-400
                  "
                >
                  {item.category}
                </span>

                <h3
                  className="
                  mt-8
                  text-6xl
                  font-extralight
                  tracking-[-0.05em]
                  leading-[0.92]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                  mt-12
                  flex
                  justify-between
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  text-neutral-500
                  border-y
                  border-neutral-200
                  py-5
                  "
                >
                  <span>{item.fabric}</span>

                  <span>001-{item.id}</span>
                </div>

                <p
                  className="
                  mt-12
                  text-lg
                  leading-9
                  text-neutral-500
                  "
                >
                  {item.description}
                </p>

                <div className="mt-20 flex items-center gap-6">

                  <div className="w-20 h-px bg-black" />

                  <span
                    className="
                    uppercase
                    tracking-[0.45em]
                    text-[10px]
                    "
                  >
                    PROSTITUTÉE
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}