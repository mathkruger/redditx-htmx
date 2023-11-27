import { Elysia } from "elysia";
import { getFormData } from "./utils/get-formdata";
import { MessagesController } from "./controllers/messages-controller";
import { PagesController } from "./controllers/pages-controller";
import { ThreadsController } from "./controllers/threads-controller";

export const routes = new Elysia()
  .get("/", () => PagesController.home())
  .get("/thread/:id", async ({ params }) => PagesController.thread(parseInt(params.id)))
  .get("/thread/list", async () => await ThreadsController.getAll())
  .get("/message/list/:id", async ({ params, query }) => await MessagesController.getAll(parseInt(params.id), <"newer" | "older">query["order"]))
  .get("/message/count/:id", async ({ params }) => await ThreadsController.messagesCount(parseInt(params.id)))
  .post("/thread", async ({ body }) => await ThreadsController.add(getFormData(body)))
  .post("/message/:id", async ({ params, body }) => await MessagesController.add(parseInt(params.id), getFormData(body)));