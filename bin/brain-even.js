#!/usr/bin/env node

import _ from 'lodash';
import readlineSync from 'readline-sync';
import { acquaintance, gameLogic, randomNumber } from '../src/index.js';

const isItEven = (num) => (((num % 2) === 0) ? 'yes' : 'no');

const discription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameStep = () => {
  const num = randomNumber(100);
  const even = isItEven(num);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your asnswer: ');
  if (answer.toLowerCase() !== even) {
    console.log(`${_.capitalize(answer)} is wrong answer ;(. Correct answer was ${even}.`);
    return false;
  }
  console.log('Correct');
  return true;
};

const name = acquaintance();
gameLogic(name, discription, gameStep);
