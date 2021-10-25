// Сделать игру со счётчиком кликов на квадраты.
// последовательность выполнения
// 1. Создаем HTML без квадратиков внутри
// 2. Генерируем квадратики с помощью гридов и js
// 3. Написать функцию события в которой будут рандомно в одном из квадратов появляется класс с синим цветом при нажатии на кнопку старт. У этого квадрата добавить свое событие клика
// 4. Написать отдельную функцию для события клика на квадрат. В этой функции мы убираем голубой цвет, увеличиваем очки и удаляем событие КЛИКА НА КВАДРАТ. потом снова запускаем функцию события которое было при старте кнопки.
// 5. Внутри события старта кнопки седлайте условие так чтобы ровно один раз в начале игры запустился таймаут на 60 сек. По завершению таймаута у нас меняться HTML главного блока на gameover и выводим счёт
// 6. Обработать это с функцией таймера

// Получаем доступ к необходимым узлам
const game = document.querySelector('.game');
const inp = document.querySelector('.inp');
const btn = document.querySelector('.button');
const timer = document.querySelector('.timer');
const box = document.querySelector('.box');
let count = 0;
let countTimer = 5;

// Генерируем поле из 100 квадратов
for (let i = 0; i < 99; i++) {
  let netBox = document.createElement('div');
  netBox.className ='box-inner';
  box.appendChild(netBox);
};

// Массив квадратов
const boxAll = document.querySelectorAll('.box-inner');

// Рандомайзер
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция появления синего квадрата 
const startGame = () => {

 // Таймер обратного отсчета
    const timerMin = setInterval(() => {
      let sec = Math.floor(countTimer % 60);
      let min = Math.floor(countTimer / 60 % 60);
      let timerShow = `${('0' + min).slice(-2)}:${('0' + sec).slice(-2)}`;
      timer.innerText = timerShow;
      countTimer--;
      if (countTimer < 0) {
        console.log(`Останавливаем таймер`)
        clearInterval(timerMin);
      }
    }, 1000);

     // Конец 
    const gameOver = () => {
      if (count === 0) {
        box.innerHTML = `SCORE`;
        console.log(`Останавливаем таймер2`)
      }
    };
   setTimeout(gameOver, 1000);
  

    // Рандомный елемент из масива
    let randomNumber = randomInteger(0, (boxAll.length - 1));
    boxAll[randomNumber].classList.add('cub-blue');

  // Счетчик кливов на мяч + изменение цвета
  const boxIvent = () => {
    boxAll[randomNumber].removeEventListener('click', startGame);
      count++;
      inp.innerHTML = count;
      // Удаление квадрата при клике мышки
      boxAll[randomNumber].classList.remove('cub-blue');
      boxAll[randomNumber].removeEventListener('click', boxIvent);
    };
    boxAll[randomNumber].addEventListener('click', startGame);
    boxAll[randomNumber].addEventListener('click', boxIvent);
  };

btn.addEventListener('click', startGame);





