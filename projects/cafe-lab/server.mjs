import { createServer } from "node:http";
import {
  readFile,
  writeFile,
  mkdir,
  rename
} from "node:fs/promises";
import { randomUUID } from "node:crypto";

const port = Number(process.env.PORT ?? "4177");
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT는 1~65535 사이의 정수여야 합니다.");
}
// 가격은 클라이언트 입력 대신 서버 기준 데이터에서 정합니다.
const menus = [
  { id: "coffee", name: "아메리카노", price: 4000 },
  { id: "bread", name: "소금빵", price: 3500 }
];
const dataDir = new URL("./data/", import.meta.url);
const ordersFile = new URL("./data/orders.json", import.meta.url);
await mkdir(dataDir, { recursive: true });
let orders;
try {
  orders = JSON.parse(await readFile(ordersFile, "utf8"));
  if (!Array.isArray(orders))
    throw new Error("orders.json은 배열이어야 합니다.");
} catch (error) {
  if (error.code === "ENOENT") orders = [];
  else
    throw new Error(
      "저장 파일을 읽지 못했습니다. 기존 내용을 보존하고 확인하세요.",
      { cause: error }
    );
}
let writeQueue = Promise.resolve();
function saveOrder(order) {
  const operation = writeQueue.then(async () => {
    const next = [...orders, order];
    const temp = new URL("./data/orders.tmp", import.meta.url);
    await writeFile(temp, JSON.stringify(next, null, 2), "utf8");
    await rename(temp, ordersFile);
    orders = next;
  });
  writeQueue = operation.catch(() => {});
  return operation;
}
function respond(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(data));
}
async function readJSON(req) {
  const chunks = [];
  let tooLarge = false;
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 32768) {
      tooLarge = true;
      continue;
    }
    chunks.push(chunk);
  }
  if (tooLarge) {
    const error = new Error("요청 본문이 너무 큽니다.");
    error.status = 413;
    throw error;
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    const error = new Error("JSON 본문을 확인하세요.");
    error.status = 400;
    throw error;
  }
}
// 공개할 파일을 목록으로 제한해 임의 파일 경로 접근을 막는 학습 구조입니다.
const staticFiles = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/app.js": ["app.js", "text/javascript; charset=utf-8"],
  "/style.css": ["style.css", "text/css; charset=utf-8"],
  "/react.html": ["react.html", "text/html; charset=utf-8"],
  "/react-app.jsx": [
    "react-app.jsx",
    "text/javascript; charset=utf-8"
  ],
  "/vendor/react-local.js": [
    "vendor/react-local.js",
    "text/javascript; charset=utf-8"
  ],
  "/vendor/babel.min.js": [
    "vendor/babel.min.js",
    "text/javascript; charset=utf-8"
  ],
  "/vendor/babel-config.js": [
    "vendor/babel-config.js",
    "text/javascript; charset=utf-8"
  ]
};
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://127.0.0.1:${port}`);
    if (req.method === "GET" && url.pathname === "/api/menu") {
      respond(res, 200, menus);
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/orders") {
      respond(res, 200, orders);
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/orders") {
      if (
        !(
          String(req.headers["content-type"] || "")
            .toLowerCase()
            .split(";")[0]
            .trim() === "application/json"
        )
      ) {
        respond(res, 415, {
          error: "Content-Type은 application/json이어야 합니다."
        });
        return;
      }
      const input = await readJSON(req);
      if (
        !input ||
        typeof input !== "object" ||
        Array.isArray(input)
      ) {
        respond(res, 400, { error: "주문 객체를 보내 주세요." });
        return;
      }
      const menu = menus.find((item) => item.id === input.menuId);
      if (
        !menu ||
        !Number.isInteger(input.qty) ||
        input.qty < 1 ||
        input.qty > 20
      ) {
        respond(res, 400, {
          error: "유효한 메뉴와 1~20 사이 정수 수량이 필요합니다."
        });
        return;
      }
      const order = {
        id: randomUUID(),
        menuId: menu.id,
        name: menu.name,
        qty: input.qty,
        total: menu.price * input.qty,
        createdAt: new Date().toISOString()
      };
      await saveOrder(order);
      respond(res, 201, order);
      return;
    }
    const file = staticFiles[url.pathname];
    if (req.method === "GET" && file) {
      const body = await readFile(
        new URL(`./public/${file[0]}`, import.meta.url)
      );
      res.writeHead(200, { "Content-Type": file[1] });
      res.end(body);
      return;
    }
    respond(res, 404, {
      error: "없는 경로 또는 지원하지 않는 요청입니다."
    });
  } catch (error) {
    if (!res.headersSent)
      respond(res, error.status || 500, {
        error: error.status
          ? error.message
          : "저장 또는 서버 처리에 실패했습니다."
      });
    else res.end();
    console.error(
      "요청 처리 오류:",
      error.status || 500,
      error.message
    );
  }
});
server.listen(port, "127.0.0.1", () => {
  console.log(`카페 주문 앱: http://127.0.0.1:${port}`);
  console.log(`React 화면: http://127.0.0.1:${port}/react.html`);
  console.log("종료: Ctrl+C / 로컬 학습용 서버입니다.");
});
