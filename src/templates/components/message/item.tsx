import { Message } from "../../../models/message";

export const MessageItem = ({ item }: { item: Message }) => {
  const { id, title, content, timestamp, imageUrl } = item;

  return (
    <li class="card bg-neutral text-neutral-content w-full mb-4">
      <div class="card-body">
        <p class="text-lg">
          <strong>{title}</strong>
        </p>
        {imageUrl && (
          <>
            <figure
              class="max-h-32 overflow-hidden rounded cursor-pointer"
              _={`on click js photo_${id}.showModal()`}
            >
              <img class="max-w-150" src={imageUrl} />
            </figure>

            <dialog id={`photo_${id}`} class="modal">
              <div class="modal-box">
                <form method="dialog" hx-boost="false">
                  <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <img class="mx-auto" src={imageUrl} />
              </div>
            </dialog>
          </>
        )}
        <p>{content}</p>
        <small>{timestamp}</small>
      </div>
    </li>
  );
};
