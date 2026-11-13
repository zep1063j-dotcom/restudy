const rawPort = process.env.PORT ?? "4177";
const port = Number(rawPort);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT는 1~65535 정수여야 합니다.");
}

console.log("사용 포트:", port);
console.log("API 키 설정 여부:", Boolean(process.env.API_KEY));
