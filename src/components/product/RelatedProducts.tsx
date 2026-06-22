import Link from "next/link";

import { products } from "@/data/products";

export default function RelatedProducts({
  product,
}: {
  product: any;
}) {

  const related = products
    .filter(item => item.slug !== product.slug)
    .slice(0, 3);

  return (

    <section className="py-40 px-8 md:px-16">

      <div className="max-w-[1700px] mx-auto">

        <p
          className="
          text-[10px]
          uppercase
          tracking-[0.7em]
          opacity-40
          mb-16
        "
        >

          related products

        </p>

        <div className="border-t border-black/10">

          {related.map(item => (

            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="
              flex

              justify-between

              items-center

              py-12

              border-b

              border-black/10

              group
            "
            >

              <h3
                className="
                text-3xl

                md:text-5xl

                font-extralight

                tracking-[-0.04em]

                group-hover:translate-x-4

                transition
              "
              >

                {item.name}

              </h3>

              <p className="opacity-40">

                ₹{item.price}

              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>

  );
}