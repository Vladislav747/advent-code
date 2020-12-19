import { readToString } from "../stdin";

const YEAR = 2020;

/**
 * Более изящное решение первый раз task1.solution.ts
 */
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


  const values = new Set();
  //Снизили сложность
  for (let i = 0; i < input.length; i++) {
    //Получем разность - заходим как бы с другого конца
    //Нам нужно найти то число 
    const diffNumber = YEAR - input[i];
    //И смотрим то которое и равно нашей разнице - проверяем даже из прошлых положенных в Set
    //Как только встреятся те у кого будет сумма 2020 то это и есть наш ответ.
    if (values.has(diffNumber)) {
      console.log(input[i], "input[i]");
      console.log(diffNumber, "diffNumber");
      return input[i] * diffNumber;
    }
    //Далее каждый раз добавляем каждое число в Set
    values.add(input[i]);
  }
}

calc().then(console.log);
