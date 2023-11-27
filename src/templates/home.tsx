import * as elements from "typed-html";
import { ThreadForm } from "./components/thread/form";

export const Home = () => {
  return <section class="home">
    <h1 class="font-mono text-4xl mb-4 text-white">RedditX</h1>

    <ThreadForm />

    <div class="p-4 mt-4 border-2 border-white">
      <h2 class="font-mono text-lg mb-2 text-white">Threads</h2>
      <div
        id="threads"
        hx-get="/thread/list"
        hx-trigger="load"
        hx-swap="innerHTML"
      ></div>
    </div>
  </section>
}


