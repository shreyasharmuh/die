import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <Image
          src="/images/collaborations/adidas-originals/image4.jpg"
          alt="DIE x Adidas Originals"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 text-center">

        {/* ADIDAS LOGO */}

        <div className="relative w-[140px] h-[80px] mt-20">
  <Image
    src="/images/collaborations/adidas-originals/logo1.svg"
    alt="Adidas Originals"
    fill
    className="object-contain"
  />
</div>
        {/* DIVIDER */}

        <div className="mb-12 text-4xl md:text-6xl opacity-40">
          ×
        </div>

        {/* DIE */}

        <h1 className="text-7xl md:text-[10rem] font-extralight tracking-[0.25em] uppercase leading-none">
          die
        </h1>

        {/* SUBTITLE */}

        <p className="mt-5 max-w-xl text-xs tracking-[0.25em] uppercase opacity-40">
          luxury sportswear archive
        </p>

      </div>

    </section>
  );
}