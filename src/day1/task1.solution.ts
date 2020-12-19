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

    //Квадратичная сложность
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        
        if (input[i] + input[j] === YEAR) {
          return input[i] * input[j];
        }
      }
    }
}

calc().then(console.log);
