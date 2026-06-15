"use client";

import { useCart } from "@/store/cart-store";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* BACKDROP */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* PANEL */}
      <div
        className={`absolute right-0 top-0 h-full w-[420px] bg-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b">
          <h2 className="tracking-[0.3em] uppercase">
            Bag
          </h2>
        </div>

        <div className="p-6 space-y-6 h-[70vh] overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-black/50">
              Your bag is empty
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  className="w-20 h-24 object-cover"
                />

                <div className="flex-1">
                  <p>{item.name}</p>
                  <p className="text-black/50 text-sm">
                    Size: {item.size}
                  </p>

                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() =>
                        decreaseQty(item.key)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQty(item.key)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      removeItem(item.key)
                    }
                    className="text-red-500 text-xs mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t">
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>

          <button className="w-full bg-black text-white py-4 uppercase tracking-[0.3em]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}