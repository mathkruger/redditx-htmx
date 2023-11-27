import * as elements from "typed-html";
import { Message } from "../models/message";
import { MessagesService } from "../services/messages-service";
import { MessageList } from "../templates/components/message/list";

export class MessagesController {
  private service: MessagesService;

  constructor() {
    this.service = new MessagesService();
  }

  async getAll(threadId: number) {
    const values: Message[] = await this.service.getAll(threadId);

    return <MessageList items={values} />;
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