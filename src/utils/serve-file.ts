export function serveFile(path: string) {
  const BASE_PATH = "./src/public";
  const filePath = BASE_PATH + path;
  const file = Bun.file(filePath);
  return new Response(file);
}