export type Collaboration = {
  slug: string;
  name: string;
  status: "ACTIVE" | "coming-soon";
  type?: "logo";
  logo?: string;
};

export const collaborations: Collaboration[] = [
  {
    slug: "die-x-calvin-klein",
    name: "Calvin Klein",
    status: "ACTIVE",
  },

  {
    slug: "die-x-off-white",
    name: "Off-White™",
    status: "ACTIVE",
    type: "logo",
    logo: "/images/collaborations/off-white/logo.png",
  },

  {
    slug: "die-x-adidas-originals",
    name: "Adidas Originals",
    status: "ACTIVE",
    type: "logo",
    logo: "/images/collaborations/adidas-originals/logo2.svg",
  },

  {
    slug: "die-x-balenciaga",
    name: "Balenciaga",
    status: "coming-soon",
  },

  {
    slug: "die-x-ysl",
    name: "Saint Laurent",
    status: "coming-soon",
  },

  {
    slug: "die-x-balmain",
    name: "Balmain",
    status: "coming-soon",
  },

  {
    slug: "die-x-emporio-armani",
    name: "Emporio Armani",
    status: "coming-soon",
  },

  {
    slug: "die-x-aston-martin",
    name: "Aston Martin Aramco",
    status: "coming-soon",
  },
];