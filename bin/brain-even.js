#!/usr/bin/env node

import readlineSync from 'readline-sync';

let name;

const acquaintance = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
};

const randomNumber = () => Math.ceil(Math.random() * 100);

const isItEven = (num) => (((num % 2) === 0) ? 'yes' : 'no');

const questionStep = () => {
  const num = randomNumber();
  const even = isItEven(num);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your asnswer: ');
  if (answer.toLowerCase() !== even) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${even}.`);
    return false;
  }
  console.log('Correct');
  return true;
};

const question1 = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (questionStep() && questionStep() && questionStep()) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  console.log(`Let's try again, ${name}!`);
  question1();
};

acquaintance();
question1();
