import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { supabaseProject } from "@/lib/supabase";

export async function GET() {
  try {
    // Test database connection
    const portfolioCount = await db.portfolio.count();
    const serviceCount = await db.service.count();
    const settings = await db.siteSettings.findUnique({ where: { id: "default" } });

    return NextResponse.json({
      status: "connected",
      supabase: supabaseProject,
      database: {
        provider: "postgresql",
        schema: "dharma_lab",
        pooler: "aws-0-ap-southeast-1.pooler.supabase.com",
        port: 6543,
        mode: "transaction",
      },
      stats: {
        portfolios: portfolioCount,
        services: serviceCount,
        hasSettings: !!settings,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        error: error.message,
        supabase: supabaseProject,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
