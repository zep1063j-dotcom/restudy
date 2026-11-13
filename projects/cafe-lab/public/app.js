const status = document.querySelector("#status");
const select = document.querySelector("#menu");
const button = document.querySelector("#submit");
async function request(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.error || `응답 상태 ${response.status}`);
  return data;
}
function renderOrder(order) {
  const item = document.createElement("li");
  item.textContent = `${order.name} ${order.qty}개 / ${order.total.toLocaleString("ko-KR")}원`;
  return item;
}
async function start() {
  try {
    const [menus, orders] = await Promise.all([
      request("/api/menu"),
      request("/api/orders")
    ]);
    if (!Array.isArray(menus) || !Array.isArray(orders))
      throw new Error("응답 형식을 확인하세요.");
    menus.forEach((menu) => {
      select.add(
        new Option(`${menu.name} ${menu.price}원`, menu.id)
      );
      const card = document.createElement("article");
      const title = document.createElement("h2");
      title.textContent = menu.name;
      const price = document.createElement("p");
      price.textContent = `${menu.price.toLocaleString("ko-KR")}원`;
      card.append(title, price);
      document.querySelector("#menu-list").appendChild(card);
    });
    orders.forEach((order) =>
      document
        .querySelector("#orders")
        .appendChild(renderOrder(order))
    );
    button.disabled = menus.length === 0;
    status.textContent = menus.length
      ? "메뉴를 골라 주문하세요."
      : "등록된 메뉴가 없습니다.";
  } catch (error) {
    status.textContent = error.message;
  }
}
document
  .querySelector("#order-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const raw = document.querySelector("#qty").value.trim();
    const qty = Number(raw);
    if (
      raw === "" ||
      !Number.isInteger(qty) ||
      qty < 1 ||
      qty > 20
    ) {
      status.textContent = "수량을 확인하세요.";
      return;
    }
    button.disabled = true;
    status.textContent = "저장 중…";
    try {
      const order = await request("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ menuId: select.value, qty })
      });
      document
        .querySelector("#orders")
        .appendChild(renderOrder(order));
      status.textContent = `서버 확정 금액 ${order.total.toLocaleString("ko-KR")}원으로 저장했습니다.`;
    } catch (error) {
      status.textContent = error.message;
    } finally {
      button.disabled = false;
    }
  });
start();
