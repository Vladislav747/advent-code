import { readToString } from "../stdin";

const YEAR = 2020;

async function calc() {
  /**
   * Получить ввод данных
   * Мы получаем данные по одному числу из файла txt
   * Там они у нас расположены через /n элемент
   */
  const input = await readToString().then(res => res
    .trim()
    .split("\n")
    .map(i => parseInt(i, 10)));

    //Кубическая сложность
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
         /* 
          Найти из полученного массива чисел из файла txt
          Те числа кот-е в сумме дают 2020 и перемножаем их
          Только теперь 3 числа
        */
        if (input[i] + input[j] + input[k] === YEAR) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
}

calc().then(console.log);
