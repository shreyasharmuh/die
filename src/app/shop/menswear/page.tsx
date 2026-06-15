import Link from "next/link";

const categories = [
  "Tailoring",
  "Jersey",
  "Denim",
  "Outerwear",
  "Footwear",
  "Accessories",
];

export default function MenswearPage() {
  return (
    <main className="min-h-screen bg-white px-8 md:px-16 py-32">

      {/* HEADER */}
      <p className="uppercase tracking-[0.5em] text-xs text-black/40 mb-8">
        Shop / Menswear
      </p>

      <h1 className="text-6xl md:text-[8rem] leading-[0.85] tracking-[-0.08em] font-light mb-24">
        MENSWEAR
      </h1>

      {/* CATEGORY LIST */}
      <div className="border-t border-black/10">

        {categories.map((item) => (
          <Link
            key={item}
            href={`/shop/menswear/${item.toLowerCase()}`}
            className="block py-10 border-b border-black/10 hover:pl-6 transition-all duration-500"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-[-0.04em]">
              {item}
            </h2>
          </Link>
        ))}

      </div>

    </main>
  );
}