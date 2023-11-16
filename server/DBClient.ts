import { createClient } from "redis";

const client = await createClient()
  .on("error", (e) => {
    console.error("oops something went wrong ", e);
  })
  .connect();
export default client;
