export default function AtelierNotes() {

  return (

    <section className="py-56 px-8 md:px-20 bg-black text-white">

      <div className="space-y-10">

        {[
          "paris",
          "night",
          "beauty",
          "movement",
          "skin",
        ].map((item) => (

          <div
            key={item}
            className="
            text-5xl
            md:text-8xl
            font-extralight
          "
          >

            {item}

          </div>

        ))}

      </div>

    </section>

  );
}