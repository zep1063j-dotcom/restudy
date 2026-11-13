window.GLOSSARY_NOTES = {
  "단방향 데이터 흐름": {
    code: "function Quantity({ value, onIncrease }) {\n  return (\n    <button onClick={onIncrease}>\n      수량 {value}개 · 하나 추가\n    </button>\n  );\n}\n\nfunction App() {\n  const [quantity, setQuantity] = React.useState(1);\n\n  function increase() {\n    setQuantity((previous) => previous + 1);\n  }\n\n  return <Quantity value={quantity} onIncrease={increase} />;\n}\n",
    explain: [
      "카페의 주문 화면 App 안에 수량 버튼 Quantity가 있다고 생각해 보세요. 다른 화면 조각을 사용하는 App을 ‘부모’, 그 안에서 쓰이는 Quantity를 ‘자식’이라고 부릅니다.",
      "수량의 원본은 부모가 기억합니다. 부모는 자식에게 현재 수량과 ‘수량을 늘리는 함수’를 건넵니다. 자식은 버튼이 눌리면 받은 함수를 실행합니다. 그러면 부모의 수량이 바뀌고, 새 수량이 다시 자식에게 전달됩니다."
    ],
    flow: [
      "처음에는 부모가 수량 1을 기억합니다. 자식은 그 값을 받아 ‘수량 1개’라고 보여 줍니다.",
      "자식 버튼을 누르면 부모가 건넨 increase 함수가 실행됩니다.",
      "increase가 setQuantity를 호출해 수량을 1 늘려 달라고 React에게 요청합니다.",
      "React가 새 수량 2로 화면을 다시 계산합니다. 부모가 자식에게 2를 건네므로 버튼에 ‘수량 2개’가 보입니다."
    ],
    result:
      "처음에는 ‘수량 1개’입니다. 한 번 누르면 ‘수량 2개’, 다시 누르면 ‘수량 3개’가 됩니다.",
    edit: "한 번에 2개씩 늘려 보세요. 자식의 표시 코드는 그대로 두고, 부모 increase 함수 안의 previous + 1을 previous + 2로 바꿉니다.",
    warning:
      "‘값이 한 방향으로 흐른다’는 말은 자식이 부모에게 알릴 수 없다는 뜻이 아닙니다. 자식은 부모가 준 함수를 실행해 변경을 요청합니다. 바뀐 수량의 원본은 계속 부모가 관리합니다.",
    mode: "jsx",
    lines: [
      [
        "function Quantity({ value, onIncrease })",
        "자식이 받을 두 값에 이름을 붙입니다. value는 수량이고, onIncrease는 클릭할 때 실행할 함수입니다."
      ],
      [
        "<Quantity value={quantity} onIncrease={increase} />",
        "부모가 현재 수량과 increase 함수를 자식에게 건넵니다. 왼쪽 이름은 자식이 받을 이름, 중괄호 안 이름은 부모가 가진 값입니다."
      ],
      [
        "setQuantity((previous) => previous + 1)",
        "previous는 변경 전 수량입니다. 그 값에 1을 더한 값을 다음 수량으로 요청합니다."
      ]
    ],
    overview: [
      "부모가 수량 1 기억",
      "자식이 1을 받아 표시",
      "클릭하면 부모 함수 실행",
      "부모가 다음 수량 2 요청",
      "새 수량으로 자식도 2 표시"
    ]
  },
  "렌더와 커밋": {
    code: "function App() {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <section>\n      <h2>고정된 카페 제목</h2>\n      <p>주문 수: {count}</p>\n      <button onClick={() => setCount((n) => n + 1)}>\n        주문 추가\n      </button>\n    </section>\n  );\n}\n",
    explain: [
      "칠판의 숫자를 바꾸는 일을 떠올려 보세요. 먼저 ‘다음에 어떤 숫자를 쓸지’ 정하고, 그다음 칠판의 글자를 실제로 고칩니다. React도 화면 내용을 계산하는 일과 실제 요소를 바꾸는 일을 나누어 생각할 수 있습니다.",
      "렌더에서는 React가 App 같은 컴포넌트 함수를 실행해 다음 화면의 내용을 계산합니다. 커밋에서는 그 계산 결과를 바탕으로 실제 HTML 요소에 필요한 변경을 적용합니다. 이후 브라우저가 바뀐 내용을 화면에 그립니다."
    ],
    flow: [
      "버튼을 누르면 setCount가 다음 수량을 요청합니다.",
      "React가 App을 다시 실행합니다. 새 count로 ‘주문 수’에 보여 줄 글자를 계산합니다. 이것이 렌더입니다.",
      "이전 결과와 달라진 주문 수를 실제 요소에 적용합니다. 이것이 커밋입니다."
    ],
    result:
      "주문 추가를 한 번 누르면 주문 수가 0에서 1로 바뀝니다. 제목 문구는 그대로입니다.",
    edit: "<p> 안의 count를 count * 2로 바꿔 보세요. 기억하는 숫자는 1씩 늘지만, 화면에는 그 숫자의 두 배가 보입니다.",
    warning:
      "화면을 다시 계산했다고 모든 요소를 처음부터 만드는 것은 아닙니다. 예제의 제목은 그대로이고 주문 수만 달라집니다. 개발 중 StrictMode에서는 점검을 위해 함수를 추가로 실행할 수도 있습니다.",
    mode: "jsx",
    lines: [
      [
        "const [count, setCount] = React.useState(0)",
        "처음 수량은 0입니다. count는 현재 수량, setCount는 다음 수량을 요청하는 함수입니다."
      ],
      [
        "<p>주문 수: {count}</p>",
        "이번 화면에 보여 줄 수량을 JSX의 중괄호 안에 넣습니다."
      ],
      [
        "setCount((n) => n + 1)",
        "현재 수량보다 1 큰 값을 요청합니다. 다음 화면 계산에서 새 값을 읽게 됩니다."
      ]
    ]
  },
  "배열 구조분해": {
    code: '// JavaScript: 배열의 위치대로 이름을 붙입니다.\nconst menu = ["커피", 4000];\nconst [name, price] = menu;\nconsole.log(name); // 커피\nconsole.log(price); // 4000\n\n// React 컴포넌트 안에서는 다음과 같이 사용합니다.\n// const [count, setCount] = React.useState(0);\n// 첫 번째 위치: 현재 렌더에서 읽는 상태 값\n// 두 번째 위치: 다음 상태를 요청하는 함수\n',
    explain: [
      '배열은 값이 순서대로 놓인 목록입니다. ["커피", 4000]에서 첫 칸은 "커피", 둘째 칸은 4000입니다. 배열 구조분해는 이 두 값을 각각 name과 price라는 이름으로 꺼내는 문법입니다.',
      "React.useState(0)도 값 두 개를 묶어서 줍니다. 첫째는 현재 상태 값, 둘째는 상태 변경을 요청하는 함수입니다. 그래서 [count, setCount]처럼 이름 두 개로 나누어 받을 수 있습니다. 이것은 React만의 특별한 대괄호가 아니라 JavaScript 문법입니다."
    ],
    flow: [
      "오른쪽의 menu 배열을 읽습니다.",
      '배열의 0번 값인 "커피"를 name으로 받습니다.',
      "배열의 1번 값인 4000을 price로 받습니다.",
      "이후에는 name과 price라는 이름으로 값을 사용할 수 있습니다."
    ],
    result: "콘솔에는 커피와 4000이 차례로 출력됩니다.",
    edit: 'menu에 세 번째 값 "따뜻하게"를 추가하세요. const [name, price, option] = menu;로 받아 option을 출력해 보세요.',
    warning:
      '배열은 이름이 아니라 순서로 꺼냅니다. [price, name]으로 적으면 첫 값 "커피"가 price에 들어갑니다. useState의 두 이름도 순서에 맞게 적어야 합니다.',
    mode: "console",
    lines: [
      ['const menu = ["커피", 4000]', "배열에 이름과 가격을 순서대로 담습니다."],
      [
        "const [name, price] = menu",
        "배열의 첫 값을 name, 둘째 값을 price로 꺼냅니다. 새 계산을 하거나 반복하는 코드는 아닙니다."
      ],
      [
        "const [count, setCount] = React.useState(0)",
        "React에서는 현재 상태 값과 변경 함수를 순서대로 받습니다. 이 줄은 컴포넌트 함수 안에서 사용합니다."
      ]
    ]
  },
  state: {
    code: 'function App() {\n  const [count, setCount] = React.useState(0);\n\n  function increase() {\n    setCount((previous) => previous + 1);\n    console.log("이 핸들러가 읽는 count:", count);\n  }\n\n  return <button onClick={increase}>주문 {count}개</button>;\n}\n',
    explain: [
      "수량이 바뀌는 버튼을 만든다고 생각해 보세요. React는 다음 화면을 만들 때도 수량을 기억해야 합니다. 이렇게 React가 기억하는 값을 state라고 합니다. useState(0)은 첫 값을 0으로 정합니다.",
      "count는 이번 화면에서 읽는 수량입니다. setCount는 다음 수량을 요청하는 함수입니다. setCount를 호출해도 이미 실행 중인 increase 함수의 count가 그 자리에서 새 값으로 바뀌지는 않습니다."
    ],
    flow: [
      "처음 count는 0이므로 버튼에 ‘주문 0개’가 보입니다.",
      "버튼을 누르면 increase가 실행되고 다음 수량을 1 늘려 달라고 요청합니다.",
      "지금 increase가 읽는 count는 아직 0이어서 콘솔에는 0이 찍힙니다.",
      "다음 화면 계산에서 count가 1이 되고 버튼에 ‘주문 1개’가 보입니다."
    ],
    result:
      "첫 클릭 때 콘솔에는 이전 수량 0이 찍히고, 버튼에는 새 수량 1이 보입니다. 둘은 서로 다른 시점의 값을 보여 줍니다.",
    edit: "previous + 1을 previous + 2로 바꾸세요. 첫 클릭 뒤 콘솔과 버튼에 각각 어떤 값이 보일지 먼저 예상해 보세요.",
    warning:
      "일반 변수에 숫자를 다시 넣는 것과 React에 다음 상태를 요청하는 것은 다릅니다. 화면을 바꿀 상태는 set 함수를 통해 갱신하세요.",
    mode: "jsx"
  },
  "set 함수와 렌더": {
    code: 'function App() {\n  const [count, setCount] = React.useState(0);\n\n  function increase() {\n    setCount((previous) => previous + 1);\n    console.log("이 핸들러가 읽는 count:", count);\n  }\n\n  return <button onClick={increase}>주문 {count}개</button>;\n}\n',
    explain: [
      "수량이 바뀌는 버튼을 만든다고 생각해 보세요. React는 다음 화면을 만들 때도 수량을 기억해야 합니다. 이렇게 React가 기억하는 값을 state라고 합니다. useState(0)은 첫 값을 0으로 정합니다.",
      "count는 이번 화면에서 읽는 수량입니다. setCount는 다음 수량을 요청하는 함수입니다. setCount를 호출해도 이미 실행 중인 increase 함수의 count가 그 자리에서 새 값으로 바뀌지는 않습니다."
    ],
    flow: [
      "처음 count는 0이므로 버튼에 ‘주문 0개’가 보입니다.",
      "버튼을 누르면 increase가 실행되고 다음 수량을 1 늘려 달라고 요청합니다.",
      "지금 increase가 읽는 count는 아직 0이어서 콘솔에는 0이 찍힙니다.",
      "다음 화면 계산에서 count가 1이 되고 버튼에 ‘주문 1개’가 보입니다."
    ],
    result:
      "첫 클릭 때 콘솔에는 이전 수량 0이 찍히고, 버튼에는 새 수량 1이 보입니다. 둘은 서로 다른 시점의 값을 보여 줍니다.",
    edit: "previous + 1을 previous + 2로 바꾸세요. 첫 클릭 뒤 콘솔과 버튼에 각각 어떤 값이 보일지 먼저 예상해 보세요.",
    warning:
      "일반 변수에 숫자를 다시 넣는 것과 React에 다음 상태를 요청하는 것은 다릅니다. 화면을 바꿀 상태는 set 함수를 통해 갱신하세요.",
    mode: "jsx"
  },
  스냅샷: {
    code: 'function App() {\n  const [count, setCount] = React.useState(0);\n\n  function increase() {\n    setCount((previous) => previous + 1);\n    console.log("이 핸들러가 읽는 count:", count);\n  }\n\n  return <button onClick={increase}>주문 {count}개</button>;\n}\n',
    explain: [
      "수량이 바뀌는 버튼을 만든다고 생각해 보세요. React는 다음 화면을 만들 때도 수량을 기억해야 합니다. 이렇게 React가 기억하는 값을 state라고 합니다. useState(0)은 첫 값을 0으로 정합니다.",
      "count는 이번 화면에서 읽는 수량입니다. setCount는 다음 수량을 요청하는 함수입니다. setCount를 호출해도 이미 실행 중인 increase 함수의 count가 그 자리에서 새 값으로 바뀌지는 않습니다."
    ],
    flow: [
      "처음 count는 0이므로 버튼에 ‘주문 0개’가 보입니다.",
      "버튼을 누르면 increase가 실행되고 다음 수량을 1 늘려 달라고 요청합니다.",
      "지금 increase가 읽는 count는 아직 0이어서 콘솔에는 0이 찍힙니다.",
      "다음 화면 계산에서 count가 1이 되고 버튼에 ‘주문 1개’가 보입니다."
    ],
    result:
      "첫 클릭 때 콘솔에는 이전 수량 0이 찍히고, 버튼에는 새 수량 1이 보입니다. 둘은 서로 다른 시점의 값을 보여 줍니다.",
    edit: "previous + 1을 previous + 2로 바꾸세요. 첫 클릭 뒤 콘솔과 버튼에 각각 어떤 값이 보일지 먼저 예상해 보세요.",
    warning:
      "일반 변수에 숫자를 다시 넣는 것과 React에 다음 상태를 요청하는 것은 다릅니다. 화면을 바꿀 상태는 set 함수를 통해 갱신하세요.",
    mode: "jsx"
  },
  "스냅샷과 불변성": {
    code: 'function App() {\n  const [order, setOrder] = React.useState({\n    name: "커피",\n    quantity: 1\n  });\n\n  function increase() {\n    setOrder((previous) => ({\n      ...previous,\n      quantity: previous.quantity + 1\n    }));\n  }\n\n  return (\n    <button onClick={increase}>\n      {order.name} {order.quantity}개\n    </button>\n  );\n}\n',
    explain: [
      "주문 한 건에 메뉴 이름과 수량이 함께 들어 있다고 생각해 보세요. 수량만 바꿀 때도 기존 주문 객체를 직접 고치지 않고 바뀐 내용이 들어 있는 새 객체를 만듭니다.",
      "...previous는 이전 객체의 속성을 새 객체로 펼칩니다. 그 뒤에 quantity를 다시 적으면 수량만 새 값이 됩니다. setOrder는 이 새 객체를 다음 상태로 요청합니다."
    ],
    flow: [
      "이전 주문에서 이름과 수량을 읽습니다.",
      "새 객체에 이전 내용을 복사합니다.",
      "새 객체의 quantity만 1 더 큰 값으로 적습니다.",
      "React가 새 객체를 다음 상태로 사용해 화면을 계산합니다."
    ],
    result: "이름은 커피로 유지되고 수량만 늘어납니다.",
    edit: "name 속성도 바꾸는 별도 버튼을 만들되 quantity가 사라지지 않게 하세요.",
    warning:
      "...으로 복사해도 내부에 든 또 다른 객체까지 모두 새로 생기지는 않습니다. 중첩 객체를 바꾼다면 바뀌는 깊이까지 새 객체를 만들어야 합니다.",
    mode: "jsx"
  },
  "업데이트 함수": {
    code: "function App() {\n  const [count, setCount] = React.useState(0);\n\n  function addThree() {\n    setCount((n) => n + 1);\n    setCount((n) => n + 1);\n    setCount((n) => n + 1);\n  }\n\n  return (\n    <button onClick={addThree}>수량 {count}개 · +3</button>\n  );\n}\n",
    explain: [
      "이전 수량에서 계속 더해야 할 때는 ‘이전 값으로 다음 값을 계산하는 함수’를 set 함수에 건넵니다. (n) => n + 1은 n을 받아 1을 더해 돌려준다는 뜻입니다.",
      "예제는 이 계산을 세 번 요청합니다. 두 번째 계산은 첫 계산의 결과를, 세 번째 계산은 두 번째 계산의 결과를 받아 이어서 더합니다."
    ],
    flow: [
      "수량 0에서 첫 계산이 0 + 1 = 1을 만듭니다.",
      "둘째 계산이 1 + 1 = 2를 만듭니다.",
      "셋째 계산이 2 + 1 = 3을 만듭니다.",
      "다음 화면에는 수량 3개가 보입니다."
    ],
    result: "한 번 누르면 0에서 3으로, 다시 누르면 6으로 바뀝니다.",
    edit: "세 번째 업데이트를 n => n + 2로 바꾸고 한 번 클릭했을 때 값을 예측하세요.",
    warning:
      "setCount(count + 1)을 세 번 적으면 같은 화면의 count를 세 번 읽습니다. 이전 계산 결과를 이어받는 위 예제와 같은 뜻이 아닙니다.",
    mode: "jsx"
  },
  props: {
    code: 'function MenuCard({ name, price, onSelect }) {\n  return (\n    <button onClick={() => onSelect(name)}>\n      {name} · {price}원\n    </button>\n  );\n}\n\nfunction App() {\n  const [selected, setSelected] = React.useState("아직 없음");\n  return (\n    <section>\n      <MenuCard\n        name="커피"\n        price={4000}\n        onSelect={setSelected}\n      />\n      <p>선택한 메뉴: {selected}</p>\n    </section>\n  );\n}\n',
    explain: [
      "같은 모양의 메뉴 카드를 커피와 빵에 각각 쓰고 싶다고 생각해 보세요. 카드 안에 이름과 가격을 고정하지 않고 바깥에서 건네면 같은 함수를 다시 쓸 수 있습니다. 이렇게 건네는 입력값이 props입니다.",
      "부모 App은 자식 MenuCard에 이름, 가격, 선택할 때 실행할 함수를 줍니다. 자식은 받은 이름과 가격으로 버튼을 만들고, 클릭되면 받은 함수를 실행해 부모에게 선택을 알립니다."
    ],
    flow: [
      "부모가 이름 ‘커피’, 가격 4000, 선택을 처리할 함수를 자식에게 건넵니다.",
      "자식은 받은 값으로 커피 버튼을 보여 줍니다.",
      "버튼을 누르면 자식이 onSelect(name)을 실행합니다.",
      "부모가 선택한 이름을 기억하고 안내 문구를 바꿉니다."
    ],
    result: "커피 버튼을 누르면 선택한 메뉴가 아직 없음에서 커피로 바뀝니다.",
    edit: "name과 price를 빵, 3500으로 바꾸고 선택 결과를 확인하세요.",
    warning:
      "onClick에는 클릭할 때 실행할 함수를 넣습니다. onClick={onSelect(name)}처럼 쓰면 클릭을 기다리지 않고 화면을 계산하는 중에 호출합니다.",
    mode: "jsx"
  },
  "부모 컴포넌트와 자식 컴포넌트": {
    code: 'function MenuCard({ name, price, onSelect }) {\n  return (\n    <button onClick={() => onSelect(name)}>\n      {name} · {price}원\n    </button>\n  );\n}\n\nfunction App() {\n  const [selected, setSelected] = React.useState("아직 없음");\n  return (\n    <section>\n      <MenuCard\n        name="커피"\n        price={4000}\n        onSelect={setSelected}\n      />\n      <p>선택한 메뉴: {selected}</p>\n    </section>\n  );\n}\n',
    explain: [
      "같은 모양의 메뉴 카드를 커피와 빵에 각각 쓰고 싶다고 생각해 보세요. 카드 안에 이름과 가격을 고정하지 않고 바깥에서 건네면 같은 함수를 다시 쓸 수 있습니다. 이렇게 건네는 입력값이 props입니다.",
      "부모 App은 자식 MenuCard에 이름, 가격, 선택할 때 실행할 함수를 줍니다. 자식은 받은 이름과 가격으로 버튼을 만들고, 클릭되면 받은 함수를 실행해 부모에게 선택을 알립니다."
    ],
    flow: [
      "부모가 이름 ‘커피’, 가격 4000, 선택을 처리할 함수를 자식에게 건넵니다.",
      "자식은 받은 값으로 커피 버튼을 보여 줍니다.",
      "버튼을 누르면 자식이 onSelect(name)을 실행합니다.",
      "부모가 선택한 이름을 기억하고 안내 문구를 바꿉니다."
    ],
    result: "커피 버튼을 누르면 선택한 메뉴가 아직 없음에서 커피로 바뀝니다.",
    edit: "name과 price를 빵, 3500으로 바꾸고 선택 결과를 확인하세요.",
    warning:
      "onClick에는 클릭할 때 실행할 함수를 넣습니다. onClick={onSelect(name)}처럼 쓰면 클릭을 기다리지 않고 화면을 계산하는 중에 호출합니다.",
    mode: "jsx"
  },
  "콜백 props": {
    code: 'function MenuCard({ name, price, onSelect }) {\n  return (\n    <button onClick={() => onSelect(name)}>\n      {name} · {price}원\n    </button>\n  );\n}\n\nfunction App() {\n  const [selected, setSelected] = React.useState("아직 없음");\n  return (\n    <section>\n      <MenuCard\n        name="커피"\n        price={4000}\n        onSelect={setSelected}\n      />\n      <p>선택한 메뉴: {selected}</p>\n    </section>\n  );\n}\n',
    explain: [
      "같은 모양의 메뉴 카드를 커피와 빵에 각각 쓰고 싶다고 생각해 보세요. 카드 안에 이름과 가격을 고정하지 않고 바깥에서 건네면 같은 함수를 다시 쓸 수 있습니다. 이렇게 건네는 입력값이 props입니다.",
      "부모 App은 자식 MenuCard에 이름, 가격, 선택할 때 실행할 함수를 줍니다. 자식은 받은 이름과 가격으로 버튼을 만들고, 클릭되면 받은 함수를 실행해 부모에게 선택을 알립니다."
    ],
    flow: [
      "부모가 이름 ‘커피’, 가격 4000, 선택을 처리할 함수를 자식에게 건넵니다.",
      "자식은 받은 값으로 커피 버튼을 보여 줍니다.",
      "버튼을 누르면 자식이 onSelect(name)을 실행합니다.",
      "부모가 선택한 이름을 기억하고 안내 문구를 바꿉니다."
    ],
    result: "커피 버튼을 누르면 선택한 메뉴가 아직 없음에서 커피로 바뀝니다.",
    edit: "name과 price를 빵, 3500으로 바꾸고 선택 결과를 확인하세요.",
    warning:
      "onClick에는 클릭할 때 실행할 함수를 넣습니다. onClick={onSelect(name)}처럼 쓰면 클릭을 기다리지 않고 화면을 계산하는 중에 호출합니다.",
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
      "커피 한 잔이 4000원이고 수량이 2개라면 예상 총액은 곱셈으로 알 수 있습니다. 이렇게 이미 가진 값으로 구할 수 있는 결과를 파생값이라고 합니다.",
      "수량과 총액을 따로 기억하면 수량만 고치고 총액을 고치는 일을 빠뜨릴 수 있습니다. 수량을 기준 값으로 기억하고 화면을 만들 때 총액을 계산하면 두 값이 맞게 이어집니다. 여러 자식이 수량을 쓴다면 공통 부모가 수량을 관리합니다."
    ],
    flow: [
      "React가 지금 기억하는 수량을 읽습니다.",
      "4000에 수량을 곱해 예상 총액을 계산합니다.",
      "버튼을 누르면 수량을 늘려 달라고 요청합니다.",
      "다음 화면 계산에서 새 수량으로 총액도 다시 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "브라우저의 총액은 사용자에게 보여 주는 예상값입니다. 실제 주문을 받는 서버는 자기 가격표와 검사한 수량으로 확정 금액을 다시 계산해야 합니다.",
    mode: "jsx"
  },
  "파생 총액": {
    code: "function App() {\n  const [quantity, setQuantity] = React.useState(1);\n  const price = 4000;\n  const total = price * quantity;\n\n  return (\n    <section>\n      <button onClick={() => setQuantity((n) => n + 1)}>\n        수량 {quantity}개\n      </button>\n      <p>예상 총액 {total}원</p>\n    </section>\n  );\n}\n",
    explain: [
      "커피 한 잔이 4000원이고 수량이 2개라면 예상 총액은 곱셈으로 알 수 있습니다. 이렇게 이미 가진 값으로 구할 수 있는 결과를 파생값이라고 합니다.",
      "수량과 총액을 따로 기억하면 수량만 고치고 총액을 고치는 일을 빠뜨릴 수 있습니다. 수량을 기준 값으로 기억하고 화면을 만들 때 총액을 계산하면 두 값이 맞게 이어집니다. 여러 자식이 수량을 쓴다면 공통 부모가 수량을 관리합니다."
    ],
    flow: [
      "React가 지금 기억하는 수량을 읽습니다.",
      "4000에 수량을 곱해 예상 총액을 계산합니다.",
      "버튼을 누르면 수량을 늘려 달라고 요청합니다.",
      "다음 화면 계산에서 새 수량으로 총액도 다시 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "브라우저의 총액은 사용자에게 보여 주는 예상값입니다. 실제 주문을 받는 서버는 자기 가격표와 검사한 수량으로 확정 금액을 다시 계산해야 합니다.",
    mode: "jsx"
  },
  "상태 끌어올리기": {
    code: "function App() {\n  const [quantity, setQuantity] = React.useState(1);\n  const price = 4000;\n  const total = price * quantity;\n\n  return (\n    <section>\n      <button onClick={() => setQuantity((n) => n + 1)}>\n        수량 {quantity}개\n      </button>\n      <p>예상 총액 {total}원</p>\n    </section>\n  );\n}\n",
    explain: [
      "커피 한 잔이 4000원이고 수량이 2개라면 예상 총액은 곱셈으로 알 수 있습니다. 이렇게 이미 가진 값으로 구할 수 있는 결과를 파생값이라고 합니다.",
      "수량과 총액을 따로 기억하면 수량만 고치고 총액을 고치는 일을 빠뜨릴 수 있습니다. 수량을 기준 값으로 기억하고 화면을 만들 때 총액을 계산하면 두 값이 맞게 이어집니다. 여러 자식이 수량을 쓴다면 공통 부모가 수량을 관리합니다."
    ],
    flow: [
      "React가 지금 기억하는 수량을 읽습니다.",
      "4000에 수량을 곱해 예상 총액을 계산합니다.",
      "버튼을 누르면 수량을 늘려 달라고 요청합니다.",
      "다음 화면 계산에서 새 수량으로 총액도 다시 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "브라우저의 총액은 사용자에게 보여 주는 예상값입니다. 실제 주문을 받는 서버는 자기 가격표와 검사한 수량으로 확정 금액을 다시 계산해야 합니다.",
    mode: "jsx"
  },
  "단일 진실 공급원": {
    code: "function App() {\n  const [quantity, setQuantity] = React.useState(1);\n  const price = 4000;\n  const total = price * quantity;\n\n  return (\n    <section>\n      <button onClick={() => setQuantity((n) => n + 1)}>\n        수량 {quantity}개\n      </button>\n      <p>예상 총액 {total}원</p>\n    </section>\n  );\n}\n",
    explain: [
      "커피 한 잔이 4000원이고 수량이 2개라면 예상 총액은 곱셈으로 알 수 있습니다. 이렇게 이미 가진 값으로 구할 수 있는 결과를 파생값이라고 합니다.",
      "수량과 총액을 따로 기억하면 수량만 고치고 총액을 고치는 일을 빠뜨릴 수 있습니다. 수량을 기준 값으로 기억하고 화면을 만들 때 총액을 계산하면 두 값이 맞게 이어집니다. 여러 자식이 수량을 쓴다면 공통 부모가 수량을 관리합니다."
    ],
    flow: [
      "React가 지금 기억하는 수량을 읽습니다.",
      "4000에 수량을 곱해 예상 총액을 계산합니다.",
      "버튼을 누르면 수량을 늘려 달라고 요청합니다.",
      "다음 화면 계산에서 새 수량으로 총액도 다시 계산합니다."
    ],
    result: "처음 4000원, 한 번 클릭하면 8000원입니다.",
    edit: "price를 4500으로 바꾸고 별도의 total 갱신 코드 없이도 총액이 달라지는지 확인하세요.",
    warning:
      "브라우저의 총액은 사용자에게 보여 주는 예상값입니다. 실제 주문을 받는 서버는 자기 가격표와 검사한 수량으로 확정 금액을 다시 계산해야 합니다.",
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
    code: 'const input = "  커피  ";\nconst cleaned = input.trim();\nconsole.log(`[${input}]`);\nconsole.log(`[${cleaned}]`);\n',
    mode: "console",
    explain: [
      "입력한 글자 앞뒤에 실수로 공백이 붙을 수 있습니다. trim()은 문자열 양끝의 공백을 뺀 새 문자열을 돌려줍니다.",
      "원래 input을 저절로 고치는 것은 아닙니다. 예제는 돌려받은 새 문자열을 cleaned라는 이름에 넣습니다."
    ],
    flow: [
      "앞뒤 공백이 있는 문자열을 만듭니다.",
      "trim()으로 공백을 뺀 새 문자열을 받습니다.",
      "원래 값과 새 값을 대괄호로 감싸 차이를 확인합니다."
    ],
    result: "첫 출력은 [  커피  ], 둘째 출력은 [커피]입니다.",
    edit: "글자 중간에도 공백을 넣어 보세요. 앞뒤 공백과 달리 중간 공백은 그대로 남습니다.",
    warning: "trim()은 문자열 내부의 모든 공백을 없애는 함수가 아닙니다."
  },
  불변성: {
    code: 'function App() {\n  const [order, setOrder] = React.useState({\n    name: "커피",\n    quantity: 1\n  });\n\n  function increase() {\n    setOrder((previous) => ({\n      ...previous,\n      quantity: previous.quantity + 1\n    }));\n  }\n\n  return (\n    <button onClick={increase}>\n      {order.name} {order.quantity}개\n    </button>\n  );\n}\n',
    explain: [
      "주문 한 건에 메뉴 이름과 수량이 함께 들어 있다고 생각해 보세요. 수량만 바꿀 때도 기존 주문 객체를 직접 고치지 않고 바뀐 내용이 들어 있는 새 객체를 만듭니다.",
      "...previous는 이전 객체의 속성을 새 객체로 펼칩니다. 그 뒤에 quantity를 다시 적으면 수량만 새 값이 됩니다. setOrder는 이 새 객체를 다음 상태로 요청합니다."
    ],
    flow: [
      "이전 주문에서 이름과 수량을 읽습니다.",
      "새 객체에 이전 내용을 복사합니다.",
      "새 객체의 quantity만 1 더 큰 값으로 적습니다.",
      "React가 새 객체를 다음 상태로 사용해 화면을 계산합니다."
    ],
    result: "이름은 커피로 유지되고 수량만 늘어납니다.",
    edit: "name 속성도 바꾸는 별도 버튼을 만들되 quantity가 사라지지 않게 하세요.",
    warning:
      "...으로 복사해도 내부에 든 또 다른 객체까지 모두 새로 생기지는 않습니다. 중첩 객체를 바꾼다면 바뀌는 깊이까지 새 객체를 만들어야 합니다.",
    mode: "jsx"
  },
  "객체 state와 새 객체": {
    code: 'function App() {\n  const [order, setOrder] = React.useState({\n    name: "커피",\n    quantity: 1\n  });\n\n  function increase() {\n    setOrder((previous) => ({\n      ...previous,\n      quantity: previous.quantity + 1\n    }));\n  }\n\n  return (\n    <button onClick={increase}>\n      {order.name} {order.quantity}개\n    </button>\n  );\n}\n',
    explain: [
      "주문 한 건에 메뉴 이름과 수량이 함께 들어 있다고 생각해 보세요. 수량만 바꿀 때도 기존 주문 객체를 직접 고치지 않고 바뀐 내용이 들어 있는 새 객체를 만듭니다.",
      "...previous는 이전 객체의 속성을 새 객체로 펼칩니다. 그 뒤에 quantity를 다시 적으면 수량만 새 값이 됩니다. setOrder는 이 새 객체를 다음 상태로 요청합니다."
    ],
    flow: [
      "이전 주문에서 이름과 수량을 읽습니다.",
      "새 객체에 이전 내용을 복사합니다.",
      "새 객체의 quantity만 1 더 큰 값으로 적습니다.",
      "React가 새 객체를 다음 상태로 사용해 화면을 계산합니다."
    ],
    result: "이름은 커피로 유지되고 수량만 늘어납니다.",
    edit: "name 속성도 바꾸는 별도 버튼을 만들되 quantity가 사라지지 않게 하세요.",
    warning:
      "...으로 복사해도 내부에 든 또 다른 객체까지 모두 새로 생기지는 않습니다. 중첩 객체를 바꾼다면 바뀌는 깊이까지 새 객체를 만들어야 합니다.",
    mode: "jsx"
  },
  구조분해: {
    code: 'const menu = { name: "커피", price: 4000 };\nconst { name, price, option = "기본" } = menu;\n\nfunction label({ name, price = 0 }) {\n  return `${name}: ${price}원`;\n}\n\nconsole.log(name, option);\nconsole.log(label(menu));\n',
    explain: [
      "메뉴 객체에는 name과 price처럼 이름표가 붙은 값이 들어 있습니다. const { name, price } = menu;는 그 이름표를 찾아 값을 각각의 변수로 꺼내는 문법입니다.",
      'option = "기본"은 option 값이 없거나 undefined일 때 대신 쓸 값입니다. 함수의 괄호 안에서도 이렇게 객체를 꺼내 받을 수 있습니다.'
    ],
    flow: [
      "menu 객체에서 name과 price라는 속성을 찾습니다.",
      "option은 없으므로 ‘기본’이라는 문자열을 사용합니다.",
      "label(menu)를 호출하면 함수가 필요한 속성을 받아 안내 글자를 만듭니다."
    ],
    result: "콘솔에 커피 기본, 커피: 4000원이 출력됩니다.",
    edit: 'menu에 option: "따뜻하게"를 추가하고 기본값 대신 어떤 값이 쓰이는지 확인하세요.',
    warning:
      "배열은 위치로 꺼내고 객체는 속성 이름으로 꺼냅니다. 기본값은 null, 0, 빈 문자열을 모두 바꾸는 규칙이 아닙니다.",
    mode: "console"
  },
  "매개변수 구조분해": {
    code: 'const menu = { name: "커피", price: 4000 };\nconst { name, price, option = "기본" } = menu;\n\nfunction label({ name, price = 0 }) {\n  return `${name}: ${price}원`;\n}\n\nconsole.log(name, option);\nconsole.log(label(menu));\n',
    explain: [
      "메뉴 객체에는 name과 price처럼 이름표가 붙은 값이 들어 있습니다. const { name, price } = menu;는 그 이름표를 찾아 값을 각각의 변수로 꺼내는 문법입니다.",
      'option = "기본"은 option 값이 없거나 undefined일 때 대신 쓸 값입니다. 함수의 괄호 안에서도 이렇게 객체를 꺼내 받을 수 있습니다.'
    ],
    flow: [
      "menu 객체에서 name과 price라는 속성을 찾습니다.",
      "option은 없으므로 ‘기본’이라는 문자열을 사용합니다.",
      "label(menu)를 호출하면 함수가 필요한 속성을 받아 안내 글자를 만듭니다."
    ],
    result: "콘솔에 커피 기본, 커피: 4000원이 출력됩니다.",
    edit: 'menu에 option: "따뜻하게"를 추가하고 기본값 대신 어떤 값이 쓰이는지 확인하세요.',
    warning:
      "배열은 위치로 꺼내고 객체는 속성 이름으로 꺼냅니다. 기본값은 null, 0, 빈 문자열을 모두 바꾸는 규칙이 아닙니다.",
    mode: "console"
  },
  기본값: {
    code: 'const menu = { name: "커피", price: 4000 };\nconst { name, price, option = "기본" } = menu;\n\nfunction label({ name, price = 0 }) {\n  return `${name}: ${price}원`;\n}\n\nconsole.log(name, option);\nconsole.log(label(menu));\n',
    explain: [
      "메뉴 객체에는 name과 price처럼 이름표가 붙은 값이 들어 있습니다. const { name, price } = menu;는 그 이름표를 찾아 값을 각각의 변수로 꺼내는 문법입니다.",
      'option = "기본"은 option 값이 없거나 undefined일 때 대신 쓸 값입니다. 함수의 괄호 안에서도 이렇게 객체를 꺼내 받을 수 있습니다.'
    ],
    flow: [
      "menu 객체에서 name과 price라는 속성을 찾습니다.",
      "option은 없으므로 ‘기본’이라는 문자열을 사용합니다.",
      "label(menu)를 호출하면 함수가 필요한 속성을 받아 안내 글자를 만듭니다."
    ],
    result: "콘솔에 커피 기본, 커피: 4000원이 출력됩니다.",
    edit: 'menu에 option: "따뜻하게"를 추가하고 기본값 대신 어떤 값이 쓰이는지 확인하세요.',
    warning:
      "배열은 위치로 꺼내고 객체는 속성 이름으로 꺼냅니다. 기본값은 null, 0, 빈 문자열을 모두 바꾸는 규칙이 아닙니다.",
    mode: "console"
  },
  "전개 구문": {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "객체를 변수에 넣었다고 할 때, 그 변수가 객체를 가리킨다고 생각하면 쉽습니다. same = original은 별도의 사본을 만들지 않고 같은 객체를 가리키게 합니다.",
      "{ ...original, quantity: 2 }는 바깥 객체를 새로 만듭니다. 원래 속성을 가져온 뒤 수량만 2로 적으므로 원본의 수량 1은 그대로입니다."
    ],
    flow: [
      "same과 original이 같은 객체를 가리키는지 비교합니다.",
      "copied는 새 객체이므로 original과 같은 객체가 아닙니다.",
      "원본 수량 1과 새 객체 수량 2를 각각 출력합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning:
      "배열이나 객체 안에 또 객체가 있으면 그 내부 객체는 함께 가리킬 수 있습니다. 바깥을 복사한 것과 모든 깊이를 복사한 것은 다릅니다.",
    mode: "console"
  },
  "얕은 복사": {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "객체를 변수에 넣었다고 할 때, 그 변수가 객체를 가리킨다고 생각하면 쉽습니다. same = original은 별도의 사본을 만들지 않고 같은 객체를 가리키게 합니다.",
      "{ ...original, quantity: 2 }는 바깥 객체를 새로 만듭니다. 원래 속성을 가져온 뒤 수량만 2로 적으므로 원본의 수량 1은 그대로입니다."
    ],
    flow: [
      "same과 original이 같은 객체를 가리키는지 비교합니다.",
      "copied는 새 객체이므로 original과 같은 객체가 아닙니다.",
      "원본 수량 1과 새 객체 수량 2를 각각 출력합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning:
      "배열이나 객체 안에 또 객체가 있으면 그 내부 객체는 함께 가리킬 수 있습니다. 바깥을 복사한 것과 모든 깊이를 복사한 것은 다릅니다.",
    mode: "console"
  },
  "불변성과 참조": {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "객체를 변수에 넣었다고 할 때, 그 변수가 객체를 가리킨다고 생각하면 쉽습니다. same = original은 별도의 사본을 만들지 않고 같은 객체를 가리키게 합니다.",
      "{ ...original, quantity: 2 }는 바깥 객체를 새로 만듭니다. 원래 속성을 가져온 뒤 수량만 2로 적으므로 원본의 수량 1은 그대로입니다."
    ],
    flow: [
      "same과 original이 같은 객체를 가리키는지 비교합니다.",
      "copied는 새 객체이므로 original과 같은 객체가 아닙니다.",
      "원본 수량 1과 새 객체 수량 2를 각각 출력합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning:
      "배열이나 객체 안에 또 객체가 있으면 그 내부 객체는 함께 가리킬 수 있습니다. 바깥을 복사한 것과 모든 깊이를 복사한 것은 다릅니다.",
    mode: "console"
  },
  참조: {
    code: 'const original = { name: "커피", quantity: 1 };\nconst same = original;\nconst copied = { ...original, quantity: 2 };\n\nconsole.log(same === original); // true\nconsole.log(copied === original); // false\nconsole.log(original.quantity); // 1\nconsole.log(copied.quantity); // 2\n',
    explain: [
      "객체를 변수에 넣었다고 할 때, 그 변수가 객체를 가리킨다고 생각하면 쉽습니다. same = original은 별도의 사본을 만들지 않고 같은 객체를 가리키게 합니다.",
      "{ ...original, quantity: 2 }는 바깥 객체를 새로 만듭니다. 원래 속성을 가져온 뒤 수량만 2로 적으므로 원본의 수량 1은 그대로입니다."
    ],
    flow: [
      "same과 original이 같은 객체를 가리키는지 비교합니다.",
      "copied는 새 객체이므로 original과 같은 객체가 아닙니다.",
      "원본 수량 1과 새 객체 수량 2를 각각 출력합니다."
    ],
    result: "true, false, 1, 2가 순서대로 출력됩니다.",
    edit: "copied의 name도 바꾸고 original.name이 유지되는지 확인하세요.",
    warning:
      "배열이나 객체 안에 또 객체가 있으면 그 내부 객체는 함께 가리킬 수 있습니다. 바깥을 복사한 것과 모든 깊이를 복사한 것은 다릅니다.",
    mode: "console"
  },
  map: {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst labels = menus.map(\n  (menu, index) => `${index + 1}. ${menu.name}`\n);\nconsole.log(labels);\n',
    explain: [
      "메뉴 목록에서 이름표 목록을 새로 만든다고 생각해 보세요. map은 원래 목록의 항목을 하나씩 함수에 넣고, 함수가 돌려준 결과로 새 목록을 만듭니다.",
      "map에 건네는 함수를 콜백 함수라고 합니다. menu는 이번에 읽는 메뉴, index는 이번 위치 번호이며 첫 번호는 0입니다."
    ],
    flow: [
      "첫 메뉴와 번호 0이 함수에 들어옵니다.",
      "함수는 ‘1. 커피’라는 문자열을 만듭니다.",
      "둘째 메뉴도 같은 방식으로 ‘2. 빵’이라는 문자열이 됩니다.",
      "두 문자열을 담은 새 배열이 labels에 들어갑니다."
    ],
    result: '새 배열은 ["1. 커피", "2. 빵"]입니다.',
    edit: "이름 대신 `${menu.name}: ${menu.price}원`을 반환하도록 바꾸세요.",
    warning:
      "화살표 함수의 본문을 중괄호로 묶었다면 결과를 돌려주는 return을 적었는지 확인하세요. 결과를 돌려주지 않으면 undefined가 들어갑니다.",
    mode: "console"
  },
  "콜백 함수": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst labels = menus.map(\n  (menu, index) => `${index + 1}. ${menu.name}`\n);\nconsole.log(labels);\n',
    explain: [
      "메뉴 목록에서 이름표 목록을 새로 만든다고 생각해 보세요. map은 원래 목록의 항목을 하나씩 함수에 넣고, 함수가 돌려준 결과로 새 목록을 만듭니다.",
      "map에 건네는 함수를 콜백 함수라고 합니다. menu는 이번에 읽는 메뉴, index는 이번 위치 번호이며 첫 번호는 0입니다."
    ],
    flow: [
      "첫 메뉴와 번호 0이 함수에 들어옵니다.",
      "함수는 ‘1. 커피’라는 문자열을 만듭니다.",
      "둘째 메뉴도 같은 방식으로 ‘2. 빵’이라는 문자열이 됩니다.",
      "두 문자열을 담은 새 배열이 labels에 들어갑니다."
    ],
    result: '새 배열은 ["1. 커피", "2. 빵"]입니다.',
    edit: "이름 대신 `${menu.name}: ${menu.price}원`을 반환하도록 바꾸세요.",
    warning:
      "화살표 함수의 본문을 중괄호로 묶었다면 결과를 돌려주는 return을 적었는지 확인하세요. 결과를 돌려주지 않으면 undefined가 들어갑니다.",
    mode: "console"
  },
  "콜백의 매개변수": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst labels = menus.map(\n  (menu, index) => `${index + 1}. ${menu.name}`\n);\nconsole.log(labels);\n',
    explain: [
      "메뉴 목록에서 이름표 목록을 새로 만든다고 생각해 보세요. map은 원래 목록의 항목을 하나씩 함수에 넣고, 함수가 돌려준 결과로 새 목록을 만듭니다.",
      "map에 건네는 함수를 콜백 함수라고 합니다. menu는 이번에 읽는 메뉴, index는 이번 위치 번호이며 첫 번호는 0입니다."
    ],
    flow: [
      "첫 메뉴와 번호 0이 함수에 들어옵니다.",
      "함수는 ‘1. 커피’라는 문자열을 만듭니다.",
      "둘째 메뉴도 같은 방식으로 ‘2. 빵’이라는 문자열이 됩니다.",
      "두 문자열을 담은 새 배열이 labels에 들어갑니다."
    ],
    result: '새 배열은 ["1. 커피", "2. 빵"]입니다.',
    edit: "이름 대신 `${menu.name}: ${menu.price}원`을 반환하도록 바꾸세요.",
    warning:
      "화살표 함수의 본문을 중괄호로 묶었다면 결과를 돌려주는 return을 적었는지 확인하세요. 결과를 돌려주지 않으면 undefined가 들어갑니다.",
    mode: "console"
  },
  filter: {
    code: "const prices = [3000, 4000, 5000];\nconst affordable = prices.filter((price) => price <= 4000);\nconsole.log(affordable);\nconsole.log(prices);\n",
    explain: [
      "가격 목록에서 4000원 이하인 것만 고르는 상황입니다. filter는 항목마다 조건을 검사하고 조건을 만족한 항목만 새 배열에 담습니다.",
      "원래 prices에서 항목을 지우는 방식은 아닙니다. 골라 낸 목록이 affordable에 새로 들어갑니다."
    ],
    flow: [
      "3000은 4000 이하이므로 남깁니다.",
      "4000도 조건에 맞으므로 남깁니다.",
      "5000은 조건에 맞지 않아 새 배열에 넣지 않습니다."
    ],
    result: "결과는 [3000, 4000], 원본은 [3000, 4000, 5000]입니다.",
    edit: "<=를 <로 바꾸고 4000이 남는지 확인하세요.",
    warning:
      "결과가 하나여도 filter의 반환값은 배열입니다. 항목 하나를 바로 찾고 싶다면 find와 비교해 보세요.",
    mode: "console"
  },
  reduce: {
    code: "const quantities = [1, 2, 3];\nconst total = quantities.reduce((sum, quantity) => {\n  return sum + quantity;\n}, 0);\nconsole.log(total);\n",
    explain: [
      "수량 1, 2, 3을 차례로 더하는 예제입니다. reduce는 지금까지 계산한 합계와 다음 항목을 함수에 넣고 새 합계를 받아 이어서 계산합니다.",
      "마지막에 적은 0은 계산을 시작할 첫 합계입니다. sum은 지금까지의 합계, quantity는 지금 더할 항목입니다."
    ],
    flow: [
      "첫 합계 0에 1을 더해 1이 됩니다.",
      "합계 1에 2를 더해 3이 됩니다.",
      "합계 3에 3을 더해 최종 6이 됩니다."
    ],
    result: "총합 6이 출력됩니다.",
    edit: "배열을 빈 배열로 바꾸고 초기값이 어떤 결과를 만드는지 확인하세요.",
    warning:
      "함수는 다음 차례에 쓸 합계를 return해야 합니다. 빈 배열도 다룰 수 있도록 시작 값 0을 명시한 예제입니다.",
    mode: "console"
  },
  "누적값과 초기값": {
    code: "const quantities = [1, 2, 3];\nconst total = quantities.reduce((sum, quantity) => {\n  return sum + quantity;\n}, 0);\nconsole.log(total);\n",
    explain: [
      "수량 1, 2, 3을 차례로 더하는 예제입니다. reduce는 지금까지 계산한 합계와 다음 항목을 함수에 넣고 새 합계를 받아 이어서 계산합니다.",
      "마지막에 적은 0은 계산을 시작할 첫 합계입니다. sum은 지금까지의 합계, quantity는 지금 더할 항목입니다."
    ],
    flow: [
      "첫 합계 0에 1을 더해 1이 됩니다.",
      "합계 1에 2를 더해 3이 됩니다.",
      "합계 3에 3을 더해 최종 6이 됩니다."
    ],
    result: "총합 6이 출력됩니다.",
    edit: "배열을 빈 배열로 바꾸고 초기값이 어떤 결과를 만드는지 확인하세요.",
    warning:
      "함수는 다음 차례에 쓸 합계를 return해야 합니다. 빈 배열도 다룰 수 있도록 시작 값 0을 명시한 예제입니다.",
    mode: "console"
  },
  누적값: {
    code: "const quantities = [1, 2, 3];\nconst total = quantities.reduce((sum, quantity) => {\n  return sum + quantity;\n}, 0);\nconsole.log(total);\n",
    explain: [
      "수량 1, 2, 3을 차례로 더하는 예제입니다. reduce는 지금까지 계산한 합계와 다음 항목을 함수에 넣고 새 합계를 받아 이어서 계산합니다.",
      "마지막에 적은 0은 계산을 시작할 첫 합계입니다. sum은 지금까지의 합계, quantity는 지금 더할 항목입니다."
    ],
    flow: [
      "첫 합계 0에 1을 더해 1이 됩니다.",
      "합계 1에 2를 더해 3이 됩니다.",
      "합계 3에 3을 더해 최종 6이 됩니다."
    ],
    result: "총합 6이 출력됩니다.",
    edit: "배열을 빈 배열로 바꾸고 초기값이 어떤 결과를 만드는지 확인하세요.",
    warning:
      "함수는 다음 차례에 쓸 합계를 return해야 합니다. 빈 배열도 다룰 수 있도록 시작 값 0을 명시한 예제입니다.",
    mode: "console"
  },
  함수: {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "계산기에 가격과 수량을 넣으면 금액이 나오는 작은 기능을 만든다고 생각해 보세요. calculateTotal은 이 작업에 붙인 함수 이름입니다.",
      "price와 quantity는 받을 값에 붙인 이름입니다. 호출할 때 4000과 2를 건네면 그 값으로 곱셈을 하고, return이 계산 결과를 호출한 곳으로 돌려줍니다."
    ],
    flow: [
      "calculateTotal(4000, 2)로 함수를 실행합니다.",
      "함수 안에서는 price가 4000, quantity가 2가 됩니다.",
      "곱한 값 8000을 return으로 돌려줍니다.",
      "돌려받은 값을 result에 담아 출력합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning:
      "console.log는 확인할 값을 출력합니다. return은 다른 코드가 사용할 결과를 돌려줍니다. 두 역할을 구분하세요.",
    mode: "console"
  },
  "함수 선언과 호출": {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "계산기에 가격과 수량을 넣으면 금액이 나오는 작은 기능을 만든다고 생각해 보세요. calculateTotal은 이 작업에 붙인 함수 이름입니다.",
      "price와 quantity는 받을 값에 붙인 이름입니다. 호출할 때 4000과 2를 건네면 그 값으로 곱셈을 하고, return이 계산 결과를 호출한 곳으로 돌려줍니다."
    ],
    flow: [
      "calculateTotal(4000, 2)로 함수를 실행합니다.",
      "함수 안에서는 price가 4000, quantity가 2가 됩니다.",
      "곱한 값 8000을 return으로 돌려줍니다.",
      "돌려받은 값을 result에 담아 출력합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning:
      "console.log는 확인할 값을 출력합니다. return은 다른 코드가 사용할 결과를 돌려줍니다. 두 역할을 구분하세요.",
    mode: "console"
  },
  "매개변수와 인수": {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "계산기에 가격과 수량을 넣으면 금액이 나오는 작은 기능을 만든다고 생각해 보세요. calculateTotal은 이 작업에 붙인 함수 이름입니다.",
      "price와 quantity는 받을 값에 붙인 이름입니다. 호출할 때 4000과 2를 건네면 그 값으로 곱셈을 하고, return이 계산 결과를 호출한 곳으로 돌려줍니다."
    ],
    flow: [
      "calculateTotal(4000, 2)로 함수를 실행합니다.",
      "함수 안에서는 price가 4000, quantity가 2가 됩니다.",
      "곱한 값 8000을 return으로 돌려줍니다.",
      "돌려받은 값을 result에 담아 출력합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning:
      "console.log는 확인할 값을 출력합니다. return은 다른 코드가 사용할 결과를 돌려줍니다. 두 역할을 구분하세요.",
    mode: "console"
  },
  return: {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "계산기에 가격과 수량을 넣으면 금액이 나오는 작은 기능을 만든다고 생각해 보세요. calculateTotal은 이 작업에 붙인 함수 이름입니다.",
      "price와 quantity는 받을 값에 붙인 이름입니다. 호출할 때 4000과 2를 건네면 그 값으로 곱셈을 하고, return이 계산 결과를 호출한 곳으로 돌려줍니다."
    ],
    flow: [
      "calculateTotal(4000, 2)로 함수를 실행합니다.",
      "함수 안에서는 price가 4000, quantity가 2가 됩니다.",
      "곱한 값 8000을 return으로 돌려줍니다.",
      "돌려받은 값을 result에 담아 출력합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning:
      "console.log는 확인할 값을 출력합니다. return은 다른 코드가 사용할 결과를 돌려줍니다. 두 역할을 구분하세요.",
    mode: "console"
  },
  "지역 변수": {
    code: "function calculateTotal(price, quantity) {\n  const total = price * quantity;\n  return total;\n}\n\nconst result = calculateTotal(4000, 2);\nconsole.log(result);\n",
    explain: [
      "계산기에 가격과 수량을 넣으면 금액이 나오는 작은 기능을 만든다고 생각해 보세요. calculateTotal은 이 작업에 붙인 함수 이름입니다.",
      "price와 quantity는 받을 값에 붙인 이름입니다. 호출할 때 4000과 2를 건네면 그 값으로 곱셈을 하고, return이 계산 결과를 호출한 곳으로 돌려줍니다."
    ],
    flow: [
      "calculateTotal(4000, 2)로 함수를 실행합니다.",
      "함수 안에서는 price가 4000, quantity가 2가 됩니다.",
      "곱한 값 8000을 return으로 돌려줍니다.",
      "돌려받은 값을 result에 담아 출력합니다."
    ],
    result: "콘솔에는 8000이 출력됩니다.",
    edit: "수량을 3으로 바꾼 뒤 함수를 고치지 않고 결과가 바뀌는지 확인하세요.",
    warning:
      "console.log는 확인할 값을 출력합니다. return은 다른 코드가 사용할 결과를 돌려줍니다. 두 역할을 구분하세요.",
    mode: "console"
  },
  변수: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  "const / let": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  "선언과 대입": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  자료형: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  typeof: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  "number()": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  문자열: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  "숫자와 불리언": {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  nan: {
    code: 'const input = "2";\nconst quantity = Number(input);\nlet total = 4000 * quantity;\nconsole.log(typeof input, typeof quantity);\nconsole.log(total);\ntotal = total + 1000;\nconsole.log(total);\n',
    explain: [
      '입력칸에서 읽은 "2"는 보통 글자입니다. 곱셈에 쓸 숫자 2로 바꾸려면 Number를 사용할 수 있습니다. 겉으로 같아 보여도 글자와 숫자는 다른 종류의 값입니다.',
      "const는 그 변수에 다른 값을 다시 넣지 않을 때 쓰고, let은 다시 넣어야 할 때 씁니다. 예제에서는 total에 1000을 더한 값을 다시 넣으므로 let을 사용합니다."
    ],
    flow: [
      '입력 문자열 "2"를 quantity라는 숫자 2로 바꿉니다.',
      "4000과 2를 곱해 8000을 total에 넣습니다.",
      "total에 1000을 더한 9000을 다시 넣습니다."
    ],
    result: "string number, 8000, 9000이 순서대로 출력됩니다.",
    edit: 'input을 "abc"와 ""로 바꾸고 Number 결과를 비교하세요. 빈 값 검사는 변환 전에 따로 필요합니다.',
    warning:
      "빈 문자열을 Number로 바꾸면 0이 됩니다. 숫자로 바꿀 수 있다는 것과 주문에 쓸 올바른 수량이라는 것은 다릅니다. 빈 값과 범위도 따로 검사하세요.",
    mode: "console"
  },
  배열: {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "메뉴 두 개를 순서대로 모은 것이 menus 배열입니다. 배열 안의 각 객체는 메뉴 하나의 id, 이름, 가격을 이름표와 값으로 묶어 담고 있습니다.",
      "menus[0]은 첫 메뉴 객체입니다. 그 뒤에 .name을 붙이면 첫 메뉴의 이름을 읽습니다. 배열의 위치는 0부터 시작합니다."
    ],
    flow: [
      "menus.length로 메뉴가 몇 개 있는지 읽습니다.",
      "menus[0]으로 첫 메뉴를 찾고 name을 읽습니다.",
      "menus[1]로 둘째 메뉴를 찾고 price를 읽습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "항목이 2개면 위치 번호는 0과 1입니다. menus[2]는 세 번째 위치이므로 이 예제에서는 값이 없습니다. 저장소의 키·값은 아래 다른 문맥도 확인하세요.",
    mode: "console"
  },
  객체: {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "메뉴 두 개를 순서대로 모은 것이 menus 배열입니다. 배열 안의 각 객체는 메뉴 하나의 id, 이름, 가격을 이름표와 값으로 묶어 담고 있습니다.",
      "menus[0]은 첫 메뉴 객체입니다. 그 뒤에 .name을 붙이면 첫 메뉴의 이름을 읽습니다. 배열의 위치는 0부터 시작합니다."
    ],
    flow: [
      "menus.length로 메뉴가 몇 개 있는지 읽습니다.",
      "menus[0]으로 첫 메뉴를 찾고 name을 읽습니다.",
      "menus[1]로 둘째 메뉴를 찾고 price를 읽습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "항목이 2개면 위치 번호는 0과 1입니다. menus[2]는 세 번째 위치이므로 이 예제에서는 값이 없습니다. 저장소의 키·값은 아래 다른 문맥도 확인하세요.",
    mode: "console"
  },
  "객체 배열": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "메뉴 두 개를 순서대로 모은 것이 menus 배열입니다. 배열 안의 각 객체는 메뉴 하나의 id, 이름, 가격을 이름표와 값으로 묶어 담고 있습니다.",
      "menus[0]은 첫 메뉴 객체입니다. 그 뒤에 .name을 붙이면 첫 메뉴의 이름을 읽습니다. 배열의 위치는 0부터 시작합니다."
    ],
    flow: [
      "menus.length로 메뉴가 몇 개 있는지 읽습니다.",
      "menus[0]으로 첫 메뉴를 찾고 name을 읽습니다.",
      "menus[1]로 둘째 메뉴를 찾고 price를 읽습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "항목이 2개면 위치 번호는 0과 1입니다. menus[2]는 세 번째 위치이므로 이 예제에서는 값이 없습니다. 저장소의 키·값은 아래 다른 문맥도 확인하세요.",
    mode: "console"
  },
  "인덱스와 length": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "메뉴 두 개를 순서대로 모은 것이 menus 배열입니다. 배열 안의 각 객체는 메뉴 하나의 id, 이름, 가격을 이름표와 값으로 묶어 담고 있습니다.",
      "menus[0]은 첫 메뉴 객체입니다. 그 뒤에 .name을 붙이면 첫 메뉴의 이름을 읽습니다. 배열의 위치는 0부터 시작합니다."
    ],
    flow: [
      "menus.length로 메뉴가 몇 개 있는지 읽습니다.",
      "menus[0]으로 첫 메뉴를 찾고 name을 읽습니다.",
      "menus[1]로 둘째 메뉴를 찾고 price를 읽습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "항목이 2개면 위치 번호는 0과 1입니다. menus[2]는 세 번째 위치이므로 이 예제에서는 값이 없습니다. 저장소의 키·값은 아래 다른 문맥도 확인하세요.",
    mode: "console"
  },
  "속성 접근": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "메뉴 두 개를 순서대로 모은 것이 menus 배열입니다. 배열 안의 각 객체는 메뉴 하나의 id, 이름, 가격을 이름표와 값으로 묶어 담고 있습니다.",
      "menus[0]은 첫 메뉴 객체입니다. 그 뒤에 .name을 붙이면 첫 메뉴의 이름을 읽습니다. 배열의 위치는 0부터 시작합니다."
    ],
    flow: [
      "menus.length로 메뉴가 몇 개 있는지 읽습니다.",
      "menus[0]으로 첫 메뉴를 찾고 name을 읽습니다.",
      "menus[1]로 둘째 메뉴를 찾고 price를 읽습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "항목이 2개면 위치 번호는 0과 1입니다. menus[2]는 세 번째 위치이므로 이 예제에서는 값이 없습니다. 저장소의 키·값은 아래 다른 문맥도 확인하세요.",
    mode: "console"
  },
  "키와 값": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconsole.log(menus.length);\nconsole.log(menus[0].name);\nconsole.log(menus[1]["price"]);\n',
    explain: [
      "메뉴 두 개를 순서대로 모은 것이 menus 배열입니다. 배열 안의 각 객체는 메뉴 하나의 id, 이름, 가격을 이름표와 값으로 묶어 담고 있습니다.",
      "menus[0]은 첫 메뉴 객체입니다. 그 뒤에 .name을 붙이면 첫 메뉴의 이름을 읽습니다. 배열의 위치는 0부터 시작합니다."
    ],
    flow: [
      "menus.length로 메뉴가 몇 개 있는지 읽습니다.",
      "menus[0]으로 첫 메뉴를 찾고 name을 읽습니다.",
      "menus[1]로 둘째 메뉴를 찾고 price를 읽습니다."
    ],
    result: "2, 커피, 3500이 출력됩니다.",
    edit: "세 번째 메뉴 객체를 추가한 뒤 length와 menus[2].name을 출력하세요.",
    warning:
      "항목이 2개면 위치 번호는 0과 1입니다. menus[2]는 세 번째 위치이므로 이 예제에서는 값이 없습니다. 저장소의 키·값은 아래 다른 문맥도 확인하세요.",
    mode: "console"
  },
  json: {
    code: 'const order = { menuId: "coffee", quantity: 2 };\nconst text = JSON.stringify(order);\nconst restored = JSON.parse(text);\nconsole.log(text);\nconsole.log(restored.quantity);\n',
    explain: [
      "메뉴 id와 수량을 프로그램 밖으로 보내거나 저장하려면 정해진 형식의 글자로 바꿀 수 있습니다. JSON은 이런 데이터 표현 형식 중 하나입니다.",
      "JSON.stringify(order)는 객체를 JSON 문자열로 바꿉니다. JSON.parse(text)는 그 문자열을 다시 JavaScript 값으로 읽습니다. 객체 자체와 객체를 적어 놓은 글자는 다릅니다."
    ],
    flow: [
      "주문 객체를 만듭니다.",
      "stringify로 JSON 문자열을 만듭니다.",
      "parse로 다시 값을 읽습니다.",
      "읽어 온 객체의 quantity를 출력합니다."
    ],
    result: "JSON 문자열과 수량 2가 출력됩니다.",
    edit: "JSON 문자열의 따옴표나 쉼표를 일부러 틀리게 만든 뒤 parse가 실패하는지 확인하세요.",
    warning:
      "문자열을 읽는 데 성공해도 올바른 주문이라는 뜻은 아닙니다. 수량이 숫자인지, 허용 범위 안인지도 확인해야 합니다.",
    mode: "console"
  },
  "stringify / parse": {
    code: 'const order = { menuId: "coffee", quantity: 2 };\nconst text = JSON.stringify(order);\nconst restored = JSON.parse(text);\nconsole.log(text);\nconsole.log(restored.quantity);\n',
    explain: [
      "메뉴 id와 수량을 프로그램 밖으로 보내거나 저장하려면 정해진 형식의 글자로 바꿀 수 있습니다. JSON은 이런 데이터 표현 형식 중 하나입니다.",
      "JSON.stringify(order)는 객체를 JSON 문자열로 바꿉니다. JSON.parse(text)는 그 문자열을 다시 JavaScript 값으로 읽습니다. 객체 자체와 객체를 적어 놓은 글자는 다릅니다."
    ],
    flow: [
      "주문 객체를 만듭니다.",
      "stringify로 JSON 문자열을 만듭니다.",
      "parse로 다시 값을 읽습니다.",
      "읽어 온 객체의 quantity를 출력합니다."
    ],
    result: "JSON 문자열과 수량 2가 출력됩니다.",
    edit: "JSON 문자열의 따옴표나 쉼표를 일부러 틀리게 만든 뒤 parse가 실패하는지 확인하세요.",
    warning:
      "문자열을 읽는 데 성공해도 올바른 주문이라는 뜻은 아닙니다. 수량이 숫자인지, 허용 범위 안인지도 확인해야 합니다.",
    mode: "console"
  },
  "직렬화와 역직렬화": {
    code: 'const order = { menuId: "coffee", quantity: 2 };\nconst text = JSON.stringify(order);\nconst restored = JSON.parse(text);\nconsole.log(text);\nconsole.log(restored.quantity);\n',
    explain: [
      "메뉴 id와 수량을 프로그램 밖으로 보내거나 저장하려면 정해진 형식의 글자로 바꿀 수 있습니다. JSON은 이런 데이터 표현 형식 중 하나입니다.",
      "JSON.stringify(order)는 객체를 JSON 문자열로 바꿉니다. JSON.parse(text)는 그 문자열을 다시 JavaScript 값으로 읽습니다. 객체 자체와 객체를 적어 놓은 글자는 다릅니다."
    ],
    flow: [
      "주문 객체를 만듭니다.",
      "stringify로 JSON 문자열을 만듭니다.",
      "parse로 다시 값을 읽습니다.",
      "읽어 온 객체의 quantity를 출력합니다."
    ],
    result: "JSON 문자열과 수량 2가 출력됩니다.",
    edit: "JSON 문자열의 따옴표나 쉼표를 일부러 틀리게 만든 뒤 parse가 실패하는지 확인하세요.",
    warning:
      "문자열을 읽는 데 성공해도 올바른 주문이라는 뜻은 아닙니다. 수량이 숫자인지, 허용 범위 안인지도 확인해야 합니다.",
    mode: "console"
  },
  조건식: {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "주문 수량을 1부터 20까지의 정수로만 받는 상황입니다. 숫자 종류인지, 소수는 아닌지, 범위 안인지를 모두 확인해야 합니다.",
      '조건을 &&로 연결하면 여기서는 세 조건이 모두 맞아야 주문을 허용합니다. ===는 종류를 강제로 바꾸지 않고 비교하므로 숫자 20과 글자 "20"은 같지 않습니다.'
    ],
    flow: [
      "값이 정수인지 확인합니다.",
      "1 이상이고 20 이하인지 확인합니다.",
      "모두 맞으면 주문 가능, 하나라도 틀리면 안내를 출력합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "=는 값을 넣는 기호이고 ===는 같은지 묻는 기호입니다. 브라우저에서 검사한 값도 서버에서 다시 검사해야 합니다.",
    mode: "console"
  },
  "if / else if / else": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "주문 수량을 1부터 20까지의 정수로만 받는 상황입니다. 숫자 종류인지, 소수는 아닌지, 범위 안인지를 모두 확인해야 합니다.",
      '조건을 &&로 연결하면 여기서는 세 조건이 모두 맞아야 주문을 허용합니다. ===는 종류를 강제로 바꾸지 않고 비교하므로 숫자 20과 글자 "20"은 같지 않습니다.'
    ],
    flow: [
      "값이 정수인지 확인합니다.",
      "1 이상이고 20 이하인지 확인합니다.",
      "모두 맞으면 주문 가능, 하나라도 틀리면 안내를 출력합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "=는 값을 넣는 기호이고 ===는 같은지 묻는 기호입니다. 브라우저에서 검사한 값도 서버에서 다시 검사해야 합니다.",
    mode: "console"
  },
  "비교 연산자": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "주문 수량을 1부터 20까지의 정수로만 받는 상황입니다. 숫자 종류인지, 소수는 아닌지, 범위 안인지를 모두 확인해야 합니다.",
      '조건을 &&로 연결하면 여기서는 세 조건이 모두 맞아야 주문을 허용합니다. ===는 종류를 강제로 바꾸지 않고 비교하므로 숫자 20과 글자 "20"은 같지 않습니다.'
    ],
    flow: [
      "값이 정수인지 확인합니다.",
      "1 이상이고 20 이하인지 확인합니다.",
      "모두 맞으면 주문 가능, 하나라도 틀리면 안내를 출력합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "=는 값을 넣는 기호이고 ===는 같은지 묻는 기호입니다. 브라우저에서 검사한 값도 서버에서 다시 검사해야 합니다.",
    mode: "console"
  },
  "엄격한 비교": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "주문 수량을 1부터 20까지의 정수로만 받는 상황입니다. 숫자 종류인지, 소수는 아닌지, 범위 안인지를 모두 확인해야 합니다.",
      '조건을 &&로 연결하면 여기서는 세 조건이 모두 맞아야 주문을 허용합니다. ===는 종류를 강제로 바꾸지 않고 비교하므로 숫자 20과 글자 "20"은 같지 않습니다.'
    ],
    flow: [
      "값이 정수인지 확인합니다.",
      "1 이상이고 20 이하인지 확인합니다.",
      "모두 맞으면 주문 가능, 하나라도 틀리면 안내를 출력합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "=는 값을 넣는 기호이고 ===는 같은지 묻는 기호입니다. 브라우저에서 검사한 값도 서버에서 다시 검사해야 합니다.",
    mode: "console"
  },
  경계값: {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "주문 수량을 1부터 20까지의 정수로만 받는 상황입니다. 숫자 종류인지, 소수는 아닌지, 범위 안인지를 모두 확인해야 합니다.",
      '조건을 &&로 연결하면 여기서는 세 조건이 모두 맞아야 주문을 허용합니다. ===는 종류를 강제로 바꾸지 않고 비교하므로 숫자 20과 글자 "20"은 같지 않습니다.'
    ],
    flow: [
      "값이 정수인지 확인합니다.",
      "1 이상이고 20 이하인지 확인합니다.",
      "모두 맞으면 주문 가능, 하나라도 틀리면 안내를 출력합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "=는 값을 넣는 기호이고 ===는 같은지 묻는 기호입니다. 브라우저에서 검사한 값도 서버에서 다시 검사해야 합니다.",
    mode: "console"
  },
  "number.isinteger": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "주문 수량을 1부터 20까지의 정수로만 받는 상황입니다. 숫자 종류인지, 소수는 아닌지, 범위 안인지를 모두 확인해야 합니다.",
      '조건을 &&로 연결하면 여기서는 세 조건이 모두 맞아야 주문을 허용합니다. ===는 종류를 강제로 바꾸지 않고 비교하므로 숫자 20과 글자 "20"은 같지 않습니다.'
    ],
    flow: [
      "값이 정수인지 확인합니다.",
      "1 이상이고 20 이하인지 확인합니다.",
      "모두 맞으면 주문 가능, 하나라도 틀리면 안내를 출력합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "=는 값을 넣는 기호이고 ===는 같은지 묻는 기호입니다. 브라우저에서 검사한 값도 서버에서 다시 검사해야 합니다.",
    mode: "console"
  },
  "대입과 비교": {
    code: 'const quantity = 20;\nif (\n  Number.isInteger(quantity) &&\n  quantity >= 1 &&\n  quantity <= 20\n) {\n  console.log("주문 가능");\n} else {\n  console.log("1~20의 정수를 입력하세요.");\n}\nconsole.log(quantity === "20");\n',
    explain: [
      "주문 수량을 1부터 20까지의 정수로만 받는 상황입니다. 숫자 종류인지, 소수는 아닌지, 범위 안인지를 모두 확인해야 합니다.",
      '조건을 &&로 연결하면 여기서는 세 조건이 모두 맞아야 주문을 허용합니다. ===는 종류를 강제로 바꾸지 않고 비교하므로 숫자 20과 글자 "20"은 같지 않습니다.'
    ],
    flow: [
      "값이 정수인지 확인합니다.",
      "1 이상이고 20 이하인지 확인합니다.",
      "모두 맞으면 주문 가능, 하나라도 틀리면 안내를 출력합니다."
    ],
    result: "주문 가능과 false가 출력됩니다.",
    edit: 'quantity를 0, 1, 20, 21, 1.5, "2"로 차례로 바꿔 보세요.',
    warning:
      "=는 값을 넣는 기호이고 ===는 같은지 묻는 기호입니다. 브라우저에서 검사한 값도 서버에서 다시 검사해야 합니다.",
    mode: "console"
  },
  dom: {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "브라우저는 HTML을 읽어 요소들이 이어진 문서 구조를 만듭니다. 이 구조가 DOM입니다. JavaScript는 그 안에서 요소를 찾아 내용을 바꿉니다.",
      'querySelector("#total")은 id가 total인 요소를 찾습니다. textContent는 찾은 요소에 보여 줄 글자를 정합니다. 여기서는 ‘계산 전’을 금액 안내로 바꿉니다.'
    ],
    flow: [
      "브라우저가 h2 요소를 먼저 만듭니다.",
      "JavaScript가 id로 그 요소를 찾습니다.",
      "찾은 결과가 null이 아니면 글자를 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "찾은 요소가 없으면 null입니다. null에 textContent를 쓰려고 하지 말고 id, 선택자, 코드 실행 시점을 확인하세요.",
    mode: "html"
  },
  queryselector: {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "브라우저는 HTML을 읽어 요소들이 이어진 문서 구조를 만듭니다. 이 구조가 DOM입니다. JavaScript는 그 안에서 요소를 찾아 내용을 바꿉니다.",
      'querySelector("#total")은 id가 total인 요소를 찾습니다. textContent는 찾은 요소에 보여 줄 글자를 정합니다. 여기서는 ‘계산 전’을 금액 안내로 바꿉니다.'
    ],
    flow: [
      "브라우저가 h2 요소를 먼저 만듭니다.",
      "JavaScript가 id로 그 요소를 찾습니다.",
      "찾은 결과가 null이 아니면 글자를 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "찾은 요소가 없으면 null입니다. null에 textContent를 쓰려고 하지 말고 id, 선택자, 코드 실행 시점을 확인하세요.",
    mode: "html"
  },
  textcontent: {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "브라우저는 HTML을 읽어 요소들이 이어진 문서 구조를 만듭니다. 이 구조가 DOM입니다. JavaScript는 그 안에서 요소를 찾아 내용을 바꿉니다.",
      'querySelector("#total")은 id가 total인 요소를 찾습니다. textContent는 찾은 요소에 보여 줄 글자를 정합니다. 여기서는 ‘계산 전’을 금액 안내로 바꿉니다.'
    ],
    flow: [
      "브라우저가 h2 요소를 먼저 만듭니다.",
      "JavaScript가 id로 그 요소를 찾습니다.",
      "찾은 결과가 null이 아니면 글자를 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "찾은 요소가 없으면 null입니다. null에 textContent를 쓰려고 하지 말고 id, 선택자, 코드 실행 시점을 확인하세요.",
    mode: "html"
  },
  "텍스트와 html의 차이": {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "브라우저는 HTML을 읽어 요소들이 이어진 문서 구조를 만듭니다. 이 구조가 DOM입니다. JavaScript는 그 안에서 요소를 찾아 내용을 바꿉니다.",
      'querySelector("#total")은 id가 total인 요소를 찾습니다. textContent는 찾은 요소에 보여 줄 글자를 정합니다. 여기서는 ‘계산 전’을 금액 안내로 바꿉니다.'
    ],
    flow: [
      "브라우저가 h2 요소를 먼저 만듭니다.",
      "JavaScript가 id로 그 요소를 찾습니다.",
      "찾은 결과가 null이 아니면 글자를 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "찾은 요소가 없으면 null입니다. null에 textContent를 쓰려고 하지 말고 id, 선택자, 코드 실행 시점을 확인하세요.",
    mode: "html"
  },
  "null 접근 오류": {
    code: '<h2 id="total">계산 전</h2>\n<script>\n  const output = document.querySelector("#total");\n  if (output !== null) {\n    output.textContent = "예상 총액: 8000원";\n  }\n</script>\n',
    explain: [
      "브라우저는 HTML을 읽어 요소들이 이어진 문서 구조를 만듭니다. 이 구조가 DOM입니다. JavaScript는 그 안에서 요소를 찾아 내용을 바꿉니다.",
      'querySelector("#total")은 id가 total인 요소를 찾습니다. textContent는 찾은 요소에 보여 줄 글자를 정합니다. 여기서는 ‘계산 전’을 금액 안내로 바꿉니다.'
    ],
    flow: [
      "브라우저가 h2 요소를 먼저 만듭니다.",
      "JavaScript가 id로 그 요소를 찾습니다.",
      "찾은 결과가 null이 아니면 글자를 바꿉니다."
    ],
    result: "계산 전 대신 예상 총액: 8000원이 보입니다.",
    edit: "id와 선택자를 함께 바꾸고, 한쪽만 바꿨을 때 어떤 차이가 나는지 확인하세요.",
    warning:
      "찾은 요소가 없으면 null입니다. null에 textContent를 쓰려고 하지 말고 id, 선택자, 코드 실행 시점을 확인하세요.",
    mode: "html"
  },
  이벤트: {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "클릭처럼 프로그램이 알아차릴 수 있는 사건을 이벤트라고 합니다. 그 사건이 생겼을 때 실행하도록 연결한 함수를 이벤트 핸들러라고 합니다.",
      "예제는 확인 버튼에 클릭 함수를 연결합니다. 사용자가 수량을 고친 뒤 버튼을 누르면, 그때 입력칸의 값을 읽어 문구로 보여 줍니다."
    ],
    flow: [
      "클릭할 때 실행할 함수를 버튼에 연결합니다.",
      "사용자가 입력을 바꾸고 버튼을 누릅니다.",
      "함수가 지금 입력된 값을 읽습니다.",
      "읽은 값으로 안내 글자를 바꿉니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "입력값을 너무 일찍 읽어 두면 사용자가 나중에 바꾼 값이 반영되지 않을 수 있습니다. 최신 값이 필요할 때는 사건을 처리하는 순간에 읽으세요.",
    mode: "html"
  },
  "이벤트 핸들러": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "클릭처럼 프로그램이 알아차릴 수 있는 사건을 이벤트라고 합니다. 그 사건이 생겼을 때 실행하도록 연결한 함수를 이벤트 핸들러라고 합니다.",
      "예제는 확인 버튼에 클릭 함수를 연결합니다. 사용자가 수량을 고친 뒤 버튼을 누르면, 그때 입력칸의 값을 읽어 문구로 보여 줍니다."
    ],
    flow: [
      "클릭할 때 실행할 함수를 버튼에 연결합니다.",
      "사용자가 입력을 바꾸고 버튼을 누릅니다.",
      "함수가 지금 입력된 값을 읽습니다.",
      "읽은 값으로 안내 글자를 바꿉니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "입력값을 너무 일찍 읽어 두면 사용자가 나중에 바꾼 값이 반영되지 않을 수 있습니다. 최신 값이 필요할 때는 사건을 처리하는 순간에 읽으세요.",
    mode: "html"
  },
  addeventlistener: {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "클릭처럼 프로그램이 알아차릴 수 있는 사건을 이벤트라고 합니다. 그 사건이 생겼을 때 실행하도록 연결한 함수를 이벤트 핸들러라고 합니다.",
      "예제는 확인 버튼에 클릭 함수를 연결합니다. 사용자가 수량을 고친 뒤 버튼을 누르면, 그때 입력칸의 값을 읽어 문구로 보여 줍니다."
    ],
    flow: [
      "클릭할 때 실행할 함수를 버튼에 연결합니다.",
      "사용자가 입력을 바꾸고 버튼을 누릅니다.",
      "함수가 지금 입력된 값을 읽습니다.",
      "읽은 값으로 안내 글자를 바꿉니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "입력값을 너무 일찍 읽어 두면 사용자가 나중에 바꾼 값이 반영되지 않을 수 있습니다. 최신 값이 필요할 때는 사건을 처리하는 순간에 읽으세요.",
    mode: "html"
  },
  "이벤트 객체": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "클릭처럼 프로그램이 알아차릴 수 있는 사건을 이벤트라고 합니다. 그 사건이 생겼을 때 실행하도록 연결한 함수를 이벤트 핸들러라고 합니다.",
      "예제는 확인 버튼에 클릭 함수를 연결합니다. 사용자가 수량을 고친 뒤 버튼을 누르면, 그때 입력칸의 값을 읽어 문구로 보여 줍니다."
    ],
    flow: [
      "클릭할 때 실행할 함수를 버튼에 연결합니다.",
      "사용자가 입력을 바꾸고 버튼을 누릅니다.",
      "함수가 지금 입력된 값을 읽습니다.",
      "읽은 값으로 안내 글자를 바꿉니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "입력값을 너무 일찍 읽어 두면 사용자가 나중에 바꾼 값이 반영되지 않을 수 있습니다. 최신 값이 필요할 때는 사건을 처리하는 순간에 읽으세요.",
    mode: "html"
  },
  "이벤트 대상": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "클릭처럼 프로그램이 알아차릴 수 있는 사건을 이벤트라고 합니다. 그 사건이 생겼을 때 실행하도록 연결한 함수를 이벤트 핸들러라고 합니다.",
      "예제는 확인 버튼에 클릭 함수를 연결합니다. 사용자가 수량을 고친 뒤 버튼을 누르면, 그때 입력칸의 값을 읽어 문구로 보여 줍니다."
    ],
    flow: [
      "클릭할 때 실행할 함수를 버튼에 연결합니다.",
      "사용자가 입력을 바꾸고 버튼을 누릅니다.",
      "함수가 지금 입력된 값을 읽습니다.",
      "읽은 값으로 안내 글자를 바꿉니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "입력값을 너무 일찍 읽어 두면 사용자가 나중에 바꾼 값이 반영되지 않을 수 있습니다. 최신 값이 필요할 때는 사건을 처리하는 순간에 읽으세요.",
    mode: "html"
  },
  "입력값 읽는 시점": {
    code: '<label>수량 <input id="quantity" value="1" /></label>\n<button id="check" type="button">확인</button>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#check")\n    .addEventListener("click", (event) => {\n      const value = document.querySelector("#quantity").value;\n      document.querySelector("#result").textContent =\n        `현재 입력: ${value}`;\n      console.log(event.type);\n    });\n</script>\n',
    explain: [
      "클릭처럼 프로그램이 알아차릴 수 있는 사건을 이벤트라고 합니다. 그 사건이 생겼을 때 실행하도록 연결한 함수를 이벤트 핸들러라고 합니다.",
      "예제는 확인 버튼에 클릭 함수를 연결합니다. 사용자가 수량을 고친 뒤 버튼을 누르면, 그때 입력칸의 값을 읽어 문구로 보여 줍니다."
    ],
    flow: [
      "클릭할 때 실행할 함수를 버튼에 연결합니다.",
      "사용자가 입력을 바꾸고 버튼을 누릅니다.",
      "함수가 지금 입력된 값을 읽습니다.",
      "읽은 값으로 안내 글자를 바꿉니다."
    ],
    result: "확인을 누른 시점의 수량이 안내에 표시됩니다.",
    edit: "입력값을 읽는 줄을 이벤트 핸들러 밖으로 옮긴 경우와 비교하세요.",
    warning:
      "입력값을 너무 일찍 읽어 두면 사용자가 나중에 바꾼 값이 반영되지 않을 수 있습니다. 최신 값이 필요할 때는 사건을 처리하는 순간에 읽으세요.",
    mode: "html"
  },
  "async / await": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "서버에 물어본 가격이 바로 오지 않을 수 있습니다. Promise는 아직 끝나지 않은 일의 결과를 나중에 받도록 나타내는 객체입니다. 성공 값이나 실패 이유를 받을 수 있습니다.",
      "await는 이 async 함수의 나머지 작업을 결과가 준비될 때까지 미룹니다. 함수 밖의 다른 작업까지 모두 멈추지는 않습니다. 예제에서는 실제 서버 대신 타이머로 기다림을 흉내 냅니다."
    ],
    flow: [
      "showPrice가 ‘기다리는 중’을 출력합니다.",
      "가격이 준비되기를 기다리는 동안 함수 밖의 ‘다른 작업은 계속’이 출력됩니다.",
      "타이머가 가격 4000을 준비하면 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "기다리던 일이 실패할 수도 있습니다. 실제 요청에서는 try/catch 등으로 실패했을 때 무엇을 보여 줄지도 정해야 합니다.",
    mode: "console"
  },
  promise: {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "서버에 물어본 가격이 바로 오지 않을 수 있습니다. Promise는 아직 끝나지 않은 일의 결과를 나중에 받도록 나타내는 객체입니다. 성공 값이나 실패 이유를 받을 수 있습니다.",
      "await는 이 async 함수의 나머지 작업을 결과가 준비될 때까지 미룹니다. 함수 밖의 다른 작업까지 모두 멈추지는 않습니다. 예제에서는 실제 서버 대신 타이머로 기다림을 흉내 냅니다."
    ],
    flow: [
      "showPrice가 ‘기다리는 중’을 출력합니다.",
      "가격이 준비되기를 기다리는 동안 함수 밖의 ‘다른 작업은 계속’이 출력됩니다.",
      "타이머가 가격 4000을 준비하면 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "기다리던 일이 실패할 수도 있습니다. 실제 요청에서는 try/catch 등으로 실패했을 때 무엇을 보여 줄지도 정해야 합니다.",
    mode: "console"
  },
  비동기: {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "서버에 물어본 가격이 바로 오지 않을 수 있습니다. Promise는 아직 끝나지 않은 일의 결과를 나중에 받도록 나타내는 객체입니다. 성공 값이나 실패 이유를 받을 수 있습니다.",
      "await는 이 async 함수의 나머지 작업을 결과가 준비될 때까지 미룹니다. 함수 밖의 다른 작업까지 모두 멈추지는 않습니다. 예제에서는 실제 서버 대신 타이머로 기다림을 흉내 냅니다."
    ],
    flow: [
      "showPrice가 ‘기다리는 중’을 출력합니다.",
      "가격이 준비되기를 기다리는 동안 함수 밖의 ‘다른 작업은 계속’이 출력됩니다.",
      "타이머가 가격 4000을 준비하면 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "기다리던 일이 실패할 수도 있습니다. 실제 요청에서는 try/catch 등으로 실패했을 때 무엇을 보여 줄지도 정해야 합니다.",
    mode: "console"
  },
  "resolve / reject": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "서버에 물어본 가격이 바로 오지 않을 수 있습니다. Promise는 아직 끝나지 않은 일의 결과를 나중에 받도록 나타내는 객체입니다. 성공 값이나 실패 이유를 받을 수 있습니다.",
      "await는 이 async 함수의 나머지 작업을 결과가 준비될 때까지 미룹니다. 함수 밖의 다른 작업까지 모두 멈추지는 않습니다. 예제에서는 실제 서버 대신 타이머로 기다림을 흉내 냅니다."
    ],
    flow: [
      "showPrice가 ‘기다리는 중’을 출력합니다.",
      "가격이 준비되기를 기다리는 동안 함수 밖의 ‘다른 작업은 계속’이 출력됩니다.",
      "타이머가 가격 4000을 준비하면 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "기다리던 일이 실패할 수도 있습니다. 실제 요청에서는 try/catch 등으로 실패했을 때 무엇을 보여 줄지도 정해야 합니다.",
    mode: "console"
  },
  "대기·성공·실패": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "서버에 물어본 가격이 바로 오지 않을 수 있습니다. Promise는 아직 끝나지 않은 일의 결과를 나중에 받도록 나타내는 객체입니다. 성공 값이나 실패 이유를 받을 수 있습니다.",
      "await는 이 async 함수의 나머지 작업을 결과가 준비될 때까지 미룹니다. 함수 밖의 다른 작업까지 모두 멈추지는 않습니다. 예제에서는 실제 서버 대신 타이머로 기다림을 흉내 냅니다."
    ],
    flow: [
      "showPrice가 ‘기다리는 중’을 출력합니다.",
      "가격이 준비되기를 기다리는 동안 함수 밖의 ‘다른 작업은 계속’이 출력됩니다.",
      "타이머가 가격 4000을 준비하면 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "기다리던 일이 실패할 수도 있습니다. 실제 요청에서는 try/catch 등으로 실패했을 때 무엇을 보여 줄지도 정해야 합니다.",
    mode: "console"
  },
  "async 함수의 반환값": {
    code: 'function waitForPrice() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(4000), 200);\n  });\n}\nasync function showPrice() {\n  console.log("기다리는 중");\n  const price = await waitForPrice();\n  console.log("받은 가격:", price);\n}\nshowPrice();\nconsole.log("다른 작업은 계속");\n',
    explain: [
      "서버에 물어본 가격이 바로 오지 않을 수 있습니다. Promise는 아직 끝나지 않은 일의 결과를 나중에 받도록 나타내는 객체입니다. 성공 값이나 실패 이유를 받을 수 있습니다.",
      "await는 이 async 함수의 나머지 작업을 결과가 준비될 때까지 미룹니다. 함수 밖의 다른 작업까지 모두 멈추지는 않습니다. 예제에서는 실제 서버 대신 타이머로 기다림을 흉내 냅니다."
    ],
    flow: [
      "showPrice가 ‘기다리는 중’을 출력합니다.",
      "가격이 준비되기를 기다리는 동안 함수 밖의 ‘다른 작업은 계속’이 출력됩니다.",
      "타이머가 가격 4000을 준비하면 await 다음 줄이 이어집니다."
    ],
    result: "기다리는 중 → 다른 작업은 계속 → 받은 가격: 4000 순서입니다.",
    edit: "resolve를 reject로 바꾸려면 Promise 생성자에서 reject도 받고, 호출부에 try/catch를 추가해 실패를 처리하세요.",
    warning:
      "기다리던 일이 실패할 수도 있습니다. 실제 요청에서는 try/catch 등으로 실패했을 때 무엇을 보여 줄지도 정해야 합니다.",
    mode: "console"
  },
  api: {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "브라우저가 서버에 ‘메뉴를 주세요’라고 요청하는 예제입니다. fetch는 응답을 받아 오고, response에는 상태 코드와 응답 본문 등을 읽는 기능이 들어 있습니다.",
      "response.ok로 성공 상태인지 확인한 다음 response.json()으로 JSON 본문을 읽습니다. 응답을 받는 일과 본문을 값으로 읽는 일을 순서대로 기다립니다."
    ],
    flow: [
      "/api/menu로 GET 요청을 보냅니다.",
      "서버가 돌려준 상태가 성공 범위인지 검사합니다.",
      "실패 상태이면 throw로 오류를 발생시킵니다.",
      "성공하면 JSON 본문을 읽어 호출한 곳에 돌려줍니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "404 응답을 받았다고 fetch가 자동으로 실패 처리되는 것은 아닙니다. 연결 자체의 실패, HTTP 실패 상태, 잘못된 JSON을 나누어 확인하세요.",
    mode: "console"
  },
  fetch: {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "브라우저가 서버에 ‘메뉴를 주세요’라고 요청하는 예제입니다. fetch는 응답을 받아 오고, response에는 상태 코드와 응답 본문 등을 읽는 기능이 들어 있습니다.",
      "response.ok로 성공 상태인지 확인한 다음 response.json()으로 JSON 본문을 읽습니다. 응답을 받는 일과 본문을 값으로 읽는 일을 순서대로 기다립니다."
    ],
    flow: [
      "/api/menu로 GET 요청을 보냅니다.",
      "서버가 돌려준 상태가 성공 범위인지 검사합니다.",
      "실패 상태이면 throw로 오류를 발생시킵니다.",
      "성공하면 JSON 본문을 읽어 호출한 곳에 돌려줍니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "404 응답을 받았다고 fetch가 자동으로 실패 처리되는 것은 아닙니다. 연결 자체의 실패, HTTP 실패 상태, 잘못된 JSON을 나누어 확인하세요.",
    mode: "console"
  },
  "response.ok": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "브라우저가 서버에 ‘메뉴를 주세요’라고 요청하는 예제입니다. fetch는 응답을 받아 오고, response에는 상태 코드와 응답 본문 등을 읽는 기능이 들어 있습니다.",
      "response.ok로 성공 상태인지 확인한 다음 response.json()으로 JSON 본문을 읽습니다. 응답을 받는 일과 본문을 값으로 읽는 일을 순서대로 기다립니다."
    ],
    flow: [
      "/api/menu로 GET 요청을 보냅니다.",
      "서버가 돌려준 상태가 성공 범위인지 검사합니다.",
      "실패 상태이면 throw로 오류를 발생시킵니다.",
      "성공하면 JSON 본문을 읽어 호출한 곳에 돌려줍니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "404 응답을 받았다고 fetch가 자동으로 실패 처리되는 것은 아닙니다. 연결 자체의 실패, HTTP 실패 상태, 잘못된 JSON을 나누어 확인하세요.",
    mode: "console"
  },
  "response.json()": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "브라우저가 서버에 ‘메뉴를 주세요’라고 요청하는 예제입니다. fetch는 응답을 받아 오고, response에는 상태 코드와 응답 본문 등을 읽는 기능이 들어 있습니다.",
      "response.ok로 성공 상태인지 확인한 다음 response.json()으로 JSON 본문을 읽습니다. 응답을 받는 일과 본문을 값으로 읽는 일을 순서대로 기다립니다."
    ],
    flow: [
      "/api/menu로 GET 요청을 보냅니다.",
      "서버가 돌려준 상태가 성공 범위인지 검사합니다.",
      "실패 상태이면 throw로 오류를 발생시킵니다.",
      "성공하면 JSON 본문을 읽어 호출한 곳에 돌려줍니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "404 응답을 받았다고 fetch가 자동으로 실패 처리되는 것은 아닙니다. 연결 자체의 실패, HTTP 실패 상태, 잘못된 JSON을 나누어 확인하세요.",
    mode: "console"
  },
  "http 요청과 응답": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "브라우저가 서버에 ‘메뉴를 주세요’라고 요청하는 예제입니다. fetch는 응답을 받아 오고, response에는 상태 코드와 응답 본문 등을 읽는 기능이 들어 있습니다.",
      "response.ok로 성공 상태인지 확인한 다음 response.json()으로 JSON 본문을 읽습니다. 응답을 받는 일과 본문을 값으로 읽는 일을 순서대로 기다립니다."
    ],
    flow: [
      "/api/menu로 GET 요청을 보냅니다.",
      "서버가 돌려준 상태가 성공 범위인지 검사합니다.",
      "실패 상태이면 throw로 오류를 발생시킵니다.",
      "성공하면 JSON 본문을 읽어 호출한 곳에 돌려줍니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "404 응답을 받았다고 fetch가 자동으로 실패 처리되는 것은 아닙니다. 연결 자체의 실패, HTTP 실패 상태, 잘못된 JSON을 나누어 확인하세요.",
    mode: "console"
  },
  "네트워크 실패와 http 오류": {
    code: 'async function loadMenu() {\n  const response = await fetch("/api/menu");\n  if (!response.ok) {\n    throw new Error(`요청 실패: ${response.status}`);\n  }\n  const menu = await response.json();\n  return menu;\n}\n\n// /api/menu를 제공하는 cafe-lab 서버에서 사용합니다.\n// loadMenu().then(console.log).catch(console.error);\n',
    explain: [
      "브라우저가 서버에 ‘메뉴를 주세요’라고 요청하는 예제입니다. fetch는 응답을 받아 오고, response에는 상태 코드와 응답 본문 등을 읽는 기능이 들어 있습니다.",
      "response.ok로 성공 상태인지 확인한 다음 response.json()으로 JSON 본문을 읽습니다. 응답을 받는 일과 본문을 값으로 읽는 일을 순서대로 기다립니다."
    ],
    flow: [
      "/api/menu로 GET 요청을 보냅니다.",
      "서버가 돌려준 상태가 성공 범위인지 검사합니다.",
      "실패 상태이면 throw로 오류를 발생시킵니다.",
      "성공하면 JSON 본문을 읽어 호출한 곳에 돌려줍니다."
    ],
    result:
      "cafe-lab 서버에서 호출하면 메뉴 데이터가 반환됩니다. 이 정적 학습 사이트에는 해당 API가 없으므로 URL만 복사해 실행하면 같은 결과가 나오지 않습니다.",
    edit: "Network에서 실제 요청 주소·상태 코드·응답 본문을 확인하고 경로를 틀리게 했을 때와 서버를 껐을 때를 비교하세요.",
    warning:
      "404 응답을 받았다고 fetch가 자동으로 실패 처리되는 것은 아닙니다. 연결 자체의 실패, HTTP 실패 상태, 잘못된 JSON을 나누어 확인하세요.",
    mode: "console"
  },
  localstorage: {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "브라우저에서 수량을 기억해 두었다가 다시 읽는 예제입니다. localStorage에는 문자열만 저장하므로 객체를 JSON 글자로 바꾸어 넣습니다.",
      "저장할 때 붙인 이름으로 값을 다시 읽습니다. 그 이름이 없으면 null을 받으므로 기본 수량 1을 사용합니다. 값이 있다면 JSON을 읽어 객체로 돌립니다."
    ],
    flow: [
      "연습용 이름으로 수량 2를 저장합니다.",
      "같은 이름으로 저장된 글자를 읽습니다.",
      "값이 있으면 JSON을 읽고, 없으면 기본 수량 1을 사용합니다.",
      "수량을 출력한 뒤 연습용 저장 항목을 지웁니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "이 예제는 브라우저 안에 연습용 수량을 보관합니다. 서버의 주문 저장과 다르며, 비밀번호나 비밀 키를 이렇게 넣어 두면 안 됩니다.",
    mode: "console"
  },
  "setitem / getitem / removeitem": {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "브라우저에서 수량을 기억해 두었다가 다시 읽는 예제입니다. localStorage에는 문자열만 저장하므로 객체를 JSON 글자로 바꾸어 넣습니다.",
      "저장할 때 붙인 이름으로 값을 다시 읽습니다. 그 이름이 없으면 null을 받으므로 기본 수량 1을 사용합니다. 값이 있다면 JSON을 읽어 객체로 돌립니다."
    ],
    flow: [
      "연습용 이름으로 수량 2를 저장합니다.",
      "같은 이름으로 저장된 글자를 읽습니다.",
      "값이 있으면 JSON을 읽고, 없으면 기본 수량 1을 사용합니다.",
      "수량을 출력한 뒤 연습용 저장 항목을 지웁니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "이 예제는 브라우저 안에 연습용 수량을 보관합니다. 서버의 주문 저장과 다르며, 비밀번호나 비밀 키를 이렇게 넣어 두면 안 됩니다.",
    mode: "console"
  },
  복원: {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "브라우저에서 수량을 기억해 두었다가 다시 읽는 예제입니다. localStorage에는 문자열만 저장하므로 객체를 JSON 글자로 바꾸어 넣습니다.",
      "저장할 때 붙인 이름으로 값을 다시 읽습니다. 그 이름이 없으면 null을 받으므로 기본 수량 1을 사용합니다. 값이 있다면 JSON을 읽어 객체로 돌립니다."
    ],
    flow: [
      "연습용 이름으로 수량 2를 저장합니다.",
      "같은 이름으로 저장된 글자를 읽습니다.",
      "값이 있으면 JSON을 읽고, 없으면 기본 수량 1을 사용합니다.",
      "수량을 출력한 뒤 연습용 저장 항목을 지웁니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "이 예제는 브라우저 안에 연습용 수량을 보관합니다. 서버의 주문 저장과 다르며, 비밀번호나 비밀 키를 이렇게 넣어 두면 안 됩니다.",
    mode: "console"
  },
  "초기값 처리": {
    code: 'const key = "practice-cafe-order";\nconst saved = { quantity: 2 };\nlocalStorage.setItem(key, JSON.stringify(saved));\nconst raw = localStorage.getItem(key);\nconst restored =\n  raw === null ? { quantity: 1 } : JSON.parse(raw);\nconsole.log(restored.quantity);\nlocalStorage.removeItem(key);\n',
    explain: [
      "브라우저에서 수량을 기억해 두었다가 다시 읽는 예제입니다. localStorage에는 문자열만 저장하므로 객체를 JSON 글자로 바꾸어 넣습니다.",
      "저장할 때 붙인 이름으로 값을 다시 읽습니다. 그 이름이 없으면 null을 받으므로 기본 수량 1을 사용합니다. 값이 있다면 JSON을 읽어 객체로 돌립니다."
    ],
    flow: [
      "연습용 이름으로 수량 2를 저장합니다.",
      "같은 이름으로 저장된 글자를 읽습니다.",
      "값이 있으면 JSON을 읽고, 없으면 기본 수량 1을 사용합니다.",
      "수량을 출력한 뒤 연습용 저장 항목을 지웁니다."
    ],
    result: "동일 출처에서 저장이 허용되면 2가 출력되고 연습용 키는 삭제됩니다.",
    edit: "저장하는 줄을 잠시 빼고 기본값 1이 사용되는지 확인하세요.",
    warning:
      "이 예제는 브라우저 안에 연습용 수량을 보관합니다. 서버의 주문 저장과 다르며, 비밀번호나 비밀 키를 이렇게 넣어 두면 안 됩니다.",
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
    code: 'console.log("이 코드는 Node.js에서 실행합니다.");\nconsole.log("Node 버전:", process.version);\n',
    mode: "node",
    explain: [
      "JavaScript는 브라우저 안에서만 실행되는 언어가 아닙니다. Node.js를 설치하면 터미널에서 .js나 .mjs 파일을 실행할 수 있습니다.",
      "파일을 읽거나 서버를 켜는 작업에는 브라우저에 없는 Node 기능을 사용합니다. 예제의 process.version은 실행 중인 Node의 버전을 읽습니다."
    ],
    flow: [
      "main.mjs 파일에 코드를 저장합니다.",
      "그 파일이 있는 폴더의 터미널에서 node main.mjs를 실행합니다.",
      "Node가 두 console.log를 실행하고 터미널에 글자를 출력합니다."
    ],
    result: "안내 문구와 현재 설치된 Node 버전이 터미널에 보입니다.",
    edit: "첫 console.log의 문구를 바꾸고 파일을 저장한 뒤 같은 명령으로 다시 실행해 보세요.",
    warning:
      "이 코드를 브라우저 콘솔에 그대로 넣으면 process가 없다는 오류가 날 수 있습니다. Node 코드는 Node에서 실행하세요."
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
