const prices = { coffee: 4000, bread: 3500 };

function createOrder(input) {
  const { menuId, qty } = input;
  if (!Object.hasOwn(prices, menuId)) {
    throw new Error("없는 메뉴입니다.");
  }
  if (!Number.isInteger(qty) || qty < 1 || qty > 20) {
    throw new Error("수량은 1~20 정수입니다.");
  }
  return { menuId, qty, total: prices[menuId] * qty };
}

console.log(createOrder({ menuId: "coffee", qty: 2, total: 1 }));
