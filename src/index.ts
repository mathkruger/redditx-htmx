import { Elysia } from "elysia";
import { handleRoutes } from "./router";

const app = handleRoutes(new Elysia());
app.listen(3000);


