(() => {
  'use strict';
  const day = document.body.dataset.day;
  const editor = document.querySelector('#code');
  const startCode = editor.value;
  const frame = document.querySelector('#preview');
  const output = document.querySelector('#console');
  const saveStatus = document.querySelector('#save-status');
  const memo = document.querySelector('#memo');
  const prefix = `vibe-study-${day}-`;
  let token = '';
  let lines = [];
  function read(key) { try { return localStorage.getItem(key); } catch { return null; } }
  function write(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } }
  const draft = read(prefix + 'draft');
  if (draft !== null) { editor.value = draft; saveStatus.textContent = '지난번 수정한 코드 복원됨'; }
  memo.value = read(prefix + 'memo') || '';
  function mark() { document.querySelector('#complete').textContent = read(prefix + 'done') === 'yes' ? '✓ 복습 완료 (다시 누르면 해제)' : '복습 완료 표시'; }
  mark();
  document.querySelector('#complete').addEventListener('click', () => {
    if (!write(prefix + 'done', read(prefix + 'done') === 'yes' ? 'no' : 'yes')) { saveStatus.textContent = '브라우저가 저장을 제한해 진도를 저장하지 못했습니다.'; return; }
    mark();
  });
  editor.addEventListener('input', () => { saveStatus.textContent = write(prefix + 'draft', editor.value) ? '내 브라우저에 코드 자동 저장됨' : '저장 제한됨 · 파일로 받아 보관하세요'; });
  memo.addEventListener('input', () => { document.querySelector('#memo-status').textContent = write(prefix + 'memo', memo.value) ? '메모 자동 저장됨' : '브라우저 저장 제한됨'; });
  document.querySelector('#format-code').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    button.disabled = true;
    const before = editor.value;
    try {
      const plugins = Object.values(window.prettierPlugins || {});
      if (!window.prettier || !plugins.length) throw new Error('정리 도구를 읽지 못했습니다. 페이지를 다시 열어 주세요.');
      const formatted = await window.prettier.format(before, {
        parser: 'html', plugins, tabWidth: 2, useTabs: false,
        printWidth: 70, htmlWhitespaceSensitivity: 'css',
        embeddedLanguageFormatting: 'auto', trailingComma: 'none', arrowParens: 'always'
      });
      if (editor.value !== before) {
        saveStatus.textContent = '정리 중 코드가 바뀌어 적용하지 않았습니다. 다시 눌러 주세요.';
        return;
      }
      editor.value = formatted;
      saveStatus.textContent = write(prefix + 'draft', formatted)
        ? '두 칸 들여쓰기와 줄바꿈 정리됨 · 실행을 눌러 확인하세요'
        : '들여쓰기 정리됨 · 저장이 제한되어 파일로 보관해 주세요';
    } catch (error) {
      saveStatus.textContent = '정리하지 못했습니다. 태그나 괄호의 짝을 먼저 확인해 주세요.';
      log('코드 정리 안내: ' + error.message);
    } finally {
      button.disabled = false;
    }
  });
  document.querySelector('#reset').addEventListener('click', () => {
    if (editor.value !== startCode && !confirm('편집 중인 코드를 시작 코드로 바꿀까요? 필요하면 먼저 ‘내 코드 파일로 받기’를 눌러 보관하세요.')) return;
    editor.value = startCode; write(prefix + 'draft', startCode); saveStatus.textContent = '시작 코드로 되돌림'; run();
  });
  function log(line) { lines.push(line); if (lines.length > 120) lines.shift(); output.textContent = lines.join('\n'); }
  window.addEventListener('message', event => {
    if (event.source !== frame.contentWindow || !event.data || event.data.token !== token) return;
    if (event.data.type === 'study-log') log(String(event.data.message).slice(0, 4000));
    if (event.data.type === 'study-title') document.querySelector('#frame-title').textContent = `예제 문서 제목: ${String(event.data.message).slice(0, 150)}`;
  });
  function run() {
    token = Math.random().toString(36).slice(2);
    lines = []; output.textContent = '실행 중… (console.log가 있으면 여기에 표시됩니다)';
    document.querySelector('#frame-title').textContent = '예제 문서 준비 중…';
    const base = new URL('.', window.location.href).href;
    const bridge = `<base href="${base}"><script>(function(){
      const token=${JSON.stringify(token)};
      function send(type,message){parent.postMessage({token,type,message},'*');}
      function str(value){try{return typeof value==='string'?value:JSON.stringify(value);}catch{return String(value);}}
      ['log','warn','error'].forEach(type=>{const original=console[type].bind(console);console[type]=function(...args){if(!(type==='warn' && String(args[0]).includes('in-browser Babel transformer'))) send('study-log',type+': '+args.map(str).join(' '));original(...args);};});
      window.addEventListener('error',event=>send('study-log','오류: '+event.message));
      window.addEventListener('unhandledrejection',event=>send('study-log','비동기 오류: '+str(event.reason?.message||event.reason)));
      function title(){send('study-title',document.title);}
      window.addEventListener('load',()=>{title();new MutationObserver(title).observe(document.head,{childList:true,subtree:true,characterData:true});});
    })();<\/script>`;
    const code = editor.value;
    frame.srcdoc = /<head\b[^>]*>/i.test(code) ? code.replace(/<head\b[^>]*>/i, x => x + bridge) : bridge + code;
  }
  document.querySelector('#run').addEventListener('click', run);
  document.querySelector('#narrow').addEventListener('click', () => { frame.style.width = '360px'; });
  document.querySelector('#wide').addEventListener('click', () => { frame.style.width = '800px'; });
  frame.style.width = '100%';
  document.querySelector('#download').addEventListener('click', () => {
    const blob = new Blob([editor.value], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = `DAY${String(day).padStart(2,'0')}_내코드.html`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  run();
})();
