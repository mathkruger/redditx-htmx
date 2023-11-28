export const ThreadForm = () => {
  return (
    <div class="card bg-neutral text-neutral-content w-full">
      <div class="card-body">
        <h2 class="font-mono text-lg mb-2 text-white">Create a new thread</h2>

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
    </div>
  );
};
