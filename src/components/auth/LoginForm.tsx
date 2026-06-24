"use client";

import { useState } from "react";

import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { Eye } from "lucide-react";

import { supabase } from "@/lib/supabase";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  async function submit(e: React.FormEvent) {

    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({

      email,

      password,

    });

    if (!error) {

      router.push("/account");

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

            font-light

            tracking-[0.4em]
          "
          >

            DIE

          </h1>

        </div>

        <div
          className="
          text-[10px]

          uppercase

          tracking-[0.45em]

          space-y-5

          text-black/60
        "
        >

          <Link href="/shop">

            shop

          </Link>

          <Link href="/collaborations">

            collaborations

          </Link>

          <Link href="/prostituee">

            prostituée

          </Link>

          <Link href="/atheiste">

            athéiste

          </Link>

          <Link href="/about">

            about

          </Link>

        </div>

        <div
          className="
          text-[10px]

          uppercase

          tracking-[0.45em]

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

          src="/images/login.jpg"

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

        px-10

        md:px-20

        py-14

        relative
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

            private access

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

          mb-10
        "
        >

          Welcome

          <br />

          Back

        </h1>

        <p
          className="
          text-black/50

          max-w-lg

          leading-8

          mb-20
        "
        >

          Access your private luxury experience,

          collections and editorial stories from

          the house.

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

                placeholder="Enter your password"

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

          {/* EXTRA */}

          <div
            className="
            flex

            items-center

            justify-between

            text-sm

            text-black/60
          "
          >

            <label className="flex items-center gap-3 cursor-pointer">

              <input

                type="checkbox"

                checked={remember}

                onChange={(e) =>

                  setRemember(e.target.checked)
                }

              />

              Remember me

            </label>

            <Link href="/auth/forgot-password">

              Forgot password?

            </Link>

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

            log in →

          </button>

          <div
            className="
            flex

            items-center

            gap-2

            text-sm

            text-black/50
          "
          >

            <span>

              New here?

            </span>

            <Link
              href="/auth/signup"
              className="underline"
            >

              Create an account

            </Link>

          </div>

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

          <p>private access</p>

          <p>editorial stories</p>

          <p>exclusive benefits</p>

          <p>member archive</p>

        </div>

      </section>

    </div>

  );

}