import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    let settings = await db.siteSettings.findUnique({ where: { id: "default" } });
    if (!settings) {
      settings = await db.siteSettings.create({ data: { id: "default" } });
    }
    return NextResponse.json({ settings });
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  // Reuse auth check
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [k, ...v] = c.split("=");
      return [k, v.join("=")];
    })
  );
  const { getSessionCookieName, isValidSession } = await import("@/lib/auth");
  const token = cookies[getSessionCookieName()];
  if (!isValidSession(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { whatsappNumber, email, phoneDisplay, address } = body;
    const settings = await db.siteSettings.upsert({
      where: { id: "default" },
      update: { whatsappNumber, email, phoneDisplay, address },
      create: { id: "default", whatsappNumber, email, phoneDisplay, address },
    });
    return NextResponse.json({ settings });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
