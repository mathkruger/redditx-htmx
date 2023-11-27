import { Elysia } from "elysia";
import { MessagesController } from "./controllers/messages-controller";
import { ThreadsController } from "./controllers/threads-controller";
import { getFormData } from "./utils/get-formdata";
import { Base } from "./templates/_base";
import { Index } from "./templates/index";
import { Thread } from "./templates/thread";
import * as elements from "typed-html";
import { html } from "@elysiajs/html";

const threadsController = new ThreadsController();
const messagesController = new MessagesController();

export function handleRoutes(app: Elysia) {
  app.use(html());
  
  app.get("/", async () => <Base>
    <Index />
  </Base>);
  app.get("/thread", async (req) => <Base>
    <Thread id={parseInt(req.query['id'] || "0")} />
  </Base>);
  app.get("/thread-list", async () => await threadsController.getAll());
  app.get("/thread-detail", async (req) => await threadsController.get(parseInt(req.query["id"] || "0")));
  app.get("/message-list", async (req) => await messagesController.getAll(parseInt(req.query["id"] || "0")));
  app.get("/messages-count", async (req) => await threadsController.messagesCount(parseInt(req.query["id"] || "0")));
  
  app.post("/thread", async (req) => {
    const formData = getFormData(req.body);
    return await threadsController.add(formData);
  });
  app.post("/message", async (req) => {
    const formData = getFormData(req.body);
    return await messagesController.add(parseInt(req.query["id"] || "0"), formData);
  });

  return app;
}