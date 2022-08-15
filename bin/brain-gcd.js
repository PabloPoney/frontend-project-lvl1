#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { acquaintance, gameLogic, randomNumber } from '../src/index.js';

const discription = 'Find the greatest common divisor of given numbers.';
const GCD = (a, b) => {
  if (b > a) return GCD(b, a);
  if (b === 0) return a;
  return GCD(b , a % b);
};


const gameStep = () => {
  const num1 = randomNumber(50);
  const num2 = randomNumber(50);
  const answer = GCD(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
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
