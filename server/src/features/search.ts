export default function search(): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "ghassen" });
    }, 2000);
  });
}
