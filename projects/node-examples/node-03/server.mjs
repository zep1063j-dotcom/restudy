import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/menu") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8"
    });
    res.end(JSON.stringify([{ id: "coffee", price: 4000 }]));
    return;
  }
  res.writeHead(404, {
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify({ error: "없는 경로입니다." }));
});

server.listen(4177, "127.0.0.1", () => {
  console.log("http://127.0.0.1:4177/api/menu");
});
