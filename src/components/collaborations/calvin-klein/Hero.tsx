import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white">

      {/* HERO IMAGE */}

      <div className="relative h-[82vh] w-full">

        <Image
          src="/images/auth/image6.jpg"
          alt="Calvin Klein x DIE"
          fill
          priority
          className="object-cover"
        />

      </div>

      {/* TYPOGRAPHY */}

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">

        <h1 className="text-black text-4xl md:text-7xl font-light tracking-wide uppercase">
          Calvin Klein × DIE
        </h1>

        <p className="mt-4 text-xs tracking-[0.45em] uppercase text-black/70">
          The Essentials Collection
        </p>

        <div className="flex justify-center gap-10 mt-10">

          <button className="text-xs tracking-[0.35em] uppercase border-b border-black pb-1">
            Shop Women
          </button>

          <button className="text-xs tracking-[0.35em] uppercase border-b border-black pb-1">
            Shop Men
          </button>

        </div>

      </div>

    </section>
  );
}