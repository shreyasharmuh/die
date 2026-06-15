import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = req.nextUrl.pathname;

  const isAuthPage = path.startsWith("/auth");
  const isAccountPage = path.startsWith("/account");

  // 🔒 NOT LOGGED IN → BLOCK ACCOUNT
  if (isAccountPage && !user) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // 🔁 LOGGED IN → BLOCK AUTH PAGES → GO HOME
  if (isAuthPage && user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/account/:path*", "/auth/:path*"],
};