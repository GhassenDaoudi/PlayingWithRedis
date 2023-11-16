import client from "../DBClient";

export default async function getJSONData() {
  let results = await client.json.get("users", { path: "data" });
  return results;
}
