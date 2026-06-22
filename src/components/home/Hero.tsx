import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >

        <source
          src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1781410260/hero1_yf8xji.mp4" />
      </video>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}

      <div className="relative z-10 h-full flex items-end">

        <div className="w-full px-8 md:px-20 pb-20 md:pb-28">

          <div className="max-w-[1600px] mx-auto">

            <p
              className="
              text-[9px]
              uppercase
              tracking-[0.7em]
              text-white/60
              mb-6
            "
            >

              european cultural house

            </p>

            <h1
              className="
              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-[10rem]
              xl:text-[12rem]
              font-extralight
              leading-[0.9]
              tracking-[0.06em]
              text-white
            "
            >

              die

            </h1>

            <h2
              className="
              mt-6
              text-lg
              md:text-2xl
              uppercase
              tracking-[0.35em]
              text-white/80
            "
            >

              the european house of future culture

            </h2>

            <div className="mt-16 flex flex-wrap gap-5">

              <Link
                href="/shop"
                className="
                border
                border-white/20
                px-8
                py-4
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
              >

                shop

              </Link>

              <Link
                href="/prostituee"
                className="
                border
                border-white/20
                px-8
                py-4
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
              >

                prostituée

              </Link>

              <Link
                href="/atheiste"
                className="
                border
                border-white/20
                px-8
                py-4
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
              >

                athéiste

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}