import Link from "next/link";

export default function Categories() {
  return (
    <section className="bg-white text-black py-40">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* SECTION LABEL */}

        <p className="text-[10px] tracking-[0.45em] uppercase opacity-50 mb-16">
          explore the collection
        </p>

        {/* CATEGORY LINKS */}

        <div className="space-y-10">

          <Link
            href="#"
            className="group flex items-end justify-between border-b border-black/10 pb-8"
          >
            <h2 className="text-5xl md:text-8xl font-light uppercase">
              women
            </h2>

            <span className="text-xs tracking-[0.35em] uppercase opacity-40 group-hover:opacity-100 transition">
              shop
            </span>
          </Link>

          <Link
            href="#"
            className="group flex items-end justify-between border-b border-black/10 pb-8"
          >
            <h2 className="text-5xl md:text-8xl font-light uppercase">
              men
            </h2>

            <span className="text-xs tracking-[0.35em] uppercase opacity-40 group-hover:opacity-100 transition">
              shop
            </span>
          </Link>

          <Link
            href="#"
            className="group flex items-end justify-between border-b border-black/10 pb-8"
          >
            <h2 className="text-5xl md:text-8xl font-light uppercase">
              essentials
            </h2>

            <span className="text-xs tracking-[0.35em] uppercase opacity-40 group-hover:opacity-100 transition">
              discover
            </span>
          </Link>

          <Link
            href="#"
            className="group flex items-end justify-between border-b border-black/10 pb-8"
          >
            <h2 className="text-5xl md:text-8xl font-light uppercase">
              campaigns
            </h2>

            <span className="text-xs tracking-[0.35em] uppercase opacity-40 group-hover:opacity-100 transition">
              view
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}