import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Divider */}

      <div className="border-t border-white/10" />

      <div className="max-w-[1850px] mx-auto px-8 md:px-20 py-44">

        {/* Logo */}

        <div className="flex justify-center mb-24">

          <Image
            src="/images/collaborations/adidas-originals/logo1.svg"
            alt="Adidas Originals"
            width={150}
            height={70}
            className="opacity-90"
          />

        </div>

        {/* Main Heading */}

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.7em]
            text-[10px]
            text-white/35
            mb-10
            "
          >

            Collaboration Complete

          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            xl:text-[9rem]
            font-extralight
            tracking-[-0.05em]
            leading-[0.9]
            "
          >

            DIE ×
            <br />
            Adidas Originals

          </h2>

          <p
            className="
            max-w-3xl
            mx-auto
            mt-12
            text-white/55
            leading-10
            text-lg
            "
          >

            An exploration of performance, architecture and
            contemporary culture. Designed for movement.
            Archived for the future.

          </p>

        </div>

        {/* Metadata */}

        <div className="grid md:grid-cols-4 gap-10 mt-36">

          <div>

            <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 mb-5">

              House

            </p>

            <p className="text-xl font-light">

              Adidas Originals

            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 mb-5">

              Collection

            </p>

            <p className="text-xl font-light">

              Future Motion

            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 mb-5">

              Year

            </p>

            <p className="text-xl font-light">

              2027

            </p>

          </div>

          <div>

            <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 mb-5">

              Archive

            </p>

            <p className="text-xl font-light">

              No. 001

            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-28" />

        {/* Navigation */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

          <div>

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-white/30
              mb-4
              "
            >

              Next Collaboration

            </p>

            <Link
              href="/collaborations/die-x-armani-exchange"
              className="
              text-4xl
              md:text-6xl
              font-extralight
              hover:opacity-60
              transition
              "
            >

              Armani Exchange →

            </Link>

          </div>

          <div className="text-right">

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-white/30
              mb-4
              "
            >

              Designed by

            </p>

            <h3 className="text-3xl md:text-4xl font-extralight">

              DIE Research Laboratory

            </h3>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
          mt-32
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          border-t
          border-white/10
          pt-10
          "
        >

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-white/30
            "
          >

            DIE® 2027

          </p>

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-white/30
            "
          >

            Future Archive / Collaboration Series / Volume 001

          </p>

        </div>

      </div>

    </footer>
  );
}