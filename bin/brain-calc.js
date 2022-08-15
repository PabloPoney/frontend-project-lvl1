#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { acquaintance, gameLogic, randomNumber } from '../src/index.js';

const discription = 'What is the result of the expression?';
const randomSign = () => {
  const signs = ['+', '-', '*'];
  return signs[randomNumber(2, 0)];
};

const calc = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const gameStep = () => {
  const num1 = randomNumber(25);
  const num2 = randomNumber(25);
  const sign = randomSign();
  const expression = `${num1} ${sign} ${num2}`;
  const answer = calc[sign](num1, num2);
  console.log(`Question: ${expression}`);
  const userAns = readlineSync.question('Your asnswer: ');
  if (Number(userAns) !== answer) {
    console.log(`${userAns} is wrong answer ;(. Correct answer was ${answer}.`);
    return false;
  }
  console.log('Correct');
  return true;
};

const name = acquaintance();
gameLogic(name, discription, gameStep);
