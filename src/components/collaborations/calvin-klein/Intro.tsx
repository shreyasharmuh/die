export default function Intro() {
  return (
    <section className="bg-white text-black py-40">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* LABEL */}

        <p className="text-[10px] tracking-[0.45em] uppercase opacity-50 mb-10">
          editorial note
        </p>

        {/* HEADLINE */}

        <h2 className="text-5xl md:text-8xl font-light leading-[0.95] uppercase max-w-5xl">
          the new
          <br />
          essential
        </h2>

        {/* COPY */}

        <div className="mt-24 grid md:grid-cols-12 gap-12">

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.35em] uppercase opacity-40">
              collaboration 001
            </p>
          </div>

          <div className="md:col-span-9">

            <div className="max-w-3xl space-y-8">

              <p className="text-lg leading-relaxed text-black/80">
                Calvin Klein and DIE explore the modern
                uniform through simplicity, precision,
                and contemporary identity.
              </p>

              <p className="text-base leading-relaxed text-black/60">
                Built around the idea of essential
                dressing, the collection reinterprets
                foundational silhouettes through the
                lens of modern luxury. Every garment
                is reduced to its purest form while
                preserving character, confidence,
                and presence.
              </p>

              <p className="text-base leading-relaxed text-black/60">
                The result is a campaign that exists
                between intimacy and structure —
                where clothing becomes a quiet
                extension of identity.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}