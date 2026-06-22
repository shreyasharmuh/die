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
          priority
          className="object-cover"
        />

      </div>

      {/* OVERLAYS */}

      <div className="absolute inset-0 bg-black/85" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />

      <div className="relative z-10 min-h-[1200px] flex flex-col text-white">

        {/* INTRO */}

        <section className="px-8 md:px-16 pt-24 md:pt-32">

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.7em]
            text-white/40
            mb-10
          "
          >

            european cultural house

          </p>

          <h2
            className="
            text-5xl

            sm:text-7xl

            md:text-[8rem]

            lg:text-[10rem]

            font-extralight

            leading-[0.88]

            tracking-[-0.07em]

            max-w-6xl
          "
          >

            A EUROPEAN

            <br />

            HOUSE OF

            <br />

            FUTURE

            <br />

            CULTURE

          </h2>

          <p
            className="
            mt-12

            max-w-md

            text-[10px]

            uppercase

            tracking-[0.45em]

            leading-7

            text-white/35
          "
          >

            fashion, movement,
            editorial culture and
            future identities.

          </p>

        </section>

        {/* MONUMENT */}

        <section className="flex-1 flex items-center justify-center relative">

          <h1
            className="
            text-[26vw]

            md:text-[22vw]

            leading-none

            tracking-[-0.14em]

            font-extralight

            lowercase

            text-white/95

            select-none
          "
          >

            die

          </h1>

          <h1
            aria-hidden
            className="
            absolute

            text-[26vw]

            md:text-[22vw]

            leading-none

            tracking-[-0.14em]

            font-extralight

            lowercase

            text-white/5

            blur-sm

            scale-[1.03]

            select-none
          "
          >

            die

          </h1>

        </section>

        {/* FOOTER GRID */}

        <section className="px-8 md:px-16">

          <div
            className="
            grid

            md:grid-cols-5

            gap-14

            border-t

            border-white/10

            pt-16
          "
          >

            {/* ABOUT */}

            <div>

              <p
                className="
                text-white/60

                leading-8

                max-w-sm
              "
              >

                a contemporary european
                house exploring fashion,
                movement, permanence
                and future culture.

              </p>

            </div>

            {/* EXPLORE */}

            <div>

              <h3
                className="
                text-[10px]

                uppercase

                tracking-[0.5em]

                text-white/40

                mb-8
              "
              >

                explore

              </h3>

              <div className="flex flex-col gap-4">

                <Link
                  href="/shop"
                  className="text-white/70 hover:text-white transition"
                >

                  shop

                </Link>

                <Link
                  href="/prostituee"
                  className="text-white/70 hover:text-white transition"
                >

                  prostituée

                </Link>

                <Link
                  href="/atheiste"
                  className="text-white/70 hover:text-white transition"
                >

                  athéiste

                </Link>

                <Link
                  href="/collaborations"
                  className="text-white/70 hover:text-white transition"
                >

                  collaborations

                </Link>

              </div>

            </div>

            {/* SOCIAL */}

            <div>

              <h3
                className="
                text-[10px]

                uppercase

                tracking-[0.5em]

                text-white/40

                mb-8
              "
              >

                social

              </h3>

              <div className="flex flex-col gap-4">

                <Link
                  href="https://www.instagram.com/shreyasharmuh/"
                  target="_blank"
                  className="text-white/70 hover:text-white transition"
                >

                  instagram

                </Link>

                <Link
                  href="https://www.linkedin.com/in/shreyash-sharma-562a333a5/"
                  target="_blank"
                  className="text-white/70 hover:text-white transition"
                >

                  linkedin

                </Link>

              </div>

            </div>

            {/* LEGAL */}

            <div>

              <h3
                className="
                text-[10px]

                uppercase

                tracking-[0.5em]

                text-white/40

                mb-8
              "
              >

                legal

              </h3>

              <div className="flex flex-col gap-4">

                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition"
                >

                  about

                </Link>

                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white transition"
                >

                  privacy policy

                </Link>

                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition"
                >

                  terms & conditions

                </Link>

              </div>

            </div>

            {/* SYSTEM */}

            <div>

              <h3
                className="
                text-[10px]

                uppercase

                tracking-[0.5em]

                text-white/40

                mb-8
              "
              >

                system

              </h3>

              <div
                className="
                space-y-4

                text-[10px]

                uppercase

                tracking-[0.45em]

                text-white/40
              "
              >

                <p>geneva studio</p>

                <p>luxembourg house</p>

                <p>paris atelier</p>

                <p>zurich office</p>

              </div>

            </div>

          </div>

        </section>

        {/* BOTTOM */}

        <section className="px-8 md:px-16 py-16">

          <div
            className="
            border-t

            border-white/10

            pt-10

            flex

            flex-col

            md:flex-row

            justify-between

            gap-10
          "
          >

            <div>

              <p
                className="
                text-[10px]

                uppercase

                tracking-[0.6em]

                text-white/25
              "
              >

                distinctive • individual • perspective

              </p>

            </div>

            <div className="text-left md:text-right">

              <p className="text-sm text-white/40 lowercase">

                designed by shreyash sharma

              </p>

              <p className="text-xs text-white/20 mt-4 lowercase">

                © 2026 die. all rights reserved.

              </p>

            </div>

          </div>

        </section>

      </div>

    </footer>
  );
}