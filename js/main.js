"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-number");
const tip = document.querySelector(".js-tip");
const btn = document.querySelector(".js-btn");
const attempts = document.querySelector(".js-attempts");
const valueNumber = parseInt(number.value);
let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const generatedNumber = generatorNumber(100);

function generatorNumber() {
  const randomNumber = getRandomNumber(100);
  console.log(`Mi número aleatorio es ${randomNumber}`);
  return randomNumber;
}

function generatorTips(generatedNumber) {
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
}

function counterAttempts(generatedNumber) {
  if (generatedNumber !== "") {
    let sumCounter = counter++ + 1;
    attempts.innerHTML = `Número de intentos: ${sumCounter}`;
  }
}

function handleClick(event) {
  generatorTips(generatedNumber);
  counterAttempts();
}

btn.addEventListener("click", handleClick);
