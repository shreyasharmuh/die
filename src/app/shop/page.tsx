import Link from "next/link";

const categories = [
  {
    title: "Menswear",
    href: "/shop/menswear",
    description: "Tailoring, jersey, denim and outerwear.",
  },
  {
    title: "Womenswear",
    href: "/shop/womenswear",
    description: "Refined silhouettes and contemporary essentials.",
  },
  {
    title: "Leather Goods",
    href: "/shop/leather-goods",
    description: "Bags, belts, wallets and small accessories.",
  },
  {
    title: "Objects",
    href: "/shop/objects",
    description: "Eyewear, fragrance and curated pieces.",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-black px-8 md:px-16 py-32">

      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.5em] text-xs text-black/40 mb-8">
          DIE
        </p>

        <h1 className="text-6xl md:text-[10rem] leading-[0.85] tracking-[-0.08em] font-light mb-24">
          SHOP
        </h1>

        <div className="border-t border-black/10">

          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group flex flex-col md:flex-row md:items-center md:justify-between py-12 border-b border-black/10 hover:pl-6 transition-all duration-500"
            >
              <h2 className="text-4xl md:text-6xl tracking-[-0.04em] font-light">
                {category.title}
              </h2>

              <p className="text-black/50 mt-3 md:mt-0 max-w-sm">
                {category.description}
              </p>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}