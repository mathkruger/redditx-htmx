import * as elements from "typed-html";
import { Message } from "../../../models/message";
import { MessageItem } from "./item";

export const MessageList = ({ items, order, threadId }: {
  threadId: number,
  items: Message[],
  order?: "older" | "newer"
}) => {
  const list = order === "newer" ? items.reverse() : items;

  return <section id="message-list">
    <h2 class="font-mono text-lg mt-4 text-white">
      Messages {`(${items.length})`} -
      <a
        class="text-white hover:bg-slate-700 cursor-pointer"
        hx-get={`/message/list/${threadId}?order=${order === "newer" ? "older" : "newer"}`}
        hx-trigger="click"
        hx-target="#message-list"
        hx-swap="innerHTML"
      >{ order } first</a>
    </h2>
    <ul class="list-none my-4 text-white">
      {list.map(x => <MessageItem item={x} />)}
    </ul>
  </section>
}