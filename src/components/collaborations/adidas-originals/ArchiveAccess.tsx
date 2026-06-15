export default function ArchiveAccess() {
  return (
    <section className="bg-black text-white py-48 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-12">
          final chapter
        </p>

        <h2 className="text-6xl md:text-[10rem] leading-[0.85] font-extralight uppercase">
          archive
          <br />
          access
        </h2>

        <div className="mt-24 grid md:grid-cols-12 gap-16">

          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.4em] uppercase opacity-50">
              collaboration 002
            </p>
          </div>

          <div className="md:col-span-8">

            <div className="space-y-8 max-w-3xl">

              <p className="text-3xl md:text-5xl font-light leading-relaxed">
                The archive remains open.
              </p>

              <p className="text-white/60 leading-relaxed">
                Explore future uniforms,
                campaign releases and upcoming
                DIE collaborations.
              </p>

              <div className="pt-12">

                <button className="border border-white/20 px-10 py-4 text-xs tracking-[0.45em] uppercase hover:bg-white hover:text-black transition-all duration-300">
                  join archive
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}