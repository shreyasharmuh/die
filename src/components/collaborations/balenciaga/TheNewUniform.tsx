export default function TheNewUniform() {

  const items = [
    "outerwear",
    "tailoring",
    "essentials",
    "objects",
  ];

  return (

    <section className="py-56 px-8 md:px-20 bg-black text-white">

      <div className="space-y-20">

        {items.map((item, index) => (

          <div
            key={item}
            className="
            flex
            justify-between
            border-b
            border-white/10
            pb-10
          "
          >

            <p className="opacity-40">

              00{index + 1}

            </p>

            <h2
              className="
              text-2xl
              md:text-6xl
              font-extralight
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