# 로컬 카페 주문 앱

Node.js 22 이상이 필요합니다. 외부 패키지 설치 없이 실행합니다.

1. 이 폴더를 코드 편집기로 엽니다.
2. 해당 폴더 터미널에서 `node --version`으로 버전을 확인합니다.
3. `node server.mjs`를 실행합니다.
4. 브라우저에서 http://127.0.0.1:4177 을 엽니다. 파일 더블클릭으로 API를 실행하지 않습니다.
5. /react.html은 같은 API를 사용하는 React 화면입니다.
6. 종료는 서버 터미널에서 Ctrl+C입니다.

## 파일에서 찾을 위치
- server.mjs: 기준 메뉴 가격, GET/POST 경로, 입력 검증, JSON 저장
- public/index.html와 app.js: 일반 JS 폼과 요청
- public/react-app.jsx: 같은 기능의 React 상태·Effect·폼
- data/orders.json: 실행 중 만드는 연습 주문 기록

## 순서대로 수정하기
1. 기본 커피 2개가 8000원인지 확인합니다.
2. server.mjs의 커피 price만 4200으로 바꾸고 서버를 다시 켭니다.
3. 메뉴를 다시 읽어 2개 주문이 8400원인지 확인합니다.
4. 새로고침·서버 재시작 뒤 목록이 남는지 확인합니다.
5. 없는 메뉴·0·21·소수를 API에 보냈을 때 400인지 확인합니다.

## API
GET /api/menu, GET /api/orders
POST /api/orders: Content-Type application/json, 본문 {"menuId":"coffee","qty":2}
가격은 서버가 계산합니다. 클라이언트가 임의 total을 보내도 사용하지 않습니다.
요청 크기 제한은 32768바이트입니다. 단일 프로세스 내 파일 쓰기를 순서대로 처리합니다.

## 포트와 환경 변수
기본 4177입니다. macOS/Linux 예: `PORT=4200 node server.mjs`.
Node 버전이 지원하면 .env.example을 .env로 복사한 뒤 `node --env-file=.env server.mjs`처럼 읽을 수도 있습니다. 실제 비밀은 넣지 않습니다.

## 범위
실제 고객 서비스를 운영하는 코드가 아닙니다. 로그인·권한·결제·백업·다중 프로세스 동시 쓰기·운영 모니터링 등은 별도 설계가 필요합니다. 서버는 로컬 127.0.0.1에만 바인딩합니다. API가 개인 데이터에 대한 인증을 제공하는 구조라고 가정하지 않습니다.
저장 파일이 손상되면 덮어쓰지 않고 서버 시작을 중단합니다. 기존 내용을 보관하고 원인을 확인하세요.
GitHub Pages는 이 서버를 실행하지 않습니다. Node 서버를 운영할 환경이 따로 필요합니다.
