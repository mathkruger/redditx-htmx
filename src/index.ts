import { handleRoutes } from "./router";

Bun.serve({
  async fetch(req) {
    return await handleRoutes(req);
  }
});
