import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* Background */}

      <Image
        src="/images/collaborations/armani-exchange/hero2.jpg"
        alt="DIE x Armani Exchange"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />


      {/* Hero */}

      <div className="absolute inset-0 flex items-center">

        <div className="w-full px-8 md:px-20">

          <div className="max-w-[1700px] mx-auto">

            <p
              className="
              uppercase
              tracking-[0.8em]
              text-[10px]
              text-white/70
              mb-8
              "
            >

              Collaboration 002

            </p>

            <div className="flex gap-10 mt-14">

              <span
                className="
                uppercase
                tracking-[0.45em]
                text-[11px]
                text-white/60
                "
              >
                2027
              </span>

              <span
                className="
                uppercase
                tracking-[0.45em]
                text-[11px]
                text-white/60
                "
              >
                Volume 002
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        uppercase
        tracking-[0.45em]
        text-[10px]
        text-white/45
        "
      >

        Contemporary Uniforms

      </div>

    </section>
  );
}