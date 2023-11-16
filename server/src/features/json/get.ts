import client from "../../DBClient";

export default async function get() {
  const results = await client.json.get("users", { path: "data" });
  return results;
}
