import { ITemplateArgument } from "../models/template-argument";

export async function renderTemplate(
  templateName: string,
  ...args: ITemplateArgument[]
) {
  const templatePath = `./src/templates/${templateName}.html`;
  let template = await Bun.file(templatePath).text();

  args.forEach((arg) => {
    template =
      arg.replaceAll === true
        ? template.replaceAll(`{${arg.name}}`, arg.value)
        : template.replace(`{${arg.name}}`, arg.value);
  });

  return template;
}

export async function renderPage(
  pageName: string,
  title: string,
  ...args: ITemplateArgument[]
) {
  const page = await renderTemplate(pageName, ...args);
  const base = await renderTemplate(
    "_base",
    { name: "title", value: title },
    { name: "content", value: page }
  );

  return new Response(base, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
