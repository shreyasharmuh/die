"use client";

import { useState } from "react";
import { useCart } from "@/store/cart-store";

export default function AddToCart({
  product,
}: {
  product: any;
}) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div>

      {/* SIZE SELECTOR */}
      <div className="mt-12">
        <p className="uppercase text-xs tracking-[0.3em] mb-4 text-black/50">
          Size
        </p>

        <div className="flex gap-3 flex-wrap">
          {product.sizes.map((size: any) => (
            <button
              key={size.label}
              onClick={() => setSelectedSize(size.label)}
              className={`px-5 py-3 border transition ${
                selectedSize === size.label
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      {/* ADD TO BAG */}
      <button
        onClick={() => {
          if (!selectedSize) return;

          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            size: selectedSize,
            image: product.images[0],
          });
        }}
        className={`w-full mt-10 py-5 uppercase tracking-[0.3em] transition ${
          selectedSize
            ? "bg-black text-white"
            : "bg-black/30 text-white cursor-not-allowed"
        }`}
      >
        {selectedSize ? "Add To Bag" : "Select Size"}
      </button>

    </div>
  );
}