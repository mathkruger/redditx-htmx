export const MessageForm = ({ threadId }: { threadId: number }) => {
  return (
    <details class="collapse collapse-arrow  bg-neutral text-neutral-content w-full">
      <summary class="collapse-title font-mono text-lg">
        New message
      </summary>

      <div class="collapse-content">
        <form
          class="mt-2"
          hx-post={`/message/${threadId}`}
          hx-encoding="multipart/form-data"
          hx-target="#messages"
          hx-swap="innerHTML"
          hx-indicator="#indicator"
          _="on submit wait 0.5s target.reset()"
        >
          <input
            class="input input-bordered mb-2 w-full"
            type="text"
            name="title"
            placeholder="Message title"
            required
          />
          <textarea
            class="textarea textarea-bordered mb-2 w-full"
            name="content"
            cols="30"
            rows="5"
            placeholder="Content"
            required
          ></textarea>
          <input
            class="file-input file-input-bordered mb-2 w-full"
            type="file"
            name="image"
            accept="image/*"
          />
          <button class="btn btn-outline btn-primary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </details>
  );
};
