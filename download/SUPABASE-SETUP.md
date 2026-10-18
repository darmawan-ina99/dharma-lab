# Dharma Lab - Supabase Backend Configuration

## Connection Details

| Property | Value |
|----------|-------|
| **Project Name** | Base44 |
| **Project Ref** | `kdjbjcfrdbtrxmmvuyys` |
| **Project URL** | https://kdjbjcfrdbtrxmmvuyys.supabase.co |
| **Region** | ap-southeast-1 (Singapore) |
| **Status** | ACTIVE_HEALTHY |
| **Postgres Version** | 17.11.0.003 |

## Database Configuration

- **Provider**: PostgreSQL (via Prisma ORM)
- **Schema**: `dharma_lab` (separate from `public` to avoid conflicts with other projects)
- **Connection Pooler**: aws-0-ap-southeast-1.pooler.supabase.com
- **Pooler Mode**: Transaction (port 6543)
- **Direct Connection**: Port 5432 (for migrations)

## Environment Variables (.env)

```bash
# Database (Prisma) - URL-encoded password
DATABASE_URL="postgresql://postgres.kdjbjcfrdbtrxmmvuyys:DharmaLab2026%21Secure@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres.kdjbjcfrdbtrxmmvuyys:DharmaLab2026%21Secure@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"

# Supabase API
NEXT_PUBLIC_SUPABASE_URL="https://kdjbjcfrdbtrxmmvuyys.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="<anon JWT>"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="sb_publishable_..."
SUPABASE_SERVICE_ROLE_KEY="<service_role JWT>"
SUPABASE_SECRET_KEY="sb_secret_..."
SUPABASE_DB_PASSWORD="DharmaLab2026!Secure"
```

## Database Schema (dharma_lab schema)

### Tables

1. **Portfolio** - Project showcase items
   - id (cuid, PK)
   - title, slug (unique), category
   - shortDesc, content (Markdown)
   - imageUrl, client, year
   - technologies (JSON string), liveUrl
   - featured (boolean)
   - createdAt, updatedAt

2. **Service** - Service offerings
   - id (cuid, PK)
   - title, slug (unique)
   - description, icon (Lucide name), color (Tailwind class)
   - order
   - createdAt, updatedAt

3. **SiteSettings** - Single-row settings
   - id (default: "default")
   - whatsappNumber, email, phoneDisplay, address
   - updatedAt

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/portfolio` | GET | List all portfolios (supports ?category=&featured=) |
| `/api/portfolio` | POST | Create new portfolio (admin only) |
| `/api/portfolio/[id]` | GET | Get single portfolio by ID or slug |
| `/api/portfolio/[id]` | PUT | Update portfolio (admin only) |
| `/api/portfolio/[id]` | DELETE | Delete portfolio (admin only) |
| `/api/services` | GET | List all services |
| `/api/services` | POST | Create service (admin only) |
| `/api/settings` | GET | Get site settings |
| `/api/settings` | PUT | Update settings (admin only) |
| `/api/admin/login` | POST | Admin login (password: 900021) |
| `/api/admin/logout` | POST | Admin logout |
| `/api/admin/session` | GET | Check session status |
| `/api/supabase-status` | GET | Supabase connection status |

## Files Created/Modified

### Modified
- `prisma/schema.prisma` - Changed provider to postgresql, added schemas property, added @@schema("dharma_lab") to each model
- `.env` - Updated with Supabase connection strings and API keys

### Created
- `src/lib/supabase.ts` - Supabase client utilities (supabaseAdmin, supabaseServer)
- `src/app/api/supabase-status/route.ts` - Connection status endpoint
- `scripts/verify-supabase.ts` - Data verification script

## How to Verify Connection

```bash
# Check connection status via API
curl http://localhost:3000/api/supabase-status

# Or run the verification script
unset DATABASE_URL DIRECT_URL  # Important: clear shell env overrides
bun run scripts/verify-supabase.ts
```

## Notes

1. **Schema isolation**: Tables are in `dharma_lab` schema to avoid conflicts with other projects on the same Supabase instance (e.g., `dharma_vocasi_admins` in public schema).

2. **Password URL-encoding**: The database password `DharmaLab2026!Secure` contains `!` which must be URL-encoded as `%21` in connection strings.

3. **Shell env override**: If the dev server was started with the old SQLite DATABASE_URL, you must unset it before running scripts:
   ```bash
   unset DATABASE_URL
   unset DIRECT_URL
   ```

4. **PostgREST limitation**: Supabase REST API (PostgREST) only exposes tables in the `public` schema by default. Our tables in `dharma_lab` schema are NOT accessible via the REST API. Use Prisma or direct Postgres connection instead.

5. **Connection pooler**: Using transaction mode pooler (port 6543) for app connections with `?pgbouncer=true&connection_limit=1` parameter, and direct connection (port 5432) for migrations via `directUrl`.

## Security Notes

- The `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security (RLS). Only use on the server.
- The admin password (`900021`) is hardcoded in `src/lib/auth.ts` for demo. In production, use proper hashing and store in environment variables.
- Database password was reset via Supabase Management API using the personal access token.
