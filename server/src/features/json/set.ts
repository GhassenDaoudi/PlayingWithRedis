import client from "../../DBClient";

export default function set(key: string, path: string, data: any) {
  return client.json.set(key, path, data);
}
