import { Message } from "../models/message";
import { FileService } from "../services/file-service";
import { MessagesService } from "../services/messages-service";
import { MessageList } from "../templates/components/message/list";

export class MessagesController {
  static async getAll(threadId: number, order?: "older" | "newer") {
    const values: Message[] = await MessagesService.getAll(threadId);

    const valuesWithImageUrl = values.map(x => {
      if (x.imageUrl) {
        const url = FileService.getUrl(x.imageUrl);
        x.imageUrl = url;
      }

      return x;
    });

    return <MessageList items={valuesWithImageUrl} order={order} threadId={threadId} />;
  }

  static async add(threadId: number, form: FormData) {
    const title = form.get('title')?.toString();
    const content = form.get('content')?.toString();
    const image = form.get("image") as File | undefined;
    
    if (title && content) {
      await MessagesService.insert(threadId, title, content, image);
    }

    return await this.getAll(threadId, "newer");
  }

}