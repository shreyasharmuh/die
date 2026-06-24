"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

import Image from "next/image";

import Link from "next/link";

import { Eye } from "lucide-react";

export default function SignupForm() {

  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function submit(e: React.FormEvent) {

    e.preventDefault();

    const { error } = await supabase.auth.signUp({

      email,

      password,

      options: {

        data: {

          name,

        },

      },

    });

    if (!error) {

      router.push("/auth/login");

    }

  }

  return (

    <div className="min-h-screen bg-[#f7f4ef] flex overflow-hidden">

      {/* LEFT SIDEBAR */}

      <aside
        className="
        hidden

        lg:flex

        w-[120px]

        border-r

        border-black/10

        flex-col

        justify-between

        py-12

        px-8
      "
      >

        <div>

          <h1
            className="
            text-5xl

            tracking-[0.4em]

            font-light
          "
          >

            DIE

          </h1>

        </div>

        <div
          className="
          text-[11px]

          uppercase

          tracking-[0.4em]

          space-y-5

          text-black/60
        "
        >

          <Link href="/shop">

            shop

          </Link>

          <Link href="/collections">

            collections

          </Link>

          <Link href="/journal">

            journal

          </Link>

          <Link href="/about">

            about

          </Link>

        </div>

        <div
          className="
          text-[10px]

          uppercase

          tracking-[0.4em]

          text-black/40
        "
        >

          © die 2026

        </div>

      </aside>

      {/* IMAGE */}

      <div
        className="
        hidden

        lg:block

        w-[40%]

        relative
      "
      >

        <Image

          src="/images/signup.jpg"

          alt="Editorial"

          fill

          priority

          className="object-cover"

        />

      </div>

      {/* RIGHT */}

      <section
        className="
        flex-1

        relative

        px-10

        md:px-20

        py-14
      "
      >

        {/* TOP */}

        <div className="flex justify-between mb-14">

          <p
            className="
            text-[10px]

            uppercase

            tracking-[0.5em]

            opacity-50
          "
          >

            join the house

          </p>

          <p
            className="
            text-[10px]

            uppercase

            tracking-[0.5em]

            opacity-50
          "
          >

            membership portal

          </p>

        </div>

        {/* HEADLINE */}

        <h1
          className="
          text-6xl

          md:text-[8rem]

          leading-[0.9]

          tracking-[-0.08em]

          font-extralight

          max-w-4xl

          mb-10
        "
        >

          Become Part

          <br />

          of Our World

        </h1>

        <p
          className="
          max-w-lg

          text-black/50

          leading-8

          mb-20
        "
        >

          Sign up for early access to new collections,

          exclusive releases and stories from the house.

        </p>

        {/* FORM */}

        <form
          onSubmit={submit}
          className="max-w-3xl space-y-10"
        >

          <div>

            <label
              className="
              text-[10px]

              uppercase

              tracking-[0.5em]

              mb-4

              block
            "
            >

              Full Name

            </label>

            <input

              type="text"

              required

              value={name}

              onChange={(e) =>

                setName(e.target.value)
              }

              placeholder="Enter your full name"

              className="
              w-full

              border

              border-black/10

              px-6

              py-5

              outline-none

              bg-transparent
            "

            />

          </div>

          <div>

            <label
              className="
              text-[10px]

              uppercase

              tracking-[0.5em]

              mb-4

              block
            "
            >

              Email

            </label>

            <input

              type="email"

              required

              value={email}

              onChange={(e) =>

                setEmail(e.target.value)
              }

              placeholder="Enter your email"

              className="
              w-full

              border

              border-black/10

              px-6

              py-5

              outline-none

              bg-transparent
            "

            />

          </div>

          <div>

            <label
              className="
              text-[10px]

              uppercase

              tracking-[0.5em]

              mb-4

              block
            "
            >

              Password

            </label>

            <div className="relative">

              <input

                type="password"

                required

                value={password}

                onChange={(e) =>

                  setPassword(e.target.value)
                }

                placeholder="Create a password"

                className="
                w-full

                border

                border-black/10

                px-6

                py-5

                outline-none

                bg-transparent
              "

              />

              <Eye
                size={18}
                className="
                absolute

                right-6

                top-1/2

                -translate-y-1/2

                opacity-40
              "
              />

            </div>

          </div>

          {/* BUTTON */}

          <button
            className="
            w-full

            bg-black

            text-white

            py-6

            uppercase

            tracking-[0.45em]

            text-xs

            hover:opacity-90

            transition
          "
          >

            continue →

          </button>

          <p className="text-xs text-black/40">

            By creating an account you agree to our

            Terms & Conditions and Privacy Policy.

          </p>

        </form>

        {/* BOTTOM */}

        <div
          className="
          mt-24

          flex

          flex-wrap

          gap-10

          text-[10px]

          uppercase

          tracking-[0.5em]

          text-black/40
        "
        >

          <p>early access</p>

          <p>exclusive benefits</p>

          <p>private events</p>

          <p>member stories</p>

        </div>

      </section>

    </div>

  );

}