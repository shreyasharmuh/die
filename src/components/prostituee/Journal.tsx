const entries = [
  "private uniform",

  "second skin",

  "after hours",
];

export default function Journal() {
  return (
    <section className="bg-[#f7f4ef] text-black py-32">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-20">

        <div className="space-y-12">

          {entries.map((entry, index) => (

            <div
              key={entry}
              className="flex flex-col md:flex-row justify-between border-b border-black/10 pb-10 gap-6"
            >

              <p className="text-[10px] tracking-[0.45em] opacity-40">

                0{index + 1}

              </p>

              <h2 className="text-xl sm:text-2xl md:text-4xl font-extralight tracking-[0.18em] uppercase">

                {entry}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}