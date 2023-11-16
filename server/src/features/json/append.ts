import client from "../../DBClient";

export default async function append(data: any) {
  await client.json.arrAppend("users", "$.data", data);
}
