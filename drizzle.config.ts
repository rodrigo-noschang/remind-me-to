import { defineConfig } from "drizzle-kit";
import { parsedEnv } from "./src/env";

function expandEnvReferences(value: string) {
	return value.replace(/\$\{?([A-Z0-9_]+)\}?/gi, (match, name) => {
		return process.env[name] ?? match;
	});
}

const { DATABASE_URL } = parsedEnv;

export default defineConfig({
	out: "./src/infra/migrations",
	schema: "./src/schemas/database.ts",
	dialect: "postgresql",
	migrations: {
		schema: "public",
		table: "migrations",
	},
	dbCredentials: {
		url: expandEnvReferences(DATABASE_URL),
	},
});
