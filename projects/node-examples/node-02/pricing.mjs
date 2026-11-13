export function total(price, qty, fee = 0) {
  return price * qty + fee;
}
