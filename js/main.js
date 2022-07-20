'use strict';

const numberInput = document.querySelector('.js-number');
const tipParagraph = document.querySelector('.js-tip');
const btnPlay = document.querySelector('.js-btn');
const attemptsParagraph = document.querySelector('.js-attempts');
const valueNumber = parseInt(numberInput.value);
let counter = 0;

const getRandomNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

const generateNumber = () => {
  const randomNumber = getRandomNumber(100);
  console.log(`Mi número aleatorio es ${randomNumber}`);
  return randomNumber;
};

const generatedNumber = generateNumber(100);
const renderTip = (message) => {
  tipParagraph.innerHTML = message;
};
const generateTips = (generatedNumber) => {
  const valueNumber = parseInt(numberInput.value);
  if (valueNumber > generatedNumber) {
    renderTip('Demasiado alto.');
  }
  if (valueNumber < generatedNumber) {
    renderTip('Demasiado bajo.');
  }
  if (valueNumber === generatedNumber) {
    renderTip('Has ganado campeona!!!!');
  }
  if (valueNumber > 100 || valueNumber < 1) {
    renderTip('El número debe estar entre 1 y 100.');
  }
};

const countAttempts = () => {
  const valueNumber = numberInput.value;
  if (valueNumber !== '') {
    counter++;
    attemptsParagraph.innerHTML = `Número de intentos: ${counter}`;
  }
};

const handleClick = (event) => {
  event.preventDefault();
  generateTips(generatedNumber);
  countAttempts();
};

btnPlay.addEventListener('click', handleClick);
