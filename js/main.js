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
let startInterval = 0;

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

// Старт игры 
const startGame = () => {

  // Таймер обратного отсчета + конец игры
  if (startInterval === 0) {
    // console.log(`interval`);
    let timerMin = setInterval(() => {
      if (countTimer < 0) {
        clearInterval(timerMin);
        setTimeout(() => {
          box.style.display = 'block';
          box.classList.add('game-over');
          box.innerHTML = `<img src="image/over.png"><br><br>YOUR SCORE = ${count}`;
          // console.log(`game over`);
        }, 0);
      } else {
        let sec = Math.floor(countTimer % 60);
        let min = Math.floor(countTimer / 60 % 60);
        let timerShow = `${('0' + min).slice(-2)}:${('0' + sec).slice(-2)}`;
        console.log(timerShow);
        timer.innerText = timerShow;
        countTimer--;
      }
    }, 1000);
    startInterval = 1;
  };
  
  // Рандомный елемент из масива
  let randomNumber = randomInteger(0, (boxAll.length - 1));
  let randomElement = boxAll[randomNumber];
  randomElement.classList.add('cub-blue');

  // Счетчик кливов на квадрат + изменение цвета
  const boxIvent = () => {
    randomElement.removeEventListener('click', startGame);
      count++;
      inp.innerHTML = count;
      // Удаление квадрата при клике мышки
      randomElement.classList.remove('cub-blue');
      randomElement.removeEventListener('click', boxIvent);
    };
    
    randomElement.addEventListener('click', startGame);
    randomElement.addEventListener('click', boxIvent);
  };

btn.addEventListener('click', startGame);





