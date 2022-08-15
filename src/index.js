#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const randomNumber = (last) => Math.ceil(Math.random() * last);

export const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name? ');
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
