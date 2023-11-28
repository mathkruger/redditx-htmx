import { PropsWithChildren } from "@kitajs/html";

export const Base = ({ children }: PropsWithChildren) => {
  return `
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>RedditX</title>
    
      <script src="https://unpkg.com/htmx.org@1.9.9" defer></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
      <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.12/dist/full.min.css" rel="stylesheet" type="text/css" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    
    <body data-theme="dark" hx-boost="true">
      <div class="container mx-auto p-4 max-w-3xl w-full">
        ${children}
      </div>
    </body>
  </html>`;
}