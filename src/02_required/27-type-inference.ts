// вывод типов

// переменная так и останется типи any
let salary;
salary = 500;

// указание аннотации избавит от проблем
let salary2: number;
salary2 = 500;

// конфликт вывода типов с логикой кода
const isOk = true;
// let movement = false
let movement: boolean | string = false;

if (isOk) {
    movement = 'moving';
}

export {};
