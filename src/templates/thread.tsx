import * as elements from "typed-html";

export const Thread = ({ id }: {
  id: number
}) => {
  return <section>
    <a class="text-white hover:bg-slate-700" href="/">Back</a>

    <div id="indicator" class="htmx-indicator font-mono">...</div>

    <div
      hx-get={`/thread-detail?id=${id}`}
      hx-trigger="load"
      hx-swap="outerHTML"
      hx-indicator="#indicator"
    ></div>

    <details class="p-4 border-2 border-slate">
      <summary class="font-mono text-lg cursor-pointer text-white">
        New message
      </summary>

      <form
        class="mt-2"
        hx-post={`/message?id=${id}`}
        hx-target="#messages"
        hx-swap="innerHTML"
        hx-indicator="#indicator"
        _="on submit wait 0.5s target.reset()"
      >
        <input
          class="p-2 rounded border-2 border-slate mb-2 w-full"
          type="text"
          name="title"
          placeholder="Message title"
        />
        <textarea
          class="p-2 rounded border-2 border-slate mb-2 w-full"
          name="content"
          cols="30"
          rows="5"
          placeholder="Content"
        ></textarea>
        <button
          class="p-2 rounded border-transparent bg-blue-700 text-white hover:bg-blue-500"
          type="submit"
        >
          Send message
        </button>
      </form>
    </details>

    <div
      id="messages"
      hx-get={`/message-list?id=${id}`}
      hx-trigger="load every 30s"
      hx-swap="innerHTML"
      hx-indicator="#indicator"
    ></div>
  </section>
}
