// JavaScript
document.addEventListener('DOMContentLoaded', () => {
     2	  const greetingBtn = document.querySelector('#start');
     3	  const welcomeMessage = document.querySelector('#welcomeMessage');
     4	  const memoryForm = document.querySelector('#memoryForm');
     5	  const memoryInput = document.querySelector('#memoryInput');
     6	  const memoryOutput = document.querySelector('#memoryOutput');
     7	  const memoryList = document.querySelector('#memoryList');
     8	
     9	  const greetings = [
    10	    'Сімʼя — це місце, де тебе завжди чекають 💛',
    11	    'Разом ми сильніші, тепліші та щасливіші 🤍',
    12	    'Найцінніші миті — ті, що проведені з рідними ✨'
    13	  ];
    14	
    15	  greetingBtn.addEventListener('click', () => {
    16	    const randomIndex = Math.floor(Math.random() * greetings.length);
    17	    welcomeMessage.textContent = greetings[randomIndex];
    18	  });
    19	
    20	  memoryForm.addEventListener('submit', (event) => {
    21	    event.preventDefault();
    22	
    23	    const text = memoryInput.value.trim();
    24	
    25	    if (!text) {
    26	      memoryOutput.textContent = 'Будь ласка, введіть спогад перед додаванням.';
    27	      return;
    28	    }
    29	
    30	    const item = document.createElement('li');
    31	    item.textContent = text;
    32	    memoryList.prepend(item);
    33	
    34	    memoryOutput.textContent = 'Спогад успішно додано 💫';
    35	    memoryInput.value = '';
    36	    memoryInput.focus();
    37	  });
    38	});
