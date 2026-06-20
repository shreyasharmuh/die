export default function EditorialCampaign() {

  return (

    <section className="py-56 px-8 md:px-20 bg-black text-white">

      <div className="space-y-16">

        {[
          "editorial",
          "beauty",
          "skin",
          "silhouette",
        ].map((item) => (

          <h2
            key={item}
            className="
            text-4xl
            md:text-7xl
            font-extralight
          "
          >

            {item}

          </h2>

        ))}

      </div>

    </section>

  );
}