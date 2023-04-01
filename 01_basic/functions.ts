// Типизация аргументов функций

function logBrtMsg(isBirthDay: boolean, name: string, age: number): string {
    if (isBirthDay) {
        return `Congrat ${name.toUpperCase()}, age: ${age + 1}`;
    } else {
        return 'Error';
    }
}

let congrat = logBrtMsg(true, 'Mick', 46);

console.log(congrat);
