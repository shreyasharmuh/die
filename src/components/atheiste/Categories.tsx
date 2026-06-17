export default function Categories() {
  return (
    <section className="py-40 px-6 md:px-20">

      <div className="max-w-[1600px] mx-auto">

        <div className="space-y-28">

          {[
            "ready-to-wear",
            "eyewear",
            "objects",
            "journal",
          ].map((item, index) => (
            <div key={item}>

              <p
                className="
                text-[9px]
                tracking-[0.6em]
                uppercase
                opacity-40
                mb-4
              "
              >

                00{index + 1}

              </p>

              <h2
                className="
                text-3xl
                md:text-5xl
                font-extralight
                tracking-[0.15em]
              "
              >

                {item}

              </h2>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}