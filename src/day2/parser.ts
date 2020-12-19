/**
 * Разпарсить данные
 * @param line - строка для обработки
 */
export const parse = (line: string) => {
    
    // console.log(line.split(/:? /), "line.split")
    /*
        Разделим строку - разделитель пробел и символ :
        Если разделитель найден, он удаляется из строки, а подстроки возвращаются в массиве.
        letter - буква для проверка пароля
        password -  сам пароль
    */
    const [bounds, letter, password] = line.split(/:? /);
    // left - левое знач оно ж минимальное
    // right - правое оно же максимальное
    const [left, right] = bounds.split("-").map((x) => parseInt(x, 10));
  
    return {
      left,
      right,
      letter,
      password,
    };
  };
  
  /**
 * Разпарсить данные - второй способ
 * @param line - строка для обработки
 */
  export const parse1 = (line: string) => {
      /*
        Разделим строку - разделитель пробел, символ :, символ -
        Если разделитель найден, он удаляется из строки, а подстроки возвращаются в массиве.
        letter - буква для проверка пароля
        password -  сам пароль
    */
    const [, left, right, letter, password] = line.match(
      /(\d+)-(\d+) (\w+): (\w+)/
    )!;
  
    return {
      left: parseInt(left, 10),
      right: parseInt(right, 10),
      letter,
      password,
    };
  };