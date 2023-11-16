Bun.serve({
  port: "8080",
  fetch(request, server) {
    return new Response("hi from bun server !");
  },
});
