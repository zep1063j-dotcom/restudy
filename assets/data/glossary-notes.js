window.GLOSSARY_NOTES = {
  "단방향 데이터 흐름": {
    code: "function Quantity({ value, onIncrease }) {\n  return (\n    <button onClick={onIncrease}>\n      수량 {value}개 · 하나 추가\n    </button>\n  );\n}\n\nfunction App() {\n  const [quantity, setQuantity] = React.useState(1);\n\n  function increase() {\n    setQuantity((previous) => previous + 1);\n  }\n\n  return <Quantity value={quantity} onIncrease={increase} />;\n}\n",
    explain: [
      "데이터의 원본은 부모 App의 quantity입니다. 부모는 현재 값과 변경을 요청할 함수를 props로 자식 Quantity에 전달합니다. 자식이 부모의 변수를 직접 덮어쓰는 구조는 아닙니다.",
      "자식의 클릭은 전달받은 함수를 실행합니다. 함수는 부모에서 정의했으므로 부모의 setQuantity를 호출할 수 있습니다. 이때 이벤트의 요청은 자식에서 출발하지만, 다음 화면에 사용할 값은 다시 부모에서 자식으로 내려갑니다."
    ],
    flow: [
      "처음 렌더에서 부모의 quantity는 1입니다. 자식은 value=1과 onIncrease 함수를 받습니다.",
      "자식 버튼을 누르면 onIncrease가 호출되고, 부모의 increase가 setQuantity로 다음 값을 요청합니다.",
      "다음 렌더에서 부모는 quantity=2를 읽고 자식에게 value=2를 전달합니다."
    ],
    result: "처음에는 수량 1개, 한 번 누르면 2개, 두 번 누르면 3개로 보입니다.",
    edit: "수량을 2개씩 늘리려면 자식의 value를 바꾸지 말고 부모의 previous + 1을 previous + 2로 바꾸세요.",
    warning:
      "props.value를 직접 수정해도 부모의 상태 갱신을 요청하는 방법이 되지 않습니다. 값의 원본을 가진 컴포넌트의 set 함수를 통해 갱신하세요.",
    mode: "jsx"
  },
  "렌더와 커밋": {
    code: "function App() {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <section>\n      <h2>고정된 카페 제목</h2>\n      <p>주문 수: {count}</p>\n      <button onClick={() => setCount((n) => n + 1)}>\n        주문 추가\n      </button>\n    </section>\n  );\n}\n",
    explain: [
      "렌더는 React가 컴포넌트 함수를 호출해 다음 화면의 결과를 계산하는 과정입니다. 커밋은 계산된 결과에 따라 필요한 변경을 실제 DOM에 반영하는 과정입니다. 렌더를 했다고 모든 DOM 요소를 새로 만드는 것은 아닙니다.",
      "예제에서는 count가 바뀌면 App이 다시 실행됩니다. 제목은 같고 주문 수의 글자만 달라지므로, React는 커밋 과정에서 바뀐 결과를 반영합니다. 렌더 함수 안에서 직접 DOM을 고치거나 주문 요청을 보내는 식의 부수 효과를 넣지 않습니다."
    ],
    flow: [
      "버튼 클릭이 setCount를 호출해 상태 갱신과 새 렌더를 요청합니다.",
      "React는 새 count로 App을 호출하고 JSX 결과를 계산합니다.",
      "React는 필요한 DOM 변경을 커밋합니다. 브라우저는 그 결과를 화면에 그립니다."
    ],
    result:
      "주문 추가를 한 번 누르면 주문 수가 0에서 1로 바뀝니다. 제목 문구는 그대로입니다.",
    edit: "count 대신 count * 2를 표시하면 실제 state 값과 화면에 계산해 보여 주는 값이 어떻게 다른지 설명해 보세요.",
    warning:
      "렌더 횟수와 클릭 횟수가 항상 같다고 가정하지 마세요. 개발 모드의 StrictMode 등에서는 순수성 점검을 위해 컴포넌트를 추가로 호출할 수 있습니다.",
    mode: "jsx"
  },
  "배열 구조분해": {
    code: '// JavaScript: 배열의 위치대로 이름을 붙입니다.\nconst menu = ["커피", 4000];\nconst [name, price] = menu;\nconsole.log(name); // 커피\nconsole.log(price); // 4000\n\n// React 컴포넌트 안에서는 다음과 같이 사용합니다.\n// const [count, setCount] = React.useState(0);\n// 첫 번째 위치: 현재 렌더에서 읽는 상태 값\n// 두 번째 위치: 다음 상태를 요청하는 함수\n',
    explain: [
      "배열 구조분해는 배열의 각 위치에 담긴 값을 변수로 꺼내 이름을 붙이는 JavaScript 문법입니다. [name, price]에서 name은 0번, price는 1번 위치를 받습니다. 대괄호가 있다고 반복문을 실행하는 것은 아닙니다.",
      "useState는 현재 상태와 set 함수를 담은 두 항목을 반환합니다. const [count, setCount] = React.useState(0)은 그 두 위치를 각각의 이름으로 받는 코드입니다. 이름 자체는 바꿀 수 있지만 두 항목의 역할과 순서는 바뀌지 않습니다."
    ],
    flow: [
      "오른쪽 menu 배열을 먼저 평가합니다.",
      "배열의 0번 값을 name에, 1번 값을 price에 연결합니다.",
      "새 변수 name과 price를 일반 변수처럼 읽습니다."
    ],
    result: "콘솔에는 커피와 4000이 차례로 출력됩니다.",
    edit: '배열에 세 번째 값 "따뜻하게"를 추가하고 const [name, price, option]으로 받아 출력해 보세요.',
    warning:
      "const [setCount, count] = useState(0)처럼 순서를 뒤집으면 변수 이름과 실제 역할이 뒤바뀝니다. 객체 구조분해의 중괄호와도 구분하세요.",
    mode: "console"
  },
  state: {
    code: 'function App() {\n  const [count, setCount] = React.useState(0);\n\n  function increase() {\n    setCount((previous) => previous + 1);\n    console.log("이 핸들러가 읽는 count:", count);\n  }\n\n  return <button onClick={increase}>주문 {count}개</button>;\n}\n',
    explain: [
      "state는 렌더 사이에서 React가 보관하는 값입니다. set 함수는 현재 함수 안의 변수를 즉시 바꾸는 명령이 아니라 다음 상태 갱신을 요청하는 함수입니다.",
      "이벤트 핸들러는 자신이 만들어진 렌더의 count를 읽습니다. setCount 다음 줄에서 count를 출력하면 다음 렌더의 값이 아니라 현재 핸들러가 기억하는 값이 보입니다."
    ],
    flow: [
      "처음 count는 0이고 버튼은 주문 0개입니다.",
      "클릭하면 업데이트 함수가 다음 값을 계산하도록 전달됩니다. 이 핸들러의 count는 여전히 0입니다.",
      "다음 렌더에서 count는 1이 되어 버튼 문구가 바뀝니다."
    ],
    result:
      "첫 클릭 뒤 버튼은 1개가 되고, 그 클릭의 콘솔은 이전 스냅샷인 0을 출력합니다.",
    edit: "증가 폭을 +2로 바꾸고 버튼 값과 핸들러의 콘솔 값을 비교하세요.",
    warning:
      "count++처럼 지역 값만 바꾸지 마세요. 이전 값이 필요한 갱신은 setCount(previous => previous + 1)처럼 작성합니다.",
    mode: "jsx"
  },
  "set 함수와 렌더": {
    code: 'function App() {\n  const [count, setCount] = React.useState(0);\n\n  function increase() {\n    setCount((previous) => previous + 1);\n    console.log("이 핸들러가 읽는 count:", count);\n  }\n\n  return <button onClick={increase}>주문 {count}개</button>;\n}\n',
    explain: [
      "state는 렌더 사이에서 React가 보관하는 값입니다. set 함수는 현재 함수 안의 변수를 즉시 바꾸는 명령이 아니라 다음 상태 갱신을 요청하는 함수입니다.",
      "이벤트 핸들러는 자신이 만들어진 렌더의 count를 읽습니다. setCount 다음 줄에서 count를 출력하면 다음 렌더의 값이 아니라 현재 핸들러가 기억하는 값이 보입니다."
    ],
    flow: [
      "처음 count는 0이고 버튼은 주문 0개입니다.",
      "클릭하면 업데이트 함수가 다음 값을 계산하도록 전달됩니다. 이 핸들러의 count는 여전히 0입니다.",
      "다음 렌더에서 count는 1이 되어 버튼 문구가 바뀝니다."
    ],
    result:
      "첫 클릭 뒤 버튼은 1개가 되고, 그 클릭의 콘솔은 이전 스냅샷인 0을 출력합니다.",
    edit: "증가 폭을 +2로 바꾸고 버튼 값과 핸들러의 콘솔 값을 비교하세요.",
    warning:
      "count++처럼 지역 값만 바꾸지 마세요. 이전 값이 필요한 갱신은 setCount(previous => previous + 1)처럼 작성합니다.",
    mode: "jsx"
  },
  스냅샷: {
    code: 'function App() {\n  const [count, setCount] = React.useState(0);\n\n  function increase() {\n    setCount((previous) => previous + 1);\n    console.log("이 핸들러가 읽는 count:", count);\n  }\n\n  return <button onClick={increase}>주문 {count}개</button>;\n}\n',
    explain: [
      "state는 렌더 사이에서 React가 보관하는 값입니다. set 함수는 현재 함수 안의 변수를 즉시 바꾸는 명령이 아니라 다음 상태 갱신을 요청하는 함수입니다.",
      "이벤트 핸들러는 자신이 만들어진 렌더의 count를 읽습니다. setCount 다음 줄에서 count를 출력하면 다음 렌더의 값이 아니라 현재 핸들러가 기억하는 값이 보입니다."
    ],
    flow: [
      "처음 count는 0이고 버튼은 주문 0개입니다.",
      "클릭하면 업데이트 함수가 다음 값을 계산하도록 전달됩니다. 이 핸들러의 count는 여전히 0입니다.",
      "다음 렌더에서 count는 1이 되어 버튼 문구가 바뀝니다."
    ],
    result:
      "첫 클릭 뒤 버튼은 1개가 되고, 그 클릭의 콘솔은 이전 스냅샷인 0을 출력합니다.",
    edit: "증가 폭을 +2로 바꾸고 버튼 값과 핸들러의 콘솔 값을 비교하세요.",
    warning:
      "count++처럼 지역 값만 바꾸지 마세요. 이전 값이 필요한 갱신은 setCount(previous => previous + 1)처럼 작성합니다.",
    mode: "jsx"
  },
  "스냅샷과 불변성": {
    code: 'function App() {\n  const [order, setOrder] = React.useState({\n    name: "커피",\n    quantity: 1\n  });\n\n  function increase() {\n    setOrder((previous) => ({\n      ...previous,\n      quantity: previous.quantity + 1\n    }));\n  }\n\n  return (\n    <button onClick={increase}>\n      {order.name} {order.quantity}개\n    </button>\n  );\n}\n',
    explain: [
      "객체나 배열 state를 갱신할 때 기존 객체를 직접 바꾸지 않고 새 객체를 만들어 set 함수로 전달합니다. 이전 렌더에서 사용한 값의 내용도 그대로 보존할 수 있습니다."
    ],
    flow: [
      "...previous가 이전 객체의 최상위 속성을 새 객체에 복사합니다.",
      "quantity 속성만 새 값으로 덮어씁니다.",
      "새 객체를 다음 state로 요청합니다."
    ],
    result: "이름은 커피로 유지되고 수량만 늘어납니다.",
    edit: "name 속성도 바꾸는 별도 버튼을 만들되 quantity가 사라지지 않게 하세요.",
    warning:
      "전개 구문은 얕은 복사입니다. 중첩 객체를 수정한다면 바뀌는 깊이까지 새 객체를 만들어야 합니다.",
    mode: "jsx"
  },
  "업데이트 함수": {
    code: "function App() {\n  const [count, setCount] = React.useState(0);\n\n  function addThree() {\n    setCount((n) => n + 1);\n    setCount((n) => n + 1);\n    setCount((n) => n + 1);\n  }\n\n  return (\n    <button onClick={addThree}>수량 {count}개 · +3</button>\n  );\n}\n",
    explain: [
      "업데이트 함수는 React가 대기 중인 이전 상태를 인수로 받아 다음 상태를 계산하는 함수입니다. 한 이벤트에서 같은 상태를 여러 번 갱신할 때 이전 계산 결과를 이어받을 수 있습니다."
    ],
    flow: [
      "첫 업데이트는 0을 받아 1을 계산합니다.",
      "두 번째는 앞서 계산한 1로 2를 계산합니다.",
      "세 번째는 2로 3을 계산하고 화면에 반영됩니다."
    ],
    result: "한 번 누르면 0에서 3으로, 다시 누르면 6으로 바뀝니다.",
    edit: "세 번째 업데이트를 n => n + 2로 바꾸고 한 번 클릭했을 때 값을 예측하세요.",
    warning:
      "setCount(count + 1)을 세 번 쓰는 것은 같은 스냅샷의 값으로 세 번 요청하는 코드입니다. 위의 세 업데이트 함수와 구분하세요.",
    mode: "jsx"
  },
  props: {
    code: 'function MenuCard({ name, price, onSelect }) {\n  return (\n    <button onClick={() => onSelect(name)}>\n      {name} · {price}원\n    </button>\n  );\n}\n\nfunction App() {\n  const [selected, setSelected] = React.useState("아직 없음");\n  return (\n    <section>\n      <MenuCard\n        name="커피"\n        price={4000}\n        onSelect={setSelected}\n      />\n      <p>선택한 메뉴: {selected}</p>\n    </section>\n  );\n}\n',
    explain: [
      'props는 부모가 자식 컴포넌트에 전달하는 입력입니다. 문자열, 숫자, 배열, 객체, 함수를 전달할 수 있습니다. name="커피"는 문자열, price={4000}은 숫자, onSelect={setSelected}는 함수입니다.',
      "자식은 props를 읽어 화면을 만들고, 전달받은 함수를 호출해 선택 사실을 알립니다. 부모가 가진 selected의 변경은 부모의 setSelected가 수행합니다."
    ],
    flow: [
      "부모가 세 props를 MenuCard에 전달합니다.",
      "자식의 버튼 클릭이 onSelect(name)을 호출합니다.",
      "부모 상태가 선택한 이름으로 갱신되어 문구가 바뀝니다."
    ],
    result: "커피 버튼을 누르면 선택한 메뉴가 아직 없음에서 커피로 바뀝니다.",
    edit: "name과 price를 빵, 3500으로 바꾸고 선택 결과를 확인하세요.",
    warning:
      "onClick={onSelect(name)}처럼 렌더 중 호출하지 말고, 클릭할 때 실행할 함수를 전달하세요.",
    mode: "jsx"
  },
  "부모 컴포넌트와 자식 컴포넌트": {
    code: 'function MenuCard({ name, price, onSelect }) {\n  return (\n    <button onClick={() => onSelect(name)}>\n      {name} · {price}원\n    </button>\n  );\n}\n\nfunction App() {\n  const [selected, setSelected] = React.useState("아직 없음");\n  return (\n    <section>\n      <MenuCard\n        name="커피"\n        price={4000}\n        onSelect={setSelected}\n      />\n      <p>선택한 메뉴: {selected}</p>\n    </section>\n  );\n}\n',
    explain: [
      'props는 부모가 자식 컴포넌트에 전달하는 입력입니다. 문자열, 숫자, 배열, 객체, 함수를 전달할 수 있습니다. name="커피"는 문자열, price={4000}은 숫자, onSelect={setSelected}는 함수입니다.',
      "자식은 props를 읽어 화면을 만들고, 전달받은 함수를 호출해 선택 사실을 알립니다. 부모가 가진 selected의 변경은 부모의 setSelected가 수행합니다."
    ],
    flow: [
      "부모가 세 props를 MenuCard에 전달합니다.",
      "자식의 버튼 클릭이 onSelect(name)을 호출합니다.",
      "부모 상태가 선택한 이름으로 갱신되어 문구가 바뀝니다."
    ],
    result: "커피 버튼을 누르면 선택한 메뉴가 아직 없음에서 커피로 바뀝니다.",
    edit: "name과 price를 빵, 3500으로 바꾸고 선택 결과를 확인하세요.",
    warning:
      "onClick={onSelect(name)}처럼 렌더 중 호출하지 말고, 클릭할 때 실행할 함수를 전달하세요.",
    mode: "jsx"
  },
  "콜백 props": {
    code: 'function MenuCard({ name, price, onSelect }) {\n  return (\n    <button onClick={() => onSelect(name)}>\n      {name} · {price}원\n    </button>\n  );\n}\n\nfunction App() {\n  const [selected, setSelected] = React.useState("아직 없음");\n  return (\n    <section>\n      <MenuCard\n        name="커피"\n        price={4000}\n        onSelect={setSelected}\n      />\n      <p>선택한 메뉴: {selected}</p>\n    </section>\n  );\n}\n',
    explain: [
      'props는 부모가 자식 컴포넌트에 전달하는 입력입니다. 문자열, 숫자, 배열, 객체, 함수를 전달할 수 있습니다. name="커피"는 문자열, price={4000}은 숫자, onSelect={setSelected}는 함수입니다.',
      "자식은 props를 읽어 화면을 만들고, 전달받은 함수를 호출해 선택 사실을 알립니다. 부모가 가진 selected의 변경은 부모의 setSelected가 수행합니다."
    ],
    flow: [
      "부모가 세 props를 MenuCard에 전달합니다.",
      "자식의 버튼 클릭이 onSelect(name)을 호출합니다.",
      "부모 상태가 선택한 이름으로 갱신되어 문구가 바뀝니다."
    ],
    result: "커피 버튼을 누르면 선택한 메뉴가 아직 없음에서 커피로 바뀝니다.",
    edit: "name과 price를 빵, 3500으로 바꾸고 선택 결과를 확인하세요.",
    warning:
      "onClick={onSelect(name)}처럼 렌더 중 호출하지 말고, 클릭할 때 실행할 함수를 전달하세요.",
    mode: "jsx"
  },
  key: {
    code: 'function App() {\n  const menus = [\n    { id: "coffee", name: "커피" },\n    { id: "bread", name: "빵" }\n  ];\n  return (\n    <ul>\n      {menus.map((menu) => (\n        <li key={menu.id}>{menu.name}</li>\n      ))}\n    </ul>\n  );\n}\n',
    explain: [
      "key는 같은 부모 아래의 목록 항목을 React가 식별할 때 사용하는 값입니다. 이름이나 순서가 바뀌어도 같은 항목을 알아볼 수 있도록 데이터의 안정적인 id를 사용합니다."
    ],
    flow: [
      "map이 각 메뉴를 li로 바꿉니다.",
      "각 li에 데이터 id를 key로 지정합니다.",
      "React는 다음 목록과 비교할 때 이 key로 항목의 동일성을 판단합니다."
    ],
    result: "커피와 빵 두 항목이 표시됩니다.",
    edit: "배열의 순서를 바꾸되 각 항목의 id는 유지해 보세요.",
    warning:
      "매 렌더마다 Math.random()으로 key를 만들지 마세요. key는 자식에게 일반 props로 전달되지 않으므로 필요하면 id도 별도로 전달합니다.",
    mode: "jsx"
  },
  "제어 입력": {
    code: 'function App() {\n  const [name, setName] = React.useState("");\n  return (\n    <section>\n      <label>\n        이름\n        <input\n          value={name}\n          onChange={(event) => setName(event.target.value)}\n        />\n      </label>\n      <p>입력한 값: {name || "아직 없음"}</p>\n    </section>\n  );\n}\n',
    explain: [
      "제어 입력은 input의 현재 값을 React state에서 결정하는 방식입니다. value로 화면의 값을 전달하고, onChange에서 사용자의 입력을 읽어 state를 갱신합니다."
    ],
    flow: [
      "value가 현재 state를 입력칸에 보여 줍니다.",
      "입력이 바뀌면 onChange가 새 문자열을 읽습니다.",
      "state가 바뀐 다음 렌더에서 입력칸과 안내 문구가 함께 갱신됩니다."
    ],
    result: "입력한 이름이 아래 문구에도 표시됩니다.",
    edit: '초깃값을 "방문자"로 바꾸고 처음 표시를 확인하세요.',
    warning:
      "value만 넣고 onChange에서 값을 갱신하지 않으면 사용자가 입력을 바꿀 수 없습니다.",
    mode: "jsx"
  },
  파생값: {
    code: "function App() {\n  const [quantity, setQuantity] = React.useState(1);\n  const price = 4000;\n  const total = price * quantity;\n\n  return (\n    <section>\n      <button onClick={() => setQuantity((n) => n + 1)}>\n        수량 {quantity}개\n      </button>\n      <p>예상 총액 {total}원</p>\n    </section>\n  );\n}\n",
    explain: [
      "파생값은 이미 있는 값으로 계산할 수 있는 결과입니다. 수량과 단가로 구할 수 있는 total을 별도 state로 두면 수량만 바뀌고 총액 갱신을 빠뜨릴 수 있습니다.",
      "여러 자식이 수량을 공유한다면 공통 부모가 수량의 원본을 가지고 내려보냅니다. 한 원본에서 계산하면 화면 간 값이 어긋날 가능성을 줄일 수 있습니다."
    ],
    flow: [
      "React가 현재 quantity를 읽습니다.",
      "렌더에서 price * quantity로 total을 계산합니다.",
      "수량 변경 후 다음 렌더가 새 total을 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "실제 주문 확정 금액은 서버 기준으로 계산해야 합니다. 이 값은 브라우저가 보여 주는 예상 총액입니다.",
    mode: "jsx"
  },
  "파생 총액": {
    code: "function App() {\n  const [quantity, setQuantity] = React.useState(1);\n  const price = 4000;\n  const total = price * quantity;\n\n  return (\n    <section>\n      <button onClick={() => setQuantity((n) => n + 1)}>\n        수량 {quantity}개\n      </button>\n      <p>예상 총액 {total}원</p>\n    </section>\n  );\n}\n",
    explain: [
      "파생값은 이미 있는 값으로 계산할 수 있는 결과입니다. 수량과 단가로 구할 수 있는 total을 별도 state로 두면 수량만 바뀌고 총액 갱신을 빠뜨릴 수 있습니다.",
      "여러 자식이 수량을 공유한다면 공통 부모가 수량의 원본을 가지고 내려보냅니다. 한 원본에서 계산하면 화면 간 값이 어긋날 가능성을 줄일 수 있습니다."
    ],
    flow: [
      "React가 현재 quantity를 읽습니다.",
      "렌더에서 price * quantity로 total을 계산합니다.",
      "수량 변경 후 다음 렌더가 새 total을 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "실제 주문 확정 금액은 서버 기준으로 계산해야 합니다. 이 값은 브라우저가 보여 주는 예상 총액입니다.",
    mode: "jsx"
  },
  "상태 끌어올리기": {
    code: "function App() {\n  const [quantity, setQuantity] = React.useState(1);\n  const price = 4000;\n  const total = price * quantity;\n\n  return (\n    <section>\n      <button onClick={() => setQuantity((n) => n + 1)}>\n        수량 {quantity}개\n      </button>\n      <p>예상 총액 {total}원</p>\n    </section>\n  );\n}\n",
    explain: [
      "파생값은 이미 있는 값으로 계산할 수 있는 결과입니다. 수량과 단가로 구할 수 있는 total을 별도 state로 두면 수량만 바뀌고 총액 갱신을 빠뜨릴 수 있습니다.",
      "여러 자식이 수량을 공유한다면 공통 부모가 수량의 원본을 가지고 내려보냅니다. 한 원본에서 계산하면 화면 간 값이 어긋날 가능성을 줄일 수 있습니다."
    ],
    flow: [
      "React가 현재 quantity를 읽습니다.",
      "렌더에서 price * quantity로 total을 계산합니다.",
      "수량 변경 후 다음 렌더가 새 total을 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "실제 주문 확정 금액은 서버 기준으로 계산해야 합니다. 이 값은 브라우저가 보여 주는 예상 총액입니다.",
    mode: "jsx"
  },
  "단일 진실 공급원": {
    code: "function App() {\n  const [quantity, setQuantity] = React.useState(1);\n  const price = 4000;\n  const total = price * quantity;\n\n  return (\n    <section>\n      <button onClick={() => setQuantity((n) => n + 1)}>\n        수량 {quantity}개\n      </button>\n      <p>예상 총액 {total}원</p>\n    </section>\n  );\n}\n",
    explain: [
      "파생값은 이미 있는 값으로 계산할 수 있는 결과입니다. 수량과 단가로 구할 수 있는 total을 별도 state로 두면 수량만 바뀌고 총액 갱신을 빠뜨릴 수 있습니다.",
      "여러 자식이 수량을 공유한다면 공통 부모가 수량의 원본을 가지고 내려보냅니다. 한 원본에서 계산하면 화면 간 값이 어긋날 가능성을 줄일 수 있습니다."
    ],
    flow: [
      "React가 현재 quantity를 읽습니다.",
      "렌더에서 price * quantity로 total을 계산합니다.",
      "수량 변경 후 다음 렌더가 새 total을 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "실제 주문 확정 금액은 서버 기준으로 계산해야 합니다. 이 값은 브라우저가 보여 주는 예상 총액입니다.",
    mode: "jsx"
  },
  "조건부 렌더링": {
    code: 'function App() {\n  const [text, setText] = React.useState("");\n  const isEmpty = text.trim() === "";\n  return (\n    <section>\n      <input\n        value={text}\n        onChange={(e) => setText(e.target.value)}\n      />\n      {isEmpty ? (\n        <p>검색어를 입력하세요.</p>\n      ) : (\n        <p>검색어: {text}</p>\n      )}\n    </section>\n  );\n}\n',
    explain: [
      "조건부 렌더링은 값에 따라 다른 JSX를 반환하는 방식입니다. trim()은 문자열 양끝의 공백을 제거한 새 문자열을 반환하므로 공백만 입력한 경우를 검사할 수 있습니다."
    ],
    flow: [
      "입력 값을 state로 읽습니다.",
      "공백을 제거한 문자열이 빈 문자열인지 검사합니다.",
      "조건에 따라 안내 또는 검색어를 보여 줍니다."
    ],
    result: "빈 값과 공백만 입력한 값은 안내 문구가 보입니다.",
    edit: "공백만 입력한 경우와 글자 앞뒤에 공백이 있는 경우를 비교하세요.",
    warning:
      "trim()을 호출했다고 원래 text가 자동으로 바뀌지는 않습니다. 반환한 값을 검사하거나 저장해야 합니다.",
    mode: "jsx"
  },
  trim: {
    code: 'function App() {\n  const [text, setText] = React.useState("");\n  const isEmpty = text.trim() === "";\n  return (\n    <section>\n      <input\n        value={text}\n        onChange={(e) => setText(e.target.value)}\n      />\n      {isEmpty ? (\n        <p>검색어를 입력하세요.</p>\n      ) : (\n        <p>검색어: {text}</p>\n      )}\n    </section>\n  );\n}\n',
    explain: [
      "조건부 렌더링은 값에 따라 다른 JSX를 반환하는 방식입니다. trim()은 문자열 양끝의 공백을 제거한 새 문자열을 반환하므로 공백만 입력한 경우를 검사할 수 있습니다."
    ],
    flow: [
      "입력 값을 state로 읽습니다.",
      "공백을 제거한 문자열이 빈 문자열인지 검사합니다.",
      "조건에 따라 안내 또는 검색어를 보여 줍니다."
    ],
    result: "빈 값과 공백만 입력한 값은 안내 문구가 보입니다.",
    edit: "공백만 입력한 경우와 글자 앞뒤에 공백이 있는 경우를 비교하세요.",
    warning:
      "trim()을 호출했다고 원래 text가 자동으로 바뀌지는 않습니다. 반환한 값을 검사하거나 저장해야 합니다.",
    mode: "jsx"
  },
  불변성: {
    code: 'function App() {\n  const [order, setOrder] = React.useState({\n    name: "커피",\n    quantity: 1\n  });\n\n  function increase() {\n    setOrder((previous) => ({\n      ...previous,\n      quantity: previous.quantity + 1\n    }));\n  }\n\n  return (\n    <button onClick={increase}>\n      {order.name} {order.quantity}개\n    </button>\n  );\n}\n',
    explain: [
      "객체나 배열 state를 갱신할 때 기존 객체를 직접 바꾸지 않고 새 객체를 만들어 set 함수로 전달합니다. 이전 렌더에서 사용한 값의 내용도 그대로 보존할 수 있습니다."
    ],
    flow: [
      "...previous가 이전 객체의 최상위 속성을 새 객체에 복사합니다.",
      "quantity 속성만 새 값으로 덮어씁니다.",
      "새 객체를 다음 state로 요청합니다."
    ],
    result: "이름은 커피로 유지되고 수량만 늘어납니다.",
    edit: "name 속성도 바꾸는 별도 버튼을 만들되 quantity가 사라지지 않게 하세요.",
    warning:
      "전개 구문은 얕은 복사입니다. 중첩 객체를 수정한다면 바뀌는 깊이까지 새 객체를 만들어야 합니다.",
    mode: "jsx"
  },
  "객체 state와 새 객체": {
    code: 'function App() {\n  const [order, setOrder] = React.useState({\n    name: "커피",\n    quantity: 1\n  });\n\n  function increase() {\n    setOrder((previous) => ({\n      ...previous,\n      quantity: previous.quantity + 1\n    }));\n  }\n\n  return (\n    <button onClick={increase}>\n      {order.name} {order.quantity}개\n    </button>\n  );\n}\n',
    explain: [
      "객체나 배열 state를 갱신할 때 기존 객체를 직접 바꾸지 않고 새 객체를 만들어 set 함수로 전달합니다. 이전 렌더에서 사용한 값의 내용도 그대로 보존할 수 있습니다."
    ],
    flow: [
      "...previous가 이전 객체의 최상위 속성을 새 객체에 복사합니다.",
      "quantity 속성만 새 값으로 덮어씁니다.",
      "새 객체를 다음 state로 요청합니다."
    ],
    result: "이름은 커피로 유지되고 수량만 늘어납니다.",
    edit: "name 속성도 바꾸는 별도 버튼을 만들되 quantity가 사라지지 않게 하세요.",
    warning:
      "전개 구문은 얕은 복사입니다. 중첩 객체를 수정한다면 바뀌는 깊이까지 새 객체를 만들어야 합니다.",
    mode: "jsx"
  },
  구조분해: {
    code: 'const menu = { name: "커피", price: 4000 };\nconst { name, price, option = "기본" } = menu;\n\nfunction label({ name, price = 0 }) {\n  return `${name}: ${price}원`;\n}\n\nconsole.log(name, option);\nconsole.log(label(menu));\n',
    explain: [
      "객체 구조분해는 속성 이름을 기준으로 값을 꺼냅니다. 함수의 매개변수 자리에서 구조분해하면 전달받은 객체의 필요한 속성을 바로 이름으로 사용할 수 있습니다.",
      "기본값은 해당 값이 undefined일 때 사용합니다. null이나 0을 모두 기본값으로 바꾸는 규칙은 아닙니다."
    ],
    flow: [
      "menu에서 name과 price를 꺼냅니다.",
      "option은 없으므로 기본 문자열을 사용합니다.",
      "label은 전달받은 객체를 매개변수 자리에서 구조분해합니다."
    ],
    result: "콘솔에 커피 기본, 커피: 4000원이 출력됩니다.",
    edit: 'menu에 option: "따뜻하게"를 추가하고 기본값 대신 어떤 값이 쓰이는지 확인하세요.',
    warning: "배열 구조분해는 위치, 객체 구조분해는 속성 이름이 기준입니다.",
    mode: "console"
  },
  "매개변수 구조분해": {
    code: 'const menu = { name: "커피", price: 4000 };\nconst { name, price, option = "기본" } = menu;\n\nfunction label({ name, price = 0 }) {\n  return `${name}: ${price}원`;\n}\n\nconsole.log(name, option);\nconsole.log(label(menu));\n',
    explain: [
      "객체 구조분해는 속성 이름을 기준으로 값을 꺼냅니다. 함수의 매개변수 자리에서 구조분해하면 전달받은 객체의 필요한 속성을 바로 이름으로 사용할 수 있습니다.",
      "기본값은 해당 값이 undefined일 때 사용합니다. null이나 0을 모두 기본값으로 바꾸는 규칙은 아닙니다."
    ],
    flow: [
      "menu에서 name과 price를 꺼냅니다.",
      "option은 없으므로 기본 문자열을 사용합니다.",
      "label은 전달받은 객체를 매개변수 자리에서 구조분해합니다."
    ],
    result: "콘솔에 커피 기본, 커피: 4000원이 출력됩니다.",
    edit: 'menu에 option: "따뜻하게"를 추가하고 기본값 대신 어떤 값이 쓰이는지 확인하세요.',
    warning: "배열 구조분해는 위치, 객체 구조분해는 속성 이름이 기준입니다.",
    mode: "console"
  },
  기본값: {
    code: 'const menu = { name: "커피", price: 4000 };\nconst { name, price, option = "기본" } = menu;\n\nfunction label({ name, price = 0 }) {\n  return `${name}: ${price}원`;\n}\n\nconsole.log(name, option);\nconsole.log(label(menu));\n',
    explain: [
      "객체 구조분해는 속성 이름을 기준으로 값을 꺼냅니다. 함수의 매개변수 자리에서 구조분해하면 전달받은 객체의 필요한 속성을 바로 이름으로 사용할 수 있습니다.",
      "기본값은 해당 값이 undefined일 때 사용합니다. null이나 0을 모두 기본값으로 바꾸는 규칙은 아닙니다."
    ],
    flow: [
      "menu에서 name과 price를 꺼냅니다.",
      "option은 없으므로 기본 문자열을 사용합니다.",
      "label은 전달받은 객체를 매개변수 자리에서 구조분해합니다."
    ],
    result: "콘솔에 커피 기본, 커피: 4000원이 출력됩니다.",
    edit: 'menu에 option: "따뜻하게"를 추가하고 기본값 대신 어떤 값이 쓰이는지 확인하세요.',
    warning: "배열 구조분해는 위치, 객체 구조분해는 속성 이름이 기준입니다.",
    mode: "console"
  },
  "전개 구문": {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "변수에 객체를 대입하면 같은 객체를 가리키는 참조가 전달됩니다. 전개 구문으로 만든 새 객체는 원래 객체와 다른 객체입니다.",
      "위 예제는 최상위 속성만 있는 객체입니다. 내부에 객체나 배열이 들어 있다면 전개 구문만으로 그 내부까지 새 객체가 되는 것은 아닙니다."
    ],
    flow: [
      "same과 original은 같은 객체를 가리킵니다.",
      "copied는 원래 속성을 펼친 뒤 quantity를 바꾼 새 객체입니다.",
      "원본 수량은 바뀌지 않았는지 비교합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning: "같은 참조를 가진 변수의 속성을 바꾸면 원본에서도 바뀐 값이 보입니다.",
    mode: "console"
  },
  "얕은 복사": {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "변수에 객체를 대입하면 같은 객체를 가리키는 참조가 전달됩니다. 전개 구문으로 만든 새 객체는 원래 객체와 다른 객체입니다.",
      "위 예제는 최상위 속성만 있는 객체입니다. 내부에 객체나 배열이 들어 있다면 전개 구문만으로 그 내부까지 새 객체가 되는 것은 아닙니다."
    ],
    flow: [
      "same과 original은 같은 객체를 가리킵니다.",
      "copied는 원래 속성을 펼친 뒤 quantity를 바꾼 새 객체입니다.",
      "원본 수량은 바뀌지 않았는지 비교합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning: "같은 참조를 가진 변수의 속성을 바꾸면 원본에서도 바뀐 값이 보입니다.",
    mode: "console"
  },
  "불변성과 참조": {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "변수에 객체를 대입하면 같은 객체를 가리키는 참조가 전달됩니다. 전개 구문으로 만든 새 객체는 원래 객체와 다른 객체입니다.",
      "위 예제는 최상위 속성만 있는 객체입니다. 내부에 객체나 배열이 들어 있다면 전개 구문만으로 그 내부까지 새 객체가 되는 것은 아닙니다."
    ],
    flow: [
      "same과 original은 같은 객체를 가리킵니다.",
      "copied는 원래 속성을 펼친 뒤 quantity를 바꾼 새 객체입니다.",
      "원본 수량은 바뀌지 않았는지 비교합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning: "같은 참조를 가진 변수의 속성을 바꾸면 원본에서도 바뀐 값이 보입니다.",
    mode: "console"
  },
  참조: {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "변수에 객체를 대입하면 같은 객체를 가리키는 참조가 전달됩니다. 전개 구문으로 만든 새 객체는 원래 객체와 다른 객체입니다.",
      "위 예제는 최상위 속성만 있는 객체입니다. 내부에 객체나 배열이 들어 있다면 전개 구문만으로 그 내부까지 새 객체가 되는 것은 아닙니다."
    ],
    flow: [
      "same과 original은 같은 객체를 가리킵니다.",
      "copied는 원래 속성을 펼친 뒤 quantity를 바꾼 새 객체입니다.",
      "원본 수량은 바뀌지 않았는지 비교합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning: "같은 참조를 가진 변수의 속성을 바꾸면 원본에서도 바뀐 값이 보입니다.",
    mode: "console"
  },
  map: {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst labels = menus.map(\n  (menu, index) => `${index + 1}. ${menu.name}`\n);\nconsole.log(labels);\n',
    explain: [
      "map은 배열의 각 항목에 콜백 함수를 적용하고 반환값들로 새 배열을 만듭니다. 콜백의 첫 인수는 현재 항목, 두 번째는 인덱스입니다.",
      "콜백은 우리가 지금 호출한 결과가 아니라 다른 함수가 필요할 때 호출하도록 전달한 함수입니다. 여기서는 map이 각 항목마다 호출합니다."
    ],
    flow: [
      "첫 항목이 menu에, 0이 index에 들어옵니다.",
      "콜백이 만든 문자열을 새 배열의 첫 항목에 넣습니다.",
      "남은 항목에도 같은 작업을 수행합니다."
    ],
    result: '새 배열은 ["1. 커피", "2. 빵"]입니다.',
    edit: "이름 대신 `${menu.name}: ${menu.price}원`을 반환하도록 바꾸세요.",
    warning:
      "중괄호 본문을 쓴 화살표 함수에서는 return을 빠뜨리면 undefined가 반환됩니다.",
    mode: "console"
  },
  "콜백 함수": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst labels = menus.map(\n  (menu, index) => `${index + 1}. ${menu.name}`\n);\nconsole.log(labels);\n',
    explain: [
      "map은 배열의 각 항목에 콜백 함수를 적용하고 반환값들로 새 배열을 만듭니다. 콜백의 첫 인수는 현재 항목, 두 번째는 인덱스입니다.",
      "콜백은 우리가 지금 호출한 결과가 아니라 다른 함수가 필요할 때 호출하도록 전달한 함수입니다. 여기서는 map이 각 항목마다 호출합니다."
    ],
    flow: [
      "첫 항목이 menu에, 0이 index에 들어옵니다.",
      "콜백이 만든 문자열을 새 배열의 첫 항목에 넣습니다.",
      "남은 항목에도 같은 작업을 수행합니다."
    ],
    result: '새 배열은 ["1. 커피", "2. 빵"]입니다.',
    edit: "이름 대신 `${menu.name}: ${menu.price}원`을 반환하도록 바꾸세요.",
    warning:
      "중괄호 본문을 쓴 화살표 함수에서는 return을 빠뜨리면 undefined가 반환됩니다.",
    mode: "console"
  },
  "콜백의 매개변수": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst labels = menus.map(\n  (menu, index) => `${index + 1}. ${menu.name}`\n);\nconsole.log(labels);\n',
    explain: [
      "map은 배열의 각 항목에 콜백 함수를 적용하고 반환값들로 새 배열을 만듭니다. 콜백의 첫 인수는 현재 항목, 두 번째는 인덱스입니다.",
      "콜백은 우리가 지금 호출한 결과가 아니라 다른 함수가 필요할 때 호출하도록 전달한 함수입니다. 여기서는 map이 각 항목마다 호출합니다."
    ],
    flow: [
      "첫 항목이 menu에, 0이 index에 들어옵니다.",
      "콜백이 만든 문자열을 새 배열의 첫 항목에 넣습니다.",
      "남은 항목에도 같은 작업을 수행합니다."
    ],
    result: '새 배열은 ["1. 커피", "2. 빵"]입니다.',
    edit: "이름 대신 `${menu.name}: ${menu.price}원`을 반환하도록 바꾸세요.",
    warning:
      "중괄호 본문을 쓴 화살표 함수에서는 return을 빠뜨리면 undefined가 반환됩니다.",
    mode: "console"
  },
  filter: {
    code: "const prices = [3000, 4000, 5000];\nconst affordable = prices.filter((price) => price <= 4000);\nconsole.log(affordable);\nconsole.log(prices);\n",
    explain: [
      "filter는 조건을 만족하는 항목만 담은 새 배열을 만듭니다. 조건에 맞는지 판단할 콜백이 truthy인 값을 반환한 항목이 남습니다."
    ],
    flow: [
      "3000과 4000은 조건을 만족합니다.",
      "5000은 조건을 만족하지 않아 제외됩니다.",
      "원본 배열 자체는 그대로입니다."
    ],
    result: "결과는 [3000, 4000], 원본은 [3000, 4000, 5000]입니다.",
    edit: "<=를 <로 바꾸고 4000이 남는지 확인하세요.",
    warning:
      "filter는 조건에 맞는 첫 항목 하나가 아니라 배열을 반환합니다. 한 항목이 필요하면 find와 비교하세요.",
    mode: "console"
  },
  reduce: {
    code: "const quantities = [1, 2, 3];\nconst total = quantities.reduce((sum, quantity) => {\n  return sum + quantity;\n}, 0);\nconsole.log(total);\n",
    explain: [
      "reduce는 각 항목을 순서대로 처리하면서 누적값을 다음 호출로 넘깁니다. 마지막의 0은 처음 누적값입니다. 빈 배열도 다룰 수 있도록 초기값을 명시했습니다."
    ],
    flow: [
      "첫 호출은 0 + 1로 1을 반환합니다.",
      "다음 호출은 1 + 2로 3을 반환합니다.",
      "마지막 호출은 3 + 3으로 6을 반환합니다."
    ],
    result: "총합 6이 출력됩니다.",
    edit: "배열을 빈 배열로 바꾸고 초기값이 어떤 결과를 만드는지 확인하세요.",
    warning:
      "콜백에서 다음 누적값을 반드시 반환하세요. 초기값 없이 빈 배열을 reduce하면 오류가 발생합니다.",
    mode: "console"
  },
  "누적값과 초기값": {
    code: "const quantities = [1, 2, 3];\nconst total = quantities.reduce((sum, quantity) => {\n  return sum + quantity;\n}, 0);\nconsole.log(total);\n",
    explain: [
      "reduce는 각 항목을 순서대로 처리하면서 누적값을 다음 호출로 넘깁니다. 마지막의 0은 처음 누적값입니다. 빈 배열도 다룰 수 있도록 초기값을 명시했습니다."
    ],
    flow: [
      "첫 호출은 0 + 1로 1을 반환합니다.",
      "다음 호출은 1 + 2로 3을 반환합니다.",
      "마지막 호출은 3 + 3으로 6을 반환합니다."
    ],
    result: "총합 6이 출력됩니다.",
    edit: "배열을 빈 배열로 바꾸고 초기값이 어떤 결과를 만드는지 확인하세요.",
    warning:
      "콜백에서 다음 누적값을 반드시 반환하세요. 초기값 없이 빈 배열을 reduce하면 오류가 발생합니다.",
    mode: "console"
  },
  누적값: {
    code: "const quantities = [1, 2, 3];\nconst total = quantities.reduce((sum, quantity) => {\n  return sum + quantity;\n}, 0);\nconsole.log(total);\n",
    explain: [
      "reduce는 각 항목을 순서대로 처리하면서 누적값을 다음 호출로 넘깁니다. 마지막의 0은 처음 누적값입니다. 빈 배열도 다룰 수 있도록 초기값을 명시했습니다."
    ],
    flow: [
      "첫 호출은 0 + 1로 1을 반환합니다.",
      "다음 호출은 1 + 2로 3을 반환합니다.",
      "마지막 호출은 3 + 3으로 6을 반환합니다."
    ],
    result: "총합 6이 출력됩니다.",
    edit: "배열을 빈 배열로 바꾸고 초기값이 어떤 결과를 만드는지 확인하세요.",
    warning:
      "콜백에서 다음 누적값을 반드시 반환하세요. 초기값 없이 빈 배열을 reduce하면 오류가 발생합니다.",
    mode: "console"
  },
  함수: {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "함수 선언은 재사용할 동작을 정의하는 코드이고, 호출은 그 동작을 실제로 실행하는 코드입니다. price와 quantity는 매개변수, 4000과 2는 호출할 때 전달한 인수입니다.",
      "return은 계산한 결과를 호출한 곳에 돌려주고 현재 함수 실행을 끝냅니다. 함수 안의 total은 그 함수 내부에서 사용하는 지역 변수입니다."
    ],
    flow: [
      "calculateTotal(4000, 2)가 두 인수를 전달합니다.",
      "함수 안에서 곱셈을 수행합니다.",
      "return으로 받은 8000을 result에 저장합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning: "console.log로 출력하는 것과 return으로 결과를 돌려주는 것은 다릅니다.",
    mode: "console"
  },
  "함수 선언과 호출": {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "함수 선언은 재사용할 동작을 정의하는 코드이고, 호출은 그 동작을 실제로 실행하는 코드입니다. price와 quantity는 매개변수, 4000과 2는 호출할 때 전달한 인수입니다.",
      "return은 계산한 결과를 호출한 곳에 돌려주고 현재 함수 실행을 끝냅니다. 함수 안의 total은 그 함수 내부에서 사용하는 지역 변수입니다."
    ],
    flow: [
      "calculateTotal(4000, 2)가 두 인수를 전달합니다.",
      "함수 안에서 곱셈을 수행합니다.",
      "return으로 받은 8000을 result에 저장합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning: "console.log로 출력하는 것과 return으로 결과를 돌려주는 것은 다릅니다.",
    mode: "console"
  },
  "매개변수와 인수": {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "함수 선언은 재사용할 동작을 정의하는 코드이고, 호출은 그 동작을 실제로 실행하는 코드입니다. price와 quantity는 매개변수, 4000과 2는 호출할 때 전달한 인수입니다.",
      "return은 계산한 결과를 호출한 곳에 돌려주고 현재 함수 실행을 끝냅니다. 함수 안의 total은 그 함수 내부에서 사용하는 지역 변수입니다."
    ],
    flow: [
      "calculateTotal(4000, 2)가 두 인수를 전달합니다.",
      "함수 안에서 곱셈을 수행합니다.",
      "return으로 받은 8000을 result에 저장합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning: "console.log로 출력하는 것과 return으로 결과를 돌려주는 것은 다릅니다.",
    mode: "console"
  },
  return: {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "함수 선언은 재사용할 동작을 정의하는 코드이고, 호출은 그 동작을 실제로 실행하는 코드입니다. price와 quantity는 매개변수, 4000과 2는 호출할 때 전달한 인수입니다.",
      "return은 계산한 결과를 호출한 곳에 돌려주고 현재 함수 실행을 끝냅니다. 함수 안의 total은 그 함수 내부에서 사용하는 지역 변수입니다."
    ],
    flow: [
      "calculateTotal(4000, 2)가 두 인수를 전달합니다.",
      "함수 안에서 곱셈을 수행합니다.",
      "return으로 받은 8000을 result에 저장합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning: "console.log로 출력하는 것과 return으로 결과를 돌려주는 것은 다릅니다.",
    mode: "console"
  },
  "지역 변수": {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "함수 선언은 재사용할 동작을 정의하는 코드이고, 호출은 그 동작을 실제로 실행하는 코드입니다. price와 quantity는 매개변수, 4000과 2는 호출할 때 전달한 인수입니다.",
      "return은 계산한 결과를 호출한 곳에 돌려주고 현재 함수 실행을 끝냅니다. 함수 안의 total은 그 함수 내부에서 사용하는 지역 변수입니다."
    ],
    flow: [
      "calculateTotal(4000, 2)가 두 인수를 전달합니다.",
      "함수 안에서 곱셈을 수행합니다.",
      "return으로 받은 8000을 result에 저장합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning: "console.log로 출력하는 것과 return으로 결과를 돌려주는 것은 다릅니다.",
    mode: "console"
  },
  변수: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  "const / let": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  "선언과 대입": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  자료형: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  typeof: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  "number()": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  문자열: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  "숫자와 불리언": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  nan: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      "입력칸에서 읽은 값은 보통 문자열입니다. Number로 숫자로 바꾼 뒤 계산하면 문자열 이어 붙이기와 숫자 연산을 구분하기 쉽습니다.",
      "const는 변수에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const로 선언한 객체의 내부까지 자동으로 변경 금지되는 것은 아닙니다."
    ],
    flow: [
      '문자열 "2"를 숫자 2로 바꿉니다.',
      "단가와 수량을 곱해 8000을 계산합니다.",
      "let으로 선언한 total에 새 계산 결과를 대입합니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      'NaN 여부는 Number.isNaN(value)로 확인합니다. Number("")는 0이므로 숫자 변환 성공만으로 올바른 입력이라고 판단하지 않습니다.',
    mode: "console"
  },
  배열: {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "배열은 순서가 있는 값의 목록이고, 객체는 속성 이름과 값의 묶음입니다. 메뉴 배열 안의 각 객체가 한 메뉴를 나타냅니다.",
      "배열은 0번부터 시작하는 인덱스로 항목을 찾고, 객체는 name처럼 속성 이름으로 값을 찾습니다. localStorage의 키·값은 문자열 저장 공간이라는 다른 문맥이므로 연결된 저장소 수업도 함께 확인하세요."
    ],
    flow: [
      "menus.length는 항목 수를 읽습니다.",
      "menus[0]으로 첫 객체를 찾고 .name으로 이름을 읽습니다.",
      "둘째 객체의 price는 대괄호 표기로도 읽을 수 있습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "menus[menus.length]는 마지막 항목이 아니라 범위를 벗어난 위치입니다. 마지막 인덱스는 length - 1입니다.",
    mode: "console"
  },
  객체: {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "배열은 순서가 있는 값의 목록이고, 객체는 속성 이름과 값의 묶음입니다. 메뉴 배열 안의 각 객체가 한 메뉴를 나타냅니다.",
      "배열은 0번부터 시작하는 인덱스로 항목을 찾고, 객체는 name처럼 속성 이름으로 값을 찾습니다. localStorage의 키·값은 문자열 저장 공간이라는 다른 문맥이므로 연결된 저장소 수업도 함께 확인하세요."
    ],
    flow: [
      "menus.length는 항목 수를 읽습니다.",
      "menus[0]으로 첫 객체를 찾고 .name으로 이름을 읽습니다.",
      "둘째 객체의 price는 대괄호 표기로도 읽을 수 있습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "menus[menus.length]는 마지막 항목이 아니라 범위를 벗어난 위치입니다. 마지막 인덱스는 length - 1입니다.",
    mode: "console"
  },
  "객체 배열": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "배열은 순서가 있는 값의 목록이고, 객체는 속성 이름과 값의 묶음입니다. 메뉴 배열 안의 각 객체가 한 메뉴를 나타냅니다.",
      "배열은 0번부터 시작하는 인덱스로 항목을 찾고, 객체는 name처럼 속성 이름으로 값을 찾습니다. localStorage의 키·값은 문자열 저장 공간이라는 다른 문맥이므로 연결된 저장소 수업도 함께 확인하세요."
    ],
    flow: [
      "menus.length는 항목 수를 읽습니다.",
      "menus[0]으로 첫 객체를 찾고 .name으로 이름을 읽습니다.",
      "둘째 객체의 price는 대괄호 표기로도 읽을 수 있습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "menus[menus.length]는 마지막 항목이 아니라 범위를 벗어난 위치입니다. 마지막 인덱스는 length - 1입니다.",
    mode: "console"
  },
  "인덱스와 length": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "배열은 순서가 있는 값의 목록이고, 객체는 속성 이름과 값의 묶음입니다. 메뉴 배열 안의 각 객체가 한 메뉴를 나타냅니다.",
      "배열은 0번부터 시작하는 인덱스로 항목을 찾고, 객체는 name처럼 속성 이름으로 값을 찾습니다. localStorage의 키·값은 문자열 저장 공간이라는 다른 문맥이므로 연결된 저장소 수업도 함께 확인하세요."
    ],
    flow: [
      "menus.length는 항목 수를 읽습니다.",
      "menus[0]으로 첫 객체를 찾고 .name으로 이름을 읽습니다.",
      "둘째 객체의 price는 대괄호 표기로도 읽을 수 있습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "menus[menus.length]는 마지막 항목이 아니라 범위를 벗어난 위치입니다. 마지막 인덱스는 length - 1입니다.",
    mode: "console"
  },
  "속성 접근": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "배열은 순서가 있는 값의 목록이고, 객체는 속성 이름과 값의 묶음입니다. 메뉴 배열 안의 각 객체가 한 메뉴를 나타냅니다.",
      "배열은 0번부터 시작하는 인덱스로 항목을 찾고, 객체는 name처럼 속성 이름으로 값을 찾습니다. localStorage의 키·값은 문자열 저장 공간이라는 다른 문맥이므로 연결된 저장소 수업도 함께 확인하세요."
    ],
    flow: [
      "menus.length는 항목 수를 읽습니다.",
      "menus[0]으로 첫 객체를 찾고 .name으로 이름을 읽습니다.",
      "둘째 객체의 price는 대괄호 표기로도 읽을 수 있습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "menus[menus.length]는 마지막 항목이 아니라 범위를 벗어난 위치입니다. 마지막 인덱스는 length - 1입니다.",
    mode: "console"
  },
  "키와 값": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "배열은 순서가 있는 값의 목록이고, 객체는 속성 이름과 값의 묶음입니다. 메뉴 배열 안의 각 객체가 한 메뉴를 나타냅니다.",
      "배열은 0번부터 시작하는 인덱스로 항목을 찾고, 객체는 name처럼 속성 이름으로 값을 찾습니다. localStorage의 키·값은 문자열 저장 공간이라는 다른 문맥이므로 연결된 저장소 수업도 함께 확인하세요."
    ],
    flow: [
      "menus.length는 항목 수를 읽습니다.",
      "menus[0]으로 첫 객체를 찾고 .name으로 이름을 읽습니다.",
      "둘째 객체의 price는 대괄호 표기로도 읽을 수 있습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "menus[menus.length]는 마지막 항목이 아니라 범위를 벗어난 위치입니다. 마지막 인덱스는 length - 1입니다.",
    mode: "console"
  },
  json: {
    code: 'const order = { menuId: "coffee", quantity: 2 };\nconst text = JSON.stringify(order);\nconst restored = JSON.parse(text);\nconsole.log(text);\nconsole.log(restored.quantity);\n',
    explain: [
      "JSON은 데이터를 문자로 표현하는 형식입니다. JavaScript 객체 자체와 JSON 문자열은 구분해야 합니다. stringify는 객체를 문자열로, parse는 JSON 문자열을 JavaScript 값으로 바꿉니다."
    ],
    flow: [
      "객체를 JSON.stringify에 전달합니다.",
      "문자열을 저장하거나 전송할 수 있습니다.",
      "JSON.parse로 다시 값으로 바꿔 속성을 읽습니다."
    ],
    result: "JSON 문자열과 수량 2가 출력됩니다.",
    edit: "JSON 문자열의 따옴표나 쉼표를 일부러 틀리게 만든 뒤 parse가 실패하는지 확인하세요.",
    warning:
      "JSON.parse가 성공해도 원하는 데이터 구조라는 보장은 없습니다. quantity가 숫자인지 등 구조와 값도 검사해야 합니다.",
    mode: "console"
  },
  "stringify / parse": {
    code: 'const order = { menuId: "coffee", quantity: 2 };\nconst text = JSON.stringify(order);\nconst restored = JSON.parse(text);\nconsole.log(text);\nconsole.log(restored.quantity);\n',
    explain: [
      "JSON은 데이터를 문자로 표현하는 형식입니다. JavaScript 객체 자체와 JSON 문자열은 구분해야 합니다. stringify는 객체를 문자열로, parse는 JSON 문자열을 JavaScript 값으로 바꿉니다."
    ],
    flow: [
      "객체를 JSON.stringify에 전달합니다.",
      "문자열을 저장하거나 전송할 수 있습니다.",
      "JSON.parse로 다시 값으로 바꿔 속성을 읽습니다."
    ],
    result: "JSON 문자열과 수량 2가 출력됩니다.",
    edit: "JSON 문자열의 따옴표나 쉼표를 일부러 틀리게 만든 뒤 parse가 실패하는지 확인하세요.",
    warning:
      "JSON.parse가 성공해도 원하는 데이터 구조라는 보장은 없습니다. quantity가 숫자인지 등 구조와 값도 검사해야 합니다.",
    mode: "console"
  },
  "직렬화와 역직렬화": {
    code: 'const order = { menuId: "coffee", quantity: 2 };\nconst text = JSON.stringify(order);\nconst restored = JSON.parse(text);\nconsole.log(text);\nconsole.log(restored.quantity);\n',
    explain: [
      "JSON은 데이터를 문자로 표현하는 형식입니다. JavaScript 객체 자체와 JSON 문자열은 구분해야 합니다. stringify는 객체를 문자열로, parse는 JSON 문자열을 JavaScript 값으로 바꿉니다."
    ],
    flow: [
      "객체를 JSON.stringify에 전달합니다.",
      "문자열을 저장하거나 전송할 수 있습니다.",
      "JSON.parse로 다시 값으로 바꿔 속성을 읽습니다."
    ],
    result: "JSON 문자열과 수량 2가 출력됩니다.",
    edit: "JSON 문자열의 따옴표나 쉼표를 일부러 틀리게 만든 뒤 parse가 실패하는지 확인하세요.",
    warning:
      "JSON.parse가 성공해도 원하는 데이터 구조라는 보장은 없습니다. quantity가 숫자인지 등 구조와 값도 검사해야 합니다.",
    mode: "console"
  },
  조건식: {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "조건식은 참·거짓으로 판단할 표현식입니다. 예제는 정수인지, 최솟값 이상인지, 최댓값 이하인지 모두 만족해야 통과합니다.",
      '=는 값을 대입하고, ===는 타입을 강제로 바꾸지 않고 비교합니다. 숫자 20과 문자열 "20"은 엄격한 비교에서 같지 않습니다.'
    ],
    flow: [
      "Number.isInteger로 정수인지 검사합니다.",
      "&&로 연결한 범위 조건을 확인합니다.",
      "조건이 참이면 첫 블록, 거짓이면 else 블록을 실행합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "클라이언트에서 이 검사를 하더라도 서버는 받은 입력을 다시 검사해야 합니다.",
    mode: "console"
  },
  "if / else if / else": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "조건식은 참·거짓으로 판단할 표현식입니다. 예제는 정수인지, 최솟값 이상인지, 최댓값 이하인지 모두 만족해야 통과합니다.",
      '=는 값을 대입하고, ===는 타입을 강제로 바꾸지 않고 비교합니다. 숫자 20과 문자열 "20"은 엄격한 비교에서 같지 않습니다.'
    ],
    flow: [
      "Number.isInteger로 정수인지 검사합니다.",
      "&&로 연결한 범위 조건을 확인합니다.",
      "조건이 참이면 첫 블록, 거짓이면 else 블록을 실행합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "클라이언트에서 이 검사를 하더라도 서버는 받은 입력을 다시 검사해야 합니다.",
    mode: "console"
  },
  "비교 연산자": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "조건식은 참·거짓으로 판단할 표현식입니다. 예제는 정수인지, 최솟값 이상인지, 최댓값 이하인지 모두 만족해야 통과합니다.",
      '=는 값을 대입하고, ===는 타입을 강제로 바꾸지 않고 비교합니다. 숫자 20과 문자열 "20"은 엄격한 비교에서 같지 않습니다.'
    ],
    flow: [
      "Number.isInteger로 정수인지 검사합니다.",
      "&&로 연결한 범위 조건을 확인합니다.",
      "조건이 참이면 첫 블록, 거짓이면 else 블록을 실행합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "클라이언트에서 이 검사를 하더라도 서버는 받은 입력을 다시 검사해야 합니다.",
    mode: "console"
  },
  "엄격한 비교": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "조건식은 참·거짓으로 판단할 표현식입니다. 예제는 정수인지, 최솟값 이상인지, 최댓값 이하인지 모두 만족해야 통과합니다.",
      '=는 값을 대입하고, ===는 타입을 강제로 바꾸지 않고 비교합니다. 숫자 20과 문자열 "20"은 엄격한 비교에서 같지 않습니다.'
    ],
    flow: [
      "Number.isInteger로 정수인지 검사합니다.",
      "&&로 연결한 범위 조건을 확인합니다.",
      "조건이 참이면 첫 블록, 거짓이면 else 블록을 실행합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "클라이언트에서 이 검사를 하더라도 서버는 받은 입력을 다시 검사해야 합니다.",
    mode: "console"
  },
  경계값: {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "조건식은 참·거짓으로 판단할 표현식입니다. 예제는 정수인지, 최솟값 이상인지, 최댓값 이하인지 모두 만족해야 통과합니다.",
      '=는 값을 대입하고, ===는 타입을 강제로 바꾸지 않고 비교합니다. 숫자 20과 문자열 "20"은 엄격한 비교에서 같지 않습니다.'
    ],
    flow: [
      "Number.isInteger로 정수인지 검사합니다.",
      "&&로 연결한 범위 조건을 확인합니다.",
      "조건이 참이면 첫 블록, 거짓이면 else 블록을 실행합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "클라이언트에서 이 검사를 하더라도 서버는 받은 입력을 다시 검사해야 합니다.",
    mode: "console"
  },
  "number.isinteger": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "조건식은 참·거짓으로 판단할 표현식입니다. 예제는 정수인지, 최솟값 이상인지, 최댓값 이하인지 모두 만족해야 통과합니다.",
      '=는 값을 대입하고, ===는 타입을 강제로 바꾸지 않고 비교합니다. 숫자 20과 문자열 "20"은 엄격한 비교에서 같지 않습니다.'
    ],
    flow: [
      "Number.isInteger로 정수인지 검사합니다.",
      "&&로 연결한 범위 조건을 확인합니다.",
      "조건이 참이면 첫 블록, 거짓이면 else 블록을 실행합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "클라이언트에서 이 검사를 하더라도 서버는 받은 입력을 다시 검사해야 합니다.",
    mode: "console"
  },
  "대입과 비교": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "조건식은 참·거짓으로 판단할 표현식입니다. 예제는 정수인지, 최솟값 이상인지, 최댓값 이하인지 모두 만족해야 통과합니다.",
      '=는 값을 대입하고, ===는 타입을 강제로 바꾸지 않고 비교합니다. 숫자 20과 문자열 "20"은 엄격한 비교에서 같지 않습니다.'
    ],
    flow: [
      "Number.isInteger로 정수인지 검사합니다.",
      "&&로 연결한 범위 조건을 확인합니다.",
      "조건이 참이면 첫 블록, 거짓이면 else 블록을 실행합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "클라이언트에서 이 검사를 하더라도 서버는 받은 입력을 다시 검사해야 합니다.",
    mode: "console"
  },
  dom: {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "DOM은 브라우저가 HTML을 읽어 만든 문서 객체 구조입니다. querySelector는 CSS 선택자로 첫 요소를 찾고, textContent는 해당 요소의 글자를 읽거나 바꿉니다.",
      "찾는 요소가 없으면 null이 반환됩니다. 이 상태에서 .textContent에 접근하면 오류가 나므로 선택자·실행 시점·존재 여부를 확인합니다."
    ],
    flow: [
      "브라우저가 h2 요소를 만듭니다.",
      "스크립트가 #total 요소를 찾습니다.",
      "찾은 요소의 글자를 새 문구로 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "사용자 입력을 글자로 보여 줄 때는 innerHTML로 HTML을 해석시키는 대신 textContent를 사용하세요.",
    mode: "html"
  },
  queryselector: {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "DOM은 브라우저가 HTML을 읽어 만든 문서 객체 구조입니다. querySelector는 CSS 선택자로 첫 요소를 찾고, textContent는 해당 요소의 글자를 읽거나 바꿉니다.",
      "찾는 요소가 없으면 null이 반환됩니다. 이 상태에서 .textContent에 접근하면 오류가 나므로 선택자·실행 시점·존재 여부를 확인합니다."
    ],
    flow: [
      "브라우저가 h2 요소를 만듭니다.",
      "스크립트가 #total 요소를 찾습니다.",
      "찾은 요소의 글자를 새 문구로 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "사용자 입력을 글자로 보여 줄 때는 innerHTML로 HTML을 해석시키는 대신 textContent를 사용하세요.",
    mode: "html"
  },
  textcontent: {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "DOM은 브라우저가 HTML을 읽어 만든 문서 객체 구조입니다. querySelector는 CSS 선택자로 첫 요소를 찾고, textContent는 해당 요소의 글자를 읽거나 바꿉니다.",
      "찾는 요소가 없으면 null이 반환됩니다. 이 상태에서 .textContent에 접근하면 오류가 나므로 선택자·실행 시점·존재 여부를 확인합니다."
    ],
    flow: [
      "브라우저가 h2 요소를 만듭니다.",
      "스크립트가 #total 요소를 찾습니다.",
      "찾은 요소의 글자를 새 문구로 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "사용자 입력을 글자로 보여 줄 때는 innerHTML로 HTML을 해석시키는 대신 textContent를 사용하세요.",
    mode: "html"
  },
  "텍스트와 html의 차이": {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "DOM은 브라우저가 HTML을 읽어 만든 문서 객체 구조입니다. querySelector는 CSS 선택자로 첫 요소를 찾고, textContent는 해당 요소의 글자를 읽거나 바꿉니다.",
      "찾는 요소가 없으면 null이 반환됩니다. 이 상태에서 .textContent에 접근하면 오류가 나므로 선택자·실행 시점·존재 여부를 확인합니다."
    ],
    flow: [
      "브라우저가 h2 요소를 만듭니다.",
      "스크립트가 #total 요소를 찾습니다.",
      "찾은 요소의 글자를 새 문구로 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "사용자 입력을 글자로 보여 줄 때는 innerHTML로 HTML을 해석시키는 대신 textContent를 사용하세요.",
    mode: "html"
  },
  "null 접근 오류": {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "DOM은 브라우저가 HTML을 읽어 만든 문서 객체 구조입니다. querySelector는 CSS 선택자로 첫 요소를 찾고, textContent는 해당 요소의 글자를 읽거나 바꿉니다.",
      "찾는 요소가 없으면 null이 반환됩니다. 이 상태에서 .textContent에 접근하면 오류가 나므로 선택자·실행 시점·존재 여부를 확인합니다."
    ],
    flow: [
      "브라우저가 h2 요소를 만듭니다.",
      "스크립트가 #total 요소를 찾습니다.",
      "찾은 요소의 글자를 새 문구로 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "사용자 입력을 글자로 보여 줄 때는 innerHTML로 HTML을 해석시키는 대신 textContent를 사용하세요.",
    mode: "html"
  },
  이벤트: {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "이벤트 핸들러는 클릭이나 입력 같은 사건이 발생했을 때 호출할 함수입니다. addEventListener는 사건의 종류와 그때 실행할 함수를 연결합니다.",
      "입력값은 사용자가 바꿀 수 있으므로 클릭했을 때 읽어야 현재 값을 얻습니다. 이벤트 객체에는 사건 종류와 대상 등 실행 시점의 정보가 들어 있습니다."
    ],
    flow: [
      "초기 화면에서 클릭 핸들러를 등록합니다.",
      "사용자가 수량을 고친 뒤 확인을 누릅니다.",
      "핸들러가 그 시점의 입력 문자열을 읽어 화면에 표시합니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "함수를 등록하는 것과 함수를 지금 호출하는 것은 다릅니다. addEventListener의 두 번째 인수에는 함수를 전달하세요.",
    mode: "html"
  },
  "이벤트 핸들러": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "이벤트 핸들러는 클릭이나 입력 같은 사건이 발생했을 때 호출할 함수입니다. addEventListener는 사건의 종류와 그때 실행할 함수를 연결합니다.",
      "입력값은 사용자가 바꿀 수 있으므로 클릭했을 때 읽어야 현재 값을 얻습니다. 이벤트 객체에는 사건 종류와 대상 등 실행 시점의 정보가 들어 있습니다."
    ],
    flow: [
      "초기 화면에서 클릭 핸들러를 등록합니다.",
      "사용자가 수량을 고친 뒤 확인을 누릅니다.",
      "핸들러가 그 시점의 입력 문자열을 읽어 화면에 표시합니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "함수를 등록하는 것과 함수를 지금 호출하는 것은 다릅니다. addEventListener의 두 번째 인수에는 함수를 전달하세요.",
    mode: "html"
  },
  addeventlistener: {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "이벤트 핸들러는 클릭이나 입력 같은 사건이 발생했을 때 호출할 함수입니다. addEventListener는 사건의 종류와 그때 실행할 함수를 연결합니다.",
      "입력값은 사용자가 바꿀 수 있으므로 클릭했을 때 읽어야 현재 값을 얻습니다. 이벤트 객체에는 사건 종류와 대상 등 실행 시점의 정보가 들어 있습니다."
    ],
    flow: [
      "초기 화면에서 클릭 핸들러를 등록합니다.",
      "사용자가 수량을 고친 뒤 확인을 누릅니다.",
      "핸들러가 그 시점의 입력 문자열을 읽어 화면에 표시합니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "함수를 등록하는 것과 함수를 지금 호출하는 것은 다릅니다. addEventListener의 두 번째 인수에는 함수를 전달하세요.",
    mode: "html"
  },
  "이벤트 객체": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "이벤트 핸들러는 클릭이나 입력 같은 사건이 발생했을 때 호출할 함수입니다. addEventListener는 사건의 종류와 그때 실행할 함수를 연결합니다.",
      "입력값은 사용자가 바꿀 수 있으므로 클릭했을 때 읽어야 현재 값을 얻습니다. 이벤트 객체에는 사건 종류와 대상 등 실행 시점의 정보가 들어 있습니다."
    ],
    flow: [
      "초기 화면에서 클릭 핸들러를 등록합니다.",
      "사용자가 수량을 고친 뒤 확인을 누릅니다.",
      "핸들러가 그 시점의 입력 문자열을 읽어 화면에 표시합니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "함수를 등록하는 것과 함수를 지금 호출하는 것은 다릅니다. addEventListener의 두 번째 인수에는 함수를 전달하세요.",
    mode: "html"
  },
  "이벤트 대상": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "이벤트 핸들러는 클릭이나 입력 같은 사건이 발생했을 때 호출할 함수입니다. addEventListener는 사건의 종류와 그때 실행할 함수를 연결합니다.",
      "입력값은 사용자가 바꿀 수 있으므로 클릭했을 때 읽어야 현재 값을 얻습니다. 이벤트 객체에는 사건 종류와 대상 등 실행 시점의 정보가 들어 있습니다."
    ],
    flow: [
      "초기 화면에서 클릭 핸들러를 등록합니다.",
      "사용자가 수량을 고친 뒤 확인을 누릅니다.",
      "핸들러가 그 시점의 입력 문자열을 읽어 화면에 표시합니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "함수를 등록하는 것과 함수를 지금 호출하는 것은 다릅니다. addEventListener의 두 번째 인수에는 함수를 전달하세요.",
    mode: "html"
  },
  "입력값 읽는 시점": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "이벤트 핸들러는 클릭이나 입력 같은 사건이 발생했을 때 호출할 함수입니다. addEventListener는 사건의 종류와 그때 실행할 함수를 연결합니다.",
      "입력값은 사용자가 바꿀 수 있으므로 클릭했을 때 읽어야 현재 값을 얻습니다. 이벤트 객체에는 사건 종류와 대상 등 실행 시점의 정보가 들어 있습니다."
    ],
    flow: [
      "초기 화면에서 클릭 핸들러를 등록합니다.",
      "사용자가 수량을 고친 뒤 확인을 누릅니다.",
      "핸들러가 그 시점의 입력 문자열을 읽어 화면에 표시합니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "함수를 등록하는 것과 함수를 지금 호출하는 것은 다릅니다. addEventListener의 두 번째 인수에는 함수를 전달하세요.",
    mode: "html"
  },
  "async / await": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "Promise는 아직 끝나지 않은 작업의 성공 값이나 실패 이유를 다루는 객체입니다. async 함수는 Promise를 반환하며, await는 그 함수의 나머지 실행을 결과가 준비될 때까지 미룹니다.",
      "await가 브라우저 전체를 멈추는 것은 아닙니다. showPrice를 호출한 바깥 코드는 기다리는 동안에도 이어서 실행됩니다."
    ],
    flow: [
      "showPrice가 기다리는 중을 출력합니다.",
      "await에서 이 async 함수의 나머지 실행이 미뤄지고 바깥 로그가 실행됩니다.",
      "타이머가 resolve한 뒤 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "await는 일반적인 동기 반환으로 Promise를 바꾸는 기능이 아닙니다. 실패하면 예외로 이어지므로 오류 처리를 설계합니다.",
    mode: "console"
  },
  promise: {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "Promise는 아직 끝나지 않은 작업의 성공 값이나 실패 이유를 다루는 객체입니다. async 함수는 Promise를 반환하며, await는 그 함수의 나머지 실행을 결과가 준비될 때까지 미룹니다.",
      "await가 브라우저 전체를 멈추는 것은 아닙니다. showPrice를 호출한 바깥 코드는 기다리는 동안에도 이어서 실행됩니다."
    ],
    flow: [
      "showPrice가 기다리는 중을 출력합니다.",
      "await에서 이 async 함수의 나머지 실행이 미뤄지고 바깥 로그가 실행됩니다.",
      "타이머가 resolve한 뒤 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "await는 일반적인 동기 반환으로 Promise를 바꾸는 기능이 아닙니다. 실패하면 예외로 이어지므로 오류 처리를 설계합니다.",
    mode: "console"
  },
  비동기: {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "Promise는 아직 끝나지 않은 작업의 성공 값이나 실패 이유를 다루는 객체입니다. async 함수는 Promise를 반환하며, await는 그 함수의 나머지 실행을 결과가 준비될 때까지 미룹니다.",
      "await가 브라우저 전체를 멈추는 것은 아닙니다. showPrice를 호출한 바깥 코드는 기다리는 동안에도 이어서 실행됩니다."
    ],
    flow: [
      "showPrice가 기다리는 중을 출력합니다.",
      "await에서 이 async 함수의 나머지 실행이 미뤄지고 바깥 로그가 실행됩니다.",
      "타이머가 resolve한 뒤 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "await는 일반적인 동기 반환으로 Promise를 바꾸는 기능이 아닙니다. 실패하면 예외로 이어지므로 오류 처리를 설계합니다.",
    mode: "console"
  },
  "resolve / reject": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "Promise는 아직 끝나지 않은 작업의 성공 값이나 실패 이유를 다루는 객체입니다. async 함수는 Promise를 반환하며, await는 그 함수의 나머지 실행을 결과가 준비될 때까지 미룹니다.",
      "await가 브라우저 전체를 멈추는 것은 아닙니다. showPrice를 호출한 바깥 코드는 기다리는 동안에도 이어서 실행됩니다."
    ],
    flow: [
      "showPrice가 기다리는 중을 출력합니다.",
      "await에서 이 async 함수의 나머지 실행이 미뤄지고 바깥 로그가 실행됩니다.",
      "타이머가 resolve한 뒤 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "await는 일반적인 동기 반환으로 Promise를 바꾸는 기능이 아닙니다. 실패하면 예외로 이어지므로 오류 처리를 설계합니다.",
    mode: "console"
  },
  "대기·성공·실패": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "Promise는 아직 끝나지 않은 작업의 성공 값이나 실패 이유를 다루는 객체입니다. async 함수는 Promise를 반환하며, await는 그 함수의 나머지 실행을 결과가 준비될 때까지 미룹니다.",
      "await가 브라우저 전체를 멈추는 것은 아닙니다. showPrice를 호출한 바깥 코드는 기다리는 동안에도 이어서 실행됩니다."
    ],
    flow: [
      "showPrice가 기다리는 중을 출력합니다.",
      "await에서 이 async 함수의 나머지 실행이 미뤄지고 바깥 로그가 실행됩니다.",
      "타이머가 resolve한 뒤 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "await는 일반적인 동기 반환으로 Promise를 바꾸는 기능이 아닙니다. 실패하면 예외로 이어지므로 오류 처리를 설계합니다.",
    mode: "console"
  },
  "async 함수의 반환값": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "Promise는 아직 끝나지 않은 작업의 성공 값이나 실패 이유를 다루는 객체입니다. async 함수는 Promise를 반환하며, await는 그 함수의 나머지 실행을 결과가 준비될 때까지 미룹니다.",
      "await가 브라우저 전체를 멈추는 것은 아닙니다. showPrice를 호출한 바깥 코드는 기다리는 동안에도 이어서 실행됩니다."
    ],
    flow: [
      "showPrice가 기다리는 중을 출력합니다.",
      "await에서 이 async 함수의 나머지 실행이 미뤄지고 바깥 로그가 실행됩니다.",
      "타이머가 resolve한 뒤 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "await는 일반적인 동기 반환으로 Promise를 바꾸는 기능이 아닙니다. 실패하면 예외로 이어지므로 오류 처리를 설계합니다.",
    mode: "console"
  },
  api: {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "fetch는 요청 결과를 Response로 받습니다. response.ok는 HTTP 상태가 성공 범위인지 나타내고, response.json()은 응답 본문을 JSON으로 읽는 비동기 작업입니다.",
      "요청이 도착해 404나 500 응답을 받아도 fetch가 HTTP 상태만으로 자동 reject하는 것은 아닙니다. 그래서 ok를 검사해 실패로 처리합니다."
    ],
    flow: [
      "정해진 서버의 /api/menu 주소로 GET 요청을 보냅니다.",
      "HTTP 상태를 검사하고 실패 상태라면 오류를 던집니다.",
      "성공한 응답 본문을 읽어 호출한 곳에 반환합니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "CORS, 서버 중단, HTTP 실패, 잘못된 JSON을 같은 원인으로 뭉뚱그리지 말고 실패한 단계를 확인하세요.",
    mode: "console"
  },
  fetch: {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "fetch는 요청 결과를 Response로 받습니다. response.ok는 HTTP 상태가 성공 범위인지 나타내고, response.json()은 응답 본문을 JSON으로 읽는 비동기 작업입니다.",
      "요청이 도착해 404나 500 응답을 받아도 fetch가 HTTP 상태만으로 자동 reject하는 것은 아닙니다. 그래서 ok를 검사해 실패로 처리합니다."
    ],
    flow: [
      "정해진 서버의 /api/menu 주소로 GET 요청을 보냅니다.",
      "HTTP 상태를 검사하고 실패 상태라면 오류를 던집니다.",
      "성공한 응답 본문을 읽어 호출한 곳에 반환합니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "CORS, 서버 중단, HTTP 실패, 잘못된 JSON을 같은 원인으로 뭉뚱그리지 말고 실패한 단계를 확인하세요.",
    mode: "console"
  },
  "response.ok": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "fetch는 요청 결과를 Response로 받습니다. response.ok는 HTTP 상태가 성공 범위인지 나타내고, response.json()은 응답 본문을 JSON으로 읽는 비동기 작업입니다.",
      "요청이 도착해 404나 500 응답을 받아도 fetch가 HTTP 상태만으로 자동 reject하는 것은 아닙니다. 그래서 ok를 검사해 실패로 처리합니다."
    ],
    flow: [
      "정해진 서버의 /api/menu 주소로 GET 요청을 보냅니다.",
      "HTTP 상태를 검사하고 실패 상태라면 오류를 던집니다.",
      "성공한 응답 본문을 읽어 호출한 곳에 반환합니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "CORS, 서버 중단, HTTP 실패, 잘못된 JSON을 같은 원인으로 뭉뚱그리지 말고 실패한 단계를 확인하세요.",
    mode: "console"
  },
  "response.json()": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "fetch는 요청 결과를 Response로 받습니다. response.ok는 HTTP 상태가 성공 범위인지 나타내고, response.json()은 응답 본문을 JSON으로 읽는 비동기 작업입니다.",
      "요청이 도착해 404나 500 응답을 받아도 fetch가 HTTP 상태만으로 자동 reject하는 것은 아닙니다. 그래서 ok를 검사해 실패로 처리합니다."
    ],
    flow: [
      "정해진 서버의 /api/menu 주소로 GET 요청을 보냅니다.",
      "HTTP 상태를 검사하고 실패 상태라면 오류를 던집니다.",
      "성공한 응답 본문을 읽어 호출한 곳에 반환합니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "CORS, 서버 중단, HTTP 실패, 잘못된 JSON을 같은 원인으로 뭉뚱그리지 말고 실패한 단계를 확인하세요.",
    mode: "console"
  },
  "http 요청과 응답": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "fetch는 요청 결과를 Response로 받습니다. response.ok는 HTTP 상태가 성공 범위인지 나타내고, response.json()은 응답 본문을 JSON으로 읽는 비동기 작업입니다.",
      "요청이 도착해 404나 500 응답을 받아도 fetch가 HTTP 상태만으로 자동 reject하는 것은 아닙니다. 그래서 ok를 검사해 실패로 처리합니다."
    ],
    flow: [
      "정해진 서버의 /api/menu 주소로 GET 요청을 보냅니다.",
      "HTTP 상태를 검사하고 실패 상태라면 오류를 던집니다.",
      "성공한 응답 본문을 읽어 호출한 곳에 반환합니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "CORS, 서버 중단, HTTP 실패, 잘못된 JSON을 같은 원인으로 뭉뚱그리지 말고 실패한 단계를 확인하세요.",
    mode: "console"
  },
  "네트워크 실패와 http 오류": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "fetch는 요청 결과를 Response로 받습니다. response.ok는 HTTP 상태가 성공 범위인지 나타내고, response.json()은 응답 본문을 JSON으로 읽는 비동기 작업입니다.",
      "요청이 도착해 404나 500 응답을 받아도 fetch가 HTTP 상태만으로 자동 reject하는 것은 아닙니다. 그래서 ok를 검사해 실패로 처리합니다."
    ],
    flow: [
      "정해진 서버의 /api/menu 주소로 GET 요청을 보냅니다.",
      "HTTP 상태를 검사하고 실패 상태라면 오류를 던집니다.",
      "성공한 응답 본문을 읽어 호출한 곳에 반환합니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "CORS, 서버 중단, HTTP 실패, 잘못된 JSON을 같은 원인으로 뭉뚱그리지 말고 실패한 단계를 확인하세요.",
    mode: "console"
  },
  localstorage: {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "localStorage는 같은 출처의 브라우저 저장 공간에 문자열 키와 값을 보관합니다. 객체는 JSON 문자열로 바꾸어 넣고, 읽을 때 다시 값으로 바꿉니다.",
      "값이 없으면 getItem은 null을 반환합니다. 저장 실패, 손상된 JSON, 예상과 다른 데이터 구조는 각각 별도로 처리해야 합니다."
    ],
    flow: [
      "연습용 키에 JSON 문자열을 저장합니다.",
      "해당 키를 읽고 없으면 기본값을 정합니다.",
      "저장된 값을 파싱해 수량을 읽은 뒤 연습용 키를 삭제합니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "서버의 주문 저장이나 로그인 비밀 값을 보관하는 용도로 이 예제를 그대로 사용하지 마세요. 여기서는 연습용 수량만 다룹니다.",
    mode: "console"
  },
  "setitem / getitem / removeitem": {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "localStorage는 같은 출처의 브라우저 저장 공간에 문자열 키와 값을 보관합니다. 객체는 JSON 문자열로 바꾸어 넣고, 읽을 때 다시 값으로 바꿉니다.",
      "값이 없으면 getItem은 null을 반환합니다. 저장 실패, 손상된 JSON, 예상과 다른 데이터 구조는 각각 별도로 처리해야 합니다."
    ],
    flow: [
      "연습용 키에 JSON 문자열을 저장합니다.",
      "해당 키를 읽고 없으면 기본값을 정합니다.",
      "저장된 값을 파싱해 수량을 읽은 뒤 연습용 키를 삭제합니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "서버의 주문 저장이나 로그인 비밀 값을 보관하는 용도로 이 예제를 그대로 사용하지 마세요. 여기서는 연습용 수량만 다룹니다.",
    mode: "console"
  },
  복원: {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "localStorage는 같은 출처의 브라우저 저장 공간에 문자열 키와 값을 보관합니다. 객체는 JSON 문자열로 바꾸어 넣고, 읽을 때 다시 값으로 바꿉니다.",
      "값이 없으면 getItem은 null을 반환합니다. 저장 실패, 손상된 JSON, 예상과 다른 데이터 구조는 각각 별도로 처리해야 합니다."
    ],
    flow: [
      "연습용 키에 JSON 문자열을 저장합니다.",
      "해당 키를 읽고 없으면 기본값을 정합니다.",
      "저장된 값을 파싱해 수량을 읽은 뒤 연습용 키를 삭제합니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "서버의 주문 저장이나 로그인 비밀 값을 보관하는 용도로 이 예제를 그대로 사용하지 마세요. 여기서는 연습용 수량만 다룹니다.",
    mode: "console"
  },
  "초기값 처리": {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "localStorage는 같은 출처의 브라우저 저장 공간에 문자열 키와 값을 보관합니다. 객체는 JSON 문자열로 바꾸어 넣고, 읽을 때 다시 값으로 바꿉니다.",
      "값이 없으면 getItem은 null을 반환합니다. 저장 실패, 손상된 JSON, 예상과 다른 데이터 구조는 각각 별도로 처리해야 합니다."
    ],
    flow: [
      "연습용 키에 JSON 문자열을 저장합니다.",
      "해당 키를 읽고 없으면 기본값을 정합니다.",
      "저장된 값을 파싱해 수량을 읽은 뒤 연습용 키를 삭제합니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "서버의 주문 저장이나 로그인 비밀 값을 보관하는 용도로 이 예제를 그대로 사용하지 마세요. 여기서는 연습용 수량만 다룹니다.",
    mode: "console"
  },
  "태그와 요소": {
    code: '<h1>동네 카페</h1>\n<p class="intro">오늘의 메뉴를 확인하세요.</p>\n<a href="menu.html">메뉴 보기</a>\n',
    explain: [
      "태그는 문서 구조를 표시하는 표기이고, 요소는 태그와 그 안의 내용을 포함해 읽는 단위입니다. class와 href처럼 시작 태그 안에 붙는 이름·값은 속성입니다.",
      "h1·p는 내용의 의미를 정하고, class는 스타일이나 선택에 쓸 이름을 붙이며, href는 링크의 목적지를 정합니다."
    ],
    flow: [
      "브라우저가 h1을 제목으로 해석합니다.",
      "p 안의 문장을 문단으로 보여 줍니다.",
      "링크를 누르면 href에 적은 주소로 이동합니다."
    ],
    result:
      "제목, 소개 문단, 메뉴 보기 링크가 표시됩니다. menu.html 파일이 있어야 링크의 목적지도 열립니다.",
    edit: "보이는 링크 문구와 href를 각각 바꾸고 두 변경의 차이를 설명하세요.",
    warning:
      "속성 이름과 화면에 보이는 글자를 혼동하지 마세요. 스타일을 바꾸는 CSS 속성과 HTML 속성도 문맥으로 구분합니다.",
    mode: "html"
  },
  속성: {
    code: '<h1>동네 카페</h1>\n<p class="intro">오늘의 메뉴를 확인하세요.</p>\n<a href="menu.html">메뉴 보기</a>\n',
    explain: [
      "태그는 문서 구조를 표시하는 표기이고, 요소는 태그와 그 안의 내용을 포함해 읽는 단위입니다. class와 href처럼 시작 태그 안에 붙는 이름·값은 속성입니다.",
      "h1·p는 내용의 의미를 정하고, class는 스타일이나 선택에 쓸 이름을 붙이며, href는 링크의 목적지를 정합니다."
    ],
    flow: [
      "브라우저가 h1을 제목으로 해석합니다.",
      "p 안의 문장을 문단으로 보여 줍니다.",
      "링크를 누르면 href에 적은 주소로 이동합니다."
    ],
    result:
      "제목, 소개 문단, 메뉴 보기 링크가 표시됩니다. menu.html 파일이 있어야 링크의 목적지도 열립니다.",
    edit: "보이는 링크 문구와 href를 각각 바꾸고 두 변경의 차이를 설명하세요.",
    warning:
      "속성 이름과 화면에 보이는 글자를 혼동하지 마세요. 스타일을 바꾸는 CSS 속성과 HTML 속성도 문맥으로 구분합니다.",
    mode: "html"
  },
  html: {
    code: '<h1>동네 카페</h1>\n<p class="intro">오늘의 메뉴를 확인하세요.</p>\n<a href="menu.html">메뉴 보기</a>\n',
    explain: [
      "태그는 문서 구조를 표시하는 표기이고, 요소는 태그와 그 안의 내용을 포함해 읽는 단위입니다. class와 href처럼 시작 태그 안에 붙는 이름·값은 속성입니다.",
      "h1·p는 내용의 의미를 정하고, class는 스타일이나 선택에 쓸 이름을 붙이며, href는 링크의 목적지를 정합니다."
    ],
    flow: [
      "브라우저가 h1을 제목으로 해석합니다.",
      "p 안의 문장을 문단으로 보여 줍니다.",
      "링크를 누르면 href에 적은 주소로 이동합니다."
    ],
    result:
      "제목, 소개 문단, 메뉴 보기 링크가 표시됩니다. menu.html 파일이 있어야 링크의 목적지도 열립니다.",
    edit: "보이는 링크 문구와 href를 각각 바꾸고 두 변경의 차이를 설명하세요.",
    warning:
      "속성 이름과 화면에 보이는 글자를 혼동하지 마세요. 스타일을 바꾸는 CSS 속성과 HTML 속성도 문맥으로 구분합니다.",
    mode: "html"
  },
  "제목과 문단": {
    code: '<h1>동네 카페</h1>\n<p class="intro">오늘의 메뉴를 확인하세요.</p>\n<a href="menu.html">메뉴 보기</a>\n',
    explain: [
      "태그는 문서 구조를 표시하는 표기이고, 요소는 태그와 그 안의 내용을 포함해 읽는 단위입니다. class와 href처럼 시작 태그 안에 붙는 이름·값은 속성입니다.",
      "h1·p는 내용의 의미를 정하고, class는 스타일이나 선택에 쓸 이름을 붙이며, href는 링크의 목적지를 정합니다."
    ],
    flow: [
      "브라우저가 h1을 제목으로 해석합니다.",
      "p 안의 문장을 문단으로 보여 줍니다.",
      "링크를 누르면 href에 적은 주소로 이동합니다."
    ],
    result:
      "제목, 소개 문단, 메뉴 보기 링크가 표시됩니다. menu.html 파일이 있어야 링크의 목적지도 열립니다.",
    edit: "보이는 링크 문구와 href를 각각 바꾸고 두 변경의 차이를 설명하세요.",
    warning:
      "속성 이름과 화면에 보이는 글자를 혼동하지 마세요. 스타일을 바꾸는 CSS 속성과 HTML 속성도 문맥으로 구분합니다.",
    mode: "html"
  },
  form: {
    code: '<form id="order">\n  <label for="quantity">수량</label>\n  <input\n    id="quantity"\n    name="quantity"\n    type="number"\n    min="1"\n    max="20"\n    value="1"\n  />\n  <button type="submit">확인</button>\n  <p id="message" aria-live="polite"></p>\n</form>\n<script>\n  document\n    .querySelector("#order")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const data = new FormData(event.currentTarget);\n      document.querySelector("#message").textContent =\n        `수량: ${data.get("quantity")}`;\n    });\n</script>\n',
    explain: [
      "form은 입력과 제출을 묶습니다. label의 for와 input의 id가 같으면 이름과 입력칸이 연결됩니다. name은 폼 데이터의 키이고 value는 현재 값입니다.",
      "submit 이벤트의 preventDefault는 브라우저의 기본 제출 동작을 막습니다. 이후 데이터 검증·요청 전송은 코드에서 따로 수행해야 합니다."
    ],
    flow: [
      "사용자가 수량을 입력하고 제출합니다.",
      "핸들러가 기본 제출 동작을 막고 FormData로 값을 읽습니다.",
      "이 예제는 서버로 보내지 않고 안내만 갱신합니다."
    ],
    result: "예를 들어 2를 제출하면 수량: 2가 표시됩니다.",
    edit: "name을 amount로 바꾸고 data.get의 키도 함께 고쳐 보세요.",
    warning:
      "id만 있다고 FormData의 해당 키로 제출되는 것은 아닙니다. 서버가 받는 필드 이름과 name을 맞추세요.",
    mode: "html"
  },
  "label / for / id": {
    code: '<form id="order">\n  <label for="quantity">수량</label>\n  <input\n    id="quantity"\n    name="quantity"\n    type="number"\n    min="1"\n    max="20"\n    value="1"\n  />\n  <button type="submit">확인</button>\n  <p id="message" aria-live="polite"></p>\n</form>\n<script>\n  document\n    .querySelector("#order")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const data = new FormData(event.currentTarget);\n      document.querySelector("#message").textContent =\n        `수량: ${data.get("quantity")}`;\n    });\n</script>\n',
    explain: [
      "form은 입력과 제출을 묶습니다. label의 for와 input의 id가 같으면 이름과 입력칸이 연결됩니다. name은 폼 데이터의 키이고 value는 현재 값입니다.",
      "submit 이벤트의 preventDefault는 브라우저의 기본 제출 동작을 막습니다. 이후 데이터 검증·요청 전송은 코드에서 따로 수행해야 합니다."
    ],
    flow: [
      "사용자가 수량을 입력하고 제출합니다.",
      "핸들러가 기본 제출 동작을 막고 FormData로 값을 읽습니다.",
      "이 예제는 서버로 보내지 않고 안내만 갱신합니다."
    ],
    result: "예를 들어 2를 제출하면 수량: 2가 표시됩니다.",
    edit: "name을 amount로 바꾸고 data.get의 키도 함께 고쳐 보세요.",
    warning:
      "id만 있다고 FormData의 해당 키로 제출되는 것은 아닙니다. 서버가 받는 필드 이름과 name을 맞추세요.",
    mode: "html"
  },
  "name과 value": {
    code: '<form id="order">\n  <label for="quantity">수량</label>\n  <input\n    id="quantity"\n    name="quantity"\n    type="number"\n    min="1"\n    max="20"\n    value="1"\n  />\n  <button type="submit">확인</button>\n  <p id="message" aria-live="polite"></p>\n</form>\n<script>\n  document\n    .querySelector("#order")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const data = new FormData(event.currentTarget);\n      document.querySelector("#message").textContent =\n        `수량: ${data.get("quantity")}`;\n    });\n</script>\n',
    explain: [
      "form은 입력과 제출을 묶습니다. label의 for와 input의 id가 같으면 이름과 입력칸이 연결됩니다. name은 폼 데이터의 키이고 value는 현재 값입니다.",
      "submit 이벤트의 preventDefault는 브라우저의 기본 제출 동작을 막습니다. 이후 데이터 검증·요청 전송은 코드에서 따로 수행해야 합니다."
    ],
    flow: [
      "사용자가 수량을 입력하고 제출합니다.",
      "핸들러가 기본 제출 동작을 막고 FormData로 값을 읽습니다.",
      "이 예제는 서버로 보내지 않고 안내만 갱신합니다."
    ],
    result: "예를 들어 2를 제출하면 수량: 2가 표시됩니다.",
    edit: "name을 amount로 바꾸고 data.get의 키도 함께 고쳐 보세요.",
    warning:
      "id만 있다고 FormData의 해당 키로 제출되는 것은 아닙니다. 서버가 받는 필드 이름과 name을 맞추세요.",
    mode: "html"
  },
  "input과 type": {
    code: '<form id="order">\n  <label for="quantity">수량</label>\n  <input\n    id="quantity"\n    name="quantity"\n    type="number"\n    min="1"\n    max="20"\n    value="1"\n  />\n  <button type="submit">확인</button>\n  <p id="message" aria-live="polite"></p>\n</form>\n<script>\n  document\n    .querySelector("#order")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const data = new FormData(event.currentTarget);\n      document.querySelector("#message").textContent =\n        `수량: ${data.get("quantity")}`;\n    });\n</script>\n',
    explain: [
      "form은 입력과 제출을 묶습니다. label의 for와 input의 id가 같으면 이름과 입력칸이 연결됩니다. name은 폼 데이터의 키이고 value는 현재 값입니다.",
      "submit 이벤트의 preventDefault는 브라우저의 기본 제출 동작을 막습니다. 이후 데이터 검증·요청 전송은 코드에서 따로 수행해야 합니다."
    ],
    flow: [
      "사용자가 수량을 입력하고 제출합니다.",
      "핸들러가 기본 제출 동작을 막고 FormData로 값을 읽습니다.",
      "이 예제는 서버로 보내지 않고 안내만 갱신합니다."
    ],
    result: "예를 들어 2를 제출하면 수량: 2가 표시됩니다.",
    edit: "name을 amount로 바꾸고 data.get의 키도 함께 고쳐 보세요.",
    warning:
      "id만 있다고 FormData의 해당 키로 제출되는 것은 아닙니다. 서버가 받는 필드 이름과 name을 맞추세요.",
    mode: "html"
  },
  "submit / preventdefault": {
    code: '<form id="order">\n  <label for="quantity">수량</label>\n  <input\n    id="quantity"\n    name="quantity"\n    type="number"\n    min="1"\n    max="20"\n    value="1"\n  />\n  <button type="submit">확인</button>\n  <p id="message" aria-live="polite"></p>\n</form>\n<script>\n  document\n    .querySelector("#order")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const data = new FormData(event.currentTarget);\n      document.querySelector("#message").textContent =\n        `수량: ${data.get("quantity")}`;\n    });\n</script>\n',
    explain: [
      "form은 입력과 제출을 묶습니다. label의 for와 input의 id가 같으면 이름과 입력칸이 연결됩니다. name은 폼 데이터의 키이고 value는 현재 값입니다.",
      "submit 이벤트의 preventDefault는 브라우저의 기본 제출 동작을 막습니다. 이후 데이터 검증·요청 전송은 코드에서 따로 수행해야 합니다."
    ],
    flow: [
      "사용자가 수량을 입력하고 제출합니다.",
      "핸들러가 기본 제출 동작을 막고 FormData로 값을 읽습니다.",
      "이 예제는 서버로 보내지 않고 안내만 갱신합니다."
    ],
    result: "예를 들어 2를 제출하면 수량: 2가 표시됩니다.",
    edit: "name을 amount로 바꾸고 data.get의 키도 함께 고쳐 보세요.",
    warning:
      "id만 있다고 FormData의 해당 키로 제출되는 것은 아닙니다. 서버가 받는 필드 이름과 name을 맞추세요.",
    mode: "html"
  },
  "박스 모델": {
    code: '<style>\n  .card {\n    box-sizing: border-box;\n    width: 280px;\n    padding: 20px;\n    border: 2px solid #24745b;\n    margin: 16px;\n  }\n</style>\n<article class="card">\n  여백을 포함해 상자의 크기를 읽어 보세요.\n</article>\n',
    explain: [
      "내용 영역 바깥으로 padding, border, margin이 이어집니다. padding과 border는 배경과 상자의 크기에 관여하고, margin은 상자 바깥의 공간입니다.",
      "border-box에서는 width 280px 안에 padding과 border가 포함됩니다. margin은 이 width 안에 포함되지 않습니다."
    ],
    flow: [
      "요소의 지정 너비를 읽습니다.",
      "box-sizing에 따라 padding·border를 너비 안에 포함할지 판단합니다.",
      "상자 바깥에 margin이 추가되는 위치를 확인합니다."
    ],
    result:
      "테두리까지의 너비는 280px입니다. 좌우 margin까지 포함한 공간은 별도로 더해집니다.",
    edit: "box-sizing을 content-box로 바꾸고 테두리까지의 너비가 어떻게 달라지는지 개발자 도구에서 확인하세요.",
    warning:
      "너비가 커진 원인을 padding만 보고 판단하지 말고 border와 box-sizing도 함께 확인합니다.",
    mode: "html"
  },
  "box-sizing": {
    code: '<style>\n  .card {\n    box-sizing: border-box;\n    width: 280px;\n    padding: 20px;\n    border: 2px solid #24745b;\n    margin: 16px;\n  }\n</style>\n<article class="card">\n  여백을 포함해 상자의 크기를 읽어 보세요.\n</article>\n',
    explain: [
      "내용 영역 바깥으로 padding, border, margin이 이어집니다. padding과 border는 배경과 상자의 크기에 관여하고, margin은 상자 바깥의 공간입니다.",
      "border-box에서는 width 280px 안에 padding과 border가 포함됩니다. margin은 이 width 안에 포함되지 않습니다."
    ],
    flow: [
      "요소의 지정 너비를 읽습니다.",
      "box-sizing에 따라 padding·border를 너비 안에 포함할지 판단합니다.",
      "상자 바깥에 margin이 추가되는 위치를 확인합니다."
    ],
    result:
      "테두리까지의 너비는 280px입니다. 좌우 margin까지 포함한 공간은 별도로 더해집니다.",
    edit: "box-sizing을 content-box로 바꾸고 테두리까지의 너비가 어떻게 달라지는지 개발자 도구에서 확인하세요.",
    warning:
      "너비가 커진 원인을 padding만 보고 판단하지 말고 border와 box-sizing도 함께 확인합니다.",
    mode: "html"
  },
  "content와 padding": {
    code: '<style>\n  .card {\n    box-sizing: border-box;\n    width: 280px;\n    padding: 20px;\n    border: 2px solid #24745b;\n    margin: 16px;\n  }\n</style>\n<article class="card">\n  여백을 포함해 상자의 크기를 읽어 보세요.\n</article>\n',
    explain: [
      "내용 영역 바깥으로 padding, border, margin이 이어집니다. padding과 border는 배경과 상자의 크기에 관여하고, margin은 상자 바깥의 공간입니다.",
      "border-box에서는 width 280px 안에 padding과 border가 포함됩니다. margin은 이 width 안에 포함되지 않습니다."
    ],
    flow: [
      "요소의 지정 너비를 읽습니다.",
      "box-sizing에 따라 padding·border를 너비 안에 포함할지 판단합니다.",
      "상자 바깥에 margin이 추가되는 위치를 확인합니다."
    ],
    result:
      "테두리까지의 너비는 280px입니다. 좌우 margin까지 포함한 공간은 별도로 더해집니다.",
    edit: "box-sizing을 content-box로 바꾸고 테두리까지의 너비가 어떻게 달라지는지 개발자 도구에서 확인하세요.",
    warning:
      "너비가 커진 원인을 padding만 보고 판단하지 말고 border와 box-sizing도 함께 확인합니다.",
    mode: "html"
  },
  "border와 margin": {
    code: '<style>\n  .card {\n    box-sizing: border-box;\n    width: 280px;\n    padding: 20px;\n    border: 2px solid #24745b;\n    margin: 16px;\n  }\n</style>\n<article class="card">\n  여백을 포함해 상자의 크기를 읽어 보세요.\n</article>\n',
    explain: [
      "내용 영역 바깥으로 padding, border, margin이 이어집니다. padding과 border는 배경과 상자의 크기에 관여하고, margin은 상자 바깥의 공간입니다.",
      "border-box에서는 width 280px 안에 padding과 border가 포함됩니다. margin은 이 width 안에 포함되지 않습니다."
    ],
    flow: [
      "요소의 지정 너비를 읽습니다.",
      "box-sizing에 따라 padding·border를 너비 안에 포함할지 판단합니다.",
      "상자 바깥에 margin이 추가되는 위치를 확인합니다."
    ],
    result:
      "테두리까지의 너비는 280px입니다. 좌우 margin까지 포함한 공간은 별도로 더해집니다.",
    edit: "box-sizing을 content-box로 바꾸고 테두리까지의 너비가 어떻게 달라지는지 개발자 도구에서 확인하세요.",
    warning:
      "너비가 커진 원인을 padding만 보고 판단하지 말고 border와 box-sizing도 함께 확인합니다.",
    mode: "html"
  },
  "class 선택자": {
    code: '<style>\n  .notice {\n    color: #24745b;\n    font-size: 20px;\n    line-height: 1.8;\n  }\n</style>\n<p class="notice">읽기 편한 안내 문구</p>\n',
    explain: [
      "선택자는 어떤 요소를 고를지 정하고, 중괄호 안의 선언은 고른 요소의 스타일을 정합니다. color는 CSS 속성 이름이고 #24745b는 속성 값입니다.",
      'HTML의 class="notice"와 CSS의 .notice가 연결됩니다. HTML class 속성에는 점을 쓰지 않고, CSS class 선택자에는 점을 씁니다.'
    ],
    flow: [
      ".notice가 class 이름이 notice인 요소를 고릅니다.",
      "글자색·크기·줄 높이 선언이 적용됩니다.",
      "같은 클래스를 붙인 다른 요소에도 규칙이 적용됩니다."
    ],
    result: "안내 문구가 초록색 20px 글자로 표시됩니다.",
    edit: "font-size를 18px로 바꾸고, 다른 문단에도 같은 class를 붙여 보세요.",
    warning:
      "다른 규칙이 덮어쓸 수 있으므로 바뀌지 않으면 적용된 스타일과 우선순위를 확인하세요.",
    mode: "html"
  },
  "css 규칙": {
    code: '<style>\n  .notice {\n    color: #24745b;\n    font-size: 20px;\n    line-height: 1.8;\n  }\n</style>\n<p class="notice">읽기 편한 안내 문구</p>\n',
    explain: [
      "선택자는 어떤 요소를 고를지 정하고, 중괄호 안의 선언은 고른 요소의 스타일을 정합니다. color는 CSS 속성 이름이고 #24745b는 속성 값입니다.",
      'HTML의 class="notice"와 CSS의 .notice가 연결됩니다. HTML class 속성에는 점을 쓰지 않고, CSS class 선택자에는 점을 씁니다.'
    ],
    flow: [
      ".notice가 class 이름이 notice인 요소를 고릅니다.",
      "글자색·크기·줄 높이 선언이 적용됩니다.",
      "같은 클래스를 붙인 다른 요소에도 규칙이 적용됩니다."
    ],
    result: "안내 문구가 초록색 20px 글자로 표시됩니다.",
    edit: "font-size를 18px로 바꾸고, 다른 문단에도 같은 class를 붙여 보세요.",
    warning:
      "다른 규칙이 덮어쓸 수 있으므로 바뀌지 않으면 적용된 스타일과 우선순위를 확인하세요.",
    mode: "html"
  },
  선언: {
    code: '<style>\n  .notice {\n    color: #24745b;\n    font-size: 20px;\n    line-height: 1.8;\n  }\n</style>\n<p class="notice">읽기 편한 안내 문구</p>\n',
    explain: [
      "선택자는 어떤 요소를 고를지 정하고, 중괄호 안의 선언은 고른 요소의 스타일을 정합니다. color는 CSS 속성 이름이고 #24745b는 속성 값입니다.",
      'HTML의 class="notice"와 CSS의 .notice가 연결됩니다. HTML class 속성에는 점을 쓰지 않고, CSS class 선택자에는 점을 씁니다.'
    ],
    flow: [
      ".notice가 class 이름이 notice인 요소를 고릅니다.",
      "글자색·크기·줄 높이 선언이 적용됩니다.",
      "같은 클래스를 붙인 다른 요소에도 규칙이 적용됩니다."
    ],
    result: "안내 문구가 초록색 20px 글자로 표시됩니다.",
    edit: "font-size를 18px로 바꾸고, 다른 문단에도 같은 class를 붙여 보세요.",
    warning:
      "다른 규칙이 덮어쓸 수 있으므로 바뀌지 않으면 적용된 스타일과 우선순위를 확인하세요.",
    mode: "html"
  },
  "선택자와 속성의 차이": {
    code: '<style>\n  .notice {\n    color: #24745b;\n    font-size: 20px;\n    line-height: 1.8;\n  }\n</style>\n<p class="notice">읽기 편한 안내 문구</p>\n',
    explain: [
      "선택자는 어떤 요소를 고를지 정하고, 중괄호 안의 선언은 고른 요소의 스타일을 정합니다. color는 CSS 속성 이름이고 #24745b는 속성 값입니다.",
      'HTML의 class="notice"와 CSS의 .notice가 연결됩니다. HTML class 속성에는 점을 쓰지 않고, CSS class 선택자에는 점을 씁니다.'
    ],
    flow: [
      ".notice가 class 이름이 notice인 요소를 고릅니다.",
      "글자색·크기·줄 높이 선언이 적용됩니다.",
      "같은 클래스를 붙인 다른 요소에도 규칙이 적용됩니다."
    ],
    result: "안내 문구가 초록색 20px 글자로 표시됩니다.",
    edit: "font-size를 18px로 바꾸고, 다른 문단에도 같은 class를 붙여 보세요.",
    warning:
      "다른 규칙이 덮어쓸 수 있으므로 바뀌지 않으면 적용된 스타일과 우선순위를 확인하세요.",
    mode: "html"
  },
  gap: {
    code: '<style>\n  .menus {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .menu {\n    padding: 20px;\n    border: 1px solid #a9c5b4;\n  }\n</style>\n<div class="menus">\n  <div class="menu">커피</div>\n  <div class="menu">빵</div>\n  <div class="menu">차</div>\n</div>\n',
    explain: [
      "flex는 자식들을 한 축을 중심으로 배치합니다. 기본 row 방향에서는 가로가 주축, 세로가 교차축입니다. flex-wrap: wrap이면 자식이 한 줄에 다 들어가지 않을 때 다음 줄로 배치할 수 있습니다.",
      "gap은 항목 사이의 간격입니다. 부모 바깥 여백이나 각 항목의 안쪽 여백을 만드는 속성과 구분하세요."
    ],
    flow: [
      "부모를 flex 컨테이너로 만듭니다.",
      "자식 사이에 16px 간격을 둡니다.",
      "너비가 줄면 다음 줄로 넘어가게 합니다."
    ],
    result: "메뉴들이 가로로 놓이고 공간이 부족하면 줄이 바뀝니다.",
    edit: "gap을 8px로, flex-direction을 column으로 바꿔 비교하세요.",
    warning:
      "justify-content와 align-items가 조절하는 축은 flex-direction에 따라 달라집니다.",
    mode: "html"
  },
  "flexbox / grid": {
    code: '<style>\n  .menus {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .menu {\n    padding: 20px;\n    border: 1px solid #a9c5b4;\n  }\n</style>\n<div class="menus">\n  <div class="menu">커피</div>\n  <div class="menu">빵</div>\n  <div class="menu">차</div>\n</div>\n',
    explain: [
      "flex는 자식들을 한 축을 중심으로 배치합니다. 기본 row 방향에서는 가로가 주축, 세로가 교차축입니다. flex-wrap: wrap이면 자식이 한 줄에 다 들어가지 않을 때 다음 줄로 배치할 수 있습니다.",
      "gap은 항목 사이의 간격입니다. 부모 바깥 여백이나 각 항목의 안쪽 여백을 만드는 속성과 구분하세요."
    ],
    flow: [
      "부모를 flex 컨테이너로 만듭니다.",
      "자식 사이에 16px 간격을 둡니다.",
      "너비가 줄면 다음 줄로 넘어가게 합니다."
    ],
    result: "메뉴들이 가로로 놓이고 공간이 부족하면 줄이 바뀝니다.",
    edit: "gap을 8px로, flex-direction을 column으로 바꿔 비교하세요.",
    warning:
      "justify-content와 align-items가 조절하는 축은 flex-direction에 따라 달라집니다.",
    mode: "html"
  },
  "flex-wrap": {
    code: '<style>\n  .menus {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .menu {\n    padding: 20px;\n    border: 1px solid #a9c5b4;\n  }\n</style>\n<div class="menus">\n  <div class="menu">커피</div>\n  <div class="menu">빵</div>\n  <div class="menu">차</div>\n</div>\n',
    explain: [
      "flex는 자식들을 한 축을 중심으로 배치합니다. 기본 row 방향에서는 가로가 주축, 세로가 교차축입니다. flex-wrap: wrap이면 자식이 한 줄에 다 들어가지 않을 때 다음 줄로 배치할 수 있습니다.",
      "gap은 항목 사이의 간격입니다. 부모 바깥 여백이나 각 항목의 안쪽 여백을 만드는 속성과 구분하세요."
    ],
    flow: [
      "부모를 flex 컨테이너로 만듭니다.",
      "자식 사이에 16px 간격을 둡니다.",
      "너비가 줄면 다음 줄로 넘어가게 합니다."
    ],
    result: "메뉴들이 가로로 놓이고 공간이 부족하면 줄이 바뀝니다.",
    edit: "gap을 8px로, flex-direction을 column으로 바꿔 비교하세요.",
    warning:
      "justify-content와 align-items가 조절하는 축은 flex-direction에 따라 달라집니다.",
    mode: "html"
  },
  "주축과 교차축": {
    code: '<style>\n  .menus {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n  }\n  .menu {\n    padding: 20px;\n    border: 1px solid #a9c5b4;\n  }\n</style>\n<div class="menus">\n  <div class="menu">커피</div>\n  <div class="menu">빵</div>\n  <div class="menu">차</div>\n</div>\n',
    explain: [
      "flex는 자식들을 한 축을 중심으로 배치합니다. 기본 row 방향에서는 가로가 주축, 세로가 교차축입니다. flex-wrap: wrap이면 자식이 한 줄에 다 들어가지 않을 때 다음 줄로 배치할 수 있습니다.",
      "gap은 항목 사이의 간격입니다. 부모 바깥 여백이나 각 항목의 안쪽 여백을 만드는 속성과 구분하세요."
    ],
    flow: [
      "부모를 flex 컨테이너로 만듭니다.",
      "자식 사이에 16px 간격을 둡니다.",
      "너비가 줄면 다음 줄로 넘어가게 합니다."
    ],
    result: "메뉴들이 가로로 놓이고 공간이 부족하면 줄이 바뀝니다.",
    edit: "gap을 8px로, flex-direction을 column으로 바꿔 비교하세요.",
    warning:
      "justify-content와 align-items가 조절하는 축은 flex-direction에 따라 달라집니다.",
    mode: "html"
  },
  "미디어 쿼리": {
    code: '<style>\n  .menu-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  @media (min-width: 600px) {\n    .menu-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n</style>\n<div class="menu-grid">\n  <p>커피</p>\n  <p>빵</p>\n</div>\n',
    explain: [
      "미디어 쿼리는 화면 너비 같은 조건에 맞을 때 CSS 규칙을 적용합니다. 작은 화면의 기본 스타일을 먼저 만들고 넓어질 때 확장하는 방식이 모바일 퍼스트입니다."
    ],
    flow: [
      "기본 규칙은 한 열을 만듭니다.",
      "화면 너비가 600px 이상이면 조건 안의 규칙이 추가됩니다.",
      "목록이 두 열로 바뀝니다."
    ],
    result: "600px 미만은 한 열, 600px 이상은 두 열입니다.",
    edit: "미리보기 너비를 360px와 800px로 바꿔 비교하세요.",
    warning: "특정 기기 이름보다 실제 콘텐츠가 불편해지는 너비를 기준으로 점검하세요.",
    mode: "html"
  },
  "반응형 웹": {
    code: '<style>\n  .menu-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  @media (min-width: 600px) {\n    .menu-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n</style>\n<div class="menu-grid">\n  <p>커피</p>\n  <p>빵</p>\n</div>\n',
    explain: [
      "미디어 쿼리는 화면 너비 같은 조건에 맞을 때 CSS 규칙을 적용합니다. 작은 화면의 기본 스타일을 먼저 만들고 넓어질 때 확장하는 방식이 모바일 퍼스트입니다."
    ],
    flow: [
      "기본 규칙은 한 열을 만듭니다.",
      "화면 너비가 600px 이상이면 조건 안의 규칙이 추가됩니다.",
      "목록이 두 열로 바뀝니다."
    ],
    result: "600px 미만은 한 열, 600px 이상은 두 열입니다.",
    edit: "미리보기 너비를 360px와 800px로 바꿔 비교하세요.",
    warning: "특정 기기 이름보다 실제 콘텐츠가 불편해지는 너비를 기준으로 점검하세요.",
    mode: "html"
  },
  중단점: {
    code: '<style>\n  .menu-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  @media (min-width: 600px) {\n    .menu-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n</style>\n<div class="menu-grid">\n  <p>커피</p>\n  <p>빵</p>\n</div>\n',
    explain: [
      "미디어 쿼리는 화면 너비 같은 조건에 맞을 때 CSS 규칙을 적용합니다. 작은 화면의 기본 스타일을 먼저 만들고 넓어질 때 확장하는 방식이 모바일 퍼스트입니다."
    ],
    flow: [
      "기본 규칙은 한 열을 만듭니다.",
      "화면 너비가 600px 이상이면 조건 안의 규칙이 추가됩니다.",
      "목록이 두 열로 바뀝니다."
    ],
    result: "600px 미만은 한 열, 600px 이상은 두 열입니다.",
    edit: "미리보기 너비를 360px와 800px로 바꿔 비교하세요.",
    warning: "특정 기기 이름보다 실제 콘텐츠가 불편해지는 너비를 기준으로 점검하세요.",
    mode: "html"
  },
  "모바일 퍼스트": {
    code: '<style>\n  .menu-grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  @media (min-width: 600px) {\n    .menu-grid {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n</style>\n<div class="menu-grid">\n  <p>커피</p>\n  <p>빵</p>\n</div>\n',
    explain: [
      "미디어 쿼리는 화면 너비 같은 조건에 맞을 때 CSS 규칙을 적용합니다. 작은 화면의 기본 스타일을 먼저 만들고 넓어질 때 확장하는 방식이 모바일 퍼스트입니다."
    ],
    flow: [
      "기본 규칙은 한 열을 만듭니다.",
      "화면 너비가 600px 이상이면 조건 안의 규칙이 추가됩니다.",
      "목록이 두 열로 바뀝니다."
    ],
    result: "600px 미만은 한 열, 600px 이상은 두 열입니다.",
    edit: "미리보기 너비를 360px와 800px로 바꿔 비교하세요.",
    warning: "특정 기기 이름보다 실제 콘텐츠가 불편해지는 너비를 기준으로 점검하세요.",
    mode: "html"
  },
  "환경 변수": {
    code: '// server.mjs — Node.js에서 실행하는 파일\nconst port = Number(process.env.PORT ?? "4177");\nif (!Number.isInteger(port) || port < 1 || port > 65535) {\n  throw new Error("PORT는 1~65535의 정수여야 합니다.");\n}\nconsole.log(`사용할 포트: ${port}`);\n\n// 해당 파일 폴더의 터미널에서 실행:\n// node server.mjs\n',
    explain: [
      "환경 변수는 실행 환경에서 프로그램으로 전달하는 문자열 설정입니다. Node에서는 process.env로 읽으며 숫자 설정은 변환과 검증이 필요합니다.",
      "예제의 ??는 환경 변수가 없을 때 기본값을 고릅니다. .env.example은 필요한 설정 이름과 형식의 예시이고 실제 비밀 값을 넣는 파일이 아닙니다."
    ],
    flow: [
      "실행 환경에서 PORT 문자열을 읽습니다.",
      "없으면 기본 문자열을 고른 뒤 숫자로 바꿉니다.",
      "정수와 유효 포트 범위를 확인하고 출력합니다."
    ],
    result:
      "PORT를 지정하지 않았다면 사용하도록 고른 포트 4177이 출력됩니다. 이 코드만으로 실제 서버가 열리지는 않습니다.",
    edit: "PORT를 5000으로 전달해 실행하고, 숫자가 아닌 값을 전달한 결과도 확인하세요.",
    warning:
      "Node 코드는 브라우저 콘솔에서 process나 파일 API를 쓸 수 있는 코드가 아닙니다. .env 파일이 언제 로드되는지도 실행 명령에 맞게 확인하세요.",
    mode: "node"
  },
  ".env.example": {
    code: '// server.mjs — Node.js에서 실행하는 파일\nconst port = Number(process.env.PORT ?? "4177");\nif (!Number.isInteger(port) || port < 1 || port > 65535) {\n  throw new Error("PORT는 1~65535의 정수여야 합니다.");\n}\nconsole.log(`사용할 포트: ${port}`);\n\n// 해당 파일 폴더의 터미널에서 실행:\n// node server.mjs\n',
    explain: [
      "환경 변수는 실행 환경에서 프로그램으로 전달하는 문자열 설정입니다. Node에서는 process.env로 읽으며 숫자 설정은 변환과 검증이 필요합니다.",
      "예제의 ??는 환경 변수가 없을 때 기본값을 고릅니다. .env.example은 필요한 설정 이름과 형식의 예시이고 실제 비밀 값을 넣는 파일이 아닙니다."
    ],
    flow: [
      "실행 환경에서 PORT 문자열을 읽습니다.",
      "없으면 기본 문자열을 고른 뒤 숫자로 바꿉니다.",
      "정수와 유효 포트 범위를 확인하고 출력합니다."
    ],
    result:
      "PORT를 지정하지 않았다면 사용하도록 고른 포트 4177이 출력됩니다. 이 코드만으로 실제 서버가 열리지는 않습니다.",
    edit: "PORT를 5000으로 전달해 실행하고, 숫자가 아닌 값을 전달한 결과도 확인하세요.",
    warning:
      "Node 코드는 브라우저 콘솔에서 process나 파일 API를 쓸 수 있는 코드가 아닙니다. .env 파일이 언제 로드되는지도 실행 명령에 맞게 확인하세요.",
    mode: "node"
  },
  "node.js": {
    code: '// server.mjs — Node.js에서 실행하는 파일\nconst port = Number(process.env.PORT ?? "4177");\nif (!Number.isInteger(port) || port < 1 || port > 65535) {\n  throw new Error("PORT는 1~65535의 정수여야 합니다.");\n}\nconsole.log(`사용할 포트: ${port}`);\n\n// 해당 파일 폴더의 터미널에서 실행:\n// node server.mjs\n',
    explain: [
      "환경 변수는 실행 환경에서 프로그램으로 전달하는 문자열 설정입니다. Node에서는 process.env로 읽으며 숫자 설정은 변환과 검증이 필요합니다.",
      "예제의 ??는 환경 변수가 없을 때 기본값을 고릅니다. .env.example은 필요한 설정 이름과 형식의 예시이고 실제 비밀 값을 넣는 파일이 아닙니다."
    ],
    flow: [
      "실행 환경에서 PORT 문자열을 읽습니다.",
      "없으면 기본 문자열을 고른 뒤 숫자로 바꿉니다.",
      "정수와 유효 포트 범위를 확인하고 출력합니다."
    ],
    result:
      "PORT를 지정하지 않았다면 사용하도록 고른 포트 4177이 출력됩니다. 이 코드만으로 실제 서버가 열리지는 않습니다.",
    edit: "PORT를 5000으로 전달해 실행하고, 숫자가 아닌 값을 전달한 결과도 확인하세요.",
    warning:
      "Node 코드는 브라우저 콘솔에서 process나 파일 API를 쓸 수 있는 코드가 아닙니다. .env 파일이 언제 로드되는지도 실행 명령에 맞게 확인하세요.",
    mode: "node"
  },
  "터미널과 현재 폴더": {
    code: '// server.mjs — Node.js에서 실행하는 파일\nconst port = Number(process.env.PORT ?? "4177");\nif (!Number.isInteger(port) || port < 1 || port > 65535) {\n  throw new Error("PORT는 1~65535의 정수여야 합니다.");\n}\nconsole.log(`사용할 포트: ${port}`);\n\n// 해당 파일 폴더의 터미널에서 실행:\n// node server.mjs\n',
    explain: [
      "환경 변수는 실행 환경에서 프로그램으로 전달하는 문자열 설정입니다. Node에서는 process.env로 읽으며 숫자 설정은 변환과 검증이 필요합니다.",
      "예제의 ??는 환경 변수가 없을 때 기본값을 고릅니다. .env.example은 필요한 설정 이름과 형식의 예시이고 실제 비밀 값을 넣는 파일이 아닙니다."
    ],
    flow: [
      "실행 환경에서 PORT 문자열을 읽습니다.",
      "없으면 기본 문자열을 고른 뒤 숫자로 바꿉니다.",
      "정수와 유효 포트 범위를 확인하고 출력합니다."
    ],
    result:
      "PORT를 지정하지 않았다면 사용하도록 고른 포트 4177이 출력됩니다. 이 코드만으로 실제 서버가 열리지는 않습니다.",
    edit: "PORT를 5000으로 전달해 실행하고, 숫자가 아닌 값을 전달한 결과도 확인하세요.",
    warning:
      "Node 코드는 브라우저 콘솔에서 process나 파일 API를 쓸 수 있는 코드가 아닙니다. .env 파일이 언제 로드되는지도 실행 명령에 맞게 확인하세요.",
    mode: "node"
  },
  "신뢰 경계": {
    code: 'function priceOrder(input) {\n  const prices = new Map([\n    ["coffee", 4000],\n    ["bread", 3500]\n  ]);\n  if (\n    !input ||\n    typeof input !== "object" ||\n    Array.isArray(input)\n  ) {\n    throw new Error("주문 객체가 필요합니다.");\n  }\n  if (!prices.has(input.menuId))\n    throw new Error("없는 메뉴입니다.");\n  if (\n    !Number.isInteger(input.quantity) ||\n    input.quantity < 1 ||\n    input.quantity > 20\n  ) {\n    throw new Error("수량은 1~20의 정수여야 합니다.");\n  }\n  return prices.get(input.menuId) * input.quantity;\n}\nconsole.log(\n  priceOrder({ menuId: "coffee", quantity: 2, total: 1 })\n);\n',
    explain: [
      "외부에서 받은 값은 예상한 형식과 범위인지 확인해야 합니다. 브라우저 검증은 우회할 수 있으므로 서버는 메뉴·수량·가격을 자체 기준으로 판단합니다.",
      "예제의 total: 1은 클라이언트가 임의로 보낸 값입니다. 서버 계산 함수는 그것을 사용하지 않고 허용된 메뉴 가격과 검증한 수량으로 결과를 구합니다."
    ],
    flow: [
      "주문 객체인지 먼저 검사합니다.",
      "서버가 허용한 메뉴인지, 수량이 범위 내 정수인지 확인합니다.",
      "서버 가격과 수량을 곱해 총액을 반환합니다."
    ],
    result: "클라이언트가 total: 1을 보내도 결과는 8000입니다.",
    edit: '없는 menuId와 수량 0·21·"2"를 보내 거부되는지 확인하세요.',
    warning:
      "실제 API에서는 이 계산 외에도 본문 크기·인증·권한 등 서비스에 필요한 검토를 별도로 적용합니다.",
    mode: "console"
  },
  "서버 계산": {
    code: 'function priceOrder(input) {\n  const prices = new Map([\n    ["coffee", 4000],\n    ["bread", 3500]\n  ]);\n  if (\n    !input ||\n    typeof input !== "object" ||\n    Array.isArray(input)\n  ) {\n    throw new Error("주문 객체가 필요합니다.");\n  }\n  if (!prices.has(input.menuId))\n    throw new Error("없는 메뉴입니다.");\n  if (\n    !Number.isInteger(input.quantity) ||\n    input.quantity < 1 ||\n    input.quantity > 20\n  ) {\n    throw new Error("수량은 1~20의 정수여야 합니다.");\n  }\n  return prices.get(input.menuId) * input.quantity;\n}\nconsole.log(\n  priceOrder({ menuId: "coffee", quantity: 2, total: 1 })\n);\n',
    explain: [
      "외부에서 받은 값은 예상한 형식과 범위인지 확인해야 합니다. 브라우저 검증은 우회할 수 있으므로 서버는 메뉴·수량·가격을 자체 기준으로 판단합니다.",
      "예제의 total: 1은 클라이언트가 임의로 보낸 값입니다. 서버 계산 함수는 그것을 사용하지 않고 허용된 메뉴 가격과 검증한 수량으로 결과를 구합니다."
    ],
    flow: [
      "주문 객체인지 먼저 검사합니다.",
      "서버가 허용한 메뉴인지, 수량이 범위 내 정수인지 확인합니다.",
      "서버 가격과 수량을 곱해 총액을 반환합니다."
    ],
    result: "클라이언트가 total: 1을 보내도 결과는 8000입니다.",
    edit: '없는 menuId와 수량 0·21·"2"를 보내 거부되는지 확인하세요.',
    warning:
      "실제 API에서는 이 계산 외에도 본문 크기·인증·권한 등 서비스에 필요한 검토를 별도로 적용합니다.",
    mode: "console"
  },
  검증: {
    code: 'function priceOrder(input) {\n  const prices = new Map([\n    ["coffee", 4000],\n    ["bread", 3500]\n  ]);\n  if (\n    !input ||\n    typeof input !== "object" ||\n    Array.isArray(input)\n  ) {\n    throw new Error("주문 객체가 필요합니다.");\n  }\n  if (!prices.has(input.menuId))\n    throw new Error("없는 메뉴입니다.");\n  if (\n    !Number.isInteger(input.quantity) ||\n    input.quantity < 1 ||\n    input.quantity > 20\n  ) {\n    throw new Error("수량은 1~20의 정수여야 합니다.");\n  }\n  return prices.get(input.menuId) * input.quantity;\n}\nconsole.log(\n  priceOrder({ menuId: "coffee", quantity: 2, total: 1 })\n);\n',
    explain: [
      "외부에서 받은 값은 예상한 형식과 범위인지 확인해야 합니다. 브라우저 검증은 우회할 수 있으므로 서버는 메뉴·수량·가격을 자체 기준으로 판단합니다.",
      "예제의 total: 1은 클라이언트가 임의로 보낸 값입니다. 서버 계산 함수는 그것을 사용하지 않고 허용된 메뉴 가격과 검증한 수량으로 결과를 구합니다."
    ],
    flow: [
      "주문 객체인지 먼저 검사합니다.",
      "서버가 허용한 메뉴인지, 수량이 범위 내 정수인지 확인합니다.",
      "서버 가격과 수량을 곱해 총액을 반환합니다."
    ],
    result: "클라이언트가 total: 1을 보내도 결과는 8000입니다.",
    edit: '없는 menuId와 수량 0·21·"2"를 보내 거부되는지 확인하세요.',
    warning:
      "실제 API에서는 이 계산 외에도 본문 크기·인증·권한 등 서비스에 필요한 검토를 별도로 적용합니다.",
    mode: "console"
  },
  "허용 목록": {
    code: 'function priceOrder(input) {\n  const prices = new Map([\n    ["coffee", 4000],\n    ["bread", 3500]\n  ]);\n  if (\n    !input ||\n    typeof input !== "object" ||\n    Array.isArray(input)\n  ) {\n    throw new Error("주문 객체가 필요합니다.");\n  }\n  if (!prices.has(input.menuId))\n    throw new Error("없는 메뉴입니다.");\n  if (\n    !Number.isInteger(input.quantity) ||\n    input.quantity < 1 ||\n    input.quantity > 20\n  ) {\n    throw new Error("수량은 1~20의 정수여야 합니다.");\n  }\n  return prices.get(input.menuId) * input.quantity;\n}\nconsole.log(\n  priceOrder({ menuId: "coffee", quantity: 2, total: 1 })\n);\n',
    explain: [
      "외부에서 받은 값은 예상한 형식과 범위인지 확인해야 합니다. 브라우저 검증은 우회할 수 있으므로 서버는 메뉴·수량·가격을 자체 기준으로 판단합니다.",
      "예제의 total: 1은 클라이언트가 임의로 보낸 값입니다. 서버 계산 함수는 그것을 사용하지 않고 허용된 메뉴 가격과 검증한 수량으로 결과를 구합니다."
    ],
    flow: [
      "주문 객체인지 먼저 검사합니다.",
      "서버가 허용한 메뉴인지, 수량이 범위 내 정수인지 확인합니다.",
      "서버 가격과 수량을 곱해 총액을 반환합니다."
    ],
    result: "클라이언트가 total: 1을 보내도 결과는 8000입니다.",
    edit: '없는 menuId와 수량 0·21·"2"를 보내 거부되는지 확인하세요.',
    warning:
      "실제 API에서는 이 계산 외에도 본문 크기·인증·권한 등 서비스에 필요한 검토를 별도로 적용합니다.",
    mode: "console"
  },
  diff: {
    code: '# 실습 저장소의 터미널에서 실행합니다.\ngit status\ngit diff\n\n# 검토한 파일만 다음 기록에 포함합니다.\ngit add index.html\ngit diff --staged\ngit commit -m "카페 소개 문구 수정"\ngit status',
    explain: [
      "작업 폴더는 지금 수정 중인 파일, 스테이지는 다음 커밋에 넣기로 선택한 내용, 커밋은 그 선택을 저장한 기록입니다. 저장 버튼과 커밋은 다른 동작입니다.",
      "git diff는 아직 스테이지에 넣지 않은 변경을, git diff --staged는 다음 커밋에 넣을 변경을 검토하는 데 사용합니다."
    ],
    flow: [
      "status와 diff로 변경한 파일과 줄을 확인합니다.",
      "특정 파일을 add한 뒤 staged diff를 다시 확인합니다.",
      "의도를 설명하는 메시지로 로컬 기록을 만듭니다."
    ],
    result:
      "검토한 index.html 변경이 로컬 커밋으로 남습니다. 파일이 없거나 Git 초기 설정이 안 되어 있으면 먼저 그 상태를 해결해야 합니다.",
    edit: "파일을 두 개 수정하되 하나만 add한 다음 staged diff와 일반 diff의 차이를 확인하세요.",
    warning:
      "커밋은 GitHub 업로드나 사이트 배포와 같은 동작이 아닙니다. git add .로 관계없는 파일까지 함께 넣지 않도록 검토하세요.",
    mode: "reference"
  },
  스테이지: {
    code: '# 실습 저장소의 터미널에서 실행합니다.\ngit status\ngit diff\n\n# 검토한 파일만 다음 기록에 포함합니다.\ngit add index.html\ngit diff --staged\ngit commit -m "카페 소개 문구 수정"\ngit status',
    explain: [
      "작업 폴더는 지금 수정 중인 파일, 스테이지는 다음 커밋에 넣기로 선택한 내용, 커밋은 그 선택을 저장한 기록입니다. 저장 버튼과 커밋은 다른 동작입니다.",
      "git diff는 아직 스테이지에 넣지 않은 변경을, git diff --staged는 다음 커밋에 넣을 변경을 검토하는 데 사용합니다."
    ],
    flow: [
      "status와 diff로 변경한 파일과 줄을 확인합니다.",
      "특정 파일을 add한 뒤 staged diff를 다시 확인합니다.",
      "의도를 설명하는 메시지로 로컬 기록을 만듭니다."
    ],
    result:
      "검토한 index.html 변경이 로컬 커밋으로 남습니다. 파일이 없거나 Git 초기 설정이 안 되어 있으면 먼저 그 상태를 해결해야 합니다.",
    edit: "파일을 두 개 수정하되 하나만 add한 다음 staged diff와 일반 diff의 차이를 확인하세요.",
    warning:
      "커밋은 GitHub 업로드나 사이트 배포와 같은 동작이 아닙니다. git add .로 관계없는 파일까지 함께 넣지 않도록 검토하세요.",
    mode: "reference"
  },
  커밋: {
    code: '# 실습 저장소의 터미널에서 실행합니다.\ngit status\ngit diff\n\n# 검토한 파일만 다음 기록에 포함합니다.\ngit add index.html\ngit diff --staged\ngit commit -m "카페 소개 문구 수정"\ngit status',
    explain: [
      "작업 폴더는 지금 수정 중인 파일, 스테이지는 다음 커밋에 넣기로 선택한 내용, 커밋은 그 선택을 저장한 기록입니다. 저장 버튼과 커밋은 다른 동작입니다.",
      "git diff는 아직 스테이지에 넣지 않은 변경을, git diff --staged는 다음 커밋에 넣을 변경을 검토하는 데 사용합니다."
    ],
    flow: [
      "status와 diff로 변경한 파일과 줄을 확인합니다.",
      "특정 파일을 add한 뒤 staged diff를 다시 확인합니다.",
      "의도를 설명하는 메시지로 로컬 기록을 만듭니다."
    ],
    result:
      "검토한 index.html 변경이 로컬 커밋으로 남습니다. 파일이 없거나 Git 초기 설정이 안 되어 있으면 먼저 그 상태를 해결해야 합니다.",
    edit: "파일을 두 개 수정하되 하나만 add한 다음 staged diff와 일반 diff의 차이를 확인하세요.",
    warning:
      "커밋은 GitHub 업로드나 사이트 배포와 같은 동작이 아닙니다. git add .로 관계없는 파일까지 함께 넣지 않도록 검토하세요.",
    mode: "reference"
  },
  "커밋 메시지": {
    code: '# 실습 저장소의 터미널에서 실행합니다.\ngit status\ngit diff\n\n# 검토한 파일만 다음 기록에 포함합니다.\ngit add index.html\ngit diff --staged\ngit commit -m "카페 소개 문구 수정"\ngit status',
    explain: [
      "작업 폴더는 지금 수정 중인 파일, 스테이지는 다음 커밋에 넣기로 선택한 내용, 커밋은 그 선택을 저장한 기록입니다. 저장 버튼과 커밋은 다른 동작입니다.",
      "git diff는 아직 스테이지에 넣지 않은 변경을, git diff --staged는 다음 커밋에 넣을 변경을 검토하는 데 사용합니다."
    ],
    flow: [
      "status와 diff로 변경한 파일과 줄을 확인합니다.",
      "특정 파일을 add한 뒤 staged diff를 다시 확인합니다.",
      "의도를 설명하는 메시지로 로컬 기록을 만듭니다."
    ],
    result:
      "검토한 index.html 변경이 로컬 커밋으로 남습니다. 파일이 없거나 Git 초기 설정이 안 되어 있으면 먼저 그 상태를 해결해야 합니다.",
    edit: "파일을 두 개 수정하되 하나만 add한 다음 staged diff와 일반 diff의 차이를 확인하세요.",
    warning:
      "커밋은 GitHub 업로드나 사이트 배포와 같은 동작이 아닙니다. git add .로 관계없는 파일까지 함께 넣지 않도록 검토하세요.",
    mode: "reference"
  },
  "작업 폴더 / 스테이지 / 커밋": {
    code: '# 실습 저장소의 터미널에서 실행합니다.\ngit status\ngit diff\n\n# 검토한 파일만 다음 기록에 포함합니다.\ngit add index.html\ngit diff --staged\ngit commit -m "카페 소개 문구 수정"\ngit status',
    explain: [
      "작업 폴더는 지금 수정 중인 파일, 스테이지는 다음 커밋에 넣기로 선택한 내용, 커밋은 그 선택을 저장한 기록입니다. 저장 버튼과 커밋은 다른 동작입니다.",
      "git diff는 아직 스테이지에 넣지 않은 변경을, git diff --staged는 다음 커밋에 넣을 변경을 검토하는 데 사용합니다."
    ],
    flow: [
      "status와 diff로 변경한 파일과 줄을 확인합니다.",
      "특정 파일을 add한 뒤 staged diff를 다시 확인합니다.",
      "의도를 설명하는 메시지로 로컬 기록을 만듭니다."
    ],
    result:
      "검토한 index.html 변경이 로컬 커밋으로 남습니다. 파일이 없거나 Git 초기 설정이 안 되어 있으면 먼저 그 상태를 해결해야 합니다.",
    edit: "파일을 두 개 수정하되 하나만 add한 다음 staged diff와 일반 diff의 차이를 확인하세요.",
    warning:
      "커밋은 GitHub 업로드나 사이트 배포와 같은 동작이 아닙니다. git add .로 관계없는 파일까지 함께 넣지 않도록 검토하세요.",
    mode: "reference"
  }
};
