export default function DesignLanguage() {
  const systems = [
    {
      number: "01",
      title: "typography",
      description:
        "Type becomes architecture. Every character serves as a structural element within the visual system.",
    },
    {
      number: "02",
      title: "systems",
      description:
        "Design is not decoration. Design is the framework through which culture is experienced.",
    },
    {
      number: "03",
      title: "culture",
      description:
        "Fashion, music, architecture and technology merge into a single contemporary language.",
    },
  ];

  return (
    <section className="bg-black text-white py-56">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-24">
          design language
        </p>

        <div className="space-y-40">

          {systems.map((item) => (
            <div
              key={item.number}
              className="grid md:grid-cols-12 gap-10 border-t border-white/10 pt-16"
            >

              <div className="md:col-span-3">

                <div className="text-[5rem] md:text-[10rem] font-extralight leading-none opacity-20">
                  {item.number}
                </div>

              </div>

              <div className="md:col-span-9">

                <h2 className="text-5xl md:text-[8rem] leading-none font-extralight uppercase">
                  {item.title}
                </h2>

                <p className="mt-10 max-w-2xl text-white/60 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}