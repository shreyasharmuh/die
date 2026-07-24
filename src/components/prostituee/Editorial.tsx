import Image from "next/image";

export default function Editorial() {
  return (
    <section className="bg-[#faf8f5] text-black py-40">

      <div className="max-w-[1700px] mx-auto px-10">

        {/* Heading */}

        <div className="mb-28">

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-neutral-400
            mb-8
            "
          >
            Campaign Journal
          </p>

          <h2
            className="
            text-6xl
            md:text-8xl
            font-extralight
            tracking-[-0.06em]
            leading-[0.9]
            max-w-5xl
            "
          >
            Quiet intimacy
            <br />
            without performance.
          </h2>

        </div>

        {/* Image 1 */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">

          <Image
            src="/images/prostituee/editorial1.jpg"
            alt=""
            width={900}
            height={1200}
            className="
            w-full
            h-[850px]
            object-cover
            "
          />

          <div className="max-w-xl">

            <p
              className="
              uppercase
              tracking-[0.4em]
              text-[11px]
              text-neutral-400
              mb-8
              "
            >
              Editorial I
            </p>

            <h3
              className="
              text-5xl
              font-extralight
              leading-tight
              mb-8
              "
            >
              Clothing that exists
              before fashion.
            </h3>

            <p
              className="
              text-neutral-500
              leading-8
              text-lg
              "
            >
              Designed around movement,
              silence and the intimacy of
              everyday rituals.
              Nothing decorative.
              Nothing excessive.
            </p>

          </div>

        </div>

        {/* Image 2 */}

        <Image
          src="/images/prostituee/editorial2.jpg"
          alt=""
          width={1800}
          height={1200}
          className="
          w-full
          h-[950px]
          object-cover
          mb-36
          "
        />

        {/* Image 3 */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="max-w-xl">

            <p
              className="
              uppercase
              tracking-[0.4em]
              text-[11px]
              text-neutral-400
              mb-8
              "
            >
              Editorial II
            </p>

            <h3
              className="
              text-5xl
              font-extralight
              leading-tight
              mb-8
              "
            >
              Made to disappear
              into the body.
            </h3>

            <p
              className="
              text-neutral-500
              leading-8
              text-lg
              "
            >
              Fabrics become invisible.
              The wearer becomes
              the statement.
            </p>

          </div>

          <Image
            src="/images/prostituee/editorial3.jpg"
            alt=""
            width={900}
            height={1200}
            className="
            w-full
            h-[850px]
            object-cover
            "
          />

        </div>

      </div>

    </section>
  );
}