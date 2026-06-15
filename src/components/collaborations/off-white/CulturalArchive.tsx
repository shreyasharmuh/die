export default function CulturalArchive() {
  const items = [
    "the ten",
    "industrial design",
    "quotation marks",
    "diagonal stripes",
    "readymade",
    "cultural engineering",
  ];

  return (
    <section className="bg-[#f5f5f2] text-black py-32 px-8 md:px-16">

      <div className="mb-20">

        <p className="text-[10px] tracking-[0.4em] uppercase opacity-50">
          archive
        </p>

        <h2 className="text-5xl md:text-8xl font-light mt-6">
          cultural archive
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-px bg-black">

        {items.map((item) => (
          <div
            key={item}
            className="bg-[#f5f5f2] p-10 min-h-[220px]"
          >
            <p className="text-[11px] tracking-[0.35em] uppercase opacity-40">
              research
            </p>

            <h3 className="mt-8 text-3xl font-light leading-tight">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}