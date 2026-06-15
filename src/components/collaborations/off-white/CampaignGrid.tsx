import Image from "next/image";

const objects = [
  {
    title: "object 001",
    image: "/images/collaborations/off-white/campaign-1.jpg",
  },
  {
    title: "object 002",
    image: "/images/collaborations/off-white/campaign-2.jpg",
  },
  {
    title: "object 003",
    image: "/images/collaborations/off-white/campaign-3.jpg",
  },
  {
    title: "object 004",
    image: "/images/collaborations/off-white/campaign-4.jpg",
  },
];

export default function CampaignGrid() {
  return (
    <section className="bg-[#f5f5f2] text-black py-40">

      <div className="px-8 md:px-16">

        <p className="text-[10px] tracking-[0.5em] uppercase opacity-50 mb-8">
          campaign archive
        </p>

        <h2 className="text-6xl md:text-[10rem] font-extralight leading-[0.9] uppercase mb-24">
          cultural
          <br />
          objects
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-black">

          {objects.map((item) => (
            <div
              key={item.title}
              className="group bg-[#f5f5f2]"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                />

              </div>

              <div className="p-8 md:p-10 border-t border-black">

                <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">
                  research object
                </p>

                <h3 className="text-3xl md:text-5xl font-extralight uppercase">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}