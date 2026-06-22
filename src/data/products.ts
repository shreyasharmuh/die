export type Product = {
  id: number;

  slug: string;

  name: string;

  description: string;

  category:
    | "jersey"
    | "tshirt"
    | "denim"
    | "leather-goods"
    | "objects"
    | "womenswear";

  price: number;

  currency: "INR" | "USD";

  images: string[];

  sizes: {
    label: string;
    stock: number;
  }[];

  details: {
    composition: string;

    fit: string;

    madeIn: string;

    care: string;
  };

  shipping: {
    label: string;

    eta: string;
  };

  returns: {
    label: string;

    periodDays: number;
  };

  isFeatured?: boolean;

  tags?: string[];

  // NEW OPTIONAL FIELDS

  philosophy?: string;

  story?: string;

  campaignTitle?: string;
};

export const products: Product[] = [

  {
    id: 1,

    slug: "essential-jersey-tee",

    name: "Essential Jersey Tee",

    description:
      "Heavyweight cotton jersey tee designed for everyday permanence.",

    category: "jersey",

    price: 8990,

    currency: "INR",

    images: [

      "/images/products/tees.jpg",

      "/images/products/tees2.jpg",

      "/images/products/tees3.jpg",

    ],

    sizes: [

      {
        label: "S",

        stock: 12,
      },

      {
        label: "M",

        stock: 10,
      },

      {
        label: "L",

        stock: 8,
      },

      {
        label: "XL",

        stock: 4,
      },

    ],

    details: {

      composition: "100% heavyweight cotton",

      fit: "relaxed silhouette",

      madeIn: "Portugal",

      care: "cold machine wash",

    },

    shipping: {

      label: "standard shipping",

      eta: "3–7 days",

    },

    returns: {

      label: "returns accepted",

      periodDays: 14,

    },

    philosophy:

      "Designed for repetition, permanence and everyday movement.",

    story:

      "A future essential developed through reduction and intention. Built to disappear into everyday life while maintaining presence.",

    campaignTitle:

      "future essentials",

    isFeatured: true,

    tags: [

      "jersey",

      "essential",

      "uniform",

    ],

  },

];