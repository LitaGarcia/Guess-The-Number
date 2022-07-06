"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-number");
const tip = document.querySelector(".js-tip");
const btn = document.querySelector(".js-btn");
const attempts = document.querySelector(".js-attempts");
const valueNumber = parseInt(number.value);
let counter = 0;

const getRandomNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

const generatorNumber = () => {
  const randomNumber = getRandomNumber(100);
  console.log(`Mi número aleatorio es ${randomNumber}`);
  return randomNumber;
};

const generatedNumber = generatorNumber(100);

const generatorTips = (generatedNumber) => {
  const valueNumber = parseInt(number.value);
  if (valueNumber > generatedNumber) {
    tip.innerHTML = "Demasiado alto.";
  }
  if (valueNumber < generatedNumber) {
    tip.innerHTML = "Demasiado bajo.";
  }
  if (valueNumber === generatedNumber) {
    tip.innerHTML = "Has ganado campeona!!!!";
  }
  if (valueNumber > 100 || valueNumber < 1) {
    tip.innerHTML = "El número debe estar entre 1 y 100.";
  }
};

const counterAttempts = () => {
  const valueNumber = number.value;
  if (valueNumber !== "") {
    counter++;
    attempts.innerHTML = `Número de intentos: ${counter}`;
  }
};

function handleClick(event) {
  generatorTips(generatedNumber);
  counterAttempts();
}

btn.addEventListener("click", handleClick);
