import * as elements from "typed-html";
import { Message } from "../models/message";
import { MessagesService } from "../services/messages-service";
import { MessageList } from "../templates/components/message/list";

export class MessagesController {
  static async getAll(threadId: number, order?: "older" | "newer") {
    const values: Message[] = await MessagesService.getAll(threadId);

    return <MessageList items={values} order={order} threadId={threadId} />;
  }

  static async add(threadId: number, form: FormData) {
    const title = form.get('title')?.toString();
    const content = form.get('content')?.toString();
    
    if (title && content) {
      await MessagesService.insert(threadId, title, content);
    }

    return await this.getAll(threadId, "newer");
  }

}