import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, getSessionToken, getSessionCookieName } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ error: "Password wajib diisi" }, { status: 400 });
    }

    if (!verifyPassword(password)) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    const token = getSessionToken();
    const res = NextResponse.json({ success: true });
    res.cookies.set(getSessionCookieName(), token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login gagal" }, { status: 500 });
  }
}
