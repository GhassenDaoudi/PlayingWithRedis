seed();
import client from "./src/DBClient";
import append from "./src/features/json/append";
import get from "./src/features/json/get";
import len from "./src/features/json/len";
import search from "./src/features/search";
import seed from "./src/seed";

import { Elysia } from "elysia";
const app = new Elysia().get("/", () => "Hello Elysia");
app.get("/", () => "hello from home");
app.get("/search", search);
app.get("/json", get);
app.get("/json/len", len);
app.post("/json", ({ body }) => append(body));

app.get("/bloom", () => "bloom");

app.listen(8080);
app.onStop(() => {
  client.disconnect();
});

console.log(`server is running at ${app.server?.hostname}:${app.server?.port}`);
