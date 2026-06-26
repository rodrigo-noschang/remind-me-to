import Elysia from "elysia";

export const userRoutes = new Elysia().get("/users", () => "User routes");
