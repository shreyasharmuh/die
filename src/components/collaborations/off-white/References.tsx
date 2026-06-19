export default function References() {
  return (
    <section className="py-56 px-8 md:px-20">

      <div className="space-y-16">

        {[
          "europe",
          "fashion",
          "music",
          "technology",
          "design",
        ].map((item) => (

          <h2
            key={item}
            className="
            text-4xl
            md:text-7xl
            font-light
            opacity-80
          "
          >

            {item}

          </h2>

        ))}

      </div>

    </section>
  );
}