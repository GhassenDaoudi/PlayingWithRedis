seed();
import client from "./src/DBClient";
import search from "./src/features/search";
import seed from "./src/seed";

import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia");
app.get("/", () => "hello from home");
app.get("/search", search);
app.get("/json", () => "json");
app.get("/bloom", () => "bloom");

app.listen(8080);
app.onStop(() => {
  client.disconnect();
});

console.log(`server is running at ${app.server?.hostname}:${app.server?.port}`);
