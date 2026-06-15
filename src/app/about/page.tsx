import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="px-8 md:px-16 pt-40 pb-24">

        <p className="uppercase tracking-[0.6em] text-xs text-black/40 mb-8">
          DIE / About
        </p>

        <h1 className="text-6xl md:text-[10rem] leading-[0.85] tracking-[-0.08em] font-light">
          QUIET
          <br />
          PERMANENCE
        </h1>

        <p className="max-w-2xl mt-12 text-lg leading-relaxed text-black/60">
          DIE is a contemporary luxury house built on restraint,
          proportion and permanence. We believe clothing should
          endure beyond seasons, trends and noise.
        </p>

      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="px-8 md:px-16">

        <div className="relative overflow-hidden">

          <Image
            src="/images/sec.jpg"
            alt="DIE"
            width={2000}
            height={1200}
            className="w-full h-[80vh] object-cover"
          />

        </div>

      </section>

      {/* MANIFESTO */}
      <section className="px-8 md:px-16 py-32">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-xs text-black/40 mb-10">
            Manifesto
          </p>

          <div className="space-y-10 text-xl leading-relaxed text-black/70">

            <p>
              We create garments defined not by excess, but by
              intention. Every silhouette, fabric and proportion
              is considered through the lens of longevity.
            </p>

            <p>
              DIE rejects the disposable nature of contemporary
              fashion. Instead, we pursue objects of permanence —
              pieces designed to become part of a personal archive.
            </p>

            <p>
              We believe luxury is not loud. Luxury is confidence,
              precision and silence.
            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="px-8 md:px-16 py-32 border-t border-black/10">

        <div className="grid md:grid-cols-3 gap-20">

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-5">
              Precision
            </p>

            <p className="text-black/60 leading-relaxed">
              Every detail is intentional. Every line serves a
              purpose. Every garment begins with discipline.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-5">
              Permanence
            </p>

            <p className="text-black/60 leading-relaxed">
              We design beyond seasons, pursuing forms that remain
              relevant through time.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-5">
              Restraint
            </p>

            <p className="text-black/60 leading-relaxed">
              We remove excess until only the essential remains.
            </p>
          </div>

        </div>

      </section>

      {/* QUOTE SECTION */}
      <section className="px-8 md:px-16 py-40">

        <div className="max-w-5xl">

          <p className="text-5xl md:text-8xl leading-[0.95] tracking-[-0.06em] font-light">
            Luxury begins
            <br />
            where noise ends.
          </p>

        </div>

      </section>

      {/* CRAFT */}
      <section className="grid lg:grid-cols-2">

        <div className="relative min-h-[800px]">

          <Image
            src="/images/lookbook.jpg"
            alt="Craftsmanship"
            fill
            className="object-cover"
          />

        </div>

        <div className="flex items-center px-8 md:px-20 py-24">

          <div>

            <p className="uppercase tracking-[0.4em] text-xs text-black/40 mb-8">
              Craft
            </p>

            <h2 className="text-5xl tracking-[-0.05em] font-light mb-10">
              Built To Endure
            </h2>

            <p className="text-black/60 leading-relaxed text-lg">
              We work with carefully selected materials and
              manufacturing partners who share our commitment to
              quality. Every piece is designed with durability,
              comfort and timeless relevance in mind.
            </p>

          </div>

        </div>

      </section>

      {/* FINAL STATEMENT */}
      <section className="px-8 md:px-16 py-48 border-t border-black/10">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-xs text-black/40 mb-8">
            DIE
          </p>

          <h2 className="text-5xl md:text-8xl tracking-[-0.06em] leading-[0.95] font-light">
            Designed for
            <br />
            the long horizon.
          </h2>

        </div>

      </section>

    </main>
  );
}

