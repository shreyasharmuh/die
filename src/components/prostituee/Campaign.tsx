import Image from "next/image";

const campaigns = [
  {
    title: "second skin",
    image: "/images/prostituee/campaign1.jpg",
  },

  {
    title: "private uniform",
    image: "/images/prostituee/campaign2.jpg",
  },

  {
    title: "after hours",
    image: "/images/prostituee/campaign3.jpg",
  },
];

export default function Campaign() {
  return (
    <section className="px-8 md:px-20 py-32 bg-[#090909] text-white">

      <div className="space-y-20">

        <div className="flex justify-between items-end">

          <div className="space-y-4">

            <p className="text-[9px] tracking-[0.6em] uppercase opacity-40">

              campaign studies

            </p>

            <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.12em]">

              private worlds

            </h2>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {campaigns.map((item) => (

            <div
              key={item.title}
              className="group space-y-6"
            >

              <div className="relative h-[520px] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
                />

              </div>

              <p
                className="
                text-[10px]
                tracking-[0.45em]
                uppercase
                opacity-60
              "
              >

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}