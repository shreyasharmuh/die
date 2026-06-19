export default function ResearchSystem() {
  return (
    <section className="py-52 px-8 md:px-20">

      <div className="space-y-24">

        {[
          "research",
          "objects",
          "movement",
          "culture",
          "typography",
          "architecture",
        ].map((item, index) => (

          <div
            key={item}
            className="flex justify-between border-b border-white/10 pb-8"
          >

            <p
              className="
              text-[9px]
              tracking-[0.7em]
              uppercase
              opacity-40
            "
            >

              00{index + 1}

            </p>

            <h2
              className="
              text-2xl
              md:text-5xl
              font-light
            "
            >

              {item}

            </h2>

          </div>

        ))}

      </div>

    </section>
  );
}