import { readToLinesIterator } from "../stdin";
import { parse } from "./parser";

/**
 * В данном случае только один из символов должен соотв букве
 */
async function solvePart2() {
  let validPasswordsCount = 0;
  for await (const line of readToLinesIterator()) {
    const { left: pos1, right: pos2, letter, password } = parse(line);
    //Так как строка считается с 0 а в условиях задачи 
    const containsLetterInPos1 = password[pos1 - 1] === letter;
    const containsLetterInPos2 = password[pos2 - 1] === letter;
    //Проверяем что два одновременно условия не соблюдаются
    if (containsLetterInPos1 !== containsLetterInPos2) {
      validPasswordsCount++;
    }
  }
  return validPasswordsCount;
}

solvePart2().then(console.log);