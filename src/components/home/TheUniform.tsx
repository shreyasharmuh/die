"use client";

const categories = [
  "outerwear",
  "tailoring",
  "essentials",
  "jerseys",
  "objects",
];

export default function TheUniform() {
  return (
    <section className="bg-[#fafafa] py-40 md:py-64 px-8 md:px-20">

      <div className="max-w-[1600px] mx-auto">

        {/* LABEL */}

        <p
          className="
          text-[9px]
          uppercase
          tracking-[0.7em]
          opacity-40
          mb-20
        "
        >

          the uniform

        </p>

        {/* INTRO */}

        <div className="max-w-3xl mb-32">

          <h2
            className="
            text-3xl
            md:text-6xl
            lg:text-7xl
            font-extralight
            leading-[1.3]
          "
          >

            clothing should become

            <br />

            a permanent system.

          </h2>

          <p
            className="
            mt-12

            text-xs

            uppercase

            tracking-[0.4em]

            opacity-50

            max-w-xl
          "
          >

            fewer pieces. more permanence.
            less noise. more intention.

          </p>

        </div>

        {/* CATEGORY LIST */}

        <div>

          {categories.map((item, index) => (

            <div
              key={item}
              className="
              group

              flex

              justify-between

              items-center

              border-b

              border-black/10

              py-10

              md:py-14
            "
            >

              <p
                className="
                text-[10px]

                tracking-[0.5em]

                opacity-30
              "
              >

                00{index + 1}

              </p>

              <h3
                className="
                text-4xl

                sm:text-5xl

                md:text-7xl

                lg:text-8xl

                font-extralight

                transition-all

                duration-500

                group-hover:-translate-x-4
              "
              >

                {item}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}