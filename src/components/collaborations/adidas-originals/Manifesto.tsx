export default function Manifesto() {
  return (
    <section className="bg-black text-white py-40">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-10">
          archive 002
        </p>

        <h2 className="text-6xl md:text-[10rem] leading-[0.9] font-extralight uppercase">
          movement
          <br />
          culture
          <br />
          identity
        </h2>

        <div className="mt-24 grid md:grid-cols-12 gap-12">

          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.4em] uppercase opacity-40">
              editorial note
            </p>
          </div>

          <div className="md:col-span-9 max-w-4xl">

            <p className="text-2xl md:text-4xl font-light leading-relaxed">
              DIE × Adidas Originals explores the
              intersection between luxury,
              architecture and contemporary
              sportswear.
            </p>

            <p className="mt-10 text-white/60 leading-relaxed">
              Inspired by concrete landscapes,
              cultural movements and archival
              silhouettes, the collection proposes
              a new language for everyday uniforms.
            </p>

            <p className="mt-6 text-white/60 leading-relaxed">
              Every garment exists between utility
              and expression. Performance and
              permanence. Sport and identity.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}