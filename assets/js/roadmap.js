(() => {
  "use strict";
  if (document.body.dataset.page !== "roadmap" || !window.ACADEMY_ROADMAP) return;
  const { stages, extras } = window.ACADEMY_ROADMAP;
  const lessons = window.ACADEMY.lessons;
  const esc = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (letter) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
          letter
        ]
    );
  const coreIds = stages.flatMap((stage) => stage.lessons);
  let records = {};
  try {
    records = JSON.parse(localStorage.getItem("vibe-academy-v2") || "{}").lessons || {};
  } catch {
    /* The curriculum also works without saved records. */
  }
  const done = (id) => records[id]?.done === true;
  const lessonLink = (id) => `lesson.html?id=${encodeURIComponent(id)}&path=fast`;
  const nextId = coreIds.find((id) => !done(id));
  const nextStage = nextId
    ? stages.findIndex((stage) => stage.lessons.includes(nextId))
    : -1;
  const completed = coreIds.filter(done).length;
  const start = document.getElementById("roadmap-start");
  start.href = nextId ? lessonLink(nextId) : "#final-check";
  start.textContent = completed
    ? nextId
      ? `${coreIds.indexOf(nextId) + 1}번 수업 이어서 배우기 ↗`
      : "마지막 미션 확인하기 ↗"
    : "1번 수업부터 시작 ↗";
  document.getElementById("roadmap-progress").innerHTML =
    `<div><strong>핵심 수업 완료 표시 ${completed} / ${coreIds.length}</strong><span>각 레슨의 ‘학습 완료’ 기록을 반영합니다. 단계 미션은 아래 완료 기준으로 직접 확인하세요.</span></div><progress value="${completed}" max="${coreIds.length}" aria-label="핵심 수업 완료 표시"></progress>`;
  const weeks = [
    {
      title: "열고, 꾸미고, 기록하기",
      result: "결과물: 내 이름의 카페 화면과 첫 변경 커밋"
    },
    {
      title: "데이터와 화면 연결하기",
      result: "결과물: 클릭과 입력으로 금액이 바뀌는 화면, 요청·실패 흐름 설명"
    },
    {
      title: "서버와 저장 연결하기",
      result: "결과물: 검증·금액 계산·주문 저장을 수행하는 로컬 API"
    },
    {
      title: "React로 바꾸고 공개하기",
      result: "결과물: React 장바구니, 변경 검토와 정적 화면 배포"
    }
  ];
  let globalIndex = 0;
  document.getElementById("roadmap-stages").innerHTML = weeks
    .map(
      (week, weekIndex) =>
        `<section class="roadmap-week" id="week-${weekIndex + 1}"><header><p class="eyebrow">WEEK ${String(weekIndex + 1).padStart(2, "0")}</p><h2>${esc(week.title)}</h2><p>${esc(week.result)}</p></header>${stages
          .map((stage, index) => {
            if (stage.week !== weekIndex + 1) return "";
            const complete = stage.lessons.filter(done).length;
            const links = stage.lessons
              .map((id) => {
                const lesson = lessons.find((item) => item.id === id);
                globalIndex++;
                return `<li><a class="roadmap-lesson" href="${lessonLink(id)}"><span class="roadmap-lesson-number">${String(globalIndex).padStart(2, "0")}</span><span><strong>${esc(lesson.title)}</strong><span>${esc(id)} · 읽기·실습 약 ${lesson.minutes}분</span></span><span class="roadmap-lesson-status">${done(id) ? "✓ 완료 표시" : "수업 열기 ↗"}</span></a></li>`;
              })
              .join("");
            const number = index + 1;
            return `<details class="roadmap-stage" id="step-${number}" ${index === nextStage ? "open" : ""}><summary><span class="roadmap-stage-number">${String(number).padStart(2, "0")}</span><span class="roadmap-stage-name">${esc(stage.title)}<span>수업 ${stage.lessons.length}개 · 완료 표시 ${complete}/${stage.lessons.length}</span></span><span class="roadmap-stage-arrow" aria-hidden="true">⌄</span></summary><div class="roadmap-stage-body"><p class="roadmap-why">${esc(stage.why)}</p><h3>이 순서대로 수업을 여세요</h3><ol class="roadmap-lesson-list">${links}</ol><div class="roadmap-mission"><p class="eyebrow">MAKE / 직접 만들 결과물</p><h3>${esc(stage.task)}</h3>${stage.project ? `<a href="downloads/${stage.project}.zip" download>실습 파일 받기 · ${stage.project}.zip ↓</a>` : ""}<p class="subtle">기존 레슨의 예제와 수정 과제를 먼저 수행한 뒤 이 미션을 확인하세요. 새 프로젝트는 압축을 풀고 README의 실행 순서를 따릅니다.</p><h4>다음 단계로 가기 전 확인</h4><ul>${stage.checks.map((check) => `<li>${esc(check)}</li>`).join("")}</ul></div><details class="roadmap-ai"><summary>막혔을 때 AI에게 이렇게 질문하세요</summary><p>${esc(stage.ai)}</p><p class="subtle">AI의 설명과 제안은 현재 코드·실행 결과와 대조한 뒤 적용하세요.</p></details><div class="roadmap-stage-next">${number < stages.length ? `<a href="#step-${number + 1}" data-next-stage="${number + 1}">완료 기준을 확인했다면 ${String(number + 1).padStart(2, "0")}단계 보기 →</a>` : '<a href="#final-check">마지막 미션으로 전체 흐름 확인하기 →</a>'}<a href="progress.html">내 수업 기록</a></div></div></details>`;
          })
          .join("")}</section>`
    )
    .join("");
  document.getElementById("roadmap-extras").innerHTML = extras
    .map(
      (extra) =>
        `<article class="roadmap-extra-group"><h3>${esc(extra.title)}</h3><p>${esc(extra.why)}</p><ul>${extra.lessons.map((id) => `<li><a href="lesson.html?id=${encodeURIComponent(id)}">${esc(lessons.find((item) => item.id === id).title)} ↗</a></li>`).join("")}</ul></article>`
    )
    .join("");
  function openHashStage() {
    const match = location.hash.match(/^#step-(\d{1,2})$/);
    if (!match) return;
    const stage = document.getElementById(`step-${Number(match[1])}`);
    if (stage) {
      stage.open = true;
      stage.scrollIntoView({ block: "start" });
    }
  }
  document.getElementById("roadmap-stages").addEventListener("click", (event) => {
    const link = event.target.closest("[data-next-stage]");
    if (link) document.getElementById(`step-${link.dataset.nextStage}`).open = true;
  });
  window.addEventListener("hashchange", openHashStage);
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) location.reload();
  });
  openHashStage();
})();
