const athletes = [
  "Runner",
  "Football",
  "Traveller",
  "Cyclist",
  "Creative",
  "Architect",
];

export default function AthleteSystem() {
  return (
    <section className="bg-black text-white py-40">

      <div className="max-w-7xl mx-auto px-10">

        <p className="uppercase tracking-[0.45em] text-xs text-white/40 mb-8">
          Athlete System
        </p>

        <h2 className="text-7xl md:text-[9rem] leading-[0.85] font-light tracking-[-0.08em] mb-24">
          FOR
          <br />
          EVERY
          <br />
          MOVEMENT
        </h2>

        <div className="border-t border-white/10">

          {athletes.map((item, i) => (

            <div
              key={item}
              className="flex justify-between border-b border-white/10 py-10 hover:pl-8 duration-500"
            >

              <span className="text-white/30">
                0{i + 1}
              </span>

              <h3 className="text-4xl font-light">
                {item}
              </h3>

              <span className="text-white/30">
                EA7 × DIE
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}