function submitFeedback() {
    //Ваш код обработки данных формы, например, отправка на сервер
    //Заменить блок обратной связи на сообщение благодарности
    document.getElementById('feedback-card').innerHTML = '<p>Спасибо за отзыв!</p>';
}


let prevScrollPos = window.pageYOffset;
const menu = document.querySelector('.navigation-buttons');

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Листаем вверх
    menu.classList.remove('hidden');
  } else {
    // Листаем вниз
    menu.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
};


const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function setThemeMode(darkMode) {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
}

// Установка начальной темы в зависимости от предпочтений пользователя
setThemeMode(prefersDarkMode);

// Слушатель изменения темы в системе
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setThemeMode(e.matches);
});
