"use client";

const worlds = [
  "fashion",
  "culture",
  "movement",
  "architecture",
  "sport",
  "editorial",
];

export default function World() {
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

          the world of die

        </p>

        {/* INTRO */}

        <div className="max-w-4xl mb-32">

          <h2
            className="
            text-3xl
            md:text-6xl
            lg:text-7xl
            font-extralight
            leading-[1.35]
          "
          >

            die exists where

            <br />

            multiple disciplines

            <br />

            coexist.

          </h2>

        </div>

        {/* GIANT WORDS */}

        <div className="space-y-2">

          {worlds.map((item) => (

            <div
              key={item}
              className="
              group

              border-b

              border-black/10

              py-6

              overflow-hidden
            "
            >

              <h3
                className="
                text-5xl

                sm:text-7xl

                md:text-[8rem]

                lg:text-[10rem]

                xl:text-[12rem]

                font-extralight

                leading-none

                opacity-90

                transition-all

                duration-700

                group-hover:translate-x-8
              "
              >

                {item}

              </h3>

            </div>

          ))}

        </div>

        {/* MICRO TEXT */}

        <div className="mt-32 flex justify-end">

          <p
            className="
            max-w-sm

            text-[10px]

            uppercase

            tracking-[0.45em]

            leading-7

            opacity-40
          "
          >

            a european house exploring
            future identities through
            fashion, movement and
            contemporary culture.

          </p>

        </div>

      </div>

    </section>
  );
}