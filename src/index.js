#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const randomNumber = (max = 100, min = 1) => {
  const number = Math.random() * (max - min + 1) + min - 1;
  return Math.ceil(number);
};

export const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const gameLogic = (name, discription, gameFunc) => {
  console.log(discription);
  if (gameFunc() && gameFunc() && gameFunc()) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  console.log(`Let's try again, ${name}!`);
  gameLogic(name, discription, gameFunc);
};
