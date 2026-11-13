import { useState } from "react";

const initialMenus = [
  { id: "coffee", name: "아메리카노", price: 4000, qty: 0 },
  { id: "latte", name: "카페라테", price: 4500, qty: 0 },
  { id: "bread", name: "소금빵", price: 3500, qty: 0 }
];
function MenuCard({ item, onAdd, onRemove }) {
  return (
    <article>
      <h2>{item.name}</h2>
      <p>
        {item.price.toLocaleString("ko-KR")}원 / {item.qty}개
      </p>
      <button
        onClick={() => onAdd(item.id)}
        disabled={item.qty >= 20}
      >
        담기
      </button>
      <button
        onClick={() => onRemove(item.id)}
        disabled={item.qty === 0}
      >
        빼기
      </button>
    </article>
  );
}
export default function App() {
  const [items, setItems] = useState(initialMenus);
  const [query, setQuery] = useState("");
  const visible = items.filter((item) =>
    item.name.includes(query.trim())
  );
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  function changeQty(id, delta) {
    setItems((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(0, Math.min(20, item.qty + delta))
            }
          : item
      )
    );
  }
  function reset() {
    setItems((previous) =>
      previous.map((item) => ({ ...item, qty: 0 }))
    );
    setQuery("");
  }
  return (
    <main>
      <header>
        <h1>나의 React 카페</h1>
        <p>검색·수량·총액을 같은 상태에서 계산합니다.</p>
      </header>
      <label htmlFor="query">메뉴 검색</label>
      <input
        id="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <section className="cards" aria-label="메뉴 목록">
        {visible.length ? (
          visible.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAdd={(id) => changeQty(id, 1)}
              onRemove={(id) => changeQty(id, -1)}
            />
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </section>
      <p aria-live="polite">
        담은 메뉴 {count}개 / 예상 총액{" "}
        {total.toLocaleString("ko-KR")}원
      </p>
      <button onClick={reset}>초기화</button>
      <p className="notice">
        브라우저 상태 연습입니다. 서버 주문·결제·영구 저장은 하지
        않습니다. 새로고침하면 처음 상태로 시작합니다.
      </p>
    </main>
  );
}
