import * as elements from "typed-html";
import { Message } from "../../../models/message";

export const MessageItem = ({ item }: {
  item: Message
}) => {
  const { title, content, timestamp } = item;

  return <li class="border-2 border-slate p-4 mb-4">
    <p class="text-lg"><strong>{title}</strong></p>
    <p>{content}</p>
    <small>{timestamp}</small>
  </li>
}