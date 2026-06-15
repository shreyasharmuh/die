"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AccountView() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (!mounted) return;

      if (error || !data.user) {
        router.replace("/auth/login");
        return;
      }

      setUser(data.user);
      setLoading(false);
    };

    getUser();

    return () => {
      mounted = false;
    };
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-60 animate-pulse">
          loading
        </p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center space-y-10 border border-white/10 p-10">

        <div className="space-y-3">
          <h1 className="text-sm tracking-[0.45em] uppercase opacity-80">
            account
          </h1>

          <p className="text-[10px] tracking-[0.35em] opacity-50">
            {user.email}
          </p>
        </div>

        <div className="text-[10px] tracking-[0.3em] opacity-40 uppercase space-y-1">
          <p>id: {user.id}</p>
        </div>

        <button
          onClick={logout}
          className="text-[10px] tracking-[0.45em] uppercase border border-white/20 px-6 py-3
                     hover:bg-white hover:text-black transition"
        >
          logout
        </button>

      </div>
    </div>
  );
}