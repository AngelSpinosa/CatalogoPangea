// src/app/api/login/route.js
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request) {
  const { password } = await request.json();

  if (password === process.env.ADMIN_PASSWORD) {
    // crear cookie
    const cookie = serialize("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hora
      path: "/",
    });

    const response = NextResponse.json({ success: true });
    response.headers.set("Set-Cookie", cookie);

    return response;
  } else {
    return NextResponse.json(
      { success: false, message: "Contraseña incorrecta" },
      { status: 401 }
    );
  }
}
