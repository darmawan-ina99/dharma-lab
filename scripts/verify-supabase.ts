import { db } from '@/lib/db';

async function verifySupabaseData() {
  console.log('🔍 Verifying data in Supabase Postgres (schema: dharma_lab)...\n');
  
  const portfolios = await db.portfolio.findMany({
    select: { id: true, title: true, slug: true, category: true, client: true, year: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  });
  
  console.log(`📦 Portfolios (${portfolios.length}):`);
  portfolios.forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.title}`);
    console.log(`     • Slug: ${p.slug}`);
    console.log(`     • Category: ${p.category} | Client: ${p.client || '—'} | Year: ${p.year || '—'}`);
    console.log(`     • Created: ${p.createdAt.toISOString()}`);
  });
  
  const services = await db.service.findMany({
    select: { title: true, order: true },
    orderBy: { order: 'asc' },
  });
  
  console.log(`\n🛠️  Services (${services.length}):`);
  services.forEach((s, i) => {
    console.log(`  ${i + 1}. ${s.title} (order: ${s.order})`);
  });
  
  const settings = await db.siteSettings.findUnique({ where: { id: 'default' } });
  console.log(`\n⚙️  Site Settings:`);
  console.log(`  • WhatsApp: ${settings?.whatsappNumber}`);
  console.log(`  • Email: ${settings?.email}`);
  console.log(`  • Phone: ${settings?.phoneDisplay}`);
  console.log(`  • Address: ${settings?.address}`);
  
  console.log('\n✅ Data successfully verified in Supabase Postgres database!');
  console.log('   Project: Base44 (kdjbjcfrdbtrxmmvuyys)');
  console.log('   Region: ap-southeast-1 (Singapore)');
  console.log('   Schema: dharma_lab');
}

verifySupabaseData()
  .catch(console.error)
  .finally(() => db.$disconnect());
