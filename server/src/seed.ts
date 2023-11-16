import client from "./DBClient";

const data = Bun.file("users.json");

export default function seed() {
  data.json().then((users: IUser[]) => {
    // json set
    client.json.set(`users`, "$", { data: users as any });
  });
}
