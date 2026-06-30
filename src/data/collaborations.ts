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
    logo: "/images/collaborations/off-white/off-white.svg",
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
    status: "ACTIVE",
  },

  {
    slug: "die-x-ysl",
    name: "Saint Laurent",
    status: "ACTIVE",
  },

  {
    slug: "die-x-balmain",
    name: "Balmain",
    status: "ACTIVE",
  },

{
  slug: "die-x-emporio-armani",
  name: "EA7 Emporio Armani",
  status: "ACTIVE",
},
  {
    slug: "die-x-aston-martin",
    name: "Aston Martin Aramco",
    status: "ACTIVE",
  },
];