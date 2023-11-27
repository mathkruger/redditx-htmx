import * as elements from "typed-html";

export const Index = () => {
  return <section class="home">
    <h1 class="font-mono text-4xl mb-4 text-white">RedditX</h1>

    <div class="p-4 border-2 border-white">
      <h2 class="font-mono text-lg mb-2 text-white">Create new thread</h2>
      <form
        hx-post="/thread"
        hx-target="#threads"
        hx-swap="innerHTML"
        _="on submit wait 0.5s target.reset()"
      >
        <input
          class="p-2 rounded border-2 border-white"
          type="text"
          name="name"
          placeholder="Thread name"
        />
        <button
          class="p-2 rounded border-transparent bg-blue-700 text-white hover:bg-blue-500"
          type="submit"
        >
          Create thread
        </button>
      </form>
    </div>

    <div class="p-4 mt-4 border-2 border-white">
      <h2 class="font-mono text-lg mb-2 text-white">Threads</h2>
      <div
        id="threads"
        hx-get="/thread-list"
        hx-trigger="load"
        hx-indicator="#indicator"
        hx-swap="innerHTML"
      ></div>
      <div id="indicator" class="htmx-indicator font-mono text-white">...</div>
    </div>
  </section>
}

