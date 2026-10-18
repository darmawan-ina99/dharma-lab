import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { checkAuth } from "@/lib/middleware";

// GET - List all portfolios (with optional category filter)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");

    const where: any = {};
    if (category && category !== "all") {
      where.category = category;
    }
    if (featured === "true") {
      where.featured = true;
    }

    const portfolios = await db.portfolio.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    // Parse technologies JSON
    const parsed = portfolios.map((p) => ({
      ...p,
      technologies: JSON.parse(p.technologies || "[]"),
    }));

    return NextResponse.json({ portfolios: parsed });
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolios" },
      { status: 500 }
    );
  }
}

// POST - Create new portfolio (admin only)
export async function POST(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  try {
    const body = await req.json();
    const { title, slug, category, shortDesc, content, imageUrl, client, year, technologies, liveUrl, featured } = body;

    if (!title || !slug || !category || !shortDesc || !content || !imageUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const portfolio = await db.portfolio.create({
      data: {
        title,
        slug,
        category,
        shortDesc,
        content,
        imageUrl,
        client: client || null,
        year: year || null,
        technologies: JSON.stringify(technologies || []),
        liveUrl: liveUrl || null,
        featured: featured || false,
      },
    });

    return NextResponse.json({ portfolio }, { status: 201 });
  } catch (error) {
    console.error("Error creating portfolio:", error);
    return NextResponse.json(
      { error: "Failed to create portfolio" },
      { status: 500 }
    );
  }
}
