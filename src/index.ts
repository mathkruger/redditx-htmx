import "@kitajs/html/register";

import { Elysia } from "elysia";
import { routes } from "./router";
import { html } from "@elysiajs/html";

const app = new Elysia().use(html()).use(routes);

app.listen(3000);
