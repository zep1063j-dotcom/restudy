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
  const focusedNotes = window.GLOSSARY_NOTES || {};
  const aliases = {
    state: ["useState", "스테이트", "상태"],
    props: ["프롭스", "프롭"],
    "effect와 의존성 배열": ["useEffect", "이펙트"],
    "렌더와 커밋": ["렌더링", "render", "커밋과정"],
    "배열 구조분해": ["배열구조분해", "array destructuring"],
    객체: ["object"],
    배열: ["array"],
    함수: ["function"],
    반복문: ["for", "loop"],
    "캐스케이딩과 우선순위": ["specificity"],
    "박스 모델": ["box model"],
    이벤트: ["event"],
    "단방향 데이터 흐름": ["one-way data flow", "단방향데이터흐름"]
  };
  aliases["커밋"] = ["commit", "git commit"];
  aliases[".gitignore"] = ["gitignore"];
  const normalized = (value) => value.toLowerCase().replace(/\s+/g, "");
  let activeKeyword = "";
  let visibleCount = 0;
  function termRank(entry, keyword) {
    const needle = normalized(keyword);
    if (normalized(entry.term) === needle) return 0;
    if (normalized(entry.term).includes(needle)) return 1;
    if ((aliases[entry.key] || []).some((alias) => normalized(alias).includes(needle)))
      return 2;
    return 3;
  }
  function detailFor(entry) {
    const custom = focusedNotes[entry.key];
    const lesson = entry.references[0].lesson;
    const tokens = entry.term
      .toLowerCase()
      .split(/[ /·와과]+/)
      .filter((token) => token.length > 1);
    const sections = lesson.sections
      .map((section, index) => ({
        ...section,
        index,
        score: tokens.filter((token) =>
          (section.title + " " + section.body).toLowerCase().includes(token)
        ).length
      }))
      .sort((a, b) => b.score - a.score || a.index - b.index);
    return {
      lesson,
      code: custom?.code || lesson.example,
      mode: custom?.mode || lesson.mode,
      explain: custom?.explain || sections.slice(0, 2).map((section) => section.body),
      flow: custom?.flow || lesson.trace.map(([title, body]) => `${title}: ${body}`),
      result: custom?.result || lesson.checks.join(" "),
      edit: custom?.edit || lesson.task,
      warning:
        custom?.warning ||
        lesson.errors.map(([title, body]) => `${title}: ${body}`).join(" "),
      focused: !!custom
    };
  }
  function detailMarkup(entry) {
    const detail = detailFor(entry);
    const environments = {
      html: "HTML · 브라우저에서 표시하는 예제",
      console: "JavaScript · 콘솔 코드",
      jsx: "React · 준비된 React 실행 환경의 컴포넌트",
      node: "Node.js · 파일로 저장해 터미널에서 실행",
      reference: "파일·명령 구문 · 실행 위치와 순서를 확인하세요"
    };
    const otherMeanings = [
      ...new Map(
        entry.references
          .filter((ref) => ref.meaning !== entry.meaning)
          .map((ref) => [ref.meaning, ref])
      ).values()
    ];
    return `<div class="term-reading"><h5>${detail.focused ? "이 용어를 코드에서 읽는 방법" : "이 용어가 쓰이는 수업의 문맥"}</h5>${detail.explain.map((paragraph) => `<p>${rich(paragraph)}</p>`).join("")}${otherMeanings.length ? `<details class="term-context-variants"><summary>다른 사용 문맥도 확인하기</summary><ul>${otherMeanings.map((ref) => `<li><strong>${escape(ref.lesson.title)}</strong><p>${rich(ref.meaning)}</p></li>`).join("")}</ul></details>` : ""}</div>
      <section class="term-example"><div class="term-example-heading"><h5>${detail.focused ? "용어에 집중한 예시 구문" : "함께 읽는 전체 예제"}</h5><button type="button" class="secondary term-copy" data-copy-term="${escape(entry.key)}" aria-label="${escape(entry.term)} 예제 코드 복사">코드 복사</button></div><p class="term-environment">${escape(environments[detail.mode] || environments.reference)}</p><pre class="term-code" tabindex="0"><code>${escape(detail.code)}</code></pre>${detail.focused ? "" : `<p class="subtle">${escape(detail.lesson.title)} 수업에서 가져온 문맥 예제입니다. 위 정의와 아래 흐름을 함께 읽으세요.</p>`}</section>
      <section class="term-flow"><h5>어떤 순서로 실행되나요?</h5><ol>${detail.flow.map((step) => `<li>${rich(step)}</li>`).join("")}</ol></section>
      <div class="term-result"><h5>예상 결과 · 확인할 동작</h5><p>${rich(detail.result)}</p></div>
      <div class="term-edit"><h5>직접 바꿔 보세요</h5><p>${rich(detail.edit)}</p></div>
      <div class="term-pitfall"><h5>헷갈리기 쉬운 부분</h5><p>${rich(detail.warning)}</p></div>
      <p class="term-continue"><a href="lesson.html?id=${encodeURIComponent(detail.lesson.id)}">${["html", "console", "jsx"].includes(detail.lesson.mode) ? "수정하며 실행할 수 있는 관련 수업" : "파일과 실행 순서를 다루는 관련 수업"} · ${escape(detail.lesson.title)} ↗</a></p>`;
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
      <details class="term-detail" data-term="${escape(entry.key)}" ${activeKeyword && (visibleCount <= 5 || termRank(entry, activeKeyword) === 0) ? "open" : ""}><summary>자세한 설명 · 예시 구문 · 수정 방법</summary><div class="term-detail-body">${activeKeyword && (visibleCount <= 5 || termRank(entry, activeKeyword) === 0) ? detailMarkup(entry) : ""}</div></details>
      ${otherLessons.length ? `<details class="term-related"><summary>관련 수업 ${otherLessons.length}개 더 보기</summary><ul>${otherLessons.map((ref) => `<li><a href="lesson.html?id=${encodeURIComponent(ref.lesson.id)}">${escape(tracks.find((track) => track.id === ref.lesson.track).name)} · ${escape(ref.lesson.title)}</a></li>`).join("")}</ul></details>` : ""}
    </article>`;
  }

  function render() {
    const keyword = input.value.trim().toLowerCase();
    activeKeyword = keyword;
    const namedMatches = keyword
      ? allEntries.filter((entry) => termRank(entry, keyword) < 3)
      : [];
    const matches = (
      namedMatches.length
        ? namedMatches
        : allEntries.filter((entry) => {
            const custom = focusedNotes[entry.key];
            const haystack = [
              entry.search,
              ...(custom?.explain || []),
              custom?.code || ""
            ].join(" ");
            return normalized(haystack).includes(normalized(keyword));
          })
    ).sort(
      (a, b) =>
        (keyword ? termRank(a, keyword) - termRank(b, keyword) : 0) ||
        a.term.localeCompare(b.term, "ko")
    );
    const visible = matches.filter((entry) => field === "all" || entry.field === field);
    visibleCount = visible.length;
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
      `<div class="empty-state"><p>이 분야에서 일치하는 용어를 찾지 못했습니다.</p><p>검색어를 줄이거나 ‘전체 분야’에서 다시 찾아보세요.</p><p><a href="curriculum.html?q=${encodeURIComponent(input.value.trim())}">이 검색어로 전체 수업에서도 찾아보기 →</a></p></div>`;
    const next = new URLSearchParams();
    if (field !== "all") next.set("track", field);
    if (input.value.trim()) next.set("q", input.value.trim());
    try {
      history.replaceState(null, "", location.pathname + (next.size ? "?" + next : ""));
    } catch {
      /* Local file browsing may restrict history changes. */
    }
  }
  result.addEventListener(
    "toggle",
    (event) => {
      const panel = event.target;
      if (!panel.matches(".term-detail") || !panel.open) return;
      const body = panel.querySelector(".term-detail-body");
      if (!body.hasChildNodes())
        body.innerHTML = detailMarkup(entries.get(panel.dataset.term));
    },
    true
  );
  result.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-term]");
    if (!button) return;
    const code = detailFor(entries.get(button.dataset.copyTerm)).code;
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = "복사했습니다";
    } catch {
      button.textContent = "코드를 선택해 복사해 주세요";
    }
    setTimeout(() => {
      button.textContent = "코드 복사";
    }, 2000);
  });
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
