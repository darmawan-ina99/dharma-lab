import { NextRequest, NextResponse } from "next/server";
import { getSessionCookieName, isValidSession } from "./auth";

export function checkAuth(req: NextRequest): NextResponse | null {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [k, ...v] = c.split("=");
      return [k, v.join("=")];
    })
  );
  const token = cookies[getSessionCookieName()];
  if (!isValidSession(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
