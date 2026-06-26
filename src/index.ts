import { Elysia } from "elysia";
import { routes } from "./routes";

const appPort = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000;

const app = new Elysia().use(routes).listen(appPort);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
