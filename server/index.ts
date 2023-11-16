import DBClient from "./DBClient";

await DBClient.set("key", "value");
const value = await DBClient.get("key");
console.log(value);
await DBClient.disconnect();
Bun.serve({
  port: "8080",
  fetch(request, server) {
    const url = new URL(request.url);
    switch (url.pathname) {
      case "/":
        return new Response("hello from home");
      case "/search":
        return new Response("hellow from search");
      case "/json":
        return new Response("JSON");
      case "/bloom":
        return new Response("bloom filter");
      default:
        break;
    }
    return new Response("404!");
  },
});
