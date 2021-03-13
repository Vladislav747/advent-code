import { getPassports, importantFieldNames } from "./parser";

function isValidPassport(passport) {
    //Если количество ключей совпадает с количеством ключей в необходимых полях
    console.log(Object.keys(passport).length >= importantFieldNames.size);
    return Object.keys(passport).length >= importantFieldNames.size;
}


async function main() {
    const passports = await getPassports();

    const validCount = passports.filter(isValidPassport).length;
    console.log(validCount);
}


main();