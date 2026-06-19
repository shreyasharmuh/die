export default function Observations() {
  return (
    <section className="py-56 px-8 md:px-20">

      <div className="max-w-[1600px] mx-auto">

        <div className="mb-32">

          <p
            className="
            text-[9px]
            uppercase
            tracking-[0.7em]
            opacity-30
          "
          >

            observations

          </p>

        </div>

        <div className="space-y-28">

          {[
            "elegance through absence",
            "objects of permanence",
            "precision over excess",
          ].map((item) => (

            <div
              key={item}
              className="
              border-b
              border-white/10
              pb-10
            "
            >

              <h2
                className="
                text-3xl
                md:text-6xl
                font-extralight
                tracking-[0.05em]
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