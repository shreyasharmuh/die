export default function Hero() {
  return (
    <section className="min-h-screen px-8 md:px-16">

      <div className="max-w-[1700px] mx-auto min-h-screen flex flex-col justify-between py-28">

        <div>

          <p className="editorial-label mb-10">

            die / menswear

          </p>

          <h1
            className="
            text-6xl

            sm:text-8xl

            md:text-[10rem]

            lg:text-[13rem]

            font-extralight

            leading-[0.85]

            tracking-[-0.08em]
          "
          >

            future

            <br />

            menswear

          </h1>

        </div>

        <div className="flex justify-center">

          <h2
            className="
            text-[18vw]

            md:text-[15vw]

            lowercase

            font-extralight

            tracking-[-0.12em]

            opacity-[0.05]
          "
          >

            die

          </h2>

        </div>

        <div className="flex justify-end">

          <p
            className="
            max-w-sm

            text-[10px]

            uppercase

            tracking-[0.45em]

            leading-8

            opacity-50
          "
          >

            permanent uniforms
            for movement,
            work and everyday life.

          </p>

        </div>

      </div>

    </section>
  );
}