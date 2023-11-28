export const ThreadForm = () => {
  return (
    <details class="collapse collapse-arrow  bg-neutral text-neutral-content w-full">
      <summary class="collapse-title font-mono text-lg">
        New thread
      </summary>

      <div class="collapse-content">
        <form
          class="flex gap-4"
          hx-post="/thread"
          hx-target="#threads"
          hx-swap="innerHTML"
          _="on submit wait 0.5s target.reset()"
        >
          <input
            class="input input-bordered w-4/5"
            type="text"
            name="name"
            placeholder="Thread name"
            required
          />
          <button class="btn btn-outline btn-primary w-1/5" type="submit">
            Create
          </button>
        </form>
      </div>
    </details>
  );
};
