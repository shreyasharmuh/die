import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative h-screen overflow-hidden">

      <Image
        src="/images/collaborations/ea7/footer.jpg"
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 h-full flex flex-col justify-between p-12">

        <div />

        <div>

          <h2 className="text-white text-[6rem] md:text-[10rem] leading-[0.82] tracking-[-0.09em] font-light">

            EA7
            <br />
            ×
            <br />
            DIE

          </h2>

          <p className="mt-8 uppercase tracking-[0.45em] text-white/70 text-xs">
            Milano 2026
          </p>

        </div>

      </div>

    </footer>
  );
}