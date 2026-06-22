import AddToCart from "@/components/cart/AddToCart";

export default function Details({
  product,
}: {
  product: any;
}) {

  return (

    <section className="py-48 px-8 md:px-16">

      <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-32">

        <div>

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.7em]
            opacity-40
            mb-10
          "
          >

            details

          </p>

          <div className="space-y-4 text-black/60">

            <p>premium construction</p>

            <p>minimal silhouette</p>

            <p>everyday permanence</p>

            <p>designed in bombay</p>

          </div>

        </div>

        <div>

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            opacity-40
            mb-8
          "
          >

            size

          </p>

          <div className="flex flex-wrap gap-3 mb-16">

            {product.sizes.map((size: any) => (

              <button
                key={size.label}
                className="
                border
                border-black/10
                px-5
                py-3

                hover:bg-black
                hover:text-white

                transition
              "
              >

                {size.label}

              </button>

            ))}

          </div>

          <div className="max-w-sm">

            <AddToCart product={product} />

          </div>

        </div>

      </div>

    </section>

  );
}