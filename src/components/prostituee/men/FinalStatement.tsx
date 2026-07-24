
"use client";

export default function FinalStatement() {
  return (
    <section className="bg-[#F7F5F2] text-black py-64">

      <div className="max-w-[1500px] mx-auto px-8">

        <div className="flex flex-col items-center text-center">

          {/* Label */}

          <p
            className="
            uppercase
            tracking-[0.65em]
            text-[10px]
            text-neutral-400
            mb-12
            "
          >
            Final Statement
          </p>

          {/* Headline */}

          <h2
            className="
            max-w-6xl
            text-6xl
            md:text-8xl
            xl:text-[8rem]
            font-extralight
            tracking-[-0.07em]
            leading-[0.9]
            "
          >
            Luxury begins
            <br />
            before getting dressed.
          </h2>

          {/* Body */}

          <p
            className="
            mt-20
            max-w-3xl
            text-lg
            md:text-xl
            leading-10
            text-neutral-500
            font-light
            "
          >
            Every object is designed to disappear into everyday life.
            Nothing demands attention.
            Nothing follows trends.
            Quiet confidence becomes the only signature.
          </p>

          {/* Divider */}

          <div className="mt-28 w-px h-28 bg-neutral-300" />

          {/* Signature */}

          <div className="mt-20">

            <p
              className="
              uppercase
              tracking-[0.75em]
              text-[11px]
              "
            >
              PROSTITUTÉE
            </p>

            <p
              className="
              mt-4
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-neutral-400
              "
            >
              Paris · Genève · Milano
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
