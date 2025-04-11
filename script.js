document.addEventListener('DOMContentLoaded', () => {
    const pads = document.querySelectorAll('.drum-pad');
    const display = document.getElementById('display');
  
    // Воспроизведение звука + отображение имени
    function playSound(key) {
      const pad = Array.from(pads).find(btn => btn.textContent.trim().toUpperCase() === key.toUpperCase());
      if (pad) {
        const audio = pad.querySelector('audio');
        audio.currentTime = 0;
        audio.play();
  
        // Анимация
        pad.classList.add('active-orange');
        setTimeout(() => pad.classList.remove('active-orange'), 150);
  
        // Обновление display
        display.textContent = pad.id;
      }
    }
  
    // Клик по кнопке
    pads.forEach(pad => {
      pad.addEventListener('click', () => {
        const key = pad.textContent.trim();
        playSound(key);
      });
    });
  
    // Нажатие на клавишу
    document.addEventListener('keydown', (event) => {
      playSound(event.key);
    });
  });
  