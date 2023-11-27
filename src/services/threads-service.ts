import { Thread } from "../models/thread";
import { supabase } from "../db/supabase";

export class ThreadsService {
  static async getAll(): Promise<Thread[]> {
    const query = await supabase.from('threads').select('id, name').then(x => x.data as Thread[]);
    return query;
  }

  static async get(id: number): Promise<Thread> {
    const query = await supabase
      .from('threads')
      .select('id, name')
      .filter('id', 'eq', id)
      .single()
      .then(x => x.data as Thread)
    return query;
  }

  static async insert(name: string) {
    await supabase
      .from('threads')
      .insert({ name: Bun.escapeHTML(name) });
  }

  static async countMessages(id: number): Promise<number> {
    const query = await supabase
      .from('messages')
      .select('id', { count: 'exact' })
      .filter('threadId', 'eq', id)
      .then(x => x.count);
    return query || 0;
  }

} 