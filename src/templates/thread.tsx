import { MessageForm } from "./components/message/form";
import { Thread } from "../models/thread";

export const ThreadPage = ({ id, name }: Thread) => {
  return <section>
    <a class="hover:bg-slate-700" href="/">Back</a>

    <h1 class="font-mono text-4xl mb-4 text-white">Thread: {name}</h1>

    <MessageForm threadId={id} />

    <div
      id="messages"
      hx-get={`/message/list/${id}?order=newer`}
      hx-trigger="load every 30s"
      hx-swap="innerHTML"
      hx-indicator="#indicator"
    ></div>

    <div id="indicator" class="htmx-indicator font-mono text-white my-4 text-center text-xl">...</div>
  </section>
}
