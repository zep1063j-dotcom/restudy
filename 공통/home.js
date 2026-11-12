(() => {
 const cards = [...document.querySelectorAll('.lesson-card')];
 let count = 0;
 for (const card of cards) {
   try { if (localStorage.getItem(`vibe-study-${card.dataset.day}-done`) === 'yes') { card.querySelector('.completion').textContent = '✓ 복습 완료'; count++; } } catch {}
 }
 document.querySelector('#progress').textContent = `확인된 23일의 학습 · 복습 완료 ${count} / 23`;
 document.querySelector('#search').addEventListener('input', event => {
   const keyword = event.target.value.trim().toLowerCase();let shown = 0;
   for (const card of cards) {
     card.hidden = !`${card.textContent} ${Number(card.dataset.day)>=27 ? "React 리액트" : ""} ${card.dataset.day} day${card.dataset.day.padStart(2,'0')}`.toLowerCase().includes(keyword);
     if (!card.hidden) shown++;
   }
   document.querySelector('#no-results').hidden = shown !== 0;
 });
})();
