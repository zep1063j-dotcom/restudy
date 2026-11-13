const { useState, useEffect } = React;
async function request(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.error || `응답 상태 ${response.status}`);
  return data;
}
function App() {
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);
  const [menuId, setMenuId] = useState("");
  const [qtyText, setQtyText] = useState("1");
  const [status, setStatus] = useState("불러오는 중…");
  const [busy, setBusy] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    Promise.all([
      request("/api/menu", { signal: controller.signal }),
      request("/api/orders", { signal: controller.signal })
    ])
      .then(([menuData, orderData]) => {
        if (controller.signal.aborted) return;
        if (!Array.isArray(menuData) || !Array.isArray(orderData))
          throw new Error("응답 형식을 확인하세요.");
        setMenus(menuData);
        setOrders(orderData);
        setMenuId(menuData[0]?.id || "");
        setStatus(
          menuData.length
            ? "메뉴를 선택하세요."
            : "등록된 메뉴가 없습니다."
        );
        setBusy(false);
      })
      .catch((error) => {
        if (!controller.signal.aborted) {
          setStatus(error.message);
          setBusy(false);
        }
      });
    return () => controller.abort();
  }, []);
  async function submit(event) {
    event.preventDefault();
    const qty = Number(qtyText);
    if (
      !qtyText.trim() ||
      !Number.isInteger(qty) ||
      qty < 1 ||
      qty > 20
    ) {
      setStatus("수량은 1~20 정수입니다.");
      return;
    }
    setBusy(true);
    setStatus("저장 중…");
    try {
      const order = await request("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ menuId, qty })
      });
      setOrders((previous) => [...previous, order]);
      setStatus(
        `서버 확정 금액 ${order.total.toLocaleString("ko-KR")}원으로 저장했습니다.`
      );
    } catch (error) {
      setStatus(error.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <h1>React 카페 주문</h1>
      <p>
        <a href="/">일반 JavaScript 화면</a>
      </p>
      <p role="status">{status}</p>
      <section className="cards">
        {menus.map((menu) => (
          <article key={menu.id}>
            <h2>{menu.name}</h2>
            <p>{menu.price}원</p>
          </article>
        ))}
      </section>
      <form onSubmit={submit}>
        <label>
          메뉴{" "}
          <select
            value={menuId}
            onChange={(event) => setMenuId(event.target.value)}
          >
            {menus.map((menu) => (
              <option key={menu.id} value={menu.id}>
                {menu.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          수량{" "}
          <input
            type="number"
            min="1"
            max="20"
            value={qtyText}
            onChange={(event) => setQtyText(event.target.value)}
          />
        </label>
        <button disabled={busy || !menuId}>주문 저장</button>
      </form>
      <h2>주문 기록</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.name} {order.qty}개 / {order.total}원
          </li>
        ))}
      </ul>
      <p className="notice">
        로컬 학습용입니다. 실제 결제·인증을 구현하지 않습니다.
      </p>
    </>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(
  <App />
);
