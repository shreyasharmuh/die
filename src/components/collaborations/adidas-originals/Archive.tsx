const archive = [
  {
    label: "House",
    value: "Adidas Originals",
  },
  {
    label: "Collaboration",
    value: "DIE × Adidas Originals",
  },
  {
    label: "Collection",
    value: "Future Motion",
  },
  {
    label: "Season",
    value: "2027",
  },
  {
    label: "Category",
    value: "Performance Lifestyle",
  },
  {
    label: "Discipline",
    value: "Sportswear / Contemporary Design",
  },
  {
    label: "Creative Direction",
    value: "DIE Research Laboratory",
  },
  {
    label: "Visual Language",
    value: "Minimal • Brutalist • Swiss",
  },
];

export default function Archive() {
  return (
    <section className="bg-[#F5F5F2] text-black py-52">

      <div className="max-w-[1700px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="mb-28">

          <p className="uppercase tracking-[0.6em] text-[10px] text-black/35 mb-6">

            Archive Index

          </p>

          <h2
            className="
            text-6xl
            md:text-8xl
            xl:text-[9rem]
            font-extralight
            tracking-[-0.05em]
            leading-[0.9]
            "
          >
            Archive
            <br />
            Record

          </h2>

        </div>

        {/* Archive */}

        <div className="border border-black/10">

          {archive.map((item) => (

            <div
              key={item.label}
              className="
              grid
              md:grid-cols-[250px_1fr]
              border-b
              border-black/10
              px-10
              py-10
              "
            >

              <p
                className="
                uppercase
                tracking-[0.45em]
                text-[10px]
                text-black/35
                "
              >
                {item.label}
              </p>

              <p
                className="
                text-2xl
                md:text-3xl
                font-extralight
                "
              >
                {item.value}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-24 mt-36">

          <div>

            <h3
              className="
              text-5xl
              md:text-6xl
              font-extralight
              leading-tight
              "
            >

              Designed
              today.
              <br />
              Archived
              forever.

            </h3>

          </div>

          <div>

            <p className="leading-10 text-black/60">

              Every DIE collaboration becomes part of a permanent
              archive documenting design research, material
              innovation and contemporary culture. Rather than
              seasonal releases, each collection exists as an
              evolving document within the DIE Archive.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}