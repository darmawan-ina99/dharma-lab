import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { checkAuth } from "@/lib/middleware";

// GET - Single portfolio by ID or slug
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    let portfolio = await db.portfolio.findUnique({ where: { id } });
    
    if (!portfolio) {
      portfolio = await db.portfolio.findUnique({ where: { slug: id } });
    }

    if (!portfolio) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      portfolio: {
        ...portfolio,
        technologies: JSON.parse(portfolio.technologies || "[]"),
      },
    });
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// PUT - Update portfolio
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = checkAuth(req);
  if (authError) return authError;

  try {
    const { id } = await params;
    const body = await req.json();
    const { title, slug, category, shortDesc, content, imageUrl, client, year, technologies, liveUrl, featured } = body;

    const existing = await db.portfolio.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const updated = await db.portfolio.update({
      where: { id },
      data: {
        title: title ?? existing.title,
        slug: slug ?? existing.slug,
        category: category ?? existing.category,
        shortDesc: shortDesc ?? existing.shortDesc,
        content: content ?? existing.content,
        imageUrl: imageUrl ?? existing.imageUrl,
        client: client ?? existing.client,
        year: year ?? existing.year,
        technologies: technologies ? JSON.stringify(technologies) : existing.technologies,
        liveUrl: liveUrl ?? existing.liveUrl,
        featured: featured ?? existing.featured,
      },
    });

    return NextResponse.json({ portfolio: updated });
  } catch (error) {
    console.error("Error updating portfolio:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

// DELETE - Delete portfolio
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = checkAuth(req);
  if (authError) return authError;

  try {
    const { id } = await params;
    await db.portfolio.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting portfolio:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
