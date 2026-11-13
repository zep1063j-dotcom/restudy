(() => {
  "use strict";
  if (document.body.dataset.page !== "glossary" || !window.ACADEMY) return;

  const { lessons, tracks } = window.ACADEMY;
  const escape = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (letter) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
          letter
        ]
    );
  const rich = (value) => escape(value).replace(/`([^`]+)`/g, "<code>$1</code>");
  const descriptions = {
    start: {
      title: "코드 읽기와 실행 준비",
      use: "프로젝트를 처음 열고, 파일의 위치와 실행 환경을 파악할 때",
      files: "폴더 · 경로 · 브라우저 · 개발 도구"
    },
    html: {
      title: "HTML · 화면의 구조",
      use: "제목, 문단, 링크, 이미지, 입력 폼의 내용을 만들거나 바꿀 때",
      files: "index.html · 태그 · 속성 · 접근성"
    },
    css: {
      title: "CSS · 디자인과 배치",
      use: "색상, 글자 크기, 여백, 배치, 모바일 화면을 조정할 때",
      files: "style.css · 선택자 · 레이아웃 · 반응형"
    },
    js: {
      title: "JavaScript · 데이터와 동작",
      use: "클릭, 입력, 계산, 배열 처리, 서버 요청을 연결할 때",
      files: "app.js · 함수 · 이벤트 · 비동기 처리"
    },
    node: {
      title: "Node.js · 서버와 저장",
      use: "서버를 실행하고 API, 입력 검증, 파일 저장, 환경 변수를 다룰 때",
      files: "server.mjs · package.json · API · 데이터 파일"
    },
    react: {
      title: "React · 컴포넌트와 상태",
      use: "화면을 컴포넌트로 나누고 데이터 변화에 맞춰 다시 보여 줄 때",
      files: "App.jsx · props · state · Effect"
    },
    git: {
      title: "Git · 변경 기록과 배포",
      use: "수정 내용을 검토하고 기록, 협업, 복구, 사이트 배포를 할 때",
      files: "터미널 · .gitignore · GitHub · GitHub Pages"
    }
  };
  // A term may occur in an introductory lesson from another field.
  // Classify by its actual use, while keeping every related lesson link.
  const preferredFields = {
    json: "js",
    diff: "git",
    컴포넌트: "react",
    jsx: "react",
    "number.isinteger": "js",
    "submit / preventdefault": "js",
    "npm / nvm": "node",
    "index.html / root": "start",
    모듈: "js",
    export: "js",
    "export default": "js",
    import: "js",
    "vite와 빌드": "node",
    "개발 서버": "node",
    의존성: "node",
    ".gitignore": "git",
    "정적 호스팅": "git",
    "진입 파일": "start",
    불변성: "js",
    "전개 구문": "js",
    참조: "js",
    trim: "js",
    abortcontroller: "js",
    "얕은 복사": "js",
    "pre / code": "html"
  };
  const topicOverrides = {
    jsx: "react-01",
    컴포넌트: "react-01",
    "number.isinteger": "js-01",
    "submit / preventdefault": "js-07",
    모듈: "js-10",
    export: "js-10",
    "export default": "js-10",
    import: "js-10",
    불변성: "js-04",
    "전개 구문": "js-04",
    참조: "js-04",
    "얕은 복사": "js-04",
    trim: "js-07",
    abortcontroller: "js-09",
    "pre / code": "html-02"
  };
  const entries = new Map();
  for (const lesson of lessons) {
    for (const [term, meaning] of lesson.definitions) {
      const key = term.trim().toLowerCase();
      if (!entries.has(key)) entries.set(key, { key, term, references: [] });
      entries.get(key).references.push({ lesson, meaning });
    }
  }
  for (const entry of entries.values()) {
    const usage = tracks.map((track) => ({
      id: track.id,
      count: entry.references.filter((ref) => ref.lesson.track === track.id).length
    }));
    usage.sort((a, b) => b.count - a.count);
    entry.field = preferredFields[entry.key] || usage[0].id;
    entry.references.sort(
      (a, b) =>
        Number(b.lesson.track === entry.field) - Number(a.lesson.track === entry.field)
    );
    entry.topic =
      topicOverrides[entry.key] ||
      entry.references.find((ref) => ref.lesson.track === entry.field)?.lesson.id ||
      lessons.find((lesson) => lesson.track === entry.field).id;
    entry.meaning = entry.references[0].meaning;
    entry.search = [
      entry.term,
      ...entry.references.flatMap((ref) => [ref.meaning, ref.lesson.title]),
      descriptions[entry.field].title
    ]
      .join(" ")
      .toLowerCase();
  }
  const allEntries = [...entries.values()].sort((a, b) =>
    a.term.localeCompare(b.term, "ko")
  );
  const query = new URLSearchParams(location.search);
  let field = tracks.some((track) => track.id === query.get("track"))
    ? query.get("track")
    : "all";
  const input = document.getElementById("glossary-search");
  const categoryNav = document.getElementById("glossary-categories");
  const result = document.getElementById("glossary-list");
  const count = document.getElementById("glossary-count");
  input.value = query.get("q") || "";

  function entryMarkup(entry) {
    const first = entry.references[0];
    const otherLessons = entry.references.filter(
      (ref, index, refs) =>
        index > 0 &&
        refs.findIndex((item) => item.lesson.id === ref.lesson.id) === index
    );
    return `<article class="glossary-entry">
      <h4 class="term-name">${escape(entry.term)}</h4>
      <p class="term-meaning">${rich(entry.meaning)}</p>
      <p class="term-context"><span>연결되는 작업</span>${escape(first.lesson.lead)}</p>
      <a class="term-lesson" href="lesson.html?id=${encodeURIComponent(first.lesson.id)}">실제 코드 보기 · ${escape(first.lesson.title)} <span aria-hidden="true">↗</span></a>
      ${otherLessons.length ? `<details class="term-related"><summary>관련 수업 ${otherLessons.length}개 더 보기</summary><ul>${otherLessons.map((ref) => `<li><a href="lesson.html?id=${encodeURIComponent(ref.lesson.id)}">${escape(tracks.find((track) => track.id === ref.lesson.track).name)} · ${escape(ref.lesson.title)}</a></li>`).join("")}</ul></details>` : ""}
    </article>`;
  }

  function render() {
    const keyword = input.value.trim().toLowerCase();
    const matches = allEntries.filter((entry) => entry.search.includes(keyword));
    const visible = matches.filter((entry) => field === "all" || entry.field === field);
    const fieldName = field === "all" ? "전체 분야" : descriptions[field].title;
    count.textContent = `${fieldName} · ${visible.length}개 용어${keyword ? ` · “${input.value.trim()}” 검색 결과` : ""}`;
    categoryNav.innerHTML = [
      { id: "all", title: "전체 분야", count: matches.length },
      ...tracks.map((track) => ({
        id: track.id,
        title: descriptions[track.id].title,
        count: matches.filter((entry) => entry.field === track.id).length
      }))
    ]
      .map(
        (category) =>
          `<button type="button" class="glossary-category" data-field="${category.id}" aria-pressed="${field === category.id}"><span>${escape(category.title)}</span><span class="category-count">${category.count}</span></button>`
      )
      .join("");
    const groups = tracks
      .filter((track) => field === "all" || track.id === field)
      .map((track) => ({
        ...track,
        entries: visible.filter((entry) => entry.field === track.id)
      }))
      .filter((track) => track.entries.length);
    result.innerHTML =
      groups
        .map((track) => {
          const context = descriptions[track.id];
          const topics = lessons
            .filter((lesson) => lesson.track === track.id)
            .map((lesson) => ({
              ...lesson,
              terms: track.entries.filter((entry) => entry.topic === lesson.id)
            }))
            .filter((topic) => topic.terms.length);
          const topicLinks = topics
            .map(
              (topic) =>
                `<a href="#terms-${topic.id}">${escape(topic.title)} <span>${topic.terms.length}</span></a>`
            )
            .join("");
          const topicMarkup = topics
            .map(
              (topic) =>
                `<section class="glossary-topic" id="terms-${topic.id}"><h3 class="glossary-topic-title">${escape(topic.title)}<span>${topic.terms.length}개 용어</span></h3>${topic.terms.map(entryMarkup).join("")}</section>`
            )
            .join("");
          return `<details class="glossary-group" ${field !== "all" || keyword ? "open" : ""}>
        <summary><h2 class="glossary-summary-heading"><span><span class="glossary-group-title">${escape(context.title)}</span><span class="glossary-group-files">${escape(context.files)}</span></span><span class="group-count">${track.entries.length}개 용어 <span class="group-chevron" aria-hidden="true">⌄</span></span></h2></summary>
        <div class="glossary-group-body"><p class="glossary-use"><strong>언제 쓰나요?</strong>${escape(context.use)}</p><nav class="glossary-topic-nav" aria-label="${escape(context.title)} 세부 사용처">${topicLinks}</nav>${topicMarkup}</div>
      </details>`;
        })
        .join("") ||
      `<div class="empty-state"><p>이 분야에서 일치하는 용어를 찾지 못했습니다.</p><p>검색어를 줄이거나 ‘전체 분야’에서 다시 찾아보세요.</p></div>`;
    const next = new URLSearchParams();
    if (field !== "all") next.set("track", field);
    if (input.value.trim()) next.set("q", input.value.trim());
    try {
      history.replaceState(null, "", location.pathname + (next.size ? "?" + next : ""));
    } catch {
      /* Local file browsing may restrict history changes. */
    }
  }
  categoryNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-field]");
    if (!button) return;
    field = button.dataset.field;
    render();
    categoryNav.querySelector(`[data-field="${field}"]`).focus({ preventScroll: true });
    if (event.detail > 0 && matchMedia("(max-width: 800px)").matches) {
      document
        .querySelector(".glossary-results")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  input.addEventListener("input", render);
  document.getElementById("glossary-reset").addEventListener("click", () => {
    input.value = "";
    field = "all";
    render();
    input.focus();
  });
  document.getElementById("glossary-expand").addEventListener("click", () => {
    result.querySelectorAll(".glossary-group").forEach((group) => {
      group.open = true;
    });
  });
  document.getElementById("glossary-collapse").addEventListener("click", () => {
    result.querySelectorAll(".glossary-group").forEach((group) => {
      group.open = false;
    });
  });
  render();
})();
