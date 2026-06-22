"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#fafafa] px-8 md:px-16">

      <div className="max-w-[1700px] mx-auto flex flex-col justify-between min-h-screen py-32">

        {/* TOP */}

        <div>

          <p
            className="
            text-[9px]

            uppercase

            tracking-[0.7em]

            opacity-40

            mb-10
          "
          >

            die uniform system

          </p>

          <h1
            className="
            text-6xl

            sm:text-8xl

            md:text-[10rem]

            lg:text-[12rem]

            font-extralight

            leading-[0.88]

            tracking-[-0.08em]

            max-w-6xl
          "
          >

            the

            <br />

            uniform

          </h1>

        </div>

        {/* CENTER */}

        <div className="flex justify-center py-20">

          <h2
            className="
            text-[18vw]

            md:text-[14vw]

            font-extralight

            tracking-[-0.12em]

            lowercase

            opacity-[0.06]

            select-none
          "
          >

            die

          </h2>

        </div>

        {/* BOTTOM */}

        <div
          className="
          flex

          flex-col

          md:flex-row

          md:justify-between

          gap-16
        "
        >

          <div>

            <p
              className="
              max-w-md

              text-[10px]

              uppercase

              tracking-[0.45em]

              leading-8

              opacity-50
            "
            >

              a permanent wardrobe
              built through restraint,
              permanence and future
              culture.

            </p>

          </div>

          <div className="flex flex-col gap-4">

            <Link
              href="/shop/menswear"
              className="
              text-xl

              md:text-2xl

              font-light

              hover:translate-x-2

              transition
            "
            >

              menswear

            </Link>

            <Link
              href="/shop/womenswear"
              className="
              text-xl

              md:text-2xl

              font-light

              hover:translate-x-2

              transition
            "
            >

              womenswear

            </Link>

            <Link
              href="/shop/leather-goods"
              className="
              text-xl

              md:text-2xl

              font-light

              hover:translate-x-2

              transition
            "
            >

              leather goods

            </Link>

            <Link
              href="/shop/objects"
              className="
              text-xl

              md:text-2xl

              font-light

              hover:translate-x-2

              transition
            "
            >

              objects

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}