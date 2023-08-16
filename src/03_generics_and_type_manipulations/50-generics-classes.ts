// обобщенные классы - абстрактные идентификаторы при создании экземпляра класса будут заменены чем угодно

class User<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    }

    // методы класса могут быть дженериками
    sayMyFullName<T>(surname: T) {
        if (typeof surname !== 'string') {
            console.log(`I have only ${this.name}`);
        } else {
            console.log(`I'm ${this.name} ${surname}`);
        }
    }
}

const user = new User('Mick', 47);
user.sayMyFullName('Yurievich');

const nameData = 'Bob';
const ageData = 42;

const user2 = new User<string, number>(nameData, ageData);

// наследование обобщенных классов
class AdminUser<T> extends User<string, number> {
    rules: T;
    constructor(name: string, age: number, rules: T) {
        super(name, age);
        this.rules = rules;
    }
}

const admin = new AdminUser<boolean>('Mick', 47, true);
console.log(
    `Admin is ${admin.name} ${admin.age} authorization: ${admin.rules}`
);

export {};
