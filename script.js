document.addEventListener('DOMContentLoaded', () => {
  const greetingBtn = document.querySelector('#start');
  const memoryBtn = document.querySelector('#memoryBtn');
  const memoryOutput = document.querySelector('#memoryOutput');

  greetingBtn.addEventListener('click', () => {
    let name = prompt("Привіт! Як до тебе звертатися?");

    if (!name || !name.trim()) {
      name = 'друже';
    }

    const activity = prompt(
      `Раді тебе бачити, ${name}!\n` +
      'Що асоціюється у тебе з сімʼєю?\n' +
      '1 — Любов\n' +
      '2 — Підтримка\n' +
      '3 — Традиції\n' +
      'Введи номер:'
    );

    if (activity === '1') {
      alert('Так! Любов — серце кожної родини. 💖');
    } else if (activity === '2') {
      alert('Підтримка робить сімʼю справжньою командою. 🤝');
    } else if (activity === '3') {
      alert('Традиції створюють найтепліші спогади. ✨');
    } else {
      alert('Головне, що сімʼя — це місце сили та добра.');
    }
  });

  memoryBtn.addEventListener('click', () => {
    const memory = prompt('Поділись коротким сімейним спогадом:');

    if (memory && memory.trim()) {
      memoryOutput.textContent = `Ваш спогад: "${memory.trim()}"`;
    } else {
      memoryOutput.textContent = 'Спогад не додано, але у вас ще все попереду 💛';
    }
  });
});
