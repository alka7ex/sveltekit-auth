// drizzle.config.ts
import type { Config } from 'drizzle-kit';


if (!process.env.NEON_DATABASE_URL) {
	throw new Error('No url');
}
export default {
	schema: './src/lib/server/database/drizzle-schemas.ts',
	out: './src/lib/server/database/migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.NEON_DATABASE_URL
	}
} satisfies Config;



// import type { Config } from "drizzle-kit";
// import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from '$env/static/private';


// export default {
//   schema: './src/lib/server/database/drizzle-schemas.ts',
//   out: './src/lib/server/database/migrations',
//   driver: "turso",
//   dbCredentials: {
//     url: TURSO_DATABASE_URL,
//     authToken: TURSO_AUTH_TOKEN,
//   },
// } satisfies Config;
