import Link from "next/link";

const categories = [
  "tailoring",

  "jersey",

  "denim",

  "outerwear",

  "footwear",

  "accessories",
];

export default function Categories() {
  return (
    <section className="px-8 md:px-16 py-40">

      <div className="max-w-[1700px] mx-auto">

        <div className="border-t border-black/10">

          {categories.map((item, index) => (

            <Link
              key={item}
              href={`/shop/menswear/${item}`}
              className="
              group

              flex

              justify-between

              items-center

              border-b

              border-black/10

              py-14
            "
            >

              <div className="flex items-center gap-8">

                <p className="text-[10px] opacity-30">

                  0{index + 1}

                </p>

                <h2
                  className="
                  text-4xl

                  md:text-7xl

                  font-extralight

                  group-hover:translate-x-4

                  transition
                "
                >

                  {item}

                </h2>

              </div>

              <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">

                enter

              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}