
import Image from "next/image";

const stories = [
  {
    title: "Morning",
    subtitle: "The first garment of the day.",
    description:
      "Cotton essentials designed for quiet mornings, natural light and unhurried rituals.",
    image: "/images/prostituee/men/everyday1.jpg",
  },
  {
    title: "Home",
    subtitle: "Where comfort becomes identity.",
    description:
      "Relaxed silhouettes disappear into everyday life, becoming part of the architecture rather than standing apart from it.",
    image: "/images/prostituee/men/everyday2.jpg",
  },
  {
    title: "City",
    subtitle: "Luxury without performance.",
    description:
      "Layered beneath tailoring or worn alone, every garment is created to feel effortless rather than noticed.",
    image: "/images/prostituee/men/everyday3.jpg",
  },
  {
    title: "Night",
    subtitle: "Everything remains.",
    description:
      "Quiet interiors, soft fabrics and uninterrupted silhouettes conclude the rhythm of the day.",
    image: "/images/prostituee/men/everyday4.jpg",
  },
];

export default function Everyday() {
  return (
    <section className="bg-white text-black py-56">

      <div className="max-w-[1850px] mx-auto px-8">

        {/* Heading */}

        <div className="max-w-5xl mb-44">

          <p
            className="
            uppercase
            tracking-[0.55em]
            text-[10px]
            text-neutral-400
            mb-8
            "
          >
            Everyday
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
            for every hour.
          </h2>

        </div>

        {/* Editorial Sequence */}

        <div className="space-y-56">

          {stories.map((story, index) => (

            <div
              key={story.title}
              className={`
                grid
                lg:grid-cols-2
                gap-28
                items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* Image */}

              <div
                className="
                relative
                aspect-[16/10]
                overflow-hidden
                group
                "
              >

                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                  "
                />

              </div>

              {/* Copy */}

              <div className="max-w-xl">

                <p
                  className="
                  uppercase
                  tracking-[0.45em]
                  text-[10px]
                  text-neutral-400
                  mb-8
                  "
                >
                  {story.title}
                </p>

                <h3
                  className="
                  text-5xl
                  md:text-6xl
                  font-extralight
                  tracking-[-0.05em]
                  leading-[0.95]
                  "
                >
                  {story.subtitle}
                </h3>

                <p
                  className="
                  mt-12
                  text-lg
                  leading-9
                  text-neutral-500
                  "
                >
                  {story.description}
                </p>

                <div className="mt-20 flex items-center gap-5">

                  <div className="w-16 h-px bg-black" />

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