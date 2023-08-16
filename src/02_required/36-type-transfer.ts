// создавать литералы при помощи конструкторов не следует - это может привести к непонятным ошибкам
const x = 500;
const y = new Number(500);
x == y; // true
x === y; // false

const num = 5; // type 5
const num2: number = 5; // type number
const num3 = new Number(5); // type Number
const num4 = Number(5); // tuype number

export {};
