export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: "jersey" | "tshirt" | "denim" | "leather-goods" | "objects" | "womenswear";
  price: number;
  currency: "INR" | "USD";
  images: string[];
  sizes: { label: string; stock: number }[];
  details: {
    composition: string;
    fit: string;
    madeIn: string;
    care: string;
  };
  shipping: { label: string; eta: string };
  returns: { label: string; periodDays: number };
  isFeatured?: boolean;
  tags?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "essential-jersey-tee",
    name: "Essential Jersey Tee",
    description: "Heavyweight cotton jersey tee.",
    category: "jersey",
    price: 8990,
    currency: "INR",
    images: ["/images/products/tees.jpg"],
    sizes: [{ label: "M", stock: 10 }],
    details: {
      composition: "100% cotton",
      fit: "relaxed",
      madeIn: "Portugal",
      care: "cold wash",
    },
    shipping: {
      label: "standard shipping",
      eta: "3–7 days",
    },
    returns: {
      label: "returns accepted",
      periodDays: 14,
    },
    isFeatured: true,
    tags: ["jersey"],
  },
];