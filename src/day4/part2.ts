import { getPassports, importantFieldNames } from "./parser";

/**
 * Проверка что год валиден(4 цифры)
 * @param year 
 */
function isYear(year) {
    const yearRegex = /^\d{4}$/;
    return yearRegex.test(year);
}

/**
 * Проверка что год входит в определенные интервал
 * @param number - год для проверки 
 *  @param min - нижняя граница год
 *  @param max - верхняя граница год
 */
function isInRange(number: number, min: number, max: number) {
    return number >= min && number <= max;
}

/**
 * Если количество ключей совпадает с количеством ключей в необходимых полях
 * @param passport 
 */
function hasAllFields(passport) {
    return Object.keys(passport).length === importantFieldNames.size;
}

/**
 * Цвет валиден
 * @param color 
 */
function isValidHairColor(color: string) {
    const hairColorRegex = /^\[a-f0-9]{6}$/;
    return hairColorRegex.test(color);

}

/**
 * Высота валидна?
 * 
 * @param height 
 */
function isValidHeight(height: string) {
    const heightRegex = /^\d+(cm|in)$/;
    if (!heightRegex.test(height)) {
        return false;
    }
    if (height.endsWith("cm")) {
        const value = parseInt(height, 10);
        return isInRange(value, 150, 193);
    }
    if (height.endsWith("in")) {
        const value = parseInt(height, 10);
        return isInRange(value, 59, 76);
    }


}

function isValidEyeColor(color) {
    const eyeColors = new Set(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"])
    return eyeColors.has(color);
}

function isValidPid(pid) {
    const pidRegex = /^\d{9}$/;
    return pidRegex.test(pid);
}



/**
 * Проверить на валидность каждое отдельное поле
 * @param name 
 * @param value 
 */
function isValidField(name: any, value: any) {
    switch (name) {
        //byr(Birth year) - four digits; at least between 1920 and 2002
        case "byr":
            return isYear(value) && isInRange(parseInt(value, 10), 1920, 2002);

        //iyr(Issue year) - four digits; at least between 2010 and 2020
        case "iyr":
            return isYear(value) && isInRange(parseInt(value, 10), 2010, 2020);

        //eyr(Expiration year) - four digits; at least between 2020 and 2030
        case "eyr":
            return isYear(value) && isInRange(parseInt(value, 10), 2020, 2030);

        //hgt(Height) - a number followed
        //If cm, the number be at least 150 and most 193
        //If in the number be at least 59 and most 76
        case "hgt":
            return isValidHeight(value);

        //hcl(Hair color) - a # followed by exactly six characters 0-9 or a-f 
        case "hcl":
            return isValidHairColor(value);
        //ecl(Eye color) 
        case "ecl":
            return isValidEyeColor(value);

        //pid
        case "pid":
            return isValidPid(value);

        default:
            return false;
    }
}



function allFieldsAreValid(passport) {
    for (const [name, value] of Object.entries(passport)) {
        if (!isValidField(name, value)) {
            return false;
        }

    }
    return true;
}



function isValidPassport(passport) {
    return hasAllFields(passport) && allFieldsAreValid(passport);
}

async function main() {
    const passports = await getPassports();
    const validCount = passports.filter(isValidPassport).length;

    console.log(validCount);

}

main();