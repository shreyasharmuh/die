export default function FutureArchive() {
  return (
    <section className="bg-black text-white py-40 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-12">
          future archive
        </p>

        <h2 className="text-6xl md:text-[12rem] leading-[0.85] font-extralight uppercase">
          beyond
          <br />
          originals
        </h2>

        <div className="mt-24 space-y-12">

          <div className="flex justify-between border-b border-white/10 pb-8">
            <span className="text-3xl md:text-6xl font-light">
              archive 003
            </span>

            <span className="text-xs tracking-[0.4em] opacity-50">
              2028
            </span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-8">
            <span className="text-3xl md:text-6xl font-light">
              archive 004
            </span>

            <span className="text-xs tracking-[0.4em] opacity-50">
              2029
            </span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-8">
            <span className="text-3xl md:text-6xl font-light">
              archive 005
            </span>

            <span className="text-xs tracking-[0.4em] opacity-50">
              2030
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}