import { Elysia } from "elysia";
import { routes } from "./routes";
import { parsedEnv } from "./env";

const { APP_PORT } = parsedEnv;

const app = new Elysia().use(routes).listen(APP_PORT);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
