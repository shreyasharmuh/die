import Image from "next/image";

const schedule = [
  {
    time: "THURSDAY",
    title: "Arrival",
    description:
      "Luxury travel pieces engineered for seamless movement across continents.",
  },
  {
    time: "FRIDAY",
    title: "Practice",
    description:
      "Technical performance layers balancing comfort, airflow and precision.",
  },
  {
    time: "SATURDAY",
    title: "Qualifying",
    description:
      "Refined silhouettes inspired by speed, discipline and engineering.",
  },
  {
    time: "SUNDAY",
    title: "Race Day",
    description:
      "Performance tailoring elevated through contemporary luxury craftsmanship.",
  },
];

export default function RaceWeekend() {
  return (
    <section className="bg-white py-44 md:py-56">

      <div className="max-w-[1700px] mx-auto px-8 md:px-16">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.6em] text-[10px] text-[#00594F] mb-8">

              Race Weekend

            </p>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.92] tracking-[-0.04em]">

              A Uniform
              <br />
              for Every
              <br />
              Session.

            </h2>

            <p className="mt-10 max-w-lg text-black/70 leading-9">

              Every Formula One weekend demands a different rhythm.
              This collection adapts through engineered luxury,
              seamlessly transitioning from paddock to city.

            </p>

          </div>

          {/* RIGHT */}

          <div className="relative aspect-[4/5] overflow-hidden">

            <Image
              src="/images/collaborations/aston-martin/raceweekend.jpg"
              alt="Race Weekend"
              fill
              className="object-cover"
            />

          </div>

        </div>

        <div className="mt-32 border-t border-black/10">

          {schedule.map((item) => (

            <div
              key={item.time}
              className="grid md:grid-cols-[180px_250px_1fr] gap-10 py-10 border-b border-black/10"
            >

              <div className="text-[11px] tracking-[0.45em] uppercase text-[#00594F]">

                {item.time}

              </div>

              <h3 className="text-3xl font-light">

                {item.title}

              </h3>

              <p className="text-black/60 leading-8 max-w-xl">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}