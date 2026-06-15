import Link from "next/link";
export type Collaboration = {
  slug: string;
  name: string;
  status: "ACTIVE" | "coming-soon";
  type?: "logo";
  logo?: string;
};


const collaborations = [
  {
    name: "DIE × CALVIN KLEIN",
    slug: "die-x-calvin-klein",
    status: "ACTIVE",
  },
  {
    name: "DIE × OFF-WHITE™",
    slug: "die-x-off-white",
    status: "ACTIVE",
  },
  {
    name: "DIE × BALMAIN",
    slug: "die-x-balmain",
    status: "COMING SOON",
  },
  {
    name: "DIE × BALENCIAGA",
    slug: "die-x-balenciaga",
    status: "COMING SOON",
  },
  {
    name: "DIE × EMPORIO ARMANI",
    slug: "die-x-emporio-armani",
    status: "COMING SOON",
  },
  {
    name: "DIE × ADIDAS ORIGINALS",
    slug: "die-x-adidas-originals",
    status: "ACTIVE",
  },
];

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-16 py-40">

      <div className="max-w-7xl mx-auto">

        <p className="text-xs tracking-[0.4em] opacity-40 mb-8">
          CAMPAIGN ARCHIVE
        </p>

        <h1 className="text-7xl md:text-[10rem] leading-none font-light mb-24">
          collaborations
        </h1>

        <div className="space-y-10">

          {collaborations.map((item) => (
            <Link
              key={item.slug}
              href={`/collaborations/${item.slug}`}
              className="group flex justify-between border-b border-white/10 pb-8"
            >
              <span className="text-2xl md:text-5xl font-light">
                {item.name}
              </span>

              <span className="text-xs tracking-[0.4em] opacity-50 group-hover:opacity-100">
                {item.status}
              </span>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}