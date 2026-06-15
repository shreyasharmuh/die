import Image from "next/image";
import AddToCart from "@/components/cart/AddToCart";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-white px-8 md:px-16 py-24">

      <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">

        {/* IMAGES */}
        <div className="space-y-4">
          {product.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={product.name}
              width={1200}
              height={1500}
              className="w-full object-cover"
            />
          ))}
        </div>

        {/* DETAILS */}
        <div className="lg:sticky lg:top-24 h-fit">

          <h1 className="text-4xl md:text-5xl font-light">
            {product.name}
          </h1>

          <p className="text-2xl mt-4">
            ₹{product.price}
          </p>

          <p className="mt-8 text-black/70">
            {product.description}
          </p>

          {/* SIZE */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.3em] mb-4">
              Size
            </p>

            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button key={size.label} className="border px-4 py-2">
                  {size.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}