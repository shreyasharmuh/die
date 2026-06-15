import Image from "next/image";

export default function CampaignGallery() {
  return (
    <section className="bg-white text-black">

      {/* IMAGE 01 */}

      <div className="relative h-screen w-full">

        <Image
          src="/images/auth/iconic4.jpg"
          alt="Campaign 01"
          fill
          className="object-cover"
        />

      </div>

      {/* CAPTION */}

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">

        <div className="flex justify-between items-center">

          <p className="text-[10px] tracking-[0.45em] uppercase opacity-50">
            campaign image 001
          </p>

          <p className="text-[10px] tracking-[0.45em] uppercase opacity-50">
            calvin klein × die
          </p>

        </div>

      </div>

      {/* IMAGE 02 */}

      <div className="relative h-screen w-full">

        <Image
          src="/images/auth/image5.jpg"
          alt="Campaign 02"
          fill
          className="object-cover"
        />

      </div>

      {/* CAPTION */}

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">

        <div className="flex justify-between items-center">

          <p className="text-[10px] tracking-[0.45em] uppercase opacity-50">
            campaign image 002
          </p>

          <p className="text-[10px] tracking-[0.45em] uppercase opacity-50">
            the essentials collection
          </p>

        </div>

      </div>

    </section>
  );
}