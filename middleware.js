import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const cookie = req.cookies.get("admin-auth");

  if (url.pathname.startsWith("/admin/dashboard")) {
    if (cookie?.value !== "true") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}
