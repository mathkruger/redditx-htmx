import { Elysia } from "elysia";
import { getFormData } from "./utils/get-formdata";
import { MessagesController } from "./controllers/messages-controller";
import { PagesController } from "./controllers/pages-controller";
import { ThreadsController } from "./controllers/threads-controller";

const threadsController = new ThreadsController();
const messagesController = new MessagesController();
const pagesController = new PagesController();

export const routes = new Elysia()
  .get("/", () => pagesController.home())
  .get("/thread/:id", async ({ params }) => pagesController.thread(parseInt(params.id)))
  
  .get("/thread/list", async () => await threadsController.getAll())
  .get("/message/list/:id", async ({ params, query }) => await messagesController.getAll(parseInt(params.id), <"newer" | "older">query["order"]))
  .get("/message/count/:id", async ({ params }) => await threadsController.messagesCount(parseInt(params.id)))
  
  .post("/thread", async ({ body }) => await threadsController.add(getFormData(body)))
  .post("/message/:id", async ({ params, body }) => await messagesController.add(parseInt(params.id), getFormData(body)));