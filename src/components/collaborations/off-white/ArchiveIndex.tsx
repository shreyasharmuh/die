export default function Index() {
  return (
    <section className="py-56 px-8 md:px-20">

      <div className="max-w-xl">

        <p
          className="
          text-[9px]
          uppercase
          tracking-[0.7em]
          opacity-30
          mb-16
        "
        >

          index

        </p>

        <div className="space-y-10">

          {[
            "editorial",
            "garments",
            "graphics",
            "references",
            "archive",
          ].map((item, index) => (

            <div
              key={item}
              className="flex gap-10"
            >

              <span className="opacity-30">

                0{index + 1}

              </span>

              <span className="uppercase tracking-[0.2em]">

                {item}

              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}