// Не нужно явно указывать (аннотировать) типы, если это может самостоятельно сделать вывод типов TS (что получается не всегда).

let income; // тип any
income = 7000;

let salary: number; // тип number
salary = 5000;

const isOK = true;
let movement: string | boolean = false;

if (isOK) {
    movement = 'moving';
}

// Если создавать переменные с примитивными типами через const, то вывод типов определит их как литерал, а если через let - то как общий тип (string, number, boolean ect.)

const role = 'admin'; // тип 'admin'
let role2 = 'admin'; // тип string
