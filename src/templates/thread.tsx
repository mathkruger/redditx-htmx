import * as elements from "typed-html";
import { MessageForm } from "./components/message/form";
import { Thread } from "../models/thread";

export const ThreadPage = ({ id, name }: Thread) => {
  return <section>
    <a class="text-white hover:bg-slate-700" href="/">Back</a>

    <div id="indicator" class="htmx-indicator font-mono">...</div>

    <h1 class="font-mono text-4xl mb-4 text-white">Thread: {name}</h1>

    <MessageForm threadId={id} />

    <div
      id="messages"
      hx-get={`/message/list/${id}`}
      hx-trigger="load every 30s"
      hx-swap="innerHTML"
      hx-indicator="#indicator"
    ></div>
  </section>
}
