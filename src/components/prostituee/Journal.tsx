import Image from "next/image";

const journal = [
  {
    number: "001",
    title: "The Architecture of Quiet",
    subtitle: "Paris",
    image: "/images/prostituee/journal1.jpg",
  },
  {
    number: "002",
    title: "Morning Rituals",
    subtitle: "Lake Como",
    image: "/images/prostituee/journal2.jpg",
  },
  {
    number: "003",
    title: "Objects of Intimacy",
    subtitle: "Tokyo",
    image: "/images/prostituee/journal3.jpg",
  },
];

export default function Journal() {
  return (
    <section className="bg-[#faf8f5] py-56">

      <div className="max-w-[1850px] mx-auto px-10">

        <div className="mb-36">

          <p
            className="
            uppercase
            tracking-[0.6em]
            text-[10px]
            text-neutral-400
            mb-8
            "
          >
            Journal
          </p>

          <h2
            className="
            text-6xl
            md:text-8xl
            font-extralight
            tracking-[-0.06em]
            leading-[0.9]
            max-w-5xl
            "
          >
            Stories
            <br />
            beyond
            <br />
            the wardrobe.
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-16">

          {journal.map((story) => (

            <article
              key={story.number}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden">

                <Image
                  src={story.image}
                  alt={story.title}
                  width={700}
                  height={900}
                  className="
                  w-full
                  h-[700px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-[1.03]
                  "
                />

              </div>

              <div className="pt-10">

                <p
                  className="
                  uppercase
                  tracking-[0.45em]
                  text-[10px]
                  text-neutral-400
                  mb-6
                  "
                >
                  Volume {story.number}
                </p>

                <h3
                  className="
                  text-4xl
                  font-extralight
                  tracking-[-0.04em]
                  leading-tight
                  "
                >
                  {story.title}
                </h3>

                <p
                  className="
                  mt-6
                  text-neutral-500
                  "
                >
                  {story.subtitle}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}