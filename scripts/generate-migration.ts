const migrationName = prompt("Name the migration:")
	?.trim()
	.split(" ")
	.join("_");
const validMigrationName = /^[a-zA-Z0-9_-]+$/;

if (!migrationName) {
	console.error("Name of the migration is required.");
	process.exit(1);
}

if (!validMigrationName.test(migrationName)) {
	console.error("Migration name must contain only letters, numbers, _ or -.");
	process.exit(1);
}

const drizzle = Bun.spawn(
	[process.execPath, "x", "drizzle-kit", "generate", `--name=${migrationName}`],
	{
		stdio: ["inherit", "inherit", "inherit"],
	},
);

process.exit(await drizzle.exited);
