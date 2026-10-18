import { NextRequest, NextResponse } from "next/server";
import { getSessionCookieName, isValidSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [k, ...v] = c.split("=");
      return [k, v.join("=")];
    })
  );
  const token = cookies[getSessionCookieName()];
  return NextResponse.json({ authenticated: isValidSession(token) });
}
