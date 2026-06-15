"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Hero() {
  const { user, loading } = useAuth();

  return (
    <section className="relative h-screen">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dnrvcl5s7/video/upload/v1781410260/hero1_yf8xji.mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">

        {/* MAIN TITLE */}
        <h1 className="hero-title">DIE</h1>

        {/* SUBTEXT (UNCHANGED LOGIC + OPTIONAL PERSONALIZATION) */}
        <p className="uppercase tracking-[0.5em]">
          {loading
            ? "loading"
            : user
            ? "WELCOME BACK"
            : "A NEW LANGUAGE OF SILENCE"}
        </p>

        {/* BUTTON */}
        <button className="mt-10 border border-white px-10 py-4 tracking-[0.3em] text-sm hover:bg-white hover:text-black transition-all duration-500">
          SHOP COLLECTION
        </button>

        {/* OPTIONAL MICRO USER INDICATOR (VERY SUBTLE) */}
        {user && (
          <p className="mt-6 text-[10px] tracking-[0.4em] opacity-40 uppercase">
            {user.email}
          </p>
        )}

      </div>
    </section>
  );
}