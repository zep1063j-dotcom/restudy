(() => {
  "use strict";
  const DATA = window.ACADEMY;
  if (!DATA) return;
  const LESSONS = DATA.lessons;
  const TRACKS = DATA.tracks;
  const KEY = "vibe-academy-v2";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (x) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[x]
    );
  const rich = (value) => esc(value).replace(/`([^`]+)`/g, "<code>$1</code>");
  const params = new URLSearchParams(location.search);
  let storageAvailable = true;
  let state = { version: 2, last: "", lessons: {} };
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "null");
    if (
      parsed?.version === 2 &&
      parsed.lessons &&
      typeof parsed.lessons === "object" &&
      !Array.isArray(parsed.lessons)
    )
      state = parsed;
  } catch {
    storageAvailable = false;
  }
  const record = (id) => state.lessons[id] || {};
  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      storageAvailable = true;
      return true;
    } catch {
      storageAvailable = false;
      return false;
    }
  }
  function update(id, data) {
    state.lessons[id] = { ...record(id), ...data, updated: new Date().toISOString() };
    return persist();
  }
  let toastTimer;
  function toast(message) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("visible"), 3800);
  }
  function download(text, filename, type = "text/plain;charset=utf-8") {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast("코드를 복사했습니다.");
    } catch {
      toast(
        "복사가 제한된 환경입니다. 코드 영역을 선택해 직접 복사하거나 파일로 받아 주세요."
      );
    }
  }
  const lessonUrl = (id) => `lesson.html?id=${encodeURIComponent(id)}`;
  const trackName = (id) => TRACKS.find((x) => x.id === id)?.name || id;
  const completed = LESSONS.filter((x) => record(x.id).done).length;
  const trackLessons = (id) => LESSONS.filter((x) => x.track === id);
  $(".menu-toggle")?.addEventListener("click", (event) => {
    const open = $("#site-nav").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  const page = document.body.dataset.page;
  $$("nav#site-nav a").forEach((a) => {
    if (a.getAttribute("href") === `${page}.html`)
      a.setAttribute("aria-current", "page");
  });
  const searchText = (lesson) =>
    [
      lesson.id,
      trackName(lesson.track),
      lesson.title,
      lesson.lead,
      ...lesson.definitions.flat(),
      ...lesson.sections.map((x) => x.body),
      ...lesson.errors.flat(),
      lesson.task
    ]
      .join(" ")
      .toLowerCase();
  function lessonRow(lesson, number) {
    return `<a class="lesson-row" href="${lessonUrl(lesson.id)}"><span>${String(number + 1).padStart(2, "0")}</span><div><h3>${esc(lesson.title)}</h3><p>${esc(lesson.lead)}</p></div><span class="lesson-state">${record(lesson.id).done ? "✓ 학습 완료" : `약 ${lesson.minutes}분`}</span></a>`;
  }
  if (page === "index") {
    $("#home-tracks").innerHTML = TRACKS.map(
      (track, i) =>
        `<a class="track-row" href="curriculum.html?track=${track.id}"><span class="track-index">${String(i).padStart(2, "0")}</span><h3>${esc(track.name)}</h3><p>${esc(track.desc)}</p><span class="track-count">${trackLessons(track.id).length}개 수업</span></a>`
    ).join("");
    if (LESSONS.some((x) => x.id === state.last)) {
      $("#resume-link").href = lessonUrl(state.last);
      $("#resume-link").textContent = "지난 수업 이어 읽기";
    }
    $("#hero-quantity").addEventListener("input", (event) => {
      const qty = Number(event.target.value);
      const valid =
        event.target.value !== "" && Number.isInteger(qty) && qty >= 1 && qty <= 20;
      $("#demo-qty").textContent = valid ? qty : "?";
      $("#hero-total").textContent = valid
        ? `${(4000 * qty).toLocaleString("ko-KR")}원`
        : "1~20개";
    });
  }
  if (page === "curriculum") {
    TRACKS.forEach((track) => $("#track-filter").add(new Option(track.name, track.id)));
    $("#course-search").value = params.get("q") || "";
    $("#track-filter").value = TRACKS.some((t) => t.id === params.get("track"))
      ? params.get("track")
      : "";
    function renderCourses() {
      const query = $("#course-search").value.trim().toLowerCase();
      const track = $("#track-filter").value;
      const matches = LESSONS.filter(
        (x) =>
          (!track || x.track === track) && (!query || searchText(x).includes(query))
      );
      $("#search-count").textContent =
        `${matches.length}개 수업${query ? ` · “${$("#course-search").value.trim()}” 검색` : ""}`;
      $("#curriculum-list").innerHTML =
        TRACKS.map((t) => {
          const list = matches.filter((x) => x.track === t.id);
          if (!list.length) return "";
          return `<section class="course-group"><header><h2>${esc(t.name)}</h2><p>${esc(t.outcome)}</p></header>${list.map((x) => lessonRow(x, trackLessons(t.id).indexOf(x))).join("")}</section>`;
        }).join("") ||
        '<p class="empty-state">맞는 수업이 없습니다. 더 짧은 용어나 다른 분야로 찾아 보세요.</p>';
      const url = new URL(location.href);
      url.search = "";
      if (query) url.searchParams.set("q", $("#course-search").value.trim());
      if (track) url.searchParams.set("track", track);
      try {
        history.replaceState(null, "", url);
      } catch {}
    }
    $("#course-search").addEventListener("input", renderCourses);
    $("#track-filter").addEventListener("change", renderCourses);
    renderCourses();
  }
  function panel(code, label, editable = false) {
    return `<div class="code-panel"><div class="code-toolbar"><span>${esc(label)}</span><div class="toolbar-buttons"><button type="button" data-copy-code>복사</button>${editable ? '<button type="button" id="format-code">들여쓰기 정리</button><button type="button" id="reset-code">시작 코드</button>' : ""}</div></div>${editable ? '<div class="code-body"><pre class="line-numbers" aria-hidden="true" id="line-numbers"></pre><label class="sr-only" for="code-editor">수정할 예제 코드</label><textarea id="code-editor" class="code-editor" spellcheck="false" wrap="off"></textarea></div>' : `<pre class="plain-code"><code>${esc(code)}</code></pre>`}</div>`;
  }
  function renderLesson() {
    const lesson = LESSONS.find((x) => x.id === params.get("id"));
    if (!lesson) {
      $("#lesson-content").innerHTML =
        '<h1>수업을 찾지 못했습니다.</h1><p>주소의 수업 번호를 확인하거나 전체 목록에서 선택해 주세요.</p><a href="curriculum.html">전체 수업으로</a>';
      return;
    }
    const currentIndex = LESSONS.indexOf(lesson);
    state.last = lesson.id;
    persist();
    document.title = `${lesson.title} | 바이브 코더의 개발 노트`;
    $("#lesson-sidebar").innerHTML =
      `<a href="curriculum.html">← 전체 수업</a><button class="sidebar-toggle" type="button" aria-expanded="false">과정 목차 펼치기</button><div class="sidebar-groups">${TRACKS.map(
        (t) =>
          `<details ${t.id === lesson.track ? "open" : ""}><summary>${esc(t.name)}</summary>${trackLessons(
            t.id
          )
            .map(
              (x, i) =>
                `<a href="${lessonUrl(x.id)}" ${x.id === lesson.id ? 'class="active" aria-current="page"' : ""}><span class="done-dot">${record(x.id).done ? "✓" : ""}</span>${String(i + 1).padStart(2, "0")} ${esc(x.title)}</a>`
            )
            .join("")}</details>`
      ).join("")}</div>`;
    $(".sidebar-toggle").addEventListener("click", (event) => {
      const open = $("#lesson-sidebar").classList.toggle("open");
      event.currentTarget.setAttribute("aria-expanded", String(open));
      event.currentTarget.textContent = open ? "과정 목차 접기" : "과정 목차 펼치기";
    });
    const toc = [
      ["understand", "개념 이해"],
      ["definitions", "용어와 정의"],
      ["practice", "코드와 실행"],
      ["trace", "흐름 해설"],
      ["challenge", "직접 수정"],
      ["questions", "이해 확인"],
      ["errors", "오류 해결"],
      ["notes", "내 기록"]
    ];
    const tocLinks = toc.map(([id, title]) => `<a href="#${id}">${title}</a>`).join("");
    $("#lesson-toc").innerHTML = `<p>이 수업에서</p>${tocLinks}`;
    const runnable = ["html", "console", "jsx"].includes(lesson.mode);
    const solution = window.ACADEMY_SOLUTIONS?.[lesson.id];
    let environment = runnable
      ? "이 브라우저에서 수정·실행할 수 있습니다."
      : lesson.mode === "node"
        ? "Node.js에서 실행하는 서버/터미널 코드입니다. 브라우저의 document API를 사용하는 화면 코드와 다릅니다."
        : lesson.mode === "shell"
          ? "터미널 또는 Git 도구에서 확인하는 명령입니다. 이 페이지는 명령을 실행하지 않습니다."
          : "설명용 파일 구조·명령·여러 파일의 코드입니다. 아래 안내의 전제를 확인하고 실제 프로젝트에 적용합니다.";
    if (lesson.mode === "jsx")
      environment +=
        " JSX 실습은 React를 준비해 두었습니다. 실제 프로젝트의 import와 빌드는 React 마지막 수업에서 다룹니다.";
    $("#lesson-content").innerHTML =
      `<header><p class="lesson-meta">${esc(trackName(lesson.track))} / ${String(trackLessons(lesson.track).indexOf(lesson) + 1).padStart(2, "0")} · 읽기와 실습 약 ${lesson.minutes}분</p><h1>${esc(lesson.title)}</h1><p class="lesson-lead">${esc(lesson.lead)}</p><div class="lesson-actions"><button id="mark-complete" type="button"></button><div class="reading-tools"><button id="font-toggle" type="button">글자 크게</button><button id="focus-toggle" type="button">본문 집중</button></div></div><div class="learning-outcome"><strong>이 수업을 마치면</strong>${esc(lesson.checks.join(" "))}</div><details class="mobile-toc"><summary>이 수업 안에서 이동</summary>${tocLinks}</details></header>
    <section id="understand" class="lesson-chapter"><span class="chapter-number">01 / UNDERSTAND</span><h2>개념을 먼저 이해합니다</h2>${lesson.sections.map((s) => `<h3>${esc(s.title)}</h3><p>${rich(s.body)}</p>`).join("")}</section>
    <section id="definitions" class="lesson-chapter"><span class="chapter-number">02 / DEFINITIONS</span><h2>처음 보는 용어의 정확한 뜻</h2><dl class="definition-list">${lesson.definitions.map(([term, meaning]) => `<div><dt>${esc(term)}</dt><dd>${rich(meaning)}</dd></div>`).join("")}</dl><p class="subtle"><a href="glossary.html">전체 용어 사전에서 더 찾아보기</a></p></section>
    <section id="practice" class="lesson-chapter"><span class="chapter-number">03 / PRACTICE</span><h2>코드를 읽고 실행해 봅니다</h2><p class="${runnable ? "code-hint" : "runtime-notice"}">${esc(environment)}</p><p class="code-hint">${runnable ? "실습 준비: 아래 파일 이름과 코드를 확인하세요. HTML은 문서 본문 또는 전체 문서, JavaScript는 콘솔 코드, React는 App 컴포넌트입니다. 이 편집기가 필요한 공통 실행 틀을 제공합니다. 내 파일로 만들 때에는 “실행 HTML 받기”를 사용하세요." : "실습 준비: 프로젝트를 받을 수 있는 실무 프로젝트 페이지에서 Node 예제 묶음과 README를 확인하세요. 설명용 조각을 주변 코드 없이 단독 실행하지 않습니다."}</p>
    ${panel(lesson.example, lesson.filename, runnable)}${lesson.extra.map((x) => `<h3>${esc(x.label)}</h3>${panel(x.code, x.lang)}`).join("")}
    ${runnable ? '<div class="run-bar"><button id="run-code" type="button">코드 실행하기</button><button id="download-code" class="secondary" type="button">실행 HTML 받기</button><span id="save-status" class="save-status" role="status"></span></div><div class="preview-frame"><div class="preview-head"><b>실제 실행 결과</b><div><button id="narrow-preview" type="button">360px</button> <button id="wide-preview" type="button">800px</button> <button id="fit-preview" type="button">화면에 맞춤</button></div></div><div id="runtime-title" class="runtime-title"></div><div class="preview-scroll"><iframe id="preview" title="예제 실행 화면" sandbox="allow-scripts allow-forms allow-modals allow-same-origin"></iframe></div></div><h4 class="console-label">콘솔과 오류</h4><pre id="console-output" class="console-output" aria-live="polite"></pre><p class="code-hint">수정 내용은 이 브라우저의 초안에만 저장됩니다. 실행 HTML을 받으면 그때의 코드를 파일로 보관할 수 있습니다.</p>' : '<p class="subtle"><a class="button secondary" href="projects.html">실행 파일과 설치 순서 보기</a> / <a href="setup.html">설치·폴더·터미널이 처음이라면</a></p>'}</section>
    <section id="trace" class="lesson-chapter"><span class="chapter-number">04 / READ THE FLOW</span><h2>어떤 순서로 동작할까요?</h2>${lesson.trace.map(([label, text], i) => `<div class="trace-step"><b>${i + 1}. ${esc(label)}</b><p>${rich(text)}</p></div>`).join("")}</section>
    <section id="challenge" class="lesson-chapter"><span class="chapter-number">05 / MAKE A CHANGE</span><h2>한 부분을 직접 수정합니다</h2><div class="task-card"><h3>수정 과제</h3><p>${rich(lesson.task)}</p>${solution ? `<ol>${solution.steps.map((x) => `<li>${rich(x)}</li>`).join("")}</ol>` : ""}<h4>완료 기준</h4>${lesson.checks.map((x, i) => `<label class="task-check"><input type="checkbox" data-check="${i}" ${record(lesson.id).checks?.[i] ? "checked" : ""}><span>${esc(x)}</span></label>`).join("")}${solution ? `<details class="answer-details"><summary>직접 해 본 뒤 정답과 비교하기</summary><p>${rich(solution.explanation)}</p>${solution.code ? panel(solution.code, "수정한 코드 예시") : ""}<p><b>확인할 결과:</b> ${esc(solution.expected)}</p></details>` : ""}</div></section>
    <section id="questions" class="lesson-chapter"><span class="chapter-number">06 / CHECK YOUR UNDERSTANDING</span><h2>내 말로 설명해 봅니다</h2>${lesson.quiz.map(([question, answer], i) => `<div class="question"><p><b>Q${i + 1}.</b> ${rich(question)}</p><details><summary>해설 보기</summary><p>${rich(answer)}</p></details></div>`).join("")}</section>
    <section id="errors" class="lesson-chapter"><span class="chapter-number">07 / TROUBLESHOOT</span><h2>이럴 때는 무엇을 확인할까요?</h2>${lesson.errors.map(([symptom, explanation]) => `<div class="error-item"><h3>${esc(symptom)}</h3><p>${rich(explanation)}</p></div>`).join("")}<h3>AI에게 수정 도움을 요청할 때</h3><pre class="ai-request">${esc(`목표: ${lesson.task}\n현재 코드에서 이 동작이 시작되는 위치와 바뀌는 값을 먼저 설명해 줘.\n필요한 파일만 수정하고, 수정한 이유를 알려 줘.\n정상 입력·경계값·실패 상황의 확인 방법을 함께 적어 줘.\n모르는 실행 환경은 추측하지 말고 확인할 항목을 알려 줘.`)}</pre></section>
    <section id="notes" class="lesson-chapter"><span class="chapter-number">08 / YOUR NOTES</span><h2>내 말로 남기는 학습 기록</h2><label for="lesson-note">입력은 무엇이고, 어떤 코드가 실행되며, 결과는 어디에 보이나요?</label><textarea id="lesson-note" class="note-text" placeholder="예: 담기 클릭이 부모 함수를 부르고 수량 state를 바꾼다."></textarea><p id="note-status" class="subtle" role="status"></p><p class="subtle">기록은 브라우저에 저장됩니다. <a href="progress.html">내 학습에서 파일로 백업</a>할 수 있습니다.</p><details><summary class="subtle">공식 참고 문서</summary><ul class="sources-list">${lesson.sources.map((url) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(url)}</a></li>`).join("")}</ul><p class="subtle">설명과 연습 코드는 이 과정에 맞춰 작성·재구성했습니다. 원문을 그대로 옮긴 교재가 아니며, 실행 환경과 적용 범위를 구분합니다.</p></details></section>
    <nav class="lesson-pagination" aria-label="이전 다음 수업">${currentIndex ? `<a href="${lessonUrl(LESSONS[currentIndex - 1].id)}"><span>이전 수업</span>${esc(LESSONS[currentIndex - 1].title)}</a>` : '<a href="curriculum.html"><span>전체 과정</span>커리큘럼 보기</a>'}${currentIndex < LESSONS.length - 1 ? `<a href="${lessonUrl(LESSONS[currentIndex + 1].id)}"><span>다음 수업</span>${esc(LESSONS[currentIndex + 1].title)}</a>` : '<a href="projects.html"><span>다음 단계</span>종합 프로젝트로 확인하기</a>'}</nav>`;
    function completeLabel() {
      $("#mark-complete").textContent = record(lesson.id).done
        ? "✓ 학습 완료 · 해제하기"
        : "이 수업 학습 완료 표시";
    }
    completeLabel();
    $("#mark-complete").addEventListener("click", () => {
      const saved = update(lesson.id, { done: !record(lesson.id).done });
      completeLabel();
      toast(
        saved
          ? "학습 기록을 저장했습니다."
          : "이 환경에서는 저장이 제한됩니다. 기록을 파일로 백업해 주세요."
      );
    });
    $("#font-toggle").addEventListener("click", (event) => {
      const big = document.body.classList.toggle("reading-large");
      event.currentTarget.textContent = big ? "기본 글자 크기" : "글자 크게";
    });
    $("#focus-toggle").addEventListener("click", (event) => {
      const focus = document.body.classList.toggle("reading-focus");
      event.currentTarget.textContent = focus ? "목차와 함께 보기" : "본문 집중";
    });
    $$("[data-check]").forEach((input) =>
      input.addEventListener("change", () => {
        const checks = {
          ...(record(lesson.id).checks || {}),
          [input.dataset.check]: input.checked
        };
        if (!update(lesson.id, { checks })) toast("브라우저 저장이 제한됩니다.");
      })
    );
    $("#lesson-note").value = record(lesson.id).note || "";
    $("#lesson-note").addEventListener("input", (event) => {
      $("#note-status").textContent = update(lesson.id, { note: event.target.value })
        ? "내 브라우저에 메모 저장됨"
        : "저장이 제한됩니다. 파일 백업을 이용해 주세요.";
    });
    if (runnable) initEditor(lesson);
    $$("[data-copy-code]").forEach((button) =>
      button.addEventListener("click", () => {
        const panel = button.closest(".code-panel");
        copy(
          panel.querySelector("textarea")?.value ??
            panel.querySelector("pre code")?.textContent ??
            ""
        );
      })
    );
  }
  function initEditor(lesson) {
    const editor = $("#code-editor");
    const frame = $("#preview");
    const output = $("#console-output");
    const status = $("#save-status");
    editor.value =
      typeof record(lesson.id).draft === "string"
        ? record(lesson.id).draft
        : lesson.example;
    status.textContent =
      record(lesson.id).draft !== undefined
        ? "지난번 코드 초안을 복원했습니다."
        : "시작 코드입니다. 수정 전 예상 결과를 먼저 생각해 보세요.";
    let token = "";
    let messages = [];
    function lineNumbers() {
      const count = editor.value.split("\n").length;
      $("#line-numbers").textContent = Array.from(
        { length: count },
        (_, i) => i + 1
      ).join("\n");
    }
    lineNumbers();
    if (window.ResizeObserver)
      new ResizeObserver(() => {
        $("#line-numbers").style.height = editor.offsetHeight + "px";
      }).observe(editor);
    editor.addEventListener("scroll", () => {
      $("#line-numbers").scrollTop = editor.scrollTop;
    });
    editor.addEventListener("input", () => {
      lineNumbers();
      status.textContent = update(lesson.id, { draft: editor.value })
        ? "코드 초안 저장됨"
        : "저장 제한 · 파일로 보관해 주세요";
    });
    editor.addEventListener("keydown", (event) => {
      if (event.key === "Tab" && !event.shiftKey) {
        event.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.setRangeText("  ", start, end, "end");
        editor.dispatchEvent(new Event("input"));
      }
    });
    const appendLog = (text) => {
      messages.push(String(text).slice(0, 5000));
      messages = messages.slice(-120);
      output.textContent = messages.join("\n");
    };
    function bridge(codeToken) {
      return `<script>(function(){const token=${JSON.stringify(codeToken)};function send(type,text){parent.postMessage({academy:true,token,type,text},'*');}function str(x){try{return typeof x==='string'?x:JSON.stringify(x,null,2);}catch{return String(x);}}['log','warn','error'].forEach(type=>{const old=console[type].bind(console);console[type]=(...args)=>{if(!String(args[0]).includes('in-browser Babel transformer'))send('log',type+': '+args.map(str).join(' '));old(...args);};});document.addEventListener('click',event=>{const a=event.target.closest('a[href^="#"]');if(!a)return;const target=document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));if(target){event.preventDefault();target.scrollIntoView();}});window.addEventListener('error',e=>send('log','오류: '+e.message));window.addEventListener('unhandledrejection',e=>send('log','비동기 오류: '+str(e.reason?.message||e.reason)));window.addEventListener('load',()=>{const report=()=>send('title',document.title);report();new MutationObserver(report).observe(document.head,{childList:true,subtree:true,characterData:true});});})();<\/script>`;
    }
    function htmlFor(code, includeBridge = false) {
      const base = new URL(".", location.href).href;
      const vendor = new URL("assets/vendor/", base).href;
      const style = `<style>body{font-family:system-ui,sans-serif;line-height:1.8;padding:24px;color:#17382b;margin:0;background:#fff}button{padding:9px 15px;margin:7px 7px 7px 0;font:inherit;cursor:pointer;color:white;background:#24745b;border:0;border-radius:7px}input,select{font:inherit;padding:8px;max-width:100%;box-sizing:border-box}label{display:block;margin:10px 0}article{padding:18px;border:1px solid #d7e1d6;border-radius:10px;margin:14px 0}pre{white-space:pre-wrap;overflow-wrap:anywhere}h1{font-size:27px}h2{font-size:21px}</style>`;
      let body = code;
      if (lesson.mode === "console")
        body = `<h1>JavaScript 콘솔 예제</h1><p>아래 학습 페이지의 콘솔에 출력 결과를 표시합니다.</p><script>${code.replace(/<\/script/gi, "<\\/script")}<\/script>`;
      if (lesson.mode === "jsx")
        body = `<div id="root"></div><script src="${vendor}react-local.js"><\/script><script src="${vendor}babel.min.js"><\/script><script src="${vendor}babel-config.js"><\/script><script type="text/babel" data-presets="studyReact">${code.replace(/<\/script/gi, "<\\/script")}\nReactDOM.createRoot(document.getElementById('root')).render(<App />);<\/script>`;
      const addon = includeBridge ? bridge(token) : "";
      if (lesson.mode === "html" && /<!doctype|<html\b/i.test(code))
        return code.replace(/<head\b[^>]*>/i, (match) => match + addon + style);
      return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(lesson.title)}</title>${addon}${style}</head><body>${body}</body></html>`;
    }
    window.addEventListener("message", (event) => {
      if (
        event.source !== frame.contentWindow ||
        event.data?.academy !== true ||
        event.data.token !== token
      )
        return;
      if (event.data.type === "log") appendLog(event.data.text);
      if (event.data.type === "title")
        $("#runtime-title").textContent = `예제 문서 제목: ${event.data.text}`;
    });
    function run() {
      token = Math.random().toString(36).slice(2);
      messages = [];
      output.textContent =
        "실행했습니다. console.log 또는 오류가 있으면 여기에 표시됩니다.";
      $("#runtime-title").textContent = "예제 준비 중…";
      frame.srcdoc = htmlFor(editor.value, true);
    }
    $("#run-code").addEventListener("click", run);
    $("#reset-code").addEventListener("click", () => {
      if (
        editor.value !== lesson.example &&
        !confirm(
          "현재 코드를 시작 코드로 바꿀까요? 필요한 수정은 먼저 파일로 받아 보관하세요."
        )
      )
        return;
      editor.value = lesson.example;
      update(lesson.id, { draft: editor.value });
      lineNumbers();
      status.textContent = "시작 코드로 되돌렸습니다.";
      run();
    });
    $("#format-code").addEventListener("click", async (event) => {
      if (!window.prettier?.format || !window.prettierPlugins) {
        status.textContent =
          "코드 정리 도구를 준비하고 있습니다. 잠시 뒤 다시 눌러 주세요.";
        return;
      }
      const button = event.currentTarget;
      button.disabled = true;
      const before = editor.value;
      try {
        const parser = lesson.mode === "html" ? "html" : "babel";
        const formatted = await window.prettier.format(before, {
          parser,
          plugins: Object.values(window.prettierPlugins || {}),
          tabWidth: 2,
          useTabs: false,
          printWidth: 68,
          trailingComma: "none",
          arrowParens: "always",
          htmlWhitespaceSensitivity: "css"
        });
        if (editor.value !== before) {
          status.textContent = "정리 중 코드가 바뀌었습니다. 다시 눌러 주세요.";
          return;
        }
        editor.value = formatted;
        lineNumbers();
        const saved = update(lesson.id, { draft: formatted });
        status.textContent = `두 칸 들여쓰기 정리됨${saved ? " · 초안 저장됨" : " · 저장 제한"}`;
      } catch (error) {
        status.textContent = "정리하지 못했습니다. 태그·괄호·따옴표의 짝을 확인하세요.";
        appendLog(`문법 확인: ${error.message}`);
      } finally {
        button.disabled = false;
      }
    });
    $("#download-code").addEventListener("click", () => {
      // A real file is generated. Console lessons also show their log in the standalone file.
      let source = htmlFor(editor.value, false);
      if (lesson.mode === "console") {
        const capture = `<pre id="standalone-log"></pre><script>console.log=(...args)=>{document.getElementById('standalone-log').textContent+=args.map(x=>typeof x==='string'?x:JSON.stringify(x,null,2)).join(' ')+'\\n';};<\/script>`;
        source = source
          .replace("<body>", "<body>" + capture)
          .replace(
            "아래 학습 페이지의 콘솔에 출력 결과를 표시합니다.",
            "이 파일의 출력 영역에 결과를 표시합니다."
          );
      }
      download(source, `${lesson.id}-연습.html`, "text/html;charset=utf-8");
      if (lesson.mode === "jsx")
        toast(
          "React 실행 파일은 현재 사이트의 라이브러리 주소를 사용합니다. 완전한 로컬 프로젝트는 실무 프로젝트에서 받으세요."
        );
    });
    $("#narrow-preview").addEventListener("click", () => {
      frame.style.width = "360px";
    });
    $("#wide-preview").addEventListener("click", () => {
      frame.style.width = "800px";
    });
    $("#fit-preview").addEventListener("click", () => {
      frame.style.width = "100%";
    });
    run();
  }
  if (page === "lesson") renderLesson();
  if (page === "troubleshoot") {
    const entries = new Map();
    for (const lesson of LESSONS)
      for (const [title, body] of lesson.errors) {
        if (!entries.has(title)) entries.set(title, { title, body, lessons: [] });
        entries.get(title).lessons.push(lesson);
      }
    function renderErrors() {
      const q = $("#error-search").value.trim().toLowerCase();
      const found = [...entries.values()].filter((x) =>
        `${x.title} ${x.body} ${x.lessons.map((y) => y.title).join(" ")}`
          .toLowerCase()
          .includes(q)
      );
      $("#error-list").innerHTML =
        `<section class="project-article"><h2>문제를 좁히는 기본 순서</h2><ol><li>어느 주소·입력·클릭에서 생기는지 재현합니다.</li><li>Console의 오류 문구·파일·위치와 Network의 요청·상태·응답을 확인합니다.</li><li>마지막 변경과 정상 동작했던 기준을 비교합니다.</li><li>작게 수정하고 정상·경계·실패 상황을 다시 확인합니다.</li></ol></section>${found.map((x) => `<section class="error-item"><h2>${esc(x.title)}</h2><p>${rich(x.body)}</p><p>${x.lessons.map((l) => `<a href="${lessonUrl(l.id)}">${esc(l.title)}</a>`).join(" / ")}</p></section>`).join("") || "<p>다른 오류 문구로 검색해 보세요.</p>"}`;
    }
    $("#error-search").addEventListener("input", renderErrors);
    renderErrors();
  }
  if (page === "projects") renderProjects();
  function renderProjects() {
    $("#projects-content").innerHTML = `
    <section class="project-article"><p class="eyebrow">PROJECT 01 / BROWSER</p><h2>카페 안내와 입력 화면</h2><p>HTML·CSS·일반 JavaScript가 어떻게 연결되는지 연습합니다. 세 파일을 같은 폴더에 두고 index.html을 열면 됩니다. 정적 화면이며 실제 서버 주문을 저장하지 않습니다.</p><div class="project-columns"><div><h3>파일과 실행</h3><pre class="plain-code"><code>browser-lab/\n  index.html\n  style.css\n  app.js\n\nindex.html 더블클릭</code></pre><a class="button" href="downloads/browser-lab.zip" download>브라우저 프로젝트 받기</a></div><div><h3>수정 과제</h3><ol><li>가게 이름과 안내 문구를 바꿉니다.</li><li>600px 이상에서 메뉴를 두 열로 배치합니다.</li><li>수량 검증과 예상 총액을 연결합니다.</li><li>빈 값·0·20·21을 시험합니다.</li></ol><h3>완료 기준</h3><p>화면과 로직을 서로 다른 파일에서 찾고, 정상·오류 결과를 설명할 수 있습니다.</p><a href="lesson.html?id=html-01">관련 수업 시작</a></div></div></section>
    <section class="project-article"><p class="eyebrow">PROJECT 02 / NODE.JS</p><h2>서버 API와 파일 저장</h2><p>외부 패키지 없이 실행하는 로컬 학습용 Node 서버입니다. Node.js 22 이상이 필요합니다. 없는 메뉴·잘못된 수량·큰 본문을 검사하고 서버가 기준 가격으로 총액을 계산합니다.</p><div class="project-columns"><div><h3>설치와 실행 순서</h3><ol><li>공식 Node.js의 지원되는 LTS를 설치합니다. <a href="https://nodejs.org/en/download" target="_blank" rel="noopener">공식 설치 페이지</a></li><li>압축을 풀고 코드 편집기로 cafe-lab 폴더를 엽니다.</li><li>그 폴더의 터미널에서 아래 명령을 실행합니다.</li><li>표시된 주소를 브라우저로 엽니다. 종료는 Ctrl+C입니다.</li></ol><pre class="plain-code"><code>node --version\nnode server.mjs\n\nhttp://127.0.0.1:4177</code></pre><a class="button" href="downloads/cafe-lab.zip" download>전체 주문 앱 받기</a><p><a href="downloads/node-examples.zip" download>Node 레슨별 실행 파일도 받기</a></p></div><div><h3>파일에서 찾을 역할</h3><pre class="plain-code"><code>server.mjs      경로·검증·가격·저장\npublic/\n  index.html    일반 JS 화면\n  app.js        요청·표시\n  react.html    React 버전 화면\n  react-app.jsx React 상태·컴포넌트\ndata/           실행 중 저장 파일</code></pre><h3>수정 과제와 확인 결과</h3><ol><li>서버의 커피 기준 가격을 4200원으로 바꾸고 서버를 다시 켭니다.</li><li>커피 2개 주문이 8400원인지 확인합니다.</li><li>새로고침과 서버 재시작 뒤 주문 목록을 확인합니다.</li><li>API에 없는 메뉴·수량 0을 보냈을 때 거부하는지 확인합니다.</li></ol></div></div><p class="project-scope">로컬 단일 프로세스 연습입니다. 인증·실제 결제·다중 서버·운영 백업·개인정보 처리를 구현한 상용 서비스가 아닙니다. 저장 파일은 기본 예제 주문 데이터만 사용합니다.</p><a href="lesson.html?id=node-07">전체 흐름 해설 읽기</a></section>
    <section class="project-article"><p class="eyebrow">PROJECT 03 / REACT</p><h2>Vite에서 실행하고 빌드하는 React 앱</h2><p>이 사이트의 설치 없는 실습과 달리 실제 src 파일·import·package.json을 가진 프로젝트입니다. 프로젝트 README와 engines에 맞는 Node를 사용합니다. 예제는 메뉴 검색·수량 변경·총액 계산·빈 목록을 포함한 브라우저 앱입니다.</p><div class="project-columns"><div><h3>실행과 빌드</h3><pre class="plain-code"><code>node --version\nnpm install\nnpm run dev\n\n# 변경 뒤\nnpm run build\nnpm run preview</code></pre><a class="button" href="downloads/react-lab.zip" download>React 프로젝트 받기</a></div><div><h3>실습 순서</h3><ol><li>src/App.jsx에서 메뉴 데이터와 state를 찾습니다.</li><li>가격을 바꾸고 총액에 반영되는지 확인합니다.</li><li>검색어에 맞는 항목만 보이게 합니다.</li><li>검색 결과 없음과 초기화를 확인합니다.</li><li>빌드한 화면에서도 같은 동작인지 확인합니다.</li></ol><p class="subtle">실제 주문 저장 API는 별도 cafe-lab 프로젝트에서 확인합니다.</p><a href="lesson.html?id=react-08">환경과 빌드 해설 읽기</a></div></div></section>
    <section class="project-article"><p class="eyebrow">COMPLETION / 내 결과로 확인하기</p><h2>완주 기준</h2><ol><li>파일의 역할과 브라우저·서버 실행 장소를 설명할 수 있습니다.</li><li>문구·배치·계산·API 중 고칠 위치를 구분합니다.</li><li>콜백·state·요청·저장까지 실행 경로를 따라갑니다.</li><li>정상 입력뿐 아니라 빈 값·경계·실패를 시험합니다.</li><li>diff로 변경을 검토하고 커밋·push·배포를 구분합니다.</li><li>운영 서비스에 적용할 때 별도 검토가 필요한 범위를 판단합니다.</li></ol><p>이 기준은 학습을 점검하는 질문입니다. 본인의 실행 결과와 메모를 바탕으로 판단하며 자동 실무 인증을 의미하지 않습니다.</p><a class="button secondary" href="progress.html">내 기록 정리하기</a></section>`;
  }
  if (page === "progress") {
    const done = LESSONS.filter((l) => record(l.id).done);
    const notes = LESSONS.filter((l) => record(l.id).note);
    $("#progress-content").innerHTML =
      `<div class="progress-summary"><strong>${done.length}</strong> / ${LESSONS.length}개 수업 완료 표시</div>${TRACKS.map(
        (t) => {
          const list = trackLessons(t.id);
          const count = list.filter((x) => record(x.id).done).length;
          return `<section class="course-group"><header><h2>${esc(t.name)}</h2><p>${count} / ${list.length} 완료</p></header>${
            list
              .filter(
                (x) =>
                  record(x.id).done ||
                  record(x.id).note ||
                  record(x.id).draft !== undefined
              )
              .map((x) => lessonRow(x, list.indexOf(x)))
              .join("") ||
            '<p class="subtle">아직 남긴 기록이 없습니다. <a href="' +
              lessonUrl(list[0].id) +
              '">첫 수업 열기</a></p>'
          }</section>`;
        }
      ).join(
        ""
      )}<section><h2>내 메모</h2>${notes.map((l) => `<h3><a href="${lessonUrl(l.id)}#notes">${esc(l.title)}</a></h3><pre class="note-summary">${esc(record(l.id).note)}</pre>`).join("") || '<p class="subtle">각 수업의 마지막에서 내 말로 설명을 적어 보세요.</p>'}</section>`;
    let legacyCount = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (/^vibe-study-\d+-done$/.test(k) && localStorage.getItem(k) === "yes")
          legacyCount++;
      }
    } catch {}
    $("#legacy-records").textContent =
      `이 브라우저에서 확인한 이전 날짜별 복습 완료 표시는 ${legacyCount}개입니다. 새 과정과 단원이 달라 자동으로 완료 상태를 옮기지는 않습니다.`;
    $("#export-progress").addEventListener("click", () => {
      const legacy = {};
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (/^vibe-study-\d+-(draft|memo|done)$/.test(k))
            legacy[k] = localStorage.getItem(k);
        }
      } catch {}
      download(
        JSON.stringify(
          {
            format: "vibe-academy-backup",
            version: 2,
            exported: new Date().toISOString(),
            state,
            legacy
          },
          null,
          2
        ),
        "바이브코더-학습기록.json",
        "application/json"
      );
      $("#backup-status").textContent =
        "현재 기록으로 백업 파일을 만들었습니다. 안전한 위치에 보관하세요.";
    });
    $("#import-progress").addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      try {
        if (file.size > 8 * 1024 * 1024) throw new Error("백업 파일이 너무 큽니다.");
        const data = JSON.parse(await file.text());
        if (
          data.format !== "vibe-academy-backup" ||
          data.state?.version !== 2 ||
          !data.state.lessons ||
          typeof data.state.lessons !== "object"
        )
          throw new Error("이 사이트의 백업 형식이 아닙니다.");
        const incoming = {};
        for (const l of LESSONS) {
          const r = data.state.lessons[l.id];
          if (!r || typeof r !== "object") continue;
          incoming[l.id] = {
            done: r.done === true,
            note: typeof r.note === "string" ? r.note.slice(0, 200000) : "",
            checks: {}
          };
          if (typeof r.draft === "string")
            incoming[l.id].draft = r.draft.slice(0, 1000000);
          for (let i = 0; i < l.checks.length; i++)
            incoming[l.id].checks[i] = r.checks?.[i] === true;
        }
        if (
          !confirm(
            `${Object.keys(incoming).length}개 수업의 백업을 가져올까요? 같은 수업의 현재 메모·코드·진도를 백업 내용으로 바꿉니다. 필요하면 먼저 현재 기록을 백업하세요.`
          )
        )
          return;
        state.lessons = { ...state.lessons, ...incoming };
        if (LESSONS.some((x) => x.id === data.state.last)) state.last = data.state.last;
        if (!persist())
          throw new Error("브라우저 저장이 제한되어 적용하지 못했습니다.");
        if (data.legacy && typeof data.legacy === "object")
          for (const [k, v] of Object.entries(data.legacy)) {
            if (/^vibe-study-\d+-(draft|memo|done)$/.test(k) && typeof v === "string") {
              try {
                localStorage.setItem(k, v);
              } catch {}
            }
          }
        location.reload();
      } catch (error) {
        $("#backup-status").textContent = `가져오지 못했습니다: ${error.message}`;
      } finally {
        event.target.value = "";
      }
    });
  }
})();
