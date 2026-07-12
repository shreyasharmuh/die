import Image from "next/image";

export default function EditorialCampaign() {
  return (
    <section className="bg-black text-white py-60">

      <div className="max-w-[1850px] mx-auto px-8 md:px-20">

        {/* Heading */}

        <div className="mb-32">

          <p
            className="
            uppercase
            tracking-[0.7em]
            text-[10px]
            text-white/35
            mb-8
            "
          >
            Summer Editorial
          </p>

          <h2
            className="
            text-6xl
            md:text-8xl
            xl:text-[9rem]
            font-extralight
            tracking-[-0.06em]
            leading-[0.9]
            "
          >
            Resort
            <br />
            Society.
          </h2>

        </div>

        {/* Hero */}

        <div className="relative overflow-hidden">

          <Image
            src="/images/collaborations/armani-exchange/editorial3.jpg"
            alt="Editorial One"
            width={1800}
            height={1200}
            className="w-full h-[900px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          <div className="absolute bottom-20 left-20 max-w-2xl">

            <p
              className="
              uppercase
              tracking-[0.55em]
              text-[10px]
              text-white/50
              mb-8
              "
            >
              Editorial 001
            </p>

            <h3
              className="
              text-5xl
              md:text-7xl
              font-extralight
              leading-[0.95]
              tracking-[-0.04em]
              "
            >
              Summer,
              <br />
              Unscripted.
            </h3>

          </div>

        </div>

        {/* Editorial Grid */}

        <div className="grid lg:grid-cols-2 gap-20 mt-28">

          {/* Left */}

          <div>

            <Image
              src="/images/collaborations/armani-exchange/editorial4.jpg"
              alt="Editorial Two"
              width={900}
              height={1200}
              className="w-full h-[760px] object-cover"
            />

            <h3
              className="
              text-4xl
              font-extralight
              mt-12
              tracking-[-0.04em]
              "
            >
              Off-Duty
              <br />
              Luxury
            </h3>

            <p
              className="
              mt-8
              leading-10
              text-white/60
              "
            >
              Inspired by sunlit afternoons,
              private clubs and effortless dressing.
              Relaxed silhouettes and elevated
              essentials create a wardrobe designed
              for movement beyond the court.
            </p>

          </div>

          {/* Right */}

          <div className="pt-32">

            <Image
              src="/images/collaborations/armani-exchange/editorial1.jpg"
              alt="Editorial Three"
              width={900}
              height={1200}
              className="w-full h-[760px] object-cover"
            />

            <h3
              className="
              text-4xl
              font-extralight
              mt-12
              tracking-[-0.04em]
              "
            >
              Resort
              <br />
              Rhythm
            </h3>

            <p
              className="
              mt-8
              leading-10
              text-white/60
              "
            >
              Between coastal mornings
              and city evenings, every look
              reflects modern ease,
              understated confidence
              and contemporary Italian lifestyle.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}