import Database from "bun:sqlite";
import { Message } from "../models/message";
import { supabase } from "../db/supabase";

export class MessagesService {
  async getAll(threadId: number): Promise<Message[]> {
    const query = await supabase
      .from('messages')
      .select('id, title, content, timestamp')
      .filter('threadId', 'eq', threadId)
      .then(x => x.data as Message[]);
    return query;
  }

  async insert(threadId: number, title: string, content: string) {
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`

    await supabase.from('messages').insert({
      threadId,
      title: Bun.escapeHTML(title),
      content: Bun.escapeHTML(content),
      timestamp
    });
  }
} 