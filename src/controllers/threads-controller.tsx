import { Thread } from "../models/thread";
import { ThreadsService } from "../services/threads-service";
import { ThreadList } from "../templates/components/thread/list";

export class ThreadsController {
  static async getAll() {
    const values: Thread[] = await ThreadsService.getAll();
    return <ThreadList items={values}/>;
  }

  static async add(form: FormData) {
    const name = form.get("name")?.toString();

    if (name) {
      await ThreadsService.insert(name);
    }

    return await this.getAll();
  }

  static async messagesCount(id: number) {
    const count = await ThreadsService.countMessages(id);
    return (
      <>
        <strong>{count}</strong> {count === 1 ? 'message' : 'messages'}
      </>
    );
  }
}
