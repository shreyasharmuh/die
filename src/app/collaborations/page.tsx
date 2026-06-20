import Link from "next/link";

type Collaboration = {
  name: string;
  slug: string;
  status: "active" | "coming-soon";
};

const collaborations: Collaboration[] = [
  {
    name: "die × calvin klein",
    slug: "die-x-calvin-klein",
    status: "active",
  },

  {
    name: "die × off-white™",
    slug: "die-x-off-white",
    status: "active",
  },

  {
    name: "die × adidas originals",
    slug: "die-x-adidas-originals",
    status: "active",
  },

  {
    name: "die × balenciaga",
    slug: "die-x-balenciaga",
    status: "active",
  },

  {
    name: "die × ysl",
    slug: "die-x-ysl",
    status: "active",
  },

  {
    name: "die × balmain",
    slug: "die-x-balmain",
    status: "coming-soon",
  },

  {
    name: "die × emporio armani",
    slug: "die-x-emporio-armani",
    status: "coming-soon",
  },

  {
    name: "die × aston martin aramco",
    slug: "die-x-aston-martin",
    status: "coming-soon",
  },
];

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-20 pt-40 pb-56">

      <div className="max-w-[1600px] mx-auto">

        {/* MICRO LABEL */}

        <p
          className="
          text-[9px]
          uppercase
          tracking-[0.7em]
          opacity-40
          mb-10
        "
        >

          campaign archive

        </p>

        {/* HERO */}

        <h1
          className="
          text-6xl
          md:text-8xl
          lg:text-[10rem]
          font-extralight
          tracking-[0.08em]
          leading-none
          mb-12
        "
        >

          collaborations

        </h1>

        <p
          className="
          max-w-xl
          text-xs
          uppercase
          tracking-[0.35em]
          opacity-50
          leading-8
          mb-40
        "
        >

          a dialogue between die and
          global fashion houses,
          cultural institutions and
          future archives.

        </p>

        {/* LIST */}

        <div className="space-y-20">

          {collaborations.map((item) => (

            <Link
              key={item.slug}
              href={`/collaborations/${item.slug}`}
              className="
              group
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-6
              border-b
              border-white/10
              pb-10
            "
            >

              <h2
                className="
                text-3xl
                md:text-6xl
                font-extralight
                tracking-[0.08em]
                transition
                duration-300
                group-hover:translate-x-4
              "
              >

                {item.name}

              </h2>

              <span
                className="
                text-[9px]
                uppercase
                tracking-[0.7em]
                opacity-40
              "
              >

                {item.status}

              </span>

            </Link>

          ))}

        </div>

        {/* FOOTER */}

        <div className="mt-56">

          <p
            className="
            text-[9px]
            uppercase
            tracking-[0.5em]
            opacity-30
          "
          >

            die research laboratory • paris atelier • geneva studio • luxembourg house

          </p>

        </div>

      </div>

    </main>
  );
}