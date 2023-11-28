import { Message } from "../../../models/message";

export const MessageItem = ({ item }: {
  item: Message
}) => {
  const { title, content, timestamp, imageUrl } = item;

  return <li class="border-2 border-slate p-4 mb-4">
    <p class="text-lg"><strong>{title}</strong></p>
    {
      imageUrl && (<>
        <figure class="max-h-64 overflow-hidden rounded" _="on click toggle .max-h-64">
          <img class="max-w-200" src={imageUrl}  />
        </figure>
        <legend class="text-white text-xs">Click on image to expand</legend>
      </>
      )
    }
    <p>{content}</p>
    <small>{timestamp}</small>
  </li>
}