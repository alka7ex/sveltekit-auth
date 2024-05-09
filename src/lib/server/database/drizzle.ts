import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/neon-serverless';

import pg from 'pg';
const pool = new pg.Pool({
	connectionString: DATABASE_URL
});

await pool.connect();
const db = drizzle(pool);

export default db;


// import { drizzle } from "drizzle-orm/libsql";
// import { createClient } from "@libsql/client";
// import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from '$env/static/private';


// const turso = createClient({
//   url: TURSO_DATABASE_URL!,
//   authToken: TURSO_AUTH_TOKEN,
// });

// export const db = drizzle(turso);
