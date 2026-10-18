import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { supabaseProject, isSupabaseConfigured } from "@/lib/supabase";

export async function GET() {
  try {
    // Check if Supabase env vars are configured
    const configured = isSupabaseConfigured();

    if (!configured) {
      return NextResponse.json(
        {
          status: "misconfigured",
          error:
            "Supabase environment variables are not set. Please configure NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and NEXT_PUBLIC_SUPABASE_ANON_KEY in your deployment environment.",
          supabase: supabaseProject,
          envCheck: {
            NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
            SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
            NEXT_PUBLIC_SUPABASE_ANON_KEY:
              !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            DATABASE_URL: !!process.env.DATABASE_URL,
            DIRECT_URL: !!process.env.DIRECT_URL,
          },
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }

    // Test database connection
    const portfolioCount = await db.portfolio.count();
    const serviceCount = await db.service.count();
    const settings = await db.siteSettings.findUnique({
      where: { id: "default" },
    });

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
        envCheck: {
          NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
          NEXT_PUBLIC_SUPABASE_ANON_KEY:
            !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          DATABASE_URL: !!process.env.DATABASE_URL,
          DIRECT_URL: !!process.env.DIRECT_URL,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
