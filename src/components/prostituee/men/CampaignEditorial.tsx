
import Image from "next/image";

const campaign = [
  {
    image: "/images/prostituee/men/campaign1.jpg",
    title: "Morning Ritual",
  },
  {
    image: "/images/prostituee/men/campaign2.jpg",
    title: "Quiet Architecture",
  },
  {
    image: "/images/prostituee/men/campaign3.jpg",
    title: "Private Uniform",
  },
];

export default function MenCampaignEditorial() {
  return (
    <section className="bg-white py-52">

      <div className="max-w-[1850px] mx-auto px-8">

        {/* Heading */}

        <div className="grid lg:grid-cols-2 gap-32 mb-36">

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
              Editorial Campaign
            </p>

            <h2
              className="
              text-6xl
              md:text-8xl
              font-extralight
              tracking-[-0.06em]
              leading-[0.9]
              "
            >
              Morning,
              <br />
              uninterrupted.
            </h2>

          </div>

          <div className="flex items-end">

            <p
              className="
              max-w-xl
              text-lg
              leading-9
              text-neutral-500
              "
            >
              A quiet study of masculinity expressed through natural light,
              architectural interiors and garments designed to disappear into
              everyday life.
            </p>

          </div>

        </div>

        {/* Hero Image */}

        <div className="relative aspect-[16/9] overflow-hidden mb-32">

          <Image
            src={campaign[0].image}
            alt={campaign[0].title}
            fill
            className="
            object-cover
            transition-transform
            duration-700
            hover:scale-[1.02]
            "
          />

        </div>

        {/* Editorial Grid */}

        <div className="grid lg:grid-cols-2 gap-12">

          {campaign.slice(1).map((item) => (

            <div
              key={item.title}
              className="group"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                  "
                />

              </div>

              <p
                className="
                mt-8
                uppercase
                tracking-[0.35em]
                text-[10px]
                text-neutral-400
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
