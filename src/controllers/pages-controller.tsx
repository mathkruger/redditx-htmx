import { ThreadsService } from "../services/threads-service";
import * as elements from "typed-html";
import { Base } from "../templates/_base";
import { Home } from "../templates/home";
import { ThreadPage } from "../templates/thread";

export class PagesController {
  private threadService: ThreadsService;

  constructor() {
    this.threadService = new ThreadsService();
  }

  home() {
    return <Base>
      <Home />
    </Base>;
  }

  async thread(id: number) {
    const thread = await this.threadService.get(id);
    return <Base>
      <ThreadPage id={thread.id} name={thread.name} />
    </Base>;
  }
}