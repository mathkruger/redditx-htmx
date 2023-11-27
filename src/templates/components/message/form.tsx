import * as elements from "typed-html";

export const MessageForm = ({ threadId }: {
  threadId: number
}) => {
  return <details class="p-4 border-2 border-slate">
  <summary class="font-mono text-lg cursor-pointer text-white">
    New message
  </summary>

  <form
    class="mt-2"
    hx-post={`/message/${threadId}`}
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
}