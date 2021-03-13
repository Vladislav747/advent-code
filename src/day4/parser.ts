import { readToString } from "../stdin";
export const importantFieldNames = new Set([
  "byr", "iyr", "hgt", "hcl", "ecl", "pid", "cid"
]);


/**
 * Разпарсить данные паспорта
 * @param input - строка для обработки
 */
function parsePassport(input: string): any {

  //Разбиваем строку на поля по пробелу или перносу строки

  const fields = input.split(/\s/);
  //Разбиваем все поля по двоеточию
  const allFields = fields.map((field) => field.split(":"));
  //Фильтруем только те значения которые должны быть в важных полях
  const importantFields = allFields.filter(([name, value]) => importantFieldNames.has(name));
  //@ts-ignore
  return Object.fromEntries(importantFields)
};

/**
 * 
*/
export async function getPassports() {

  const input = await readToString();
  // \n\n - Разрыв строки 
  const documents = input.split("\n\n");
  //Каждую из строк отправили на дальнейший парсинг
  return documents.map(parsePassport);
};