window.ACADEMY = {
  tracks: [
    {
      id: "start",
      name: "공통 기초",
      eyebrow: "START HERE",
      desc: "파일, 브라우저, 실행 환경과 코드를 읽는 방법",
      outcome: "어느 파일을 어디에서 실행하는지 설명할 수 있습니다."
    },
    {
      id: "html",
      name: "HTML",
      eyebrow: "01 / STRUCTURE",
      desc: "내용과 입력 화면의 의미 있는 구조",
      outcome: "문구·링크·폼을 고치고 접근성을 확인합니다."
    },
    {
      id: "css",
      name: "CSS",
      eyebrow: "02 / DESIGN",
      desc: "크기, 여백, 배치와 반응형 화면",
      outcome: "레이아웃이 깨진 이유를 찾아 수정합니다."
    },
    {
      id: "js",
      name: "JavaScript",
      eyebrow: "03 / INTERACTION",
      desc: "데이터를 계산하고 행동과 화면을 연결",
      outcome: "클릭부터 서버 응답까지 실행 흐름을 따라갑니다."
    },
    {
      id: "node",
      name: "Node.js",
      eyebrow: "04 / SERVER",
      desc: "개발 도구와 서버, API와 저장의 기초",
      outcome: "로컬 API를 실행하고 입력·저장·오류를 다룹니다."
    },
    {
      id: "react",
      name: "React",
      eyebrow: "05 / COMPONENTS",
      desc: "컴포넌트, 상태, 폼과 비동기 화면",
      outcome: "상태의 주인을 찾고 기능을 일관되게 바꿉니다."
    },
    {
      id: "git",
      name: "Git & 배포",
      eyebrow: "06 / WORKFLOW",
      desc: "변경 검토, 기록, 협업과 GitHub Pages",
      outcome: "AI 변경을 검토하고 기록·복구·배포합니다."
    }
  ],
  lessons: [
    {
      id: "start-01",
      track: "start",
      title: "파일을 고치면 화면은 언제 바뀔까",
      lead: "파일·폴더·확장자·브라우저를 구분하고 첫 수정의 결과를 확인합니다.",
      sections: [
        {
          title: "파일과 프로그램은 역할이 다릅니다",
          body: "index.html은 내용이 저장된 파일이고, Chrome은 그 파일을 해석하는 프로그램입니다. 코드 편집기는 파일을 글자로 고칩니다. 브라우저 화면을 클릭해 글자를 선택했다고 원본 파일을 수정한 것은 아닙니다."
        },
        {
          title: "수정·저장·실행·확인은 다른 단계입니다",
          body: "파일을 수정한 뒤 저장해야 디스크 내용이 바뀝니다. 브라우저가 다시 읽어야 새 결과를 볼 수 있습니다. 이 사이트의 편집기는 실행 버튼으로 수정 내용을 미리보기에 전달합니다. 브라우저에 저장한 초안과 실제 파일 다운로드도 구분하세요."
        },
        {
          title: "첫 번째 수정의 범위를 작게 잡습니다",
          body: "아래 제목 하나를 바꾸고 결과를 예측합니다. 제목·색·클릭 동작을 한꺼번에 바꾸면 어느 변경이 원인인지 알아보기 어렵습니다. 하나를 바꾸고 확인하는 방식은 실제 AI 코드 검토에도 그대로 적용됩니다."
        }
      ],
      definitions: [
        [
          "파일과 확장자",
          "파일은 저장한 내용의 단위입니다. index.html에서 .html은 웹 문서임을 나타내는 확장자입니다. 파일 이름을 바꾸는 것과 내용 수정은 다릅니다."
        ],
        [
          "폴더와 경로",
          "폴더는 파일을 묶는 공간이고 경로는 파일의 위치입니다. ./는 현재 폴더, ../는 한 단계 위 폴더를 기준으로 읽습니다."
        ],
        [
          "브라우저와 렌더링",
          "Chrome·Safari 같은 브라우저가 HTML·CSS 등을 읽어 보이는 화면을 만드는 과정을 렌더링이라고 부릅니다."
        ],
        [
          "들여쓰기와 중첩",
          "안쪽 내용을 오른쪽으로 밀어 적으면 부모·자식 관계가 보입니다. 들여쓰기 자체가 HTML의 부모를 정하는 것은 아니며 실제 태그가 무엇을 감싸는지가 기준입니다."
        ]
      ],
      example: "<h1>나의 첫 웹페이지</h1>\n<p>문구 한 줄을 바꾸고 실행해 봅니다.</p>\n",
      mode: "html",
      filename: "index.html",
      trace: [
        [
          "h1의 시작과 끝",
          "그 사이의 글자가 제목으로 보입니다. 태그 기호는 유지합니다."
        ],
        [
          "p 요소",
          "제목 아래의 문단입니다. 제목을 바꿔도 이 문장은 별도로 바꾸기 전까지 그대로입니다."
        ]
      ],
      task: "제목을 자신의 서비스 이름으로 바꾸고, 소개 문장도 한 줄 수정하세요.",
      checks: [
        "수정한 제목이 미리보기에 보입니다.",
        "태그 기호는 글자가 아니라 구조로 해석됩니다.",
        "어떤 부분을 바꿨는지 한 문장으로 설명할 수 있습니다."
      ],
      quiz: [
        [
          "파일 저장과 새로고침은 같은 일인가요?",
          "아닙니다. 저장은 파일 내용을 남기고 새로고침은 브라우저가 다시 읽는 과정입니다."
        ],
        [
          "HTML 확장자는 무엇을 뜻하나요?",
          "해당 파일이 HTML 문서라는 것을 나타내는 이름의 일부입니다. 확장자만 바꾼다고 내용 형식이 자동 변환되지는 않습니다."
        ]
      ],
      errors: [
        [
          "수정했는데 화면이 같습니다",
          "파일 저장 여부, 보고 있는 파일 경로, 실행 버튼 또는 새로고침 여부부터 확인합니다."
        ]
      ],
      sources: ["https://developer.mozilla.org/en-US/docs/Learn_web_development"],
      extra: [],
      minutes: 15
    },
    {
      id: "start-02",
      track: "start",
      title: "브라우저·서버·데이터가 오가는 길",
      lead: "프런트엔드와 백엔드를 나누고 URL·요청·응답·상태를 이해합니다.",
      sections: [
        {
          title: "같은 JavaScript도 실행 장소가 다릅니다",
          body: "브라우저에서는 화면 요소와 클릭을 다룹니다. Node.js 서버에서는 요청을 받고 파일이나 비밀 환경 설정을 읽을 수 있습니다. 브라우저에 보낸 코드는 방문자가 읽을 수 있으므로 비밀 API 키를 넣어 두는 장소가 아닙니다."
        },
        {
          title: "주소는 자원을 찾는 단서입니다",
          body: "https://example.com/menu?category=bread에서 프로토콜, 호스트, 경로와 쿼리를 나눠 읽습니다. /menu는 요청 경로이고 category=bread는 추가 조건입니다. #section 같은 조각은 문서 내 위치 이동 등에 쓰이며 일반 HTTP 요청의 서버 경로와 구분합니다."
        },
        {
          title: "데이터를 받은 뒤에도 화면 코드는 필요합니다",
          body: "서버가 JSON을 보냈다고 목록이 자동으로 그려지지는 않습니다. 응답 상태를 확인하고 본문을 읽어 값으로 만든 뒤 화면에 반영해야 합니다. 실패한 경우에 무엇을 보여 줄지도 코드가 정합니다."
        }
      ],
      definitions: [
        ["프런트엔드", "사용자가 접하는 화면과 브라우저 동작을 만드는 영역입니다."],
        ["백엔드", "요청 처리·검증·저장 등 서버 쪽 역할입니다."],
        ["URL", "프로토콜·호스트·경로·쿼리 등을 가진 자원의 주소입니다."],
        ["JSON", "객체·배열 등의 데이터를 표현하는 문자열 형식입니다."],
        [
          "404",
          "요청한 자원을 찾지 못했다는 HTTP 상태입니다. 파일 이름이나 배포 경로 오류도 원인일 수 있습니다."
        ]
      ],
      example:
        '<h1>요청 결과를 화면에 보여 주기</h1>\n<p id="result"></p>\n<script>\n  // 실제 네트워크 없이 응답 데이터를 가정한 예제입니다.\n  const responseData = { name: "커피", price: 4000 };\n  document.querySelector("#result").textContent =\n    `${responseData.name}: ${responseData.price}원`;\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        [
          "responseData",
          "서버에서 받은 값이라고 가정한 객체입니다. 이 예제 자체는 서버를 호출하지 않습니다."
        ],
        ["textContent 대입", "데이터를 화면의 문장으로 바꾸는 별도 단계입니다."]
      ],
      task: "price를 4500으로 바꾸고, 데이터 수정이 화면 문구로 이어지는 곳을 찾으세요.",
      checks: [
        "데이터와 표시 코드를 구분합니다.",
        "이 예제가 실제 서버 호출을 하지 않는다는 점을 설명합니다."
      ],
      quiz: [
        [
          "JSON을 받으면 HTML이 자동으로 만들어지나요?",
          "아닙니다. 받은 값을 화면으로 바꾸는 코드가 필요합니다."
        ],
        [
          "브라우저의 JavaScript에 비밀 키를 넣어도 되나요?",
          "방문자가 볼 수 있는 코드와 번들에 포함되므로 서버에 보관할 비밀 키를 넣으면 안 됩니다."
        ]
      ],
      errors: [
        [
          "페이지가 404입니다",
          "사이트 자체, 기본 문서, 개별 파일 중 무엇이 없는지 URL과 응답 상태를 확인합니다."
        ]
      ],
      sources: ["https://developer.mozilla.org/en-US/docs/Learn_web_development"],
      extra: [],
      minutes: 15
    },
    {
      id: "start-03",
      track: "start",
      title: "기호와 들여쓰기로 코드의 구조 읽기",
      lead: "같은 기호라도 HTML·CSS·JavaScript에서 역할이 다르다는 것을 익힙니다.",
      sections: [
        {
          title: "괄호를 열면 닫는 위치를 찾습니다",
          body: "HTML은 여는 태그와 닫는 태그가 감싸는 범위를 봅니다. JavaScript의 함수·조건·객체는 중괄호를 사용하지만 모두 같은 의미는 아닙니다. 들여쓰기는 관계를 눈에 보이게 돕고 실제 문법 기호가 범위를 정합니다."
        },
        {
          title: "따옴표가 있으면 먼저 문자열인지 봅니다",
          body: 'JavaScript의 "4000"은 글자로 다루는 문자열이고 4000은 숫자입니다. HTML의 class="card"는 속성 설정입니다. 템플릿 문자열의 백틱과 ${}는 글자 사이에 계산 결과를 넣습니다.'
        },
        {
          title: "읽는 순서는 입력·처리·결과입니다",
          body: "한 줄에 여러 일을 적어도 실행할 수 있지만 초보자는 줄을 나누는 편이 쉽습니다. 함수의 입력은 괄호 안 매개변수, 처리는 본문, 결과는 return과 그 결과를 사용하는 코드에서 찾습니다."
        }
      ],
      definitions: [
        [
          "()",
          "함수 호출·매개변수·조건 묶기 등 문맥에 따라 역할이 달라지는 소괄호입니다."
        ],
        ["{}", "함수 본문·조건 블록·객체·JSX 표현식 등에 쓰이는 중괄호입니다."],
        ["[]", "배열 만들기·인덱스로 읽기·구조분해 등에 쓰입니다."],
        [".", "객체의 속성이나 메서드에 접근할 때 자주 사용하는 점입니다."],
        [
          "주석",
          "실행 목적이 아닌 사람을 위한 설명입니다. HTML은 <!-- -->, JS는 // 또는 /* */ 등을 씁니다."
        ]
      ],
      example:
        "function addFee(price) {\n  const total = price + 500;\n  return total;\n}\n\nconsole.log(addFee(4000));\n",
      mode: "console",
      filename: "main.js",
      trace: [
        ["price", "함수가 값을 받는 자리입니다."],
        ["본문의 두 칸 들여쓰기", "함수 안에서 하는 계산과 반환임을 드러냅니다."],
        ["addFee(4000)", "호출할 때 4000이 들어가고 계산 결과 4500을 출력합니다."]
      ],
      task: "수수료 500을 1000으로 바꾼 뒤 출력값을 예상하세요.",
      checks: [
        "출력은 5000입니다.",
        "return을 지웠을 때 undefined가 되는 이유를 설명합니다."
      ],
      quiz: [
        [
          "함수를 선언하면 본문이 즉시 모두 실행되나요?",
          "보통 호출할 때 실행합니다. 선언과 호출 위치를 나눠 봅니다."
        ],
        [
          "들여쓰기만 고치면 문법 오류가 모두 해결될까요?",
          "괄호·태그·따옴표의 실제 짝과 문법도 맞아야 합니다."
        ]
      ],
      errors: [
        [
          "Unexpected token이 보입니다",
          "표시 위치 근처와 그 앞에서 괄호·쉼표·따옴표가 빠지거나 중복되었는지 확인합니다."
        ]
      ],
      sources: ["https://developer.mozilla.org/en-US/docs/Learn_web_development"],
      extra: [],
      minutes: 15
    },
    {
      id: "start-04",
      track: "start",
      title: "AI가 만든 프로젝트에서 수정할 파일 찾기",
      lead: "폴더 구조·의존 관계·실행 명령·변경 비교를 먼저 읽는 습관을 만듭니다.",
      sections: [
        {
          title: "프로젝트의 안내판부터 찾습니다",
          body: "README에는 실행 방법, package.json에는 의존 패키지와 scripts 명령이 있을 수 있습니다. src는 소스, public은 그대로 제공할 정적 파일을 두는 경우가 많지만 이름만으로 모든 프로젝트의 구조를 단정하지는 않습니다."
        },
        {
          title: "수정 요청을 관찰 가능한 결과로 바꿉니다",
          body: "“더 좋게”보다 “메뉴 가격을 4200원으로 바꾸고 합계 계산에도 같은 값이 반영되게”라고 적습니다. 문구인지 데이터인지 로직인지 나누고, 그 값이 정의된 곳과 사용되는 곳을 검색합니다."
        },
        {
          title: "AI 설명은 실행으로 확인합니다",
          body: "수정한 파일 목록과 diff를 보고 변경 범위가 요청과 맞는지 확인합니다. 정상 입력뿐 아니라 빈 값·경계값·실패 상황도 시험합니다. 본 사이트의 실무 판단 목표는 작은 기능을 설명하고 수정·검증하는 수준입니다. 결제·권한·보안 운영은 별도 전문 검토 범위입니다."
        }
      ],
      definitions: [
        ["README", "프로젝트 목적·실행·사용법을 적는 안내 문서입니다."],
        ["의존성", "다른 파일·함수·패키지·서비스에 기대어 동작하는 관계입니다."],
        ["진입점", "실행이 시작되거나 연결되는 파일·함수입니다."],
        ["diff", "변경 전후의 줄 차이입니다."],
        [
          "재현",
          "같은 조건에서 문제를 다시 일으키는 것입니다. 원인 분석 전에 재현 절차를 정리합니다."
        ]
      ],
      example:
        "프로젝트/\n  README.md           실행 방법\n  package.json        패키지와 실행 명령\n  src/\n    App.jsx           화면 조립과 상태\n    components/       재사용하는 화면 조각\n  public/             정적 파일",
      mode: "reference",
      filename: "폴더 구조",
      trace: [
        ["README와 package.json", "무엇을 어디에서 실행할지 먼저 확인합니다."],
        ["App과 components", "문구·props·state가 흘러가는 위치를 찾습니다."],
        [
          "프로젝트마다 차이",
          "이 구조는 설명용이며 모든 프로젝트에 같은 폴더가 있는 것은 아닙니다."
        ]
      ],
      task: "현재 작업할 프로젝트에서 실행 명령, 첫 화면 파일, 가격 데이터의 위치를 메모하세요.",
      checks: [
        "파일 경로를 실제로 찾아 적었습니다.",
        "변경 전 예상 결과와 확인 방법을 적었습니다."
      ],
      quiz: [
        [
          "수정할 파일을 AI가 골랐다면 확인이 필요 없나요?",
          "요청과 관련 없는 변경이나 누락을 diff와 실행으로 확인해야 합니다."
        ],
        [
          "프런트엔드 화면만 보고 서버 저장 성공을 단정할 수 있나요?",
          "요청 결과·서버 응답·재조회까지 확인해야 합니다."
        ]
      ],
      errors: [
        [
          "무엇부터 읽을지 모르겠습니다",
          "README의 실행 방법, package.json scripts, 화면 진입점, 변경할 값의 검색 순서로 좁힙니다."
        ]
      ],
      sources: ["https://developer.mozilla.org/en-US/docs/Learn_web_development"],
      extra: [],
      minutes: 15
    },
    {
      id: "html-01",
      track: "html",
      title: "문서 뼈대와 태그의 정확한 의미",
      lead: "DOCTYPE·html·head·body·속성·중첩 구조를 처음부터 읽습니다.",
      sections: [
        {
          title: "문서에는 정보 영역과 본문 영역이 있습니다",
          body: "head는 문자 인코딩·문서 제목·스타일 연결 같은 정보를 담습니다. body는 사용자가 접하는 본문 구조를 담습니다. title과 h1은 각각 탭 제목과 본문 제목이므로 고치는 위치가 다릅니다."
        },
        {
          title: "태그가 내용의 역할을 표시합니다",
          body: "<p>소개</p>에서 두 태그와 내용 전체가 하나의 요소입니다. img·input·meta처럼 닫는 태그가 없는 요소도 있습니다. HTML에서는 공백이 여러 개여도 기본 글자 흐름에서 합쳐질 수 있으며, 문단 간 간격은 CSS로 제어합니다."
        },
        {
          title: "한글과 모바일의 기본 설정도 읽습니다",
          body: "charset=UTF-8은 글자 해석 규칙, lang=ko는 주된 문서 언어, viewport 메타는 모바일 배치의 기본 단서입니다. 설정만으로 모든 접근성과 반응형이 완성되는 것은 아닙니다."
        }
      ],
      definitions: [
        [
          "HTML",
          "웹페이지에 들어갈 내용과 그 의미를 표시하는 언어입니다. 제목, 문단, 목록, 링크 등을 태그로 구분합니다."
        ],
        [
          "태그와 요소",
          "<p>소개 문장</p>에서 <p>와 </p>는 태그이고, 두 태그와 그 안의 내용을 합쳐 요소라고 부릅니다. img처럼 닫는 태그가 없는 요소도 있습니다."
        ],
        [
          "속성",
          '태그에 추가하는 설정입니다. <a href="#contact">에서 href는 속성 이름이고 #contact는 그 값입니다.'
        ],
        [
          "head와 body",
          "head는 문서 제목·문자 인코딩·스타일 연결 같은 정보를 담고, body는 본문 내용을 담습니다."
        ],
        [
          "제목과 문단",
          "h1~h6은 제목의 중요도와 계층을 나타내고 p는 문단입니다. 큰 글씨가 필요하다는 이유만으로 제목 태그를 고르지는 않습니다."
        ],
        [
          "DOCTYPE과 lang",
          '<!DOCTYPE html>은 현대 HTML 방식으로 읽도록 알리는 선언입니다. lang="ko"는 문서의 주된 언어가 한국어임을 나타내며 번역이나 화면낭독기에도 도움이 됩니다.'
        ],
        [
          "문자 인코딩과 UTF-8",
          '컴퓨터가 글자를 저장·해석하는 규칙입니다. <meta charset="UTF-8">은 한글 등을 UTF-8로 읽게 합니다. 글자가 깨지면 저장 형식과 선언을 확인합니다.'
        ]
      ],
      example:
        '<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1"\n    />\n    <title>나의 서비스</title>\n  </head>\n  <body>\n    <h1>오늘의 메뉴</h1>\n    <p>화면의 내용은 body 안에 있습니다.</p>\n  </body>\n</html>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["head", "문서 정보가 모여 있습니다. title은 탭 제목입니다."],
        ["body", "h1과 p가 본문에 보입니다."],
        ["중첩", "각 태그가 끝나는 위치와 같은 깊이의 요소를 확인합니다."]
      ],
      task: "title은 “카페 안내”, h1은 “오늘의 추천”으로 각각 바꾸세요.",
      checks: [
        "미리보기 문서 제목과 본문 제목이 서로 다릅니다.",
        "한글이 정상 표시됩니다."
      ],
      quiz: [
        [
          "head에 쓴 title이 본문 제목인가요?",
          "아닙니다. 본문 제목은 h1 등으로 적습니다."
        ],
        [
          "모든 태그에 닫는 태그가 있나요?",
          "아닙니다. meta·input 같은 void 요소는 닫는 태그가 없습니다."
        ]
      ],
      errors: [
        [
          "한글이 깨집니다",
          "저장 인코딩과 charset 선언을 확인합니다. 파일이 실제로 UTF-8로 저장되어 있어야 합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "html-02",
      track: "html",
      title: "텍스트·목록·링크·이미지와 경로",
      lead: "화면 문구와 이동 주소를 구분하고 깨진 경로를 찾습니다.",
      sections: [
        {
          title: "제목은 크기가 아니라 계층입니다",
          body: "h1은 페이지의 핵심 제목, h2는 하위 주제라는 식으로 의미를 표현합니다. p는 문단, ul·ol 안의 li는 목록 항목입니다. 줄바꿈을 여러 번 넣어 간격을 만들기보다 CSS를 사용합니다."
        },
        {
          title: "링크 글자와 이동 목적지는 다릅니다",
          body: "a의 href가 목적지이고 태그 사이 내용이 보이는 이름입니다. ./는 현재 폴더, ../는 부모 폴더 기준입니다. GitHub Pages의 프로젝트 사이트에서는 /로 시작하는 경로가 저장소 하위 경로를 벗어날 수 있습니다."
        },
        {
          title: "이미지에는 목적에 맞는 설명이 필요합니다",
          body: "img의 src는 파일 주소, alt는 이미지의 목적을 설명하는 대체 텍스트입니다. 장식만 하는 이미지는 빈 alt가 적절할 수 있습니다. 링크 안의 로고는 사진 모양보다 이동 목적을 전달하는 것이 중요할 수 있습니다."
        }
      ],
      definitions: [
        ["상대 경로", "현재 문서 위치를 기준으로 계산하는 주소입니다."],
        ["절대 URL", "프로토콜과 호스트 등을 포함한 전체 주소입니다."],
        [
          "조각 식별자",
          'href="#contact"처럼 문서의 특정 id 위치를 가리키는 부분입니다.'
        ],
        ["alt", "이미지를 볼 수 없을 때 목적을 전달하는 텍스트입니다."],
        ["ol / ul / li", "순서 목록·비순서 목록·목록 항목입니다."]
      ],
      example:
        '<h1>카페 안내</h1>\n<h2>인기 메뉴</h2>\n<ul>\n  <li>커피</li>\n  <li>소금빵</li>\n</ul>\n<a href="#contact">연락처로 이동</a>\n<section id="contact">\n  <h2>연락처</h2>\n  <p>이곳은 연습용 소개입니다.</p>\n</section>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["ul의 li", "하나의 목록 안에 두 항목이 있습니다."],
        ["href와 id", "contact라는 이름으로 목적지와 영역이 연결됩니다."],
        ["경로 변경", "다른 파일로 이동할 때는 실제 위치와 파일 이름을 확인합니다."]
      ],
      task: "메뉴를 하나 더 넣고 링크 이름을 “문의하기”로 바꾸세요. 목적지는 그대로 유지합니다.",
      checks: [
        "세 개의 메뉴가 보입니다.",
        "링크 이름을 바꿔도 같은 영역으로 이동합니다."
      ],
      quiz: [
        [
          "href의 #은 CSS id 선택자와 같은 문법인가요?",
          "비슷해 보여도 이 문맥은 URL 조각으로 영역을 가리키는 것입니다."
        ],
        [
          "파일 이름 대소문자가 달라도 배포에서 항상 열릴까요?",
          "환경에 따라 다르며 공개 서버에서는 정확한 대소문자를 맞춰야 합니다."
        ]
      ],
      errors: [
        [
          "로컬에서는 열리는데 배포에서는 404입니다",
          "파일 업로드 여부, 대소문자, 상대 경로와 저장소 하위 경로를 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "html-03",
      track: "html",
      title: "시맨틱 구조와 키보드 접근성",
      lead: "같은 모양의 코드도 읽고 조작하는 방식이 다릅니다.",
      sections: [
        {
          title: "의미를 가진 요소를 먼저 선택합니다",
          body: "header·nav·main·footer는 페이지의 역할을 드러냅니다. section은 주제 묶음, article은 독립적으로 읽을 수 있는 콘텐츠에 적합합니다. 배치만 위한 묶음은 div로 충분할 수 있습니다."
        },
        {
          title: "클릭 영역은 올바른 요소로 만듭니다",
          body: "실행 동작에는 button, 다른 곳으로 이동에는 a를 사용합니다. div에 click만 추가해도 버튼의 키보드 조작·역할·포커스가 자동으로 모두 생기지는 않습니다. 네이티브 요소의 기본 기능을 활용합니다."
        },
        {
          title: "보이는 것과 읽히는 것을 함께 확인합니다",
          body: "Tab으로 이동하고 포커스 표시가 보이는지 확인합니다. 라벨·제목 계층·대체 텍스트도 함께 점검합니다. 접근성을 검사하는 자동 도구가 모든 실제 사용 문제를 찾는 것은 아니므로 직접 조작을 병행합니다."
        }
      ],
      definitions: [
        [
          "시맨틱 HTML",
          "모양뿐 아니라 내용의 역할을 드러내는 태그를 쓰는 것입니다. header, nav, main, article 등이 해당합니다."
        ],
        [
          "main / section / article",
          "main은 문서의 주된 내용, section은 주제별 묶음, article은 별도로 떼어도 의미가 통하는 글이나 콘텐츠입니다."
        ],
        [
          "제목 계층",
          "h1 다음에 하위 주제 h2를 두는 식으로 문서의 구조를 드러냅니다. 글씨 크기는 CSS로 조절할 수 있습니다."
        ],
        [
          "웹 접근성",
          "키보드나 화면낭독기처럼 다양한 방식으로도 내용을 이해하고 기능을 사용할 수 있게 하는 것입니다."
        ],
        [
          "alt와 label",
          "alt는 이미지 목적을 전달하는 대체 텍스트, label은 입력칸의 이름입니다. 장식용 이미지에는 빈 alt를 쓸 수 있습니다."
        ],
        [
          "button과 div",
          "button은 누르는 동작을 위한 기본 기능을 갖춘 요소입니다. div는 의미를 부여하지 않은 일반 묶음입니다."
        ]
      ],
      example:
        '<header><h1>카페 소식</h1></header>\n<nav><a href="#news">새 소식</a></nav>\n<main id="news">\n  <article>\n    <h2>새 메뉴 안내</h2>\n    <p>오늘은 소금빵이 준비되었습니다.</p>\n    <button\n      type="button"\n      onclick="this.textContent = \'확인했어요\'"\n    >\n      소식 확인\n    </button>\n  </article>\n</main>\n<footer>학습용 페이지</footer>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["영역 요소", "화면을 역할별로 구분합니다."],
        ["article의 제목", "독립된 소식의 주제를 나타냅니다."],
        [
          "button",
          "Tab으로 이동하고 Enter 또는 Space로 동작할 수 있습니다. 인라인 이벤트는 이 짧은 예제용입니다."
        ]
      ],
      task: "키보드만으로 링크와 버튼을 찾아 누르고 포커스가 보이는지 확인하세요.",
      checks: ["Tab 이동과 버튼 실행이 됩니다.", "제목 단계가 h1·h2로 이어집니다."],
      quiz: [
        [
          "section을 많이 쓰면 더 좋은가요?",
          "내용의 의미와 주제에 맞아야 합니다. 단순 배치에는 div를 사용할 수 있습니다."
        ],
        [
          "색 차이만으로 완료 여부를 표현해도 충분할까요?",
          "문구나 상태 정보도 함께 제공해 다양한 사용자가 이해하게 합니다."
        ]
      ],
      errors: [
        [
          "키보드로 누를 수 없습니다",
          "실제 버튼인지, disabled인지, 포커스가 가려졌는지 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "html-04",
      track: "html",
      title: "폼과 입력값의 전송 구조",
      lead: "label·id·name·value·action·method를 따로 읽습니다.",
      sections: [
        {
          title: "이름 연결과 전송 이름은 다릅니다",
          body: "label의 for와 input의 id가 이름표와 입력칸을 연결합니다. name은 폼 전송에서 데이터 이름이 됩니다. value는 현재 입력한 값입니다. id가 있다고 전송 이름이 자동으로 생기지는 않습니다."
        },
        {
          title: "입력 종류를 목적에 맞춥니다",
          body: "email·password·number·date·checkbox·radio·select 등은 입력 경험과 기본 동작이 다릅니다. 라디오를 하나의 선택 그룹으로 만들 때는 같은 name을 사용합니다. 비밀번호를 가려 보이는 것과 서버에 안전하게 저장하는 것은 다른 문제입니다."
        },
        {
          title: "제출은 form에서 다룹니다",
          body: "submit 이벤트는 form에 연결하면 버튼 클릭뿐 아니라 적절한 Enter 제출도 함께 다루기 쉽습니다. 기본 전송 대신 JavaScript로 처리할 때 preventDefault를 사용합니다. 이 예제는 서버 저장을 하지 않습니다."
        }
      ],
      definitions: [
        [
          "form",
          "사용자 입력을 한 묶음으로 다루는 요소입니다. 기본 제출에서는 action이 보낼 주소, method가 전송 방식을 정합니다."
        ],
        [
          "input과 type",
          'input은 값을 받는 입력 요소입니다. type="email"·"password" 등에 따라 입력 방법과 브라우저의 기본 검사가 달라집니다.'
        ],
        [
          "label / for / id",
          "label은 입력칸의 이름입니다. label의 for와 input의 id가 같으면 라벨을 눌러 해당 입력칸으로 이동할 수 있습니다."
        ],
        [
          "name과 value",
          "name은 일반 폼 제출에서 쓸 데이터 이름이고 value는 입력된 값입니다. id만 있고 name이 없으면 일반 폼 제출의 이름·값 쌍에 포함되지 않습니다."
        ],
        [
          "submit / preventDefault",
          "submit은 폼 제출 이벤트입니다. event.preventDefault()는 기본 제출 동작을 막아 JavaScript가 결과를 처리하게 합니다."
        ]
      ],
      example:
        '<form id="join">\n  <label for="email">이메일</label>\n  <input id="email" name="email" type="email" required />\n  <label for="plan">요금제</label>\n  <select id="plan" name="plan">\n    <option value="free">무료</option>\n    <option value="pro">프로</option>\n  </select>\n  <button type="submit">입력 확인</button>\n</form>\n<p id="result"></p>\n<script>\n  document\n    .querySelector("#join")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const data = new FormData(event.currentTarget);\n      document.querySelector("#result").textContent =\n        `${data.get("email")} / ${data.get("plan")}`;\n    });\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["for / id", "입력칸 이름을 연결합니다."],
        ["name", "FormData가 읽는 키입니다."],
        ["submit 콜백", "기본 전송을 막고 현재 입력을 화면에 표시합니다."]
      ],
      task: "요금제 항목을 하나 더 추가하고 option의 보이는 이름과 value를 다르게 정해 보세요.",
      checks: [
        "선택한 항목의 value가 결과에 표시됩니다.",
        "이메일을 비우면 브라우저 검증이 제출을 막습니다."
      ],
      quiz: [
        [
          "placeholder가 label을 대신하나요?",
          "입력 힌트이며 이름표의 역할을 충분히 대신하지 않습니다."
        ],
        [
          "password 타입이면 전송도 암호화되나요?",
          "화면의 마스킹과 전송 보호는 별개이며 HTTPS 등 전송 환경을 확인합니다."
        ]
      ],
      errors: [
        [
          "입력은 보이는데 FormData에서 null입니다",
          "해당 요소에 기대한 name이 붙어 있는지 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "html-05",
      track: "html",
      title: "입력 검증과 사용자에게 보이는 오류",
      lead: "잘못된 값을 막는 규칙과 오류 문구를 연결합니다.",
      sections: [
        {
          title: "브라우저 검증은 첫 안내입니다",
          body: "required·min·max·minlength·pattern 같은 속성은 기본 검사를 돕습니다. 클라이언트 코드는 변경되거나 우회될 수 있으므로 서버 검증이 권한과 데이터의 최종 기준이 되어야 합니다."
        },
        {
          title: "빈 값과 숫자 변환을 분리합니다",
          body: 'Number("")는 0이 되므로 빈 입력을 숫자로 바꾼 뒤에만 검사하면 의도와 다를 수 있습니다. 원래 문자열을 먼저 살펴보고 숫자의 유한성·정수 여부·범위를 확인합니다.'
        },
        {
          title: "오류를 고칠 수 있게 안내합니다",
          body: "“잘못됨”보다 “수량은 1~20 사이의 정수로 입력하세요”처럼 허용 범위를 알려 줍니다. 오류를 콘솔에만 남기면 일반 사용자는 보지 못합니다. 메시지는 화면에 보여 주고 필요하면 aria-live로 상태 변화를 알립니다."
        }
      ],
      definitions: [
        ["클라이언트 검증", "브라우저에서 수행하는 입력 검사입니다."],
        ["서버 검증", "서버가 요청의 값·범위·권한 등을 다시 확인하는 검사입니다."],
        ["Number.isInteger", "값이 정수인지 확인합니다."],
        [
          "aria-live",
          "내용이 바뀌었을 때 보조기기가 알릴 수 있도록 지정하는 속성입니다."
        ]
      ],
      example:
        '<form id="order" novalidate>\n  <label for="qty">수량 (1~20)</label>\n  <input id="qty" type="number" min="1" max="20" value="1" />\n  <button>확인</button>\n</form>\n<p id="message" aria-live="polite"></p>\n<script>\n  document\n    .querySelector("#order")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const raw = document.querySelector("#qty").value.trim();\n      const qty = Number(raw);\n      const valid =\n        raw !== "" &&\n        Number.isInteger(qty) &&\n        qty >= 1 &&\n        qty <= 20;\n      document.querySelector("#message").textContent = valid\n        ? `${qty}개를 선택했습니다.`\n        : "수량은 1~20 사이의 정수로 입력하세요.";\n    });\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        [
          "novalidate",
          "이 예제는 JavaScript 검사 문구를 관찰하려고 기본 제출 검증을 끕니다."
        ],
        ["raw와 qty", "빈 값과 숫자의 범위를 분리해 검사합니다."],
        ["화면 메시지", "성공과 실패를 사용자가 볼 수 있는 곳에 표시합니다."]
      ],
      task: "빈 값·0·1·20·21·1.5를 차례로 넣어 허용과 거부를 기록하세요.",
      checks: ["1과 20은 통과합니다.", "빈 값·0·21·소수는 안내 문구를 보여 줍니다."],
      quiz: [
        [
          "브라우저 검사를 했으니 서버 검사는 생략해도 되나요?",
          "아닙니다. 서버가 신뢰할 데이터는 서버에서 다시 검증합니다."
        ],
        ['Number("")는 NaN인가요?', "0입니다. 빈 문자열 검사를 먼저 나누는 이유입니다."]
      ],
      errors: [["빈 값이 0으로 처리됩니다", "변환 전 raw 문자열을 먼저 확인합니다."]],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "html-06",
      track: "html",
      title: "문서 완성도 점검과 첫 화면 공개 준비",
      lead: "메타 정보·상대 경로·접근성·동작을 함께 점검합니다.",
      sections: [
        {
          title: "페이지의 역할을 문서 정보에도 적습니다",
          body: "title은 방문자의 탭과 검색 결과 등에 쓰이는 제목입니다. description은 페이지의 요약을 제공하는 메타 정보입니다. 이 설정이 검색 순위를 보장하는 것은 아니며 실제 내용과 일치하도록 씁니다."
        },
        {
          title: "배포는 내 폴더와 환경이 다릅니다",
          body: "첫 화면 파일 이름은 index.html로 준비하고 필요한 CSS·JS·이미지 파일도 함께 배포합니다. 프로젝트 하위 경로를 사용하는 사이트에서는 상대 경로가 더 쉽게 동작할 수 있습니다. 파일 대소문자도 맞춥니다."
        },
        {
          title: "완료를 화면 하나로 판단하지 않습니다",
          body: "작은 화면과 큰 화면, 키보드 이동, 빈 입력, 링크 목적지와 새로고침을 확인합니다. GitHub Pages 같은 정적 호스팅은 파일을 제공하며 Node.js 서버를 실행하는 장소는 아니라는 점도 구분합니다."
        }
      ],
      definitions: [
        ["메타 정보", "문서를 설명하는 설정과 정보입니다."],
        ["정적 호스팅", "HTML·CSS·JS 같은 파일을 제공하는 서비스입니다."],
        ["진입 파일", "기본 주소에서 열 문서입니다. 이 사이트는 index.html을 씁니다."],
        ["상대 경로", "현재 파일 위치를 기준으로 자원을 찾는 주소입니다."]
      ],
      example:
        '<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1"\n    />\n    <meta\n      name="description"\n      content="메뉴와 주문 방법을 안내합니다."\n    />\n    <title>동네 카페 안내</title>\n  </head>\n  <body>\n    <main>\n      <h1>동네 카페</h1>\n      <p>메뉴와 주문 방법을 소개합니다.</p>\n    </main>\n  </body>\n</html>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["문서 설정", "언어·인코딩·모바일 폭·요약을 구분합니다."],
        ["title과 h1", "탭 제목과 본문 제목이 목적에 맞게 다릅니다."],
        ["실제 배포 파일", "이 코드가 index.html로 올라가는지 확인합니다."]
      ],
      task: "자기 서비스 이름과 소개로 바꾸고 HTML 파트의 완료 기준을 점검하세요.",
      checks: [
        "탭과 본문의 제목이 명확합니다.",
        "HTML 파트의 링크·폼·키보드 점검을 설명할 수 있습니다."
      ],
      quiz: [
        [
          "index.html만 있으면 연결 CSS가 없어도 같은 모양인가요?",
          "연결한 파일도 배포되어야 기대한 모양과 동작이 유지됩니다."
        ],
        [
          "정적 호스팅에서 Node 서버가 자동 실행되나요?",
          "아닙니다. 서버를 실행할 호스팅 환경과 별도로 구분합니다."
        ]
      ],
      errors: [
        [
          "기본 주소만 404입니다",
          "배포 기준 폴더의 index.html 존재 여부와 Pages 설정을 먼저 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "css-01",
      track: "css",
      title: "선택자·상속·우선순위로 스타일 추적",
      lead: "색이 안 바뀔 때 규칙을 더 붙이기 전에 적용 대상을 확인합니다.",
      sections: [
        {
          title: "CSS 규칙은 대상과 선언으로 나뉩니다",
          body: ".card { color: teal; }에서 .card는 선택자, color: teal은 선언입니다. .은 class, #은 id를 고르는 문맥입니다. nav a는 모든 단계의 후손 링크, nav > a는 바로 아래 자식 링크를 고릅니다."
        },
        {
          title: "규칙이 겹치는 이유를 읽습니다",
          body: "여러 규칙이 같은 속성을 정하면 출처·중요도·레이어·구체성·순서 등의 조건으로 최종값을 정합니다. 이 예제처럼 같은 조건의 일반 규칙에서는 id가 class보다 구체적입니다. 무조건 마지막 줄이 이긴다고 외우지 않습니다."
        },
        {
          title: "상속과 기본값도 후보입니다",
          body: "글자색이나 글꼴처럼 부모 값을 물려받는 속성이 있습니다. padding·border처럼 모든 속성이 상속되는 것은 아닙니다. 개발자 도구에서 선택한 요소의 Styles와 Computed를 보고 규칙의 취소선과 최종값을 확인합니다."
        }
      ],
      definitions: [
        [
          "CSS 규칙",
          "선택자 { 속성: 값; }의 형태입니다. 선택자로 대상을 고르고 중괄호 안에서 모양을 정합니다."
        ],
        [
          "class 선택자",
          '점으로 시작합니다. .order-button은 class="order-button"인 요소들을 고릅니다.'
        ],
        [
          "id 선택자",
          '#으로 시작합니다. #special은 id="special"인 요소를 고릅니다. 같은 문서에서 id는 고유하게 사용합니다.'
        ],
        [
          "캐스케이딩과 우선순위",
          "여러 규칙이 같은 속성을 정할 때 어떤 값이 적용될지 결정하는 과정입니다. 중요도·출처·레이어·선택자 구체성·순서 등이 관계됩니다."
        ],
        [
          "선언",
          "CSS에서 color: teal;처럼 속성과 값으로 적은 한 가지 설정입니다. 여러 선언을 한 규칙에 넣을 수 있습니다."
        ],
        [
          "선택자와 속성의 차이",
          ".menu는 대상을 고르는 선택자이고 color는 바꿀 속성입니다. 이름이 비슷해 보여도 역할이 다릅니다."
        ],
        [
          "외부 스타일시트",
          "별도 .css 파일을 link로 연결한 것입니다. 연결 경로가 틀리면 파일 안의 규칙을 적용할 수 없습니다."
        ],
        [
          "후손과 자식 선택자",
          "nav a는 nav 안쪽의 모든 단계에 있는 a를, nav > a는 바로 아래 자식인 a를 고릅니다."
        ],
        [
          "상속",
          "글자색처럼 일부 CSS 속성은 부모의 값이 자식에게 이어질 수 있습니다. 모든 속성이 상속되는 것은 아닙니다."
        ]
      ],
      example:
        '<style>\n  .menu {\n    color: teal;\n  }\n  #featured {\n    color: #b04c25;\n  }\n  .menu:hover {\n    text-decoration: underline;\n  }\n</style>\n<h1>스타일 적용 대상</h1>\n<p class="menu">일반 메뉴</p>\n<p class="menu" id="featured">오늘의 추천</p>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        [".menu", "두 문단 모두 일치합니다."],
        [
          "#featured",
          "두 번째 문단에만 일치하며 이 예제에서는 글자색을 우선 결정합니다."
        ],
        [":hover", "마우스를 올릴 때 상태별 스타일을 적용합니다."]
      ],
      task: ".menu의 색을 바꾸고 두 문단이 모두 바뀌는지 먼저 예상하세요.",
      checks: [
        "일반 문단과 추천 문단의 차이를 설명합니다.",
        "적용 대상과 최종 규칙을 구분합니다."
      ],
      quiz: [
        [
          "id가 모든 조건에서 언제나 이기나요?",
          "중요도·출처·레이어 등 다른 조건을 먼저 봅니다. 같은 조건 안의 구체성 비교입니다."
        ],
        [
          "!important를 붙이는 것이 첫 해결인가요?",
          "먼저 선택자 일치·연결 파일·충돌 규칙을 확인합니다."
        ]
      ],
      errors: [
        [
          "새 CSS가 적용되지 않습니다",
          "파일 연결·저장·선택자 일치·우선순위·캐시 순서로 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "css-02",
      track: "css",
      title: "박스 모델과 크기 계산",
      lead: "안쪽 여백·테두리·바깥 간격을 나누면 카드 크기를 예측할 수 있습니다.",
      sections: [
        {
          title: "상자를 네 부분으로 읽습니다",
          body: "content는 내용, padding은 안쪽 공간, border는 테두리, margin은 바깥 여백입니다. 그림에서 비슷하게 보여도 어떤 속성을 바꾸는지에 따라 클릭 영역과 배경색 영역이 달라집니다."
        },
        {
          title: "width가 무엇을 포함하는지 확인합니다",
          body: "content-box의 width는 내용 영역입니다. border-box는 padding과 border를 포함합니다. width:200px, padding:20px, border:2px이면 content-box의 테두리까지 너비는 244px이고 border-box는 200px입니다. margin은 별도입니다."
        },
        {
          title: "넘침의 원인을 계산합니다",
          body: "고정 너비 자식과 padding이 좁은 화면에 들어가지 못할 수 있습니다. max-width·width:100%·box-sizing을 함께 보고, 무조건 overflow:hidden으로 가려 내용을 잃지 않도록 합니다."
        }
      ],
      definitions: [
        [
          "박스 모델",
          "요소의 크기를 내용(content), 안쪽 여백(padding), 테두리(border), 바깥 여백(margin)으로 읽는 방법입니다."
        ],
        [
          "box-sizing",
          "width와 height를 어떤 범위로 계산할지 정합니다. border-box는 지정한 너비에 padding과 border를 포함합니다."
        ],
        [
          "content와 padding",
          "content는 글자나 이미지가 놓이는 내용 영역이고 padding은 내용과 테두리 사이의 안쪽 공간입니다."
        ],
        [
          "border와 margin",
          "border는 테두리이고 margin은 상자 바깥쪽 여백입니다. width에 margin까지 포함된다고 생각하지 않습니다."
        ],
        [
          "일반 흐름",
          "브라우저가 요소를 기본 배치 규칙에 따라 놓는 흐름입니다. position:absolute 같은 설정은 이 흐름에서 요소를 빼서 배치합니다."
        ]
      ],
      example:
        '<style>\n  * {\n    box-sizing: border-box;\n  }\n  .card {\n    width: 100%;\n    max-width: 320px;\n    padding: 24px;\n    border: 2px solid teal;\n    margin: 20px 0;\n  }\n</style>\n<div class="card">안쪽 여백과 바깥 여백을 비교합니다.</div>\n<div class="card">같은 너비의 두 번째 카드입니다.</div>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["width와 max-width", "부모 폭을 사용하되 최대 320px로 제한합니다."],
        ["padding", "테두리와 내용 사이 공간입니다."],
        [
          "margin",
          "상자 바깥 간격이며 인접 세로 margin은 조건에 따라 병합될 수 있습니다."
        ]
      ],
      task: "padding을 40px로 바꾸고 카드 전체 너비와 내용 폭이 어떻게 달라지는지 확인하세요.",
      checks: [
        "테두리까지의 최대 너비는 유지됩니다.",
        "내용이 놓이는 공간은 줄어듭니다."
      ],
      quiz: [
        [
          "margin도 border-box의 width 안인가요?",
          "아닙니다. 바깥 margin은 별도입니다."
        ],
        [
          "넘치는 내용을 hidden으로 숨기면 해결인가요?",
          "원인인 너비·최소 크기·여백을 확인하고 내용이 잘리지 않게 해결해야 합니다."
        ]
      ],
      errors: [
        [
          "width 100%인데도 옆으로 넘칩니다",
          "box-sizing, 부모·자식 고정 폭, 긴 문자열과 최소 너비를 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "css-03",
      track: "css",
      title: "읽기 쉬운 글자·간격·단위",
      lead: "글자 크기 하나보다 줄 길이·행간·대비를 함께 조정합니다.",
      sections: [
        {
          title: "타이포그래피는 읽는 속도에 영향을 줍니다",
          body: "문단이 너무 넓거나 행간이 좁으면 줄을 따라가기 어렵습니다. 본문 최대 폭과 line-height를 정하고 제목·문단·코드에 다른 계층을 줍니다. 글자를 작게 줄여 모든 내용을 한 화면에 넣는 것을 목표로 하지 않습니다."
        },
        {
          title: "상대 단위는 기준을 함께 읽습니다",
          body: "rem은 루트 글자 크기, em은 사용 속성에 따라 기준이 다릅니다. font-size의 em은 부모 글자 크기를 기준으로 읽습니다. %의 기준도 속성별로 다르므로 항상 부모 폭이라고 외우지 않습니다."
        },
        {
          title: "코드는 공백이 보존되어야 합니다",
          body: "일반 HTML 글자에서는 공백이 합쳐질 수 있습니다. pre와 code를 함께 쓰면 들여쓰기와 줄바꿈을 보존해 읽을 수 있습니다. 긴 코드는 임의로 구조를 깨기보다 적절한 줄 나누기와 가로 스크롤을 제공합니다."
        }
      ],
      definitions: [
        [
          "line-height",
          "글줄 사이의 높이입니다. 단위 없는 값은 글자 크기 비율로 사용하기 좋습니다."
        ],
        ["max-width", "요소의 최대 너비를 제한합니다."],
        ["rem", "루트 요소의 글자 크기를 기준으로 하는 단위입니다."],
        [
          "대비",
          "글자와 배경을 구별하기 쉬운 정도입니다. 색만으로 의미를 전달하지 않습니다."
        ],
        [
          "pre / code",
          "형식을 보존하는 영역과 코드라는 의미를 각각 나타내는 요소입니다."
        ]
      ],
      example:
        "<style>\n  article {\n    max-width: 40rem;\n    line-height: 1.9;\n  }\n  h1 {\n    font-size: 2rem;\n    line-height: 1.35;\n  }\n  p {\n    margin: 1rem 0;\n  }\n  pre {\n    padding: 20px;\n    overflow: auto;\n    background: #edf4f4;\n  }\n</style>\n<article>\n  <h1>읽기 좋은 학습 화면</h1>\n  <p>\n    글줄의 폭과 행간을 조정하면 긴 설명도 순서대로 읽기 쉽습니다.\n    이 문장의 길이를 늘려 보며 비교하세요.\n  </p>\n  <pre><code>function total(price) {\n  return price + 500;\n}</code></pre>\n</article>\n",
      mode: "html",
      filename: "index.html",
      trace: [
        ["본문 폭", "40rem으로 줄 길이를 제한합니다."],
        ["행간", "문단은 1.9, 제목은 1.35로 계층별 읽기 방식을 다르게 합니다."],
        ["pre의 코드", "중첩된 함수 본문의 공백이 유지됩니다."]
      ],
      task: "본문 line-height를 1.3과 1.9로 비교하고 더 읽기 쉬운 이유를 메모하세요.",
      checks: [
        "글자를 작게 하지 않고도 읽기성을 비교합니다.",
        "코드 들여쓰기가 보존됩니다."
      ],
      quiz: [
        ["rem은 부모 요소의 크기인가요?", "루트 요소의 글자 크기를 기준으로 합니다."],
        [
          "코드 앞 공백을 여러 개 넣으면 일반 p에서도 그대로 보이나요?",
          "기본 공백 처리에서는 합쳐질 수 있습니다. pre 등 보존 방식을 사용합니다."
        ]
      ],
      errors: [
        ["긴 설명이 답답합니다", "문단을 나누고 본문 폭·행간·제목 간격을 조정합니다."]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "css-04",
      track: "css",
      title: "Flexbox와 position으로 배치하기",
      lead: "한 축의 정렬과 겹쳐 놓는 요소의 기준점을 읽습니다.",
      sections: [
        {
          title: "Flexbox는 부모에서 시작합니다",
          body: "display:flex를 부모에 주면 바로 아래 자식들이 flex 항목이 됩니다. flex-direction이 주축을 정하고 justify-content는 주축, align-items는 교차축을 기준으로 정렬합니다."
        },
        {
          title: "줄바꿈과 늘어남을 구분합니다",
          body: "gap은 항목 사이 간격이고 flex-wrap은 다음 줄 허용 여부입니다. flex 속성은 항목의 늘어남·줄어듦·기준 크기를 조정합니다. 자식이 축소되지 않으면 긴 내용이나 min-width를 확인합니다."
        },
        {
          title: "absolute의 기준 조상을 찾습니다",
          body: "position:absolute는 일반 흐름에서 빠져 배치됩니다. 이 예제는 부모에 relative를 주어 NEW 배지가 카드 오른쪽 위를 기준으로 움직이게 합니다. 화면에 고정하는 fixed와 구분합니다."
        }
      ],
      definitions: [
        [
          "Flexbox / Grid",
          "자식 요소들을 배치하는 CSS 도구입니다. 한 축의 배치는 Flexbox, 행과 열을 함께 맞추는 배치는 Grid를 먼저 검토할 수 있습니다."
        ],
        [
          "gap",
          "Flexbox나 Grid에서 항목 사이 간격을 정합니다. 카드 자체의 안쪽 여백과는 다릅니다."
        ],
        [
          "relative / absolute",
          "relative는 원래 자리 기준 이동과 배치 기준점 설정에 쓰입니다. absolute는 일반 흐름에서 빠져 위치 기준 조상을 따라 배치됩니다."
        ],
        [
          "주축과 교차축",
          "Flexbox의 flex-direction이 정하는 축을 주축, 그와 직각인 축을 교차축이라고 부릅니다. row일 때와 column일 때를 구분합니다."
        ],
        [
          "flex-wrap",
          "Flexbox 항목을 한 줄에 유지할지 여러 줄로 넘길지 정합니다. 이 예제는 wrap으로 폭이 좁으면 다음 줄을 허용합니다."
        ],
        [
          "좌표 기준",
          "top·right 같은 값은 기준점과 함께 읽어야 합니다. absolute는 위치 기준이 되는 조상이 어디인지 찾는 것이 먼저입니다."
        ]
      ],
      example:
        '<style>\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 18px;\n  }\n  .product {\n    position: relative;\n    flex: 1 1 180px;\n    padding: 24px;\n    border: 1px solid #aac7c9;\n  }\n  .badge {\n    position: absolute;\n    top: 6px;\n    right: 8px;\n  }\n</style>\n<div class="row">\n  <article class="product">\n    <span class="badge">NEW</span>\n    <h2>커피</h2>\n    <p>4000원</p>\n  </article>\n  <article class="product">\n    <h2>빵</h2>\n    <p>3500원</p>\n  </article>\n</div>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        [".row", "직접 자식 카드들을 flex 항목으로 배치합니다."],
        ["flex:1 1 180px", "늘어남·줄어듦·기준 크기를 지정합니다."],
        ["배지", "relative 부모를 기준으로 absolute 위치를 잡습니다."]
      ],
      task: "gap을 늘리고 배지 right를 바꾸세요. 카드 사이 간격과 배지 위치의 차이를 설명하세요.",
      checks: ["서로 다른 속성이 다른 간격을 바꿉니다.", "작은 화면에서 줄바꿈됩니다."],
      quiz: [
        [
          "justify-content는 항상 가로 정렬인가요?",
          "주축 기준입니다. flex-direction에 따라 가로·세로가 달라집니다."
        ],
        ["absolute는 항상 브라우저 창 기준인가요?", "위치 기준 조상을 확인해야 합니다."]
      ],
      errors: [
        [
          "배지가 엉뚱한 곳으로 갑니다",
          "위치 기준이 될 부모의 position과 DOM 중첩을 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "css-05",
      track: "css",
      title: "Grid로 카드 목록과 행·열 구성",
      lead: "여러 행과 열을 함께 맞추는 구조를 만듭니다.",
      sections: [
        {
          title: "열 정의를 읽으면 화면 구성이 보입니다",
          body: "display:grid와 grid-template-columns는 부모에서 자식들을 어떤 열에 배치할지 정합니다. 1fr 1fr은 두 열이 남는 공간을 같은 비율로 나누는 설정입니다. 고정 px와 비율 단위를 함께 사용할 수도 있습니다."
        },
        {
          title: "최소 크기가 넘침을 만들 수 있습니다",
          body: "긴 문자열이나 자식의 최소 크기가 열을 밀어낼 수 있습니다. minmax(0,1fr)처럼 축소 가능한 최소값을 명시하고, 이미지 max-width나 텍스트 줄바꿈도 확인합니다."
        },
        {
          title: "데이터 개수와 레이아웃을 분리합니다",
          body: "항목을 추가할 때마다 위치를 직접 지정하기보다 부모 그리드가 배치를 맡게 합니다. 데이터 목록을 만드는 JavaScript와 화면 열을 정하는 CSS를 나누면 수정 범위가 줄어듭니다."
        }
      ],
      definitions: [
        ["트랙", "Grid의 행 또는 열입니다."],
        ["fr", "남는 공간을 비율로 나누는 단위입니다."],
        ["repeat", "같은 열·행 정의를 반복해 적는 함수입니다."],
        ["minmax", "트랙의 최소·최대 크기 범위를 지정합니다."],
        ["gap", "그리드 항목 사이 간격을 지정합니다."]
      ],
      example:
        '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 16px;\n  }\n  .grid article {\n    padding: 24px;\n    background: #eaf4f2;\n  }\n</style>\n<div class="grid">\n  <article>커피</article>\n  <article>라테</article>\n  <article>에이드</article>\n  <article>소금빵</article>\n</div>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["repeat(2,...)", "동일한 정의를 두 열에 적용합니다."],
        [
          "minmax(0,1fr)",
          "각 열이 내용 때문에 과도하게 최소 폭을 요구하지 않도록 합니다."
        ],
        ["자식 순서", "HTML 항목 순서가 기본 배치 순서로 이어집니다."]
      ],
      task: "열 개수를 2에서 3으로 바꾸고 다섯 번째 카드를 추가하세요.",
      checks: [
        "카드 위치를 각각 지정하지 않아도 배치됩니다.",
        "카드 간격과 열 개수를 구분해 수정합니다."
      ],
      quiz: [
        [
          "Grid를 쓰면 내부 텍스트가 항상 자동 축소되나요?",
          "내용·최소 크기·줄바꿈 규칙도 확인해야 합니다."
        ],
        [
          "3열을 만들려면 카드마다 width 33%를 적어야 하나요?",
          "부모의 열 정의로 관리할 수 있습니다."
        ]
      ],
      errors: [
        [
          "열이 예상보다 넓어집니다",
          "고정 폭 자식, 긴 내용, 최소 크기와 minmax 설정을 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "css-06",
      track: "css",
      title: "반응형 점검과 레이아웃 디버깅",
      lead: "모바일·넓은 화면·포커스·다크 환경을 확인하는 절차를 익힙니다.",
      sections: [
        {
          title: "좁은 화면의 기본값부터 만듭니다",
          body: "기본 CSS를 작은 화면의 한 열로 정하고 min-width 조건에서 넓은 배치를 더하면 읽는 순서가 분명합니다. 경계값 바로 전·같은 값·바로 뒤를 시험해 의도한 분기가 적용되는지 봅니다."
        },
        {
          title: "보이지 않는 가로 넘침을 찾습니다",
          body: "문서 전체가 옆으로 밀리면 가장 넓은 요소를 찾습니다. width:100vw와 스크롤바, 고정 px, 긴 코드·URL·표의 최소 너비 등이 원인일 수 있습니다. 실제 필요한 표만 가로 스크롤 영역으로 감싸 문서 전체가 흔들리지 않게 합니다."
        },
        {
          title: "도구에서 적용 규칙을 검증합니다",
          body: "Elements에서 실제 DOM을 선택하고 Styles의 취소선과 Computed의 최종값을 봅니다. 작은 화면만 깨지면 그 폭의 미디어 쿼리를, 특정 요소만 깨지면 클래스·우선순위·부모 배치를 좁혀 확인합니다. 키보드 포커스를 지우지 않습니다."
        }
      ],
      definitions: [
        [
          "반응형 웹",
          "같은 문서가 화면 폭이나 환경에 따라 다른 배치로 보이게 하는 방식입니다."
        ],
        [
          "viewport",
          "브라우저가 웹페이지를 배치할 때 기준으로 사용하는 화면 영역입니다. 모바일의 viewport 메타 설정도 확인합니다."
        ],
        [
          "미디어 쿼리",
          "@media 조건 안에 특정 화면 조건에서만 쓸 CSS를 적는 문법입니다."
        ],
        [
          "min-width / max-width",
          "min-width는 기준 이상, max-width는 기준 이하일 때를 뜻합니다."
        ],
        [
          "모바일 퍼스트",
          "좁은 화면의 기본 모양을 먼저 정한 뒤 넓은 화면에서 추가할 규칙을 쌓는 방식입니다."
        ],
        [
          "rem과 em",
          "rem은 루트 요소의 글자 크기를 기준으로 합니다. em은 속성에 따라 기준이 달라지며, font-size에서는 부모의 글자 크기를 기준으로 읽습니다."
        ],
        [
          "중단점",
          "레이아웃 규칙을 바꾸는 기준 폭입니다. 기기 이름을 외우기보다 해당 값의 전후에서 확인합니다."
        ],
        [
          "1fr",
          "Grid의 남는 공간을 비율로 나누는 단위입니다. 1fr 1fr은 두 트랙에 같은 비율로 공간을 나눕니다."
        ]
      ],
      example:
        '<style>\n  .cards {\n    display: grid;\n    gap: 16px;\n    grid-template-columns: 1fr;\n  }\n  .cards article {\n    padding: 24px;\n    background: #edf4f4;\n  }\n  @media (min-width: 600px) {\n    .cards {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  button:focus-visible {\n    outline: 3px solid #a25e13;\n    outline-offset: 4px;\n  }\n</style>\n<h1>반응형 메뉴</h1>\n<div class="cards">\n  <article>커피</article>\n  <article>빵</article>\n</div>\n<button>키보드 포커스 확인</button>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["기본값", "한 열 배치를 먼저 정합니다."],
        ["600px 조건", "이 예제의 미리보기 폭이 600px 이상일 때 두 열입니다."],
        [":focus-visible", "키보드 등으로 초점을 옮길 때 위치를 시각적으로 드러냅니다."]
      ],
      task: "미리보기 폭을 360과 800으로 비교하고 600px 경계 전후를 확인하세요.",
      checks: [
        "좁을 때 한 열, 넓을 때 두 열입니다.",
        "버튼 포커스를 볼 수 있습니다.",
        "페이지 전체에 가로 넘침이 없는지 확인합니다."
      ],
      quiz: [
        [
          "미디어 쿼리는 바깥 사이트 전체 폭만 볼까요?",
          "이 사이트의 실습은 iframe 안에서 실행하므로 미리보기 영역 폭을 기준으로 봅니다."
        ],
        [
          "배경만 검게 바꾸면 다크 모드가 완성되나요?",
          "글자·링크·테두리·포커스의 대비도 함께 확인해야 합니다."
        ]
      ],
      errors: [
        [
          "모바일만 화면이 잘립니다",
          "viewport 설정, 고정 너비와 현재 폭의 미디어 쿼리를 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-01",
      track: "js",
      title: "값·변수·자료형과 문자열 계산",
      lead: "숫자처럼 보이는 글자와 실제 숫자를 구분합니다.",
      sections: [
        {
          title: "이름을 선언하고 값을 읽습니다",
          body: "const는 같은 이름에 다른 값을 재대입하지 않을 때, let은 재대입할 때 사용합니다. const 객체의 내부 속성까지 자동으로 불변이 되는 것은 아닙니다. 어떤 이름을 어느 범위에서 사용할 수 있는지 스코프도 확인합니다."
        },
        {
          title: "값의 종류가 계산 의미를 바꿉니다",
          body: "문자열·숫자·불리언·undefined·null 등을 먼저 구분합니다. JavaScript의 원시 자료형에는 bigint와 symbol도 있지만 입문 실무에서는 우선 폼 입력과 API 값의 문자열·숫자·빈 값을 정확히 읽는 것이 중요합니다."
        },
        {
          title: "변환은 입력 검사와 함께 합니다",
          body: 'Number("4000")은 4000이고 Number("")은 0입니다. 변환할 수 없는 값은 NaN이 될 수 있습니다. typeof와 Number.isFinite 등으로 값을 확인하며, 데이터 형식이 맞지 않으면 조용히 잘못 계산하지 않도록 처리합니다.'
        }
      ],
      definitions: [
        [
          "변수",
          "값을 이름으로 가리키는 방법입니다. 선언한 이름을 나중에 읽거나 계산에 사용할 수 있습니다."
        ],
        [
          "const / let",
          "const는 같은 이름에 다른 값을 다시 대입할 수 없고, let은 재대입할 수 있습니다. const 객체의 내부 속성까지 자동으로 고정되는 것은 아닙니다."
        ],
        [
          "자료형",
          '문자열, 숫자, 불리언 등 값의 종류입니다. 같은 4000이라도 "4000"과 4000은 자료형이 다릅니다.'
        ],
        [
          "typeof",
          '값의 자료형 이름을 문자열로 확인하는 연산자입니다. 오래된 예외로 typeof null은 "object"입니다.'
        ],
        [
          "Number()",
          "값을 숫자로 변환하는 함수입니다. 변환할 수 없는 문자열은 NaN이 될 수 있어 입력 검사와 함께 읽습니다."
        ],
        [
          "console.log",
          "값을 개발자 도구 콘솔에 출력합니다. 이 학습 페이지는 그 출력을 아래 콘솔 영역에도 보여 줍니다."
        ],
        [
          "선언과 대입",
          "const price = 4000은 이름을 선언하면서 처음 값을 넣는 코드입니다. price = 5000은 이미 있는 이름에 다시 대입하려는 코드입니다."
        ],
        [
          "문자열",
          '글자로 다루는 값입니다. "4000"도 따옴표로 감쌌으므로 숫자 계산값이 아닌 문자열입니다.'
        ],
        [
          "숫자와 불리언",
          "4000은 숫자, true와 false는 불리언 값입니다. 불리언은 조건 판단 결과를 표현할 때 자주 만납니다."
        ],
        [
          "undefined와 null",
          "undefined는 값이 아직 없거나 제공되지 않은 경우에 자주 나타납니다. null은 의도적으로 비어 있음을 표시할 때 사용합니다. 구체적 의미는 코드의 약속을 확인합니다."
        ],
        [
          "NaN",
          '숫자 변환이나 계산이 숫자로 성립하지 않을 때 만나는 특수한 숫자 값입니다. Number("커피")의 결과가 예입니다.'
        ]
      ],
      example:
        'const raw = "4000";\nconst wrong = raw + 500;\nconst price = Number(raw);\nconst total = price + 500;\n\nconsole.log(typeof raw);\nconsole.log(wrong);\nconsole.log(`${total}원`);\n',
      mode: "console",
      filename: "main.js",
      trace: [
        ["raw", "문자열입니다."],
        ["wrong", '문자열 연결로 "4000500"이 됩니다.'],
        ["price와 total", "숫자로 변환한 뒤 계산하므로 4500입니다."]
      ],
      task: 'raw를 "4500"과 "커피"로 바꿔 결과를 비교하고 숫자 변환 실패를 설명하세요.',
      checks: ["숫자와 문자열을 구분합니다.", "NaN이 나오는 경우를 재현합니다."],
      quiz: [
        ["typeof null은 무엇인가요?", '역사적인 예외로 "object"가 나옵니다.'],
        [
          "const이면 배열에 push도 못 하나요?",
          "재대입과 내부 변경은 다릅니다. const 배열에도 push는 가능하지만 상태 관리의 원칙은 별도로 지켜야 합니다."
        ]
      ],
      errors: [
        [
          "가격이 4000500으로 나옵니다",
          "문자열 연결이 일어난 것입니다. 입력값 형식과 변환 지점을 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-02",
      track: "js",
      title: "조건·논리·경계값으로 규칙 구현",
      lead: "할인·권한 표시·입력 범위처럼 분기가 있는 코드를 읽습니다.",
      sections: [
        {
          title: "처음 맞는 분기를 찾습니다",
          body: "if·else if·else는 순서가 중요합니다. age >= 10을 먼저 검사하고 뒤에서 age >= 20을 검사하면 25세도 첫 분기에서 끝날 수 있습니다. 업무 규칙의 범위가 겹치는지 확인합니다."
        },
        {
          title: "논리 연산자의 반환값을 읽습니다",
          body: "&&와 ||는 항상 true·false만 반환하지 않고 피연산자 값을 반환합니다. 기본값으로 ||를 쓰면 유효한 0이나 빈 문자열까지 바꿀 수 있습니다. null과 undefined만 기본값으로 바꾸려면 ??를 검토합니다."
        },
        {
          title: "판정 기준을 예제로 적습니다",
          body: "할인 기준이 만 13세 미만이면 12·13·14를 확인합니다. 관리자 UI를 숨기는 조건과 실제 서버 권한 검사는 다릅니다. 브라우저에서 버튼을 숨겼다고 API 사용 권한이 보장되지는 않습니다."
        }
      ],
      definitions: [
        [
          "대입과 비교",
          "=는 오른쪽 값을 담는 대입이고, ===는 값과 자료형이 같은지 비교합니다."
        ],
        [
          "조건식",
          "참·거짓에 따라 실행할 분기를 고르는 표현입니다. 비교뿐 아니라 truthy·falsy인 값도 조건 판단에 쓰일 수 있습니다."
        ],
        [
          "if / else if / else",
          "위에서부터 조건을 검사해 처음 맞는 분기를 실행하는 구조입니다."
        ],
        [
          "삼항 연산자",
          "조건 ? 참일 때 값 : 거짓일 때 값 형식으로 두 값 중 하나를 고릅니다."
        ],
        [
          "&& / || / !",
          "둘 다 필요한 조건, 하나만 필요한 조건, 참·거짓 뒤집기에 자주 씁니다. &&와 ||는 불리언만이 아니라 피연산자 값 자체를 돌려줄 수 있습니다."
        ],
        [
          "경계값",
          "조건이 바뀌는 바로 전·정확한 값·바로 뒤의 값입니다. 할인 기준이 15세라면 14·15·16세로 확인합니다."
        ],
        [
          "비교 연산자",
          "<, <=, >, >=, ===처럼 값을 비교해 불리언을 만드는 연산자입니다. =와 ===를 구분합니다."
        ],
        [
          "엄격한 비교",
          '===는 자료형을 자동으로 같게 바꾸지 않고 비교합니다. 10과 "10"은 이 비교에서 다릅니다.'
        ],
        [
          "truthy와 falsy",
          '조건식에서 참처럼 또는 거짓처럼 판단되는 값입니다. false, 0, "", null, undefined, NaN 등은 대표적인 falsy 값입니다.'
        ]
      ],
      example:
        'function ticketPrice(age, member) {\n  if (!Number.isInteger(age) || age < 0) {\n    return "나이를 확인하세요";\n  }\n  const base = age < 13 ? 5000 : 10000;\n  return member ? base * 0.9 : base;\n}\n\nconsole.log(ticketPrice(12, true));\nconsole.log(ticketPrice(13, false));\nconsole.log(0 || 10);\nconsole.log(0 ?? 10);\n',
      mode: "console",
      filename: "main.js",
      trace: [
        ["검사 분기", "잘못된 입력을 먼저 끝냅니다."],
        ["기본 요금", "나이 조건으로 고릅니다."],
        [
          "회원 요금",
          "기본 요금 계산 뒤 10% 할인을 적용합니다. 마지막 두 출력은 기본값 연산 차이입니다."
        ]
      ],
      task: "할인 기준을 15세 미만으로 바꾸고 14·15·16세를 확인하세요.",
      checks: [
        "회원·비회원 두 경우를 시험합니다.",
        "0 || 10과 0 ?? 10의 차이를 설명합니다."
      ],
      quiz: [
        ["=와 ===는 같은가요?", "=는 대입이고 ===는 엄격한 동등 비교입니다."],
        [
          "빈 배열은 조건에서 거짓인가요?",
          "배열 객체는 truthy입니다. 비었는지는 length 등으로 확인합니다."
        ]
      ],
      errors: [
        [
          "조건을 만족하는데 다른 요금이 나옵니다",
          "조건 순서, 포함 경계, 문자열 입력 여부와 할인 적용 순서를 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-03",
      track: "js",
      title: "함수·return·반복·스코프",
      lead: "입력에서 결과까지 따라가며 재사용할 계산을 만듭니다.",
      sections: [
        {
          title: "선언·호출·반환을 나눕니다",
          body: "함수 선언은 실행할 내용을 만들고 호출은 인수를 넣어 실행합니다. return은 결과를 호출한 위치로 돌려주며 현재 함수를 끝냅니다. 콘솔에 출력하는 것과 반환하는 것은 다릅니다."
        },
        {
          title: "반복에는 종료 이유가 있어야 합니다",
          body: "for는 초기화·조건·증감, while은 계속할 조건과 바뀌는 값을 읽습니다. break는 반복 종료, continue는 현재 차례의 남은 부분을 건너뜁니다. 반복 조건이 변하지 않으면 끝나지 않을 수 있습니다."
        },
        {
          title: "콜백도 함수입니다",
          body: "함수를 변수에 담거나 다른 함수에 전달할 수 있습니다. n => n + 1은 간단한 반환이고 n => { return n + 1; }은 명시적인 반환입니다. {}를 추가하고 return을 잊는 실수가 자주 생깁니다."
        }
      ],
      definitions: [
        [
          "반복문",
          "같은 코드를 조건이나 횟수에 따라 되풀이하는 구조입니다. for, while 등이 있습니다."
        ],
        [
          "while",
          "조건이 참인 동안 본문을 반복합니다. 조건이 언젠가 거짓이 되도록 값이 바뀌는지 확인합니다."
        ],
        [
          "함수",
          "실행할 코드를 이름으로 묶은 것입니다. 만들어 두는 것과 호출하는 것은 다릅니다."
        ],
        [
          "매개변수와 인수",
          "매개변수는 함수가 값을 받을 자리이고, 인수는 호출할 때 실제로 넣는 값입니다."
        ],
        ["return", "계산 결과를 호출한 자리로 돌려주고 현재 함수 실행을 끝냅니다."],
        [
          "누적값",
          "total처럼 반복마다 더해지는 값입니다. 처음 값을 어디에서 정하는지와 언제 갱신하는지가 중요합니다."
        ],
        [
          "함수 선언과 호출",
          "function add(a, b) { ... }는 함수를 만드는 코드이고 add(2, 3)은 사용하는 호출입니다."
        ],
        [
          "지역 변수",
          "함수나 블록 안에 선언해 그 범위에서 사용하는 변수입니다. 함수 안 total을 바깥에서 바로 쓸 수 있는지 스코프를 확인합니다."
        ],
        [
          "break와 continue",
          "break는 반복을 끝내고, continue는 이번 본문의 남은 부분을 건너뛴 뒤 다음 차례로 진행합니다."
        ],
        [
          "화살표 함수",
          "(a, b) => a + b처럼 함수를 쓰는 다른 문법입니다. 간단한 표현식 본문은 결과를 바로 반환하지만 {} 본문은 return을 확인합니다."
        ]
      ],
      example:
        "function subtotal(prices) {\n  let sum = 0;\n  for (let i = 0; i < prices.length; i += 1) {\n    sum += prices[i];\n  }\n  return sum;\n}\n\nconst result = subtotal([4000, 3500]);\nconsole.log(result);\n",
      mode: "console",
      filename: "main.js",
      trace: [
        ["함수 입력", "prices라는 배열을 받습니다."],
        ["반복", "0부터 마지막 항목 전까지 각 값을 합계에 더합니다."],
        ["return", "7500을 호출 위치에 돌려줍니다."]
      ],
      task: "배열에 4500을 추가하고 빈 배열도 넣어 보세요.",
      checks: ["세 항목 합계는 12000입니다.", "빈 배열은 0입니다."],
      quiz: [
        [
          "함수 안 const sum을 밖에서 바로 읽을 수 있나요?",
          "해당 범위에 속한 이름입니다. 결과를 return하거나 필요한 구조로 전달합니다."
        ],
        [
          "화살표 함수의 {} 안에서 return을 빼면요?",
          "다른 명시적 반환이 없다면 undefined가 됩니다."
        ]
      ],
      errors: [
        [
          "결과가 undefined입니다",
          "호출 결과를 만드는 모든 경로에 필요한 return이 있는지 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-04",
      track: "js",
      title: "객체·배열·JSON의 데이터 구조",
      lead: "상품 하나와 상품 목록을 같은 방식으로 다루지 않습니다.",
      sections: [
        {
          title: "순서와 이름을 나누어 읽습니다",
          body: "배열은 위치로, 객체는 속성 이름으로 접근합니다. menus[1].price는 두 번째 메뉴 객체의 가격입니다. API 응답이 배열인지 { items: [...] } 객체인지에 따라 접근 경로가 다릅니다."
        },
        {
          title: "참조와 복사 관계를 확인합니다",
          body: "const b = a는 객체의 독립 복사본이 아닐 수 있습니다. 같은 객체를 두 이름으로 가리키면 한쪽 내부 변경이 다른 쪽에서도 보입니다. {...obj}와 [...list]는 얕은 복사이므로 중첩된 내부 객체까지 완전히 분리하지 않습니다."
        },
        {
          title: "JSON은 문자열 형식입니다",
          body: "JSON.stringify와 JSON.parse를 나눠 사용합니다. JSON은 큰따옴표 키·문자열을 사용하고 함수·주석·끝 쉼표는 허용하지 않습니다. 파싱 성공 뒤에도 원하는 구조인지 검사합니다."
        }
      ],
      definitions: [
        [
          "배열",
          "여러 값을 순서대로 담는 자료구조입니다. []로 만들고 인덱스로 항목을 읽습니다."
        ],
        [
          "인덱스와 length",
          "인덱스는 0부터 세는 위치입니다. length는 항목 수이며 마지막 위치는 length - 1입니다."
        ],
        [
          "객체",
          '이름과 값의 묶음입니다. { name: "커피", price: 4000 }처럼 항목의 정보를 표현합니다.'
        ],
        [
          "속성 접근",
          "menu.name은 고정된 속성 이름을 읽고, menu[key]는 변수에 담긴 이름 등으로 속성을 읽을 수 있습니다."
        ],
        [
          "JSON",
          "데이터를 주고받거나 저장할 때 쓰는 문자열 형식입니다. JavaScript 객체 자체와는 다릅니다."
        ],
        [
          "stringify / parse",
          "JSON.stringify는 값을 JSON 문자열로, JSON.parse는 JSON 문자열을 JavaScript 값으로 바꿉니다."
        ],
        [
          "키와 값",
          '객체에서 name은 키, "커피"는 그 키에 연결된 값입니다. 값을 읽으려면 먼저 어느 객체의 어느 키인지 찾습니다.'
        ],
        [
          "객체 배열",
          "배열의 각 항목이 객체인 구조입니다. menus[0].name처럼 위치로 항목을 찾고 이름으로 속성을 찾습니다."
        ],
        [
          "원본 변경 메서드",
          "push·pop·splice 등은 원래 배열을 바꿉니다. 반환값이 원래 배열 전체인지도 별도로 확인합니다."
        ],
        [
          "얕은 복사",
          "배열의 바깥 구조를 복사해도 내부 객체는 같은 참조일 수 있습니다. 복사했다는 말만으로 내부 변경이 독립적이라고 단정하지 않습니다."
        ]
      ],
      example:
        'const menus = [\n  { id: "coffee", name: "커피", price: 4000 },\n  { id: "bread", name: "빵", price: 3500 }\n];\nconst json = JSON.stringify(menus);\nconst restored = JSON.parse(json);\n\nconsole.log(restored[1].name);\nconsole.log(typeof json);\nconst next = menus.map((menu) =>\n  menu.id === "coffee" ? { ...menu, price: 4200 } : menu\n);\nconsole.log(next[0].price, menus[0].price);\n',
      mode: "console",
      filename: "main.js",
      trace: [
        ["JSON 변환", "문자열과 구조화된 값을 오갑니다."],
        ["두 번째 이름", "인덱스 1과 .name으로 빵을 읽습니다."],
        ["새 객체", "커피만 새 객체로 바꾸고 기존 메뉴의 가격은 유지합니다."]
      ],
      task: "빵의 가격만 3800인 새 목록을 만드세요.",
      checks: ["새 목록에서 빵 가격이 바뀝니다.", "기존 목록의 가격은 그대로입니다."],
      quiz: [
        ["배열 번호는 1부터인가요?", "0부터입니다. 마지막은 length - 1입니다."],
        [
          "...obj는 깊은 복사인가요?",
          "속성의 한 단계 얕은 복사입니다. 중첩 참조는 별도로 살펴봐야 합니다."
        ]
      ],
      errors: [
        [
          "Cannot read properties of undefined가 보입니다",
          "인덱스·키와 실제 응답 구조를 출력해 확인하고, 값이 존재하는지 검사합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-05",
      track: "js",
      title: "map·filter·find·reduce로 목록 가공",
      lead: "원하는 결과 종류를 고른 뒤 콜백을 읽습니다.",
      sections: [
        {
          title: "결과의 형태를 먼저 정합니다",
          body: "항목을 선별하면 filter, 각 항목을 변환하면 map, 하나를 찾으면 find, 합계를 모으면 reduce입니다. some·every는 조건에 맞는지 불리언으로 답합니다. forEach는 작업을 수행하며 결과 배열을 반환하는 도구가 아닙니다."
        },
        {
          title: "콜백의 한 항목을 실제 값으로 대입합니다",
          body: "menu => menu.price <= 4000에서 menu는 현재 항목입니다. 커피 객체를 넣었을 때 true인지, 라테 객체를 넣었을 때 false인지 확인하면 문법보다 실행 의미가 보입니다."
        },
        {
          title: "배열을 새로 만들어도 내부 변경은 주의합니다",
          body: "filter·map은 원본 배열 자체를 바꾸지 않지만 콜백에서 객체 속성을 직접 수정하면 원본 객체에 영향이 생길 수 있습니다. 순서가 중요한 작업은 체인 단계별 중간 결과를 출력해 확인합니다."
        }
      ],
      definitions: [
        [
          "콜백 함수",
          "다른 함수에 넘겨, 그 함수가 정한 시점에 실행하도록 하는 함수입니다."
        ],
        [
          "filter",
          "조건이 참인 항목만 담은 새 배열을 만듭니다. 개수는 줄어들 수 있습니다."
        ],
        [
          "map",
          "항목마다 변환 결과를 모은 새 배열을 만듭니다. 일반적인 항목 배열에서는 입력과 출력의 항목 수가 같습니다."
        ],
        [
          "reduce",
          "누적값과 현재 항목을 사용해 전체를 하나의 결과로 모읍니다. 합계 외에도 다양한 결과를 만들 수 있습니다."
        ],
        [
          "find / some / every",
          "find는 첫 일치 항목, some은 하나라도 조건에 맞는지, every는 모두 맞는지를 돌려줍니다."
        ],
        [
          "불변성과 참조",
          "새 배열을 만든다고 그 안의 객체까지 모두 새로 복사되는 것은 아닙니다. 콜백에서 원래 객체를 고치는지 주의합니다."
        ],
        [
          "메서드",
          "값이나 객체에 연결해 사용하는 함수입니다. items.filter(...)처럼 점 뒤에 이름과 괄호가 붙는 형태를 자주 만납니다."
        ],
        [
          "콜백의 매개변수",
          "filter(item => ...)의 item은 현재 처리 중인 항목을 부르는 임시 이름입니다. 변수 이름은 바꿀 수 있지만 본문과 일치해야 합니다."
        ],
        [
          "메서드 연결",
          "filter(...).map(...)은 filter가 만든 결과 배열에 map을 적용하는 순서입니다. 각각 원본에 독립적으로 실행한다는 뜻이 아닙니다."
        ],
        [
          "누적값과 초기값",
          "reduce의 sum은 이전 단계 결과이고 마지막 0은 시작값입니다. 어떤 값에서 출발하는지에 따라 계산 의미가 달라집니다."
        ]
      ],
      example:
        'const menus = [\n  { name: "커피", price: 4000 },\n  { name: "라테", price: 4500 },\n  { name: "빵", price: 3500 }\n];\nconst selected = menus.filter((menu) => menu.price <= 4000);\nconst names = selected.map((menu) => menu.name);\nconst total = selected.reduce((sum, menu) => sum + menu.price, 0);\n\nconsole.log(names);\nconsole.log(total);\nconsole.log(menus.find((menu) => menu.name === "없는 메뉴"));\n',
      mode: "console",
      filename: "main.js",
      trace: [
        ["filter", "커피와 빵만 남깁니다."],
        ["map", "이름만 모아 새 배열을 만듭니다."],
        ["reduce와 find", "합계는 7500, 없는 메뉴 검색은 undefined입니다."]
      ],
      task: "조건을 4500 이하로 바꾸고 이름과 합계를 예상하세요.",
      checks: [
        "세 이름과 12000원이 나옵니다.",
        "없는 항목을 찾은 결과에 바로 .price를 붙이지 않습니다."
      ],
      quiz: [
        ["find 결과는 항상 객체인가요?", "못 찾으면 undefined일 수 있습니다."],
        [
          "reduce에 초기값이 없으면요?",
          "빈 배열에서는 오류가 날 수 있습니다. 시작값을 의도에 맞게 정합니다."
        ]
      ],
      errors: [
        [
          "map 결과가 전부 undefined입니다",
          "{} 콜백에서 return을 빠뜨렸는지 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-06",
      track: "js",
      title: "DOM을 찾아 안전하게 화면 바꾸기",
      lead: "선택·생성·내용·삽입을 나누어 읽습니다.",
      sections: [
        {
          title: "문자열 소스와 DOM은 다릅니다",
          body: "브라우저는 HTML을 객체 구조로 표현합니다. JavaScript의 DOM 조작은 이 현재 구조를 바꿉니다. 원본 HTML 파일 자체를 디스크에서 다시 쓰는 동작은 아닙니다."
        },
        {
          title: "선택 결과가 없을 수 있습니다",
          body: "querySelector는 첫 요소 또는 null입니다. querySelectorAll은 목록을 반환하므로 하나인지 여럿인지 구분합니다. script가 너무 일찍 실행되면 아직 대상 요소가 없는 경우도 있습니다."
        },
        {
          title: "외부 글자를 HTML로 해석하지 않습니다",
          body: "사용자나 서버에서 받은 일반 텍스트는 textContent로 넣습니다. innerHTML은 HTML 해석이 필요할 때 의도적으로 사용하고 입력 신뢰 범위를 확인합니다. 모양은 classList로 CSS 상태를 연결하는 방식이 단순합니다."
        }
      ],
      definitions: [
        [
          "DOM",
          "브라우저가 HTML 문서를 JavaScript로 다룰 수 있는 객체 구조로 표현한 것입니다."
        ],
        [
          "querySelector",
          "CSS 선택자에 맞는 첫 요소를 찾습니다. 없으면 null을 돌려줍니다."
        ],
        [
          "textContent",
          "요소의 내용을 글자로 읽거나 바꿉니다. 넣은 문자열 속 태그를 HTML로 해석하지 않습니다."
        ],
        [
          "innerHTML",
          "문자열을 HTML로 해석해 요소 내용을 바꿉니다. 외부에서 받은 글을 그대로 넣는 용도로 사용하지 않도록 주의합니다."
        ],
        [
          "createElement / appendChild",
          "createElement는 메모리에 요소를 만들고 appendChild는 부모의 자식으로 붙입니다."
        ],
        [
          "classList",
          "CSS 클래스를 붙이거나 떼어 스타일 상태를 바꾸는 도구입니다. add, remove, toggle 등을 사용합니다."
        ],
        [
          "노드와 요소",
          "DOM에는 요소뿐 아니라 텍스트와 주석 같은 노드도 있습니다. 이 수업에서는 HTML 요소를 찾고 바꾸는 동작에 집중합니다."
        ],
        [
          "선택 결과의 종류",
          "querySelector는 첫 요소 하나 또는 null이고 querySelectorAll은 맞는 요소들의 NodeList입니다. 결과를 하나로 쓸지 반복할지 구분합니다."
        ],
        [
          "null 접근 오류",
          "찾지 못한 결과가 null인데 .textContent 등을 읽거나 쓰면 오류가 날 수 있습니다. 선택자와 실행 시점을 먼저 봅니다."
        ],
        [
          "텍스트와 HTML의 차이",
          'textContent에 "<b>안녕</b>"를 넣으면 태그까지 글자로 보입니다. innerHTML은 HTML로 해석한다는 차이가 있습니다.'
        ],
        [
          "생성과 삽입",
          "createElement는 요소를 만들지만 문서에 붙이지는 않습니다. appendChild 등으로 붙이는 단계가 있어야 보입니다."
        ]
      ],
      example:
        '<h1>여행 준비물</h1>\n<ul id="list"></ul>\n<script>\n  const items = ["여권", "충전기", "지갑"];\n  const list = document.querySelector("#list");\n  items.forEach((name) => {\n    const li = document.createElement("li");\n    li.textContent = name;\n    list.appendChild(li);\n  });\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["선택", "이미 만들어진 ul을 찾습니다."],
        ["생성", "각 이름에 li 하나를 만듭니다."],
        ["삽입", "글자를 넣고 문서에 붙입니다. 만들기만 하면 아직 보이지 않습니다."]
      ],
      task: "목록에 “우산”을 추가하고 글자에 <b>를 포함해 보세요.",
      checks: ["항목이 네 개가 됩니다.", "textContent에서는 태그가 글자로 보입니다."],
      quiz: [
        [
          "배열에 항목만 추가하면 이미 그린 DOM도 자동 갱신되나요?",
          "이 일반 DOM 코드는 다시 그리는 호출이 필요합니다."
        ],
        [
          "null은 요소가 비었다는 뜻인가요?",
          "선택 결과로 요소를 찾지 못한 값일 수 있습니다."
        ]
      ],
      errors: [
        [
          "textContent 대입에서 오류가 납니다",
          "선택자 철자와 요소 생성 시점을 먼저 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-07",
      track: "js",
      title: "이벤트·폼·상태와 render 함수",
      lead: "사용자 행동에서 화면 갱신까지 연결합니다.",
      sections: [
        {
          title: "핸들러는 나중에 호출할 함수입니다",
          body: 'addEventListener("click", handler)와 handler()를 구분합니다. 직접 호출 결과를 넘기는 경우와 함수를 반환하는 팩토리를 쓰는 경우도 있어, 괄호 유무만 외우기보다 반환값의 종류까지 봅니다.'
        },
        {
          title: "입력값은 실행 시점에 읽습니다",
          body: "페이지 시작 때 한 번 읽은 값과 클릭 순간 .value를 읽은 값은 다릅니다. submit을 form에서 처리하면 Enter 제출도 함께 다루기 쉽습니다. 기본 동작을 막는 preventDefault와 이벤트 전파 중지는 서로 다릅니다."
        },
        {
          title: "데이터 변경과 렌더를 분리합니다",
          body: "배열에 항목을 추가하는 로직과 그 배열을 화면으로 그리는 render를 나누면 흐름이 분명합니다. 매번 render에서 기존 내용을 비우지 않으면 같은 항목이 중복될 수 있습니다. 입력 정리·검사도 추가 전에 수행합니다."
        }
      ],
      definitions: [
        ["이벤트", "클릭, 입력, 제출처럼 브라우저에서 일어나는 일입니다."],
        ["이벤트 핸들러", "이벤트가 일어났을 때 실행하도록 연결한 함수입니다."],
        [
          "addEventListener",
          "요소에 이벤트 종류와 실행할 함수를 연결하는 메서드입니다."
        ],
        [
          "이벤트 객체",
          "무슨 일이 일어났는지 담긴 값입니다. target은 발생 요소, key는 키보드 이벤트의 키 이름 등을 나타냅니다."
        ],
        [
          "input / change / submit",
          "input은 값 편집 때, change는 요소 종류에 따른 값 확정 때, submit은 폼 제출 때 사용합니다."
        ],
        [
          "화면 반영",
          "변수만 바꾸는 것과 화면 글자를 바꾸는 것은 별개입니다. 이 예제는 textContent와 style을 직접 갱신합니다."
        ],
        [
          "함수 값과 호출 결과",
          "handleClick은 함수 자체이고 handleClick()은 실행한 뒤 얻는 반환값입니다. 이벤트 등록에는 실행할 함수 값이 필요합니다."
        ],
        [
          "이벤트 대상",
          "event.target은 사건이 처음 일어난 요소, event.currentTarget은 현재 핸들러를 등록한 요소입니다. 내부에 다른 요소가 있으면 다를 수 있습니다."
        ],
        [
          "기본 동작",
          "링크 이동이나 폼 제출처럼 브라우저가 기본으로 수행하는 일입니다. preventDefault는 취소 가능한 기본 동작을 막습니다."
        ],
        [
          "이벤트 전파",
          "안쪽 요소에서 일어난 이벤트가 바깥 요소의 처리에도 이어질 수 있는 구조입니다. 기본 동작 취소와 전파 중지는 같은 뜻이 아닙니다."
        ],
        [
          "입력값 읽는 시점",
          "클릭할 때 .value를 읽으면 그때의 값이고, 처음 실행할 때 읽어 둔 변수는 이후 입력을 자동으로 따라가지 않습니다."
        ]
      ],
      example:
        '<form id="form">\n  <label for="item">준비물</label>\n  <input id="item" required />\n  <button>추가</button>\n</form>\n<ul id="list"></ul>\n<script>\n  const items = [];\n  const input = document.querySelector("#item");\n  function render() {\n    const list = document.querySelector("#list");\n    list.textContent = "";\n    items.forEach((name) => {\n      const li = document.createElement("li");\n      li.textContent = name;\n      list.appendChild(li);\n    });\n  }\n  document\n    .querySelector("#form")\n    .addEventListener("submit", (event) => {\n      event.preventDefault();\n      const name = input.value.trim();\n      if (!name) return;\n      items.push(name);\n      input.value = "";\n      render();\n    });\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["상태", "items가 현재 목록을 기억합니다."],
        ["submit", "현재 입력을 읽고 공백을 정리해 비었으면 추가하지 않습니다."],
        ["render", "변경된 배열을 화면으로 다시 그립니다."]
      ],
      task: "입력을 Enter로 제출하고 공백만 넣은 경우도 시험하세요.",
      checks: [
        "정상 이름만 추가됩니다.",
        "추가 후 입력칸이 비워집니다.",
        "중복 렌더 때문에 같은 항목이 늘어나지 않습니다."
      ],
      quiz: [
        [
          "event.target과 currentTarget은 항상 같나요?",
          "이벤트 발생 위치와 핸들러 등록 위치에 따라 다를 수 있습니다."
        ],
        [
          "배열만 바꾸면 화면이 바뀌나요?",
          "이 예제에서는 render 호출로 화면에 반영합니다."
        ]
      ],
      errors: [
        [
          "클릭하자 페이지가 이동합니다",
          "submit의 기본 전송을 처리할 의도라면 form 이벤트와 preventDefault를 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-08",
      track: "js",
      title: "Promise·async/await와 실패 처리",
      lead: "대기·성공·실패를 나누고 중복 실행을 다룹니다.",
      sections: [
        {
          title: "시간이 걸리는 일을 기다리는 위치를 찾습니다",
          body: "타이머나 네트워크는 결과가 나중에 준비될 수 있습니다. async 함수는 Promise를 반환하고 await는 그 함수의 이어지는 부분을 기다립니다. 브라우저의 모든 실행을 통째로 멈추는 명령은 아닙니다."
        },
        {
          title: "실패도 정상적인 경로로 설계합니다",
          body: "Promise가 거부되면 await 지점에서 오류처럼 처리할 수 있습니다. try/catch는 안내 문구로 바꾸고 finally는 버튼 재활성화처럼 성공·실패 공통 정리에 사용합니다. 오류를 빈 catch로 숨기지 않습니다."
        },
        {
          title: "대기 중 다시 누를 수 있는지 결정합니다",
          body: "로딩 상태를 먼저 보여 주고 요청 중 버튼을 비활성화하면 간단한 중복 실행을 줄일 수 있습니다. 더 복잡한 검색 요청에서는 이전 결과가 나중에 도착해 새 결과를 덮지 않도록 취소나 요청 식별자를 검토합니다."
        }
      ],
      definitions: [
        [
          "비동기",
          "시간이 걸리는 작업의 결과를 나중에 이어 받아 처리하는 방식입니다. 다른 실행 가능한 작업은 계속 진행할 수 있습니다."
        ],
        [
          "Promise",
          "나중에 완료될 결과를 표현하는 객체입니다. 대기(pending) 뒤 성공(fulfilled) 또는 실패(rejected)로 결정됩니다."
        ],
        ["resolve / reject", "Promise를 성공 또는 실패로 결정하는 함수입니다."],
        [
          "async / await",
          "async 함수는 Promise를 돌려줍니다. await는 해당 함수 안에서 Promise가 결정된 뒤 이어지는 코드를 실행하게 합니다."
        ],
        [
          "setTimeout",
          "일정 시간이 지난 뒤 콜백 실행을 예약합니다. 정확히 그 시간에 즉시 실행된다고 보장하지는 않습니다."
        ],
        [
          "콜스택과 이벤트 루프",
          "현재 실행 중인 함수의 처리와 나중에 준비된 작업을 이어 실행하는 구조를 이해하는 개념입니다."
        ],
        [
          "대기·성공·실패",
          "Promise는 대기하다가 한 번 성공 또는 실패로 결정됩니다. 성공 값과 실패 이유를 각각 처리할 수 있습니다."
        ],
        [
          "then과 catch",
          "Promise의 성공 결과나 실패 이유를 받을 함수를 연결하는 메서드입니다. async/await와는 표현 방법이 다를 뿐 연결되는 개념입니다."
        ],
        [
          "async 함수의 반환값",
          "async 함수에서 숫자를 return해도 호출 결과는 그 숫자로 이행되는 Promise입니다. 일반 함수와 구분합니다."
        ],
        [
          "await 뒤의 실행",
          "기다리는 Promise가 성공하면 다음 부분을 이어가고, 거부되면 해당 지점에서 오류처럼 처리됩니다. try/catch가 있는지도 확인합니다."
        ],
        [
          "예약과 취소",
          "setTimeout·setInterval은 실행을 예약하고, 반환된 식별자로 clearTimeout·clearInterval을 호출해 해당 예약을 취소할 수 있습니다."
        ]
      ],
      example:
        '<button id="load">결과 확인</button>\n<label\n  ><input id="fail" type="checkbox" /> 실패 상황 만들기</label\n>\n<p id="status" aria-live="polite"></p>\n<script>\n  function requestResult(fail) {\n    return new Promise((resolve, reject) => {\n      setTimeout(() => {\n        if (fail) reject(new Error("연습용 실패입니다."));\n        else resolve("결과를 받았습니다.");\n      }, 700);\n    });\n  }\n  const button = document.querySelector("#load");\n  const status = document.querySelector("#status");\n  button.addEventListener("click", async () => {\n    const fail = document.querySelector("#fail").checked;\n    button.disabled = true;\n    status.textContent = "기다리는 중…";\n    try {\n      status.textContent = await requestResult(fail);\n    } catch (error) {\n      status.textContent = error.message;\n    } finally {\n      button.disabled = false;\n    }\n  });\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["Promise", "700ms 뒤 성공 또는 실패하도록 만든 로컬 연습입니다."],
        ["try/catch", "성공 메시지와 실패 메시지를 따로 처리합니다."],
        ["finally", "어느 경로에서도 버튼을 다시 사용할 수 있습니다."]
      ],
      task: "성공과 실패를 번갈아 실행하고 두 경우 모두 버튼이 복구되는지 확인하세요.",
      checks: [
        "대기 문구를 볼 수 있습니다.",
        "실패 이유가 화면에 보입니다.",
        "완료 후 다시 누를 수 있습니다."
      ],
      quiz: [
        [
          "async 함수가 return 3을 하면 일반 숫자 3을 받나요?",
          "호출 결과는 3으로 이행되는 Promise입니다."
        ],
        [
          "setTimeout 700은 정확한 실행 시각인가요?",
          "최소 대기 시간으로 생각하며 다른 작업 상황에 따라 늦어질 수 있습니다."
        ]
      ],
      errors: [
        [
          "실패 후 버튼이 계속 잠깁니다",
          "공통 정리 코드가 finally에 있는지 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-09",
      track: "js",
      title: "fetch·HTTP·JSON과 Network로 디버깅",
      lead: "연결 실패와 상태 오류, 본문 해석 실패를 구분합니다.",
      sections: [
        {
          title: "세 단계를 분리합니다",
          body: "fetch로 응답을 받고, ok·status를 확인하고, json()으로 본문을 읽습니다. 404·500은 응답을 받은 것이므로 기본 fetch가 자동으로 모두 catch로 보내지 않습니다. 직접 상태 검사 후 오류로 처리합니다."
        },
        {
          title: "Network와 Console은 다른 증거입니다",
          body: "Network에서는 요청 URL·메서드·상태·응답 본문을 봅니다. Console에서는 코드의 이름·자료형·실행 오류를 봅니다. 요청이 아예 없으면 이벤트 연결, 주소가 틀리면 경로, 응답 구조가 다르면 파싱 이후 접근을 확인합니다."
        },
        {
          title: "CORS는 서버의 교차 출처 허용 정책입니다",
          body: "다른 출처의 응답을 브라우저가 읽을 수 있는지와 관련됩니다. 프런트 코드에 no-cors를 붙여 읽을 수 없는 응답으로 바꾸는 것이 일반적인 데이터 API 해결은 아닙니다. 허용할 출처를 서버에서 적절히 설정하거나 같은 출처 구조를 사용합니다."
        }
      ],
      definitions: [
        [
          "API",
          "다른 기능이나 데이터와 정해진 방식으로 상호작용하는 인터페이스입니다. 여기서는 웹 요청과 응답을 통해 데이터를 받는 맥락입니다."
        ],
        [
          "HTTP 요청과 응답",
          "요청에는 주소·메서드 등이 있고, 응답에는 상태 코드·헤더·본문 등이 있습니다."
        ],
        [
          "fetch",
          "요청을 시작하고 Response로 이행되는 Promise를 돌려주는 브라우저 API입니다."
        ],
        [
          "response.ok",
          "응답 상태가 200~299인지 확인하는 값입니다. 응답을 받았다는 것과 업무 처리가 성공했다는 것을 구분해서 봅니다."
        ],
        [
          "response.json()",
          "응답 본문을 읽어 JavaScript 값으로 해석하는 비동기 메서드입니다."
        ],
        [
          "try / catch / throw",
          "실패할 수 있는 작업을 try에 두고, throw나 거부된 Promise의 오류를 catch에서 처리합니다."
        ],
        [
          "URL과 엔드포인트",
          "URL은 자원의 주소입니다. API 문맥에서 특정 기능이나 데이터를 요청하는 주소를 엔드포인트라고 부릅니다."
        ],
        [
          "메서드",
          "GET·POST 등 요청의 의도를 표현하는 방법입니다. 실제 API가 어떤 메서드와 데이터를 요구하는지 확인해야 합니다."
        ],
        [
          "상태 코드",
          "200·404·500처럼 응답의 결과를 나타내는 숫자입니다. 404는 못 찾음, 500은 서버 쪽 오류를 나타내는 대표적인 코드입니다."
        ],
        [
          "본문과 헤더",
          "본문은 실제 전달할 데이터이고 헤더는 형식 같은 부가 정보를 담습니다. Content-Type은 본문 형식을 읽는 단서입니다."
        ],
        [
          "네트워크 실패와 HTTP 오류",
          "응답을 받지 못한 연결 문제와, 응답은 받았지만 상태가 오류인 경우는 다릅니다. fetch와 ok 검사 위치를 나누어 봅니다."
        ],
        [
          "finally",
          "try/catch의 성공·실패 경로와 관계없이 마무리 코드를 둘 때 사용합니다. 로딩 표시 해제 등을 정리하는 데 쓰입니다."
        ]
      ],
      example:
        '<button id="load">메뉴 불러오기</button>\n<select id="mode">\n  <option value="ok">정상</option>\n  <option value="404">404</option>\n  <option value="json">잘못된 JSON</option>\n</select>\n<pre id="output"></pre>\n<script>\n  // 실제 서버 대신 데이터 URL과 가상 Response로 경로를 연습합니다.\n  document\n    .querySelector("#load")\n    .addEventListener("click", async () => {\n      const output = document.querySelector("#output");\n      output.textContent = "불러오는 중…";\n      try {\n        const mode = document.querySelector("#mode").value;\n        let response;\n        if (mode === "404")\n          response = new Response("없음", { status: 404 });\n        else if (mode === "json")\n          response = new Response("JSON이 아닌 글자");\n        else\n          response = await fetch(\n            "data:application/json,%7B%22name%22%3A%22coffee%22%7D"\n          );\n        if (!response.ok)\n          throw new Error(`상태 ${response.status}`);\n        const data = await response.json();\n        output.textContent = data.name;\n      } catch (error) {\n        output.textContent = `실패: ${error.message}`;\n      }\n    });\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        [
          "세 모드",
          "정상·상태 오류·본문 형식 오류를 나눕니다. 실제 원격 API를 호출하는 예제는 아닙니다."
        ],
        ["상태 검사", "404에서는 본문을 읽기 전 오류를 던집니다."],
        ["JSON 해석", "200이어도 잘못된 본문이면 실패할 수 있습니다."]
      ],
      task: "세 모드를 실행하고 어느 단계에서 실패했는지 구분하세요.",
      checks: [
        "정상은 coffee를 표시합니다.",
        "404와 JSON 오류를 다른 이유로 설명합니다."
      ],
      quiz: [
        [
          "200이면 언제나 원하는 데이터 구조인가요?",
          "본문 형식과 업무 데이터 구조는 별도로 확인해야 합니다."
        ],
        [
          "CORS를 no-cors로 바꾸면 JSON을 읽을 수 있나요?",
          "일반적인 해결이 아닙니다. 읽을 수 없는 opaque 응답이 될 수 있습니다."
        ]
      ],
      errors: [
        [
          "Failed to fetch가 보입니다",
          "연결·서버 실행·주소·교차 출처 정책을 Network와 함께 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "js-10",
      track: "js",
      title: "브라우저 저장·모듈·실행 흐름 정리",
      lead: "현재 변수, 저장된 문자열, 다른 파일의 값을 구분합니다.",
      sections: [
        {
          title: "저장은 쓰기와 복원까지 포함합니다",
          body: "localStorage는 문자열 값을 키로 관리합니다. 배열·객체는 stringify해서 쓰고 parse해 복원합니다. 값이 없는 처음 방문, 잘못된 저장 데이터, 정책·용량으로 인한 저장 실패를 처리합니다. 비밀 정보와 인증의 일반 저장소로 무분별하게 사용하지 않습니다."
        },
        {
          title: "모듈은 역할을 나누는 파일입니다",
          body: "export·import로 필요한 값과 함수를 연결합니다. 기본 내보내기와 이름 내보내기를 구분하고 파일의 상대 경로를 읽습니다. import가 있는 브라우저 파일은 type=module 등 적절한 환경이 필요합니다."
        },
        {
          title: "역할을 나누면 수정 지점이 줄어듭니다",
          body: "저장 함수는 저장, render는 표시, 이벤트 핸들러는 입력에서 상태 변경을 연결하도록 나눕니다. 하나의 거대한 함수에 모두 넣으면 오류 위치를 좁히기 어렵습니다. Node.js 파트의 ESM 레슨에서 실제 파일 분리도 이어서 연습합니다."
        }
      ],
      definitions: [
        [
          "localStorage",
          "같은 출처에서 사용하는 브라우저 저장소입니다. 보통 새로고침이나 브라우저 재실행 후에도 남지만 삭제·정책 제한이 있을 수 있습니다."
        ],
        [
          "sessionStorage",
          "탭의 세션에 연결된 저장소입니다. localStorage와 수명이 다릅니다."
        ],
        [
          "키와 값",
          "저장소는 이름인 키와 문자열 값을 연결합니다. 배열을 저장하려면 문자열로 바꾸는 과정이 필요합니다."
        ],
        [
          "setItem / getItem / removeItem",
          "값 저장, 값 읽기, 특정 키 삭제 메서드입니다. 없는 키를 읽으면 null입니다."
        ],
        [
          "복원",
          "저장한 문자열을 읽어 JSON.parse로 값으로 바꾸고, 그 값에서 화면을 다시 만드는 과정입니다."
        ],
        [
          "출처",
          "보통 프로토콜·호스트·포트 조합으로 구분합니다. file:// 저장 동작은 브라우저별로 다를 수 있어 이 페이지에서 직접 확인해야 합니다."
        ],
        [
          "메모리와 저장소",
          "현재 실행 중인 변수와, 다음 실행에도 읽을 수 있도록 남기는 저장값은 다른 공간입니다. 한쪽만 바뀌면 재실행 뒤 결과가 달라질 수 있습니다."
        ],
        [
          "직렬화와 역직렬화",
          "구조화된 값을 저장·전송 가능한 문자열 등으로 바꾸는 과정과 다시 복원하는 과정입니다. 이 예제는 JSON.stringify와 JSON.parse를 씁니다."
        ],
        [
          "초기값 처리",
          "저장값이 없는 처음 방문에서는 어떻게 시작할지 정해야 합니다. 빈 배열이나 기본 설정을 쓰는 부분을 찾아 읽습니다."
        ],
        [
          "저장 실패",
          "브라우저 정책·용량·환경 등으로 저장이 거부될 수 있습니다. 쓰기 시도에 오류 처리가 있는지 봅니다."
        ],
        [
          "복원값 검사",
          "문자열을 JSON으로 해석했다고 원하는 배열 구조라는 보장은 없습니다. 배열인지와 필요한 값인지 추가로 확인할 수 있습니다."
        ],
        [
          "키 이름의 범위",
          "같은 저장소에서 키를 공유하므로 이 예제는 고유한 전용 키를 사용합니다. 다른 기능의 데이터를 지우지 않도록 삭제 범위를 확인합니다."
        ],
        [
          "모듈",
          "독립된 범위를 갖고 다른 파일과 필요한 값만 주고받는 코드 단위입니다."
        ],
        ["export", "다른 모듈이 사용할 값이나 함수를 이름으로 내보냅니다."],
        [
          "export default",
          "모듈의 기본 내보내기를 정합니다. 가져오는 쪽은 중괄호 없이 지역 이름을 정할 수 있습니다."
        ],
        [
          "import",
          "다른 모듈의 값을 가져오는 문법입니다. 이름 내보내기와 기본 내보내기의 형태를 구분합니다."
        ]
      ],
      example:
        '<input id="name" placeholder="내 가게 이름" />\n<button id="save">이름 저장</button>\n<button id="remove">저장 지우기</button>\n<p id="status"></p>\n<script>\n  const KEY = "vibe-academy-shop";\n  const input = document.querySelector("#name");\n  const status = document.querySelector("#status");\n  try {\n    input.value = localStorage.getItem(KEY) || "";\n  } catch {\n    status.textContent = "저장이 제한된 환경입니다.";\n  }\n  document\n    .querySelector("#save")\n    .addEventListener("click", () => {\n      try {\n        localStorage.setItem(KEY, input.value.trim());\n        status.textContent = "저장했습니다. 다시 실행해 보세요.";\n      } catch {\n        status.textContent = "저장하지 못했습니다.";\n      }\n    });\n  document\n    .querySelector("#remove")\n    .addEventListener("click", () => {\n      try {\n        localStorage.removeItem(KEY);\n        input.value = "";\n        status.textContent = "이 키만 지웠습니다.";\n      } catch {\n        status.textContent = "저장소에 접근할 수 없습니다.";\n      }\n    });\n</script>\n',
      mode: "html",
      filename: "index.html",
      trace: [
        ["복원", "초기 실행 때 저장된 문자열을 읽습니다."],
        ["저장", "지금 입력한 값을 정리해 전용 키에 씁니다."],
        ["삭제", "해당 키만 지웁니다. 모든 키를 삭제하는 clear와 구분합니다."]
      ],
      task: "이름을 저장한 뒤 실행 예제를 다시 열고 복원되는지 확인하세요.",
      checks: [
        "새 실행에서도 같은 브라우저 저장이 허용되면 이름이 남습니다.",
        "삭제는 예제 키만 지웁니다.",
        "파일 저장과 브라우저 저장을 구분합니다."
      ],
      quiz: [
        [
          "localStorage는 서버 DB인가요?",
          "아닙니다. 기기·브라우저·출처에 연결된 로컬 저장입니다."
        ],
        [
          "JSON.parse가 성공하면 무조건 배열인가요?",
          "아닙니다. 숫자·객체 등 다른 JSON 값일 수 있어 구조를 검사해야 합니다."
        ]
      ],
      errors: [
        [
          "새로고침하면 기록이 사라집니다",
          "저장 호출 여부, 키 이름, 출처와 브라우저 정책을 확인합니다."
        ]
      ],
      sources: [
        "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "node-01",
      track: "node",
      title: "Node.js·터미널·npm의 역할",
      lead: "브라우저 코드와 개발 도구·서버 코드를 구분합니다.",
      sections: [
        {
          title: "Node.js는 실행 환경입니다",
          body: "JavaScript라는 언어를 브라우저 밖에서 실행합니다. 브라우저의 document 같은 화면 API가 기본으로 있는 것은 아닙니다. 반대로 파일 시스템·HTTP 서버 등 서버 환경의 기능을 사용할 수 있습니다."
        },
        {
          title: "현재 폴더가 실행 대상을 정합니다",
          body: "터미널에서 pwd로 위치를 확인하고 해당 프로젝트 폴더에서 명령을 실행합니다. package.json의 scripts에 start가 node server.mjs로 정의되어 있으면 npm start는 그 명령을 실행합니다. npm install은 의존 패키지 준비이며 서버 시작과 별개입니다."
        },
        {
          title: "버전과 실행 오류를 기록합니다",
          body: "node --version과 npm --version으로 환경을 확인합니다. 설치는 공식 배포의 지원되는 LTS를 기준으로 하고 프로젝트 요구 조건과 맞춥니다. 이 사이트의 다운로드 프로젝트는 Node.js 22 이상을 기준으로 안내하며 외부 패키지 없이 실행할 수 있습니다."
        }
      ],
      definitions: [
        [
          "Node.js",
          "브라우저 밖에서 JavaScript를 실행하는 환경입니다. 개발 도구를 실행할 때도 사용합니다."
        ],
        [
          "npm / nvm",
          "npm은 패키지와 프로젝트 명령을 관리하고, nvm은 Node.js 버전을 설치·전환하는 도구입니다."
        ],
        [
          "개발 서버",
          "작성한 소스를 브라우저에서 확인하도록 제공하는 개발용 서버입니다. 수업에서는 Vite를 사용합니다."
        ],
        [
          "index.html / root",
          '브라우저가 읽는 문서와 React가 화면을 넣을 대상 요소입니다. 이 예제는 id="root"를 사용합니다.'
        ],
        [
          "컴포넌트",
          "화면의 한 부분을 설명하는 React 함수입니다. 보통 대문자로 시작하는 이름을 쓰고 JSX를 반환합니다."
        ],
        [
          "JSX",
          "JavaScript 안에서 화면 구조를 HTML과 비슷하게 적는 문법입니다. 브라우저 실행 전에 변환 과정이 필요합니다."
        ],
        [
          "터미널과 현재 폴더",
          "명령을 입력하는 프로그램입니다. npm 명령을 실행할 때 어느 프로젝트 폴더에 있는지가 중요합니다."
        ],
        [
          "node_modules",
          "프로젝트가 설치한 패키지들이 놓이는 폴더입니다. 보통 소스 저장소에 그대로 올리기보다 의존 정보에서 다시 설치합니다."
        ],
        [
          "scripts",
          "package.json에서 명령 이름을 정의하는 항목입니다. npm run dev는 dev라는 이름에 지정한 실제 명령을 실행합니다."
        ],
        [
          "npm install과 npm run",
          "install은 패키지 준비이고 run은 scripts의 명령 실행입니다. 설치 성공이 앱 실행이나 배포 완료를 뜻하지 않습니다."
        ]
      ],
      example:
        'console.log("Node.js 실행 확인");\nconsole.log("실행 중인 Node 버전:", process.version);\nconsole.log("현재 작업 폴더:", process.cwd());\nconsole.log("스크립트 인수:", process.argv.slice(2));\n',
      mode: "node",
      filename: "main.mjs",
      trace: [
        ["process", "현재 Node 프로세스의 환경과 정보를 다룹니다."],
        ["cwd", "명령을 실행한 작업 폴더입니다."],
        ["argv", "node와 파일 경로 뒤의 추가 인수들을 읽습니다."]
      ],
      task: "다운로드한 main.mjs를 node main.mjs cafe로 실행하고 인수 배열을 확인하세요.",
      checks: [
        "터미널에 실행 정보가 표시됩니다.",
        "document가 없는 환경이라는 점을 설명합니다."
      ],
      quiz: [
        [
          "Node.js가 React와 같은 것인가요?",
          "실행 환경과 화면 라이브러리로 역할이 다릅니다."
        ],
        [
          "npm install을 하면 화면이 자동으로 열리나요?",
          "패키지 설치와 개발 서버 실행·브라우저 열기는 별도입니다."
        ]
      ],
      errors: [
        [
          "command not found: node",
          "Node 설치와 터미널 경로 설정을 확인하고 새 터미널에서 버전을 확인합니다."
        ],
        ["package.json을 찾지 못합니다", "현재 폴더가 프로젝트 폴더인지 확인합니다."]
      ],
      sources: [
        "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "https://nodejs.org/api/http.html",
        "https://nodejs.org/api/fs.html",
        "https://nodejs.org/api/environment_variables.html"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "node-02",
      track: "node",
      title: "모듈·package.json·의존성과 실행 명령",
      lead: "다른 파일의 함수를 가져오고 프로젝트 실행 약속을 읽습니다.",
      sections: [
        {
          title: "ESM과 CommonJS를 무작정 섞지 않습니다",
          body: "이 강의의 서버 예제는 .mjs 확장자를 사용해 ESM의 import·export를 명확히 합니다. .js는 package.json의 type 등 환경 설정에 따라 다르게 해석될 수 있습니다. require와 import를 고칠 때는 프로젝트 방식을 먼저 확인합니다."
        },
        {
          title: "의존성은 재현 가능한 정보로 관리합니다",
          body: "package.json의 dependencies·devDependencies와 scripts를 읽습니다. 잠금 파일은 실제 해석된 버전을 기록하는 데 도움이 됩니다. 다른 사람이 받은 프로젝트는 안내에 맞게 설치한 뒤 실행해야 하며 node_modules를 무조건 복사하는 방식에 의존하지 않습니다."
        },
        {
          title: "명령은 프로젝트가 정의한 이름입니다",
          body: "npm run build는 언제나 같은 도구가 아닙니다. scripts의 build 값이 실제로 무엇인지 확인합니다. 빌드 성공·테스트 성공·서버 실행·배포 성공은 다른 단계입니다. 실행되는 제3자 설치 스크립트도 무조건 신뢰하지 않습니다."
        }
      ],
      definitions: [
        [
          "모듈",
          "독립된 범위를 갖고 다른 파일과 필요한 값만 주고받는 코드 단위입니다."
        ],
        ["export", "다른 모듈이 사용할 값이나 함수를 이름으로 내보냅니다."],
        [
          "export default",
          "모듈의 기본 내보내기를 정합니다. 가져오는 쪽은 중괄호 없이 지역 이름을 정할 수 있습니다."
        ],
        [
          "import",
          "다른 모듈의 값을 가져오는 문법입니다. 이름 내보내기와 기본 내보내기의 형태를 구분합니다."
        ],
        [
          "npm / package.json",
          "npm은 패키지와 프로젝트 명령을 관리하는 도구이고 package.json은 의존 패키지와 실행 명령 등의 정보를 담는 파일입니다."
        ],
        [
          "Vite와 빌드",
          "Vite는 개발 서버와 빌드 등을 돕는 도구입니다. 빌드는 소스를 배포할 형태로 처리하는 과정이며 개발 서버 실행과 구분합니다."
        ],
        ["ESM", "import·export를 사용하는 JavaScript 모듈 방식입니다."],
        ["CommonJS", "require·module.exports를 사용하는 Node 모듈 방식입니다."]
      ],
      example:
        '// pricing.mjs\nexport function total(price, qty) {\n  return price * qty;\n}\n\n// main.mjs\nimport { total } from "./pricing.mjs";\nconsole.log(total(4000, 2));',
      mode: "reference",
      filename: "pricing.mjs + main.mjs",
      trace: [
        [
          "두 파일",
          "한 파일로 합치지 않습니다. 다운로드 예제에는 pricing.mjs와 main.mjs가 나뉘어 있습니다."
        ],
        ["상대 경로", "main.mjs 위치에서 같은 폴더의 pricing.mjs를 찾습니다."],
        ["함수 호출", "가져온 total이 계산해 8000을 반환합니다."]
      ],
      task: "pricing.mjs에 포장비 매개변수를 추가하고 main.mjs에서 500을 전달하세요.",
      checks: [
        "기본 계산 8000을 확인합니다.",
        "포장비 포함 계산을 8500으로 만듭니다.",
        "내보내기·가져오기·호출 위치를 설명합니다."
      ],
      quiz: [
        [
          "import 이름을 마음대로 바꾸어도 되나요?",
          "이름 내보내기는 일치하거나 as로 별칭을 사용합니다. 기본 내보내기의 지역 이름과 구분합니다."
        ],
        [
          "node_modules를 수정해 기능을 고치면 좋을까요?",
          "재설치 시 사라질 수 있습니다. 앱 소스와 의존 패키지의 역할을 구분해 수정합니다."
        ]
      ],
      errors: [
        [
          "Cannot use import statement outside a module",
          "확장자·package.json type·실행 환경을 확인합니다."
        ]
      ],
      sources: [
        "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "https://nodejs.org/api/http.html",
        "https://nodejs.org/api/fs.html",
        "https://nodejs.org/api/environment_variables.html"
      ],
      extra: [
        {
          label: "package.json 예시",
          code: '{\n  "type": "module",\n  "scripts": { "start": "node main.mjs" }\n}',
          lang: "json"
        }
      ],
      minutes: 15
    },
    {
      id: "node-03",
      track: "node",
      title: "HTTP 서버와 요청·응답의 실제 실행",
      lead: "브라우저 요청을 받는 작은 로컬 서버를 직접 켭니다.",
      sections: [
        {
          title: "서버는 요청을 받는 프로그램입니다",
          body: "특별한 종류의 컴퓨터만 서버가 되는 것은 아닙니다. createServer에 연결한 함수는 요청이 들어올 때 실행됩니다. req는 요청, res는 응답을 다루는 객체입니다. 브라우저 화면을 만드는 document는 여기서 사용하지 않습니다."
        },
        {
          title: "호스트와 포트를 함께 읽습니다",
          body: "127.0.0.1은 내 컴퓨터를 가리키고 포트는 이 컴퓨터 안에서 어느 서버 프로그램에 연결할지 정하는 단서입니다. 아래 예제는 4177 포트에서 로컬 연결만 받습니다. 인터넷에 공개된 서비스가 아닙니다."
        },
        {
          title: "응답을 끝내야 요청이 완료됩니다",
          body: "상태 코드와 Content-Type을 지정하고 본문을 전송해 응답을 끝냅니다. 경로에 맞지 않을 때도 명확한 404를 보냅니다. 서버를 켠 터미널은 실행 중 유지하고 종료는 Ctrl+C로 합니다."
        }
      ],
      definitions: [
        ["createServer", "요청 핸들러를 연결한 HTTP 서버를 만듭니다."],
        ["req.url / req.method", "요청 경로와 메서드를 읽는 단서입니다."],
        ["res.writeHead", "응답 상태와 헤더를 정합니다."],
        ["res.end", "응답 본문을 마무리하고 전송을 끝냅니다."],
        ["listen", "호스트와 포트에서 연결을 받기 시작합니다."]
      ],
      example:
        'import { createServer } from "node:http";\n\nconst server = createServer((req, res) => {\n  if (req.method === "GET" && req.url === "/api/menu") {\n    res.writeHead(200, {\n      "Content-Type": "application/json; charset=utf-8"\n    });\n    res.end(JSON.stringify([{ id: "coffee", price: 4000 }]));\n    return;\n  }\n  res.writeHead(404, {\n    "Content-Type": "application/json; charset=utf-8"\n  });\n  res.end(JSON.stringify({ error: "없는 경로입니다." }));\n});\n\nserver.listen(4177, "127.0.0.1", () => {\n  console.log("http://127.0.0.1:4177/api/menu");\n});\n',
      mode: "node",
      filename: "server.mjs",
      trace: [
        ["서버 시작", "파일을 node로 실행하면 listen을 시작합니다."],
        ["GET 경로", "/api/menu에만 정상 JSON을 보냅니다."],
        ["나머지 요청", "응답을 끝내는 404 경로가 있습니다."]
      ],
      task: "서버를 켜고 안내 URL과 /missing을 각각 열어 응답을 비교하세요.",
      checks: [
        "정상 주소에서 메뉴 JSON을 확인합니다.",
        "다른 경로는 404입니다.",
        "터미널에서 서버를 종료할 수 있습니다."
      ],
      quiz: [
        ["브라우저에서 server.mjs를 열면 서버가 켜지나요?", "Node로 실행해야 합니다."],
        [
          "127.0.0.1은 방문자 모두에게 같은 서버인가요?",
          "각 기기의 자기 자신을 가리킵니다. 다른 사람의 컴퓨터와 다릅니다."
        ]
      ],
      errors: [
        [
          "EADDRINUSE",
          "이미 해당 포트를 사용하는 프로그램이 있는지 확인합니다. 임의 프로세스를 종료하기보다 어떤 서버인지 확인하고 포트를 바꿉니다."
        ]
      ],
      sources: [
        "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "https://nodejs.org/api/http.html",
        "https://nodejs.org/api/fs.html",
        "https://nodejs.org/api/environment_variables.html"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "node-04",
      track: "node",
      title: "API 입력 검증과 서버가 정하는 가격",
      lead: "클라이언트가 보낸 값을 그대로 신뢰하지 않는 구조를 익힙니다.",
      sections: [
        {
          title: "브라우저가 보낸 값은 바뀔 수 있습니다",
          body: "화면에서 수량을 제한해도 다른 요청을 만들 수 있습니다. 서버는 메서드·경로·본문 형식·정수 여부·허용 범위·존재하는 메뉴인지 확인해야 합니다. 가격과 총액은 서버의 메뉴 데이터로 계산합니다."
        },
        {
          title: "본문은 스트림으로 들어옵니다",
          body: "Node 기본 HTTP 요청 본문은 여러 조각으로 도착할 수 있습니다. 모두 모으되 허용 크기를 제한하고 JSON 해석 오류를 처리합니다. 이 레슨의 코드는 가격 계산 함수에 집중한 완전 실행 예제이며 실제 HTTP POST 처리는 종합 프로젝트에 포함했습니다."
        },
        {
          title: "오류는 분류해서 답합니다",
          body: "형식·범위가 잘못되면 400 계열, 예상하지 못한 내부 문제면 500 계열을 고려합니다. 내부 스택·환경 변수·비밀 값을 그대로 응답하지 않습니다. 인증과 권한이 있는 서비스는 입력 검사와 별도로 접근 제어를 구현해야 합니다."
        }
      ],
      definitions: [
        ["검증", "요청 값이 허용한 구조와 범위인지 확인하는 과정입니다."],
        ["허용 목록", "서버가 미리 정한 유효 메뉴·동작 등의 집합입니다."],
        ["신뢰 경계", "외부 입력을 내부 규칙과 데이터로 확인해야 하는 경계입니다."],
        ["서버 계산", "클라이언트 총액 대신 서버의 기준 가격으로 계산하는 방식입니다."],
        ["요청 크기 제한", "무한히 큰 본문을 받지 않도록 허용 크기를 정하는 것입니다."]
      ],
      example:
        'const prices = { coffee: 4000, bread: 3500 };\n\nfunction createOrder(input) {\n  const { menuId, qty } = input;\n  if (!Object.hasOwn(prices, menuId)) {\n    throw new Error("없는 메뉴입니다.");\n  }\n  if (!Number.isInteger(qty) || qty < 1 || qty > 20) {\n    throw new Error("수량은 1~20 정수입니다.");\n  }\n  return { menuId, qty, total: prices[menuId] * qty };\n}\n\nconsole.log(createOrder({ menuId: "coffee", qty: 2, total: 1 }));\n',
      mode: "node",
      filename: "validate.mjs",
      trace: [
        ["prices", "서버가 가진 기준 데이터입니다."],
        ["검증", "존재하는 메뉴와 정수 범위를 확인합니다."],
        ["총액", "클라이언트가 보낸 total:1은 사용하지 않고 8000을 계산합니다."]
      ],
      task: "수량 0·1·20·21과 없는 메뉴를 각각 넣어 허용 범위를 확인하세요.",
      checks: ["정상 총액은 서버 기준입니다.", "잘못된 수량과 메뉴는 오류입니다."],
      quiz: [
        [
          "프런트에서 숨긴 관리자 버튼이 권한 검사인가요?",
          "UI 표시와 서버 권한 검사는 별개입니다."
        ],
        [
          "브라우저가 보낸 price를 곱하면 안전할까요?",
          "가격은 서버가 신뢰하는 데이터에서 정해야 합니다."
        ]
      ],
      errors: [
        [
          '문자열 "2"가 거부됩니다',
          "API 약속이 숫자인지 확인합니다. 필요한 형식 변환도 명시적으로 검사하며 처리합니다."
        ]
      ],
      sources: [
        "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "https://nodejs.org/api/http.html",
        "https://nodejs.org/api/fs.html",
        "https://nodejs.org/api/environment_variables.html"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "node-05",
      track: "node",
      title: "비동기 파일 저장과 데이터의 수명",
      lead: "메모리·JSON 파일·데이터베이스를 구분하고 실패를 처리합니다.",
      sections: [
        {
          title: "프로세스 메모리는 재시작하면 사라집니다",
          body: "변수에 주문을 push한 것만으로 영구 저장되지는 않습니다. 파일이나 DB에 남기고 시작할 때 복원하는 코드가 있어야 합니다. 브라우저 localStorage는 서버 저장소와 별개입니다."
        },
        {
          title: "읽기·파싱·쓰기가 각각 실패할 수 있습니다",
          body: "fs/promises의 readFile·writeFile을 await로 처리합니다. 파일이 없는 첫 시작과, 내용이 손상된 경우를 구분해야 합니다. 읽기 오류를 모두 빈 배열로 덮으면 기존 데이터의 문제를 숨기거나 손실을 만들 수 있습니다."
        },
        {
          title: "동시 쓰기는 순서 문제를 만듭니다",
          body: "요청 두 개가 같은 파일을 읽고 각각 쓰면 한쪽 결과가 사라질 수 있습니다. 종합 프로젝트는 하나의 프로세스에서 쓰기를 직렬화하고 임시 파일을 교체하는 학습 구조를 사용합니다. 다중 서버·동시 사용·백업·검색 요구는 DB와 운영 설계를 검토할 범위입니다."
        }
      ],
      definitions: [
        ["영속성", "프로그램 재시작 뒤에도 데이터를 유지하는 성질입니다."],
        ["fs/promises", "Promise 기반 파일 시스템 API입니다."],
        ["UTF-8", "텍스트 파일의 문자 인코딩입니다."],
        [
          "원자적 교체",
          "중간 상태 노출을 줄이기 위해 준비된 파일을 교체하는 접근입니다. 환경별 보장과 실패도 검토합니다."
        ],
        ["직렬화된 쓰기", "한 번에 하나의 쓰기 작업이 순서대로 실행되게 하는 것입니다."]
      ],
      example:
        'import { readFile, writeFile } from "node:fs/promises";\n\nconst file = new URL("./practice-data.json", import.meta.url);\nconst data = { shop: "나의 카페", quantity: 2 };\nawait writeFile(file, JSON.stringify(data, null, 2), "utf8");\n\nconst text = await readFile(file, "utf8");\nconst restored = JSON.parse(text);\nconsole.log(restored.shop, restored.quantity);\n',
      mode: "node",
      filename: "files.mjs",
      trace: [
        ["파일 경로", "스크립트 파일 위치를 기준으로 연습 데이터 파일을 정합니다."],
        [
          "쓰기",
          "이 연습 파일을 새 데이터로 덮어씁니다. 실제 중요 파일 경로로 바꾸지 않습니다."
        ],
        ["읽기와 파싱", "문자열을 읽은 뒤 객체로 복원합니다."]
      ],
      task: "가게 이름을 바꾸어 실행하고 생성된 practice-data.json의 내용을 확인하세요.",
      checks: [
        "파일이 스크립트 폴더에 생깁니다.",
        "파일의 JSON과 출력된 값이 일치합니다."
      ],
      quiz: [
        [
          "await 없이 쓰기를 시작하고 바로 읽어도 되나요?",
          "완료 순서가 필요하면 await 등으로 명확히 연결해야 합니다."
        ],
        [
          "JSON 파일을 쓰면 모든 서비스의 DB를 대체할까요?",
          "동시성·검색·권한·백업·규모 요구에 따라 적절한 저장 구조를 선택해야 합니다."
        ]
      ],
      errors: [
        [
          "JSON.parse가 실패합니다",
          "잘못된 파일 내용과 잘못된 경로를 구분하고 기존 파일을 무조건 빈 값으로 덮지 않습니다."
        ]
      ],
      sources: [
        "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "https://nodejs.org/api/http.html",
        "https://nodejs.org/api/fs.html",
        "https://nodejs.org/api/environment_variables.html"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "node-06",
      track: "node",
      title: "환경 변수·비밀 키·오류 로그",
      lead: "브라우저에 공개할 설정과 서버에만 둘 비밀을 구분합니다.",
      sections: [
        {
          title: "환경 변수는 외부에서 주는 문자열 설정입니다",
          body: "process.env.PORT처럼 읽는 값은 보통 문자열이므로 숫자 범위 검사 등을 명시합니다. .env는 설정을 파일로 관리하는 한 방식이며 사용 도구·실행 옵션에 따라 읽는 방법이 다릅니다. 파일이 있다는 이유만으로 언제나 자동 적용되는 것은 아닙니다."
        },
        {
          title: "비밀은 브라우저 번들에 넣지 않습니다",
          body: "서버가 외부 API를 대신 호출하는 구조로 비밀 키를 서버에 보관합니다. 프런트용 환경 변수 접두사나 빌드 설정은 값을 브라우저에 노출할 수 있으므로 비밀 저장 방법으로 생각하면 안 됩니다. .env와 실제 비밀은 Git에 올리지 않고 .env.example에는 빈 값·예시만 둡니다."
        },
        {
          title: "로그는 원인 파악에 필요한 만큼 남깁니다",
          body: "요청 경로·상태·내부 오류 구분을 기록하되 비밀번호·토큰·개인정보를 그대로 찍지 않습니다. 키가 Git 기록에 노출되었다면 파일 삭제만으로 해결되지 않으므로 해당 키를 폐기·재발급하고 노출 범위를 확인합니다."
        }
      ],
      definitions: [
        ["환경 변수", "실행 환경에서 프로그램에 제공하는 이름·문자열 값입니다."],
        [
          ".env.example",
          "필요한 설정 이름과 사용법을 공유하는 예시 파일입니다. 실제 비밀을 넣지 않습니다."
        ],
        [
          ".gitignore",
          "아직 추적하지 않는 파일 중 Git 관리에서 제외할 패턴을 정합니다."
        ],
        ["로그", "실행 중 상태·사건·오류를 확인하기 위한 기록입니다."],
        [
          "키 회전",
          "노출되었거나 교체가 필요한 비밀 키를 폐기하고 새 키로 바꾸는 과정입니다."
        ]
      ],
      example:
        'const rawPort = process.env.PORT ?? "4177";\nconst port = Number(rawPort);\nif (!Number.isInteger(port) || port < 1 || port > 65535) {\n  throw new Error("PORT는 1~65535 정수여야 합니다.");\n}\n\nconsole.log("사용 포트:", port);\nconsole.log("API 키 설정 여부:", Boolean(process.env.API_KEY));\n',
      mode: "node",
      filename: "config.mjs",
      trace: [
        ["기본값", "PORT가 없을 때만 4177을 사용합니다."],
        ["검사", "문자열을 숫자로 변환한 뒤 정수와 범위를 검사합니다."],
        ["키 로그", "설정 여부만 출력하고 실제 값을 표시하지 않습니다."]
      ],
      task: "PORT=4200으로 실행한 뒤 PORT=wrong일 때 어떤 오류가 나오는지 비교하세요.",
      checks: [
        "포트 문자열의 변환과 검사를 구분합니다.",
        "실제 비밀 값은 코드·화면·로그에 넣지 않습니다."
      ],
      quiz: [
        [
          "환경 변수이면 모두 비밀인가요?",
          "일반 공개 설정도 있고 비밀도 있습니다. 어디에 주입되고 노출되는지 판단해야 합니다."
        ],
        [
          ".gitignore에 넣으면 이미 커밋한 비밀도 지워지나요?",
          "기존 추적·커밋 기록은 자동으로 사라지지 않습니다. 키 폐기 등 별도 대응이 필요합니다."
        ]
      ],
      errors: [
        [
          "설정 파일을 바꿔도 동작이 그대로입니다",
          "로딩 방식·현재 실행 폴더·프로세스 재시작·변수 이름을 확인합니다."
        ]
      ],
      sources: [
        "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "https://nodejs.org/api/http.html",
        "https://nodejs.org/api/fs.html",
        "https://nodejs.org/api/environment_variables.html"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "node-07",
      track: "node",
      title: "브라우저와 로컬 API를 연결한 주문 앱",
      lead: "같은 출처에서 화면·서버·저장이 연결되는 전체 경로를 확인합니다.",
      sections: [
        {
          title: "같은 서버가 화면과 API를 제공합니다",
          body: "종합 프로젝트는 Node가 public의 정적 화면과 /api/menu·/api/orders를 제공합니다. 같은 출처 요청이므로 별도 교차 출처 설정 없이 기본 흐름을 이해할 수 있습니다. 이 학습 사이트 자체의 호스팅에 Node 서버가 포함되어 있는 것은 아닙니다."
        },
        {
          title: "시스템의 책임을 나눕니다",
          body: "브라우저는 입력과 표시, 서버는 메뉴 기준 가격·수량 검사·총액 계산·저장을 맡습니다. POST 성공 뒤 서버가 반환한 주문을 화면에 표시하고 GET으로 다시 조회해 저장이 이어지는지 확인합니다."
        },
        {
          title: "운영 서비스와 학습 프로젝트를 구분합니다",
          body: "다운로드 프로젝트는 로컬 단일 프로세스 학습용입니다. 실제 고객 서비스에는 인증·권한·개인정보·백업·요청 제한·모니터링·결제 검증 등 추가 설계가 필요합니다. GitHub Pages는 정적 파일을 제공하며 이 Node 프로세스를 실행하지 않습니다."
        }
      ],
      definitions: [
        ["GET /api/menu", "서버 기준 메뉴 목록을 읽는 주소입니다."],
        ["POST /api/orders", "검사한 입력으로 주문을 만드는 주소입니다."],
        ["GET /api/orders", "저장한 주문을 다시 읽는 주소입니다."],
        ["같은 출처", "브라우저 관점에서 프로토콜·호스트·포트가 같은 경우입니다."],
        [
          "배포 환경",
          "실제 프로세스를 실행하고 파일·비밀·네트워크를 제공하는 환경입니다."
        ]
      ],
      example:
        "# downloads/cafe-lab 압축을 푼 폴더에서 실행\nnode server.mjs\n\n# 브라우저에서 열 주소\nhttp://127.0.0.1:4177\n\n# 서버 실행을 끝내려면 터미널에서\nCtrl+C",
      mode: "reference",
      filename: "실행 절차",
      trace: [
        [
          "서버 실행",
          "Node.js 22 이상이 설치된 환경에서 프로젝트 폴더의 파일을 실행합니다."
        ],
        ["브라우저 접속", "파일 더블클릭이 아니라 안내된 HTTP 주소를 엽니다."],
        ["검증", "주문 후 새로고침·서버 재시작 뒤 목록을 다시 확인합니다."]
      ],
      task: "종합 프로젝트를 실행하고 커피 2개 주문의 총액이 8000원인지 확인하세요.",
      checks: [
        "정상 주문을 다시 조회할 수 있습니다.",
        "없는 메뉴·잘못된 수량을 API가 거부합니다.",
        "브라우저와 서버 중 고칠 부분을 설명할 수 있습니다."
      ],
      quiz: [
        [
          "이 학습 사이트의 Pages 주소에서 API도 자동 실행되나요?",
          "아닙니다. 다운로드한 Node 서버를 로컬 또는 별도 서버 환경에서 실행합니다."
        ],
        [
          "브라우저의 총액만 바꾸면 주문 가격도 바뀌어야 하나요?",
          "서버가 기준 가격으로 계산하므로 프런트 표시 조작을 신뢰하지 않습니다."
        ]
      ],
      errors: [
        [
          "사이트는 뜨는데 API가 404입니다",
          "정적 호스팅에 Node API가 없는지, 서버 실행 주소와 요청 경로가 맞는지 확인합니다."
        ]
      ],
      sources: [
        "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
        "https://nodejs.org/api/http.html",
        "https://nodejs.org/api/fs.html",
        "https://nodejs.org/api/environment_variables.html"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "react-01",
      track: "react",
      title: "컴포넌트·JSX·props로 화면 읽기",
      lead: "부모가 준 입력이 자식 화면의 어디에 쓰이는지 연결합니다.",
      sections: [
        {
          title: "컴포넌트는 화면을 설명하는 함수입니다",
          body: "대문자로 시작하는 컴포넌트가 JSX를 반환합니다. 부모가 <MenuCard />를 사용하면 그 관계에서 자식 컴포넌트가 됩니다. 같은 파일에 있다는 사실만으로 부모·자식이 정해지는 것은 아닙니다."
        },
        {
          title: "props는 읽기 전용 입력입니다",
          body: 'function MenuCard({ name, price })는 props 객체에서 속성을 꺼내 받는 구조분해입니다. 숫자는 price={4000}, 문자열은 name="커피"처럼 전달합니다. props 객체를 자식에서 직접 수정하는 방식으로 화면을 관리하지 않습니다.'
        },
        {
          title: "JSX의 규칙과 실행 환경을 구분합니다",
          body: "className·htmlFor·닫는 태그·하나로 감싼 반환을 확인합니다. JSX는 변환이 필요합니다. 이 사이트 실습은 로컬 React와 브라우저 변환 도구를 제공하고, 실제 Vite 프로젝트의 import·파일 분리는 마지막 레슨에서 다룹니다."
        }
      ],
      definitions: [
        [
          "컴포넌트 재사용",
          "같은 화면 구조를 가진 함수를 여러 곳에서 호출해 사용합니다. 데이터가 다르면 보여 주는 내용도 달라집니다."
        ],
        ["props", "부모가 자식 컴포넌트에 전달하는 읽기 전용 입력값입니다."],
        [
          "구조분해",
          "{ name, price }처럼 객체의 속성을 이름별 변수로 꺼내 받는 문법입니다."
        ],
        [
          "JSX의 중괄호",
          "문자열 속성은 따옴표로, 숫자·변수·표현식은 { }로 넣어 읽습니다."
        ],
        [
          "기본값",
          'desc = "오늘의 메뉴"는 desc가 생략되거나 undefined일 때 쓸 값입니다. null에는 적용되지 않습니다.'
        ],
        [
          "className",
          "JSX에서 HTML의 class에 해당하는 속성 이름입니다. label의 for는 htmlFor로 씁니다."
        ],
        [
          "부모 컴포넌트와 자식 컴포넌트",
          "App이 <MenuCard />를 쓰면 이 관계에서 App은 부모, MenuCard는 자식입니다. 단순히 같은 파일에 있다고 부모·자식이 되는 것은 아닙니다."
        ],
        [
          "매개변수 구조분해",
          "function MenuCard({ name, price })는 props 객체에서 두 속성을 꺼내 이름으로 받는 형태입니다. 함수에 위치 인수를 여러 개 받는 구조가 아닙니다."
        ],
        [
          "JSX 표현식",
          "{price}처럼 중괄호 안에 JavaScript 표현식을 넣습니다. 객체 자체를 일반 글자처럼 바로 렌더할 수 있는지는 별도로 확인합니다."
        ],
        [
          "Fragment",
          "<>...</>로 여러 JSX 요소를 묶되 별도 DOM 요소를 추가하지 않는 표현입니다."
        ],
        [
          "단일 반환 구조",
          "나란한 JSX 요소들은 하나의 부모나 Fragment로 감싸 반환합니다. 태그를 여닫는 짝도 맞춰야 합니다."
        ],
        [
          "닫힘과 속성 이름",
          "JSX에서는 input·img도 <input />처럼 닫고 className·htmlFor처럼 HTML과 다른 속성 이름을 확인합니다."
        ]
      ],
      example:
        'function MenuCard({ name, price, desc = "오늘의 메뉴" }) {\n  return (\n    <article>\n      <h2>{name}</h2>\n      <p>{price}원</p>\n      <p>{desc}</p>\n    </article>\n  );\n}\nfunction App() {\n  return (\n    <main>\n      <h1>메뉴</h1>\n      <MenuCard name="커피" price={4000} desc="고소한 커피" />\n      <MenuCard name="빵" price={3500} />\n    </main>\n  );\n}\n',
      mode: "jsx",
      filename: "App.jsx",
      trace: [
        ["부모 App", "두 번 사용하면서 서로 다른 props를 줍니다."],
        ["자식 MenuCard", "입력값을 제목·가격·설명에 넣습니다."],
        ["기본값", "빵은 desc를 생략하여 기본 설명을 씁니다."]
      ],
      task: "커피 가격만 4200으로 바꾸고 빵에 별도 설명을 추가하세요.",
      checks: [
        "한 카드의 데이터만 바뀝니다.",
        "모든 카드 구조는 MenuCard 한 곳에서 바뀝니다."
      ],
      quiz: [
        [
          "props 기본값이 null에도 적용되나요?",
          "생략 또는 undefined에 적용됩니다. null과는 다릅니다."
        ],
        [
          "소문자 menuCard로 쓰면요?",
          "React는 대문자 컴포넌트와 소문자 기본 태그를 구분합니다."
        ]
      ],
      errors: [
        [
          "Objects are not valid as a React child",
          "객체 자체를 출력했는지 확인하고 필요한 속성을 렌더합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "react-02",
      track: "react",
      title: "state·set 함수·렌더의 스냅샷",
      lead: "일반 변수 변경과 React 상태 갱신이 왜 다른지 확인합니다.",
      sections: [
        {
          title: "state는 기억과 갱신 요청을 연결합니다",
          body: "일반 지역 변수는 렌더 사이의 상태 기억과 다시 렌더 요청을 제공하지 않습니다. useState는 현재 렌더에서 읽는 값과 변경을 요청할 set 함수를 줍니다. Hook은 컴포넌트 또는 사용자 정의 Hook의 최상위 호출 규칙을 지킵니다."
        },
        {
          title: "현재 렌더의 값은 스냅샷입니다",
          body: "같은 이벤트에서 setCount(count+1)을 두 번 호출하면 같은 count를 기준으로 같은 다음 값을 요청합니다. 업데이트 함수 setCount(c=>c+1)는 큐에 연결되어 앞의 결과로 계산할 수 있습니다. set 뒤에 바로 읽은 count가 새 값이라고 가정하지 않습니다."
        },
        {
          title: "렌더는 페이지 전체 새로고침이 아닙니다",
          body: "React가 컴포넌트 결과를 계산하고 필요한 DOM 변경을 반영합니다. 같은 컴포넌트를 여러 위치에서 쓰면 각각 별도 state를 가질 수 있으며, 컴포넌트의 위치·정체성과 key가 상태 유지에 관련됩니다."
        }
      ],
      definitions: [
        [
          "state",
          "컴포넌트가 렌더 사이에 기억하는 값입니다. 이 예제의 count는 App에 있습니다."
        ],
        [
          "set 함수와 렌더",
          "setCount로 다음 값을 요청하면 React가 컴포넌트 결과를 다시 계산하고 필요한 화면 변경을 반영합니다."
        ],
        [
          "업데이트 함수",
          "setCount(c => c + 1)처럼 이전 값으로 다음 값을 계산하는 함수입니다. 같은 이벤트에서 여러 갱신을 연결할 때 중요합니다."
        ],
        [
          "스냅샷과 불변성",
          "한 렌더에서 읽는 state는 그 렌더의 값입니다. 객체 state를 바꿀 때는 직접 고치지 않고 새 객체를 만들어 전달합니다."
        ],
        [
          "Hook",
          "useState·useEffect처럼 React의 기능에 연결하는 함수입니다. 일반적인 사용에서는 컴포넌트나 사용자 정의 Hook의 최상위에서 호출하고 조건·반복 안에 넣지 않습니다."
        ],
        [
          "배열 구조분해",
          "const [count, setCount] = useState(0)은 반환된 배열의 첫 값과 두 번째 함수를 각각 이름으로 받는 문법입니다. 대괄호는 한 쌍의 이름을 받는 데 쓰였습니다."
        ],
        [
          "렌더와 커밋",
          "렌더는 컴포넌트 결과를 계산하는 단계, 커밋은 결과의 필요한 변경을 DOM에 반영하는 단계로 나누어 생각할 수 있습니다."
        ],
        [
          "스냅샷",
          "한 번의 렌더가 읽는 state 값입니다. set 함수를 호출해도 이미 실행 중인 핸들러 안의 변수가 즉시 새 값으로 바뀌지는 않습니다."
        ],
        [
          "단방향 데이터 흐름",
          "값과 함수가 props로 부모에서 자식으로 전달됩니다. 자식은 받은 함수를 불러 부모의 상태 변경을 요청하는 경로를 이용합니다."
        ]
      ],
      example:
        'const { useState } = React;\nfunction App() {\n  const [count, setCount] = useState(0);\n  function snapshotAdd() {\n    setCount(count + 1);\n    setCount(count + 1);\n    console.log("이번 렌더의 count:", count);\n  }\n  function updateAdd() {\n    setCount((c) => c + 1);\n    setCount((c) => c + 1);\n  }\n  return (\n    <main>\n      <h1>점수 {count}</h1>\n      <button onClick={snapshotAdd}>스냅샷 두 번</button>\n      <button onClick={updateAdd}>업데이트 두 번</button>\n      <button onClick={() => setCount(0)}>초기화</button>\n    </main>\n  );\n}\n',
      mode: "jsx",
      filename: "App.jsx",
      trace: [
        ["처음 값", "count는 0으로 시작합니다."],
        ["스냅샷 버튼", "한 번의 클릭에서 같은 다음 값을 두 번 요청합니다."],
        ["업데이트 버튼", "이전 결과를 이어받아 총 2 증가합니다."]
      ],
      task: "초기화한 뒤 각 버튼을 한 번씩 누르고 화면과 콘솔 값을 기록하세요.",
      checks: [
        "첫 버튼은 1 증가합니다.",
        "두 번째 버튼은 2 증가합니다.",
        "콘솔의 이전 값이 오류가 아님을 설명합니다."
      ],
      quiz: [
        ["set 뒤 count를 읽으면 즉시 새 값인가요?", "같은 렌더의 스냅샷을 읽습니다."],
        [
          "컴포넌트 밖에서 useState를 호출해도 되나요?",
          "Hook 호출 규칙에 맞는 컴포넌트나 사용자 정의 Hook 안에서 사용합니다."
        ]
      ],
      errors: [
        [
          "Too many re-renders",
          "렌더 중 set 함수를 즉시 호출하거나 onClick={fn()}로 잘못 연결했는지 확인합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "react-03",
      track: "react",
      title: "이벤트와 객체·배열 state의 불변성",
      lead: "받은 함수를 연결하고 새 값으로 상태를 갱신합니다.",
      sections: [
        {
          title: "함수 자체를 이벤트에 전달합니다",
          body: "onClick={handleClick}은 나중에 호출할 함수를 전달하고 onClick={handleClick()}은 렌더 중 호출합니다. 인수가 필요하면 () => handleClick(id)처럼 함수를 감쌉니다. 핸들러 이름은 약속일 뿐 자동 연결 기능은 아닙니다."
        },
        {
          title: "객체를 직접 고치지 않습니다",
          body: "member.cheers += 1 후 같은 객체를 setMember에 넘기면 기대한 갱신이 생기지 않거나 다른 렌더와 데이터가 꼬일 수 있습니다. 기존 속성을 펼친 새 객체로 변경할 속성을 덮어씁니다. 중첩 객체는 바뀌는 경로를 단계별로 새로 만듭니다."
        },
        {
          title: "배열도 새 배열로 바꿉니다",
          body: "추가는 [...items,newItem], 삭제는 filter, 특정 항목 변경은 map과 새 객체를 조합합니다. sort·reverse 등 원본을 바꾸는 메서드를 state에 직접 적용하는지 확인합니다. 새 배열만 만들어도 내부 객체 변경이 자동으로 분리되는 것은 아닙니다."
        }
      ],
      definitions: [
        ["불변성", "이전 상태를 직접 고치지 않고 새 값을 만들어 갱신하는 원칙입니다."],
        ["전개 구문", "...member처럼 속성이나 항목을 펼치는 문법입니다."],
        ["업데이트 함수", "이전 상태를 받아 새 상태를 반환하는 set 함수의 인수입니다."],
        ["핸들러", "이벤트에 연결한 함수입니다."],
        ["참조", "여러 이름이 같은 객체를 가리킬 수 있는 관계입니다."]
      ],
      example:
        'const { useState } = React;\nfunction App() {\n  const [member, setMember] = useState({\n    name: "하늘",\n    cheers: 0\n  });\n  function cheer() {\n    setMember((previous) => ({\n      ...previous,\n      cheers: previous.cheers + 1\n    }));\n  }\n  return (\n    <main>\n      <h1>{member.name} 응원</h1>\n      <p>{member.cheers}번</p>\n      <button onClick={cheer}>응원하기</button>\n    </main>\n  );\n}\n',
      mode: "jsx",
      filename: "App.jsx",
      trace: [
        ["previous", "이전 객체 상태를 받습니다."],
        ["새 객체", "기존 이름 등을 유지하고 cheers만 새 값으로 만듭니다."],
        ["이벤트", "cheer를 클릭 때 호출하도록 전달합니다."]
      ],
      task: "응원 수를 한 번에 2 올리되 이름이 사라지지 않게 수정하세요.",
      checks: ["이름이 유지됩니다.", "클릭마다 2가 늘어납니다."],
      quiz: [
        [
          "...previous 뒤에 cheers를 쓰는 이유는요?",
          "뒤에 쓴 같은 이름의 속성이 앞에서 펼친 값을 덮어씁니다."
        ],
        [
          "setMember({cheers:1})이면 나머지 속성이 합쳐지나요?",
          "useState의 객체 값은 자동 병합이 아닙니다. 필요한 속성을 명시적으로 유지합니다."
        ]
      ],
      errors: [
        [
          "응원 후 이름이 사라집니다",
          "새 객체를 만들 때 기존 속성을 누락했는지 확인합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "react-04",
      track: "react",
      title: "리스트·key·입력 폼과 조건부 표시",
      lead: "목록의 정체성과 입력 상태를 안정적으로 연결합니다.",
      sections: [
        {
          title: "목록은 데이터에서 그립니다",
          body: "map으로 항목마다 JSX를 만들고 안정적인 id를 key로 사용합니다. key는 형제들 사이에서 항목 정체성을 구분하는 데 쓰며 일반 props로 자동 전달되지 않습니다. 순서가 바뀌거나 삭제되는 목록에 인덱스 key를 쓸 때는 상태 혼동을 주의합니다."
        },
        {
          title: "입력은 state와 양방향 연결처럼 읽습니다",
          body: "value로 현재 state를 보여 주고 onChange에서 새 입력을 set합니다. “화면 입력이 state를 바꾸고 새 state가 입력값을 결정한다”는 두 경로를 나눠 보면 제어 입력을 이해하기 쉽습니다. 초기값을 undefined 대신 문자열로 정하는 등 제어 여부를 일관되게 유지합니다."
        },
        {
          title: "빈 목록도 화면 상태입니다",
          body: "조건부 렌더링으로 로딩·빈 값·실패·성공을 구분합니다. 항목 수 같은 파생값은 배열에서 계산합니다. 숫자 0을 && 왼쪽에 그대로 쓰면 0이 화면에 표시될 수 있어 의도를 확인합니다."
        }
      ],
      definitions: [
        ["key", "형제 목록 안에서 안정적인 항목 정체성을 나타내는 값입니다."],
        ["제어 입력", "value 등을 state로 결정하고 변경 이벤트로 갱신하는 입력입니다."],
        ["조건부 렌더링", "조건에 따라 서로 다른 JSX를 반환하는 방식입니다."],
        ["trim", "문자열 앞뒤 공백을 제거한 새 문자열을 돌려줍니다."]
      ],
      example:
        'const { useState } = React;\nfunction App() {\n  const [name, setName] = useState("");\n  const [items, setItems] = useState([]);\n  function add(event) {\n    event.preventDefault();\n    if (!name.trim()) return;\n    setItems((previous) => [\n      ...previous,\n      { id: crypto.randomUUID(), name: name.trim() }\n    ]);\n    setName("");\n  }\n  return (\n    <main>\n      <h1>준비물 {items.length}개</h1>\n      <form onSubmit={add}>\n        <label>\n          이름{" "}\n          <input\n            value={name}\n            onChange={(event) => setName(event.target.value)}\n          />\n        </label>\n        <button>추가</button>\n      </form>\n      {items.length === 0 ? (\n        <p>아직 비었습니다.</p>\n      ) : (\n        <ul>\n          {items.map((item) => (\n            <li key={item.id}>{item.name}</li>\n          ))}\n        </ul>\n      )}\n    </main>\n  );\n}\n',
      mode: "jsx",
      filename: "App.jsx",
      trace: [
        ["입력", "문자열 state를 value와 onChange로 연결합니다."],
        ["추가", "새 id와 이름을 가진 항목을 새 배열에 넣습니다."],
        ["목록", "길이에서 개수를 계산하고 stable id로 key를 정합니다."]
      ],
      task: "준비물을 두 개 추가하고 입력 후 Enter 제출·빈 입력도 확인하세요.",
      checks: [
        "정상 이름만 추가됩니다.",
        "개수는 배열 길이와 같습니다.",
        "빈 목록 안내가 사라집니다."
      ],
      quiz: [
        [
          "key를 렌더할 때마다 random으로 만들면요?",
          "항목 정체성이 매번 달라져 상태와 DOM 재사용이 불안정해질 수 있습니다. 항목 생성 시 안정적인 id를 둡니다."
        ],
        [
          "입력 value만 지정하면 타이핑이 되나요?",
          "입력을 갱신하는 onChange 등 제어 경로가 필요합니다."
        ]
      ],
      errors: [
        [
          "각 자식에 key가 필요하다는 경고",
          "map이 반환하는 형제 JSX 최상위에 안정적인 key를 지정합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "react-05",
      track: "react",
      title: "Effect·의존성·정리와 파생값",
      lead: "렌더 계산과 외부 시스템 동기화를 구분합니다.",
      sections: [
        {
          title: "Effect가 필요한 일을 먼저 구분합니다",
          body: "사용자 클릭에서 할 일은 이벤트에서, JSX를 위해 계산 가능한 값은 렌더에서 계산합니다. document.title·타이머·외부 구독처럼 React 밖과 맞추는 일에 Effect가 필요할 수 있습니다. 모든 state 변경을 다른 state로 복사하는 Effect는 불일치를 만들기 쉽습니다."
        },
        {
          title: "의존성은 실행 횟수 요령이 아닙니다",
          body: "Effect가 읽는 반응형 값에 맞춰 의존성을 선언합니다. []는 마운트 때 실행하는 구조이며 제거 후 다시 마운트하면 다시 실행할 수 있습니다. 의존성을 빼서 오래된 값을 유지하는 방식으로 경고를 숨기지 않습니다."
        },
        {
          title: "시작한 자원을 정리합니다",
          body: "Effect가 반환한 정리 함수는 관련 재실행 전과 제거 때 자원을 해제합니다. 개발 StrictMode는 추가 setup·cleanup 점검을 할 수 있으므로 중복 실행을 없애려고 무조건 제거하기보다 정리가 올바른지 확인합니다. 이 사이트 실습은 StrictMode로 감싸지 않았습니다."
        }
      ],
      definitions: [
        [
          "Effect와 의존성 배열",
          "useEffect는 렌더가 반영된 뒤 외부와 맞추는 일을 합니다. [count]는 처음과 count가 달라진 커밋 뒤 동기화하게 합니다."
        ],
        [
          "정리 함수",
          "Effect가 시작한 타이머·구독 등을 해제하기 위해 반환하는 함수입니다. 관련 Effect 재실행 전과 제거 때 실행합니다. 이 제목 변경 예제에는 타이머가 없습니다."
        ],
        [
          "단방향 데이터 흐름",
          "값과 함수가 props로 부모에서 자식으로 전달됩니다. 자식은 받은 함수를 불러 부모의 상태 변경을 요청하는 경로를 이용합니다."
        ],
        [
          "의존성",
          "Effect가 사용하는 반응형 값입니다. [count] 같은 배열은 어떤 값 변화에서 동기화를 다시 해야 하는지 나타냅니다."
        ],
        [
          "파생값",
          "기존 state나 props로 계산할 수 있는 값입니다. const isPopular = count >= 3처럼 계산하면 별도 state를 함께 갱신할 필요가 줄어듭니다."
        ],
        [
          "객체 state와 새 객체",
          "setMember(prev => ({ ...prev, cheers: prev.cheers + 1 }))처럼 기존 속성을 옮긴 새 객체로 갱신합니다. ...는 깊은 복사 전체를 자동으로 해 주는 것은 아닙니다."
        ]
      ],
      example:
        'const { useState, useEffect } = React;\nfunction App() {\n  const [seconds, setSeconds] = useState(0);\n  const popular = seconds >= 3;\n  useEffect(() => {\n    const timer = setInterval(\n      () => setSeconds((s) => s + 1),\n      1000\n    );\n    return () => clearInterval(timer);\n  }, []);\n  useEffect(() => {\n    document.title = `학습 ${seconds}초`;\n  }, [seconds]);\n  return (\n    <main>\n      <h1>{seconds}초</h1>\n      <p>\n        {popular ? "3초가 지났습니다." : "조금만 기다려 보세요."}\n      </p>\n    </main>\n  );\n}\n',
      mode: "jsx",
      filename: "App.jsx",
      trace: [
        ["popular", "seconds로 계산 가능한 값이므로 state를 추가하지 않습니다."],
        ["타이머 Effect", "시작한 interval을 정리 함수로 해제합니다."],
        ["제목 Effect", "seconds가 달라지면 문서 제목을 맞춥니다."]
      ],
      task: "기준을 3초에서 5초로 바꾸고 탭 제목과 표시 문구가 일관되는지 확인하세요.",
      checks: [
        "초가 1씩 증가합니다.",
        "기준 전후 안내가 바뀝니다.",
        "실행을 다시 시작해 타이머가 중복되지 않습니다."
      ],
      quiz: [
        [
          "모든 계산에 Effect를 써야 하나요?",
          "렌더에서 계산할 수 있는 값은 직접 계산하는 편이 단순합니다."
        ],
        [
          "[]는 앱의 모든 수명 동안 단 한 번인가요?",
          "마운트와 재마운트, 개발 점검을 구분해야 합니다."
        ]
      ],
      errors: [
        [
          "Effect가 계속 반복됩니다",
          "의존성 변경과 Effect 안에서 다시 바꾸는 state, 매번 새로 만드는 객체·함수를 확인합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "react-06",
      track: "react",
      title: "API 화면의 로딩·오류·빈 값·성공",
      lead: "요청 취소와 오래된 응답을 고려해 화면 상태를 나눕니다.",
      sections: [
        {
          title: "데이터가 없다는 것에도 여러 이유가 있습니다",
          body: "아직 요청 전, 로딩 중, 실패, 성공했지만 빈 목록은 서로 다른 상태입니다. data만 null로 두고 모두 같은 화면으로 처리하면 사용자는 원인을 알기 어렵습니다. 화면이 보여 줄 상태를 먼저 적습니다."
        },
        {
          title: "Effect 안의 비동기 작업을 분리합니다",
          body: "Effect 콜백 자체를 async로 만들어 Promise를 반환하지 않습니다. 안에서 async 함수를 만들고 호출하며 정리 함수를 반환합니다. 요청 주소나 검색 조건이 바뀌면 이전 결과가 새 결과를 덮지 않도록 취소·무시 처리를 합니다."
        },
        {
          title: "요청 흐름은 일반 fetch와 같습니다",
          body: "상태 검사·JSON 읽기·데이터 구조 확인은 React에서도 필요합니다. 개발 앱에서 여러 기능이 같은 서버 상태를 공유하면 별도 데이터 로딩 계층이나 캐시 도구를 검토할 수 있지만, 먼저 기본 흐름을 이해합니다. 이 실습은 데이터 URL을 사용하는 오프라인 예제입니다."
        }
      ],
      definitions: [
        ["loading / error / success", "화면의 요청 상태를 구분하는 이름입니다."],
        ["AbortController", "진행 중인 fetch 등에 취소 신호를 전달하는 도구입니다."],
        [
          "cleanup",
          "요청이 더 이상 필요하지 않을 때 취소·결과 무시를 연결하는 정리입니다."
        ],
        [
          "데이터 구조 검사",
          "응답의 본문이 코드가 기대한 배열·객체인지 확인하는 과정입니다."
        ]
      ],
      example:
        'const { useState, useEffect } = React;\nfunction App() {\n  const [mode, setMode] = useState("ok");\n  const [state, setState] = useState({\n    status: "loading",\n    items: [],\n    error: ""\n  });\n  useEffect(() => {\n    const controller = new AbortController();\n    async function load() {\n      setState({ status: "loading", items: [], error: "" });\n      try {\n        const text =\n          mode === "empty"\n            ? "[]"\n            : mode === "bad"\n              ? "bad-json"\n              : JSON.stringify([{ id: 1, name: "커피" }]);\n        const response = await fetch(\n          `data:application/json,${encodeURIComponent(text)}`,\n          { signal: controller.signal }\n        );\n        if (!response.ok)\n          throw new Error(`상태 ${response.status}`);\n        const items = await response.json();\n        if (!Array.isArray(items))\n          throw new Error("목록 형식이 아닙니다.");\n        if (!controller.signal.aborted)\n          setState({ status: "success", items, error: "" });\n      } catch (error) {\n        if (!controller.signal.aborted)\n          setState({\n            status: "error",\n            items: [],\n            error: error.message\n          });\n      }\n    }\n    load();\n    return () => controller.abort();\n  }, [mode]);\n  return (\n    <main>\n      <h1>서버 메뉴 화면</h1>\n      <select\n        value={mode}\n        onChange={(event) => setMode(event.target.value)}\n      >\n        <option value="ok">정상</option>\n        <option value="empty">빈 목록</option>\n        <option value="bad">오류</option>\n      </select>\n      {state.status === "loading" && <p>불러오는 중…</p>}\n      {state.status === "error" && (\n        <p role="alert">실패: {state.error}</p>\n      )}\n      {state.status === "success" &&\n        (state.items.length ? (\n          <ul>\n            {state.items.map((item) => (\n              <li key={item.id}>{item.name}</li>\n            ))}\n          </ul>\n        ) : (\n          <p>등록된 메뉴가 없습니다.</p>\n        ))}\n    </main>\n  );\n}\n',
      mode: "jsx",
      filename: "App.jsx",
      trace: [
        ["mode", "요청 내용이 달라지는 의존성입니다."],
        ["상태 객체", "로딩·성공·실패를 구분합니다."],
        [
          "정리",
          "요청 조건 변경·제거 때 이전 요청을 취소하고 취소된 결과는 반영하지 않습니다."
        ]
      ],
      task: "정상·빈 목록·오류를 전환하고 각각의 화면 문구를 바꿔 보세요.",
      checks: [
        "세 상태를 다르게 설명할 수 있습니다.",
        "오류가 콘솔에만 숨지 않고 화면에도 보입니다."
      ],
      quiz: [
        [
          "Effect에 async를 직접 붙여도 되나요?",
          "Effect는 정리 함수 등을 반환해야 하므로 안에 비동기 함수를 만들어 호출하는 방식으로 구분합니다."
        ],
        [
          "오류와 빈 목록은 같은 상태인가요?",
          "성공했지만 데이터가 없는 것과 실패는 다른 상태입니다."
        ]
      ],
      errors: [
        [
          "이전 검색 결과가 새 결과를 덮습니다",
          "요청 취소나 결과 무시·요청 id 등으로 오래된 응답을 제어합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "react-07",
      track: "react",
      title: "상태의 주인과 장바구니 총액",
      lead: "함께 쓰는 값은 공통 부모에 두고 파생값은 계산합니다.",
      sections: [
        {
          title: "같이 쓰는 값의 주인을 찾습니다",
          body: "Header와 카드 목록이 같은 수량을 사용하면 가까운 공통 부모가 그 값을 기억하게 합니다. 자식이 props를 직접 고치거나 각자 별도 총합을 기억하면 값이 어긋날 수 있습니다. 부모는 데이터와 변경 콜백을 내려줍니다."
        },
        {
          title: "최소한의 상태를 저장합니다",
          body: "수량 배열로 총개수·총액을 계산할 수 있다면 그 총합을 따로 state로 복제할 필요가 없습니다. 서버 주문 결과는 별개의 확정 데이터이고, 브라우저에서 미리 계산한 예상 금액과 구분합니다."
        },
        {
          title: "기능이 커지면 변경 규칙을 모읍니다",
          body: "갱신 로직이 여러 이벤트에 흩어지면 공통 함수나 reducer로 정리할 수 있습니다. 모든 state를 전역으로 올리기보다 필요한 범위를 먼저 봅니다. 서버 데이터와 화면의 일시 입력도 수명과 책임이 다릅니다."
        }
      ],
      definitions: [
        [
          "상태 끌어올리기",
          "여러 컴포넌트가 함께 쓰는 값을 공통 부모로 옮기는 설계입니다."
        ],
        [
          "단일 진실 공급원",
          "같은 의미의 기준 데이터를 한 곳에서 관리해 불일치를 줄이는 원칙입니다."
        ],
        ["파생 총액", "상품 가격·수량으로 렌더 때 계산한 값입니다."],
        ["콜백 props", "자식이 부모에게 동작을 알리도록 전달한 함수입니다."]
      ],
      example:
        'const { useState } = React;\nfunction CartItem({ item, onAdd }) {\n  return (\n    <p>\n      {item.name}: {item.qty}개{" "}\n      <button onClick={() => onAdd(item.id)}>+1</button>\n    </p>\n  );\n}\nfunction App() {\n  const [items, setItems] = useState([\n    { id: "coffee", name: "커피", price: 4000, qty: 0 },\n    { id: "bread", name: "빵", price: 3500, qty: 0 }\n  ]);\n  const count = items.reduce((sum, item) => sum + item.qty, 0);\n  const total = items.reduce(\n    (sum, item) => sum + item.qty * item.price,\n    0\n  );\n  function add(id) {\n    setItems((previous) =>\n      previous.map((item) =>\n        item.id === id ? { ...item, qty: item.qty + 1 } : item\n      )\n    );\n  }\n  return (\n    <main>\n      <h1>장바구니 {count}개</h1>\n      {items.map((item) => (\n        <CartItem key={item.id} item={item} onAdd={add} />\n      ))}\n      <p>예상 총액 {total}원</p>\n    </main>\n  );\n}\n',
      mode: "jsx",
      filename: "App.jsx",
      trace: [
        ["App의 items", "수량의 기준 상태입니다."],
        ["자식 콜백", "누른 id를 부모 add에 전달합니다."],
        [
          "총개수와 총액",
          "바뀐 배열에서 계산하므로 별도 동기화 Effect가 필요 없습니다."
        ]
      ],
      task: "커피 2개와 빵 1개를 담아 총개수 3, 총액 11500원을 확인하세요.",
      checks: ["다른 메뉴 수량이 유지됩니다.", "개수와 금액이 함께 일관되게 바뀝니다."],
      quiz: [
        [
          "총액도 state로 따로 두는 것이 항상 좋나요?",
          "기존 상태에서 계산 가능하면 중복 상태를 줄일 수 있습니다."
        ],
        [
          "자식이 부모 state를 직접 수정하나요?",
          "전달받은 콜백을 부르고 부모 로직이 변경을 요청합니다."
        ]
      ],
      errors: [
        [
          "개수와 총액이 서로 맞지 않습니다",
          "중복 상태를 저장해 한쪽 갱신을 빠뜨렸는지 확인합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 20
    },
    {
      id: "react-08",
      track: "react",
      title: "실제 프로젝트 실행·빌드·수정 검증",
      lead: "브라우저 실습의 개념을 src 파일과 npm 명령으로 연결합니다.",
      sections: [
        {
          title: "실습 편의 환경과 개발 프로젝트를 구분합니다",
          body: "이 사이트의 iframe은 설치 없이 실행하도록 React를 준비했습니다. 다운로드 React 프로젝트는 Vite와 실제 import·export·src/App.jsx를 사용합니다. Node 버전과 package.json engines, README의 실행 방법을 확인합니다."
        },
        {
          title: "개발·빌드·미리보기는 역할이 다릅니다",
          body: "npm install로 의존성을 준비하고 npm run dev로 개발 화면을 켭니다. npm run build는 배포 파일을 만들며 npm run preview는 그 결과를 로컬에서 확인합니다. 빌드 성공만으로 실제 API·폼·경계값 검증이 끝난 것은 아닙니다."
        },
        {
          title: "공개 경로와 서버 주소를 확인합니다",
          body: "프로젝트 Pages처럼 하위 경로에 배포하면 자원 기준 경로 설정을 확인합니다. 정적 React 화면과 Node API는 실행 환경이 다릅니다. API 주소·교차 출처·환경 설정을 맞추고 비밀 키가 브라우저 번들에 들어가지 않는지 검토합니다."
        }
      ],
      definitions: [
        [
          "Node.js",
          "브라우저 밖에서 JavaScript를 실행하는 환경입니다. 개발 도구를 실행할 때도 사용합니다."
        ],
        [
          "npm / nvm",
          "npm은 패키지와 프로젝트 명령을 관리하고, nvm은 Node.js 버전을 설치·전환하는 도구입니다."
        ],
        [
          "개발 서버",
          "작성한 소스를 브라우저에서 확인하도록 제공하는 개발용 서버입니다. 수업에서는 Vite를 사용합니다."
        ],
        [
          "터미널과 현재 폴더",
          "명령을 입력하는 프로그램입니다. npm 명령을 실행할 때 어느 프로젝트 폴더에 있는지가 중요합니다."
        ],
        [
          "node_modules",
          "프로젝트가 설치한 패키지들이 놓이는 폴더입니다. 보통 소스 저장소에 그대로 올리기보다 의존 정보에서 다시 설치합니다."
        ],
        [
          "scripts",
          "package.json에서 명령 이름을 정의하는 항목입니다. npm run dev는 dev라는 이름에 지정한 실제 명령을 실행합니다."
        ],
        [
          "npm install과 npm run",
          "install은 패키지 준비이고 run은 scripts의 명령 실행입니다. 설치 성공이 앱 실행이나 배포 완료를 뜻하지 않습니다."
        ],
        ["빌드 결과", "배포할 형태로 처리한 정적 파일 또는 서버 출력입니다."],
        ["스모크 체크", "앱의 기본 핵심 흐름이 정상인지 빠르게 확인하는 점검입니다."]
      ],
      example:
        "# 다운로드 React 프로젝트 폴더에서\nnode --version\nnpm install\nnpm run dev\n\n# 변경 후 배포 결과 확인\nnpm run build\nnpm run preview",
      mode: "reference",
      filename: "터미널 명령",
      trace: [
        ["환경", "프로젝트에 적힌 Node 요구 버전부터 확인합니다."],
        ["개발", "src/App.jsx를 수정하고 개발 서버 화면에서 확인합니다."],
        ["배포 결과", "빌드한 결과를 preview로 확인하고 실제 호스팅 경로도 점검합니다."]
      ],
      task: "다운로드 React 프로젝트의 메뉴 가격을 바꾸고 추가·삭제·빈 입력·새로고침을 확인하세요.",
      checks: [
        "개발 화면과 빌드 결과가 동작합니다.",
        "변경 파일과 영향 범위를 설명합니다.",
        "백엔드가 없는 정적 예제의 한계를 구분합니다."
      ],
      quiz: [
        [
          "npm run build가 성공하면 주문 API도 운영 중인가요?",
          "빌드 결과 생성과 서버 프로세스 운영은 별개입니다."
        ],
        [
          "현재 브라우저 예제를 그대로 Vite에 붙일 때 같은 전역 변수가 있나요?",
          "프로젝트에서는 React와 Hook을 import하는 방식 등 실행 환경에 맞게 연결합니다."
        ]
      ],
      errors: [
        [
          "배포 후 흰 화면입니다",
          "Console 오류와 Network의 JS·CSS 404, 기준 경로와 빌드 결과 위치를 확인합니다."
        ]
      ],
      sources: [
        "https://react.dev/learn",
        "https://react.dev/learn/managing-state",
        "https://react.dev/learn/you-might-not-need-an-effect"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "git-01",
      track: "git",
      title: "변경 상태와 diff를 읽는 첫 습관",
      lead: "AI가 고친 줄을 이해한 뒤 기록합니다.",
      sections: [
        {
          title: "저장소는 프로젝트와 이력을 관리합니다",
          body: "Git은 파일의 변경을 기록하는 도구이고 GitHub는 원격 저장·협업 서비스입니다. GitHub Desktop도 같은 Git 작업을 GUI로 수행하는 방법입니다. 파일 저장·스테이지·커밋·원격 업로드는 각각 다른 단계입니다."
        },
        {
          title: "기록 전 변경 범위를 먼저 봅니다",
          body: "git status는 어떤 파일이 달라졌는지, git diff는 아직 스테이지에 올리지 않은 줄 차이, git diff --staged는 기록할 변경의 줄 차이를 보여 줍니다. 새로 생긴 파일은 추적 전 diff에 바로 나오지 않을 수 있어 status와 함께 봅니다."
        },
        {
          title: "AI 수정의 목적과 비교합니다",
          body: "문구 변경을 요청했는데 설정·의존성·다른 기능이 함께 바뀌었다면 이유를 확인합니다. 변경 전후 실행 결과를 확인하고 한 작업의 의미를 설명할 수 있는 범위로 기록합니다. .env·실제 비밀·불필요한 시스템 파일이 섞였는지도 봅니다."
        }
      ],
      definitions: [
        [
          "Git",
          "파일의 변경 이력을 기록하고 비교하는 도구입니다. 언제 무엇을 바꿨는지 살펴볼 수 있습니다."
        ],
        [
          "GitHub",
          "Git 저장소를 원격으로 보관하고 협업하는 서비스입니다. Git 자체와 같은 뜻은 아닙니다."
        ],
        [
          "작업 폴더 / 스테이지 / 커밋",
          "작업 폴더에서 수정하고, 스테이지에 기록할 변경을 고른 뒤, commit으로 로컬 이력에 남깁니다."
        ],
        [
          "브랜치",
          "별도의 작업 흐름을 만들기 위한 이름입니다. 기능 수정 등을 나누어 진행하고 나중에 합칠 수 있습니다."
        ],
        [
          "push / pull",
          "push는 내 커밋을 원격으로 올리고, pull은 원격 변경을 받아 현재 작업 흐름에 통합하는 동작입니다."
        ],
        [
          "diff",
          "두 상태 사이에서 어떤 줄이 추가·삭제·수정되었는지 비교한 결과입니다."
        ],
        [
          "저장소",
          "Git이 관리하는 프로젝트와 변경 기록의 묶음입니다. 일반 폴더와 Git 저장소의 역할을 구분합니다."
        ],
        [
          "로컬과 원격",
          "로컬은 내 컴퓨터에 있는 저장소이고 원격은 네트워크로 연결된 다른 저장소입니다. GitHub에 올리기 전에도 로컬 커밋을 만들 수 있습니다."
        ],
        [
          "커밋",
          "선택한 변경을 하나의 이력으로 남긴 기록입니다. 메시지와 식별자를 통해 어떤 작업인지 다시 찾을 수 있습니다."
        ]
      ],
      example:
        "git status\ngit diff\n\n# 파일을 스테이지에 고른 뒤\ngit diff --staged\n\n# 최근 기록 확인\ngit log --oneline -5",
      mode: "shell",
      filename: "명령어.txt",
      trace: [
        ["status", "추적·수정·스테이지 상태를 확인합니다."],
        ["두 diff", "아직 고르지 않은 변경과 기록할 변경을 나눠 봅니다."],
        ["log", "이미 기록한 이력을 확인합니다."]
      ],
      task: "문구 한 줄을 수정하고 status·diff에서 그 변경을 찾아 설명하세요.",
      checks: [
        "변경 파일을 확인합니다.",
        "추가·삭제된 줄을 설명합니다.",
        "커밋 전 실행 결과를 확인합니다."
      ],
      quiz: [
        [
          "Git과 GitHub는 같은 것인가요?",
          "버전 관리 도구와 원격 협업 서비스로 역할이 다릅니다."
        ],
        [
          "diff가 비었으면 모든 변경이 없는가요?",
          "스테이지 여부·새 파일·추적 상태를 status와 함께 확인합니다."
        ]
      ],
      errors: [
        [
          "변경 파일이 너무 많습니다",
          "파일 목록을 먼저 좁히고 요청과 관련된 변경인지 분리해 검토합니다."
        ]
      ],
      sources: [
        "https://git-scm.com/book/en/v2",
        "https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "git-02",
      track: "git",
      title: "스테이지·커밋·gitignore로 기록 만들기",
      lead: "한 가지 작업의 의미를 알아볼 수 있게 저장합니다.",
      sections: [
        {
          title: "스테이지는 다음 기록의 선택입니다",
          body: "작업 폴더의 모든 변경이 자동으로 커밋되는 것은 아닙니다. git add로 반영할 내용을 고릅니다. 선택한 뒤 파일을 더 수정하면 스테이지와 작업 폴더가 서로 다를 수 있으므로 staged diff를 다시 봅니다."
        },
        {
          title: "커밋에는 목적을 남깁니다",
          body: "“최종”보다 “주문 수량 검증 추가”처럼 작업을 설명하는 메시지를 사용합니다. 커밋은 로컬 이력입니다. 원격 전송은 push가 필요하며 배포는 이후 설정된 과정에 따라 진행됩니다."
        },
        {
          title: "제외 규칙은 기존 기록을 지우지 않습니다",
          body: ".gitignore는 아직 추적하지 않는 파일의 제외 규칙입니다. 이미 커밋한 파일과 과거 비밀 노출을 자동으로 없애지 않습니다. 실제 비밀은 넣지 않고 예시 설정과 설치 정보로 환경을 재현합니다."
        }
      ],
      definitions: [
        ["스테이지", "다음 커밋에 반영할 내용을 고르는 영역입니다."],
        ["커밋", "선택한 변경의 이력 기록입니다."],
        [".gitignore", "관리하지 않을 미추적 파일의 패턴을 지정합니다."],
        ["추적 파일", "이미 Git이 관리하는 파일입니다."],
        ["커밋 메시지", "변경 목적을 알아볼 수 있게 남기는 설명입니다."]
      ],
      example:
        'git add index.html\ngit diff --staged\ngit commit -m "첫 화면 제목 변경"\ngit status\n\n# .gitignore에 넣을 예시 패턴\n# node_modules/\n# .env\n# .DS_Store',
      mode: "shell",
      filename: "명령어.txt",
      trace: [
        ["파일 지정", "수정한 index.html을 선택합니다."],
        ["검토", "실제 기록할 변경을 확인합니다."],
        ["기록 후 상태", "추가 수정이 남아 있는지 확인합니다."]
      ],
      task: "작업 하나를 커밋하고 메시지에서 무엇을 했는지 알아볼 수 있게 적으세요.",
      checks: [
        "staged diff를 확인했습니다.",
        "실제 비밀을 포함하지 않았습니다.",
        "커밋 이후 상태를 확인했습니다."
      ],
      quiz: [
        [
          "add한 뒤 파일을 다시 바꾸면요?",
          "새 수정은 별도로 스테이지에 반영해야 할 수 있습니다."
        ],
        [
          "gitignore에 쓰면 과거 .env 기록도 사라지나요?",
          "아닙니다. 노출 키 폐기 등 별도 대응과 기록 처리를 검토합니다."
        ]
      ],
      errors: [
        [
          "Author identity unknown",
          "본인의 이름·이메일 설정을 확인합니다. 임의 타인의 정보로 대신 설정하지 않습니다."
        ]
      ],
      sources: [
        "https://git-scm.com/book/en/v2",
        "https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "git-03",
      track: "git",
      title: "브랜치에서 기능을 나누고 검토하기",
      lead: "기준 버전과 새 기능의 관계를 이해합니다.",
      sections: [
        {
          title: "브랜치는 별도의 작업 흐름입니다",
          body: "새 기능을 작업 브랜치에서 만들면 기준 브랜치와 비교하며 검토할 수 있습니다. 작업 전 커밋되지 않은 변경이 있는지 확인합니다. 브랜치를 바꾸면 파일 내용과 실행 화면도 달라질 수 있습니다."
        },
        {
          title: "작은 기능을 독립적으로 완성합니다",
          body: "버튼 문구와 서버 검증처럼 연결된 기능이라도 작업 목적이 분명한 단위로 나누어 테스트합니다. 원격 PR은 diff·설명·검증 결과를 검토하고 기준 브랜치에 합치도록 제안하는 절차입니다."
        },
        {
          title: "합치기 전에 기준과 차이를 봅니다",
          body: "어느 브랜치를 기준으로 비교하는지 확인합니다. 팀의 기본 브랜치는 main 또는 master 등 저장소 설정에 따릅니다. 예제 명령의 main을 본인 저장소에 무조건 적용하지 않습니다."
        }
      ],
      definitions: [
        ["브랜치", "커밋 흐름을 가리키는 이름입니다."],
        ["기준 브랜치", "변경을 비교하거나 합칠 대상 작업 흐름입니다."],
        ["merge", "작업 흐름의 변경을 통합하는 동작입니다."],
        ["PR", "검토 후 합치도록 제안하는 원격 협업 절차입니다."]
      ],
      example:
        'git status\ngit switch -c feature/menu-price\n\n# 수정·확인 후\ngit add src/App.jsx\ngit commit -m "커피 가격을 4200원으로 변경"\n\n# 실제 기준 브랜치 이름으로 바꾸어 비교\ngit diff main...HEAD',
      mode: "shell",
      filename: "명령어.txt",
      trace: [
        ["상태 확인", "기존 미완료 변경을 먼저 파악합니다."],
        ["새 브랜치", "기능 목적을 나타내는 이름으로 작업 흐름을 만듭니다."],
        ["비교", "예제 main을 실제 기준 이름으로 바꿔 차이를 봅니다."]
      ],
      task: "가격 변경 브랜치를 만들고 기준 버전과 달라진 내용을 적어 보세요.",
      checks: [
        "현재 브랜치를 확인합니다.",
        "요청한 변경만 들어 있습니다.",
        "수정 결과와 검증 방법을 설명합니다."
      ],
      quiz: [
        [
          "main이라는 이름이 모든 저장소에 있나요?",
          "아닙니다. 실제 기본·기준 브랜치를 확인합니다."
        ],
        [
          "브랜치를 만들면 폴더가 새로 복사되나요?",
          "일반적인 동일 작업 폴더 사용에서는 커밋 흐름을 가리키는 이름을 만드는 것으로 이해합니다."
        ]
      ],
      errors: [
        [
          "브랜치 전환이 막힙니다",
          "기존 변경을 먼저 검토해 커밋·보관 등으로 처리한 뒤 전환합니다."
        ]
      ],
      sources: [
        "https://git-scm.com/book/en/v2",
        "https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "git-04",
      track: "git",
      title: "원격 저장소·push·fetch·pull",
      lead: "내 컴퓨터의 기록과 GitHub의 기록을 구분합니다.",
      sections: [
        {
          title: "원격 이름은 별명입니다",
          body: "origin·upstream은 원격 저장소 주소에 붙이는 이름입니다. 이름만 보고 내 저장소나 강사 저장소라고 단정하지 말고 git remote -v로 실제 주소를 확인합니다. 잘못된 원격으로 공개하지 않도록 대상과 접근 범위를 봅니다."
        },
        {
          title: "받기와 합치기를 나눠 이해합니다",
          body: "fetch는 원격 정보를 가져오며, pull은 가져온 변경을 현재 흐름에 통합하는 과정까지 포함합니다. 통합 방식은 설정 등에 따라 merge나 rebase일 수 있습니다. push는 로컬 커밋을 원격에 전송합니다."
        },
        {
          title: "거부 메시지를 강제로 덮지 않습니다",
          body: "원격에 새 커밋이 있어 push가 거부되면 차이를 확인하고 통합합니다. 무조건 force push로 해결하면 다른 사람의 작업 이력을 덮을 수 있습니다. 로그인·권한 문제와 이력 차이 문제도 분리합니다."
        }
      ],
      definitions: [
        [
          "push / pull",
          "push는 내 커밋을 원격으로 올리고, pull은 원격 변경을 받아 현재 작업 흐름에 통합하는 동작입니다."
        ],
        [
          "로컬과 원격",
          "로컬은 내 컴퓨터에 있는 저장소이고 원격은 네트워크로 연결된 다른 저장소입니다. GitHub에 올리기 전에도 로컬 커밋을 만들 수 있습니다."
        ],
        ["fetch", "원격의 최신 이력 정보를 가져오는 동작입니다."],
        ["pull", "원격 변경을 가져와 현재 작업 흐름에 통합하는 동작입니다."],
        ["upstream 설정", "로컬 브랜치가 기본으로 연결할 원격 브랜치 관계입니다."]
      ],
      example:
        "git remote -v\ngit branch -vv\ngit fetch origin\n\n# 확인 후 내 현재 브랜치를 원격에 연결해 전송\ngit push -u origin HEAD",
      mode: "shell",
      filename: "명령어.txt",
      trace: [
        ["remote", "전송할 저장소 주소를 확인합니다."],
        ["branch", "현재 브랜치와 원격 연결 관계를 확인합니다."],
        [
          "push",
          "현재 커밋 흐름을 원격에 올립니다. 실제 대상과 권한을 먼저 확인합니다."
        ]
      ],
      task: "커밋과 push 후 GitHub에서 같은 커밋 식별자가 보이는지 확인하세요.",
      checks: [
        "내 원격 주소가 맞습니다.",
        "GitHub에 해당 커밋이 보입니다.",
        "로컬 저장·커밋·push를 구분합니다."
      ],
      quiz: [
        [
          "커밋했는데 GitHub가 그대로입니다",
          "push 여부와 브랜치·원격 주소를 확인합니다."
        ],
        [
          "push 거부는 항상 비밀번호 오류인가요?",
          "권한 문제와 원격 이력 차이 등 여러 원인이 있습니다."
        ]
      ],
      errors: [
        [
          "non-fast-forward",
          "원격 변경을 확인하고 작업을 통합합니다. 무조건 강제 전송하지 않습니다."
        ]
      ],
      sources: [
        "https://git-scm.com/book/en/v2",
        "https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "git-05",
      track: "git",
      title: "충돌을 이해하고 두 의도를 합치기",
      lead: "표시 기호를 없애는 것보다 최종 동작을 정하는 일이 먼저입니다.",
      sections: [
        {
          title: "충돌은 Git이 의도를 결정할 수 없는 상황입니다",
          body: "서로 다른 작업이 같은 부분을 양립하기 어렵게 바꾸면 사람이 선택·통합해야 합니다. 둘 중 위쪽을 항상 남기거나 양쪽 코드를 무조건 이어 붙이는 규칙은 없습니다."
        },
        {
          title: "변경 목적을 비교합니다",
          body: "가격 인상과 문구 수정이 같은 줄에서 충돌했다면 둘 다 반영할 수 있을지 읽습니다. 충돌 해결 후 문법뿐 아니라 연결된 계산·UI·테스트도 확인해야 합니다. 표시 기호가 남으면 프로그램 코드로 해석되지 않습니다."
        },
        {
          title: "통합 상태를 확인하고 마무리합니다",
          body: "status에서 충돌 파일을 확인하고 수정·검증 후 스테이지에 올려 진행 중인 merge 또는 rebase 절차에 맞게 마무리합니다. rebase라면 continue 절차 등 문맥이 다르므로 도구 안내와 현재 상태를 확인합니다."
        }
      ],
      definitions: [
        ["충돌 마커", "Git이 충돌 범위를 표시하는 기호입니다."],
        [
          "현재 쪽과 들어오는 쪽",
          "현재 통합 방식·작업 위치에 따라 해석해야 하는 두 변경입니다."
        ],
        ["해결", "의도한 최종 코드를 결정하고 정상 동작을 확인하는 과정입니다."]
      ],
      example:
        "<<<<<<< HEAD\nconst price = 4200;\n=======\nconst price = 4500;\n>>>>>>> feature/new-price\n\n# 위 표시는 해결 전 예시입니다.\n# 업무 기준 가격을 확인해 올바른 선언 하나로 정리합니다.",
      mode: "reference",
      filename: "충돌 예시.txt",
      trace: [
        ["표시 범위", "두 후보가 같은 변수의 가격을 다르게 정합니다."],
        ["기준 확인", "어느 값이 승인된 변경인지 확인합니다."],
        [
          "최종 코드",
          "마커를 제거하고 하나의 올바른 선언으로 만든 뒤 계산과 UI를 검증합니다."
        ]
      ],
      task: "최종 가격이 4500원이라는 요구라고 가정하고 최종 코드와 검증 절차를 적으세요.",
      checks: [
        "const price = 4500; 하나가 남습니다.",
        "충돌 마커가 없습니다.",
        "계산과 표시를 다시 확인합니다."
      ],
      quiz: [
        [
          "충돌은 무조건 내 코드를 남기면 되나요?",
          "두 변경의 목적과 최종 요구를 확인해야 합니다."
        ],
        ["마커만 지우면 해결인가요?", "문법과 실제 동작까지 검증해야 합니다."]
      ],
      errors: [
        [
          "Already declared 오류가 납니다",
          "충돌 양쪽의 같은 변수 선언을 모두 남겼는지 확인합니다."
        ]
      ],
      sources: [
        "https://git-scm.com/book/en/v2",
        "https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "git-06",
      track: "git",
      title: "안전하게 이전 상태 확인·복구하기",
      lead: "미커밋 변경과 이미 공유한 커밋의 복구를 구분합니다.",
      sections: [
        {
          title: "되돌리기 전에 보존 범위를 정합니다",
          body: "현재 diff와 status를 확인해 필요한 작업을 따로 보관합니다. 작업 폴더 변경을 버리는 명령은 커밋되지 않은 내용을 잃을 수 있습니다. 복구할 파일과 기준을 특정하고 전체 초기화를 습관처럼 사용하지 않습니다."
        },
        {
          title: "먼저 읽고 비교합니다",
          body: "git show <commit>:<path>로 이전 파일을 읽거나 과거 커밋과 diff를 비교합니다. 무엇이 바뀌었는지 이해한 뒤 필요한 부분을 복원합니다. 이미 공유한 이력을 고쳐 쓰는 것과 새 되돌림 커밋을 만드는 것은 다릅니다."
        },
        {
          title: "공유 이력은 되돌림 커밋을 검토합니다",
          body: "git revert는 기존 변경을 취소하는 새 커밋을 만드는 방식입니다. 상황에 따라 충돌이 생길 수 있으며 대상 커밋이 맞는지 확인합니다. reset·강제 push는 이력과 다른 작업에 미치는 영향을 이해한 뒤 사용해야 합니다."
        }
      ],
      definitions: [
        ["show", "특정 커밋의 파일 내용이나 변경 정보를 읽습니다."],
        [
          "restore",
          "작업 폴더 또는 스테이지의 내용을 특정 기준으로 복원합니다. 옵션에 따라 미커밋 내용을 버릴 수 있습니다."
        ],
        ["revert", "선택한 커밋의 변경을 되돌리는 새 커밋을 만듭니다."],
        [
          "stash",
          "미완료 변경을 임시 보관하는 도구입니다. 기본 동작에서 미추적 파일 포함 여부 등을 확인합니다."
        ]
      ],
      example:
        "git status\ngit diff\n\n# 아래 COMMIT과 경로를 실제 값으로 바꾸어 먼저 읽습니다.\ngit show COMMIT:src/App.jsx\n\n# 공유한 커밋의 변경을 새 기록으로 취소할 때 검토할 동작\n# git revert COMMIT",
      mode: "shell",
      filename: "명령어.txt",
      trace: [
        ["현재 변경", "되돌리기 전에 잃지 않아야 할 내용을 확인합니다."],
        ["과거 내용 읽기", "show는 복구 전에 기준 파일을 읽는 단계입니다."],
        [
          "revert",
          "실제 대상과 영향 범위를 확인한 뒤 필요한 경우 수행합니다. 여기서는 주석 처리된 안내입니다."
        ]
      ],
      task: "이전 커밋의 파일을 읽고 현재 파일과 다른 줄을 찾으세요. 먼저 복구 계획을 적습니다.",
      checks: [
        "대상 커밋과 파일 경로가 명확합니다.",
        "현재 작업 보존 여부를 판단합니다.",
        "공유 이력과 미커밋 변경의 복구 차이를 설명합니다."
      ],
      quiz: [
        [
          "restore는 항상 안전한 조회 명령인가요?",
          "작업 내용을 변경하거나 버릴 수 있으므로 대상과 기준을 먼저 확인합니다."
        ],
        ["revert는 과거 커밋을 삭제하나요?", "기존 변경을 취소하는 새 커밋을 만듭니다."]
      ],
      errors: [
        [
          "원치 않는 변경까지 사라졌습니다",
          "실행 전에 diff·보관 상태·대상 범위를 확인하는 절차가 필요합니다. 이후 복구 가능성은 기록과 상태에 따라 다릅니다."
        ]
      ],
      sources: [
        "https://git-scm.com/book/en/v2",
        "https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"
      ],
      extra: [],
      minutes: 15
    },
    {
      id: "git-07",
      track: "git",
      title: "GitHub Pages 배포와 404·흰 화면 해결",
      lead: "첫 파일·배포 폴더·하위 경로·성공 상태를 확인합니다.",
      sections: [
        {
          title: "배포할 소스와 결과 폴더를 구분합니다",
          body: "직접 만든 정적 HTML은 해당 파일 폴더를, 빌드 도구 프로젝트는 생성한 결과를 배포합니다. GitHub Pages 설정의 브랜치·폴더 또는 Actions 흐름이 실제 파일 위치와 맞아야 합니다. 첫 문서는 index.html로 준비합니다."
        },
        {
          title: "기본 주소와 개별 파일을 비교합니다",
          body: "/repo/는 404인데 /repo/시작하기.html은 열리면 기본 진입 문서가 없는지 확인합니다. 문서는 열리는데 CSS·JS가 404이면 자원 경로·업로드·대소문자를 봅니다. SPA의 임의 경로 새로고침도 별도 라우팅 설정 문제일 수 있습니다. 이 사이트는 .html과 쿼리 기반 링크로 정적 호스팅에 맞춥니다."
        },
        {
          title: "공개 후에도 실제 주소에서 확인합니다",
          body: "커밋·push와 배포 완료는 다른 단계입니다. Actions 또는 Pages 상태를 보고 실제 주소를 열어 기본 화면·자원·내부 링크·직접 링크·모바일·실습 동작을 확인합니다. 정적 Pages는 Node 서버를 실행하지 않으므로 API 배포는 별도로 판단합니다."
        }
      ],
      definitions: [
        ["배포 소스", "공개 대상으로 선택한 브랜치·폴더·빌드 결과입니다."],
        ["index.html", "기본 주소에서 제공할 첫 화면 파일입니다."],
        [
          "기준 경로",
          "프로젝트 사이트의 /repo/처럼 파일 주소 계산의 바탕이 되는 경로입니다."
        ],
        ["Actions", "저장소 작업을 자동 실행하는 워크플로 환경입니다."],
        [
          "정적 사이트",
          "미리 준비한 파일을 제공하는 사이트입니다. 서버 프로세스의 임의 실행과 구분합니다."
        ]
      ],
      example:
        "사이트/\n  index.html\n  lesson.html\n  assets/\n    academy.css\n    academy.js\n\n# index.html 안의 경로 예시\n# assets/academy.css     현재 사이트 폴더 기준\n# /assets/academy.css    호스트 최상위 기준 (프로젝트 경로 주의)",
      mode: "reference",
      filename: "배포 폴더 구조",
      trace: [
        ["첫 문서", "기본 주소에서 열 index.html이 배포 소스에 있어야 합니다."],
        ["자원", "연결한 CSS·JS도 실제 배포되어야 합니다."],
        ["상대 경로", "프로젝트 하위 경로에서도 필요한 파일로 이어지는지 확인합니다."]
      ],
      task: "실제 배포 주소에서 첫 화면·개별 레슨·CSS·실행 예제를 점검하세요.",
      checks: [
        "기본 주소가 정상입니다.",
        "새로고침과 직접 레슨 링크가 동작합니다.",
        "브라우저 오류와 자원 404가 없습니다."
      ],
      quiz: [
        [
          "push하면 반드시 배포도 즉시 완료인가요?",
          "연결된 빌드·배포 과정의 결과까지 확인해야 합니다."
        ],
        [
          "Pages에서 서버 파일이 보이면 Node도 실행 중인가요?",
          "파일 제공과 서버 프로세스 실행은 별개입니다."
        ]
      ],
      errors: [
        ["첫 화면 404", "index.html과 배포 소스 위치를 확인합니다."],
        ["흰 화면", "Console 오류·JS/CSS 404·기준 경로·빌드 출력 위치를 확인합니다."]
      ],
      sources: [
        "https://git-scm.com/book/en/v2",
        "https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"
      ],
      extra: [],
      minutes: 15
    }
  ],
  version: "2026-11-13"
};
