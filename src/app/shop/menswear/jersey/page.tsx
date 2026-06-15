import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function JerseyPage() {
  const jerseys = products.filter((p) => p.category === "jersey");

  return (
    <main className="bg-white text-black">

      {/* HEADER */}
      <section className="px-8 md:px-16 pt-32 pb-20">

        <p className="uppercase tracking-[0.5em] text-xs text-black/40 mb-6">
          Menswear / Jersey
        </p>

        <h1 className="text-6xl md:text-[9rem] leading-[0.85] tracking-[-0.08em] font-light">
          JERSEY
        </h1>

        <p className="max-w-xl mt-10 text-black/60 leading-relaxed">
          A study in form, restraint and proportion. Jerseys designed with
          architectural clarity and quiet precision.
        </p>

      </section>

      {/* GRID */}
      <section className="px-8 md:px-16 pb-32">

        {jerseys.length === 0 ? (
          <p className="text-black/40">No pieces available.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">

            {jerseys.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >

                {/* IMAGE WRAPPER */}
                <div className="relative overflow-hidden bg-neutral-100">

                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={1000}
                    height={1200}
                    className="
                      w-full aspect-[4/5] object-cover
                      transition duration-700
                      group-hover:scale-[1.03]
                      grayscale group-hover:grayscale-0
                    "
                  />

                  {/* subtle editorial overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />

                </div>

                {/* INFO */}
                <div className="mt-5 space-y-1">

                  <h3 className="text-sm tracking-[0.2em] uppercase">
                    {product.name}
                  </h3>

                  <p className="text-black/50 text-sm">
                    ₹{product.price.toLocaleString()}
                  </p>

                </div>

              </Link>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}