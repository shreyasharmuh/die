"use client";

import Image from "next/image";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

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
    <div className="w-full min-h-[calc(100vh-80px)] flex bg-[#f7f5f2]">

      {/* IMAGE */}

      <div className="hidden lg:block w-[45%] relative">

        <Image
          src="/images/login.jpg"
          alt="Editorial"
          fill
          priority
          className="object-cover object-center"
        />

      </div>

      {/* FORM */}

      <div className="w-full lg:w-[55%] flex items-center justify-center px-10 md:px-20">

        <form
          onSubmit={submit}
          className="w-full max-w-xl space-y-10"
        >

          <div className="space-y-6">

            <p className="uppercase tracking-[0.35em] text-[10px] text-black/40">

              membership portal

            </p>

            <h1
              className="
              text-6xl

              md:text-7xl

              lg:text-[6.5rem]

              font-extralight

              leading-[0.9]

              tracking-[-0.08em]
            "
            >

              Welcome

              <br />

              Back

            </h1>

            <p className="text-lg leading-9 text-black/50 max-w-lg">

              Access your private luxury experience,
              collections and editorial stories from the house.

            </p>

          </div>

          <div className="space-y-8">

            <div>

              <label className="uppercase text-[10px] tracking-[0.35em]">

                Email

              </label>

              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                w-full

                h-16

                mt-3

                px-6

                border

                border-black/10

                bg-transparent

                outline-none

                focus:border-black
              "
              />

            </div>

            <div>

              <label className="uppercase text-[10px] tracking-[0.35em]">

                Password

              </label>

              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="
                w-full

                h-16

                mt-3

                px-6

                border

                border-black/10

                bg-transparent

                outline-none

                focus:border-black
              "
              />

            </div>

          </div>

          <div className="flex justify-between items-center text-xs text-black/50">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember me

            </label>

            <Link href="/auth/forgot-password">

              Forgot Password?

            </Link>

          </div>

          <button
            className="
            w-full

            h-16

            bg-black

            text-white

            uppercase

            text-xs

            tracking-[0.35em]

            hover:opacity-90

            transition
          "
          >

            Log In →

          </button>

          <p className="text-sm text-black/50">

            New here?{" "}

            <Link
              href="/auth/signup"
              className="underline"
            >

              Create an account

            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}