import { readToString } from "../stdin";
const importantFieldNames = [];


/**
 * Разпарсить данные паспорта
 * @param input - строка для обработки
 */
function parsePassport (input: string):any {
    
  const fields = input.split(/\s/);
  const allFields = fields.map((field) => field.split(":"));
  const importantFields = allFields.filter(([name, value]) => importantFieldNames.has(name));
  return Object.fromEntries(importantFields)
};
  
  /**
 * Разпарсить данные - второй способ
 * @param line - строка для обработки
 */
  export async function getPassports (){
     
    const input = await readToString();
    //Разрыв строки
    const documents = input.split("\n\n");
    return documents.map(parsePassport);
  };