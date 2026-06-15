"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

    if (!error) router.push("/account");
  }

  return (
    <div className="bg-white shadow-2xl flex overflow-hidden">

      {/* LEFT SIDE */}
      <form className="w-[60%] p-12 space-y-10" onSubmit={submit}>

        {/* TYPOGRAPHY BLOCK */}
        <div className="space-y-6">

          <h1 className="text-[32px] leading-[1.05] font-semibold uppercase tracking-tight">
            WELCOME BACK <br />
            ENTER THE SPACE
          </h1>

          <p className="text-[10px] tracking-[0.45em] uppercase opacity-60">
            authentication / secure access system
          </p>

        </div>

        {/* INPUTS */}
        <div className="space-y-6">

          <input
            placeholder="[ email ]"
            className="w-full border-b border-black py-3 text-sm outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="[ password ]"
            className="w-full border-b border-black py-3 text-sm outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        {/* BUTTON */}
        <button className="w-full border border-black py-3 text-xs tracking-[0.45em] uppercase hover:bg-black hover:text-white transition">
          [ login ]
        </button>

        {/* LINKS */}
        <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] opacity-60 pt-6">

          <a href="/auth/forgot-password">forgot password</a>
          <a href="/auth/signup">create account</a>

        </div>

      </form>

      {/* RIGHT SIDE VISUAL STRIP */}
      <div className="w-[40%] relative">
        <img
          src="/images/portrait.jpg"
          className="h-full w-full object-cover grayscale blur-[0.3px]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

    </div>
  );
}