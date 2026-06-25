import Image from "next/image";

const campaigns = [
  {
    image: "/images/collaborations/adidas-originals/uniform.jpg",
    title: "uniform 001",
  },
  {
    image: "/images/collaborations/adidas-originals/image2.jpg",
    title: "uniform 002",
  },
  {
    image: "/images/collaborations/adidas-originals/image6.jpg",
    title: "uniform 003",
  },
];

export default function Gallery() {
  return (
    <section className="bg-black text-white">

      {campaigns.map((campaign, index) => (
        <div
          key={index}
          className="relative h-screen overflow-hidden"
        >

          <Image
            src={campaign.image}
            alt={campaign.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-16 left-8 md:left-16">

            <p className="text-[10px] tracking-[0.5em] uppercase opacity-60 mb-4">
              campaign
            </p>

            <h2 className="text-5xl md:text-[8rem] font-extralight uppercase leading-none">
              {campaign.title}
            </h2>

          </div>

        </div>
      ))}

    </section>
  );
}