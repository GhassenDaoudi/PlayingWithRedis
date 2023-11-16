import client from "../../DBClient";

export default async function len() {
  const numPets = (await client.json.arrLen("users", "$.data")) as number[];
  return numPets[0];
}
