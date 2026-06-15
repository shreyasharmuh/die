import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-40 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/sex2.jpg"
          alt="DIE Editorial"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 min-h-[1400px] flex flex-col text-white">

        {/* TOP INTRO */}
        <section className="px-8 md:px-16 pt-24">
          <p className="uppercase tracking-[0.6em] text-white/40 text-xs mb-10">
            die
          </p>

          <h2 className="text-6xl md:text-[10rem] leading-[0.9] tracking-[-0.06em] font-light max-w-5xl">
            A NEW
            <br />
            LANGUAGE
            <br />
            OF SILENCE
          </h2>
        </section>

        {/* CENTER TYPOGRAPHY MONUMENT */}
        <section className="flex-1 flex items-center justify-center relative">

          <h1
            className="
              text-center
              text-[22vw]
              leading-[0.75]
              tracking-[-0.1em]
              font-extralight
              lowercase
              select-none
              text-white/90
            "
          >
            die
          </h1>

          {/* ghost layer for depth */}
          <h1
            aria-hidden
            className="
              absolute
              text-center
              text-[22vw]
              leading-[0.75]
              tracking-[-0.1em]
              font-extralight
              lowercase
              text-white/5
              blur-[1px]
              scale-[1.02]
              select-none
            "
          >
            die
          </h1>
        </section>

        {/* FOOTER GRID */}
        <section className="px-8 md:px-16 pb-24">

          <div className="grid md:grid-cols-4 gap-16 border-t border-white/10 pt-16">

            <div>
              <p className="text-white/60 leading-relaxed max-w-sm">
                contemporary luxury garments designed through permanence,
                restraint and individual perspective.
              </p>
            </div>

            <div>
              <h3 className="uppercase text-xs tracking-[0.4em] text-white/40 mb-6">
                explore
              </h3>
              <div className="flex flex-col gap-4 text-white/70">
                <Link href="/shop">shop</Link>
                <Link href="/about">about</Link>
                <Link href="/contact">contact</Link>
              </div>
            </div>

            <div>
              <h3 className="uppercase text-xs tracking-[0.4em] text-white/40 mb-6">
                social
              </h3>
              <div className="flex flex-col gap-4 text-white/70">
                <Link href="https://www.instagram.com/shreyasharmuh/" target="_blank">instagram</Link>
                <Link href="https://www.linkedin.com/in/shreyash-sharma-562a333a5/" target="_blank">linkedin</Link>
                <Link href="https://x.com" target="_blank">x</Link>
              </div>
            </div>

            <div>
              <h3 className="uppercase text-xs tracking-[0.4em] text-white/40 mb-6">
                legal
              </h3>
              <div className="flex flex-col gap-4 text-white/70">
                <Link href="/privacy">privacy policy</Link>
                <Link href="/terms">terms & conditions</Link>
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM STRIP */}
        <section className="px-8 md:px-16 pb-16">

          <div className="flex flex-col md:flex-row justify-between items-end gap-10">

            <div>
              <p className="uppercase tracking-[0.45em] text-[10px] text-white/40">
                distinctive
              </p>
              <p className="uppercase tracking-[0.45em] text-[10px] text-white/40 mt-2">
                individual
              </p>
              <p className="uppercase tracking-[0.45em] text-[10px] text-white/40 mt-2">
                perspective
              </p>
            </div>

            <div className="text-right">
              <p className="text-white/40 text-sm lowercase">
                designed by shreyash sharma
              </p>
              <p className="text-white/20 text-xs mt-4 lowercase">
                © 2026 die. all rights reserved.
              </p>
            </div>

          </div>

        </section>

      </div>
    </footer>
  );
}