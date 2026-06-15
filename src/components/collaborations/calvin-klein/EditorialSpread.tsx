export default function EditorialSpread() {
  return (
    <section className="bg-white text-black py-48">

      <div className="max-w-[1800px] mx-auto px-8 md:px-16">

        {/* ISSUE NUMBER */}

        <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-12">
          collaboration issue 001
        </p>

        {/* MASSIVE TITLE */}

        <div className="mb-32">

          <h2 className="text-6xl md:text-[11rem] leading-[0.9] font-light uppercase max-w-6xl">
            the
            <br />
            essentials
            <br />
            collection
          </h2>

        </div>

        {/* EDITORIAL GRID */}

        <div className="grid md:grid-cols-12 gap-12">

          {/* LEFT */}

          <div className="md:col-span-3">

            <div className="space-y-12">

              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-2">
                  season
                </p>

                <p className="text-sm uppercase">
                  spring / summer 2027
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-2">
                  collaboration
                </p>

                <p className="text-sm uppercase">
                  calvin klein × die
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-2">
                  creative direction
                </p>

                <p className="text-sm uppercase">
                  die studio
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="md:col-span-9">

            <div className="max-w-4xl space-y-10">

              <p className="text-2xl md:text-4xl leading-relaxed font-light">
                A study in intimacy, identity,
                and contemporary dressing.
              </p>

              <p className="text-lg leading-relaxed text-black/65">
                The Essentials Collection represents
                a dialogue between restraint and
                expression. Designed through the lens
                of modern luxury, every silhouette
                prioritizes proportion, comfort,
                and permanence.
              </p>

              <p className="text-lg leading-relaxed text-black/65">
                Calvin Klein's heritage of minimalism
                intersects with DIE's emerging vision
                of editorial storytelling, creating
                garments that exist beyond seasonal
                trends and momentary relevance.
              </p>

              <p className="text-lg leading-relaxed text-black/65">
                The collection embraces simplicity
                without sacrificing character.
                Each piece is designed to become a
                permanent element within a modern
                wardrobe.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}