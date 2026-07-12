export type Collaboration = {
  slug: string;
  name: string;
  status: "ACTIVE" | "coming-soon";
  category:
    | "Luxury"
    | "Fashion"
    | "Performance"
    | "Sportswear"
    | "Beauty"
    | "Motorsport"
    | "Lifestyle";
  type?: "logo";
  logo?: string;
};

export const collaborations: Collaboration[] = [
  /* -------------------------
      ACTIVE
  -------------------------- */

  {
    slug: "die-x-adidas-originals",
    name: "Adidas Originals",
    status: "ACTIVE",
    category: "Sportswear",
    type: "logo",
    logo: "/images/collaborations/adidas-originals/logo1.svg",
  },
  
   {
    slug: "die-x-armani-exchange",
    name: "A|X Armani Exchange",
    status: "ACTIVE",
    category: "Lifestyle",
    type: "logo",
    logo: "/images/collaborations/armani-exchange/logo.png",
  },
  
  {
    slug: "die-x-emporio-armani",
    name: "Emporio Armani",
    status: "ACTIVE",
    category: "Performance",
    type: "logo",
    logo: "/images/collaborations/ea7/ea7.png",
  },

  {
    slug: "die-x-calvin-klein",
    name: "Calvin Klein",
    status: "ACTIVE",
    category: "Fashion",
  },

  {
    slug: "die-x-off-white",
    name: "Off-White™",
    status: "ACTIVE",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/off-white/off-white.svg",
  },

  {
    slug: "die-x-balenciaga",
    name: "Balenciaga",
    status: "ACTIVE",
    category: "Luxury",
    type : "logo",
    logo : "/images/collaborations/balenciaga/logo.png"
  },

  {
    slug: "die-x-ysl",
    name: "Saint Laurent",
    status: "ACTIVE",
    category: "Luxury",
  },

  {
    slug: "die-x-balmain",
    name: "Balmain",
    status: "ACTIVE",
    category: "Luxury",
  },

  {
    slug: "die-x-aston-martin",
    name: "Aston Martin Aramco Formula One® Team",
    status: "ACTIVE",
    category: "Motorsport",
    type: "logo",
    logo: "/images/collaborations/aston-martin/logo.svg",
  },

  /* -------------------------
      COMING SOON
  -------------------------- */
  {
    slug: "die-x-dior",
    name: "Dior",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/dior/logo.svg",
  },

  {
    slug: "die-x-acne-studios",
    name: "Acne Studios",
    status: "coming-soon",
    category: "Fashion",
    type: "logo",
    logo: "/images/collaborations/acne-studios/logo.svg",
  },

  {
    slug: "die-x-givenchy",
    name: "Givenchy",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/givenchy/logo.svg",
  },

  {
    slug: "die-x-amiri",
    name: "AMIRI",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/amiri/logo.png",
  },

  {
    slug: "die-x-diesel",
    name: "Diesel",
    status: "coming-soon",
    category: "Fashion",
    type: "logo",
    logo: "/images/collaborations/diesel/logo.svg",
  },

  {
    slug: "die-x-nike",
    name: "Nike",
    status: "coming-soon",
    category: "Sportswear",
    type: "logo",
    logo: "/images/collaborations/nike/logo.svg",
  },

  {
    slug: "die-x-puma",
    name: "PUMA",
    status: "coming-soon",
    category: "Sportswear",
    type: "logo",
    logo: "/images/collaborations/puma/logo.svg",
  },

  {
    slug: "die-x-guess",
    name: "GUESS",
    status: "coming-soon",
    category: "Lifestyle",
    type: "logo",
    logo: "/images/collaborations/guess/logo.svg",
  },

  {
    slug: "die-x-sephora",
    name: "Sephora",
    status: "coming-soon",
    category: "Beauty",
    type: "logo",
    logo: "/images/collaborations/sephora/logo.svg",
  },

  {
    slug: "die-x-prada",
    name: "Prada",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/prada/logo.svg",
  },

  {
    slug: "die-x-gucci",
    name: "Gucci",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/gucci/logo.svg",
  },

  {
    slug: "die-x-maison-margiela",
    name: "Maison Margiela",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/maison-margiela/logo.svg",
  },

  {
    slug: "die-x-valentino",
    name: "Valentino",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/valentino/logo.svg",
  },

  {
    slug: "die-x-fendi",
    name: "Fendi",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/fendi/logo.svg",
  },

  {
    slug: "die-x-loewe",
    name: "LOEWE",
    status: "coming-soon",
    category: "Luxury",
    type: "logo",
    logo: "/images/collaborations/loewe/logo.svg",
  },
];