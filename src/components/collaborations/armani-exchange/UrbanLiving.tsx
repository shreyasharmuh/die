import Image from "next/image";

const lifestyle = [
  {
    number: "01",
    title: "Move",
    image: "/images/collaborations/armani-exchange/Lifestyle1.jpg",
    text: "Performance begins long before the workout. Lightweight essentials, warm sunlight and effortless confidence create the everyday rhythm of A|X Active."
  },
  {
    number: "02",
    title: "Recover",
    image: "/images/collaborations/armani-exchange/Lifestyle2.jpg",
    text: "Between sessions, comfort becomes part of the uniform. Breathable layers, relaxed silhouettes and quiet moments under the afternoon sun."
  },
  {
    number: "03",
    title: "Reset",
    image: "/images/collaborations/armani-exchange/lifestyle3.jpg",
    text: "Hydration, movement and focus. Designed for every court, every city and every destination where sport naturally becomes part of modern living."
  }
];

export default function UrbanLiving() {
  return (
    <section className="bg-[#F5F4F0] py-56">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="max-w-5xl mb-36">

          <p className="uppercase tracking-[0.75em] text-[10px] text-black/35 mb-8">

            A|X Active Lifestyle

          </p>

          <h2 className="text-6xl md:text-8xl xl:text-[9rem] font-extralight tracking-[-0.06em] leading-[0.9]">

            Built
            <br />
            For
            <br />
            Motion.

          </h2>

          <p className="mt-12 max-w-2xl text-black/55 leading-9 text-lg">

            Contemporary sportswear designed for movement beyond the gym.
            A collection created for training, recovery and everyday life,
            balancing technical comfort with the unmistakable attitude of
            Armani Exchange.

          </p>

        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-3 gap-10">

          {lifestyle.map((item) => (

            <article key={item.number}>

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
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </div>

              <p className="mt-8 uppercase tracking-[0.55em] text-[10px] text-black/35">

                {item.number}

              </p>

              <h3 className="mt-5 text-4xl font-extralight tracking-[-0.04em]">

                {item.title}

              </h3>

              <p className="mt-6 text-black/60 leading-9">

                {item.text}

              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}