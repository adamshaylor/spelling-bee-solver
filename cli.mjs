import solve from './solve.mjs';

const [
  nodePath,
  modulePath,
  keyLetter,
  otherLetters
] = process.argv;

const solutions = solve(keyLetter, otherLetters.split(''));

console.log(solutions);