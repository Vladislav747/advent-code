import { readToString } from "../stdin";

async function solvePart2() {
    const input = (await readToString()).trim();

    let sum = 0;
    for (const group of input) {
        const answers = group.split('\n');
        const firstLetters = answers[0].split('');

        sum += firstLetters.filter(el => answers.every(a => a.includes(el))).length;

    }
    return sum;


}


solvePart2().then(console.log);