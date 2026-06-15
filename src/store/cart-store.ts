import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
  key: string;
};

type CartState = {
  items: CartItem[];

  // cart actions
  addItem: (item: Omit<CartItem, "quantity" | "key">) => void;
  removeItem: (key: string) => void;
  increaseQty: (key: string) => void;
  decreaseQty: (key: string) => void;
  clearCart: () => void;

  // UI state (NEW)
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],

  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () =>
    set((state) => ({ isOpen: !state.isOpen })),

  addItem: (item) =>
    set((state) => {
      const key = `${item.id}-${item.size}`;

      const existing = state.items.find(
        (i) => i.key === key
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [
          ...state.items,
          { ...item, quantity: 1, key },
        ],
      };
    }),

  removeItem: (key) =>
    set((state) => ({
      items: state.items.filter((i) => i.key !== key),
    })),

  increaseQty: (key) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.key === key
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ),
    })),

  decreaseQty: (key) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.key === key
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),
}));