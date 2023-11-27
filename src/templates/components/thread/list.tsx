import * as elements from "typed-html";
import { Thread } from "../../../models/thread";
import { ThreadItem } from "./item";

export const ThreadList = ({ items }: {
  items: Thread[]
}) => {
  return <ul class="list-disc px-4">
    {items.map(x => <ThreadItem name={x.name} id={x.id} />)}
  </ul>
}