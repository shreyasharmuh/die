
"use client";

import Link from "next/link";

const navigation = [
  "Men",
  "Women",
  "Collections",
  "Campaigns",
  "Journal",
];

const legal = [
  "Privacy",
  "Terms",
  "Shipping",
  "Returns",
];

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-neutral-200">

      <div className="max-w-[1850px] mx-auto px-8 py-28">

        {/* Top */}

        <div className="grid lg:grid-cols-4 gap-20">

          {/* Brand */}

          <div>

            <h2
              className="
              text-3xl
              font-extralight
              tracking-[0.35em]
              "
            >
              PROSTITUTÉE
            </h2>

            <p
              className="
              mt-8
              text-neutral-500
              leading-8
              max-w-sm
              "
            >
              Quiet luxury through intimate essentials,
              refined loungewear and timeless objects
              designed for everyday rituals.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-neutral-400
              mb-8
              "
            >
              Navigation
            </p>

            <div className="space-y-5">

              {navigation.map((item) => (

                <Link
                  key={item}
                  href="#"
                  className="
                  block
                  text-neutral-600
                  hover:text-black
                  transition-colors
                  "
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-neutral-400
              mb-8
              "
            >
              Contact
            </p>

            <div className="space-y-5 text-neutral-600">

              <p>concierge@prostituee.com</p>

              <p>Paris</p>

              <p>Genève</p>

              <p>Milano</p>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-[10px]
              text-neutral-400
              mb-8
              "
            >
              Correspondence
            </p>

            <p className="text-neutral-500 leading-8">
              Receive collections,
              editorials and seasonal releases.
            </p>

            <div className="mt-10 flex">

              <input
                type="email"
                placeholder="Email"
                className="
                flex-1
                border-b
                border-black
                bg-transparent
                py-3
                outline-none
                placeholder:text-neutral-400
                "
              />

              <button
                className="
                ml-6
                uppercase
                tracking-[0.35em]
                text-[10px]
                "
              >
                Join
              </button>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-24 h-px bg-neutral-200" />

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <p
            className="
            uppercase
            tracking-[0.45em]
            text-[10px]
            text-neutral-400
            "
          >
            © 2027 PROSTITUTÉE
          </p>

          <div className="flex gap-12">

            {legal.map((item) => (

              <Link
                key={item}
                href="#"
                className="
                text-neutral-500
                hover:text-black
                transition-colors
                "
              >
                {item}
              </Link>

            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}
