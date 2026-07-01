import z, { ZodError } from "zod";

const envData = process.env;

const envSchema = z.object({
	APP_PORT: z
		.string()
		.default("3000")
		.transform((val) => Number(val)),
	POSTGRES_HOST: z.string(),
	POSTGRES_PORT: z.string().transform((val) => Number(val)),
	POSTGRES_USER: z.string(),
	POSTGRES_DB: z.string(),
	POSTGRES_PASSWORD: z.string(),
	DATABASE_URL: z.string(),
});

let parsedEnv = {} as z.infer<typeof envSchema>;

try {
	parsedEnv = envSchema.parse(envData);
} catch (error: any) {
	if (error instanceof ZodError) {
		const invalidVariables = error.issues.map((issue) => issue.path[0]);

		throw Error(
			`Invalid environment variables: ${invalidVariables.join(", ")}`,
		);
	}

	throw error;
}
export { parsedEnv };
