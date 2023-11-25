import { MessagesController } from "./controllers/messages-controller";
import { ThreadsController } from "./controllers/threads-controller";
import { renderPage } from "./utils/render-template";
import { serveFile } from "./utils/serve-file";

const threadsController = new ThreadsController();
const messagesController = new MessagesController();

export async function handleRoutes(req: Request) {
  const url = new URL(req.url);
  const method = req.method;
  const params = url.searchParams;

  if (method === 'GET') {
    if (url.pathname === '/') {
      return await renderPage('index', 'RedditX');
    }

    if (url.pathname === '/thread') {
      return await renderPage('thread','RedditX - Thread', {
        name: 'id',
        value: params.get('id'),
        replaceAll: true
      });
    }

    if (url.pathname === '/thread-list') {
      return await threadsController.getAll();
    }

    if (url.pathname === '/thread-detail') {
      const id = parseInt(params.get('id') || '0');
      return await threadsController.get(id);
    }

    if (url.pathname === '/message-list') {
      const threadId = parseInt(params.get('id') || '0');
      return await messagesController.getAll(threadId);
    }
  }

  if (method === 'POST') {
    const formData = await req.formData();
    
    if (url.pathname === '/thread') {
      return await threadsController.add(formData);
    }

    if (url.pathname === '/message') {
      const threadId = parseInt(params.get('id') || '0');
      return await messagesController.add(threadId, formData);
    }
  }

  return serveFile(url.pathname);
}