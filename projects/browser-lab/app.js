// 가격 데이터와 화면 문구가 따로 있을 때 둘을 일관되게 바꾸는지 확인합니다.
const menus = {
  coffee: { name: "커피", price: 4000 },
  bread: { name: "소금빵", price: 3500 }
};
const message = document.querySelector("#message");

document
  .querySelector("#order")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const menu = menus[document.querySelector("#menu").value];
    const raw = document.querySelector("#qty").value.trim();
    const qty = Number(raw);
    if (
      !menu ||
      raw === "" ||
      !Number.isInteger(qty) ||
      qty < 1 ||
      qty > 20
    ) {
      message.textContent = "수량은 1~20 사이의 정수로 입력하세요.";
      message.className = "error";
      return;
    }
    message.className = "";
    message.textContent = `${menu.name} ${qty}개, 예상 금액 ${(menu.price * qty).toLocaleString("ko-KR")}원`;
  });
