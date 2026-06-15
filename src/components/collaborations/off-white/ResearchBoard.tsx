export default function ResearchBoard() {
  const research = [
    {
      number: "001",
      title: "quotation marks",
      description:
        "Language becomes design. Objects become conversation.",
    },
    {
      number: "002",
      title: "industrial design",
      description:
        "Function and aesthetics exist within the same system.",
    },
    {
      number: "003",
      title: "readymade",
      description:
        "Everyday objects elevated through context and intention.",
    },
    {
      number: "004",
      title: "architecture",
      description:
        "Space, proportion and structure influence every silhouette.",
    },
    {
      number: "005",
      title: "cultural engineering",
      description:
        "Fashion operates as a medium for ideas and communication.",
    },
    {
      number: "006",
      title: "future objects",
      description:
        "Artifacts designed for a generation that archives everything.",
    },
  ];

  return (
    <section className="bg-[#f5f5f2] text-black py-40">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <p className="text-[10px] tracking-[0.5em] uppercase opacity-50 mb-8">
          research board
        </p>

        <h2 className="text-6xl md:text-[10rem] leading-[0.9] font-extralight uppercase mb-24">
          design
          <br />
          systems
        </h2>

        <div className="grid md:grid-cols-3 border border-black">

          {research.map((item) => (
            <div
              key={item.number}
              className="border border-black p-10 md:p-12 min-h-[320px] flex flex-col justify-between"
            >

              <div>

                <p className="text-[10px] tracking-[0.4em] uppercase opacity-40">
                  {item.number}
                </p>

                <h3 className="mt-8 text-3xl md:text-4xl font-light leading-tight uppercase">
                  {item.title}
                </h3>

              </div>

              <p className="text-sm opacity-60 leading-relaxed max-w-xs">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}