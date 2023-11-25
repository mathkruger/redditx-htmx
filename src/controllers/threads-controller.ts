import { Thread } from "../models/thread";
import { ThreadsService } from "../services/threads-service";
import { renderTemplate } from "../utils/render-template";

export class ThreadsController {
  service: ThreadsService;

  constructor() {
    this.service = new ThreadsService("./src/db/database.sqlite");
  }

  async getAll() {
    const values: Thread[] = this.service.getAll();
    const promisses = values.map((x) =>
      renderTemplate(
        "components/thread/item",
        { name: "id", value: x.id },
        { name: "name", value: x.name },
        { name: "count", value: this.service.countMessages(x.id) }
      )
    );

    const itemsHtml: string[] = await Promise.all(promisses);

    const template = await renderTemplate(
      "components/thread/list",
      { name: "items", value: itemsHtml.join("\n") }
    );

    return new Response(template);
  }

  async get(id: number) {
    const thread = this.service.get(id);
    const template = await renderTemplate(
      "components/thread/detail",
      { name: "name", value: thread.name }
    );

    return new Response(template);
  }

  async add(form: FormData) {
    const name = form.get("name")?.toString();

    if (name) {
      this.service.insert(name);
    }

    return await this.getAll();
  }
}
