import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f0] text-black py-32">

      <div className="max-w-[1800px] mx-auto px-8 md:px-20">

        {/* Top */}

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-24 items-end">

          <div>

            <p
              className="
              uppercase
              tracking-[0.75em]
              text-[10px]
              text-black/35
              mb-8
              "
            >
              DIE® Collaboration
            </p>

            <h2
              className="
              text-6xl
              md:text-8xl
              xl:text-[8rem]
              font-extralight
              tracking-[-0.06em]
              leading-[0.88]
              "
            >
              DIE ×
              <br />
              Armani
              <br />
              Exchange
            </h2>

          </div>

          <div className="flex justify-start lg:justify-end">

            <Image
              src="/images/collaborations/armani-exchange/logo.svg"
              alt="Armani Exchange"
              width={170}
              height={70}
              className="opacity-80"
            />

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-black/10 my-24" />

        {/* Navigation */}

        <div className="grid md:grid-cols-4 gap-20">

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-black/35 mb-8">

              Explore

            </p>

            <div className="space-y-4">

              <Link href="/">Home</Link>

              <br />

              <Link href="/shop">Shop</Link>

              <br />

              <Link href="/collections">Collections</Link>

              <br />

              <Link href="/collaborations">Collaborations</Link>

            </div>

          </div>

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-black/35 mb-8">

              Archive

            </p>

            <div className="space-y-4">

              <p>Editorials</p>

              <p>Campaigns</p>

              <p>Research</p>

              <p>Journal</p>

            </div>

          </div>

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-black/35 mb-8">

              Location

            </p>

            <div className="space-y-4">

              <p>Paris</p>

              <p>Milan</p>

              <p>New Bombay</p>

            </div>

          </div>

          <div>

            <p className="uppercase tracking-[0.5em] text-[10px] text-black/35 mb-8">

              Credits

            </p>

            <p className="leading-8 text-black/60">

              Creative Direction

              <br />

              DIE®

              <br /><br />

              Collaboration Concept

              <br />

              Armani Exchange

              <br /><br />

              Campaign Archive 2027

            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-black/10 mt-28 pt-10 flex flex-col lg:flex-row justify-between gap-6">

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/35
            "
          >
            © 2027 DIE®. ALL RIGHTS RESERVED.
          </p>

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-black/35
            "
          >
            DIE × ARMANI EXCHANGE · ARCHIVE COLLECTION
          </p>

        </div>

      </div>

    </footer>
  );
}