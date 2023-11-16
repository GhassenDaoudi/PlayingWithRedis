import client from "./DBClient";

const data = Bun.file("users.json");

export default function seed() {
  data.json().then((users: IUser[]) => {
    users.forEach((user) => {
      client.json.set(`users:${user.id}`, "$", user as any);
    });
  });
}
