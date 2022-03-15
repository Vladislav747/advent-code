import { readToString } from "../stdin";

async function run() {
    // вопросительный знак в regex splits text by \r\n or \n
    // \r - Соответствует символу возврата каретки 
    const lines = await readToString().then(res => res.trim().split(/\r?\n/))
    
    let accumulator = 0;
    let current = 0;
    let executed = new Set<number>();
    
    //Так как current подается следующим то мы 
    // продолжаем цикл пока нет следующего элемента
    while (lines.length !== current) {
        if (executed.has(current)) {
            break;
        }

        executed.add(current);
        const [nextAcc, next] = execute(lines[current], accumulator, current);
        accumulator = nextAcc;
        current = next;
    }

    return accumulator;
}

function execute(line: string, accumulator: number, current: number): [number, number] {
    // \s - Соответствует одиночному символу пустого пространства, включая пробел, табуляция, прогон страницы, перевод строки
    const [instruction, digit] = line.split(/\s/);
    switch (instruction) {
        //инструкция nop - ничего не делаем просто переходим к следующей инструкции
        case "nop":
            return [accumulator, current + 1];
        //инструкция acc - переходим к следующей инструкции и плюсование цифры к общему значению
        case "acc":
            return [accumulator + parseInt(digit), current + 1];
        case "jmp":
            return [accumulator, current + parseInt(digit)];
        default:
            throw new Error(`Unknow command: ${instruction} at line ${current}: ${line}`);
    }
}

run().then(console.log);
