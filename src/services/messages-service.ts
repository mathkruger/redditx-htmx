import Database from "bun:sqlite";
import { Message } from "../models/message";

export class MessagesService {
  db: Database;

  constructor(database: string) {
    this.db = new Database(database, {
      create: true
    });

    this.db.run(`
      create table if not exists messages (
        id integer primary key,
        threadId integer,
        title text,
        content text,
        timestamp text
      )
    `);
  }

  getAll(threadId: number): Message[] {
    const query = this.db.query(`select id, title, content, timestamp from messages where threadId = $threadId`);
    return query.all({ $threadId: threadId }) as Message[];
  }

  insert(threadId: number, title: string, content: string) {
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
    const sql = 'insert into messages (threadId, title, content, timestamp) values (?, ?, ?, ?)';
    
    this.db.run(sql, [threadId, title, content, timestamp]);
  }

  delete(id: number) {
    const sql = 'delete threads where id = ?';
    return this.db.run(sql, [id]);
  }
} 