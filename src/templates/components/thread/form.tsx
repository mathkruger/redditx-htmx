import * as elements from "typed-html";

export const ThreadForm = () => {
  return <div class="p-4 border-2 border-white">
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
  </div>;
}