import * as elements from "typed-html";

export const ThreadDetail = ({ name }: { name: string }) => {
  return <h1 class="font-mono text-4xl mb-4 text-white">Thread: {name}</h1>
}