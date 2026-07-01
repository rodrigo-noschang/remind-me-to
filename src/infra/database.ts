import { drizzle } from "drizzle-orm/node-postgres";
import { parsedEnv } from "../env";

const { DATABASE_URL } = parsedEnv;

export const db = drizzle({
	connection: {
		connectionString: DATABASE_URL,
	},
});
