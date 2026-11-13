import { readFile, writeFile } from "node:fs/promises";

const file = new URL("./practice-data.json", import.meta.url);
const data = { shop: "나의 카페", quantity: 2 };
await writeFile(file, JSON.stringify(data, null, 2), "utf8");

const text = await readFile(file, "utf8");
const restored = JSON.parse(text);
console.log(restored.shop, restored.quantity);
