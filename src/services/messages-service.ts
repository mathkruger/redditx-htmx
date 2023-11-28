import { Message } from "../models/message";
import { supabase } from "../db/supabase";
import { FileService } from "./file-service";

export class MessagesService {
  static async getAll(threadId: number): Promise<Message[]> {
    const query = await supabase
      .from("messages")
      .select("id, title, content, timestamp, imageUrl")
      .filter("threadId", "eq", threadId)
      .then((x) => x.data as Message[]);
    return query;
  }

  static async insert(threadId: number, title: string, content: string, image?: File) {
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    let file: string | undefined;

    if (image) {
      const result = await FileService.upload(image);
      file = result?.path;
    }

    await supabase.from("messages").insert({
      threadId,
      title: Bun.escapeHTML(title),
      content: Bun.escapeHTML(content),
      timestamp,
      imageUrl: file
    });
  }
}
