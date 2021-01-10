import { readToString } from "../stdin";

async function solvePart1() {
    const input = await readToString().then(res => res
        .trim()
        .split("\n"));
    //3 шага вперед 1 вниз
    const result = calculateNumberOfTrees(input, 3, 1);
    return result;
}

/**
 * Найти количество препятствий на
 * @param map 
 * @param xSteps 
 * @param ySteps 
 */
function calculateNumberOfTrees(map: string[], xSteps: number, ySteps: number) {
    //Длина это длина строки где есть препятствие - 32 клетки
    const width = map[0].length;
    let result = 0;
    let x = 0;
    let y = 0;
    //Пока не выйдем за пределы карты
    while (y < map.length) {
        if (map[y][x] == '#')
            result++;
        //Увеличиваем шаг на количество y шагов которые мы можем делать
        y += ySteps;
        //Ограничение длинной поля - так как поле может быть бесконечно по x
        //32 (width) в данном случае по модулю ограничивает что число в Х всегда будет меньше 32
        //Результат a % b – это остаток от целочисленного деления a на b
        x = (x + xSteps) % width;
    }
    return result;
}

solvePart1().then(console.log);