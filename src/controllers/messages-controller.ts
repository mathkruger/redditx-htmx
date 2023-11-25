
import { Message } from "../models/message";
import { MessagesService } from "../services/messages-service";
import { renderTemplate } from "../utils/render-template";

export class MessagesController {
  service: MessagesService;

  constructor() {
    this.service = new MessagesService();
  }

  async getAll(threadId: number) {
    const values: Message[] = await this.service.getAll(threadId);

    const promisses = values.map((x) =>
      renderTemplate(
        "components/message/item",
        { name: "title", value: x.title },
        { name: "content", value: x.content },
        { name: "timestamp", value: x.timestamp },
      )
    );

    const itemsHtml: string[] = await Promise.all(promisses);

    const template = await renderTemplate(
      "components/message/list",
      { name: "count", value: itemsHtml.length },
      { name: "items", value: itemsHtml.join("\n") },
    );

    return new Response(template);
  }

  async add(threadId: number, form: FormData) {
    const title = form.get('title')?.toString();
    const content = form.get('content')?.toString();
    
    if (title && content) {
      await this.service.insert(threadId, title, content);
    }

    return await this.getAll(threadId);
  }

}