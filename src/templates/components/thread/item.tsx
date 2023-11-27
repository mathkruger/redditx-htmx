import * as elements from "typed-html";

export const ThreadItem = ({name, id}: {
  name: string,
  id: number
}) => {
  return <li class="text-white">
    <a class="hover:bg-slate-700" href={`/thread/${id}`}>
      {name} - <span hx-get={`/message/count/${id}`} hx-trigger="load" hx-swap="outerHTML">...</span>
    </a>
  </li>
}
