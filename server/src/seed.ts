import set from "./features/json/set";

const data = Bun.file("users.json");

export default function seed() {
  data.json().then((users: IUser[]) => {
    // json set
    set(`users`, "$", { data: users });
  });
}
