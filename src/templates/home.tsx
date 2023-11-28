import { ThreadForm } from "./components/thread/form";

export const Home = () => {
  return <section class="home">
    <h1 class="font-mono text-4xl mb-4 text-white text-center">RedditX</h1>

    <ThreadForm />

    <div class="card bg-neutral text-neutral-content w-full mt-4">
      <div class="card-body">
        <h2 class="font-mono text-lg mb-2 text-white">Threads</h2>
        <div
          id="threads"
          hx-get="/thread/list"
          hx-trigger="load"
          hx-swap="innerHTML"
        ></div>
      </div>
    </div>
  </section>
}


