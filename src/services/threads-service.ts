import Database from "bun:sqlite";
import { Thread } from "../models/thread";

export class ThreadsService {
  db: Database;

  constructor(database: string) {
    this.db = new Database(database, {
      create: true
    });

    this.db.run(`
      create table if not exists threads (
        id integer primary key,
        name text
      )
    `);
  }

  getAll(): Thread[] {
    const query = this.db.query(`select id, name from threads`);
    return query.all() as Thread[];
  }

  get(id: number): Thread {
    const query = this.db.query(`select id, name from threads where id = $id`);
    return query.get({ $id: id }) as Thread;
  }

  insert(name: string) {
    const sql = 'insert into threads (name) values (?)';
    this.db.run(sql, [name]);
  }

  countMessages(id: number): number {
    const query = this.db.query(`select count(*) as count from messages where threadId = $id`);
    const result = query.get({ $id: id }) as { count: number };
    return result.count;
  }

} 