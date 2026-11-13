window.ACADEMY_SOLUTIONS = {
  "start-01": {
    code: "<h1>종현의 카페</h1>\n<p>문구 한 줄을 바꾸고 실행해 봅니다.</p>\n",
    explanation: "태그 사이의 보이는 글자만 바꿉니다. 태그의 시작과 끝은 유지합니다.",
    expected: "제목이 종현의 카페로 표시됩니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: 나의 첫 웹페이지",
      "이 부분만 다음과 같이 바꿉니다: 종현의 카페",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "start-02": {
    code: '<h1>요청 결과를 화면에 보여 주기</h1>\n<p id="result"></p>\n<script>\n  // 실제 네트워크 없이 응답 데이터를 가정한 예제입니다.\n  const responseData = { name: "커피", price: 4500 };\n  document.querySelector("#result").textContent =\n    `${responseData.name}: ${responseData.price}원`;\n</script>\n',
    explanation: "서버 응답이라고 가정한 데이터의 가격 속성을 바꿉니다.",
    expected: "표시는 커피: 4500원입니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: price: 4000",
      "이 부분만 다음과 같이 바꿉니다: price: 4500",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "start-03": {
    code: "function addFee(price) {\n  const total = price + 1000;\n  return total;\n}\n\nconsole.log(addFee(4000));\n",
    explanation: "함수의 입력값은 그대로 두고 추가 요금만 바꿉니다.",
    expected: "콘솔 출력은 5000입니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: price + 500",
      "이 부분만 다음과 같이 바꿉니다: price + 1000",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "start-04": {
    code: "",
    steps: [
      "README에서 실행 방법을 찾습니다.",
      "package.json의 scripts에서 실제 실행 명령을 읽습니다.",
      "첫 화면 문구를 프로젝트 검색으로 찾아 파일 경로를 적습니다."
    ],
    explanation:
      "수정할 파일은 프로젝트 구조와 데이터 흐름의 증거로 정합니다. 파일 이름만으로 단정하지 않습니다.",
    expected: "본인의 프로젝트 경로·명령·변경 전후 확인 방법을 적을 수 있습니다."
  },
  "html-01": {
    code: '<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1"\n    />\n    <title>카페 안내</title>\n  </head>\n  <body>\n    <h1>오늘의 추천</h1>\n    <p>화면의 내용은 body 안에 있습니다.</p>\n  </body>\n</html>\n',
    explanation: "title은 탭 제목입니다. h1은 별도로 “오늘의 추천”으로 바꿉니다.",
    expected: "문서 제목은 카페 안내, 본문 제목은 오늘의 추천입니다.",
    steps: [
      "title 안의 글자를 “카페 안내”로 바꿉니다.",
      "h1 안의 글자를 “오늘의 추천”으로 바꿉니다.",
      "실행 결과 위 문서 제목과 본문 제목을 각각 확인합니다."
    ]
  },
  "html-02": {
    code: '<h1>카페 안내</h1>\n<h2>인기 메뉴</h2>\n<ul>\n  <li>커피</li>\n  <li>소금빵</li>\n  <li>카페라테</li>\n</ul>\n<a href="#contact">문의하기</a>\n<section id="contact">\n  <h2>연락처</h2>\n  <p>이곳은 연습용 소개입니다.</p>\n</section>\n',
    explanation: "목록에 li를 추가하고 링크 글자를 바꾸되 href는 유지합니다.",
    expected: "메뉴 세 개와 문의하기 링크가 보이고 같은 contact 영역으로 이동합니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다:   <li>소금빵</li>",
      "이 부분만 다음과 같이 바꿉니다:   <li>소금빵</li>\n  <li>카페라테</li>",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "html-03": {
    code: "",
    steps: [
      "미리보기를 클릭한 뒤 Tab으로 링크와 버튼에 초점을 옮깁니다.",
      "링크에서 Enter, 버튼에서 Enter 또는 Space를 시험합니다.",
      "제목 계층과 포커스 표시를 눈으로 확인합니다."
    ],
    explanation: "button은 기본 키보드 동작을 제공하며 제목 태그는 구조를 드러냅니다.",
    expected: "버튼 문구가 확인했어요로 바뀌고 키보드로도 조작할 수 있습니다."
  },
  "html-04": {
    code: '<form id="join">\n  <label for="email">이메일</label>\n  <input id="email" name="email" type="email" required />\n  <label for="plan">요금제</label>\n  <select id="plan" name="plan">\n    <option value="free">무료</option>\n    <option value="pro">프로</option>\n    <option value="team">팀 요금제</option>\n  </select>\n  <button type="submit">입력 확인</button>\n</form>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#join")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const data = new FormData(event.currentTarget);\n      document.querySelector("#result").textContent =\n        `${data.get("email")} / ${data.get("plan")}`;\n    });\n</script>\n',
    explanation: "보이는 팀 요금제와 전송용 값 team을 구분합니다.",
    expected: "팀 요금제를 고르면 결과에 team이 표시됩니다.",
    steps: [
      '편집기에서 다음 부분을 찾습니다:     <option value="pro">프로</option>',
      '이 부분만 다음과 같이 바꿉니다:     <option value="pro">프로</option>\n    <option value="team">팀 요금제</option>',
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "html-05": {
    code: "",
    steps: [
      "빈 값·0·1·20·21·1.5를 각각 입력합니다.",
      "각 경우를 제출하고 결과 문구를 기록합니다.",
      "검사 조건이 경계 1과 20을 포함하는 이유를 설명합니다."
    ],
    explanation: "raw 빈 값 검사 뒤 정수·범위를 확인합니다.",
    expected: "1·20은 허용, 나머지 제시 값은 오류 안내입니다."
  },
  "html-06": {
    code: '<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1"\n    />\n    <meta\n      name="description"\n      content="메뉴와 주문 방법을 안내합니다."\n    />\n    <title>종현 카페 안내</title>\n  </head>\n  <body>\n    <main>\n      <h1>동네 카페</h1>\n      <p>메뉴와 주문 방법을 소개합니다.</p>\n    </main>\n  </body>\n</html>\n',
    explanation:
      "문서 설정의 title·description과 본문 문구를 실제 서비스 의미에 맞게 확인합니다.",
    expected: "변경한 이름·소개와 문서 제목을 구분할 수 있습니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: 동네 카페",
      "이 부분만 다음과 같이 바꿉니다: 종현 카페",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "css-01": {
    code: '<style>\n  .menu {\n    color: #2658b5;\n  }\n  #featured {\n    color: #b04c25;\n  }\n  .menu:hover {\n    text-decoration: underline;\n  }\n</style>\n<h1>스타일 적용 대상</h1>\n<p class="menu">일반 메뉴</p>\n<p class="menu" id="featured">오늘의 추천</p>\n',
    explanation:
      "일반 class 규칙을 바꿔도 이 예제의 id 규칙이 두 번째 문단의 색을 결정합니다.",
    expected: "일반 메뉴는 파란색, 추천 메뉴는 기존 색입니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: .menu { color: teal; }",
      "이 부분만 다음과 같이 바꿉니다: .menu { color: #2658b5; }",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "css-02": {
    code: '<style>\n  * {\n    box-sizing: border-box;\n  }\n  .card {\n    width: 100%;\n    max-width: 320px;\n    padding: 40px;\n    border: 2px solid teal;\n    margin: 20px 0;\n  }\n</style>\n<div class="card">안쪽 여백과 바깥 여백을 비교합니다.</div>\n<div class="card">같은 너비의 두 번째 카드입니다.</div>\n',
    explanation:
      "border-box라서 테두리까지의 최대 너비는 그대로이며 내용 폭이 줄어듭니다.",
    expected: "최대 320px 안에서 내용과 테두리 사이가 넓어집니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: padding: 24px",
      "이 부분만 다음과 같이 바꿉니다: padding: 40px",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "css-03": {
    code: "<style>\n  article {\n    max-width: 40rem;\n    line-height: 1.3;\n  }\n  h1 {\n    font-size: 2rem;\n    line-height: 1.35;\n  }\n  p {\n    margin: 1rem 0;\n  }\n  pre {\n    padding: 20px;\n    overflow: auto;\n    background: #edf4f4;\n  }\n</style>\n<article>\n  <h1>읽기 좋은 학습 화면</h1>\n  <p>\n    글줄의 폭과 행간을 조정하면 긴 설명도 순서대로 읽기 쉽습니다.\n    이 문장의 길이를 늘려 보며 비교하세요.\n  </p>\n  <pre><code>function total(price) {\n  return price + 500;\n}</code></pre>\n</article>\n",
    explanation:
      "본문의 줄 높이만 바꾸어 읽기성을 비교합니다. 원래 1.9로도 다시 실행해 보세요.",
    expected: "제목 크기는 같고 문단의 글줄 사이가 더 좁아집니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: line-height: 1.9",
      "이 부분만 다음과 같이 바꿉니다: line-height: 1.3",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "css-04": {
    code: '<style>\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 32px;\n  }\n  .product {\n    position: relative;\n    flex: 1 1 180px;\n    padding: 24px;\n    border: 1px solid #aac7c9;\n  }\n  .badge {\n    position: absolute;\n    top: 6px;\n    right: 20px;\n  }\n</style>\n<div class="row">\n  <article class="product">\n    <span class="badge">NEW</span>\n    <h2>커피</h2>\n    <p>4000원</p>\n  </article>\n  <article class="product">\n    <h2>빵</h2>\n    <p>3500원</p>\n  </article>\n</div>\n',
    explanation: "카드 사이 간격과 배지의 기준점 위치를 각각 수정합니다.",
    expected: "카드 사이 간격이 늘고 배지는 카드 안에서 왼쪽으로 이동합니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: gap: 18px",
      "이 부분만 다음과 같이 바꿉니다: gap: 32px",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "css-05": {
    code: '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 16px;\n  }\n  .grid article {\n    padding: 24px;\n    background: #eaf4f2;\n  }\n</style>\n<div class="grid">\n  <article>커피</article>\n  <article>라테</article>\n  <article>에이드</article>\n  <article>소금빵</article>\n  <article>쿠키</article>\n</div>\n',
    explanation: "열 개수는 부모에서, 데이터 항목은 자식 article에서 추가합니다.",
    expected: "세 열에 다섯 개의 카드가 순서대로 놓입니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: repeat(2, minmax(0, 1fr))",
      "이 부분만 다음과 같이 바꿉니다: repeat(3, minmax(0, 1fr))",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "css-06": {
    code: "",
    steps: [
      "360px와 800px 미리보기를 번갈아 선택합니다.",
      "새 탭·개발자 도구 등을 사용해 599·600·601px에서 조건을 비교합니다.",
      "버튼을 키보드로 찾아 포커스 테두리를 확인합니다."
    ],
    explanation: "이 예제의 min-width:600px는 600px를 포함하는 이상 조건입니다.",
    expected: "좁은 화면 한 열, 600px 이상 두 열이며 포커스 표시가 보입니다."
  },
  "js-01": {
    code: 'const raw = "4500";\nconst wrong = raw + 500;\nconst price = Number(raw);\nconst total = price + 500;\n\nconsole.log(typeof raw);\nconsole.log(wrong);\nconsole.log(`${total}원`);\n',
    explanation:
      '숫자로 바꾸기 전·후의 덧셈을 비교합니다. 추가로 raw를 "커피"로 바꾸면 숫자 변환 실패를 확인할 수 있습니다.',
    expected: "문자열 연결은 4500500, 숫자 계산은 5000원입니다.",
    steps: [
      '편집기에서 다음 부분을 찾습니다: const raw = "4000"',
      '이 부분만 다음과 같이 바꿉니다: const raw = "4500"',
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "js-02": {
    code: 'function ticketPrice(age, member) {\n  if (!Number.isInteger(age) || age < 0) {\n    return "나이를 확인하세요";\n  }\n  const base = age < 15 ? 5000 : 10000;\n  return member ? base * 0.9 : base;\n}\n\nconsole.log(ticketPrice(12, true));\nconsole.log(ticketPrice(13, false));\nconsole.log(0 || 10);\nconsole.log(0 ?? 10);\n',
    explanation:
      "비교 연산자는 유지하고 경계값을 바꿉니다. 호출 인수도 각각 14·15·16으로 바꿔 확인합니다.",
    expected: "14세 비회원은 5000원, 15·16세 비회원은 10000원입니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: age < 13",
      "이 부분만 다음과 같이 바꿉니다: age < 15",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "js-03": {
    code: "function subtotal(prices) {\n  let sum = 0;\n  for (let i = 0; i < prices.length; i += 1) {\n    sum += prices[i];\n  }\n  return sum;\n}\n\nconst result = subtotal([4000, 3500, 4500]);\nconsole.log(result);\n",
    explanation: "입력 배열에 항목을 추가합니다. 빈 배열 호출도 따로 비교합니다.",
    expected: "세 항목 합계는 12000, 빈 배열은 0입니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: subtotal([4000, 3500])",
      "이 부분만 다음과 같이 바꿉니다: subtotal([4000, 3500, 4500])",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "js-04": {
    code: 'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst json = JSON.stringify(menus);\nconst restored = JSON.parse(json);\n\nconsole.log(restored[1].name);\nconsole.log(typeof json);\nconst next = menus.map((menu) =>\n  menu.id === "bread" ? { ...menu, price: 3800 } : menu\n);\nconsole.log(next[1].price, menus[1].price);\n',
    explanation:
      "대상을 id로 고르고 새 객체를 만들어 빵 가격만 바꿉니다. 마지막 출력도 next[1].price와 menus[1].price로 비교하세요.",
    expected: "새 빵 가격은 3800, 기존 빵 가격은 3500입니다.",
    steps: [
      '편집기에서 다음 부분을 찾습니다: menu.id === "coffee" ? { ...menu, price: 4200 }',
      '이 부분만 다음과 같이 바꿉니다: menu.id === "bread" ? { ...menu, price: 3800 }',
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "js-05": {
    code: 'const menus = [\n  { name: "커피", price: 4000 },\n  { name: "라테", price: 4500 },\n  { name: "빵", price: 3500 }\n];\nconst selected = menus.filter((menu) => menu.price <= 4500);\nconst names = selected.map((menu) => menu.name);\nconst total = selected.reduce((sum, menu) => sum + menu.price, 0);\n\nconsole.log(names);\nconsole.log(total);\nconsole.log(menus.find((menu) => menu.name === "없는 메뉴"));\n',
    explanation: "선별 결과가 바뀌면 뒤의 map과 reduce도 새 목록을 사용합니다.",
    expected: "세 이름과 합계 12000이 표시됩니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: menu.price <= 4000",
      "이 부분만 다음과 같이 바꿉니다: menu.price <= 4500",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "js-06": {
    code: '<h1>여행 준비물</h1>\n<ul id="list"></ul>\n<script>\n  const items = ["여권", "충전기", "지갑", "우산 <b>필수</b>"];\n  const list = document.querySelector("#list");\n  items.forEach((name) => {\n    const li = document.createElement("li");\n    li.textContent = name;\n    list.appendChild(li);\n  });\n</script>\n',
    explanation:
      "배열의 문자열을 추가합니다. textContent는 태그를 HTML로 해석하지 않습니다.",
    expected: "네 번째 항목에 <b>도 글자로 표시됩니다.",
    steps: [
      '편집기에서 다음 부분을 찾습니다: ["여권", "충전기", "지갑"]',
      '이 부분만 다음과 같이 바꿉니다: ["여권", "충전기", "지갑", "우산 <b>필수</b>"]',
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "js-07": {
    code: "",
    steps: [
      "준비물 이름을 입력하고 버튼 대신 Enter로 제출합니다.",
      "입력칸이 비는지와 항목이 한 번만 추가되는지 확인합니다.",
      "공백만 입력해 새 항목이 생기는지 비교합니다."
    ],
    explanation:
      "trim 후 빈 값이면 return하여 추가를 중단합니다. render는 목록을 비우고 현재 배열을 다시 그립니다.",
    expected: "공백 항목은 추가되지 않고 정상 항목만 한 번씩 표시됩니다."
  },
  "js-08": {
    code: "",
    steps: [
      "체크박스를 끄고 정상 실행합니다.",
      "실패 상황 만들기를 켜서 다시 실행합니다.",
      "두 경우 모두 대기 중 비활성화와 완료 후 버튼 복구를 확인합니다."
    ],
    explanation: "finally가 성공·실패 공통으로 버튼을 다시 활성화합니다.",
    expected: "성공 문구 또는 실패 이유가 보이고 다시 누를 수 있습니다."
  },
  "js-09": {
    code: "",
    steps: [
      "정상 모드를 실행해 응답 데이터를 확인합니다.",
      "404를 선택해 상태 검사 경로를 확인합니다.",
      "잘못된 JSON을 선택해 본문 해석 실패를 확인합니다."
    ],
    explanation: "응답 상태 성공과 본문 JSON 해석 성공은 별개입니다.",
    expected: "정상은 coffee, 나머지는 서로 다른 오류 이유를 표시합니다."
  },
  "js-10": {
    code: "",
    steps: [
      "이름을 입력하고 저장을 누릅니다.",
      "같은 브라우저에서 예제를 다시 실행합니다.",
      "저장 지우기로 해당 키만 제거합니다."
    ],
    explanation:
      "변수 변경과 저장 호출을 구분합니다. 이 실습의 저장은 브라우저 환경과 출처의 정책을 따릅니다.",
    expected: "저장이 허용되면 다시 실행한 입력칸에 이름이 복원됩니다."
  },
  "node-01": {
    code: "",
    steps: [
      "Node.js 버전을 확인합니다.",
      "Node 예제 묶음의 node-01 폴더에서 node main.mjs cafe를 실행합니다.",
      "출력의 현재 폴더와 추가 인수를 확인합니다."
    ],
    explanation: "브라우저가 아닌 Node에서 process 정보를 읽는 예제입니다.",
    expected: "추가 인수에 cafe가 보이고 실제 Node 버전·작업 폴더가 출력됩니다."
  },
  "node-02": {
    code: '// pricing.mjs\nexport function total(price, qty, fee = 0) {\n  return price * qty + fee;\n}\n\n// main.mjs\nimport { total } from "./pricing.mjs";\nconsole.log(total(4000, 2, 500));',
    explanation:
      "실제 두 파일을 각각 수정합니다. pricing.mjs의 return에 fee를 더하고 main.mjs 호출에서 500을 전달합니다.",
    expected: "총액이 8500입니다.",
    steps: [
      "pricing.mjs 함수에 fee = 0 매개변수를 추가합니다.",
      "return price * qty + fee로 바꿉니다.",
      "main.mjs 호출을 total(4000, 2, 500)으로 바꾸고 실행합니다."
    ]
  },
  "node-03": {
    code: "",
    steps: [
      "node-examples/node-03에서 node server.mjs를 실행합니다.",
      "http://127.0.0.1:4177/api/menu를 엽니다.",
      "/missing을 열어 비교하고 종료할 때 Ctrl+C를 누릅니다."
    ],
    explanation: "서버 프로세스와 접속하는 브라우저는 역할이 다릅니다.",
    expected: "정상 경로는 JSON과 200, 다른 경로는 404입니다."
  },
  "node-04": {
    code: "",
    steps: [
      "정상 수량 1·20으로 createOrder를 호출합니다.",
      "0·21과 없는 menuId로 바꾸어 각각 실행합니다.",
      "임의 total 값을 보내도 서버 기준 계산을 쓰는지 확인합니다."
    ],
    explanation: "입력 검증과 가격 계산은 서버의 기준을 사용합니다.",
    expected: "정상 수량만 계산되고 잘못된 입력은 명확히 거부됩니다."
  },
  "node-05": {
    code: 'import { readFile, writeFile } from "node:fs/promises";\n\nconst file = new URL("./practice-data.json", import.meta.url);\nconst data = { shop: "종현 카페", quantity: 2 };\nawait writeFile(file, JSON.stringify(data, null, 2), "utf8");\n\nconst text = await readFile(file, "utf8");\nconst restored = JSON.parse(text);\nconsole.log(restored.shop, restored.quantity);\n',
    explanation: "예제 전용 practice-data.json에 쓰고 같은 파일에서 다시 읽습니다.",
    expected: "파일과 콘솔에 종현 카페가 표시됩니다.",
    steps: [
      '편집기에서 다음 부분을 찾습니다: shop: "나의 카페"',
      '이 부분만 다음과 같이 바꿉니다: shop: "종현 카페"',
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "node-06": {
    code: "",
    steps: [
      "기본 명령 node config.mjs를 실행합니다.",
      "macOS/Linux에서는 PORT=4200 node config.mjs로 비교합니다. 다른 셸은 해당 환경 변수 설정법을 사용합니다.",
      "PORT=wrong을 넣어 검사가 실패하는지 확인합니다."
    ],
    explanation: "환경 변수는 문자열이므로 숫자 변환과 검사 뒤 사용합니다.",
    expected:
      "정상 포트는 표시하고 잘못된 값은 오류로 거부하며 실제 API 키는 출력하지 않습니다."
  },
  "node-07": {
    code: "",
    steps: [
      "cafe-lab을 풀고 node server.mjs를 실행합니다.",
      "HTTP 주소에서 커피 수량 2로 주문합니다.",
      "새로고침·서버 재시작 후 주문 기록을 확인합니다."
    ],
    explanation:
      "메뉴 기준 가격은 서버가 결정하고, 저장 파일이 재시작 뒤 기록을 유지합니다.",
    expected: "기본 커피 2개는 8000원이며 기록을 다시 조회할 수 있습니다."
  },
  "react-01": {
    code: 'function MenuCard({ name, price, desc = "오늘의 메뉴" }) {\n  return (\n    <article>\n      <h2>{name}</h2>\n      <p>{price}원</p>\n      <p>{desc}</p>\n    </article>\n  );\n}\nfunction App() {\n  return (\n    <main>\n      <h1>메뉴</h1>\n      <MenuCard name="커피" price={4200} desc="고소한 커피" />\n      <MenuCard name="빵" price={3500} desc="따뜻한 소금빵" />\n    </main>\n  );\n}\n',
    explanation: "부모가 전달하는 가격만 바꾸고 빵에는 desc를 추가합니다.",
    expected: "커피는 4200원, 빵에는 추가한 설명이 보입니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: price={4000}",
      "이 부분만 다음과 같이 바꿉니다: price={4200}",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "react-02": {
    code: "",
    steps: [
      "초기화 후 스냅샷 두 번을 한 번 누릅니다.",
      "콘솔 값과 화면 값을 각각 적습니다.",
      "다시 초기화 후 업데이트 두 번을 누릅니다."
    ],
    explanation:
      "같은 렌더 값으로 두 번 갱신하는 것과 이전 결과를 이어받는 업데이트 함수는 다릅니다.",
    expected: "스냅샷 버튼 화면 1·콘솔 0, 업데이트 버튼은 2입니다."
  },
  "react-03": {
    code: 'const { useState } = React;\nfunction App() {\n  const [member, setMember] = useState({\n    name: "하늘",\n    cheers: 0\n  });\n  function cheer() {\n    setMember((previous) => ({\n      ...previous,\n      cheers: previous.cheers + 2\n    }));\n  }\n  return (\n    <main>\n      <h1>{member.name} 응원</h1>\n      <p>{member.cheers}번</p>\n      <button onClick={cheer}>응원하기</button>\n    </main>\n  );\n}\n',
    explanation: "이전 속성을 펼친 새 객체에서 cheers만 바꿉니다.",
    expected: "이름 하늘은 유지되고 응원 수가 2씩 증가합니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: previous.cheers + 1",
      "이 부분만 다음과 같이 바꿉니다: previous.cheers + 2",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "react-04": {
    code: "",
    steps: [
      "이름을 입력하고 Enter로 제출합니다.",
      "다른 이름을 한 번 더 추가합니다.",
      "빈 값과 공백만 넣은 제출을 시험합니다."
    ],
    explanation: "입력 state·목록 state·배열 길이로 계산한 개수를 나누어 읽습니다.",
    expected: "정상 이름 두 개만 목록에 보이고 개수는 2입니다."
  },
  "react-05": {
    code: 'const { useState, useEffect } = React;\nfunction App() {\n  const [seconds, setSeconds] = useState(0);\n  const popular = seconds >= 5;\n  useEffect(() => {\n    const timer = setInterval(\n      () => setSeconds((s) => s + 1),\n      1000\n    );\n    return () => clearInterval(timer);\n  }, []);\n  useEffect(() => {\n    document.title = `학습 ${seconds}초`;\n  }, [seconds]);\n  return (\n    <main>\n      <h1>{seconds}초</h1>\n      <p>\n        {popular ? "5초가 지났습니다." : "조금만 기다려 보세요."}\n      </p>\n    </main>\n  );\n}\n',
    explanation:
      "기준값으로 계산하는 popular만 바꿉니다. 안내 문구의 3초도 5초로 바꾸어 의미를 맞춥니다.",
    expected: "5초부터 안내가 바뀌고 제목은 현재 초를 따릅니다.",
    steps: [
      "편집기에서 다음 부분을 찾습니다: seconds >= 3",
      "이 부분만 다음과 같이 바꿉니다: seconds >= 5",
      "실행한 뒤 아래 완료 기준과 실제 결과를 비교합니다."
    ]
  },
  "react-06": {
    code: "",
    steps: [
      "정상·빈 목록·오류 선택지를 각각 고릅니다.",
      "각 상태의 렌더 조건과 문구를 찾습니다.",
      "조건을 빠르게 바꾸어 이전 결과가 뒤늦게 덮지 않는지 확인합니다."
    ],
    explanation: "요청 상태를 분리하고 정리에서 이전 요청에 취소 신호를 보냅니다.",
    expected: "정상 목록, 비어 있음 안내, 오류 안내가 구분됩니다."
  },
  "react-07": {
    code: "",
    steps: [
      "커피의 +1을 두 번 누릅니다.",
      "빵의 +1을 한 번 누릅니다.",
      "상단 개수와 예상 총액이 어떤 state에서 계산되는지 찾습니다."
    ],
    explanation: "items가 기준 상태이고 count·total은 매번 배열에서 계산합니다.",
    expected: "총개수 3개, 예상 총액 11500원입니다."
  },
  "react-08": {
    code: "",
    steps: [
      "react-lab 폴더에서 README의 Node 버전을 확인합니다.",
      "npm install과 npm run dev를 순서대로 실행합니다.",
      "src/App.jsx를 수정하고 npm run build·preview로 비교합니다."
    ],
    explanation: "설치·개발·빌드·미리보기·실제 배포는 서로 다른 단계입니다.",
    expected: "메뉴 검색·수량 변경·초기화가 개발과 빌드 결과에서 모두 동작합니다."
  },
  "git-01": {
    code: "",
    steps: [
      "파일 한 줄을 고치고 저장합니다.",
      "git status와 git diff로 파일·변경 줄을 읽습니다.",
      "아직 새 파일인지, 스테이지에 올라간 내용인지 구분합니다."
    ],
    explanation: "단계에 따라 볼 diff가 다릅니다. 새 파일은 status로 함께 확인합니다.",
    expected: "실제 변경한 줄과 목적을 설명합니다."
  },
  "git-02": {
    code: "",
    steps: [
      "관련 파일만 git add로 선택합니다.",
      "git diff --staged를 확인합니다.",
      "목적이 드러나는 메시지로 commit하고 status를 봅니다."
    ],
    explanation: "다른 작업이나 실제 비밀을 같은 커밋에 섞지 않습니다.",
    expected: "로컬 이력이 생기며 원격 전송은 별도입니다."
  },
  "git-03": {
    code: "",
    steps: [
      "현재 변경을 확인합니다.",
      "기능 목적의 새 브랜치를 만듭니다.",
      "수정·검증·커밋 뒤 실제 기준 브랜치와 비교합니다."
    ],
    explanation: "main·master 등 기준 이름을 실제 저장소에 맞춥니다.",
    expected: "기능 변경과 비교 기준을 설명합니다."
  },
  "git-04": {
    code: "",
    steps: [
      "git remote -v로 내 원격 주소를 확인합니다.",
      "현재 브랜치와 연결을 봅니다.",
      "커밋을 push하고 GitHub에서 같은 식별자를 찾습니다."
    ],
    explanation: "커밋·전송·배포는 별개의 결과입니다.",
    expected: "원격 저장소에 기대한 커밋이 보입니다."
  },
  "git-05": {
    code: "",
    steps: [
      "두 후보가 바꾸려는 의도를 읽습니다.",
      "요구 가격이 4500이라고 가정합니다.",
      "const price = 4500; 하나만 남기고 마커를 지웁니다."
    ],
    explanation: "무조건 위쪽 또는 양쪽을 남기는 규칙은 없습니다.",
    expected: "문법과 가격 계산 결과를 다시 검증합니다."
  },
  "git-06": {
    code: "",
    steps: [
      "현재 diff를 먼저 보존·검토합니다.",
      "실제 커밋과 경로로 git show를 읽습니다.",
      "공유 이력인지 미커밋 변경인지에 맞는 복구 계획을 적습니다."
    ],
    explanation: "조회와 실제로 내용을 버리는 동작을 구분합니다.",
    expected: "무엇을 보존하고 무엇을 되돌릴지 명확히 설명합니다."
  },
  "git-07": {
    code: "",
    steps: [
      "배포 소스에 index.html과 자원이 있는지 확인합니다.",
      "push 후 Pages/Actions 완료 상태를 확인합니다.",
      "기본 주소·직접 수업 주소·새로고침·CSS/JS를 검사합니다."
    ],
    explanation: "기본 문서, 자원 경로, 서버 API 실행을 다른 문제로 구분합니다.",
    expected: "기본 주소와 내부 링크가 정상이며 자원 404가 없습니다."
  }
};
