export default function Manifesto() {
  return (
    <section className="bg-[#F5F4F1] text-black py-52">

      <div className="max-w-[1700px] mx-auto px-8 md:px-20">

        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-28 items-start">

          <div>

            <p className="uppercase tracking-[0.65em] text-[10px] text-black/35 mb-8">

              Manifesto

            </p>

            <h2
              className="
              text-5xl
              md:text-7xl
              xl:text-[8rem]
              font-extralight
              tracking-[-0.05em]
              leading-[0.9]
              "
            >

              Urban
              <br />
              Precision.

            </h2>

          </div>

          <div>

            <p className="text-black/70 text-xl leading-[2.2]">

              DIE × Armani Exchange explores the relationship
              between architecture, movement and metropolitan life.
              Every silhouette is reduced to its essential form,
              where proportion replaces ornament and confidence
              becomes the defining detail.

            </p>

          </div>

        </div>

        {/* Quote */}

        <div className="mt-44 max-w-6xl">

          <blockquote
            className="
            text-4xl
            md:text-6xl
            xl:text-7xl
            font-extralight
            tracking-[-0.04em]
            leading-[1.15]
            "
          >

            "Luxury is no longer defined
            by excess.
            <br />
            It is defined by restraint,
            precision and permanence."

          </blockquote>

        </div>

        {/* Divider */}

        <div className="border-t border-black/10 my-32" />

        {/* Philosophy Grid */}

        <div className="grid lg:grid-cols-3 gap-20">

          <div>

            <p className="uppercase tracking-[0.45em] text-[10px] text-black/35 mb-6">

              Philosophy

            </p>

            <h3 className="text-3xl font-extralight">

              Contemporary
              Uniform

            </h3>

          </div>

          <div>

            <p className="leading-10 text-black/65">

              Every garment is designed
              to move naturally between
              business districts, cultural
              spaces and everyday life,
              creating a wardrobe that is
              timeless rather than seasonal.

            </p>

          </div>

          <div>

            <p className="leading-10 text-black/65">

              Inspired by Milan's modern
              skyline and Italian tailoring,
              the collection combines clean
              proportions, technical fabrics
              and understated confidence.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}