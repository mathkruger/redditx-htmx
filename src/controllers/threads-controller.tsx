import * as elements from "typed-html";
import { Thread } from "../models/thread";
import { ThreadsService } from "../services/threads-service";
import { ThreadList } from "../templates/components/thread/list";
import { ThreadDetail } from "../templates/components/thread/detail";
import { Base } from "../templates/_base";
import { ThreadPage as ThreadPage } from "../templates/thread";

export class ThreadsController {
  private service: ThreadsService;

  constructor() {
    this.service = new ThreadsService();
  }

  async getAll() {
    const values: Thread[] = await this.service.getAll();
    return <ThreadList items={values}/>;
  }

  async add(form: FormData) {
    const name = form.get("name")?.toString();

    if (name) {
      await this.service.insert(name);
    }

    return await this.getAll();
  }

  async messagesCount(id: number) {
    return await this.service.countMessages(id);
  }
}
