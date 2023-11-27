import * as elements from "typed-html";
import { Message } from "../../../models/message";
import { MessageItem } from "./item";

export const MessageList = ({ items }: {
  items: Message[]
}) => {
  return <section>
    <h2 class="font-mono text-lg my-2 text-white">Messages ({items.length})</h2>
    <ul class="list-none px-4 text-white">
      {items.map(x => <MessageItem item={x} />)}
    </ul>
  </section>
}