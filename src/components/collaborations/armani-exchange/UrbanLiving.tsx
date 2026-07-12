import Image from "next/image";

const lifestyle = [
  {
    number: "01",
    title: "Morning",
    image: "/images/collaborations/armani-exchange/Lifestyle1.jpg",
    text: "Early sunlight, coffee, movement and contemporary simplicity."
  },
  {
    number: "02",
    title: "Afternoon",
    image: "/images/collaborations/armani-exchange/Lifestyle2.jpg",
    text: "Architecture becomes part of the wardrobe."
  },
  {
    number: "03",
    title: "Evening",
    image: "/images/collaborations/armani-exchange/lifestyle3.jpg",
    text: "Relaxed tailoring designed for metropolitan nightlife."
  }
];

export default function UrbanLiving() {
  return (
    <section className="bg-[#F5F4F0] py-56">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        <div className="mb-32">

          <p className="uppercase tracking-[0.7em] text-[10px] text-black/35 mb-8">

            Urban Living

          </p>

          <h2 className="text-6xl md:text-8xl xl:text-[9rem] font-extralight tracking-[-0.06em] leading-[0.9]">

            Life
            <br />
            Between
            <br />
            Spaces.

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {lifestyle.map((item) => (

            <div key={item.number}>

              <div className="overflow-hidden rounded-sm">
  <Image
    src={item.image}
    alt={item.title}
    width={900}
    height={1200}
    className="
      w-full
      aspect-[3/4]
      object-cover
      object-top
      hover:scale-[1.025]
      transition-all
      duration-700
    "
  />
</div>

              <p className="mt-8 uppercase tracking-[0.5em] text-[10px] text-black/35">

                {item.number}

              </p>

              <h3 className="text-4xl font-extralight mt-5">

                {item.title}

              </h3>

              <p className="mt-6 leading-9 text-black/60">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}