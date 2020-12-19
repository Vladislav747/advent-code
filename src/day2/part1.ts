import { readToLinesIterator } from "../stdin";
import { parse } from "./parser";

async function solvePart1() {
    //Число подходящих паролей
  let validPasswordsCount = 0;
  // Начинаем перебирать пароли из файла txt
  //Дожидаемся окончания перебора
  for await (const line of readToLinesIterator()) {
      //Получиили наше распарсованные данные
    const { left: from, right: to, letter, password } = parse(line);
    /*
        Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
        Если регулярное выражение содержит флаг g, метод вернёт массив, содержащий все сопоставления.
        Таким образом получили кол-во раз скоко встречается искомая буква в пароле
    */
    const letterCount = (password.match(new RegExp(letter, "g")) || []).length;

    /**
     * Проверяем что кол-во букв совпадает 
     * тому кол-ву которое нужно по условиям строки
     */
    if (from <= letterCount && letterCount <= to) {
        //Все хорошо ? - увеличиваем кол-во правильных паролей
      validPasswordsCount++;
    }
  }
  return validPasswordsCount;
}

solvePart1().then(console.log);