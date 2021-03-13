import { getPassports, importantFieldNames, importantFieldNamesArr } from "./parser";

function isValidPassport(passport) {
    //Если ключи совпадает с  ключами в необходимых полях
    return Object.keys(passport).sort().join() == importantFieldNamesArr.sort().join();
}


async function main() {
    const passports = await getPassports();

    const validCount = passports.filter(isValidPassport).length;
    console.log(validCount);
}


main();