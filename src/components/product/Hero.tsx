type Props = {
  product: any;
};

export default function Hero({
  product,
}: Props) {

  return (

    <section className="px-8 md:px-16 pt-24 pb-40">

      <div className="max-w-[1700px] mx-auto">

        <p
          className="
          text-[10px]
          uppercase
          tracking-[0.7em]
          opacity-40
          mb-10
        "
        >

          die / {product.category}

        </p>

        <h1
          className="
          text-6xl
          md:text-[10rem]
          lg:text-[13rem]
          font-extralight
          leading-[0.85]
          tracking-[-0.08em]
          mb-16
        "
        >

          {product.name}

        </h1>

        <div className="flex justify-between items-end">

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.45em]
            opacity-40
          "
          >

            future essential

          </p>

          <p className="text-3xl">

            ₹{product.price}

          </p>

        </div>

      </div>

    </section>

  );
}