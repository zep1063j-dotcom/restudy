# Vite React 학습 프로젝트

## 준비
Node.js 22.12 이상 또는 이 프로젝트 engines를 만족하는 환경을 사용합니다.
이 폴더를 코드 편집기로 열고 해당 폴더의 터미널에서 실행합니다.

```
node --version
npm install
npm run dev
```

터미널이 알려 주는 주소를 브라우저로 엽니다. index.html 더블클릭으로 개발 서버를 대신하지 않습니다.

## 코드 읽는 순서
1. index.html의 root와 src/main.jsx 연결
2. main.jsx의 createRoot와 App import
3. App.jsx의 메뉴 데이터, items·query state
4. MenuCard props와 onAdd·onRemove 콜백
5. visible·count·total을 계산하는 filter·reduce

## 직접 수정
- 커피 가격 4000을 4200으로 바꿉니다. 총액이 4200원씩 증가하는지 확인합니다.
- 새 메뉴 객체에 고유 id를 주어 추가합니다. 검색과 총액이 함께 동작하는지 확인합니다.
- 담기 상한 20을 바꿀 때 버튼 disabled와 changeQty 범위를 함께 수정합니다.
- 없는 메뉴 검색, 수량 0, 상한 도달, 초기화, 새로고침을 확인합니다.

## 빌드 결과 확인
```
npm run build
npm run preview
```

배포 파일은 dist입니다. base는 상대 경로 예제로 설정했습니다. 호스팅 환경의 경로와 실제 배포 결과를 확인하세요.
이 예제에는 API가 없으므로 화면을 배포해도 실제 주문이 서버에 저장되지는 않습니다.
로그인·결제·권한은 구현하지 않았습니다.
