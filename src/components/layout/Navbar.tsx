"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Search,
  User,
  Menu,
} from "lucide-react";
import { useCart } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const { openCart, items } = useCart();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let active = true;

    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setUser(data.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!active) return;
      setUser(session?.user ?? null);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-light tracking-[0.5em] text-white/90 hover:text-white transition"
        >
          DIE
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.3em] text-white/70">
          
          <Link className="hover:text-white transition" href="/shop">
            SHOP
          </Link>

          <Link className="hover:text-white transition" href="/collections">
            COLLECTIONS
          </Link>

          <Link className="hover:text-white transition" href="/prostituee">
            PROSTITUÉE
          </Link>

          {/* FIXED: ATHÉISTE */}
          <Link className="hover:text-white transition" href="/atheiste">
            ATHÉISTE
          </Link>

          <Link className="hover:text-white transition" href="/collaborations">
            COLLABORATIONS
          </Link>

          <Link className="hover:text-white transition" href="/about">
            ABOUT
          </Link>
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-5 text-white/80">

          <Search size={18} className="cursor-pointer hover:text-white transition" />

          <Link href={user ? "/account" : "/auth/login"}>
            <User size={18} className="cursor-pointer hover:text-white transition" />
          </Link>

          <button onClick={openCart} className="relative cursor-pointer">
            <ShoppingBag size={18} className="hover:text-white transition" />

            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-white text-black px-1.5 py-0.5 rounded-full leading-none">
                {items.length}
              </span>
            )}
          </button>

          <Menu size={18} className="md:hidden cursor-pointer" />
        </div>

      </div>
    </header>
  );
}