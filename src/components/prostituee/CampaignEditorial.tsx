import Image from "next/image";

export default function CampaignEditorial() {
  return (
    <section className="bg-white text-black py-52">

      <div className="max-w-[1850px] mx-auto px-10">

        {/* Intro */}

        <div className="grid lg:grid-cols-2 gap-32 mb-44">

          <div>

            <p
              className="
              uppercase
              tracking-[0.55em]
              text-[10px]
              text-neutral-400
              mb-8
              "
            >
              Campaign Editorial
            </p>

            <h2
              className="
              text-7xl
              md:text-8xl
              font-extralight
              tracking-[-0.06em]
              leading-[0.9]
              "
            >
              The beauty
              <br />
              of restraint.
            </h2>

          </div>

          <div className="flex items-end">

            <p
              className="
              text-lg
              leading-9
              text-neutral-500
              max-w-xl
              "
            >
              Nothing is exaggerated.
              Every silhouette, every fabric,
              every proportion exists to create
              quiet confidence rather than
              visual noise.
            </p>

          </div>

        </div>

        {/* Editorial One */}

        <Image
          src="/images/prostituee/campaign1.jpg"
          alt=""
          width={1800}
          height={1200}
          className="
          w-full
          h-[980px]
          object-cover
          "
        />

        {/* Spacer */}

        <div className="h-44" />

        {/* Editorial Two */}

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <Image
            src="/images/prostituee/campaign2.jpg"
            alt=""
            width={900}
            height={1200}
            className="
            w-full
            h-[850px]
            object-cover
            "
          />

          <div className="max-w-lg">

            <h3
              className="
              text-5xl
              font-extralight
              leading-tight
              "
            >
              Comfort
              becomes
              elegance.
            </h3>

            <p
              className="
              mt-10
              text-neutral-500
              leading-9
              text-lg
              "
            >
              Understated luxury designed for
              everyday rituals.
              Pieces that move naturally between
              private spaces and contemporary life.
            </p>

          </div>

        </div>

        {/* Spacer */}

        <div className="h-52" />

        {/* Two Editorial Images */}

        <div className="grid lg:grid-cols-2 gap-14">

          <Image
            src="/images/prostituee/campaign3.jpg"
            alt=""
            width={900}
            height={1200}
            className="
            w-full
            h-[900px]
            object-cover
            "
          />

          <Image
            src="/images/prostituee/campaign4.jpg"
            alt=""
            width={900}
            height={1200}
            className="
            w-full
            h-[900px]
            object-cover
            "
          />

        </div>

      </div>

    </section>
  );
}