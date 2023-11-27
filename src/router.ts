import { Elysia } from "elysia";
import { MessagesController } from "./controllers/messages-controller";
import { ThreadsController } from "./controllers/threads-controller";
import { getFormData } from "./utils/get-formdata";
import { html } from "@elysiajs/html";
import { PagesController } from "./controllers/pages-controller";

const threadsController = new ThreadsController();
const messagesController = new MessagesController();
const pagesController = new PagesController();

export function handleRoutes(app: Elysia) {
  app.use(html());
  
  app.get("/", () => pagesController.home());
  app.get("/thread/:id", async (req) => pagesController.thread(parseInt(req.params.id)));
  
  app.get("/thread/list", async () => await threadsController.getAll());
  app.get("/message/list/:id", async (req) => await messagesController.getAll(parseInt(req.params.id)));
  app.get("/message/count/:id", async (req) => await threadsController.messagesCount(parseInt(req.params.id)));
  
  app.post("/thread", async (req) => await threadsController.add(getFormData(req.body)));
  app.post("/message/:id", async (req) => await messagesController.add(parseInt(req.params.id), getFormData(req.body)));

  return app;
}