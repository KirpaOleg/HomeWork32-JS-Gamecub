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


// Генерируем поле из 100 квадратов
for (let i = 0; i < 99; i++) {
  let netBox = document.createElement('box-inner');
  netBox.className ='box-inner';
  box.appendChild(netBox);
};

// Рандомайзер
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция появления синего квадрата 
btn.addEventListener('click', () => {
  const boxAll = document.querySelectorAll('.box-inner');
  // console.log(boxAll);
  randomNumber = randomInteger(0, boxAll.length);
  // console.log(randomNumber);
  boxAll[randomNumber].classList.add('cub-blue');

  // Счетчик кливов на мяч + изменение цвета
  let count = 0;
  boxAll[randomNumber].addEventListener('click', () => {
    count++;
    inp.innerHTML = count;
    boxAll[randomNumber].addEventListener('mousedown', () => {
      boxAll[randomNumber].classList.add('cub-red');
    });
    boxAll[randomNumber].addEventListener('mouseup', () => {
      boxAll[randomNumber].classList.remove('cub-red');
    });
  });
});








  
