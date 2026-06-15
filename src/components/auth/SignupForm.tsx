"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

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
      options: { data: { name } },
    });

    if (!error) router.push("/auth/login");
  }

  return (
    <div className="bg-white shadow-2xl flex overflow-hidden">

      {/* LEFT */}
      <form className="w-[60%] p-12 space-y-10" onSubmit={submit}>

        {/* TYPOGRAPHY HEADER */}
        <div className="space-y-6">

          <h1 className="text-[32px] leading-[1.05] font-semibold uppercase tracking-tight">
            JOIN THE COMMUNITY <br />
            CREATE AN ACCOUNT TO START
          </h1>

          <p className="text-[10px] tracking-[0.45em] uppercase opacity-60">
            minimal access system / registration layer
          </p>

        </div>

        {/* INPUTS */}
        <div className="space-y-6">

          <input
            placeholder="[ name ]"
            className="w-full border-b border-black py-3 text-sm outline-none"
            onChange={(e) => setName(e.target.value)}
          />

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
          [ create account ]
        </button>

        {/* SOCIAL LINKS */}
        <div className="text-[10px] tracking-[0.35em] uppercase opacity-60 pt-6 space-y-1">
          <p>instagram</p>
          <p>twitter</p>
          <p>contact</p>
        </div>

      </form>

      {/* RIGHT VISUAL */}
      <div className="w-[40%] relative">
        <img
          src="/images/portrait.jpg"
          className="h-full w-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

    </div>
  );
}