(() => {
  "use strict";
  if (document.body.dataset.page !== "glossary" || !window.ACADEMY) return;

  const { lessons, tracks } = window.ACADEMY;
  const plainDefinitions = window.PLAIN_DEFINITIONS || {};
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
      plainDefinitions[entry.key] || "",
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
  function paragraphs(text) {
    let parts = [text];
    if (typeof Intl.Segmenter === "function")
      parts = [...new Intl.Segmenter("ko", { granularity: "sentence" }).segment(text)]
        .map((part) => part.segment.trim())
        .filter(Boolean);
    const blocks = [];
    let current = "";
    for (const part of parts) {
      if (current && current.length + part.length > 135) {
        blocks.push(current);
        current = "";
      }
      current += (current ? " " : "") + part;
    }
    if (current) blocks.push(current);
    return blocks.map((block) => `<p>${rich(block)}</p>`).join("");
  }
  const vocabulary = {
    React: "화면을 작은 함수 조각으로 나누어 만들고 바꾸는 JavaScript 도구입니다.",
    컴포넌트:
      "화면의 한 부분을 만드는 함수입니다. 메뉴 카드 한 장을 만드는 함수를 예로 들 수 있습니다.",
    props:
      "컴포넌트가 바깥에서 건네받는 입력값입니다. 이름·숫자·함수도 받을 수 있습니다.",
    state:
      "React가 다음 화면을 만들 때도 기억하는 값입니다. 버튼을 눌렀을 때 바뀌는 수량이 예입니다.",
    useState:
      "기억할 값의 첫 상태를 정하고, 현재 값과 변경 요청 함수를 받는 React 기능입니다.",
    렌더: "React가 함수를 실행해 다음 화면에 무엇을 보여 줄지 계산하는 일입니다.",
    DOM: "브라우저가 HTML을 읽어 만든 문서 구조입니다. 글자와 버튼 같은 요소를 코드로 찾을 수 있습니다.",
    브라우저: "Chrome처럼 웹페이지를 여는 프로그램입니다.",
    함수: "필요할 때 실행할 수 있도록 작업을 묶고 이름을 붙인 코드입니다.",
    변수: "값을 기억해 두고 이름으로 다시 읽을 수 있게 하는 자리입니다.",
    배열: "값들이 순서대로 들어 있는 목록입니다. 첫 항목의 위치 번호는 0입니다.",
    객체: "이름과 값을 짝지어 담은 묶음입니다. 메뉴의 이름과 가격을 한데 담을 수 있습니다.",
    매개변수: "함수가 받을 값에 붙인 이름입니다. 실제로 건네는 값은 인수라고 부릅니다.",
    콜백: "다른 함수에 건네주어 그 함수가 필요할 때 호출하도록 하는 함수입니다.",
    Promise:
      "아직 끝나지 않은 작업의 성공 값이나 실패 이유를 나중에 받을 수 있게 나타낸 객체입니다.",
    서버: "요청을 받아 작업한 뒤 답을 돌려주는 프로그램입니다.",
    요청: "브라우저 등이 서버에 작업이나 데이터를 부탁하는 메시지입니다.",
    응답: "서버가 요청을 처리하고 돌려주는 결과 메시지입니다.",
    요소: "HTML에서 시작 태그, 내용, 끝 태그 등을 한 단위로 읽는 것입니다. 버튼 하나도 요소입니다.",
    속성: "대상의 정보를 이름과 값으로 붙인 항목입니다. HTML 속성과 CSS 속성은 쓰는 위치로 구분합니다.",
    선택자:
      "어떤 HTML 요소를 고를지 정하는 표기입니다. .card는 card라는 class가 붙은 요소를 고릅니다.",
    커밋: "선택한 파일 변경을 설명과 함께 남긴 Git 기록입니다.",
    브랜치: "기록에서 갈라져 따로 작업하는 흐름입니다.",
    로컬: "지금 사용하는 내 컴퓨터 쪽을 뜻합니다.",
    원격: "GitHub처럼 내 컴퓨터 밖의 연결된 저장소 쪽을 뜻합니다."
  };
  const vocabularyOrder = {
    "단방향 데이터 흐름": ["컴포넌트", "props", "state", "함수"],
    "렌더와 커밋": ["컴포넌트", "state", "DOM", "브라우저"],
    "배열 구조분해": ["배열", "변수", "함수", "useState"],
    state: ["React", "함수", "useState", "렌더"]
  };
  function helpfulWords(entry, detail) {
    const text = [
      plainDefinitions[entry.key] || "",
      ...detail.explain,
      ...detail.flow,
      detail.warning
    ]
      .join(" ")
      .toLowerCase();
    const candidates =
      vocabularyOrder[entry.key] ||
      Object.keys(vocabulary).filter(
        (word) =>
          text.includes(word.toLowerCase()) && !entry.key.includes(word.toLowerCase())
      );
    return candidates
      .slice(0, 4)
      .map(
        (word) =>
          `<div><dt>${escape(word)}</dt><dd>${escape(vocabulary[word])}</dd></div>`
      )
      .join("");
  }
  function detailMarkup(entry) {
    const detail = detailFor(entry);
    const tag = visibleCount === 1 ? "h3" : "h5";
    const heading = (text) =>
      `<${tag} class="term-section-title">${escape(text)}</${tag}>`;
    const environments = {
      html: "실행 장소: 브라우저에서 여는 HTML 파일",
      console:
        "실행 장소: 브라우저 개발자 도구의 Console 또는 JavaScript 수업의 실습 칸",
      jsx: "실행 장소: React 프로젝트 또는 이 사이트의 React 실습 칸",
      node: "실행 장소: Node.js가 설치된 컴퓨터의 터미널",
      reference:
        "읽는 방법: 파일 내용이나 터미널 명령의 예입니다. 실행할 위치와 순서를 먼저 확인하세요."
    };
    const words = helpfulWords(entry, detail);
    const otherMeanings = [
      ...new Map(
        entry.references
          .filter((ref) => ref.meaning !== entry.meaning)
          .map((ref) => [ref.meaning, ref])
      ).values()
    ];
    const custom = focusedNotes[entry.key];
    return `${words ? `<details class="term-prerequisites" open><summary>처음 나오는 말부터 알아보기</summary><dl>${words}</dl></details>` : ""}
      <section class="term-reading">${heading("예를 들어 이해해 볼까요?")}${detail.explain.map(paragraphs).join("")}${custom?.overview ? `<ol class="term-concept-map" aria-label="수량 변경의 흐름 요약">${custom.overview.map((step) => `<li>${escape(step)}</li>`).join("")}</ol>` : ""}</section>
      <section class="term-example"><div class="term-example-heading">${heading(detail.focused ? "코드를 함께 읽어 봅시다" : "실제 수업의 코드로 확인하기")}<button type="button" class="secondary term-copy" data-copy-term="${escape(entry.key)}" aria-label="${escape(entry.term)} 예제 코드 복사">코드 복사</button></div><p class="term-environment">${escape(environments[detail.mode] || environments.reference)}</p><pre class="term-code" tabindex="0"><code>${escape(detail.code)}</code></pre>${detail.focused ? "" : `<p class="subtle">‘${escape(detail.lesson.title)}’ 수업의 예제입니다. 이 용어가 다른 코드와 어떻게 이어지는지 함께 살펴보세요.</p>`}</section>
      ${custom?.lines ? `<section class="term-line-reading">${heading("이 줄은 이런 뜻입니다")}<ol>${custom.lines.map(([code, meaning]) => `<li><code>${escape(code)}</code><p>${escape(meaning)}</p></li>`).join("")}</ol></section>` : ""}
      <section class="term-flow">${heading("실행 순서를 따라가 보세요")}<ol>${detail.flow.map((step) => `<li>${rich(step)}</li>`).join("")}</ol></section>
      <section class="term-result">${heading("실행하면 이렇게 됩니다")}${paragraphs(detail.result)}</section>
      <section class="term-edit">${heading("한 곳만 바꿔 보세요")}${paragraphs(detail.edit)}</section>
      <section class="term-pitfall">${heading("여기서 자주 헷갈립니다")}${paragraphs(detail.warning)}</section>
      <details class="term-precise"><summary>조금 더 정확한 정의도 읽기</summary>${paragraphs(entry.meaning)}${otherMeanings.length ? `<div class="term-context-variants"><strong>다른 수업에서의 사용</strong>${otherMeanings.map((ref) => `<p><b>${escape(ref.lesson.title)}</b></p>${paragraphs(ref.meaning)}`).join("")}</div>` : ""}</details>
      <p class="term-continue"><a href="lesson.html?id=${encodeURIComponent(detail.lesson.id)}">관련 수업에서 직접 실행하고 수정하기 ↗</a></p>`;
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
      <p class="term-field-label">${escape(descriptions[entry.field].title)}</p>
      <${visibleCount === 1 ? "h2" : "h4"} class="term-name">${escape(entry.term)}</${visibleCount === 1 ? "h2" : "h4"}>
      <div class="term-meaning"><span class="term-definition-label">쉽게 말하면</span>${paragraphs(plainDefinitions[entry.key] || entry.meaning)}</div>
      <details class="term-detail" data-term="${escape(entry.key)}" ${activeKeyword && (visibleCount <= 5 || termRank(entry, activeKeyword) === 0) ? "open" : ""}><summary>예시와 코드까지 이어서 읽기</summary><div class="term-detail-body">${activeKeyword && (visibleCount <= 5 || termRank(entry, activeKeyword) === 0) ? detailMarkup(entry) : ""}</div></details>
      ${otherLessons.length ? `<details class="term-related"><summary>관련 수업 ${otherLessons.length}개 더 보기</summary><ul>${otherLessons.map((ref) => `<li><a href="lesson.html?id=${encodeURIComponent(ref.lesson.id)}">${escape(tracks.find((track) => track.id === ref.lesson.track).name)} · ${escape(ref.lesson.title)}</a></li>`).join("")}</ul></details>` : ""}
    </article>`;
  }

  const filterDrawer = document.getElementById("glossary-filter-drawer");
  const wideScreen = matchMedia("(min-width: 801px)");
  function syncFilter() {
    if (filterDrawer)
      filterDrawer.open = (wideScreen.matches && visibleCount !== 1) || !activeKeyword;
  }
  wideScreen.addEventListener("change", syncFilter);
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
    document.body.classList.toggle("glossary-searching", !!keyword);
    document.body.classList.toggle("glossary-single-result", visible.length === 1);
    syncFilter();
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
