"use strict";

const number = document.querySelector(".js-number");
const button = document.querySelector(".js-number");
const tip = document.querySelector(".js-tip");
const btn = document.querySelector(".js-btn");
const attempts = document.querySelector(".js-attempts");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function generatorTips() {
  const randomNumber = getRandomNumber(100);
  const valueNumber = parseInt(number.value);
  if (valueNumber > randomNumber) {
    tip.innerHTML = "Demasiado alto.";
  }
  if (valueNumber < randomNumber) {
    tip.innerHTML = "Demasiado bajo.";
  }
  if (valueNumber === randomNumber) {
    tip.innerHTML = "Has ganado campeona!!!!";
  }
  if (valueNumber > 100 || valueNumber < 1) {
    tip.innerHTML = "El número debe estar entre 1 y 100.";
  }
  console.log(randomNumber);
}

function handleClick(event) {
  generatorTips();
}

btn.addEventListener("click", handleClick);
