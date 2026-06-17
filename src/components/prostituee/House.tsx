const sections = [
  "womenswear",

  "menswear",

  "underwear",

  "loungewear",
];

export default function House() {
  return (
    <section className="bg-[#090909] text-white py-32">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">

          {sections.map((item) => (

            <div key={item} className="space-y-6">

              <p className="text-[10px] tracking-[0.45em] opacity-40">

                00

              </p>

              <h2 className="text-2xl font-extralight tracking-[0.2em] uppercase">

                {item}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}