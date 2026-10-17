// Redirect /apps/syntax-tree-generator to /apps/syntax-tree-generator/ so the
// proxied app's relative css/ and js/ paths resolve under the app folder.
export default (request: Request) => {
  const url = new URL(request.url);
  if (url.pathname.endsWith("/")) return;
  url.pathname += "/";
  return Response.redirect(url, 301);
};

export const config = { path: "/apps/syntax-tree-generator" };
