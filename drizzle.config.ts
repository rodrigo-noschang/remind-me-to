import { defineConfig } from "drizzle-kit";

function expandEnvReferences(value: string) {
	return value.replace(/\$\{?([A-Z0-9_]+)\}?/gi, (match, name) => {
		return process.env[name] ?? match;
	});
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error("Missing required environment variable: DATABASE_URL");
}

export default defineConfig({
	out: "./src/infra/migrations",
	schema: "./src/schemas/database.ts",
	dialect: "postgresql",
	migrations: {
		schema: "public",
		table: "migrations",
	},
	dbCredentials: {
		url: expandEnvReferences(databaseUrl),
	},
});
