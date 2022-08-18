#!/usr/bin/env node

import _ from 'lodash';
import readlineSync from 'readline-sync';
import { acquaintance, gameLogic, randomNumber } from '../src/index.js';

const isItPrime = (num) => {
  if (num < 2) return 'no';
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const discription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const gameStep = () => {
  const number = randomNumber(5);
  const prime = isItPrime(number);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your asnswer: ');
  if (answer.toLowerCase() !== prime) {
    console.log(`${_.capitalize(answer)} is wrong answer ;(. Correct answer was ${prime}.`);
    return false;
  }
  console.log('Correct');
  return true;
};

const name = acquaintance();
gameLogic(name, discription, gameStep);
