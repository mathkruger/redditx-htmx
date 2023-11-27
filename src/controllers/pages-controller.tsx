import { ThreadsService } from "../services/threads-service";
import * as elements from "typed-html";
import { Base } from "../templates/_base";
import { Home } from "../templates/home";
import { ThreadPage } from "../templates/thread";

export class PagesController {
  static home() {
    return <Base>
      <Home />
    </Base>;
  }

  static async thread(id: number) {
    const thread = await ThreadsService.get(id);
    return <Base>
      <ThreadPage id={thread.id} name={thread.name} />
    </Base>;
  }
}