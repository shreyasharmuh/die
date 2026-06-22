export default function Story({
  product,
}: {
  product: any;
}) {

  return (

    <section className="py-48 px-8 md:px-16">

      <div className="max-w-5xl mx-auto">

        <p
          className="
          text-[10px]
          uppercase
          tracking-[0.7em]
          opacity-40
          mb-16
        "
        >

          story

        </p>

        <h2
          className="
          text-4xl
          md:text-7xl
          lg:text-8xl
          font-extralight
          leading-[1.15]
        "
        >

          {product.description}

        </h2>

      </div>

    </section>

  );
}