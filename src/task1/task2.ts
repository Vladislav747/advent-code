import { readToString } from "../stdin";

const YEAR = 2020;

async function calc() {
  const input = await readToString().then(res => res
    .trim()
    .split("\n")
    .map(i => parseInt(i, 10)));

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[i] + input[j] + input[k] === YEAR) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
}

calc().then(console.log);
