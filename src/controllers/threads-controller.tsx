import * as elements from "typed-html";
import { Thread } from "../models/thread";
import { ThreadsService } from "../services/threads-service";
import { ThreadList } from "../templates/components/thread/list";
import { getFormData } from "../utils/get-formdata";

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
    const count = await this.service.countMessages(id);
    return (
      <span>
        <strong>{count}</strong> {count === 1 ? 'message' : 'messages'}
      </span>
    );
  }
}
