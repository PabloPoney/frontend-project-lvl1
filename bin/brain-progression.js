#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { acquaintance, gameLogic, randomNumber } from '../src/index.js';

const discription = 'What number is missing in the progression?';
const makeProgress = () => {
  const arrLength = randomNumber(10, 5);
  const startItem = randomNumber(20, 0);
  const step = randomNumber(25, 1);
  const arr = [startItem];
  for (let i = 1; i < arrLength; i += 1) {
    arr.push(arr[i - 1] + step);
  }
  return arr;
};

const gameStep = () => {
  const arrProgress = makeProgress();
  const secretIndex = randomNumber(arrProgress.length - 1, 0);
  const answer = arrProgress[secretIndex];
  arrProgress[secretIndex] = '..';
  console.log(`Question: ${arrProgress.join(' ')}`);
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
