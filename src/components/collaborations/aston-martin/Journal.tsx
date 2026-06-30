import Image from "next/image";

const articles = [
  {
    number: "01",
    title: "The Architecture of Speed",
    location: "Silverstone",
    image: "/images/collaborations/aston-martin/editorial1.jpg",
  },
  {
    number: "02",
    title: "British Precision",
    location: "Gaydon",
    image: "/images/collaborations/aston-martin/editorial2.jpg",
  },
  {
    number: "03",
    title: "Luxury in Motion",
    location: "Monaco",
    image: "/images/collaborations/aston-martin/editorial3.jpg",
  },
];

export default function Journal() {
  return (
    <section className="bg-white text-black py-44 md:py-60">

      <div className="max-w-[1750px] mx-auto px-8 md:px-16">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-28">

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-[#00594F] mb-6">

              Grand Prix Journal

            </p>

            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-extralight tracking-[-0.05em] leading-[0.9]">

              Stories
              <br />
              Behind
              <br />
              Performance

            </h2>

          </div>

          <div className="max-w-xl">

            <p className="text-lg leading-10 text-black/65">

              Beyond every collection lies a culture of innovation,
              craftsmanship and engineering excellence. The Journal
              explores the people, places and ideas shaping the
              collaboration between DIE and Aston Martin Aramco
              Formula One Team.

            </p>

          </div>

        </div>

        {/* Featured Story */}

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center mb-40">

          <div className="relative aspect-[16/10] overflow-hidden">

            <Image
              src="/images/collaborations/aston-martin/editorial1.jpg"
              alt="Featured Story"
              fill
              className="object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.45em] text-[10px] text-[#00594F] mb-5">

              Feature Story

            </p>

            <h3 className="text-5xl font-extralight leading-tight mb-8">

              Engineering
              <br />
              Quiet Luxury

            </h3>

            <p className="text-black/65 leading-9">

              Modern luxury is no longer defined by excess.
              It is measured through precision, innovation
              and restraint. This philosophy drives every
              garment within the collaboration.

            </p>

          </div>

        </div>

        {/* Articles */}

        <div className="space-y-24">

          {articles.map((article) => (

            <article
              key={article.number}
              className="grid lg:grid-cols-[120px_420px_1fr] gap-12 items-center border-t border-black/10 pt-16"
            >

              <div>

                <span className="text-[#00594F] tracking-[0.45em] uppercase text-sm">

                  {article.number}

                </span>

              </div>

              <div>

                <h3 className="text-4xl md:text-5xl font-extralight leading-tight mb-5">

                  {article.title}

                </h3>

                <p className="uppercase tracking-[0.4em] text-[10px] text-black/40">

                  {article.location}

                </p>

              </div>

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </article>

          ))}

        </div>

        {/* Quote */}

        <div className="mt-44 border-t border-black/10 pt-24">

          <blockquote className="max-w-6xl">

            <p className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.04em] leading-[1.15]">

              "Performance isn't measured only in speed.
              It's measured in precision, discipline,
              craftsmanship and the confidence to remove
              everything unnecessary."

            </p>

            <footer className="mt-12 uppercase tracking-[0.45em] text-[10px] text-[#00594F]">

              DIE × Aston Martin Journal

            </footer>

          </blockquote>

        </div>

      </div>

    </section>
  );
}